import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Carlynda Gao - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Carlynda's personal website" />
      </Head>
      <iframe
        src="/index.html"
        style={{ width: "100%", height: "100vh", border: "none" }}
        title="Homepage"
      />
    </>
  );
}
