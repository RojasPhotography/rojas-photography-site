import { getSupabase } from '@/app/lib/supabase-server';
import { isAdmin, unauthorized } from '@/app/lib/newsletter-auth';
import { NextResponse } from 'next/server';

// Each person counts once per event type, no matter how many times they open or click,
// and whether the open came from Resend's tracking or our own pixel.
export async function GET(request: Request) {
  if (!(await isAdmin())) return unauthorized();

  const { searchParams } = new URL(request.url);
  const newsletterId = searchParams.get('newsletter_id');
  if (!newsletterId) {
    return NextResponse.json({ error: 'newsletter_id required' }, { status: 400 });
  }

  const supabase = getSupabase();
  let rows: { event_type: string; subscriber_email: string; link?: string | null }[] = [];

  const withLinks = await supabase
    .from('email_events')
    .select('event_type, subscriber_email, link')
    .eq('newsletter_id', newsletterId);
  if (!withLinks.error) {
    rows = withLinks.data ?? [];
  } else {
    const basic = await supabase
      .from('email_events')
      .select('event_type, subscriber_email')
      .eq('newsletter_id', newsletterId);
    if (basic.error) return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    rows = basic.data ?? [];
  }

  const people = (type: string) =>
    new Set(rows.filter((r) => r.event_type === type).map((r) => (r.subscriber_email || '').toLowerCase())).size;

  const sent = people('sent');
  const opened = people('opened');
  const clicked = people('clicked');
  const delivered = people('delivered');
  const bounced = people('bounced');
  const complained = people('complained');
  const failed = people('failed');
  const pct = (n: number) => (sent > 0 ? Math.round((n / sent) * 100) : 0);

  const linkCounts = new Map<string, Set<string>>();
  for (const r of rows) {
    if (r.event_type !== 'clicked' || !r.link) continue;
    if (!linkCounts.has(r.link)) linkCounts.set(r.link, new Set());
    linkCounts.get(r.link)!.add((r.subscriber_email || '').toLowerCase());
  }
  const topLinks = [...linkCounts.entries()]
    .map(([url, who]) => ({ url, clicks: who.size }))
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, 5);

  return NextResponse.json({
    sent,
    delivered,
    opened,
    clicked,
    bounced,
    complained,
    failed,
    openRate: pct(opened),
    clickRate: pct(clicked),
    topLinks,
    trackingConnected: delivered > 0,
  });
}
