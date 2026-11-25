import { getSupabase } from '@/app/lib/supabase-server';
import { escapeHtml, normalizeEmail, verifyUnsubscribeToken, SITE_URL } from '@/app/lib/newsletter-email';

// Links in new emails carry a signed token (?t=...) and unsubscribe in one click.
// Links in emails sent before this change have no token: they show a confirm
// button instead, so nobody can unsubscribe someone else just by visiting a URL.

function page(title: string, body: string, status = 200) {
  return new Response(
    `<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title}</title></head>
    <body style="font-family: Georgia, serif; text-align: center; padding: 60px 20px; color: #333; background: #faf8f5;">
      <div style="max-width: 460px; margin: 0 auto;">
        <h2 style="font-weight: normal;">${title}</h2>
        ${body}
        <p style="margin-top: 32px;"><a href="${SITE_URL}" style="color: #1F6B4D;">Return to rojasphotography.net</a></p>
      </div>
    </body></html>`,
    { status, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  );
}

async function unsubscribe(email: string) {
  const supabase = getSupabase();
  await supabase
    .from('subscribers')
    .update({ is_active: false, unsubscribed_at: new Date().toISOString() })
    .ilike('email', email.replace(/[%_\\]/g, '\\$&'));
}

const donePage = () =>
  page("You've been unsubscribed.", "<p>You won't receive any more newsletters from Rojas Photography. If that was a mistake, just reply to any of our emails.</p>");

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = normalizeEmail(searchParams.get('email'));
  const token = searchParams.get('t');

  if (!email) return page('That link looks incomplete.', '<p>Reply to any of our emails and we will take care of it for you.</p>', 400);

  if (verifyUnsubscribeToken(email, token)) {
    await unsubscribe(email);
    return donePage();
  }

  // Older link without a token: ask for a click to confirm
  return page(
    'Unsubscribe from our newsletter?',
    `<p>${escapeHtml(email)} will stop receiving newsletters from Rojas Photography.</p>
     <form method="POST" action="/api/newsletter/unsubscribe">
       <input type="hidden" name="email" value="${escapeHtml(email)}" />
       <button type="submit" style="margin-top: 12px; padding: 12px 28px; border: 0; border-radius: 999px; background: #1F6B4D; color: #fff; font-size: 15px; cursor: pointer;">Unsubscribe</button>
     </form>`,
  );
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const contentType = request.headers.get('content-type') || '';
  let formEmail: string | null = null;
  let oneClick = false;

  if (contentType.includes('form')) {
    const form = await request.formData();
    formEmail = form.get('email')?.toString() ?? null;
    oneClick = form.get('List-Unsubscribe') === 'One-Click';
  }

  // Gmail/Yahoo one-click: POST to the signed URL from the List-Unsubscribe header
  const queryEmail = normalizeEmail(searchParams.get('email'));
  if (queryEmail && verifyUnsubscribeToken(queryEmail, searchParams.get('t'))) {
    await unsubscribe(queryEmail);
    return oneClick ? new Response('OK', { status: 200 }) : donePage();
  }

  // Confirm button from the page above
  const email = normalizeEmail(formEmail);
  if (!email) return page('That link looks incomplete.', '<p>Reply to any of our emails and we will take care of it for you.</p>', 400);
  await unsubscribe(email);
  return donePage();
}
