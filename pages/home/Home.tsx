import Head from "next/head";
import IslamPillars from "./IslamPillars";
import HomePrograms from "./Programs";
import Impact from "./impact";
import Hero from "./Hero";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ahdaf Charity</title>
        <meta name="description" content="Empowering Change Through Giving" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full min-h-screen bg-[#0b1c39] text-white">
        <Hero />

        <Impact />

        <HomePrograms />

        <IslamPillars />
      </main>
    </>
  );
}
