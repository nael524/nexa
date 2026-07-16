import React from 'react';
import '../styles/List.css';

function List() {
    // Data Layanan Komplit, Detail & Profesional (10 Paket Utama)
    const services = [
        {
            id: 1,
            badge: "WEBSITE DEVELOPMENT",
            title: "Website & Landing Page",
            price: "Rp 1.500.000",
            period: "Sekali Bayar",
            delivery: "Estimasi 5-10 Hari",
            features: [
                "Desain UI/UX Custom & Modern",
                "Fully Responsive (Mobile, Tablet, Desktop)",
                "Integrasi CMS (Mudah edit konten sendiri)",
                "SEO Friendly & Google Indexing",
                "Fitur WhatsApp Chat & Contact Form",
                "Gratis Domain (.com) & Hosting 1 Tahun"
            ],
            isPopular: false
        },
        {
            id: 2,
            badge: "SYSTEM INFORMASI",
            title: "Sistem Informasi & ERP",
            price: "Rp 3.500.000",
            period: "Mulai Dari",
            delivery: "Estimasi 20-45 Hari",
            features: [
                "Sistem Manajemen Keuangan & Kasir (POS)",
                "Sistem Absensi & Payroll Karyawan",
                "Sistem Inventori & Stok Gudang",
                "Dashboard Analisis Data & Grafik Real-time",
                "Multi-level User Hak Akses (Admin, Staff, Manager)",
                "Export Laporan ke Excel/PDF Otomatis"
            ],
            isPopular: true // Rekomendasi / Terpopuler
        },
        {
            id: 3,
            badge: "E-COMMERCE SYSTEM",
            title: "E-Commerce & Toko Online",
            price: "Rp 4.500.000",
            period: "Mulai Dari",
            delivery: "Estimasi 14-25 Hari",
            features: [
                "Sistem Keranjang Belanja & Checkout",
                "Integrasi Payment Gateway (Midtrans, Xendit)",
                "Hitung Ongkir Otomatis (RajaOngkir - Semua Kurir)",
                "Sistem Manajemen Produk Tanpa Batas",
                "Notifikasi Pesanan via WhatsApp/Email",
                "Manajemen Kupon & Diskon Promosi"
            ],
            isPopular: false
        },
        {
            id: 4,
            badge: "MOBILE APPLICATIONS",
            title: "Mobile App (Android & iOS)",
            price: "Rp 7.000.000",
            period: "Mulai Dari",
            delivery: "Estimasi 30-60 Hari",
            features: [
                "Pengembangan Hybrid (React Native / Flutter)",
                "Rilis di Google Play Store & Apple App Store",
                "Sistem Notifikasi Push (Push Notifications)",
                "Integrasi GPS & Google Maps API",
                "Keamanan Enkripsi Data Pengguna",
                "Integrasi API Pihak Ketiga (Third-party API)"
            ],
            isPopular: false
        },
        {
            id: 5,
            badge: "UI/UX DESIGN SERVICE",
            title: "Premium UI/UX Research & Design",
            price: "Rp 2.000.000",
            period: "Per Project",
            delivery: "Estimasi 7-14 Hari",
            features: [
                "Wireframing & High-Fidelity Design",
                "Interactive Prototype (Figma Link)",
                "User Research & Persona Analysis",
                "Design System Guideline (Komponen & Warna)",
                "Revisi Hingga 3 Kali",
                "Akses File Source Figma Asli"
            ],
            isPopular: false
        },
        {
            id: 6,
            badge: "AI INTEGRATION",
            title: "AI & Big Data System Integration",
            price: "Rp 9.500.000",
            period: "Mulai Dari",
            delivery: "Estimasi 30-75 Hari",
            features: [
                "Integrasi OpenAI API / LLM Custom",
                "Sistem Machine Learning untuk Prediksi Bisnis",
                "Automated Chatbot Pintar (NLP)",
                "Scraping & Data Processing Skala Besar",
                "Analisis Sentimen Media Sosial",
                "Dashboard Insight Berbasis AI"
            ],
            isPopular: false
        },
        {
            id: 7,
            badge: "CYBER SECURITY AUDIT",
            title: "Penetration Testing & Security Audit",
            price: "Rp 5.000.000",
            period: "Per Audit",
            delivery: "Estimasi 10-20 Hari",
            features: [
                "Vulnerability Assessment & Scanning",
                "Penetration Testing (Web & API Server)",
                "Analisis Celah Keamanan (OWASP Top 10)",
                "Rekomendasi Dokumen Patching & Perbaikan",
                "Sertifikat Keamanan Digital Internal",
                "Garansi Re-test Setelah Perbaikan Bug"
            ],
            isPopular: false
        },
        {
            id: 8,
            badge: "CLOUD INFRASTRUCTURE",
            title: "Cloud Server Setup & DevOps",
            price: "Rp 3.000.000",
            period: "Setup Awal",
            delivery: "Estimasi 5-12 Hari",
            features: [
                "Konfigurasi AWS, Google Cloud, atau DigitalOcean",
                "Setup Docker Containerization & Kubernetes",
                "Implementasi CI/CD Pipeline Otomatis",
                "Load Balancing & Auto-Scaling Setup",
                "Konfigurasi SSL HTTPS & Web Server Hardening",
                "Penyusunan Backup Cloud Otomatis Harian"
            ],
            isPopular: false
        },
        {
            id: 9,
            badge: "COMPANY PROFILE PRO",
            title: "Corporate Website Premium",
            price: "Rp 2.500.000",
            period: "Sekali Bayar",
            delivery: "Estimasi 5-12 Hari",
            features: [
                "Desain Korporat Elegan & Profesional",
                "Multi-language System (Bahasa & Inggris)",
                "Integrasi Google Maps & Galeri Bisnis",
                "Halaman Karir & Submit CV Karyawan",
                "Kecepatan Akses Tinggi (Speed Optimized)",
                "Setup Email Bisnis Khusus (nama@perusahaan.com)"
            ],
            isPopular: false
        },
        {
            id: 10,
            badge: "MONITORING & MAINTENANCE",
            title: "Monitoring & Maintenance",
            price: "Rp 750.000",
            period: "Per Bulan",
            delivery: "Dukungan 24/7",
            features: [
                "Backup Database Bulanan secara Berkala",
                "Perbaikan Bug & Error yang Tidak Terduga",
                "Update Sistem Keamanan & Plugin",
                "Monitoring Server Uptime 99.9%",
                "Minor Revision (Update Teks/Gambar Konten)",
                "Laporan Performa Website Bulanan"
            ],
            isPopular: false
        }
    ];

    const handleOrder = (serviceName) => {
        const whatsappNumber = "081539952365";
        const text = encodeURIComponent(`Halo NexaWeb, saya tertarik dengan layanan *${serviceName}*. Bisa konsultasi lebih lanjut?`);
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    };

    return (
        <section className="pricing-section-white">
            <div className="pricing-container-white">
                <br />
                {/* Header Section */}
                <div className="pricing-header-white">
                    <span className="pricing-top-tag-white">NEXAWEB DIGITAL SOLUTIONS</span>
                    <h2 className="pricing-main-title-white">Pilihan Paket & List Harga</h2>
                    <div className="pricing-title-line-white"></div>
                    <p className="pricing-subtitle-white">
                        Investasi digital terbaik untuk masa depan bisnis Anda. Transparan, profesional, dan siap dikembangkan sesuai skala bisnis Anda.
                    </p>
                </div>

                {/* Grid Layout Cards */}
                <div className="pricing-grid-white">
                    {services.map((item) => (
                        <div key={item.id} className={`pricing-card-white ${item.isPopular ? 'popular' : ''}`}>
                            {item.isPopular && (
                                <div className="popular-ribbon-white">
                                    <span className="star-icon-white">★</span> Terlaris
                                </div>
                            )}

                            {/* Badge Kategori Atas */}
                            <div className="card-badge-top-white">
                                <span>{item.badge}</span>
                            </div>

                            <div className="card-body-white">
                                <div className="card-header-info-white">
                                    <h3 className="card-title-white">{item.title}</h3>
                                    <div className="delivery-box-white">
                                        <span className="clock-icon-white">🕒</span>
                                        <span className="delivery-time-white">{item.delivery}</span>
                                    </div>
                                </div>

                                {/* Bagian Harga */}
                                <div className="price-section-white">
                                    <span className="price-period-white">{item.period}</span>
                                    <div className="price-box-white">
                                        <span className="price-amount-white">{item.price}</span>
                                    </div>
                                </div>

                                {/* Daftar Fitur */}
                                <ul className="card-features-white">
                                    {item.features.map((feature, index) => (
                                        <li key={index} className="feature-item-white">
                                            <span className="check-icon-white">✓</span>
                                            <span className="feature-text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Tombol Order */}
                                <button className="btn-order-white" onClick={() => handleOrder(item.title)}>
                                    Konsultasi Sekarang
                                    <span className="arrow-icon-white"> ➔</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default List;