"use client";
import React from "react";

export default function FiturPage() {
  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* ===== Hero ===== */}
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Fitur & Keunggulan <span className="text-indigo-600">LangSkill</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Platform belajar bahasa Inggris, Jepang dan Mandarin dengan kurikulum modern dan komunitas
          interaktif untuk semua level.
        </p>
      </section>

      {/* ===== Features ===== */}
      <section className="relative py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
            Mengapa Memilih <span className="text-indigo-600">LangSkill?</span>
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Kurikulum disusun oleh pengajar berpengalaman, materi interaktif,
            dan dukungan komunitas belajar yang aktif.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Belajar Interaktif",
                desc: "Latihan percakapan, kuis, dan feedback langsung dari pengajar.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6l4 2m6 8H6a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
              },
              {
                title: "Pengajar Profesional",
                desc: "Tutor berpengalaman dari latar belakang pendidikan dan industri.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.121 17.804A10.97 10.97 0 0112 15c2.64 0 5.06.936 6.879 2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ),
              },
              {
                title: "Belajar Fleksibel",
                desc: "Akses materi kapan saja melalui web & mobile.",
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-indigo-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v18m9-9H3"
                    />
                  </svg>
                ),
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100
                          hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition">
                    {f.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Visi & Misi ===== */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi</h2>
            <p className="text-gray-600 leading-relaxed">
              Menjadi platform pembelajaran bahasa Inggris online terbaik di
              Asia Tenggara yang membantu jutaan pelajar meraih potensi global.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Misi</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Menyediakan materi belajar interaktif yang mudah diakses.</li>
              <li>Mendukung tutor profesional dan komunitas belajar aktif.</li>
              <li>Menciptakan pengalaman belajar yang menyenangkan dan fleksibel.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-16 bg-gradient-to-r from-indigo-500 to-purple-500 text-center text-white">
        <h2 className="text-3xl font-bold">Mulai Belajar Hari Ini</h2>
        <p className="mt-2">Daftar gratis dan rasakan kemudahan belajar di LangSkill</p>
        <a
          href="/signup"
          className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold
                    rounded-lg shadow hover:bg-gray-100 transition"
        >
          Daftar Sekarang
        </a>
      </section>
    </main>
  );
}