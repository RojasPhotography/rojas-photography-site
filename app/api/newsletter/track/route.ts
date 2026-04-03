import { getSupabase } from '@/app/lib/supabase-server';
import { NextRequest, NextResponse } from 'next/server';

// 1x1 transparent GIF
const PIXEL = Buffer.from('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7', 'base64');

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const newsletterId = searchParams.get('n');
  const subscriberId = searchParams.get('s');

  if (newsletterId && subscriberId) {
    try {
      const supabase = getSupabase();

      // Only log the first open per subscriber per newsletter
      const { data: existing } = await supabase
        .from('email_events')
        .select('id')
        .eq('newsletter_id', newsletterId)
        .eq('subscriber_id', subscriberId)
        .eq('event_type', 'opened')
        .single();

      if (!existing) {
        await supabase.from('email_events').insert({
          newsletter_id: newsletterId,
          subscriber_id: subscriberId,
          event_type: 'opened',
        });
      }
    } catch {
      // Silently fail — never break email rendering
    }
  }

  return new NextResponse(PIXEL, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
      'Pragma': 'no-cache',
    },
  });
}
