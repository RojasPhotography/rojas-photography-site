import crypto from 'crypto';

// Shared pieces for every email we send: signed unsubscribe links,
// one-click unsubscribe headers, the compliance footer, and HTML escaping.

export const SITE_URL = 'https://rojasphotography.net';
export const REPLY_EMAIL = 'alfonso@rojasphotography.net';

// CAN-SPAM requires a valid physical postal address in every commercial email.
// Can be overridden with NEWSLETTER_POSTAL_ADDRESS in Vercel (e.g. if you switch to a P.O. box).
export const POSTAL_ADDRESS = process.env.NEWSLETTER_POSTAL_ADDRESS || '1905 Generations Dr, Modesto, CA 95356';

function signingKey() {
  // Prefer a dedicated secret; fall back to an existing server-only key so links work today.
  const key = process.env.NEWSLETTER_SIGNING_SECRET || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) throw new Error('No signing secret configured');
  return `unsubscribe:${key}`;
}

export function normalizeEmail(email: unknown): string | null {
  if (typeof email !== 'string') return null;
  const clean = email.trim().toLowerCase();
  if (clean.length > 254) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean)) return null;
  return clean;
}

export function unsubscribeToken(email: string): string {
  return crypto
    .createHmac('sha256', signingKey())
    .update(email.trim().toLowerCase())
    .digest('base64url')
    .slice(0, 32);
}

export function verifyUnsubscribeToken(email: string, token: string | null): boolean {
  if (!token) return false;
  const expected = Buffer.from(unsubscribeToken(email));
  const given = Buffer.from(token);
  return expected.length === given.length && crypto.timingSafeEqual(expected, given);
}

export function unsubscribeUrl(email: string): string {
  const e = encodeURIComponent(email.trim().toLowerCase());
  return `${SITE_URL}/api/newsletter/unsubscribe?email=${e}&t=${unsubscribeToken(email)}`;
}

// Gmail and Yahoo look for these to show their built-in "Unsubscribe" button.
export function unsubscribeHeaders(email: string): Record<string, string> {
  return {
    'List-Unsubscribe': `<${unsubscribeUrl(email)}>, <mailto:${REPLY_EMAIL}?subject=unsubscribe>`,
    'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
  };
}

export function escapeHtml(value: unknown): string {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function complianceFooter(email: string | null): string {
  const link = email ? unsubscribeUrl(email) : '#';
  return `
    <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 0 20px 32px; color: #888;">
      <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0 20px;" />
      <p style="font-size: 13px; margin: 0 0 8px;">Alfonso &amp; Niomi Rojas<br/>Rojas Photography LLC &middot; ${escapeHtml(POSTAL_ADDRESS)}</p>
      <p style="font-size: 12px; margin: 0; color: #aaa;">
        You're getting this because you connected with Rojas Photography.
        <a href="${link}" style="color: #aaa;">Unsubscribe</a>
      </p>
    </div>`;
}

// Every email gets the footer, inserted before </body> when the HTML is a full document.
export function withFooter(html: string, email: string | null, extra = ''): string {
  const footer = complianceFooter(email) + extra;
  return /<\/body>/i.test(html) ? html.replace(/<\/body>/i, `${footer}</body>`) : `${html}${footer}`;
}

// Replaces {{first_name}} and {{name}}. With no name: use `fallback` ("Hi there,"),
// or when fallback is null drop the token and the comma before it ("Hi,").
export function personalize(
  html: string,
  name: string | null | undefined,
  fallback: string | null = 'there',
): string {
  const first = name?.trim().split(/\s+/)[0] || '';
  let out = html;
  if (first) out = out.replace(/\{\{first_name\}\}/gi, escapeHtml(first));
  else if (fallback) out = out.replace(/\{\{first_name\}\}/gi, fallback);
  else out = out.replace(/,?\s*\{\{first_name\}\}/gi, '');
  return out.replace(/\{\{name\}\}/gi, name ? escapeHtml(name) : fallback ?? '');
}
