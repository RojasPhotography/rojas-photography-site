import { getSupabase } from '@/app/lib/supabase-server';
import { isAdmin, unauthorized } from '@/app/lib/newsletter-auth';
import { normalizeEmail } from '@/app/lib/newsletter-email';
import { NextResponse } from 'next/server';

// GET: list all subscribers (active + inactive)
export async function GET() {
  if (!(await isAdmin())) return unauthorized();

  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('subscribers')
    .select('id, email, name, is_active, subscribed_at')
    .order('subscribed_at', { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json(data);
}

// DELETE: deactivate (unsubscribe) a subscriber
export async function DELETE(request: Request) {
  if (!(await isAdmin())) return unauthorized();

  try {
    const supabase = getSupabase();
    const { email } = await request.json();
    const clean = normalizeEmail(email);
    if (!clean) return NextResponse.json({ error: 'Invalid email' }, { status: 400 });

    await supabase
      .from('subscribers')
      .update({ is_active: false, unsubscribed_at: new Date().toISOString() })
      .ilike('email', clean.replace(/[%_\\]/g, '\\$&'));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
