import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Valider l'ID du fromage dans l'URL
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith('/nos-fromages/')) {
    const id = pathname.split('/')[2];
    if (!id) {
      return NextResponse.redirect(new URL('/nos-fromages', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/nos-fromages/:id*',
}; 