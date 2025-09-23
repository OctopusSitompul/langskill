import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">Belajar Bahasa Inggris, Jepang & Mandarin dengan Mudah</h1>
            <p className="mt-4 text-gray-600 max-w-xl">Kursus online interaktif, rencana belajar yang dipersonalisasi, dan pengajar berpengalaman. Mulai dari nol sampai mahir — pelajari kapan pun dan di mana pun.</p>

            <div className="mt-6 flex gap-3">
              <a href="/signup" className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-md shadow hover:bg-indigo-700">Mulai Belajar</a>
              <a href="#courses" className="inline-flex items-center gap-2 border border-gray-200 px-5 py-3 rounded-md hover:bg-gray-100">Lihat Kelas</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">+1.200</div>
                <div className="text-sm text-gray-500">Pelajar Terdaftar</div>
              </div>
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-gray-500">Bahasa</div>
              </div>
              <div>
                <div className="text-2xl font-bold">4.8/5</div>
                <div className="text-sm text-gray-500">Rating Rata-rata</div>
              </div>
            </div>
          </div>

          <div className="order-first lg:order-last">
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
              <img alt="hero" src="/image/convo.png" className="rounded-xl shadow-xl w-full object-cover"/>

              <div className="absolute left-4 bottom-4 bg-white p-4 rounded-lg shadow-md w-11/12">
                <div className="flex items-center gap-3">
                  <img src="/image/Mentor.png" alt="mentor" className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">Sesi Live: Percakapan Dasar</div>
                    <div className="text-xs text-gray-500">Sabtu, 09:00 - 10:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

            {/* Courses */}
            <section id="courses" className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Kursus Populer</h2>
                <a href="/kelas" className="text-sm text-indigo-600">Lihat Semua</a>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "English A1 - Beginner",
            lang: "English",
            level: "Beginner",
            price: "Rp. 99.000",
            src: "/image/inggris.jpg",       
          },
          {
            title: "Japanese N5 - Hiragana & Katakana",
            lang: "Japanese",
            level: "Beginner",
            price: "Rp 120.000",
            src: "/image/japan.jpg",        
          },
          {
            title: "Mandarin HSK 5 - Pinyin & Basic",
            lang: "Mandarin",
            level: "Beginner",
            price: "Rp 120.000",
            src: "/image/china.jpg",      
          },
        ].map((c, idx) => (
          <article
            key={idx}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <img
              src={c.src}          
              alt={c.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <div className="text-sm text-gray-500">
                {c.lang} • {c.level}
              </div>
              <h3 className="mt-2 font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-gray-600">
                Belajar kosakata dasar, percakapan, dan latihan interaktif.
                Cocok untuk pemula.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-sm font-bold">{c.price}</div>
                <a href="/signup" className="text-indigo-600 text-sm">
                  Daftar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

          </section>
          {/* Features */}
      <section id="features" className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Judul */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
            Mengapa Memilih <span className="text-indigo-600">LangSkill?</span>
          </h2>
          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Kurikulum disusun oleh pengajar berpengalaman, materi interaktif,
            dan dukungan komunitas belajar yang aktif.
          </p>

          {/* Cards */}
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
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100
                          hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600">{feature.desc}</p>
                </div>

                {/* efek gradient glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-100/30 to-purple-100/30 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

        <section
        id="testimonials"
        className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16"
      >
        {/* background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 -z-10" />

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800">
          Apa Kata <span className="text-indigo-600">Siswa Kami</span>
        </h2>
        <p className="mt-2 text-center text-gray-600 max-w-2xl mx-auto">
          Pengalaman nyata dari siswa yang telah belajar bersama kami
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Hani",
              level: "Beginner",
              src: "https://i.pravatar.cc/150?img=32",
            },
            {
              name: "Sakura",
              level: "Beginner",
              src: "https://i.pravatar.cc/150?img=45",
            },
            {
              name: "Michael",
              level: "Beginner",
              src: "https://i.pravatar.cc/150?img=56",
            },
          ].map((siswa, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-2xl shadow-md border border-gray-100
                        hover:shadow-xl hover:-translate-y-1 transform transition duration-300"
            >
              <div className="flex items-center gap-4">
                <img
                  src={siswa.src}
                  alt={siswa.name}
                  className="w-14 h-14 rounded-full ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition"
                />
                <div>
                  <div className="font-semibold text-gray-800">{siswa.name}</div>
                  <div className="text-xs text-gray-500">Level: {siswa.level}</div>
                </div>
              </div>

              <p className="mt-5 text-gray-600 text-sm leading-relaxed">
                “Platform ini sangat membantu saya belajar bahasa dengan cepat.
                Tutor-nya sabar dan materi terstruktur. Saya merasa lebih percaya
                diri berbicara setelah 3 minggu belajar!”
              </p>

              {/* rating bintang */}
              <div className="mt-4 flex gap-1 text-yellow-400">
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
          ))}
        </div>
      </section>


      {/* Pricing / CTA */}
      <section id="pricing" className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold">Mulai perjalanan belajarmu hari ini</h3>
          <p className="mt-2">Pilih paket yang sesuai — Gratis untuk uji coba, dan paket berbayar untuk fitur lengkap.</p>
          <div className="mt-6 flex justify-center gap-4">
            <a href="/signup" className="bg-white text-indigo-600 px-5 py-3 rounded-md font-semibold">Coba Gratis</a>
            <a href="/kelas" className="border border-white px-5 py-3 rounded-md">Lihat Paket</a>
          </div>
        </div>
      </section>
    </div>
  )
}