"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white mt-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8 grid md:grid-cols-3 gap-6">
        {/* Brand */}
        <div>
          <div className="font-bold text-indigo-600 text-lg">LangSkill</div>
          <p className="mt-2 text-sm text-gray-600">
            Platform kursus bahasa — Inggris, Jepang, Mandarin.
          </p>

          {/* Sosial Media */}
          <div className="flex gap-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-white hover:bg-indigo-600 transition"
            >
              <FaFacebookF size={16} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-white hover:bg-pink-500 transition"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-white hover:bg-sky-500 transition"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-100 rounded-full text-gray-600 hover:text-white hover:bg-indigo-500 transition"
            >
              <FaDiscord size={16} />
            </a>
          </div>
        </div>

        {/* Menu */}
        <div>
          <h4 className="font-semibold text-black">Menu</h4>
          <ul className="mt-2 text-sm text-gray-600 space-y-1">
            <li><a href="/kelas" className="hover:text-indigo-600">Kursus</a></li>
            <li><a href="/fitur" className="hover:text-indigo-600">Fitur</a></li>
            <li><a href="/testimoni" className="hover:text-indigo-600">Testimoni</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h4 className="font-semibold text-black">Kontak</h4>
          <p className="mt-2 text-sm text-gray-600">langskill@ac.id</p>
          <p className="text-sm text-gray-600">+62 812-3456-7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-400 py-4">
        © {new Date().getFullYear()} LangSkill.
      </div>
    </footer>
  );
}
