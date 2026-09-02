import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');

  // www → non-www with 301
  if (host?.startsWith('www.')) {
    const newHost = host.replace('www.', '');
    return NextResponse.redirect(
      `https://${newHost}${request.nextUrl.pathname}${request.nextUrl.search}`,
      { status: 301 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
