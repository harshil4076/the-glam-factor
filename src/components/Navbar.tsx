"use client"; // Mark this as a Client Component

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-pink-800">
        The Glam Factor
      </Link>

      {/* Hamburger Icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-pink-800 focus:outline-none"
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
      <div className="hidden md:flex space-x-4">
        <Link href="/" className="text-pink-800 hover:text-pink-600">
          Home
        </Link>
        <Link href="/services" className="text-pink-800 hover:text-pink-600">
          Services
        </Link>
        <Link href="/account" className="text-pink-800 hover:text-pink-600">
          Account
        </Link>
        <Link href="/contact" className="text-pink-800 hover:text-pink-600">
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <Link
            href="/"
            className="block text-pink-800 hover:text-pink-600 py-2"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block text-pink-800 hover:text-pink-600 py-2"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            href="/account"
            className="block text-pink-800 hover:text-pink-600 py-2"
            onClick={toggleMobileMenu}
          >
            Account
          </Link>
          <Link
            href="/contact"
            className="block text-pink-800 hover:text-pink-600 py-2"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}
