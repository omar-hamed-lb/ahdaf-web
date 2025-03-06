import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 bg-cblue text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/logos/ahdaf_logo.svg"
                width={120}
                height={60}
                alt="Ahdaf Charity"
                className="brightness-0 invert opacity-80"
              />
            </Link>
            <p className="text-sm text-gray-300 text-center md:text-left">
              A diverse group of individuals from Northern Lebanon, united by
              vision to positively transform society.
            </p>
          </div>

          {/* Column 2: Our Programs */}
          <div className="hidden md:block flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 uppercase">Our Programs</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/programs/eshraqat-elem"
                  className="hover:text-cgreen transition-colors"
                >
                  ESHRAQAT ELEM
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/alemni"
                  className="hover:text-cgreen transition-colors"
                >
                  ALEMNI FOUNDATION
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/eshraqa"
                  className="hover:text-cgreen transition-colors"
                >
                  ESHRAQA ACADEMY
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/ahdaf-school"
                  className="hover:text-cgreen transition-colors"
                >
                  AHDAF SCHOOL
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/ajwad"
                  className="hover:text-cgreen transition-colors"
                >
                  AJWAD CENTER
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 uppercase">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-cgreen transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link
                  href="/about/history"
                  className="hover:text-cgreen transition-colors"
                >
                  Our History
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 uppercase">Contact Us</h3>
            <p className="mb-4">
              <a
                href="mailto:info@ahdaf.org"
                className="hover:text-cgreen transition-colors"
              >
                info@ahdaf.org
              </a>
            </p>

            <h3 className="text-lg font-bold mb-2 uppercase">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/ahdafcharity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 fill-current hover:text-cgreen transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>

              <a
                href="https://instagram.com/ahdafcharity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6 fill-current hover:text-cgreen transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/ahdafcharity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6 fill-current hover:text-cgreen transition-colors"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm">
            وقف أهداف الخيري <br />
            &copy; {new Date().getFullYear()} Ahdaf Charity. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
