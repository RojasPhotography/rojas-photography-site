import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { password, subject, content, html_content } = await request.json();

    if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!subject || !html_content) {
      return NextResponse.json({ error: 'Subject and content are required' }, { status: 400 });
    }

    // Get all active subscribers
    const { data: subscribers, error } = await supabase
      .from('subscribers')
      .select('id, email, name')
      .eq('is_active', true);

    if (error) throw error;
    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ error: 'No active subscribers' }, { status: 400 });
    }

    // Log newsletter to newsletters table
    const { data: newsletter, error: newsletterError } = await supabase
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

    if (newsletterError) throw newsletterError;

    // Send to each subscriber
    let sent = 0;
    let failed = 0;

    for (const subscriber of subscribers) {
      try {
        await resend.emails.send({
          from: 'Alfonso Rojas <alfonso@rojasphotography.net>',
          to: subscriber.email,
          subject,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333;">
              ${html_content}
              <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;" />
              <p style="font-size: 13px; color: #888;">
                — Alfonso & Niomi Rojas<br/>Rojas Photography · Modesto, CA
              </p>
              <p style="font-size: 12px; color: #aaa;">
                <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email=${encodeURIComponent(subscriber.email)}" style="color: #aaa;">Unsubscribe</a>
              </p>
            </div>
          `,
        });

        // Log successful send event
        await supabase.from('email_events').insert({
          newsletter_id: newsletter.id,
          subscriber_id: subscriber.id,
          subscriber_email: subscriber.email,
          event_type: 'sent',
        });

        sent++;
      } catch {
        // Log failed send event
        await supabase.from('email_events').insert({
          newsletter_id: newsletter.id,
          subscriber_id: subscriber.id,
          subscriber_email: subscriber.email,
          event_type: 'failed',
        });
        failed++;
      }
    }

    // Update newsletter status to sent
    await supabase
      .from('newsletters')
      .update({ status: 'sent', sent_at: new Date().toISOString() })
      .eq('id', newsletter.id);

    return NextResponse.json({ success: true, sent, failed });
  } catch (error) {
    console.error('Send error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
