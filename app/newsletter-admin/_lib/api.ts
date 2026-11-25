// Client-side helpers for the newsletter admin.

export interface Draft {
  id: number;
  subject: string;
  created_at: string;
  updated_at: string;
}

export interface NewsletterStats {
  sent: number;
  delivered?: number;
  opened: number;
  clicked?: number;
  bounced?: number;
  complained?: number;
  failed: number;
  openRate: number;
  clickRate?: number;
  topLinks?: { url: string; clicks: number }[];
  trackingConnected?: boolean;
}

export interface SentNewsletter {
  id: number;
  subject: string;
  sent_at: string;
  created_at: string;
  stats?: NewsletterStats;
}

export interface FullNewsletter {
  id: number;
  subject: string;
  content: string | null;
  html_content: string | null;
  status: string;
  updated_at: string;
  sent_at: string | null;
}

export interface Subscriber {
  id: number;
  email: string;
  name: string | null;
  is_active: boolean;
  subscribed_at: string;
}

export interface SequenceEmail {
  id: number;
  position: number;
  delay_days: number;
  subject: string;
  html_content: string | null;
  json_content: string | null;
  is_active: boolean;
  stats: { pending: number; sent: number };
}

export class SessionExpiredError extends Error {
  constructor() {
    super('Your session expired. Sign in again.');
  }
}

export async function api(url: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(url, init);
  if (res.status === 401) throw new SessionExpiredError();
  return res;
}

export async function apiJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await api(url, init);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error || 'Something went wrong. Try again.');
  return data as T;
}

export function jsonBody(method: string, body: unknown): RequestInit {
  return { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) };
}

export function errorMessage(err: unknown, fallback = 'Something went wrong. Try again.') {
  return err instanceof Error ? err.message : fallback;
}

export function formatDate(value: string | null | undefined, withTime = false) {
  if (!value) return '';
  const d = new Date(value);
  return d.toLocaleString('en-US', withTime
    ? { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' }
    : { month: 'short', day: 'numeric', year: 'numeric' });
}

export function timeAgo(value: string | null | undefined) {
  if (!value) return '';
  const minutes = Math.round((Date.now() - new Date(value).getTime()) / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes} min ago`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hr ago`;
  const days = Math.round(hours / 24);
  if (days < 30) return `${days} day${days === 1 ? '' : 's'} ago`;
  return formatDate(value);
}
