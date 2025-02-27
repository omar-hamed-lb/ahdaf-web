"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function DiractionIcon() {
  return (
    <svg
      width={20}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#08162E] p-4 flex justify-between items-center text-white z-50 uppercase ">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/logos/ahdaf_logo.svg"
              width={80}
              height={50}
              alt="Ahdaf Charity"
              className="logo brightness-0 invert opacity-1"
            />
          </Link>
        </div>
        <ul className="hidden md:flex space-x-6 uppercase gap-12">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="relative group">
            <button className="uppercase">About Us</button>
            <div className="absolute hidden group-hover:block bg-[#0b1c39] text-gray-100 p-4 rounded uppercase">
              <Link href="/about/who-we-are">Who We Are?</Link>
              <Link href="/about/annual-report">Annual Report</Link>
              <Link href="/about/timeline">Timeline</Link>
            </div>
          </li>
          <li className="relative group">
            <button className="uppercase">Our Programs</button>
            <div className="absolute hidden group-hover:block bg-[#0b1c39] text-gray-100 p-4 rounded">
              <Link href="/programs/program1">ESHRAQAT ELEM</Link>
              <Link href="/programs/program2">ALEMNI FOUNDATION</Link>
              <Link href="/programs/program3">ESHRAQA ACADEMY</Link>
              <Link href="/programs/program4">AHDAF SCHOOL </Link>
              <Link href="/programs/program5">AHDAF SCHOOL</Link>
            </div>
          </li>
          <li>
            <Link href="#">ZAKAT & SADAKA</Link>
          </li>
        </ul>
        <button className="bg-red-600 px-4 py-2 rounded hidden md:block">
          <Link className="w-full" href="/donate">
            DONATE
          </Link>
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0b1c39] text-white p-4 space-y-4 fixed top-14 left-0 w-full z-50">
          <ul className="space-y-4">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link className="w-full block" href="/">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown("about")}
              >
                ABOUT US
                <span
                  className={`transform transition-transform ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                >
                  <DiractionIcon />
                </span>
              </button>
              {activeDropdown === "about" && (
                <div className="bg-[#0b1c39] text-white p-4 rounded flex flex-col space-y-4">
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WHO WE ARE?
                  </Link>
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ANNUAL REPORT
                  </Link>
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    TIMELINE
                  </Link>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown("programs")}
              >
                OUR PROGRAMS
                <span
                  className={`transform transition-transform ${
                    activeDropdown === "programs" ? "rotate-180" : ""
                  }`}
                >
                  <DiractionIcon />
                </span>
              </button>
              {activeDropdown === "programs" && (
                <div className="bg-[#0b1c39] text-white p-4 rounded flex flex-col space-y-4">
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ESHRAQAT ELEM
                  </Link>
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ALEMNI FOUNDATION
                  </Link>
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ESHRAQA ACADEMY
                  </Link>
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AHDAF SCHOOL
                  </Link>
                  <Link
                    className="w-full block"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AJWAD CENTER
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                className="w-full block"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                ZAKAT & SADAKA
              </Link>
            </li>
            {/* <li className="relative">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown("language")}
              >
                Language
                <span
                  className={`transform transition-transform ${
                    activeDropdown === "language" ? "rotate-180" : ""
                  }`}
                >
                  <DiractionIcon />
                </span>
              </button>
              {activeDropdown === "language" && (
                <div className="bg-[#0b1c39] text-white p-4 rounded flex flex-col space-y-4">
                  <Link href="/ar" onClick={() => setIsMenuOpen(false)}>
                    Arabic
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    English
                  </Link>
                </div>
              )}
            </li> */}
          </ul>
          <button
            className="bg-red-600 px-4 py-2 rounded w-full uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link className="w-full block" href="/donate">
              DONATE
            </Link>
          </button>
        </div>
      )}
    </>
  );
}
