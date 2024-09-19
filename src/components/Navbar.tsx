"use client"; // Mark this as a Client Component
import Image from "next/image";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-black-800">
        <Image
          src="/images/LOGO_no_text.jpeg" // Replace with your actual image path
          alt="The Glam Factor Salon"
          width={117}
          height={110}
          className=""
        />
      </Link>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-black-800 focus:outline-none"
        >
          {/* Hamburger Icon */}
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
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Links for desktop */}
      <div className="flex items-baseline justify-center hidden md:flex space-x-4">
        <Link href="/" className="flex flex-col justify-center items-center text-black-800 hover:text-black-600">
          <p className="text-3xl font-bold tracking-wider">The Glam Factor</p>
          <p className="text-l">Beauty Beyond Boundaries</p>
        </Link>
        <Link href="/services" className="text-black-800 hover:text-black-600">
          Services
        </Link>
        <Link href="/contact" className="text-black-800 hover:text-black-600">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <Link
            href="/"
            className="block text-black-800 hover:text-black-600 py-2"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block text-black-800 hover:text-black-600 py-2"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/account"
            className="block text-black-800 hover:text-black-600 py-2"
            onClick={toggleMobileMenu}
          >
            Account
          </Link>
          <Link
            href="/contact"
            className="block text-black-800 hover:text-black-600 py-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
