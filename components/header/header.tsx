"use client";

import React from "react";
import Link from "next/link";
import "./header.css";
import Image from "next/image";
const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="logo"
                width={50}
                height={50}
              />
            </Link>
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">About Us</button>
              <div className="dropdown-content">
                <Link href="/about/who-we-are">Who We Are?</Link>
                <Link href="/about/annual-report">Annual Report</Link>
                <Link href="/about/timeline">Timeline</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Our Programs</button>
              <div className="dropdown-content">
                <Link href="/programs/program1">Program 1</Link>
                <Link href="/programs/program2">Program 2</Link>
                <Link href="/programs/program3">Program 3</Link>
                <Link href="/programs/program4">Program 4</Link>
                <Link href="/programs/program5">Program 5</Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">Language</button>
              <div className="dropdown-content">
                <Link href="/ar">Arabic</Link>
                <Link href="/">English</Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/donate">
              <button className="donate-button">Donate Now</button>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>{``}</style>
    </header>
  );
};

export default Header;
