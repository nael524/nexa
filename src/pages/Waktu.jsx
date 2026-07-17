import React, { useEffect } from "react"; // 1. Import useEffect
import "../styles/Waktu.css";

function Waktu() {
    // 2. Tambahkan fungsi ini agar otomatis scroll ke paling atas saat halaman terbuka
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Data Kompleks Jadwal Operasional NexaWeb
    const jadwalPelayanan = [
        { hari: "Senin", jam: "08.00 - 20.00 WIB", status: "Normal", note: "Sesi Konsultasi Penuh" },
        { hari: "Selasa", jam: "08.00 - 20.00 WIB", status: "Normal", note: "Sesi Konsultasi Penuh" },
        { hari: "Rabu", jam: "08.00 - 20.00 WIB", status: "Normal", note: "Maintenance Rutin Siang" },
        { hari: "Kamis", jam: "08.00 - 20.00 WIB", status: "Normal", note: "Sesi Konsultasi Penuh" },
        { hari: "Jumat", jam: "08.00 - 20.00 WIB", status: "Normal", note: "Istirahat 11.30 - 13.00" },
        { hari: "Sabtu", jam: "08.00 - 17.00 WIB", status: "Setengah Hari", note: "Khusus Janji Temu Fast-Track" },
        { hari: "Minggu / Libur Nasional", jam: "Tutup", status: "Libur", note: "Hanya Melayani Emergency Server" }
    ];

    const emergencyContact = {
        phone: "+62 815-3995-2365",
        text: "Hubungi Tim On-Call (24/7 Emergency Only)"
    };

    return (
        <div className="waktu-page">
            {/* ================= HEADER SECTION ================= */}
            <section className="waktu-header">
                <span className="waktu-tagline">OPERATIONAL HOURS SYSTEM</span>
                <h1 className="waktu-title">Waktu Pelayanan <span>Aktif</span></h1>
                <p className="waktu-subtitle">
                    Komitmen kami adalah memberikan transparansi waktu pelayanan terbaik.
                    Silakan sesuaikan jadwal konsultasi atau pengajuan proyek Anda pada jam kerja resmi kami berikut.
                </p>
            </section>

            {/* ================= CONTAINER UTAMA ================= */}
            <div className="waktu-container-block">

                {/* Bagian Kiri: Banner Status Utama */}
                <div className="waktu-status-banner">
                    <div className="banner-glow"></div>
                    <div className="live-indicator">
                        <span className="pulse-dot"></span>
                        LIVE STATUS
                    </div>
                    <h2>Sistem Operasional Aktif</h2>
                    <p>Zona Waktu Utama kami mengikuti Waktu Indonesia Barat (WIB / UTC+7).</p>

                    <div className="emergency-box">
                        <h4>Butuh Penanganan Darurat diluar Jam Kerja?</h4>
                        <p>Khusus kendala server down atau keamanan kritis, tim DevOps kami tetap bersiaga.</p>
                        <a
                            href={`https://wa.me/${emergencyContact.phone.replace(/[^0-9]/g, '')}?text=Halo%20NexaWeb,%20saya%20butuh%20bantuan%20darurat%20terkait%20sistem.`}
                            target="_blank"
                            rel="noreferrer"
                            className="emergency-btn"
                        >
                            <span>📞</span> {emergencyContact.text}
                        </a>
                    </div>
                </div>

                {/* Bagian Kanan: Grid List Jadwal Kompleks */}
                <div className="waktu-grid-list">
                    {jadwalPelayanan.map((item, index) => {
                        let statusClass = "status-normal";
                        if (item.status === "Setengah Hari") statusClass = "status-warning";
                        if (item.status === "Libur") statusClass = "status-danger";

                        return (
                            <div key={index} className={`waktu-card-row ${item.status === "Libur" ? "row-disabled" : ""}`}>
                                <div className="row-main-info">
                                    <div className="day-name">
                                        <h3>{item.hari}</h3>
                                        <span className={`status-badge ${statusClass}`}>{item.status}</span>
                                    </div>
                                    <div className="time-range">
                                        <span className="clock-icon">🕒</span>
                                        <span className="time-text">{item.jam}</span>
                                    </div>
                                </div>
                                <div className="row-footer-note">
                                    <span className="info-bullet">•</span> {item.note}
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}

export default Waktu;