import { NextResponse } from "next/server";
import * as cookie from "cookie";

export default function middleware(request) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = cookie.parse(cookieHeader);
  const authCookie = cookies[process.env.PASSWORD_COOKIE_NAME];

  const loginPath = "/login";
  const isLogin = request.nextUrl.pathname.startsWith(loginPath);

  if (!authCookie && !isLogin) {
    return NextResponse.redirect(new URL(loginPath, request.url));
  }

  return NextResponse.next();
}

export const config = {
  runtime: "nodejs", 
  matcher: ["/", "/index.html"],
};
