import { getSupabase } from '@/app/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const newsletterId = searchParams.get('newsletter_id');

  if (!newsletterId) {
    return NextResponse.json({ error: 'newsletter_id required' }, { status: 400 });
  }

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from('email_events')
    .select('event_type')
    .eq('newsletter_id', newsletterId);

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
  }

  const sent = data.filter((e) => e.event_type === 'sent').length;
  const opened = data.filter((e) => e.event_type === 'opened').length;
  const failed = data.filter((e) => e.event_type === 'failed').length;
  const openRate = sent > 0 ? Math.round((opened / sent) * 100) : 0;

  return NextResponse.json({ sent, opened, failed, openRate });
}
