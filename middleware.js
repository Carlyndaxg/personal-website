import { NextResponse } from 'next/server';

export default function middleware(request) {
  const cookieName = process.env.PASSWORD_COOKIE_NAME || 'auth_token';
  const authCookie = request.cookies.get(cookieName);

  const loginPath = '/login';
  const isLogin = request.nextUrl.pathname.startsWith(loginPath);

  if (!authCookie && !isLogin) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/index.html'],
  runtime: 'nodejs',
};
