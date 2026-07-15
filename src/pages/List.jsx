import React from 'react';
import '../styles/List.css';

function List() {
    // Data Layanan & Harga Profesional
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
            isPopular: true // Menandai sebagai produk terlaris
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
                "Integrasi Payment Gateway (Midtrans, Xendit, dll)",
                "Hitung Ongkir Otomatis (RajaOngkir - JNE, J&T, dll)",
                "Sistem Manajemen Produk & Kategori Tanpa Batas",
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
            badge: "MONITORING & MAINTENACE",
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
        // Redirect langsung ke WhatsApp dengan pesan otomatis
        const whatsappNumber = "081539952365"; // Ganti dengan nomor WhatsApp kamu
        const text = encodeURIComponent(`Halo NexaWeb, saya tertarik dengan layanan *${serviceName}*. Bisa konsultasi lebih lanjut?`);
        window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
    };

    return (
        <section className="pricing-section"><br />
            <div className="pricing-container">
                <div className="pricing-header">
                    <h2 className="pricing-main-title">List Harga</h2>
                    <p className="pricing-subtitle">Pilih paket solusi digital terbaik yang dirancang khusus untuk meningkatkan skala bisnis Anda.</p>
                </div>

                <div className="pricing-grid">
                    {services.map((item) => (
                        <div key={item.id} className={`pricing-card ${item.isPopular ? 'popular' : ''}`}>
                            {/* Ribon penanda "Terpopuler" jika ada */}
                            {item.isPopular && <div className="popular-ribbon">Rekomendasi</div>}

                            {/* Badge Vertikal Hijau */}
                            <div className="card-badge">
                                <span>{item.badge}</span>
                            </div>

                            {/* Konten Utama */}
                            <div className="card-content">
                                <div className="card-header-info">
                                    <span className="delivery-time">{item.delivery}</span>
                                    <h3 className="card-title">{item.title}</h3>
                                </div>

                                {/* Bagian Harga */}
                                <div className="price-section">
                                    <span className="price-period">{item.period}</span>
                                    <div className="price-box">
                                        <span className="price-amount">{item.price}</span>
                                    </div>
                                </div>

                                {/* Fitur yang Didapat */}
                                <ul className="card-features">
                                    {item.features.map((feature, index) => (
                                        <li key={index}>
                                            <span className="check-icon">✓</span> {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tombol Pesan */}
                                <button className="btn-order" onClick={() => handleOrder(item.title)}>
                                    Konsultasi Sekarang
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