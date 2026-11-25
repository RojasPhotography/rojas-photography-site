import { getSupabase } from '@/app/lib/supabase-server';
import { isAdmin, unauthorized } from '@/app/lib/newsletter-auth';
import { NextResponse } from 'next/server';

// GET: list drafts (or sent history), or fetch one newsletter by id
export async function GET(request: Request) {
  if (!(await isAdmin())) return unauthorized();

  const supabase = getSupabase();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const status = searchParams.get('status') || 'draft';

  if (id) {
    const { data, error } = await supabase
      .from('newsletters')
      .select('id, subject, content, html_content, status, created_at, updated_at, sent_at')
      .eq('id', id)
      .single();
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  }

  if (status === 'sent') {
    const { data, error } = await supabase
      .from('newsletters')
      .select('id, subject, sent_at, created_at')
      .eq('status', 'sent')
      .order('sent_at', { ascending: false })
      .limit(20);
    if (error) return NextResponse.json({ error: error.message }, { status: 500 });
    return NextResponse.json(data);
  }

  const { data, error } = await supabase
    .from('newsletters')
    .select('id, subject, created_at, updated_at')
    .eq('status', 'draft')
    .order('updated_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// POST: create a draft, or update one that is still a draft
export async function POST(request: Request) {
  if (!(await isAdmin())) return unauthorized();

  try {
    const supabase = getSupabase();
    const { id, subject, content, html_content } = await request.json();

    if (id) {
      const { data, error } = await supabase
        .from('newsletters')
        .update({
          subject: subject || 'Untitled Draft',
          content,
          html_content,
          updated_at: new Date().toISOString(),
        })
        .eq('id', id)
        .eq('status', 'draft')
        .select('id, updated_at')
        .maybeSingle();

      if (error) throw error;
      if (!data) {
        return NextResponse.json(
          { error: 'This newsletter was already sent, so it can no longer be edited. Duplicate it to reuse the design.' },
          { status: 409 },
        );
      }
      return NextResponse.json({ success: true, id: data.id, updated_at: data.updated_at });
    }

    const { data, error } = await supabase
      .from('newsletters')
      .insert({
        subject: subject || 'Untitled Draft',
        content,
        html_content,
        status: 'draft',
        created_by: 'alfonso@rojasphotography.net',
      })
      .select('id, updated_at')
      .single();

    if (error) throw error;
    return NextResponse.json({ success: true, id: data.id, updated_at: data.updated_at });
  } catch (error) {
    console.error('Draft save error:', error);
    return NextResponse.json({ error: 'Could not save the draft. Please try again.' }, { status: 500 });
  }
}

// DELETE: delete a draft (never a sent newsletter)
export async function DELETE(request: Request) {
  if (!(await isAdmin())) return unauthorized();

  try {
    const supabase = getSupabase();
    const { id } = await request.json();
    await supabase.from('newsletters').delete().eq('id', id).eq('status', 'draft');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Draft delete error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
