import Head from "next/head";
import IslamPillars from "./IslamPillars";
import HomePrograms from "./Programs";
import Impact from "./impact";
import Hero from "./Hero";
import Seperator from "@/components/Seperator";
/* import Sponsors from "./Sponsers"; */
import AhdafNews from "./latest _news";
export default function Home() {
  return (
    <>
      <Head>
        <title>Ahdaf Charity</title>
        <meta name="description" content="Empowering Change Through Giving" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full min-h-screen text-white">
        <Hero />

        <Impact />

        <HomePrograms />
        <Seperator color="blue" forg_color="white" />
        <IslamPillars />
{/*         <Seperator color="white" forg_color="#183966" />
 */}        <AhdafNews />
        {/* <Sponsors /> */}
        
      </main>
    </>
  );
}
