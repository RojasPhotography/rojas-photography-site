import { getSupabase } from '@/app/lib/supabase-server';
import { NextRequest, NextResponse } from 'next/server';

// 1x1 transparent GIF
const PIXEL = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');

// Our own open pixel. Resend's open tracking (via the webhook) is the main source;
// this is a backup. Stats count each person once, so the two never double count.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const newsletterId = searchParams.get('n');
  const subscriberId = searchParams.get('s');

  if (newsletterId && subscriberId && /^\d+$/.test(newsletterId) && /^\d+$/.test(subscriberId)) {
    try {
      const supabase = getSupabase();

      // email_events.subscriber_email is required. It was missing before, so every
      // open failed to save and reports always showed 0%.
      const { data: subscriber } = await supabase
        .from('subscribers')
        .select('email')
        .eq('id', subscriberId)
        .maybeSingle();

      if (subscriber?.email) {
        const { data: existing } = await supabase
          .from('email_events')
          .select('id')
          .eq('newsletter_id', newsletterId)
          .eq('subscriber_id', subscriberId)
          .eq('event_type', 'opened')
          .limit(1)
          .maybeSingle();

        if (!existing) {
          const { error } = await supabase.from('email_events').insert({
            newsletter_id: Number(newsletterId),
            subscriber_id: Number(subscriberId),
            subscriber_email: subscriber.email,
            event_type: 'opened',
          });
          if (error) console.error('Open tracking insert failed:', error.message);
        }
      }
    } catch (err) {
      console.error('Open tracking error:', err);
      // Never break email rendering
    }
  }

  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      Pragma: 'no-cache',
    },
  });
}
