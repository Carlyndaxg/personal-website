import { NextResponse } from "next/server";

export function middleware(req) {
  const authHeader = req.headers.get("authorization");
  const USER = "guest"; 
  const PASS = process.env.SITE_PASSWORD; 

  if (authHeader) {
    const [, encoded] = authHeader.split(" ");
    const [user, pass] = Buffer.from(encoded, "base64").toString().split(":");

    if (user === USER && pass === PASS) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authorization required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"], 
};
