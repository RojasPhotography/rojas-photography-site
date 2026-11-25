import { NextResponse } from 'next/server';
import {
  ADMIN_COOKIE,
  checkPassword,
  createSessionValue,
  isAdmin,
  sessionCookieOptions,
} from '@/app/lib/newsletter-auth';

// GET: is this browser signed in?
export async function GET() {
  return NextResponse.json({ authenticated: await isAdmin() });
}

// POST: sign in with the admin password, receive a session cookie
export async function POST(request: Request) {
  try {
    const { password } = await request.json();
    if (!checkPassword(password)) {
      // Slow down guessing
      await new Promise((resolve) => setTimeout(resolve, 800));
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }
    const response = NextResponse.json({ success: true });
    response.cookies.set(ADMIN_COOKIE, createSessionValue(), sessionCookieOptions);
    return response;
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

// DELETE: sign out
export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.set(ADMIN_COOKIE, '', { ...sessionCookieOptions, maxAge: 0 });
  return response;
}
