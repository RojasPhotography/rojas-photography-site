import { getSupabase } from '@/app/lib/supabase-server';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const supabase = getSupabase();
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  await supabase
    .from('subscribers')
    .update({ is_active: false, unsubscribed_at: new Date().toISOString() })
    .eq('email', email);

  return new Response(
    `<html><body style="font-family: sans-serif; text-align: center; padding: 60px; color: #333;">
      <h2>You've been unsubscribed.</h2>
      <p>You won't receive any more emails from Rojas Photography.</p>
      <a href="https://rojasphotography.net" style="color: #1F6B4D;">Return to website</a>
    </body></html>`,
    { headers: { 'Content-Type': 'text/html' } }
  );
}
