"use client"; 

export default function LoginPage() {
  return (
    <html>
      <head>
        <title>Password Required</title>
      </head>
      <body>
        <h2>Password Required</h2>
        <form method="POST" action="/api/login">
          <input type="password" name="password" required />
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  );
}
