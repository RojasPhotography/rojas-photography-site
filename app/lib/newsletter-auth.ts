import crypto from 'crypto';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

// Admin session for /newsletter-admin.
// After login, the browser holds a signed, HttpOnly cookie. The password itself
// never travels again and never appears in a URL. Changing
// NEWSLETTER_ADMIN_PASSWORD signs everyone out.

export const ADMIN_COOKIE = 'nl_admin';
export const SESSION_HOURS = 12;

function sign(key: string, value: string) {
  return crypto.createHmac('sha256', key).update(value).digest('base64url');
}

function safeEqual(a: string, b: string) {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && crypto.timingSafeEqual(ab, bb);
}

export function checkPassword(candidate: unknown): boolean {
  const expected = process.env.NEWSLETTER_ADMIN_PASSWORD;
  if (!expected || typeof candidate !== 'string') return false;
  // Hash both sides so the comparison is constant time regardless of length
  const a = crypto.createHash('sha256').update(candidate).digest();
  const b = crypto.createHash('sha256').update(expected).digest();
  return crypto.timingSafeEqual(a, b);
}

export function createSessionValue(): string {
  const key = process.env.NEWSLETTER_ADMIN_PASSWORD;
  if (!key) throw new Error('NEWSLETTER_ADMIN_PASSWORD is not set');
  const expires = String(Date.now() + SESSION_HOURS * 60 * 60 * 1000);
  return `${expires}.${sign(`session:${key}`, expires)}`;
}

export function isValidSession(value?: string | null): boolean {
  const key = process.env.NEWSLETTER_ADMIN_PASSWORD;
  if (!key || !value) return false;
  const [expires, signature] = value.split('.');
  if (!expires || !signature) return false;
  if (!/^\d+$/.test(expires) || Number(expires) < Date.now()) return false;
  return safeEqual(signature, sign(`session:${key}`, expires));
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  return isValidSession(store.get(ADMIN_COOKIE)?.value);
}

export function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized. Please sign in again.' }, { status: 401 });
}

export const sessionCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  path: '/',
  maxAge: SESSION_HOURS * 60 * 60,
};
