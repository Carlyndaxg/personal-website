import { NextResponse } from 'next/server';

export function middleware(request) {
  const cookie = request.cookies.get(process.env.PASSWORD_COOKIE_NAME);
  const loginPath = '/login';
  const isLogin = request.nextUrl.pathname.startsWith(loginPath);
  if (!cookie && !isLogin) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }
  return NextResponse.next();
}
export const config = {
  matcher: ['/', '/index.html'], 
};
