import { getSupabase } from '@/app/lib/supabase-server';
import { isAdmin, unauthorized } from '@/app/lib/newsletter-auth';
import { personalize, withFooter, unsubscribeHeaders, SITE_URL } from '@/app/lib/newsletter-email';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Resend accepts up to 100 emails per batch call and limits how fast calls can come in,
// so we pace the calls and retry when Resend asks us to slow down.
const BATCH_SIZE = 100;
const PAUSE_MS = 600;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Give large lists time to finish (Vercel Hobby allows up to 60s)
export const maxDuration = 60;

export async function POST(request: Request) {
  if (!(await isAdmin())) return unauthorized();

  try {
    const supabase = getSupabase();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { id, subject, content, html_content } = await request.json();

    if (!subject || !html_content) {
      return NextResponse.json({ error: 'Subject and content are required' }, { status: 400 });
    }

    const { data: subscribers, error } = await supabase
      .from('subscribers')
      .select('id, email, name')
      .eq('is_active', true);

    if (error) throw error;
    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ error: 'No active subscribers' }, { status: 400 });
    }

    // Claim the newsletter. Sending the draft itself (instead of copying it and
    // deleting the draft) means work is never lost, and the status check makes
    // a double click or a second tab unable to send it twice.
    let newsletterId: number;
    if (id) {
      const { data: claimed, error: claimError } = await supabase
        .from('newsletters')
        .update({ subject, content: content || html_content, html_content, status: 'sending', updated_at: new Date().toISOString() })
        .eq('id', id)
        .eq('status', 'draft')
        .select('id')
        .maybeSingle();
      if (claimError) throw claimError;
      if (!claimed) {
        return NextResponse.json({ error: 'This newsletter is already sending or was already sent.' }, { status: 409 });
      }
      newsletterId = claimed.id;
    } else {
      const { data: created, error: createError } = await supabase
        .from('newsletters')
        .insert({
          subject,
          content: content || html_content,
          html_content,
          status: 'sending',
          created_by: 'alfonso@rojasphotography.net',
        })
        .select('id')
        .single();
      if (createError) throw createError;
      newsletterId = created.id;
    }

    let sent = 0;
    let failed = 0;

    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const batch = subscribers.slice(i, i + BATCH_SIZE);

      const emails = batch.map((subscriber) => {
        const pixel = `<img src="${SITE_URL}/api/newsletter/track?n=${newsletterId}&s=${subscriber.id}" width="1" height="1" style="display:block;width:1px;height:1px;opacity:0;" alt="" />`;
        return {
          from: 'Alfonso Rojas <alfonso@rojasphotography.net>',
          to: subscriber.email,
          subject,
          html: withFooter(personalize(html_content, subscriber.name), subscriber.email, pixel),
          headers: unsubscribeHeaders(subscriber.email),
          // Lets Resend's open/click events be matched back to this newsletter and person
          tags: [
            { name: 'newsletter_id', value: String(newsletterId) },
            { name: 'subscriber_id', value: String(subscriber.id) },
          ],
        };
      });

      if (i > 0) await sleep(PAUSE_MS);

      // The idempotency key means a retry can never deliver the same batch twice
      const idempotencyKey = `newsletter-${newsletterId}-batch-${i / BATCH_SIZE}`;
      let batchFailed = true;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const { error: batchError } = await resend.batch.send(emails, { idempotencyKey });
          if (!batchError) {
            batchFailed = false;
            break;
          }
          console.error('Batch send error:', batchError);
          // Only "slow down" and temporary server errors are worth retrying
          const retryable = batchError.name === 'rate_limit_exceeded' || batchError.name === 'internal_server_error';
          if (!retryable) break;
        } catch (err) {
          console.error('Batch send exception:', err);
        }
        await sleep(1500 * (attempt + 1));
      }

      await supabase.from('email_events').insert(
        batch.map((subscriber) => ({
          newsletter_id: newsletterId,
          subscriber_id: subscriber.id,
          subscriber_email: subscriber.email,
          event_type: batchFailed ? 'failed' : 'sent',
        })),
      );

      if (batchFailed) failed += batch.length;
      else sent += batch.length;
    }

    if (sent === 0) {
      // Nothing went out: put it back to a draft so nothing is lost and it can be retried
      await supabase
        .from('newsletters')
        .update({ status: 'draft', updated_at: new Date().toISOString() })
        .eq('id', newsletterId);
      return NextResponse.json(
        { error: 'Resend did not accept any emails, so nothing was sent. Your draft is safe. Check the Resend dashboard and try again.' },
        { status: 502 },
      );
    }

    await supabase
      .from('newsletters')
      .update({ status: 'sent', sent_at: new Date().toISOString() })
      .eq('id', newsletterId);

    return NextResponse.json({ success: true, id: newsletterId, sent, failed });
  } catch (error) {
    console.error('Send error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
