'use client';

import { useState, useEffect, useCallback } from 'react';
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
}

interface Subscriber {
  id: number;
  email: string;
  name: string | null;
  is_active: boolean;
  subscribed_at: string;
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

  const [bee, setBee] = useState<BeefreeSDK | null>(null);
  const [editorReady, setEditorReady] = useState(false);

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

  const loadHistory = useCallback(async () => {
    const res = await fetch('/api/newsletter/drafts?status=sent');
    const data = await res.json();
    if (Array.isArray(data)) setHistory(data);
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

  async function saveDraft() {
    if (!htmlContent && !jsonContent) {
      setStatus('error');
      setResult('Please design your email first, then click Save in the editor before saving a draft.');
      return;
    }

    setStatus('saving');
    try {
      const res = await fetch('/api/newsletter/drafts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          password,
          id: currentDraftId,
          subject: subject || 'Untitled Draft',
          content: jsonContent,
          html_content: htmlContent,
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
        setResult(data.error || 'Could not send test email.');
        setTimeout(() => setTestEmailStatus('idle'), 4000);
      }
    } catch {
      setTestEmailStatus('error');
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
    <div className="min-h-screen bg-[var(--color-bg-warm)]">
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
              {/* Subscribers button */}
              <button
                onClick={() => {
                  setShowSubscribers(!showSubscribers);
                  setShowDrafts(false);
                  setShowHistory(false);
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
                }}
                className="relative px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors"
              >
                Drafts
                {drafts.length > 0 && (
                  <span className="ml-2 bg-[var(--color-primary)] text-white text-xs rounded-full px-1.5 py-0.5">{drafts.length}</span>
                )}
              </button>

              {/* Save Draft button */}
              <button
                onClick={saveDraft}
                disabled={status === 'saving'}
                className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-[var(--color-text-dark)] hover:bg-gray-50 transition-colors disabled:opacity-60"
              >
                {status === 'saving' ? 'Saving...' : currentDraftId ? 'Update Draft' : 'Save Draft'}
              </button>

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
              <div className="space-y-2">
                {history.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border border-gray-100">
                    <div>
                      <p className="font-medium text-[var(--color-text-dark)] text-sm">{item.subject}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">
                        Sent {new Date(item.sent_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                      </p>
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
                        Last edited {new Date(draft.updated_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
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

      {editorReady && !htmlContent && (
        <div className="max-w-7xl mx-auto px-6 pt-4">
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-blue-800 text-sm">
            💡 Design your email below, then click <strong>Save</strong> in the editor toolbar. Send yourself a test email before sending to all subscribers.
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
