"use client";

import Head from "next/head";

export default function LoginPage() {
  return (
    <>
      <Head>
        <title>Password Required</title>
      </Head>
      <main>
        <h2>Password Required</h2>
        <form method="POST" action="/api/login">
          <input type="password" name="password" required />
          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}
