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

  const [history, setHistory] = useState<SentNewsletter[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const [sequenceEmails, setSequenceEmails] = useState<SequenceEmail[]>([]);
  const [showSequence, setShowSequence] = useState(false);
  const [editingSequenceId, setEditingSequenceId] = useState<number | null>(null);
  const [sequenceSubject, setSequenceSubject] = useState('');
  const [sequenceSaveStatus, setSequenceSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [sequenceTestStatus, setSequenceTestStatus] = useState<Record<number, 'idle' | 'loading' | 'sent' | 'error'>>({});
  const pendingSequenceSave = useRef(false);

  const [bee, setBee] = useState<BeefreeSDK | null>(null);
  const [editorReady, setEditorReady] = useState(false);
  const pendingDraftSave = useRef(false);

  const [status, setStatus] = useState<'idle' | 'loading' | 'saving' | 'success' | 'error'>('idle');
  const [result, setResult] = useState('');
  const [testEmailStatus, setTestEmailStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

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

  const loadDrafts = useCallback(async () => {
    const res = await fetch('/api/newsletter/drafts');
    const data = await res.json();
    if (Array.isArray(data)) setDrafts(data);
  }, []);

  const loadSubscribers = useCallback(async () => {
    const res = await fetch(`/api/newsletter/subscribers?password=${encodeURIComponent(password)}`);
    const data = await res.json();
    if (Array.isArray(data)) setSubscribers(data);
  }, [password]);

  const loadSequence = useCallback(async () => {
    const res = await fetch(`/api/newsletter/sequence?password=${encodeURIComponent(password)}`);
    const data = await res.json();
    if (Array.isArray(data)) setSequenceEmails(data);
  }, [password]);

  const loadHistory = useCallback(async () => {
    const res = await fetch('/api/newsletter/drafts?status=sent');
    const data = await res.json();
    if (!Array.isArray(data)) return;

    // Fetch stats for each newsletter in parallel
    const withStats = await Promise.all(
      data.map(async (item: SentNewsletter) => {
        try {
          const statsRes = await fetch(`/api/newsletter/stats?newsletter_id=${item.id}`);
          const stats = await statsRes.json();
          return { ...item, stats };
        } catch {
          return item;
        }
      })
    );
    setHistory(withStats);
  }, []);

  useEffect(() => {
    if (!authenticated) return;
    loadDrafts();

    async function initEditor(template = {}) {
      try {
        const res = await fetch('/api/newsletter/beefree-token');
        const token = await res.json();

        const config = {
          container: 'beefree-editor',
          language: 'en-US',
          onLoad: () => setEditorReady(true),
          onSave: (pageJson: string, pageHtml: string) => {
            setJsonContent(pageJson);
            setHtmlContent(pageHtml);
            setResult('');
            if (pendingDraftSave.current) {
              pendingDraftSave.current = false;
              saveDraftWithContent(pageJson, pageHtml);
            }
            if (pendingSequenceSave.current) {
              pendingSequenceSave.current = false;
              saveSequenceEmailWithContent(pageJson, pageHtml);
            }
          },
          onSaveAsTemplate: (_pageJson: string) => {},
          onError: (error: unknown) => {
            console.error('Beefree error:', error);
          },
        };

        const beeInstance = new BeefreeSDK(token);
        beeInstance.start(config, template);
        setBee(beeInstance);
      } catch (err) {
        console.error('Failed to init Beefree editor:', err);
      }
    }

    initEditor();
  }, [authenticated, loadDrafts]);

  async function loadDraft(draft: Draft) {
    const res = await fetch(`/api/newsletter/drafts?id=${draft.id}`);
    const full = await res.json();

    setCurrentDraftId(draft.id);
    setSubject(draft.subject);
    setShowDrafts(false);

    if (full.content && bee) {
      try {
        const template = JSON.parse(full.content);
        bee.load(template);
      } catch {
        console.log('Could not restore design — starting fresh');
      }
    }
  }

  async function saveDraftWithContent(json: string, html: string) {
    setStatus('saving');
    try {
      const res = await fetch('/api/newsletter/drafts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          id: currentDraftId,
          subject: subject || 'Untitled Draft',
          content: json,
          html_content: html,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setCurrentDraftId(data.id);
        setStatus('idle');
        setResult('draft-saved');
        loadDrafts();
        setTimeout(() => setResult(''), 3000);
      } else {
        setStatus('error');
        setResult(data.error || 'Could not save draft.');
      }
    } catch {
      setStatus('error');
      setResult('Something went wrong saving the draft.');
    }
  }

  function saveDraft() {
    if (!bee) {
      setStatus('error');
      setResult('Editor not ready. Please wait and try again.');
      return;
    }
    // Trigger Beefree to save first — onSave callback will then save the draft
    pendingDraftSave.current = true;
    bee.save();
  }

  async function deleteDraft(id: number) {
    await fetch('/api/newsletter/drafts', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, id }),
    });
    if (currentDraftId === id) {
      setCurrentDraftId(null);
      setSubject('');
      setHtmlContent('');
      setJsonContent('');
    }
    loadDrafts();
  }

  async function saveSequenceEmailWithContent(json: string, html: string) {
    if (editingSequenceId === null) return;
    setSequenceSaveStatus('saving');
    try {
      const res = await fetch('/api/newsletter/sequence', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          id: editingSequenceId,
          subject: sequenceSubject,
          html_content: html,
          json_content: json,
        }),
      });
      if (res.ok) {
        setSequenceSaveStatus('saved');
        loadSequence();
        setTimeout(() => setSequenceSaveStatus('idle'), 3000);
      } else {
        setSequenceSaveStatus('error');
      }
    } catch {
      setSequenceSaveStatus('error');
    }
  }

  function editSequenceEmail(seqEmail: SequenceEmail) {
    setEditingSequenceId(seqEmail.id);
    setSequenceSubject(seqEmail.subject);
    setCurrentDraftId(null);
    setSubject('');
    setHtmlContent('');
    setJsonContent('');
    setShowSequence(false);

    if (bee) {
      try {
        if (seqEmail.json_content) {
          bee.load(JSON.parse(seqEmail.json_content));
        } else {
          bee.load({ page: { rows: [] }, comments: [] } as unknown as Parameters<typeof bee.load>[0]);
        }
      } catch {
        bee.load({ page: { rows: [] }, comments: [] } as unknown as Parameters<typeof bee.load>[0]);
      }
    }

    // Scroll to editor
    setTimeout(() => {
      document.getElementById('beefree-editor')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  function saveSequenceEmail() {
    if (!bee) return;
    pendingSequenceSave.current = true;
    bee.save();
  }

  async function toggleSequenceEmail(id: number, is_active: boolean) {
    await fetch('/api/newsletter/sequence', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, id, is_active }),
    });
    loadSequence();
  }

  async function sendSequenceTest(seqEmail: SequenceEmail) {
    if (!seqEmail.html_content) return;
    setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: 'loading' }));
    try {
      const res = await fetch('/api/newsletter/test-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          subject: seqEmail.subject,
          html_content: seqEmail.html_content,
        }),
      });
      setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: res.ok ? 'sent' : 'error' }));
      setTimeout(() => setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: 'idle' })), 4000);
    } catch {
      setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: 'error' }));
      setTimeout(() => setSequenceTestStatus((prev) => ({ ...prev, [seqEmail.id]: 'idle' })), 4000);
    }
  }

  async function handleTestEmail() {
    if (!htmlContent) {
      setStatus('error');
      setResult('Please save your email design first using the Save button in the editor.');
      return;
    }
    setTestEmailStatus('loading');
    try {
      const res = await fetch('/api/newsletter/test-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, subject, html_content: htmlContent }),
      });
      const data = await res.json();
      if (res.ok) {
        setTestEmailStatus('success');
        setTimeout(() => setTestEmailStatus('idle'), 4000);
      } else {
        setTestEmailStatus('error');
        setStatus('error');
        setResult(data.error || 'Could not send test email.');
        setTimeout(() => setTestEmailStatus('idle'), 4000);
      }
    } catch {
      setTestEmailStatus('error');
      setStatus('error');
      setResult('Could not reach the server. Please try again.');
      setTimeout(() => setTestEmailStatus('idle'), 4000);
    }
  }

  async function handleRemoveSubscriber(email: string) {
    await fetch('/api/newsletter/subscribers', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password, email }),
    });
    loadSubscribers();
  }

  async function handleSend() {
    if (!htmlContent) {
      setStatus('error');
      setResult('Please save your email design first using the Save button in the editor.');
      return;
    }
    if (!subject) {
      setStatus('error');
      setResult('Please enter a subject line.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, subject, html_content: htmlContent, content: jsonContent }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setResult(`Sent to ${data.sent} subscriber${data.sent !== 1 ? 's' : ''}${data.failed > 0 ? ` (${data.failed} failed)` : ''}!`);
        if (currentDraftId) {
          deleteDraft(currentDraftId);
          setCurrentDraftId(null);
        }
        loadHistory();
      } else {
        setStatus('error');
        setResult(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setResult('Something went wrong. Please try again.');
    }
  }

  const activeCount = subscribers.filter((s) => s.is_active).length;
  const unsubscribedCount = subscribers.filter((s) => !s.is_active).length;

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-warm)] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">Newsletter Admin</h1>
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
                <h1 className="text-2xl font-bold text-[var(--color-text-dark)]">Newsletter Admin</h1>
                {currentDraftId && (
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">Draft</span>
                )}
              </div>
              <p className="text-sm text-[var(--color-text-muted)]">Rojas Photography</p>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
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
                    onClick={() => {
                      setEditingSequenceId(null);
                      setSequenceSubject('');
                      setHtmlContent('');
                      setJsonContent('');
                      if (bee) bee.load({ page: { rows: [] }, comments: [] } as unknown as Parameters<typeof bee.load>[0]);
                    }}
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
                {status === 'saving' ? 'Saving...' : currentDraftId ? 'Update Draft' : 'Save Draft'}
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
              <h2 className="font-bold text-[var(--color-text-dark)]">Welcome Sequence</h2>
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
                      <button
                        onClick={() => editSequenceEmail(seqEmail)}
                        className="px-3 py-1 text-xs font-semibold bg-[var(--color-primary)] text-white rounded-full hover:opacity-90 transition-opacity"
                      >
                        Edit
                      </button>
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-[var(--color-text-dark)]">
                Subscribers
                <span className="ml-2 text-sm font-normal text-[var(--color-text-muted)]">
                  {activeCount} active · {subscribers.length - activeCount} unsubscribed
                </span>
              </h2>
            </div>
            {subscribers.length === 0 ? (
              <p className="text-[var(--color-text-muted)] text-sm">No subscribers yet.</p>
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
                    {subscribers.map((sub) => (
                      <tr key={sub.id} className="border-b border-gray-50 hover:bg-gray-50">
                        <td className="py-2 pr-4 text-[var(--color-text-dark)]">{sub.email}</td>
                        <td className="py-2 pr-4 text-[var(--color-text-muted)]">{sub.name || '—'}</td>
                        <td className="py-2 pr-4">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${sub.is_active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
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
            <h2 className="font-bold text-[var(--color-text-dark)] mb-4">Sent Newsletters</h2>
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
            <h2 className="font-bold text-[var(--color-text-dark)] mb-4">Saved Drafts</h2>
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
                        onClick={() => deleteDraft(draft.id)}
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
    </div>
  );
}
