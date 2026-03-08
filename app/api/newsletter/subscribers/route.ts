import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// GET — list all subscribers (active + inactive)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const password = searchParams.get('password');

  if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('subscribers')
    .select('id, email, name, is_active, subscribed_at')
    .order('subscribed_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE — deactivate (unsubscribe) a subscriber
export async function DELETE(request: Request) {
  try {
    const { password, email } = await request.json();

    if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await supabase
      .from('subscribers')
      .update({ is_active: false, unsubscribed_at: new Date().toISOString() })
      .eq('email', email);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
