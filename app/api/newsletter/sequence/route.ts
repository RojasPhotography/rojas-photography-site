import { getSupabase } from '@/app/lib/supabase-server';
import { NextResponse } from 'next/server';

function unauthorized() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

// GET — list all sequence emails with queue stats
export async function GET(request: Request) {
  const supabase = getSupabase();
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('password');

  if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) return unauthorized();

  const { data, error } = await supabase
    .from('sequence_emails')
    .select('*')
    .order('position', { ascending: true });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // Attach queue stats for each email
  const withStats = await Promise.all(
    (data || []).map(async (email) => {
      const { count: pending } = await supabase
        .from('sequence_queue')
        .select('*', { count: 'exact', head: true })
        .eq('sequence_email_id', email.id)
        .eq('status', 'pending');

      const { count: sent } = await supabase
        .from('sequence_queue')
        .select('*', { count: 'exact', head: true })
        .eq('sequence_email_id', email.id)
        .eq('status', 'sent');

      return { ...email, stats: { pending: pending ?? 0, sent: sent ?? 0 } };
    })
  );

  return NextResponse.json(withStats);
}

// PUT — update a sequence email template
export async function PUT(request: Request) {
  const supabase = getSupabase();
  const { password, id, subject, html_content, json_content, is_active } = await request.json();

  if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) return unauthorized();

  const updates: Record<string, unknown> = { updated_at: new Date().toISOString() };
  if (subject !== undefined) updates.subject = subject;
  if (html_content !== undefined) updates.html_content = html_content;
  if (json_content !== undefined) updates.json_content = json_content;
  if (is_active !== undefined) updates.is_active = is_active;

  const { error } = await supabase
    .from('sequence_emails')
    .update(updates)
    .eq('id', id);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ success: true });
}
