import { NextResponse } from 'next/server';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function GET() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: 'Not configured' }, { status: 503 });
  }

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/subscribers?limit=1`,
      {
        headers: {
          'apikey': SERVICE_ROLE_KEY,
          'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        },
      }
    );

    if (!response.ok) throw new Error(`Supabase responded with ${response.status}`);

    return NextResponse.json({ ok: true, pinged: new Date().toISOString() });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ error: 'Ping failed', detail: message }, { status: 500 });
  }
}
