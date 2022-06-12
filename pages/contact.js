import Head from "next/head";
import Navbar from "../components/navbar";

import { benefitFour } from "../components/data";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Cta from "../components/cta";

export default function About() {
  return (
    <>
      <Head>
        <title>Contact | UODA</title>
        <meta name="description" content="UODA Computer Society" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <Navbar />
      <main className="pt-20 px-40">
        <Benefits data={benefitFour} />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
