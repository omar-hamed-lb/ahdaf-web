"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./header.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-[#0b1c39] p-4 flex justify-between items-center text-white z-50">
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/logos/logo.svg"
              width={80}
              height={80}
              alt="Ahdaf Charity"
              className="logo"
            />
          </Link>
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="relative group">
            <button className="dropbtn">About Us</button>
            <div className="dropdown-content absolute hidden group-hover:block bg-[#0b1c39] text-white p-4 rounded">
              <Link href="/about/who-we-are">Who We Are?</Link>
              <Link href="/about/annual-report">Annual Report</Link>
              <Link href="/about/timeline">Timeline</Link>
            </div>
          </li>
          <li className="relative group">
            <button className="dropbtn">Our Programs</button>
            <div className="dropdown-content absolute hidden group-hover:block bg-[#0b1c39] text-white p-4 rounded">
              <Link href="/programs/program1">Program 1</Link>
              <Link href="/programs/program2">Program 2</Link>
              <Link href="/programs/program3">Program 3</Link>
              <Link href="/programs/program4">Program 4</Link>
              <Link href="/programs/program5">Program 5</Link>
            </div>
          </li>
          <li>
            <Link href="#">Contact Us</Link>
          </li>
          <li className="relative group">
            <button className="dropbtn">Language</button>
            <div className="dropdown-content absolute hidden group-hover:block bg-[#0b1c39] text-white p-4 rounded">
              <Link href="/ar">Arabic</Link>
              <Link href="/">English</Link>
            </div>
          </li>
        </ul>
        <button className="bg-red-600 px-4 py-2 rounded hidden md:block">
          Donate
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
        <div className="md:hidden bg-[#0b1c39] text-white p-4 space-y-4">
          <ul className="space-y-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="relative group">
              <button className="dropbtn">About Us</button>
              <div className="dropdown-content bg-[#0b1c39] text-white p-4 rounded">
                <Link href="#">Who We Are?</Link>
                <Link href="#">Annual Report</Link>
                <Link href="#">Timeline</Link>
              </div>
            </li>
            <li className="relative group">
              <button className="dropbtn">Our Programs</button>
              <div className="dropdown-content bg-[#0b1c39] text-white p-4 rounded">
                <Link href="#">Program 1</Link>
                <Link href="#">Program 2</Link>
                <Link href="#">Program 3</Link>
                <Link href="#">Program 4</Link>
                <Link href="#">Program 5</Link>
              </div>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li className="relative group">
              <button className="dropbtn">Language</button>
              <div className="dropdown-content bg-[#0b1c39] text-white p-4 rounded">
                <Link href="#">Arabic</Link>
                <Link href="#">English</Link>
              </div>
            </li>
          </ul>
          <button className="bg-red-600 px-4 py-2 rounded w-full ">
            Donate
          </button>
        </div>
      )}
    </>
  );
}
