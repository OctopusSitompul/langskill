"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    language: "",
    level: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("Pendaftaran berhasil dikirim! (contoh)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
      <div className="relative bg-white shadow-xl rounded-2xl p-8 max-w-lg w-full border border-indigo-100">
        {/* Tombol X di dalam form */}
        <Link
          href="/"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition text-4xl font-bold leading-none"
          aria-label="Kembali ke beranda"
        >
          ×
        </Link>

        <h1 className="text-3xl font-extrabold text-center text-indigo-700">
          Daftar Kursus Bahasa
        </h1>
        <p className="mt-2 text-center text-gray-600">
          Pilih program belajar bahasa Inggris, Jepang, atau Mandarin sesuai
          minatmu.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Masukkan nama lengkap"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="contoh@email.com"
              required
            />
          </div>

          {/* Nomor Telepon */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="08xxxxxxxxxx"
              required
            />
          </div>

          {/* Asal Sekolah/Universitas */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Asal Sekolah / Universitas
            </label>
            <input
              type="text"
              name="school"
              value={form.school}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Nama sekolah/universitas"
              required
            />
          </div>

          {/* Pilih Bahasa */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pilih Bahasa
            </label>
            <select
              name="language"
              value={form.language}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">-- Pilih Bahasa --</option>
              <option value="English">Inggris</option>
              <option value="Japanese">Jepang</option>
              <option value="Mandarin">Mandarin</option>
            </select>
          </div>

          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Level Pembelajaran
            </label>
            <select
              name="level"
              value={form.level}
              onChange={handleChange}
              className="mt-1 w-full border rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            >
              <option value="">-- Pilih Level --</option>
              <option value="Beginner">Beginner (Pemula)</option>
              <option value="Intermediate">Intermediate (Menengah)</option>
              <option value="Advanced">Advanced (Lanjutan)</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 shadow-md transition transform hover:-translate-y-0.5"
          >
            Daftar Sekarang
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Dengan mendaftar, Anda menyetujui{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Syarat & Ketentuan
          </a>.
        </p>
      </div>
    </div>
  );
}
