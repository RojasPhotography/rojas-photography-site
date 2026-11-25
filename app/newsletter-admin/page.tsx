'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import BeefreeSDK from '@beefree.io/sdk';

interface Draft {
  id: number;
  subject: string;
  created_at: string;
  updated_at: string;
}

interface SentNewsletter {
  id: number;
  subject: string;
  sent_at: string;
  created_at: string;
  stats?: { sent: number; opened: number; failed: number; openRate: number };
}

interface Subscriber {
  id: number;
  email: string;
  name: string | null;
  is_active: boolean;
  subscribed_at: string;
}

interface SequenceEmail {
  id: number;
  position: number;
  delay_days: number;
  subject: string;
  html_content: string | null;
  json_content: string | null;
  is_active: boolean;
  stats: { pending: number; sent: number };
}

export default function NewsletterAdmin() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const [subject, setSubject] = useState('');
  const [htmlContent, setHtmlContent] = useState('');
  const [jsonContent, setJsonContent] = useState('');
  const [currentDraftId, setCurrentDraftId] = useState<number | null>(null);

  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [showDrafts, setShowDrafts] = useState(false);

  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [showSubscribers, setShowSubscribers] = useState(false);
  const [subscriberSearch, setSubscriberSearch] = useState('');
  const [newSubscriberName, setNewSubscriberName] = useState('');
  const [newSubscriberEmail, setNewSubscriberEmail] = useState('');
  const [addSubscriberStatus, setAddSubscriberStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const [history, setHistory] = useState<SentNewsletter[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const [sequenceEmails, setSequenceEmails] = useState<SequenceEmail[]>([]);
  const [showSequence, setShowSequence] = useState(false);
  const [editingSequenceId, setEditingSequenceId] = useState<number | null>(null);
  const [sequenceSubject, setSequenceSubject] = useState('');
  const [sequenceSaveStatus, setSequenceSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [sequenceTestStatus, setSequenceTestStatus] = useState<Record<number, 'idle' | 'loading' | 'sent' | 'error'>>({});
  const [previewHtml, setPreviewHtml] = useState<string | null>(null);

  const [bee, setBee] = useState<BeefreeSDK | null>(null);
  const [editorReady, setEditorReady] = useState(false);

  // Unsaved-changes tracking. A ref so editor callbacks always see the latest value.
  const [isDirty, setIsDirty] = useState(false);
  const isDirtyRef = useRef(false);
  const markDirty = useCallback((dirty: boolean) => {
    isDirtyRef.current = dirty;
    setIsDirty(dirty);
  }, []);
  const [lastSavedAt, setLastSavedAt] = useState<Date | null>(null);
  const ignoreChangesUntil = useRef(0);

  // When we ask the editor to save, its onSave callback resolves this promise with
  // the CURRENT design. Test and Send use it, so they always match what's on screen.
  const saveResolver = useRef<((content: { json: string; html: string }) => void) | null>(null);

  const subjectRef = useRef(subject);
  const currentDraftIdRef = useRef(currentDraftId);
  const editingSequenceIdRef = useRef(editingSequenceId);
  const sequenceSubjectRef = useRef(sequenceSubject);
  useEffect(() => { subjectRef.current = subject; }, [subject]);
  useEffect(() => { currentDraftIdRef.current = currentDraftId; }, [currentDraftId]);
  useEffect(() => { editingSequenceIdRef.current = editingSequenceId; }, [editingSequenceId]);
  useEffect(() => { sequenceSubjectRef.current = sequenceSubject; }, [sequenceSubject]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'saving' | 'success' | 'error'>('idle');
  const [result, setResult] = useState('');
  const [testEmailStatus, setTestEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Stay signed in across refreshes (session cookie set by the server)
  useEffect(() => {
    fetch('/api/newsletter/auth')
      .then((res) => res.json())
      .then((data) => setAuthenticated(Boolean(data.authenticated)))
      .catch(() => {})
      .finally(() => setAuthChecked(true));
  }, []);

  // Warn before closing or refreshing the tab with unsaved work
  useEffect(() => {
    function onBeforeUnload(e: BeforeUnloadEvent) {
      if (!isDirtyRef.current) return;
      e.preventDefault();
      e.returnValue = '';
    }
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, []);

  function confirmDiscard(action: string) {
    if (!isDirtyRef.current) return true;
    return window.confirm(`You have unsaved changes. ${action} anyway and lose them?`);
  }

  function showError(message: string) {
    setStatus('error');
    setResult(message);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/newsletter/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setPassword('');
        setAuthenticated(true);
      } else {
        setAuthError('Incorrect password. Please try again.');
      }
    } catch {
      setAuthError('Connection error. Please try again.');
    } finally {
      setAuthLoading(false);
    }
  }

  async function handleLogout() {
    if (!confirmDiscard('Sign out')) return;
    await fetch('/api/newsletter/auth', { method: 'DELETE' });
    markDirty(false);
    window.location.reload();
  }

  // Any 401 means the session expired: send them back to the sign-in screen
  const api = useCallback(async (url: string, init?: RequestInit) => {
    const res = await fetch(url, init);
    if (res.status === 401) {
      setAuthenticated(false);
      throw new Error('Your session expired. Please sign in again.');
    }
    return res;
  }, []);

  const jsonInit = (method: string, body: unknown): RequestInit => ({
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const loadDrafts = useCallback(async () => {
    const res = await api('/api/newsletter/drafts');
    const data = await res.json();
    if (Array.isArray(data)) setDrafts(data);
  }, [api]);

  const loadSubscribers = useCallback(async () => {
    const res = await api('/api/newsletter/subscribers');
    const data = await res.json();
    if (Array.isArray(data)) setSubscribers(data);
  }, [api]);

  const loadSequence = useCallback(async () => {
    const res = await api('/api/newsletter/sequence');
    const data = await res.json();
    if (Array.isArray(data)) setSequenceEmails(data);
  }, [api]);

  const loadHistory = useCallback(async () => {
    const res = await api('/api/newsletter/drafts?status=sent');
    const data = await res.json();
    if (!Array.isArray(data)) return;

    const withStats = await Promise.all(
      data.map(async (item: SentNewsletter) => {
        try {
          const statsRes = await api(`/api/newsletter/stats?newsletter_id=${item.id}`);
          const stats = await statsRes.json();
          return { ...item, stats };
        } catch {
          return item;
        }
      })
    );
    setHistory(withStats);
  }, [api]);

  // Latest versions of the save handlers, for the editor's own Save button
  const handlersRef = useRef<{
    saveDraftWithContent: (json: string, html: string) => Promise<number | null>;
    saveSequenceEmailWithContent: (json: string, html: string) => Promise<boolean>;
  } | null>(null);

  useEffect(() => {
    if (!authenticated) return;
    loadDrafts().catch(() => {});
    loadSubscribers().catch(() => {}); // needed for the send confirmation count

    async function initEditor(template = {}) {
      try {
        const res = await fetch('/api/newsletter/beefree-token');
        if (!res.ok) throw new Error('Could not get an editor token');
        const token = await res.json();

        const config = {
          container: 'beefree-editor',
          language: 'en-US',
          trackChanges: true,
          onLoad: () => setEditorReady(true),
          onChange: () => {
            if (Date.now() < ignoreChangesUntil.current) return;
            markDirty(true);
          },
          onSave: (pageJson: string, pageHtml: string) => {
            setJsonContent(pageJson);
            setHtmlContent(pageHtml);

            // A save we asked for (Save / Test / Send buttons): hand the content back
            const resolve = saveResolver.current;
            if (resolve) {
              saveResolver.current = null;
              resolve({ json: pageJson, html: pageHtml });
              return;
            }

            // The editor's own Save button: save to whatever is open
            if (editingSequenceIdRef.current !== null) {
              handlersRef.current?.saveSequenceEmailWithContent(pageJson, pageHtml);
            } else {
              handlersRef.current?.saveDraftWithContent(pageJson, pageHtml);
            }
          },
          onSaveAsTemplate: () => {},
          onError: (error: unknown) => {
            console.error('Beefree error:', error);
            const pending = saveResolver.current;
            if (pending) saveResolver.current = null;
          },
        };

        const beeInstance = new BeefreeSDK(token);
        beeInstance.start(config, template);
        setBee(beeInstance);
      } catch (err) {
        console.error('Failed to init Beefree editor:', err);
        showError('The email editor could not load. Refresh the page to try again.');
      }
    }

    initEditor();
  }, [authenticated, loadDrafts, loadSubscribers, markDirty]);

  // Ask the editor for the current design. Rejects if the editor doesn't answer.
  function requestEditorSave(): Promise<{ json: string; html: string }> {
    return new Promise((resolve, reject) => {
      if (!bee || !editorReady) {
        reject(new Error('The editor is still loading. Give it a second and try again.'));
        return;
      }
      const timeout = setTimeout(() => {
        if (saveResolver.current) {
          saveResolver.current = null;
          reject(new Error('The editor did not respond. Please try again.'));
        }
      }, 15000);
      saveResolver.current = (content) => {
        clearTimeout(timeout);
        resolve(content);
      };
      bee.save();
    });
  }

  const BLANK_TEMPLATE = { page: { rows: [] }, comments: [] } as unknown as Parameters<BeefreeSDK['load']>[0];

  function loadIntoEditor(template: Parameters<BeefreeSDK['load']>[0]) {
    if (!bee) return;
    ignoreChangesUntil.current = Date.now() + 1500;
    bee.load(template);
  }

  function resetComposer() {
    setCurrentDraftId(null);
    currentDraftIdRef.current = null;
    setSubject('');
    setHtmlContent('');
    setJsonContent('');
    setLastSavedAt(null);
    markDirty(false);
  }

  function newNewsletter() {
    if (!confirmDiscard('Start a new newsletter')) return;
    setEditingSequenceId(null);
    resetComposer();
    loadIntoEditor(BLANK_TEMPLATE);
    markDirty(false);
    setResult('');
    setStatus('idle');
  }

  async function loadDraft(draft: Draft) {
    if (!confirmDiscard('Open this draft')) return;
    if (!bee || !editorReady) {
      showError('The editor is still loading. Give it a second and try again.');
      return;
    }
    try {
      const res = await api(`/api/newsletter/drafts?id=${draft.id}`);
      const full = await res.json();
      if (!res.ok) throw new Error(full.error || 'Could not open the draft.');

      let template = BLANK_TEMPLATE;
      if (full.content) {
        try {
          template = JSON.parse(full.content);
        } catch {
          showError('This draft was saved in an older format and its design could not be reopened.');
        }
      }

      setEditingSequenceId(null);
      setCurrentDraftId(full.id);
      currentDraftIdRef.current = full.id;
      setSubject(full.subject === 'Untitled Draft' ? '' : full.subject);
      setHtmlContent(full.html_content || '');
      setJsonContent(full.content || '');
      setLastSavedAt(full.updated_at ? new Date(full.updated_at) : null);
      setShowDrafts(false);
      loadIntoEditor(template);
      markDirty(false);
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Could not open the draft.');
    }
  }

  // Saves to the open draft (or creates one). Returns the draft id, or null on failure.
  async function saveDraftWithContent(json: string, html: string): Promise<number | null> {
    setStatus('saving');
    try {
      const res = await api(
        '/api/newsletter/drafts',
        jsonInit('POST', {
          id: currentDraftIdRef.current,
          subject: subjectRef.current || 'Untitled Draft',
          content: json,
          html_content: html,
        })
      );
      const data = await res.json();
      if (!res.ok) {
        showError(data.error || 'Could not save draft.');
        return null;
      }
      setCurrentDraftId(data.id);
      currentDraftIdRef.current = data.id;
      setLastSavedAt(new Date());
      markDirty(false);
      setStatus('idle');
      setResult('draft-saved');
      loadDrafts().catch(() => {});
      setTimeout(() => setResult((r) => (r === 'draft-saved' ? '' : r)), 3000);
      return data.id;
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Something went wrong saving the draft.');
      return null;
    }
  }

  async function saveDraft() {
    try {
      const { json, html } = await requestEditorSave();
      await saveDraftWithContent(json, html);
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Could not save.');
    }
  }

  async function deleteDraft(draft: Draft) {
    if (!window.confirm(`Delete the draft "${draft.subject || 'Untitled Draft'}"? This can't be undone.`)) return;
    try {
      await api('/api/newsletter/drafts', jsonInit('DELETE', { id: draft.id }));
      if (currentDraftIdRef.current === draft.id) {
        resetComposer();
        loadIntoEditor(BLANK_TEMPLATE);
        markDirty(false);
      }
      loadDrafts().catch(() => {});
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Could not delete the draft.');
    }
  }

  async function duplicateDraft(draft: Draft) {
    try {
      const res = await api(`/api/newsletter/drafts?id=${draft.id}`);
      const full = await res.json();
      await api(
        '/api/newsletter/drafts',
        jsonInit('POST', {
          subject: `Copy of ${draft.subject || 'Untitled Draft'}`,
          content: full.content,
          html_content: full.html_content,
        })
      );
      loadDrafts().catch(() => {});
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Could not duplicate the draft.');
    }
  }

  async function saveSequenceEmailWithContent(json: string, html: string): Promise<boolean> {
    const id = editingSequenceIdRef.current;
    if (id === null) return false;
    setSequenceSaveStatus('saving');
    try {
      const res = await api(
        '/api/newsletter/sequence',
        jsonInit('PUT', { id, subject: sequenceSubjectRef.current, html_content: html, json_content: json })
      );
      if (!res.ok) {
        setSequenceSaveStatus('error');
        return false;
      }
      setSequenceSaveStatus('saved');
      markDirty(false);
      loadSequence().catch(() => {});
      setTimeout(() => setSequenceSaveStatus('idle'), 3000);
      return true;
    } catch {
      setSequenceSaveStatus('error');
      return false;
    }
  }

  handlersRef.current = { saveDraftWithContent, saveSequenceEmailWithContent };

  function editSequenceEmail(seqEmail: SequenceEmail) {
    if (!confirmDiscard('Switch to this welcome email')) return;
    if (seqEmail.html_content && !seqEmail.json_content) {
      const proceed = window.confirm(
        'This email has existing HTML content that cannot be loaded in the visual editor.\n\nOpening the editor will show a blank canvas. If you click "Save Sequence Email", the existing content will be overwritten with blank.\n\nClick OK to open the editor anyway, or Cancel to keep the existing content safe.'
      );
      if (!proceed) return;
    }

    resetComposer();
    setEditingSequenceId(seqEmail.id);
    editingSequenceIdRef.current = seqEmail.id;
    setSequenceSubject(seqEmail.subject);
    setShowSequence(false);

    if (bee) {
      try {
        loadIntoEditor(seqEmail.json_content ? JSON.parse(seqEmail.json_content) : BLANK_TEMPLATE);
      } catch {
        loadIntoEditor(BLANK_TEMPLATE);
      }
    }
    markDirty(false);

    setTimeout(() => {
      document.getElementById('beefree-editor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function cancelSequenceEdit() {
    if (!confirmDiscard('Close this welcome email')) return;
    setEditingSequenceId(null);
    editingSequenceIdRef.current = null;
    setSequenceSubject('');
    resetComposer();
    loadIntoEditor(BLANK_TEMPLATE);
    markDirty(false);
  }

  async function saveSequenceEmail() {
    try {
      const { json, html } = await requestEditorSave();
      await saveSequenceEmailWithContent(json, html);
    } catch (err) {
      setSequenceSaveStatus('error');
      showError(err instanceof Error ? err.message : 'Could not save.');
    }
  }

  async function toggleSequenceEmail(id: number, is_active: boolean) {
    try {
      await api('/api/newsletter/sequence', jsonInit('PUT', { id, is_active }));
      loadSequence().catch(() => {});
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Could not update the email.');
    }
  }

  async function sendSequenceTest(seqEmail: SequenceEmail) {
    if (!seqEmail.html_content) return;
    setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: 'loading' }));
    try {
      const res = await api(
        '/api/newsletter/test-email',
        jsonInit('POST', { subject: seqEmail.subject, html_content: seqEmail.html_content })
      );
      setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: res.ok ? 'sent' : 'error' }));
    } catch {
      setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: 'error' }));
    }
    setTimeout(() => setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: 'idle' })), 4000);
  }

  // Test always uses what's on screen right now, and saves it first
  async function handleTestEmail() {
    setTestEmailStatus('loading');
    setResult('');
    try {
      const { json, html } = await requestEditorSave();
      if (editingSequenceIdRef.current === null) {
        const id = await saveDraftWithContent(json, html);
        if (id === null) throw new Error('Could not save before sending the test.');
      }
      const res = await api(
        '/api/newsletter/test-email',
        jsonInit('POST', {
          subject: editingSequenceIdRef.current !== null ? sequenceSubjectRef.current : subjectRef.current,
          html_content: html,
        })
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Could not send test email.');
      setTestEmailStatus('success');
    } catch (err) {
      setTestEmailStatus('error');
      showError(err instanceof Error ? err.message : 'Could not send test email.');
    }
    setTimeout(() => setTestEmailStatus('idle'), 4000);
  }

  async function handleRemoveSubscriber(email: string) {
    if (!window.confirm(`Unsubscribe ${email}? They will stop receiving newsletters.`)) return;
    try {
      await api('/api/newsletter/subscribers', jsonInit('DELETE', { email }));
      loadSubscribers().catch(() => {});
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Could not remove subscriber.');
    }
  }

  async function handleAddSubscriber(e: React.FormEvent) {
    e.preventDefault();
    if (!newSubscriberEmail) return;

    setAddSubscriberStatus('loading');
    try {
      const res = await api(
        '/api/newsletter/subscribe',
        jsonInit('POST', { email: newSubscriberEmail, name: newSubscriberName || null, source_page: 'admin-manual-add' })
      );
      const data = await res.json();
      if (res.ok) {
        setAddSubscriberStatus('success');
        setNewSubscriberName('');
        setNewSubscriberEmail('');
        loadSubscribers().catch(() => {});
        setTimeout(() => setAddSubscriberStatus('idle'), 3000);
      } else {
        showError(data.error || 'Could not add subscriber');
        setAddSubscriberStatus('error');
        setTimeout(() => { setAddSubscriberStatus('idle'); setResult(''); }, 4000);
      }
    } catch {
      showError('Network error. Please try again.');
      setAddSubscriberStatus('error');
      setTimeout(() => { setAddSubscriberStatus('idle'); setResult(''); }, 4000);
    }
  }

  async function handleSend() {
    if (editingSequenceIdRef.current !== null) {
      showError('You are editing a welcome email. Close it before sending a newsletter.');
      return;
    }
    if (!subject.trim()) {
      showError('Please enter a subject line.');
      return;
    }

    setStatus('loading');
    setResult('');
    try {
      // 1. Grab exactly what's on screen and save it to the draft
      const { json, html } = await requestEditorSave();
      const id = await saveDraftWithContent(json, html);
      if (id === null) return;

      // 2. Confirm with the real numbers
      const recipients = subscribers.filter((s) => s.is_active).length;
      setStatus('idle');
      if (!window.confirm(`Send "${subject}" to ${recipients} active subscriber${recipients === 1 ? '' : 's'} now?\n\nThis can't be undone.`)) {
        return;
      }

      // 3. Send the draft itself
      setStatus('loading');
      const res = await api('/api/newsletter/send', jsonInit('POST', { id, subject, html_content: html, content: json }));
      const data = await res.json();
      if (!res.ok) {
        showError(data.error || 'Something went wrong.');
        return;
      }

      setStatus('success');
      setResult(`Sent to ${data.sent} subscriber${data.sent !== 1 ? 's' : ''}${data.failed > 0 ? ` (${data.failed} failed)` : ''}!`);
      resetComposer();
      loadIntoEditor(BLANK_TEMPLATE);
      markDirty(false);
      loadDrafts().catch(() => {});
      loadHistory().catch(() => {});
    } catch (err) {
      showError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  const activeCount = subscribers.filter((s) => s.is_active).length;
  const unsubscribedCount = subscribers.filter((s) => !s.is_active).length;
  const subscriberQuery = subscriberSearch.trim().toLowerCase();
  const filteredSubscribers = subscriberQuery
    ? subscribers.filter(
        (s) =>
          s.email.toLowerCase().includes(subscriberQuery) ||
          (s.name || '').toLowerCase().includes(subscriberQuery),
      )
    : subscribers;

  if (!authChecked) {
    return <div className="min-h-screen bg-[var(--color-bg-warm)]" />;
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-warm)] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-sm">
          <h1 className="text-2xl text-[var(--color-text-dark)] mb-2">Newsletter Admin</h1>
          <p className="text-[var(--color-text-muted)] text-sm mb-6">Rojas Photography</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            {authError && <p className="text-red-600 text-sm">{authError}</p>}
            <button
              type="submit"
              disabled={authLoading}
              className="btn-primary w-full py-3 font-semibold rounded-full disabled:opacity-60"
            >
              {authLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)] pt-[70px]">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl text-[var(--color-text-dark)]">Newsletter Admin</h1>
                {isDirty ? (
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full font-medium">Unsaved changes</span>
                ) : lastSavedAt ? (
                  <span className="text-xs bg-green-50 text-green-800 px-2 py-1 rounded-full font-medium">
                    Saved {lastSavedAt.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
                  </span>
                ) : null}
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">
                {editingSequenceId !== null
                  ? 'Editing a welcome email'
                  : currentDraftId
                  ? `Editing draft: ${subject || 'Untitled'}`
                  : 'New newsletter'}
                <span className="mx-2">·</span>
                <button onClick={handleLogout} className="underline hover:text-[var(--color-text-dark)]">Sign out</button>
              </p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* New newsletter */}
              <button
                onClick={newNewsletter}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors"
              >
                + New
              </button>

              {/* Sequence button */}
              <button
                onClick={() => {
                  setShowSequence(!showSequence);
                  setShowSubscribers(false);
                  setShowDrafts(false);
                  setShowHistory(false);
                  if (!showSequence) loadSequence();
                }}
                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-colors ${showSequence ? 'bg-[var(--color-primary)] text-white border-[var(--color-primary)]' : 'border-gray-200 text-[var(--color-text-dark)] hover:bg-gray-50'}`}
              >
                Welcome Sequence
              </button>

              {/* Subscribers button */}
              <button
                onClick={() => {
                  setShowSubscribers(!showSubscribers);
                  setShowDrafts(false);
                  setShowHistory(false);
                  setShowSequence(false);
                  if (!showSubscribers) loadSubscribers();
                }}
                className="relative px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors"
              >
                Subscribers
                {activeCount > 0 && (
                  <span className="ml-2 bg-green-600 text-white text-xs rounded-full px-1.5 py-0.5">{activeCount}</span>
                )}
              </button>

              {/* History button */}
              <button
                onClick={() => {
                  setShowHistory(!showHistory);
                  setShowDrafts(false);
                  setShowSubscribers(false);
                  setShowSequence(false);
                  if (!showHistory) loadHistory();
                }}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors"
              >
                History
              </button>

              {/* Drafts button */}
              <button
                onClick={() => {
                  setShowDrafts(!showDrafts);
                  setShowSubscribers(false);
                  setShowHistory(false);
                  setShowSequence(false);
                }}
                className="relative px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors"
              >
                Drafts
                {drafts.length > 0 && (
                  <span className="ml-2 bg-[var(--color-primary)] text-white text-xs rounded-full px-1.5 py-0.5">{drafts.length}</span>
                )}
              </button>

              {/* Sequence email editing controls */}
              {editingSequenceId !== null && (
                <>
                  <span className="text-xs text-[var(--color-text-muted)] hidden sm:inline">
                    Editing: <strong>Email {sequenceEmails.find(e => e.id === editingSequenceId)?.position}</strong>
                  </span>
                  <input
                    type="text"
                    value={sequenceSubject}
                    onChange={(e) => setSequenceSubject(e.target.value)}
                    placeholder="Sequence email subject..."
                    className="px-4 py-2 rounded-xl border border-amber-300 bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 w-64 text-sm"
                  />
                  <button
                    onClick={saveSequenceEmail}
                    disabled={sequenceSaveStatus === 'saving'}
                    className="px-4 py-2 rounded-xl border border-amber-400 bg-amber-50 text-sm font-medium text-amber-800 hover:bg-amber-100 transition-colors disabled:opacity-60"
                  >
                    {sequenceSaveStatus === 'saving' ? 'Saving...' : sequenceSaveStatus === 'saved' ? '✓ Saved!' : 'Save Sequence Email'}
                  </button>
                  <button
                    onClick={cancelSequenceEdit}
                    className="px-3 py-2 rounded-xl border border-gray-200 text-sm text-[var(--color-text-muted)] hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </>
              )}

              {/* Save Draft button — hidden when editing sequence email */}
              {editingSequenceId === null && (
              <button
                onClick={saveDraft}
                disabled={status === 'saving'}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors disabled:opacity-60"
              >
                {status === 'saving' ? 'Saving...' : 'Save Draft'}
              </button>
              )}

              {/* Test Email button */}
              <button
                onClick={handleTestEmail}
                disabled={testEmailStatus === 'loading'}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors disabled:opacity-60"
              >
                {testEmailStatus === 'loading'
                  ? 'Sending...'
                  : testEmailStatus === 'success'
                  ? '✓ Test Sent!'
                  : 'Send Test Email'}
              </button>

              {/* Subject input */}
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject line..."
                className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] w-64"
              />

              {/* Send button */}
              <button
                onClick={handleSend}
                disabled={status === 'loading'}
                className="btn-primary px-8 py-2 font-semibold rounded-full disabled:opacity-60 whitespace-nowrap"
              >
                {status === 'loading' ? 'Sending...' : 'Send Newsletter'}
              </button>
            </div>
          </div>

          {/* Subscriber summary */}
          {subscribers.length > 0 && (
            <div className="mt-3 flex gap-6 text-sm">
              <span className="text-[var(--color-text-muted)]">
                <span className="font-bold text-green-600">{activeCount}</span> active subscribers
              </span>
              {unsubscribedCount > 0 && (
                <span className="text-[var(--color-text-muted)]">
                  <span className="font-bold text-gray-400">{unsubscribedCount}</span> unsubscribed
                </span>
              )}
            </div>
          )}

          {/* Status messages */}
          {status === 'success' && (
            <div className="mt-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-800 text-sm font-medium">
              ✓ {result}
            </div>
          )}
          {status === 'error' && (
            <div className="mt-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-red-800 text-sm">{result}</div>
          )}
          {result === 'draft-saved' && (
            <div className="mt-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-green-700 text-sm">✓ Draft saved successfully</div>
          )}
          {testEmailStatus === 'success' && (
            <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-blue-700 text-sm">
              ✓ Test email sent to alfonso@rojasphotography.net — check your inbox!
            </div>
          )}
          {htmlContent && status !== 'success' && result !== 'draft-saved' && testEmailStatus !== 'success' && (
            <div className="mt-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-blue-700 text-sm">
              ✓ Design saved — send a test email first, then hit Send when ready.
            </div>
          )}
        </div>
      </div>

      {/* Welcome Sequence Panel */}
      {showSequence && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-[var(--color-text-dark)]">Welcome Sequence</h2>
              <span className="text-xs text-[var(--color-text-muted)]">Emails are sent automatically after signup</span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] mb-5">
              Each new subscriber automatically receives these emails on a drip schedule. Click <strong>Edit</strong> on any email to open it in the visual editor below.
            </p>

            {sequenceEmails.length === 0 ? (
              <p className="text-sm text-[var(--color-text-muted)]">No sequence emails found. Run the Supabase setup SQL first.</p>
            ) : (
              <div className="space-y-3">
                {sequenceEmails.map((seqEmail) => (
                  <div
                    key={seqEmail.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border transition-colors ${editingSequenceId === seqEmail.id ? 'border-amber-300 bg-amber-50' : 'border-gray-100 hover:bg-gray-50'}`}
                  >
                    {/* Position badge */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex flex-col items-center justify-center">
                      <span className="text-xs font-bold leading-none">Email</span>
                      <span className="text-lg font-bold leading-none">{seqEmail.position}</span>
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="font-medium text-[var(--color-text-dark)] text-sm truncate">
                          {seqEmail.subject || <em className="text-gray-400">No subject set</em>}
                        </p>
                        {!seqEmail.is_active && (
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">Disabled</span>
                        )}
                        {editingSequenceId === seqEmail.id && (
                          <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full font-medium">Editing</span>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-1 text-xs text-[var(--color-text-muted)]">
                        <span>
                          {seqEmail.position === 1
                            ? 'Sent immediately on signup'
                            : `Sent ${seqEmail.delay_days} days after signup`}
                        </span>
                        <span>{seqEmail.stats.sent} sent</span>
                        {seqEmail.stats.pending > 0 && (
                          <span className="text-amber-600">{seqEmail.stats.pending} queued</span>
                        )}
                        {!seqEmail.html_content && (
                          <span className="text-red-500">No content yet</span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {seqEmail.html_content && (
                        <button
                          onClick={() => setPreviewHtml(seqEmail.html_content)}
                          className="px-3 py-1 text-xs rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 font-medium transition-colors"
                        >
                          Preview
                        </button>
                      )}
                      {seqEmail.html_content && (
                        <button
                          onClick={() => sendSequenceTest(seqEmail)}
                          disabled={sequenceTestStatus[seqEmail.id] === 'loading'}
                          className="px-3 py-1 text-xs rounded-full border border-blue-200 text-blue-700 hover:bg-blue-50 font-medium transition-colors disabled:opacity-60"
                        >
                          {sequenceTestStatus[seqEmail.id] === 'loading' ? 'Sending...' :
                           sequenceTestStatus[seqEmail.id] === 'sent' ? '✓ Sent!' :
                           sequenceTestStatus[seqEmail.id] === 'error' ? 'Failed' :
                           'Send Test'}
                        </button>
                      )}
                      <button
                        onClick={() => toggleSequenceEmail(seqEmail.id, !seqEmail.is_active)}
                        className={`px-3 py-1 text-xs rounded-full border font-medium transition-colors ${
                          seqEmail.is_active
                            ? 'border-gray-200 text-gray-500 hover:bg-gray-100'
                            : 'border-green-200 text-green-700 hover:bg-green-50'
                        }`}
                      >
                        {seqEmail.is_active ? 'Disable' : 'Enable'}
                      </button>
                      {seqEmail.position === 1 ? (
                        <span className="px-3 py-1 text-xs rounded-full border border-amber-200 text-amber-700 bg-amber-50 font-medium">
                          Sent via code
                        </span>
                      ) : (
                        <button
                          onClick={() => editSequenceEmail(seqEmail)}
                          className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary)] text-white rounded-full hover:opacity-90 transition-opacity"
                        >
                          Edit
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <p className="text-xs text-[var(--color-text-muted)] mt-4">
              Tip: Use <code className="bg-gray-100 px-1 rounded">&#123;&#123;first_name&#125;&#125;</code> anywhere in the email body to personalize with the subscriber&apos;s first name.
            </p>
          </div>
        </div>
      )}

      {/* Subscribers Panel */}
      {showSubscribers && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            {/* Add Subscriber Form */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-[var(--color-text-dark)] font-medium text-sm mb-3">Add Subscriber</h3>
              <form onSubmit={handleAddSubscriber} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={newSubscriberName}
                  onChange={(e) => setNewSubscriberName(e.target.value)}
                  placeholder="Name (optional)"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-sm"
                />
                <input
                  type="email"
                  value={newSubscriberEmail}
                  onChange={(e) => setNewSubscriberEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-sm"
                />
                <button
                  type="submit"
                  disabled={addSubscriberStatus === 'loading'}
                  className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
                >
                  {addSubscriberStatus === 'loading' ? 'Adding...' : 'Add'}
                </button>
              </form>
              {addSubscriberStatus === 'success' && (
                <p className="text-green-600 text-xs mt-2">✓ Subscriber added successfully!</p>
              )}
              {addSubscriberStatus === 'error' && result && (
                <p className="text-red-600 text-xs mt-2">✗ {result}</p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <h2 className="text-[var(--color-text-dark)]">
                Subscribers
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  {activeCount} active · {subscribers.length - activeCount} unsubscribed
                </span>
              </h2>
              <input
                type="search"
                value={subscriberSearch}
                onChange={(e) => setSubscriberSearch(e.target.value)}
                placeholder="Search by email or name…"
                className="px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] w-full sm:w-72 text-sm"
              />
            </div>
            {subscribers.length === 0 ? (
              <p className="text-[var(--color-text-muted)] text-sm">No subscribers yet.</p>
            ) : filteredSubscribers.length === 0 ? (
              <p className="text-[var(--color-text-muted)] text-sm">No subscribers match &ldquo;{subscriberSearch}&rdquo;.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text-dark)]">Email</th>
                      <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text-dark)]">Name</th>
                      <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text-dark)]">Status</th>
                      <th className="text-left py-2 pr-4 font-semibold text-[var(--color-text-dark)]">Subscribed</th>
                      <th className="py-2"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredSubscribers.map((sub) => (
                      <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-2 pr-4 text-[var(--color-text-dark)]">{sub.email}</td>
                        <td className="py-2 pr-4 text-[var(--color-text-muted)]">{sub.name || '—'}</td>
                        <td className="py-2 pr-4">
                          <span
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                              sub.is_active
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {sub.is_active ? 'Active' : 'Unsubscribed'}
                          </span>
                        </td>
                        <td className="py-2 pr-4 text-[var(--color-text-muted)]">
                          {new Date(sub.subscribed_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td className="py-2">
                          {sub.is_active && (
                            <button
                              onClick={() => handleRemoveSubscriber(sub.email)}
                              className="text-xs text-red-500 hover:text-red-700 hover:underline"
                            >
                              Remove
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}

      {/* History Panel */}
      {showHistory && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-[var(--color-text-dark)] mb-4">Sent Newsletters</h2>
            {history.length === 0 ? (
              <p className="text-[var(--color-text-muted)] text-sm">No newsletters sent yet.</p>
            ) : (
              <div className="space-y-3">
                {history.map((item) => (
                  <div key={item.id} className="p-4 rounded-lg border border-gray-100 hover:bg-gray-50">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="font-medium text-[var(--color-text-dark)] text-sm">{item.subject}</p>
                        <p className="text-xs text-[var(--color-text-muted)] mt-0.5">
                          Sent {new Date(item.sent_at).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'America/Los_Angeles' })}
                        </p>
                      </div>
                      {item.stats && (
                        <div className="flex gap-4 flex-wrap">
                          <div className="text-center">
                            <p className="text-lg font-bold text-[var(--color-text-dark)]">{item.stats.sent}</p>
                            <p className="text-xs text-[var(--color-text-muted)]">Sent</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-green-600">{item.stats.openRate}%</p>
                            <p className="text-xs text-[var(--color-text-muted)]">Open Rate</p>
                          </div>
                          <div className="text-center">
                            <p className="text-lg font-bold text-[var(--color-text-dark)]">{item.stats.opened}</p>
                            <p className="text-xs text-[var(--color-text-muted)]">Opened</p>
                          </div>
                          {item.stats.failed > 0 && (
                            <div className="text-center">
                              <p className="text-lg font-bold text-red-500">{item.stats.failed}</p>
                              <p className="text-xs text-[var(--color-text-muted)]">Failed</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Drafts Panel */}
      {showDrafts && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h2 className="text-[var(--color-text-dark)] mb-4">Saved Drafts</h2>
            {drafts.length === 0 ? (
              <p className="text-[var(--color-text-muted)] text-sm">No drafts saved yet.</p>
            ) : (
              <div className="space-y-2">
                {drafts.map((draft) => (
                  <div key={draft.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100 hover:bg-gray-50">
                    <div>
                      <p className="font-medium text-[var(--color-text-dark)] text-sm">{draft.subject || 'Untitled Draft'}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        Last edited {new Date(draft.updated_at).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'America/Los_Angeles' })}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => loadDraft(draft)}
                        className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary)] text-white rounded-full hover:opacity-90"
                      >
                        Load
                      </button>
                      <button
                        onClick={() => duplicateDraft(draft)}
                        className="px-3 py-1 text-xs font-semibold border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50"
                      >
                        Duplicate
                      </button>
                      <button
                        onClick={() => deleteDraft(draft)}
                        className="px-3 py-1 text-xs font-semibold border border-red-200 text-red-600 rounded-full hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {!editorReady && (
        <div className="max-w-7xl mx-auto px-6 pt-10 text-center">
          <p className="text-[var(--color-text-muted)]">Loading email editor...</p>
        </div>
      )}

      {editorReady && !htmlContent && editingSequenceId === null && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-blue-800 text-sm">
            💡 Design a newsletter below and hit <strong>Send Newsletter</strong>, or open <strong>Welcome Sequence</strong> to edit your automated drip emails.
          </div>
        </div>
      )}
      {editorReady && editingSequenceId !== null && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-amber-800 text-sm">
            ✏️ You&apos;re editing <strong>Email {sequenceEmails.find(e => e.id === editingSequenceId)?.position}</strong> of the welcome sequence. Design it below, then click <strong>Save Sequence Email</strong> above.
          </div>
        </div>
      )}

      {/* Beefree Editor */}
      <div className="px-6 pt-4 pb-8">
        <div
          id="beefree-editor"
          style={{ height: '75vh', minHeight: '600px' }}
          className="rounded-xl overflow-hidden border border-gray-200 bg-white"
        />
      </div>

      {/* Email Preview Modal */}
      {previewHtml && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl flex flex-col shadow-2xl" style={{ maxHeight: '90vh' }}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <h3 className="text-[var(--color-text-dark)]">Email Preview</h3>
              <button
                onClick={() => setPreviewHtml(null)}
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
              >
                ×
              </button>
            </div>
            <div className="overflow-auto flex-1 rounded-b-2xl">
              <iframe
                srcDoc={previewHtml}
                className="w-full border-0"
                style={{ height: '75vh' }}
                title="Email Preview"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
