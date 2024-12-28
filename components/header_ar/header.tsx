"use client";

import React from "react";
import Link from "next/link";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/ar">الرئيسية</Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">من نحن</button>
              <div className="dropdown-content">
                <Link href="/ar/about/who-we-are">من نحن؟</Link>
                <Link href="/ar/about/annual-report">التقرير السنوي</Link>
                <Link href="/ar/about/timeline">الجدول الزمني</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">برامجنا</button>
              <div className="dropdown-content">
                <Link href="/ar/programs/program1">البرنامج 1</Link>
                <Link href="/ar/programs/program2">البرنامج 2</Link>
                <Link href="/ar/programs/program3">البرنامج 3</Link>
                <Link href="/ar/programs/program4">البرنامج 4</Link>
                <Link href="/ar/programs/program5">البرنامج 5</Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/contact">اتصل بنا</Link>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">اللغة</button>
              <div className="dropdown-content">
                <Link href="/ar">العربية</Link>
                <Link href="/">الإنجليزية</Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="/ar/donate">
              <button className="donate-button">تبرع الآن</button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
