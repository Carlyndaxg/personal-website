import { serialize } from "cookie";

export async function POST(req) {
  const formData = await req.formData();
  const password = formData.get("password");

  if (password !== process.env.PAGE_PASSWORD) {
    return new Response(
      `<p> Incorrect password. <a href="/">Try again</a>.</p>`,
      { headers: { "Content-Type": "text/html" }, status: 401 }
    );
  }

  const cookie = serialize(process.env.PASSWORD_COOKIE_NAME, "true", {
    httpOnly: true,
    path: "/",
    sameSite: "strict",
    maxAge: 3600, 
  });

  return new Response(
    `<script>window.location='/'</script>`,
    {
      headers: {
        "Set-Cookie": cookie,
        "Content-Type": "text/html",
        "Cache-Control": "no-store",
      },
    }
  );
}
