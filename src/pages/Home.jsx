import React, { useState } from "react";
import "../styles/Home.css";

function Home() {
    // State Filter Tab Aktif
    const [activeTab, setActiveTab] = useState("website");

    // DATA KOMPLEKS DAFTAR HARGA (PRICING CARDS) - Ditambah Lebih Banyak Data
    const pricingData = [
        {
            id: 1,
            category: "website",
            title: "Website Sekolah",
            price: "Rp 800.000",
            desc: "Pusat informasi dan portal administrasi interaktif sekolah, menghubungkan guru, siswa, serta wali murid secara real-time.",
            badge: "Free Training"
        },
        {
            id: 2,
            category: "system",
            title: "System Informasi Sederhana",
            price: "Rp 800.000",
            desc: "Aplikasi berbasis web cloud untuk pencatatan internal, manajemen absensi, dan pengelolaan dokumen digital terstruktur.",
            badge: "Free Training"
        },
        {
            id: 3,
            category: "website",
            title: "Website Company Profile",
            price: "Rp 1.500.000",
            desc: "Portofolio digital eksklusif perusahaan demi menaikkan conversion rate. Dioptimasi SEO Google Core Web Vitals terbaru.",
            badge: "Free Domain & Hosting"
        },
        {
            id: 4,
            category: "system",
            title: "System Manajemen Bisnis",
            price: "Rp 2.800.000",
            desc: "Modul ERP (Enterprise Resource Planning) komprehensif untuk melacak finansial, arus kas, dan rantai pasokan korporasi.",
            badge: "Premium Support"
        },
        {
            id: 5,
            category: "website",
            title: "Website E-Commerce",
            price: "Rp 3.500.000",
            desc: "Platform toko online mandiri terintegrasi payment gateway (Midtrans), kalkulator ongkir berkala, dan dasbor inventaris otomatis.",
            badge: "Setup 7 Hari Kerja"
        },
        {
            id: 6,
            category: "system",
            title: "Sistem Manajemen Inventaris (WMS)",
            price: "Rp 4.000.000",
            desc: "Sistem pelacakan pergudangan modern berbekal scan barcode dinamis demi efisiensi stock opname harian ritel.",
            badge: "Free Maintenance 6 Bulan"
        }
    ];

    // DATA KATEGORI LAYANAN (SERVICES CARD) - Diperbanyak Sesuai Gambar Pendukung
    const servicesData = [
        {
            title: "Website Development",
            tag: "WEBSITE COMPANY",
            items: ["Landing Page Super Cepat", "Company Profile Premium", "E-Commerce / Toko Online", "Custom Portofolio Web"]
        },
        {
            title: "System Informasi",
            tag: "SYSTEM INFORMASI",
            items: ["Sistem Informasi Sederhana", "Sistem Manajemen Bisnis", "Sistem Custom", "Database Management Enterprise"]
        },
        {
            title: "Monitoring & Maintenance",
            tag: "MONITORING SOSMED",
            items: ["Monitoring Basic", "Monitoring Business", "Monitoring Premium", "Security Patching & Cloud Backup"]
        },
        {
            title: "UI/UX & Rebranding",
            tag: "DESIGN INTERACTIVE",
            items: ["Figma Wireframing", "Modern Design System", "Responsive Layout Prototyping", "User Experience Audit"]
        }
    ];

    // Filter data harga berdasarkan tab aktif
    const filteredPricing = pricingData.filter(item => item.category === activeTab);

    return (
        <div className="home-page">
            {/* ================= HERO SECTION ================= */}
            <section className="hero-section">
                <h1 className="hero-title">Apa Fungsi<br />Nexaweb</h1>
                <p className="hero-subtitle">
                    Kami membantu bisnis tampil lebih profesional, dipercaya pelanggan, dan
                    berkembang melalui website yang modern, cepat, dan responsif.
                </p>
            </section>

            {/* ================= PRICING CONTAINER BLOCK ================= */}
            <section className="pricing-section">
                {/* Pil Switch Tab Filter */}
                <div className="tab-container">
                    <button
                        className={`tab-btn ${activeTab === "website" ? "active" : ""}`}
                        onClick={() => setActiveTab("website")}
                    >
                        Website
                    </button>
                    <button
                        className={`tab-btn ${activeTab === "system" ? "active" : ""}`}
                        onClick={() => setActiveTab("system")}
                    >
                        System
                    </button>
                </div>

                <p className="tab-notice">Selamat datang di nexaweb boleh dilihat harga-harga nya yang terjangkau</p>

                {/* Grid Pricing Layout */}
                <div className="pricing-grid">
                    {filteredPricing.map((price) => (
                        <div key={price.id} className={`pricing-card ${price.id % 2 === 0 ? "light-card" : "dark-card"}`}>
                            <div className="card-header">
                                <span className="card-top-title">{price.title}</span>
                                <div className="dot-indicator"></div>
                            </div>
                            <h2 className="card-price1">{price.price}</h2>
                            <p className="card-desc">{price.desc}</p>
                            <div className="card-footer">
                                <span className="badge">{price.badge}</span>
                                <a href="#detail" className="info-link">All Information</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= KATEGORI HARGA LIST SECTION ================= */}
            <section className="services-section">
                <h2 className="section-title">List Harga</h2>
                <div className="services-grid">
                    {servicesData.map((service, idx) => (
                        <div key={idx} className="service-list-card">
                            <div className="service-tag-side">
                                <span className="vertical-text">{service.tag}</span>
                            </div>
                            <div className="service-content-side">
                                <h3>{service.title}</h3>
                                <ul>
                                    {service.items.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;