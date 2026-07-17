import React, { useState } from "react";
import "../styles/Portofolio.css";
import poster1 from "../images/10.png"
function Portofolio() {
    // Data Kompleks Tech Stack (Ikon Teknologi & Software)
    const techStack = [
        { name: "Figma", icon: "🎨" },
        { name: "Canva", icon: "✨" },
        { name: "CapCut", icon: "🎬" },
        { name: "React Pro", icon: "⚛️" },
        { name: "Python", icon: "🐍" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Android", icon: "🤖" },
        { name: "Java", icon: "☕" },
        { name: "PHP", icon: "🐘" },
        { name: "Node.js", icon: "🟢" },
        { name: "Laravel", icon: "🟥" },
        { name: "HTML5", icon: "🔥" },
        { name: "Git", icon: "🌿" },
        { name: "Database", icon: "🗄️" }
    ];

    // Data Kompleks Portofolio Kategori Poster
    const posterData = [
        {
            id: 1,
            title: "Jenis-jenis Website",
            imgUrl: "src/images/8.png",
            tag: "Marketing"
        },
        {
            id: 2,
            title: "Mengapa Memilih Nexa?",
            imgUrl: "src/images/9.png",
            tag: "Branding"
        },
        {
            id: 3,
            title: "Apa itu Landing Pages",
            imgUrl: "src/images/10.png",
            tag: "Corporate"
        }, {
            id: 4,
            title: "5 Tanda Bisnis anda butuh Website",
            src: { poster1 },
            tag: "Corporate"
        }
    ];

    // Data Kompleks Website & System Showcase (Untuk Carousel)
    const webProjects = [
        {
            id: 1,
            title: "Website Portal Sekolah Harapan 1",
            desc: "Raih Masa Depan Gemilang dengan sistem administrasi online, pendaftaran siswa baru terintegrasi, dan portal pengumuman real-time.",
            imgUrl: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?w=800&auto=format&fit=crop&q=80",
            link: "https://wa.me/6281539952365?text=Halo%20NexaWeb,%20saya%20tertarik%20dengan%20Sistem%20Website%20Sekolah."
        },
        {
            id: 2,
            title: "System Enterprise Resource Planning (ERP)",
            desc: "Dasbor internal manajemen stok ritel, barcode scanning dinamis, laporan kas otomatis, dan optimasi supply chain tingkat lanjut.",
            imgUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
            link: "https://wa.me/6281539952365?text=Halo%20NexaWeb,%20saya%20tertarik%20dengan%20Sistem%20ERP%20Bisnis."
        }
    ];

    // State Index untuk mengontrol pergerakan Slider Web Dev
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === webProjects.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? webProjects.length - 1 : prev - 1));
    };

    return (
        <div className="porto-page">
            {/* ================= HERO HEADER TITLE ================= */}
            <section className="porto-hero">
                <h1 className="porto-main-title">
                    PORTO FOLIO<br />NEXA WEB
                </h1>
                <a href="https://instagram.com/nexaweb_123" target="_blank" rel="noreferrer" className="porto-insta-tag">
                    ↗ @nexaweb.id
                </a>
            </section>

            {/* ================= BRAND DESCRIPTION & TECH STACK ================= */}
            <section className="porto-brand-card">
                <div className="brand-card-glow"></div>
                <h2>NEXA WEB</h2>
                <p className="brand-card-desc">
                    Nexa Web adalah penyedia layanan pembuatan website modern yang berfokus pada desain
                    profesional, performa tinggi, dan pengalaman pengguna yang optimal. Kami membantu bisnis,
                    UMKM, sekolah, organisasi, hingga perusahaan membangun identitas digital melalui website
                    yang responsif, cepat, dan sesuai kebutuhan.
                </p>

                <div className="software-badge">My Software</div>

                {/* Tech Stack Icons Ring Array */}
                <div className="tech-stack-grid">
                    {techStack.map((tech, index) => (
                        <div key={index} className="tech-item-circle" title={tech.name}>
                            <span className="tech-emoji">{tech.icon}</span>
                            <span className="tech-name-popup">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= LOWER PORTFOLIO BLUE ZONE ================= */}
            <div className="porto-dark-zone">

                {/* --- SUB-SECTION 1: POSTER GALLERY --- */}
                <section className="poster-section">
                    <h2 className="zone-sub-title">Poster Marketing Design</h2>
                    <div className="poster-grid">
                        {posterData.map((poster) => (
                            <div key={poster.id} className="poster-card">
                                <span className="poster-card-tag">{poster.tag}</span>
                                <div className="poster-img-wrapper">
                                    <img src={poster.imgUrl} alt={poster.title} />
                                </div>
                                <div className="poster-card-info">
                                    <h3>{poster.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SUB-SECTION 2: WEB DEVELOP & SYSTEM CAROUSEL --- */}
                <section className="web-dev-section">
                    <h2 className="zone-sub-title">Website Devlope and System</h2>

                    <div className="carousel-container">
                        {/* Tombol Panah Kiri */}
                        <button className="carousel-arrow arrow-left" onClick={prevSlide} aria-label="Previous Slide">
                            ⟨
                        </button>

                        {/* Slide Konten Aktif */}
                        <div className="carousel-slide-wrapper">
                            <div className="web-mockup-card">
                                <div className="mockup-header">
                                    <div className="mockup-dots">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="mockup-search-bar">https://nexaweb.id/project-client</div>
                                </div>

                                <div className="mockup-body-split">
                                    <div className="mockup-img-side">
                                        <img src={webProjects[currentSlide].imgUrl} alt={webProjects[currentSlide].title} />
                                    </div>
                                    <div className="mockup-info-side">
                                        <h3>{webProjects[currentSlide].title}</h3>
                                        <p>{webProjects[currentSlide].desc}</p>
                                        <a
                                            href={webProjects[currentSlide].link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mockup-action-link"
                                        >
                                            Lihat Live Sistem Realtime <span>→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tombol Panah Kanan */}
                        <button className="carousel-arrow arrow-right" onClick={nextSlide} aria-label="Next Slide">
                            ⟩
                        </button>
                    </div>

                    {/* Indikator Titik Bawah Slider */}
                    <div className="carousel-dots-indicator">
                        {webProjects.map((_, idx) => (
                            <span
                                key={idx}
                                className={`indicator-dot ${currentSlide === idx ? "active" : ""}`}
                                onClick={() => setCurrentSlide(idx)}
                            ></span>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}

export default Portofolio;