'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  SessionExpiredError,
  api,
  apiJson,
  errorMessage,
  jsonBody,
  type Draft,
  type FullNewsletter,
  type NewsletterStats,
  type SentNewsletter,
  type SequenceEmail,
  type Subscriber,
} from './_lib/api';
import { Composer, type ComposerHandle } from './_components/Composer';
import { Contacts, Dashboard, Newsletters, Reports, WelcomeSeries } from './_components/Sections';
import { Button, EmailFrame, Modal, Toasts, cx, inputClass, type Toast } from './_components/ui';

type Section = 'dashboard' | 'newsletters' | 'compose' | 'contacts' | 'welcome' | 'reports';

const NAV: { id: Exclude<Section, 'compose'>; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'M3 12l9-8 9 8M5 10v10h14V10' },
  { id: 'newsletters', label: 'Newsletters', icon: 'M3 6h18v12H3zM3 6l9 7 9-7' },
  { id: 'contacts', label: 'Contacts', icon: 'M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM22 19v-1a4 4 0 0 0-3-3.9M16 4.1a3 3 0 0 1 0 5.8' },
  { id: 'welcome', label: 'Welcome series', icon: 'M5 12h14M13 6l6 6-6 6' },
  { id: 'reports', label: 'Reports', icon: 'M4 20V10M10 20V4M16 20v-7M22 20H2' },
];

export default function NewsletterAdmin() {
  const [authState, setAuthState] = useState<'checking' | 'out' | 'in'>('checking');
  const [password, setPassword] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState('');

  const [section, setSection] = useState<Section>('dashboard');
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [history, setHistory] = useState<SentNewsletter[]>([]);
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [sequence, setSequence] = useState<SequenceEmail[]>([]);
  const [preview, setPreview] = useState<{ title: string; html: string } | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const composerRef = useRef<ComposerHandle>(null);

  // ---------- Toasts ----------
  const notify = useCallback((message: string, tone: Toast['tone'] = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, message, tone }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), tone === 'error' ? 7000 : 4000);
  }, []);

  const onSessionExpired = useCallback(() => {
    setAuthState('out');
    setAuthError('Your session expired. Sign in again.');
  }, []);

  const handle = useCallback(
    (err: unknown, fallback?: string) => {
      if (err instanceof SessionExpiredError) onSessionExpired();
      else notify(errorMessage(err, fallback), 'error');
    },
    [notify, onSessionExpired],
  );

  // ---------- Auth ----------
  useEffect(() => {
    apiJson<{ authenticated: boolean }>('/api/newsletter/auth')
      .then((d) => setAuthState(d.authenticated ? 'in' : 'out'))
      .catch(() => setAuthState('out'));
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/newsletter/auth', jsonBody('POST', { password }));
      if (res.ok) {
        setPassword('');
        setAuthState('in');
      } else {
        setAuthError('That password is incorrect.');
      }
    } catch {
      setAuthError('Could not reach the server. Try again.');
    } finally {
      setAuthLoading(false);
    }
  }

  async function logout() {
    if (section === 'compose' && !(await composerRef.current?.prepareToLeave())) return;
    await fetch('/api/newsletter/auth', { method: 'DELETE' });
    setAuthState('out');
  }

  // ---------- Data ----------
  const loadDrafts = useCallback(async () => {
    try {
      setDrafts(await apiJson<Draft[]>('/api/newsletter/drafts'));
    } catch (err) {
      handle(err, 'Could not load drafts.');
    }
  }, [handle]);

  const loadHistory = useCallback(async () => {
    try {
      const sent = await apiJson<SentNewsletter[]>('/api/newsletter/drafts?status=sent');
      const withStats = await Promise.all(
        sent.map(async (n) => {
          try {
            return { ...n, stats: await apiJson<NewsletterStats>(`/api/newsletter/stats?newsletter_id=${n.id}`) };
          } catch {
            return n;
          }
        }),
      );
      setHistory(withStats);
    } catch (err) {
      handle(err, 'Could not load sent newsletters.');
    }
  }, [handle]);

  const loadSubscribers = useCallback(async () => {
    try {
      setSubscribers(await apiJson<Subscriber[]>('/api/newsletter/subscribers'));
    } catch (err) {
      handle(err, 'Could not load contacts.');
    }
  }, [handle]);

  const loadSequence = useCallback(async () => {
    try {
      setSequence(await apiJson<SequenceEmail[]>('/api/newsletter/sequence'));
    } catch (err) {
      handle(err, 'Could not load the welcome series.');
    }
  }, [handle]);

  useEffect(() => {
    if (authState !== 'in') return;
    loadDrafts();
    loadHistory();
    loadSubscribers();
    loadSequence();
  }, [authState, loadDrafts, loadHistory, loadSubscribers, loadSequence]);

  // ---------- Navigation ----------
  async function go(next: Section) {
    if (next === section) return;
    if (section === 'compose' && !(await composerRef.current?.prepareToLeave())) return;
    setSection(next);
    window.scrollTo({ top: 0 });
  }

  async function newNewsletter() {
    if (section === 'compose' && !(await composerRef.current?.prepareToLeave())) return;
    composerRef.current?.newNewsletter();
    setSection('compose');
  }

  async function openDraft(id: number) {
    if (section === 'compose' && !(await composerRef.current?.prepareToLeave())) return;
    await composerRef.current?.openDraft(id);
    setSection('compose');
  }

  async function editSequence(email: SequenceEmail) {
    composerRef.current?.openSequence(email);
    setSection('compose');
  }

  // ---------- Actions ----------
  async function duplicate(id: number, subject: string) {
    try {
      const full = await apiJson<FullNewsletter>(`/api/newsletter/drafts?id=${id}`);
      const copy = await apiJson<{ id: number }>(
        '/api/newsletter/drafts',
        jsonBody('POST', { subject: `Copy of ${subject || 'Untitled Draft'}`, content: full.content, html_content: full.html_content }),
      );
      await loadDrafts();
      notify('Copy created. Opening it now.', 'success');
      await openDraft(copy.id);
    } catch (err) {
      handle(err, 'Could not duplicate it.');
    }
  }

  async function deleteDraft(draft: Draft) {
    if (!window.confirm(`Delete “${draft.subject || 'Untitled Draft'}”? This can't be undone.`)) return;
    try {
      await apiJson('/api/newsletter/drafts', jsonBody('DELETE', { id: draft.id }));
      notify('Draft deleted', 'success');
      loadDrafts();
    } catch (err) {
      handle(err, 'Could not delete the draft.');
    }
  }

  async function view(id: number, subject: string) {
    try {
      const full = await apiJson<FullNewsletter>(`/api/newsletter/drafts?id=${id}`);
      setPreview({ title: subject, html: full.html_content || '' });
    } catch (err) {
      handle(err, 'Could not open it.');
    }
  }

  async function addContact(name: string, email: string) {
    try {
      const res = await api('/api/newsletter/subscribe', jsonBody('POST', { name: name || null, email, source_page: 'admin-manual-add' }));
      const data = await res.json().catch(() => ({}));
      if (res.status === 409) {
        notify(`${email} is already on the list.`, 'info');
        return false;
      }
      if (!res.ok) throw new Error(data.error || 'Could not add that contact.');
      notify(`${name || email} added`, 'success');
      loadSubscribers();
      return true;
    } catch (err) {
      handle(err, 'Could not add that contact.');
      return false;
    }
  }

  async function removeContact(s: Subscriber) {
    if (!window.confirm(`Unsubscribe ${s.email}? They'll stop getting newsletters.`)) return;
    try {
      await apiJson('/api/newsletter/subscribers', jsonBody('DELETE', { email: s.email }));
      notify(`${s.email} unsubscribed`, 'success');
      loadSubscribers();
    } catch (err) {
      handle(err, 'Could not unsubscribe them.');
    }
  }

  async function testSequence(e: SequenceEmail) {
    try {
      const data = await apiJson<{ to: string }>('/api/newsletter/test-email', jsonBody('POST', { subject: e.subject, html_content: e.html_content }));
      notify(`Test sent to ${data.to}`, 'success');
    } catch (err) {
      handle(err, 'Could not send the test.');
    }
  }

  async function toggleSequence(e: SequenceEmail) {
    try {
      await apiJson('/api/newsletter/sequence', jsonBody('PUT', { id: e.id, is_active: !e.is_active }));
      notify(e.is_active ? 'Paused. New signups will skip this email.' : 'Resumed', 'success');
      loadSequence();
    } catch (err) {
      handle(err, 'Could not update it.');
    }
  }

  const activeSubscribers = subscribers.filter((s) => s.is_active).length;

  // ---------- Render ----------
  if (authState === 'checking') {
    return <div className="fixed inset-0 z-[100] bg-[#fafaf8]" />;
  }

  if (authState === 'out') {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#fafaf8] px-4">
        <form onSubmit={login} className="w-full max-w-sm rounded-2xl bg-white p-8 ring-1 ring-stone-200">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">Rojas Photography</p>
          <h1 className="mt-2 font-[family-name:var(--font-heading)] text-3xl text-stone-900">Newsletter studio</h1>
          <label htmlFor="admin-password" className="mt-6 block text-sm font-medium text-stone-800">Password</label>
          <input
            id="admin-password"
            type="password"
            autoFocus
            required
            className={cx(inputClass, 'mt-1.5')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {authError && <p className="mt-2 text-sm text-red-700">{authError}</p>}
          <Button type="submit" variant="primary" className="mt-5 w-full" disabled={authLoading}>
            {authLoading ? 'Signing in…' : 'Sign in'}
          </Button>
          <p className="mt-4 text-center text-xs text-stone-500">You&apos;ll stay signed in on this browser for 12 hours.</p>
        </form>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#fafaf8] text-stone-900 lg:flex-row">
      {/* Sidebar */}
      <aside className="flex shrink-0 flex-col border-stone-200 bg-white lg:w-64 lg:border-r">
        <div className="flex items-center justify-between gap-3 px-5 py-4 lg:block lg:px-6 lg:py-6">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-primary)]">Rojas Photography</p>
            <p className="font-[family-name:var(--font-heading)] text-xl text-stone-900">Newsletter studio</p>
          </div>
          <Button variant="primary" size="sm" className="lg:mt-5 lg:w-full" onClick={newNewsletter}>+ New newsletter</Button>
        </div>
        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-1 lg:flex-col lg:overflow-visible lg:pb-0" aria-label="Newsletter admin">
          {NAV.map((item) => {
            const current = section === item.id || (section === 'compose' && item.id === 'newsletters');
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                aria-current={current ? 'page' : undefined}
                className={cx(
                  'flex shrink-0 items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors',
                  current ? 'bg-emerald-50 font-medium text-[var(--color-primary)]' : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900',
                )}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={item.icon} />
                </svg>
                {item.label}
                {item.id === 'newsletters' && drafts.length > 0 && (
                  <span className="ml-auto rounded-full bg-stone-100 px-2 text-xs text-stone-600">{drafts.length}</span>
                )}
                {item.id === 'contacts' && (
                  <span className="ml-auto rounded-full bg-stone-100 px-2 text-xs text-stone-600">{activeSubscribers}</span>
                )}
              </button>
            );
          })}
        </nav>
        <div className="hidden border-t border-stone-100 px-6 py-4 lg:block">
          <Link href="/" className="block text-sm text-stone-500 hover:text-stone-800">View website</Link>
          <button onClick={logout} className="mt-1 text-sm text-stone-500 hover:text-stone-800">Sign out</button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <div className={cx('mx-auto px-4 py-8 lg:px-8', section === 'compose' ? 'max-w-[1400px]' : 'max-w-6xl')}>
          {section === 'dashboard' && (
            <Dashboard subscribers={subscribers} drafts={drafts} history={history} onNew={newNewsletter} onOpenDraft={openDraft} onGo={go} />
          )}
          {section === 'newsletters' && (
            <Newsletters
              drafts={drafts}
              history={history}
              onNew={newNewsletter}
              onOpenDraft={openDraft}
              onDuplicate={duplicate}
              onDelete={deleteDraft}
              onView={view}
            />
          )}
          {section === 'contacts' && <Contacts subscribers={subscribers} onAdd={addContact} onRemove={removeContact} />}
          {section === 'welcome' && (
            <WelcomeSeries
              emails={sequence}
              onEdit={editSequence}
              onPreview={(e) => setPreview({ title: e.subject || `Welcome email ${e.position}`, html: e.html_content || '' })}
              onTest={testSequence}
              onToggle={toggleSequence}
            />
          )}
          {section === 'reports' && <Reports history={history} onView={view} />}

          {/* Always mounted so the editor loads once and never loses work */}
          <Composer
            ref={composerRef}
            active={section === 'compose'}
            activeSubscribers={activeSubscribers}
            notify={notify}
            onSessionExpired={onSessionExpired}
            onChanged={() => {
              loadDrafts();
              loadSequence();
            }}
            onSent={() => {
              loadDrafts();
              loadHistory();
            }}
            onExit={(to) => go(to)}
          />
        </div>
      </main>

      <Modal open={preview !== null} onClose={() => setPreview(null)} title={preview?.title || 'Preview'} wide>
        {preview && <EmailFrame html={preview.html} title={preview.title} height={700} />}
      </Modal>
      <Toasts toasts={toasts} onDismiss={(id) => setToasts((t) => t.filter((x) => x.id !== id))} />
    </div>
  );
}
