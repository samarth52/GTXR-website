import Head from "next/head";
import Home from "../src/components/Home";

export default function Index() {
  return (
    <>
      <Head>
        <title>Georgia Tech XR</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  );
}
