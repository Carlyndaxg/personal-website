import { NextResponse } from "next/server";

export function middleware(req) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  const USER = "guest";
  const PASS = process.env.SITE_PASSWORD;

  if (basicAuth) {
    const [scheme, encoded] = basicAuth.split(" ");

    if (scheme === "Basic") {
      const [user, pwd] = atob(encoded).split(":");
      if (user === USER && pwd === PASS) {
        return NextResponse.next(); 
      }
    }
  }

  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|access-denied).*)"],
};
