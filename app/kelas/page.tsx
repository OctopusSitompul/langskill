"use client";
import React from "react";
import Link from "next/link";

export default function ClassesPage() {
  const englishClasses = [
    { name: "Beginner", biaya: "Rp 1.200.000", desc: "Dasar percakapan dan tata bahasa.", buku: "Rp 150.000" },
    { name: "Intermediate", biaya: "Rp 1.500.000", desc: "Percakapan menengah & grammar lanjutan.", buku: "Rp 180.000" },
    { name: "Expert", biaya: "Rp 1.800.000", desc: "Business English & presentasi profesional.", buku: "Rp 200.000" },
  ];
  const englishPrograms = [
    { name: "English for Kids", desc: "Kelas menyenangkan untuk anak usia 6–12 tahun." },
    { name: "TOEFL Preparation", desc: "Persiapan ujian TOEFL dengan simulasi soal." },
    { name: "Private Class", desc: "Belajar fleksibel 1-on-1 sesuai kebutuhan." },
  ];

  const japanClasses = [
    { name: "Dasar I (N5)", biaya: "Rp 1.300.000", desc: "Huruf hiragana, katakana, dan percakapan dasar.", buku: "Rp 150.000" },
    { name: "Dasar II (N4)", biaya: "Rp 1.600.000", desc: "Percakapan sehari-hari & tata bahasa menengah.", buku: "Rp 180.000" },
    { name: "Menengah (N3)", biaya: "Rp 1.900.000", desc: "Percakapan bisnis & materi JLPT N3.", buku: "Rp 200.000" },
    { name: "Mahir (N2)", biaya: "Rp 2.200.000", desc: "Pemahaman lanjutan & JLPT N2.", buku: "Rp 220.000" },
  ];
  const japanPrograms = [
    { name: "JLPT Preparation", desc: "Persiapan ujian JLPT N5–N2 dengan simulasi." },
    { name: "Private Class", desc: "Belajar privat sesuai jadwal fleksibel." },
    { name: "Conversation", desc: "Fokus percakapan sehari-hari." },
  ];

  const mandarinClasses = [
    { name: "Dasar I (HSK 1 & 2)", biaya: "Rp 1.400.000", desc: "Kosakata & percakapan HSK 1-2.", buku: "Rp 150.000" },
    { name: "Dasar II (HSK 3)", biaya: "Rp 1.700.000", desc: "Materi menengah untuk HSK 3.", buku: "Rp 180.000" },
    { name: "Menengah (HSK 4)", biaya: "Rp 2.000.000", desc: "Percakapan bisnis & HSK 4.", buku: "Rp 200.000" },
    { name: "Mahir (HSK 5 & 6)", biaya: "Rp 2.300.000", desc: "Pemahaman lanjutan HSK 5-6.", buku: "Rp 220.000" },
  ];
  const mandarinPrograms = [
    { name: "HSK Preparation", desc: "Persiapan ujian HSK semua level." },
    { name: "Private Class", desc: "Belajar privat sesuai kebutuhan." },
  ];

  const schedule = [
    { day: "Senin – Jumat", time: "09.00 - 20.00 WIB" },
    { day: "Sabtu", time: "09.00 - 17.00 WIB" },
    { day: "Minggu", time: "Libur" },
  ];

  // === Reusable Table Class ===
  const ClassTable = ({ data, lang }: { data: typeof englishClasses; lang: string }) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
        <thead>
          <tr className="bg-indigo-600 text-white text-sm">
            <th className="p-3 text-left">Kelas</th>
            <th className="p-3 text-left">Biaya</th>
            <th className="p-3 text-left">Keterangan</th>
            <th className="p-3 text-left">Uang Buku</th>
            <th className="p-3 text-center">Daftar</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-700">
          {data.map((item, i) => (
            <tr key={i} className="border-b hover:bg-indigo-50 transition">
              <td className="p-3 font-semibold">{item.name}</td>
              <td className="p-3">{item.biaya}</td>
              <td className="p-3">{item.desc}</td>
              <td className="p-3">{item.buku}</td>
              <td className="p-3 text-center">
                <Link
                  href={`/signup?course=${encodeURIComponent(lang + " - " + item.name)}`}
                  className="inline-block bg-indigo-600 text-white px-3 py-1 rounded-md text-xs hover:bg-indigo-700 transition shadow"
                >
                  Daftar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const ProgramList = ({ data, lang }: { data: typeof englishPrograms; lang: string }) => (
    <ul className="mt-4 space-y-3">
      {data.map((p, idx) => (
        <li
          key={idx}
          className="flex items-start justify-between bg-white rounded-lg p-4 shadow hover:shadow-md transition group"
        >
          <div className="flex gap-3">
            <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-indigo-500 group-hover:bg-indigo-600" />
            <div>
              <p className="font-semibold text-gray-800">{p.name}</p>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          </div>
          <Link
            href={`/signup?program=${encodeURIComponent(lang + " - " + p.name)}`}
            className="self-center bg-indigo-600 text-white px-3 py-1 rounded-md text-xs hover:bg-indigo-700 transition shadow"
          >
            Daftar
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* JADWAL */}
        <section className="bg-white rounded-xl shadow p-8">
          <h2 className="text-3xl font-bold text-center text-indigo-700">
            Jadwal Belajar
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            {schedule.map((s, i) => (
              <div key={i} className="bg-indigo-50 rounded-lg p-4 hover:bg-indigo-100 transition">
                <p className="font-semibold text-gray-800">{s.day}</p>
                <p className="text-sm text-gray-600">{s.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BAHASA INGGRIS */}
        <section>
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-4">
            📚 Kelas Bahasa Inggris
          </h2>
          <ClassTable data={englishClasses} lang="English" />
          <h3 className="mt-8 text-xl font-semibold text-gray-800">Program Kursus</h3>
          <ProgramList data={englishPrograms} lang="English" />
        </section>

        {/* BAHASA JEPANG */}
        <section>
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-4">
            🎌 Kelas Bahasa Jepang
          </h2>
          <ClassTable data={japanClasses} lang="Japanese" />
          <h3 className="mt-8 text-xl font-semibold text-gray-800">Program Kursus</h3>
          <ProgramList data={japanPrograms} lang="Japanese" />
        </section>

        {/* BAHASA MANDARIN */}
        <section>
          <h2 className="text-2xl font-extrabold text-indigo-700 mb-4">
            🏮 Kelas Bahasa Mandarin
          </h2>
          <ClassTable data={mandarinClasses} lang="Mandarin" />
          <h3 className="mt-8 text-xl font-semibold text-gray-800">Program Kursus</h3>
          <ProgramList data={mandarinPrograms} lang="Mandarin" />
        </section>
      </div>
    </main>
  );
}