import { NextResponse } from 'next/server';
import { isAdmin, unauthorized } from '@/app/lib/newsletter-auth';

export async function GET() {
  if (!(await isAdmin())) return unauthorized();

  try {
    const response = await fetch('https://auth.getbee.io/loginV2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.BEEFREE_CLIENT_ID,
        client_secret: process.env.BEEFREE_CLIENT_SECRET,
        uid: 'rojas-photography-newsletter',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Failed to get Beefree token');
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Beefree token error:', error);
    return NextResponse.json({ error: 'Failed to authenticate with Beefree' }, { status: 500 });
  }
}
