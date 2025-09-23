"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Kelas", href: "/kelas" },
    { name: "Fitur", href: "/fitur" },
    { name: "Testimoni", href: "/testimoni" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="text-xl font-extrabold text-indigo-600">
            LangSkill
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-4 text-sm text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/signup"
              className="bg-indigo-600 text-white px-4 py-2 text-sm rounded-md shadow hover:bg-indigo-700 transition-colors"
            >
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {/* Hamburger */}
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-transform ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 mb-1 transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-transform ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <nav className="flex flex-col p-4 text-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/signup"
              className="mt-2 bg-indigo-600 text-white px-4 py-2 text-sm rounded-md shadow hover:bg-indigo-700 transition-colors text-center"
              onClick={() => setOpen(false)}
            >
              Daftar Sekarang
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}