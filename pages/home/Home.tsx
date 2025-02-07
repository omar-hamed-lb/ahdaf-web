import Footer from "@/components/footer/footer";
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
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-[#0b1c39] p-4 flex justify-between items-center text-white">
          <div className="text-xl font-bold">AHDAF</div>
          <ul className="hidden md:flex space-x-6">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Programs</li>
            <li>Zakat & Sadaka</li>
            <li>Contact Us</li>
          </ul>
          <button className="bg-red-600 px-4 py-2 rounded">Donate</button>
        </nav>

        <Hero />

        {/* Impact Section */}
        <Impact />

        {/* Programs Section */}
        <HomePrograms />

        {/* Pillars of Islam Section */}
        <IslamPillars />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
