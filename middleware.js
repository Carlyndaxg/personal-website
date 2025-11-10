import { NextResponse } from "next/server";

export function middleware(req) {
  const cookie = req.cookies.get(process.env.PASSWORD_COOKIE_NAME);

  if (!cookie && req.nextUrl.pathname.startsWith("/")) {
    return NextResponse.rewrite(new URL("/", req.url)); 
  }

  return NextResponse.next();
}
