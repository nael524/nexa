import React, { useState } from "react";
import "../styles/Testimoni.css";

function Testimoni() {
    // State untuk memfilter testimoni berdasarkan kategori bisnis
    const [activeFilter, setActiveFilter] = useState("all");

    // Data statistik untuk menambah kemegahan halaman
    const statsData = [
        { value: "500+", label: "Klien Puas" },
        { value: "98%", label: "Tingkat Retensi" },
        { value: "4.9/5", label: "Rating Google" },
        { value: "24/7", label: "Dukungan Klien" }
    ];

    // Data testimoni yang kompleks dan bervariasi
    const testimonialData = [
        {
            id: 1,
            name: "Kim Mingyu",
            role: "CEO & Founder",
            company: "TechVanguard Indonesia",
            category: "corporate",
            avatar: "https://images.unsplash.com/photo-1689866500328-e57bcb3f1b52?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            text: "Website yang dibuat NexaWeb sangat profesional dan sesuai dengan kebutuhan bisnis kami. Prosesnya cepat, komunikatif, dan hasilnya luar biasa memuaskan. Konversi penjualan kami naik signifikan sejak peluncuran.",
            rating: 5
        },
        {
            id: 2,
            name: "Choi Seungcheol",
            role: "Direktur Pemasaran",
            company: "EduBright Academy",
            category: "education",
            avatar: "https://media.istockphoto.com/id/939191736/id/foto/pemuda-melakukan-perjalanan-backpacking-di-rumah-tradisional-korea.jpg?s=2048x2048&w=is&k=20&c=lpH3BBImcrZfBdCyGvARJ3SBZzupA88IAnJYUrkre7E=",
            text: "Sistem informasi sekolah yang diintegrasikan oleh NexaWeb mempermudah administrasi kami. Antarmukanya interaktif, sangat stabil, dan guru serta orang tua murid memberikan respon yang sangat positif.",
            rating: 5
        },
        {
            id: 3,
            name: "Choi San",
            role: "Head of Operations",
            company: "AgroLogix Cargo",
            category: "system",
            avatar: "https://media.istockphoto.com/id/1443172990/id/foto/laki-laki-korea-selatan-yang-ceria-tersenyum-bahagia-dan-melihat-ke-kamera-di-jalan.jpg?s=2048x2048&w=is&k=20&c=kqsKzU25Lu2mod5GMrDz3iVWZU9vxKFFQu-PW8c93x4=",
            text: "Aplikasi manajemen inventaris berbasis web dari NexaWeb mengubah total efisiensi gudang kami. Pelacakan dengan barcode dinamis menghemat waktu stock opname hingga 70%. Benar-benar investasi yang sepadan.",
            rating: 5
        },
        {
            id: 4,
            name: "Jeon Wonwoo",
            role: "Founder",
            company: "Kopi Selasar Nusantara",
            category: "retail",
            avatar: "https://i.pinimg.com/control1/1200x/ae/78/42/ae78422fe0095d8cdeadac0e80c59d20.jpg",
            text: "Platform E-Commerce kami terintegrasi dengan Midtrans dengan sempurna. Kalkulator ongkir berkala berjalan otomatis tanpa bug. NexaWeb adalah partner terbaik untuk go-digital.",
            rating: 5
        },
        {
            id: 5,
            name: "Kwon Soonyoung",
            role: "Creative Director",
            company: "VividSphere Studios",
            category: "corporate",
            avatar: "https://i.pinimg.com/736x/2a/d2/58/2ad258017a45bdfcda6a649ae1550088.jpg    ",
            text: "Desain UI/UX yang mereka tawarkan sangat modern dan responsif di semua perangkat. Transisi antarhalaman sangat mulus, performa core web vitals-nya hijau semua di Google PageSpeed.",
            rating: 5
        },
        {
            id: 6,
            name: "Lee Jihoon",
            role: "Chief Technology Officer",
            company: "MedikaDigital Health",
            category: "system",
            avatar: "https://i.pinimg.com/1200x/90/8a/8b/908a8b45bc67eb01a6d2c17692ba4bad.jpg",
            text: "Dukungan teknis dan patching keamanan pasca-proyek luar biasa tanggap. Cloud backup berjalan otomatis setiap malam membuat data rekam medis kami aman terlindungi.",
            rating: 5
        }
    ];

    // Filter logika testimoni
    const filteredTestimonials = activeFilter === "all"
        ? testimonialData
        : testimonialData.filter(item => item.category === activeFilter);

    return (
        <div className="testi-page">
            {/* ================= HERO TITLE SECTION ================= */}
            <section className="testi-hero">
                <span className="testi-tagline">TESTIMONIAL & SUCCESS STORIES</span>
                <h1 className="testi-title">Apa Kata Klien<br />Tentang <span>NexaWeb?</span></h1>
                <p className="testi-subtitle">
                    Kepuasan klien adalah prioritas utama kami. Berikut adalah bukti nyata dari
                    mitra bisnis yang telah bertransformasi dan berkembang pesat bersama NexaWeb.
                </p>
            </section>

            {/* ================= STATS SECTION ================= */}
            <section className="testi-stats">
                {statsData.map((stat, index) => (
                    <div key={index} className="stat-box">
                        <h2 className="stat-value">{stat.value}</h2>
                        <p className="stat-label">{stat.label}</p>
                    </div>
                ))}
            </section>

            {/* ================= FILTER NAV CONTAINER ================= */}
            <div className="filter-wrapper">
                <div className="filter-container">
                    {["all", "corporate", "system", "education", "retail"].map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${activeFilter === category ? "active" : ""}`}
                            onClick={() => setActiveFilter(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* ================= TESTIMONIAL GRID GRID ================= */}
            <section className="testi-grid">
                {filteredTestimonials.map((testi) => (
                    <div key={testi.id} className="testi-card">
                        <div className="quote-icon">“</div>
                        <div className="rating-stars">
                            {"★".repeat(testi.rating)}
                        </div>
                        <p className="testi-text">"{testi.text}"</p>
                        <div className="testi-divider"></div>
                        <div className="testi-profile">
                            <img src={testi.avatar} alt={testi.name} className="profile-img" />
                            <div className="profile-info">
                                <h3 className="profile-name">{testi.name}</h3>
                                <p className="profile-role">{testi.role}</p>
                                <span className="profile-company">{testi.company}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* ================= CALL TO ACTION MAPPING (BAWAH) ================= */}
            <section className="cta-container">
                <div className="cta-content">
                    <div className="cta-left">
                        <div className="cta-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="mail-svg">
                                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                            </svg>
                        </div>
                        <div className="cta-text">
                            <h3>Siap Membuat Website Impian Anda?</h3>
                            <p>Hubungi kami sekarang dan wujudkan ide digital Anda bersama NexaWeb.</p>
                        </div>
                    </div>
                    <a href="https://wa.me/6281539952365" target="_blank" rel="noreferrer" className="cta-btn">
                        Hubungi Kami
                        <span className="cta-arrow">→</span>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Testimoni;