import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "../styles/Layanan.css";
import natan from "../images/natanael.jpeg";

function Layanan() {
    const navigate = useNavigate(); // 2. Inisialisasi fungsi navigasi

    // Data Kompleks Hubungi Kami (Customer Support)
    const contactChannels = [
        {
            id: 1,
            type: "WhatsApp",
            title: "WhatsApp Official Support",
            subtitle: "Chat dengan tim teknis dan dapatkan respon instan.",
            value: "+62 815-3995-2365",
            actionText: "Chat Sekarang",
            icon: "💬",
            accent: "green",
            actionType: "link",
            url: "https://wa.me/6281539952365"
        },
        {
            id: 2,
            type: "Email",
            title: "Email Eksekutif & Bisnis",
            subtitle: "Kirim proposal proyek atau pertanyaan formal.",
            value: "nexaweb.id@gmail.com",
            actionText: "Kirim Email",
            icon: "✉️",
            accent: "blue",
            actionType: "link",
            url: "mailto:nexaweb.id@gmail.com"
        },
        {
            id: 3,
            type: "Jam Operasional",
            title: "Waktu Pelayanan Aktif",
            subtitle: "Komitmen penuh untuk melayani konsultasi Anda.",
            value: "Senin - Sabtu, 08.00 - 20.00 WIB",
            actionText: "Lihat Jadwal",
            icon: "🕒",
            accent: "blue",
            actionType: "route", // Penanda untuk internal routing
            url: "/waktu"
        }
    ];

    // Data Kompleks Layanan Utama Kami
    const coreServices = [
        {
            id: "srv-1",
            title: "Konsultasi Website",
            desc: "Membantu Anda menemukan arsitektur dan solusi web terbaik yang disesuaikan dengan target konversi bisnis.",
            features: ["Analisis Kompetitor", "Rekomendasi Tech Stack", "Estimasi Budget Efisien"],
            icon: "💻"
        },
        {
            id: "srv-2",
            title: "Konsultasi Sistem",
            desc: "Diskusi mendalam mengenai kebutuhan sistem informasi terintegrasi demi menyederhanakan alur kerja internal Anda.",
            features: ["Pemetaan Flowchart Bisnis", "Perancangan Database", "Integrasi Pihak Ketiga"],
            icon: "⚙️"
        },
        {
            id: "srv-3",
            title: "Bantuan Teknis",
            desc: "Solusi kilat menangani kendala teknis, perbaikan bug darurat, hingga migrasi server tanpa downtime berarti.",
            features: ["Troubleshooting 24/7", "Perbaikan Bug Cepat", "Migrasi Data Aman"],
            icon: "🎧"
        },
        {
            id: "srv-4",
            title: "Maintenance Website",
            desc: "Pembaruan rutin berkala, manajemen backup berlapis, pengawasan keamanan ketat, serta optimasi kecepatan performa.",
            features: ["Cloud Backup Mingguan", "Security Patching Berkala", "Uptime Monitoring"],
            icon: "🛡️"
        },
        {
            id: "srv-5",
            title: "Konsultasi Digital",
            desc: "Perumusan strategi digital, optimasi SEO organik tingkat lanjut, dan rekomendasi Growth Hacking ekspansi pasar bisnis.",
            features: ["Audit SEO Menyeluruh", "Strategi Skala Bisnis", "Analitik Konversi Data"],
            icon: "📈"
        }
    ];

    // 3. Fungsi handle klik dinamis untuk external link & internal route
    const handleChannelAction = (channel) => {
        if (channel.actionType === "route") {
            navigate(channel.url); // Pindah ke halaman /waktu tanpa reload
        } else {
            window.open(channel.url, "_blank", "noopener,noreferrer"); // Buka WA / Email di tab baru
        }
    };

    return (
        <div className="layanan-page">
            {/* ================= HERO CUSTOMER SERVICE ================= */}
            <section className="layanan-hero">
                <div className="hero-badge">NEXAWEB SUPPORT CENTER</div>
                <h1 className="layanan-main-title">Customer Service & Center</h1>
                <p className="layanan-subtitle">
                    Kami siap membantu mengakselerasi bisnis Anda dengan pelayanan cepat,
                    ramah, taktis, dan didukung oleh tim ahli IT profesional yang berpengalaman.
                </p>

                <div className="avatar-canvas">
                    <div className="glow-ring"></div>
                    <div className="support-badge-float">Online</div>
                    <img
                        src={natan}
                        alt="Customer Support NexaWeb"
                        className="support-avatar-img"
                    />
                </div>
            </section>

            {/* ================= HUBUNGI KAMI BLOCK ================= */}
            <section className="hubungi-section">
                <h2 className="block-title">Hubungi <span>Kami</span></h2>
                <p className="block-desc">Pilih saluran komunikasi yang paling nyaman bagi Anda. Tim kami siap merespon.</p>

                <div className="channels-vertical-list">
                    {contactChannels.map((channel) => (
                        <div key={channel.id} className={`channel-strip-card border-${channel.accent}`}>
                            <div className="channel-left">
                                <div className="channel-icon-wrapper">{channel.icon}</div>
                                <div className="channel-details">
                                    <span className="channel-badge-type">{channel.type}</span>
                                    <h3>{channel.title}</h3>
                                    <p>{channel.subtitle}</p>
                                    <span className="channel-value">{channel.value}</span>
                                </div>
                            </div>
                            {/* 4. Tambahkan onClick handler disini */}
                            <button
                                className="channel-action-btn"
                                onClick={() => handleChannelAction(channel)}
                            >
                                {channel.actionText} <span className="arrow-icon">→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* ================= LAYANAN KAMI GRID BLOCK ================= */}
            <section className="services-showcase-section">
                <h2 className="block-title">Layanan <span>Kami</span></h2>
                <p className="block-desc">Solusi ekosistem digital terintegrasi ujung-ke-ujung untuk mendukung transformasi bisnis masa depan.</p>

                <div className="services-flex-grid">
                    {coreServices.map((service) => (
                        <div key={service.id} className="service-box-card">
                            <div className="box-top-decoration"></div>
                            <div className="box-icon-sphere">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p className="box-desc">{service.desc}</p>

                            <div className="box-features-list">
                                <h4>Cakupan Kerja:</h4>
                                <ul>
                                    {service.features.map((feat, idx) => (
                                        <li key={idx}>{feat}</li>
                                    ))}
                                </ul>
                            </div>
                            <a
                                href="https://wa.me/6281539952365"
                                target="_blank"
                                rel="noreferrer"
                                className="box-anchor-link"
                            >
                                Mulai Konsultasi
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Layanan;