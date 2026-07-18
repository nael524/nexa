import React, { useState } from "react";
import "../styles/Portofolio.css";

// Import Semua Aset Gambar & Icon agar Aman Saat Deploy Production
import poster1 from "../images/10.png";
import poster2 from "../images/6.png";
import poster3 from "../images/8.png";
import poster4 from "../images/9.png";
import figmaIcon from "../images/figma.png";
import canvaIcon from "../images/canva.png";
import capcutIcon from "../images/capcut.png";
import reactIcon from "../images/react.png";
import pythonIcon from "../images/python.png";
import githubIcon from "../images/github.png";
import vsIcon from "../images/vscode.png";
import javaIcon from "../images/java.png"
import phpIcon from "../images/PHP.png"
import nodeIcon from "../images/nodejs.png"
import laravelIcon from "../images/laravel.png"
import htmlIcon from "../images/html.png"
import affielIcon from "../images/affinity.png"
import dataIcon from "../images/mysql.png"
import androidIcon from "../images/android.png"

function Portofolio() {
    // Data Kompleks Tech Stack (Ikon Teknologi & Software)
    const techStack = [
        { name: "Figma", icon: "🎨", customImg: figmaIcon }, // Menggunakan file import figma Anda
        { name: "Canva", icon: "✨", customImg: canvaIcon },
        { name: "CapCut", icon: "🎬", customImg: capcutIcon },
        { name: "React Pro", icon: "⚛️", customImg: reactIcon },
        { name: "Python", icon: "🐍", customImg: pythonIcon },
        { name: "GitHub", icon: "🐙", customImg: githubIcon },
        { name: "VS Code", icon: "💻", customImg: vsIcon },
        { name: "Android", icon: "🤖", customImg: androidIcon },
        { name: "Java", icon: "☕", customImg: javaIcon },
        { name: "PHP", icon: "🐘", customImg: phpIcon },
        { name: "Node.js", icon: "🟢", customImg: nodeIcon },
        { name: "Laravel", icon: "🟥", customImg: laravelIcon },
        { name: "HTML5", icon: "🔥", customImg: htmlIcon },
        { name: "Affinity", icon: "🌿", customImg: affielIcon },
        { name: "mysql", icon: "🗄️", customImg: dataIcon }
    ];

    // Data Kategori Poster (Semua Menggunakan Variabel Hasil Import)
    const posterData = [
        {
            id: 1,
            title: "Jenis-jenis Website",
            imgUrl: poster3, // dari import poster3 ("../images/8.png")
            tag: "Marketing"
        },
        {
            id: 2,
            title: "Mengapa Memilih Nexa?",
            imgUrl: poster4, // dari import poster4 ("../images/9.png")
            tag: "Branding"
        },
        {
            id: 3,
            title: "Apa itu Landing Pages",
            imgUrl: poster1, // dari import poster1 ("../images/10.png")
            tag: "Corporate"
        },
        {
            id: 4,
            title: "5 Tanda Bisnis anda butuh Website",
            imgUrl: poster2, // Struktur diperbaiki agar seragam menggunakan properti imgUrl
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
                            {tech.customImg ? (
                                <img src={tech.customImg} alt={tech.name} className="tech-custom-icon-img" />
                            ) : (
                                <span className="tech-emoji">{tech.icon}</span>
                            )}
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