import { getSupabase } from '@/app/lib/supabase-server';
import { NextResponse } from 'next/server';

// GET — list all drafts (or sent history), or fetch one by id
export async function GET(request: Request) {
  const supabase = getSupabase();
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const status = searchParams.get('status') || 'draft';

  if (id) {
    const { data, error } = await supabase
      .from('newsletters')
      .select('id, subject, content, html_content, created_at, updated_at')
      .eq('id', id)
      .eq('status', 'draft')
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

// POST — save or update a draft
export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    const { password, id, subject, content, html_content } = await request.json();

    if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (id) {
      // Update existing draft
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
        .select('id')
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, id: data.id });
    } else {
      // Create new draft
      const { data, error } = await supabase
        .from('newsletters')
        .insert({
          subject: subject || 'Untitled Draft',
          content,
          html_content,
          status: 'draft',
          created_by: 'alfonso@rojasphotography.net',
        })
        .select('id')
        .single();

      if (error) throw error;
      return NextResponse.json({ success: true, id: data.id });
    }
  } catch (error) {
    console.error('Draft save error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

// DELETE — delete a draft
export async function DELETE(request: Request) {
  try {
    const supabase = getSupabase();
    const { password, id } = await request.json();

    if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await supabase.from('newsletters').delete().eq('id', id).eq('status', 'draft');
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Draft delete error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
