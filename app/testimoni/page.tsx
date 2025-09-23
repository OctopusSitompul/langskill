"use client";
import React, { useState, useEffect } from "react";

export default function TestimoniPage() {
  const data = [
    {
      name: "Hani",
      level: "Beginner",
      src: "https://i.pravatar.cc/150?img=32",
      quote:
        "Platform ini sangat membantu saya belajar bahasa dengan cepat. Tutor sabar dan materi terstruktur. Saya merasa lebih percaya diri berbicara setelah 3 minggu belajar!",
    },
    {
      name: "Sakura",
      level: "Intermediate",
      src: "https://i.pravatar.cc/150?img=45",
      quote:
        "Materinya menyenangkan dan interaktif. Saya suka sesi percakapan karena langsung bisa praktek dan dapat feedback dari tutor.",
    },
    {
      name: "Michael",
      level: "Advanced",
      src: "https://i.pravatar.cc/150?img=56",
      quote:
        "LangSkill membantu saya meningkatkan kemampuan speaking untuk keperluan kerja. Fitur kelas fleksibel sangat membantu di jadwal padat.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // auto slide setiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          Apa Kata <span className="text-indigo-600">Siswa Kami</span>
        </h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
          Pengalaman nyata dari siswa yang telah belajar bersama kami
        </p>

        {/* Slider */}
        <div className="relative mt-12">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {data.map((item, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 max-w-xl mx-auto text-center hover:shadow-xl transition">
                    <img
                      src={item.src}
                      alt={item.name}
                      className="w-20 h-20 mx-auto rounded-full ring-4 ring-indigo-100 mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4">
                      Level: {item.level}
                    </p>
                    <p className="text-gray-600 italic leading-relaxed">
                      “{item.quote}”
                    </p>
                    {/* Rating */}
                    <div className="mt-4 flex justify-center gap-1 text-yellow-400">
                      {Array.from({ length: 5 }).map((_, star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                        >
                          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.739 1.52 8.296L12 18.896l-7.456 4.445 1.52-8.296-6.064-5.739 8.332-1.151z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tombol navigasi */}
          <div className="flex justify-center mt-6 gap-3">
            {data.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  current === idx ? "bg-indigo-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistik tambahan */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { number: "10K+", label: "Siswa Aktif" },
            { number: "95%", label: "Tingkat Kepuasan" },
            { number: "4.9/5", label: "Rating Rata-rata" },
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <div className="text-3xl font-extrabold text-indigo-600">{stat.number}</div>
              <p className="mt-1 text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/signup"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 transition"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}