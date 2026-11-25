'use client';

import { useMemo, useState } from 'react';
import type { Draft, SentNewsletter, SequenceEmail, Subscriber } from '../_lib/api';
import { formatDate, timeAgo } from '../_lib/api';
import { Badge, Button, Card, EmptyState, Field, Metric, PageHeader, cx, inputClass } from './ui';

// ---------------- Dashboard ----------------

export function Dashboard({
  subscribers,
  drafts,
  history,
  onNew,
  onOpenDraft,
  onGo,
}: {
  subscribers: Subscriber[];
  drafts: Draft[];
  history: SentNewsletter[];
  onNew: () => void;
  onOpenDraft: (id: number) => void;
  onGo: (section: 'newsletters' | 'contacts' | 'reports') => void;
}) {
  const active = subscribers.filter((s) => s.is_active);
  const [monthAgo] = useState(() => Date.now() - 30 * 24 * 60 * 60 * 1000);
  const newThisMonth = active.filter((s) => s.subscribed_at && new Date(s.subscribed_at).getTime() > monthAgo).length;
  const last = history[0];
  const latestDraft = drafts[0];

  return (
    <div>
      <PageHeader
        title="Good to see you"
        description="Here's where your newsletter stands."
        actions={<Button variant="primary" onClick={onNew}>+ New newsletter</Button>}
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric label="Active subscribers" value={active.length} hint={`${subscribers.length - active.length} unsubscribed`} />
        <Metric label="New in the last 30 days" value={newThisMonth} />
        <Metric
          label="Last open rate"
          value={last?.stats ? `${last.stats.openRate}%` : '—'}
          hint={last ? `“${last.subject}”` : 'Send your first newsletter to see this'}
        />
        <Metric label="Drafts in progress" value={drafts.length} />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-stone-900">Pick up where you left off</h2>
          {latestDraft ? (
            <div className="mt-4 flex items-center justify-between gap-4 rounded-xl bg-stone-50 p-4">
              <div className="min-w-0">
                <p className="truncate font-medium text-stone-900">{latestDraft.subject || 'Untitled Draft'}</p>
                <p className="text-sm text-stone-500">Edited {timeAgo(latestDraft.updated_at)}</p>
              </div>
              <Button variant="primary" size="sm" onClick={() => onOpenDraft(latestDraft.id)}>Continue</Button>
            </div>
          ) : (
            <p className="mt-3 text-sm text-stone-500">No drafts right now. Start one whenever you&apos;re ready.</p>
          )}
          {drafts.length > 1 && (
            <button onClick={() => onGo('newsletters')} className="mt-3 text-sm font-medium text-[var(--color-primary)] hover:underline">
              See all {drafts.length} drafts
            </button>
          )}
        </Card>

        <Card className="p-6">
          <h2 className="font-[family-name:var(--font-heading)] text-xl text-stone-900">Recent sends</h2>
          {history.length === 0 ? (
            <p className="mt-3 text-sm text-stone-500">Nothing sent yet.</p>
          ) : (
            <ul className="mt-3 divide-y divide-stone-100">
              {history.slice(0, 4).map((n) => (
                <li key={n.id} className="flex items-center justify-between gap-4 py-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-stone-900">{n.subject}</p>
                    <p className="text-xs text-stone-500">{formatDate(n.sent_at)}</p>
                  </div>
                  {n.stats && <OpenRate rate={n.stats.openRate} />}
                </li>
              ))}
            </ul>
          )}
          {history.length > 0 && (
            <button onClick={() => onGo('reports')} className="mt-2 text-sm font-medium text-[var(--color-primary)] hover:underline">
              View reports
            </button>
          )}
        </Card>
      </div>
    </div>
  );
}

function OpenRate({ rate }: { rate: number }) {
  return (
    <div className="flex w-32 shrink-0 items-center gap-2">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100">
        <div className="h-full rounded-full bg-[var(--color-primary)]" style={{ width: `${Math.min(100, Math.max(0, rate))}%` }} />
      </div>
      <span className="w-10 text-right text-xs tabular-nums text-stone-600">{rate}%</span>
    </div>
  );
}

// ---------------- Newsletters ----------------

export function Newsletters({
  drafts,
  history,
  onNew,
  onOpenDraft,
  onDuplicate,
  onDelete,
  onView,
}: {
  drafts: Draft[];
  history: SentNewsletter[];
  onNew: () => void;
  onOpenDraft: (id: number) => void;
  onDuplicate: (id: number, subject: string) => void;
  onDelete: (draft: Draft) => void;
  onView: (id: number, subject: string) => void;
}) {
  const [tab, setTab] = useState<'drafts' | 'sent'>('drafts');

  return (
    <div>
      <PageHeader
        title="Newsletters"
        description="Drafts save automatically while you write. Sent newsletters stay here so you can reuse a design."
        actions={<Button variant="primary" onClick={onNew}>+ New newsletter</Button>}
      />

      <div className="mb-4 inline-flex rounded-lg bg-stone-100 p-1">
        {(['drafts', 'sent'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cx('rounded-md px-4 py-1.5 text-sm font-medium', tab === t ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600 hover:text-stone-900')}
          >
            {t === 'drafts' ? `Drafts (${drafts.length})` : `Sent (${history.length})`}
          </button>
        ))}
      </div>

      <Card>
        {tab === 'drafts' ? (
          drafts.length === 0 ? (
            <EmptyState title="Start your next newsletter" body="Write it, preview it on a phone, send yourself a test, then send." action={<Button variant="primary" onClick={onNew}>New newsletter</Button>} />
          ) : (
            <ul className="divide-y divide-stone-100">
              {drafts.map((d) => (
                <li key={d.id} className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <button onClick={() => onOpenDraft(d.id)} className="min-w-0 text-left">
                    <p className="truncate font-medium text-stone-900 hover:underline">{d.subject || 'Untitled Draft'}</p>
                    <p className="text-sm text-stone-500">Edited {timeAgo(d.updated_at)}</p>
                  </button>
                  <div className="flex gap-2">
                    <Button size="sm" variant="primary" onClick={() => onOpenDraft(d.id)}>Open</Button>
                    <Button size="sm" onClick={() => onDuplicate(d.id, d.subject)}>Duplicate</Button>
                    <Button size="sm" variant="ghost" onClick={() => onDelete(d)}>Delete</Button>
                  </div>
                </li>
              ))}
            </ul>
          )
        ) : history.length === 0 ? (
          <EmptyState title="Nothing sent yet" body="Once you send a newsletter, it shows up here with its results." />
        ) : (
          <ul className="divide-y divide-stone-100">
            {history.map((n) => (
              <li key={n.id} className="flex flex-col gap-3 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <p className="truncate font-medium text-stone-900">{n.subject}</p>
                  <p className="text-sm text-stone-500">
                    Sent {formatDate(n.sent_at)}
                    {n.stats ? ` · ${n.stats.sent} delivered · ${n.stats.openRate}% opened` : ''}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => onView(n.id, n.subject)}>View</Button>
                  <Button size="sm" onClick={() => onDuplicate(n.id, n.subject)}>Reuse design</Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}

// ---------------- Contacts ----------------

export function Contacts({
  subscribers,
  onAdd,
  onRemove,
}: {
  subscribers: Subscriber[];
  onAdd: (name: string, email: string) => Promise<boolean>;
  onRemove: (s: Subscriber) => void;
}) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'active' | 'unsubscribed' | 'all'>('active');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [adding, setAdding] = useState(false);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return subscribers.filter((s) => {
      if (filter === 'active' && !s.is_active) return false;
      if (filter === 'unsubscribed' && s.is_active) return false;
      return !q || s.email.toLowerCase().includes(q) || (s.name || '').toLowerCase().includes(q);
    });
  }, [subscribers, query, filter]);

  const activeCount = subscribers.filter((s) => s.is_active).length;

  function exportCsv() {
    const rows = [['name', 'email', 'status', 'joined'], ...subscribers.map((s) => [s.name || '', s.email, s.is_active ? 'active' : 'unsubscribed', s.subscribed_at || ''])];
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = `rojas-newsletter-contacts-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setAdding(true);
    const ok = await onAdd(name.trim(), email.trim());
    setAdding(false);
    if (ok) {
      setName('');
      setEmail('');
    }
  }

  return (
    <div>
      <PageHeader
        title="Contacts"
        description={`${activeCount} active subscriber${activeCount === 1 ? '' : 's'}. People who unsubscribe stay listed so they are never re-added by accident.`}
        actions={<Button onClick={exportCsv}>Export CSV</Button>}
      />

      <Card className="mb-6 p-6">
        <h2 className="font-[family-name:var(--font-heading)] text-lg text-stone-900">Add someone who said yes</h2>
        <p className="mt-1 text-sm text-stone-500">
          Only add people who asked to hear from you. They won&apos;t get the welcome emails, since you already know them.
        </p>
        <form onSubmit={submit} className="mt-4 grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-end">
          <Field label="Name" htmlFor="add-name">
            <input id="add-name" className={inputClass} value={name} onChange={(e) => setName(e.target.value)} placeholder="Jordan Lee" />
          </Field>
          <Field label="Email" htmlFor="add-email">
            <input id="add-email" type="email" required className={inputClass} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jordan@company.com" />
          </Field>
          <Button type="submit" variant="primary" disabled={adding}>{adding ? 'Adding…' : 'Add contact'}</Button>
        </form>
      </Card>

      <Card>
        <div className="flex flex-col gap-3 border-b border-stone-100 p-4 sm:flex-row sm:items-center sm:justify-between">
          <input className={cx(inputClass, 'sm:max-w-xs')} placeholder="Search name or email" value={query} onChange={(e) => setQuery(e.target.value)} aria-label="Search contacts" />
          <div className="inline-flex rounded-lg bg-stone-100 p-1">
            {(['active', 'unsubscribed', 'all'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cx('rounded-md px-3 py-1 text-sm capitalize', filter === f ? 'bg-white text-stone-900 shadow-sm' : 'text-stone-600')}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
        {shown.length === 0 ? (
          <EmptyState title="No one matches" body="Try a different search or filter." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-stone-500">
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Email</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Joined</th>
                  <th className="px-6 py-3" />
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {shown.map((s) => (
                  <tr key={s.id} className="hover:bg-stone-50">
                    <td className="px-6 py-3 text-stone-900">{s.name || <span className="text-stone-400">—</span>}</td>
                    <td className="px-6 py-3 text-stone-700">{s.email}</td>
                    <td className="px-6 py-3">{s.is_active ? <Badge tone="green">Active</Badge> : <Badge>Unsubscribed</Badge>}</td>
                    <td className="px-6 py-3 text-stone-500">{formatDate(s.subscribed_at)}</td>
                    <td className="px-6 py-3 text-right">
                      {s.is_active && <Button size="sm" variant="ghost" onClick={() => onRemove(s)}>Unsubscribe</Button>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}

// ---------------- Welcome series ----------------

export function WelcomeSeries({
  emails,
  onEdit,
  onPreview,
  onTest,
  onToggle,
}: {
  emails: SequenceEmail[];
  onEdit: (e: SequenceEmail) => void;
  onPreview: (e: SequenceEmail) => void;
  onTest: (e: SequenceEmail) => Promise<void>;
  onToggle: (e: SequenceEmail) => void;
}) {
  const [testing, setTesting] = useState<number | null>(null);

  return (
    <div>
      <PageHeader
        title="Welcome series"
        description="Everyone who signs up on the website gets these automatically, on the schedule below. People you add by hand skip them."
      />
      {emails.length === 0 ? (
        <Card><EmptyState title="No welcome emails yet" body="The welcome series tables haven't been set up in the database." /></Card>
      ) : (
        <ol className="relative space-y-4 before:absolute before:bottom-6 before:left-[27px] before:top-6 before:w-px before:bg-stone-200">
          {emails.map((e) => (
            <li key={e.id} className="relative flex gap-4">
              <div className={cx('z-10 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full text-white', e.is_active ? 'bg-[var(--color-primary)]' : 'bg-stone-300')}>
                <span className="text-[10px] uppercase leading-none tracking-wide">Day</span>
                <span className="text-lg leading-none">{e.position === 1 ? 0 : e.delay_days}</span>
              </div>
              <Card className="flex flex-1 flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-medium text-stone-900">{e.subject || <span className="italic text-stone-400">No subject yet</span>}</p>
                    {!e.is_active && <Badge>Paused</Badge>}
                    {!e.html_content && <Badge tone="red">No content</Badge>}
                  </div>
                  <p className="mt-1 text-sm text-stone-500">
                    {e.position === 1 ? 'Sent right after signup' : `Sent ${e.delay_days} days after signup`} · {e.stats.sent} sent
                    {e.stats.pending > 0 && ` · ${e.stats.pending} waiting`}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {e.html_content && <Button size="sm" onClick={() => onPreview(e)}>Preview</Button>}
                  {e.html_content && (
                    <Button
                      size="sm"
                      disabled={testing === e.id}
                      onClick={async () => {
                        setTesting(e.id);
                        await onTest(e);
                        setTesting(null);
                      }}
                    >
                      {testing === e.id ? 'Sending…' : 'Send test'}
                    </Button>
                  )}
                  {e.position !== 1 && <Button size="sm" variant="ghost" onClick={() => onToggle(e)}>{e.is_active ? 'Pause' : 'Resume'}</Button>}
                  {e.position === 1 ? (
                    <Badge tone="blue">Built into the website code</Badge>
                  ) : (
                    <Button size="sm" variant="primary" onClick={() => onEdit(e)}>Edit</Button>
                  )}
                </div>
              </Card>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

// ---------------- Reports ----------------

export function Reports({ history, onView }: { history: SentNewsletter[]; onView: (id: number, subject: string) => void }) {
  const withStats = history.filter((h) => h.stats && h.stats.sent > 0);
  const avg = withStats.length ? Math.round(withStats.reduce((t, h) => t + (h.stats?.openRate ?? 0), 0) / withStats.length) : null;

  return (
    <div>
      <PageHeader title="Reports" description="Opens are counted when someone's email app loads images, so treat them as a trend rather than an exact number." />
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        <Metric label="Newsletters sent" value={history.length} />
        <Metric label="Average open rate" value={avg === null ? '—' : `${avg}%`} />
        <Metric label="Emails delivered" value={withStats.reduce((t, h) => t + (h.stats?.sent ?? 0), 0)} />
      </div>
      <Card>
        {history.length === 0 ? (
          <EmptyState title="No results yet" body="Send your first newsletter and its results will show up here." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-stone-500">
                  <th className="px-6 py-3 font-medium">Newsletter</th>
                  <th className="px-6 py-3 font-medium">Sent</th>
                  <th className="px-6 py-3 font-medium">Delivered</th>
                  <th className="px-6 py-3 font-medium">Opened</th>
                  <th className="px-6 py-3 font-medium">Failed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100">
                {history.map((h) => (
                  <tr key={h.id} className="hover:bg-stone-50">
                    <td className="max-w-xs px-6 py-3">
                      <button onClick={() => onView(h.id, h.subject)} className="truncate text-left font-medium text-stone-900 hover:underline">{h.subject}</button>
                    </td>
                    <td className="px-6 py-3 text-stone-500">{formatDate(h.sent_at)}</td>
                    <td className="px-6 py-3 tabular-nums">{h.stats?.sent ?? '—'}</td>
                    <td className="px-6 py-3">{h.stats ? <OpenRate rate={h.stats.openRate} /> : '—'}</td>
                    <td className="px-6 py-3 tabular-nums">{h.stats?.failed ? <span className="text-red-700">{h.stats.failed}</span> : 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
      <p className="mt-4 text-sm text-stone-500">Click tracking and bounce reports arrive with the move to Resend Broadcasts.</p>
    </div>
  );
}
