import { getSupabase } from '@/app/lib/supabase-server';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Resend calls this for every delivery, open, click, bounce and spam complaint.
// Setup (one time, in the Resend dashboard):
//   1. Domains → rojasphotography.net → turn on Open tracking and Click tracking
//   2. Webhooks → Add endpoint: https://rojasphotography.net/api/newsletter/webhook
//      with events: delivered, opened, clicked, bounced, complained
//   3. Copy the endpoint's signing secret into Vercel as RESEND_WEBHOOK_SECRET

const EVENT_MAP: Record<string, string> = {
  'email.delivered': 'delivered',
  'email.opened': 'opened',
  'email.clicked': 'clicked',
  'email.bounced': 'bounced',
  'email.complained': 'complained',
};

export async function POST(request: Request) {
  const secret = process.env.RESEND_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 503 });
  }

  const payload = await request.text();
  let event: { type: string; data: Record<string, unknown> };
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    event = resend.webhooks.verify({
      payload,
      headers: {
        id: request.headers.get('svix-id') ?? '',
        timestamp: request.headers.get('svix-timestamp') ?? '',
        signature: request.headers.get('svix-signature') ?? '',
      },
      webhookSecret: secret,
    }) as unknown as { type: string; data: Record<string, unknown> };
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  const eventType = EVENT_MAP[event.type];
  if (!eventType) return NextResponse.json({ ignored: event.type });

  const data = event.data;
  const tags = (data.tags as Record<string, string> | undefined) ?? {};
  const newsletterId = /^\d+$/.test(tags.newsletter_id ?? '') ? Number(tags.newsletter_id) : null;
  const subscriberId = /^\d+$/.test(tags.subscriber_id ?? '') ? Number(tags.subscriber_id) : null;
  const email = String((data.to as string[] | undefined)?.[0] ?? '').toLowerCase();

  // Only newsletter sends carry a newsletter_id tag; ignore other emails (tests, welcome series)
  if (!newsletterId || !email) return NextResponse.json({ ignored: 'not a newsletter email' });

  const supabase = getSupabase();
  const row: Record<string, unknown> = {
    newsletter_id: newsletterId,
    subscriber_id: subscriberId,
    subscriber_email: email,
    event_type: eventType,
    link: eventType === 'clicked' ? (data.click as { link?: string } | undefined)?.link ?? null : null,
    resend_email_id: typeof data.email_id === 'string' ? data.email_id : null,
  };

  let { error } = await supabase.from('email_events').insert(row);
  if (error && /column .* does not exist|schema cache/i.test(error.message)) {
    // Tracking columns not added yet (see supabase/migrations): save the basics
    delete row.link;
    delete row.resend_email_id;
    ({ error } = await supabase.from('email_events').insert(row));
  }
  if (error) {
    console.error('Webhook insert failed:', error.message);
    return NextResponse.json({ error: 'Could not save event' }, { status: 500 });
  }

  // Keep the list healthy: stop emailing people who marked us as spam or hard-bounced
  const bounceType = (data.bounce as { type?: string } | undefined)?.type ?? '';
  if (eventType === 'complained' || (eventType === 'bounced' && /permanent/i.test(bounceType))) {
    await supabase
      .from('subscribers')
      .update({ is_active: false, unsubscribed_at: new Date().toISOString() })
      .ilike('email', email.replace(/[%_\\]/g, '\\$&'));
  }

  return NextResponse.json({ ok: true });
}
