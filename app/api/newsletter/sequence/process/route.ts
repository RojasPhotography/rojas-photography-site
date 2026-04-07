import { getSupabase } from '@/app/lib/supabase-server';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Called by Vercel Cron every hour — processes pending sequence emails that are due
export async function POST(request: Request) {
  // Verify cron secret or admin password
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET;

  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getSupabase();
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Find all pending queue items that are due to be sent
  const { data: dueItems, error: fetchError } = await supabase
    .from('sequence_queue')
    .select(`
      id,
      subscriber_email,
      sequence_email_id,
      sequence_emails (
        id,
        position,
        subject,
        html_content,
        is_active
      )
    `)
    .eq('status', 'pending')
    .lte('scheduled_for', new Date().toISOString())
    .limit(50); // process in batches of 50

  if (fetchError) {
    console.error('Sequence process fetch error:', fetchError);
    return NextResponse.json({ error: fetchError.message }, { status: 500 });
  }

  if (!dueItems || dueItems.length === 0) {
    return NextResponse.json({ processed: 0, message: 'No emails due' });
  }

  let sent = 0;
  let skipped = 0;
  let failed = 0;

  for (const item of dueItems) {
    const seqEmail = item.sequence_emails as {
      id: number;
      position: number;
      subject: string;
      html_content: string;
      is_active: boolean;
    } | null;

    // Skip if sequence email is disabled or has no content
    if (!seqEmail || !seqEmail.is_active || !seqEmail.html_content) {
      await supabase
        .from('sequence_queue')
        .update({ status: 'skipped' })
        .eq('id', item.id);
      skipped++;
      continue;
    }

    // Check subscriber is still active
    const { data: subscriber } = await supabase
      .from('subscribers')
      .select('is_active, name')
      .eq('email', item.subscriber_email)
      .single();

    if (!subscriber?.is_active) {
      await supabase
        .from('sequence_queue')
        .update({ status: 'skipped' })
        .eq('id', item.id);
      skipped++;
      continue;
    }

    // Personalize subject and body with subscriber name
    const firstName = subscriber.name ? subscriber.name.split(' ')[0] : null;
    const personalizedHtml = firstName
      ? seqEmail.html_content.replace(/\{\{first_name\}\}/g, firstName)
      : seqEmail.html_content.replace(/,?\s*\{\{first_name\}\}/g, '');

    try {
      await resend.emails.send({
        from: 'Alfonso & Niomi Rojas <alfonso@rojasphotography.net>',
        to: item.subscriber_email,
        subject: seqEmail.subject,
        html: personalizedHtml,
      });

      await supabase
        .from('sequence_queue')
        .update({ status: 'sent', sent_at: new Date().toISOString() })
        .eq('id', item.id);

      sent++;
    } catch (err) {
      console.error(`Failed to send sequence email to ${item.subscriber_email}:`, err);
      await supabase
        .from('sequence_queue')
        .update({ status: 'failed' })
        .eq('id', item.id);
      failed++;
    }
  }

  return NextResponse.json({ processed: dueItems.length, sent, skipped, failed });
}
