import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";
import logo from "../images/logo2.png";
import Navbar from "../components/Navbar";

function Landing() {
    const navigate = useNavigate();

    // Memaksa posisi viewport kembali ke atas saat masuk landing page
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleGetStarted = () => {
        navigate("/home");
    };

    // Data Kompleks Arsitektur Sistem NexaWeb untuk menambah impresi mahal
    const coreMetrics = [
        { rate: "99.9%", label: "Uptime SLA Guarantee" },
        { rate: "< 1.2s", label: "Core Web Vitals LCP" },
        { rate: "SEO A+", label: "Search Engine Rank" }
    ];

    const valuePropositions = [
        { title: "Next-Gen Framework", desc: "Arsitektur berbasis cloud modern super cepat." },
        { title: "Enterprise Security", desc: "Proteksi berlapis terhadap enkripsi data vital." },
        { title: "Cyber Optimization", desc: "Konversi rasio maksimal bagi traking pelanggan." }
    ];

    return (
        <>
            <Navbar />
            <div className="container-landing">

                {/* ================= HERO ABSTRACT INTERACTIVE ARTWORK ================= */}
                <div className="hero-visual-wrapper">
                    {/* Top Atmospheric Ambient Light Glow */}
                    <div className="ambient-glow-green"></div>
                    <div className="ambient-glow-blue"></div>

                    {/* Complex CSS Geometry Graphic Grid */}
                    <div className="abstract-geometry-canvas">
                        <div className="geo-circle-orbit"></div>
                        <div className="geo-card-floating-dark">
                            <span className="geo-badge-live">SYS ACTIVE</span>
                            <div className="geo-line-placeholder short"></div>
                            <div className="geo-line-placeholder long"></div>
                            <div className="geo-bar-chart">
                                <span></span><span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="geo-card-floating-green">
                            <div className="geo-flex-node">
                                <span className="node-dot"></span>
                                <p>Secure Database Connected</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= PREMIUM MAIN CONTENT ZONE ================= */}
                <div className="landing-content-zone">
                    <div className="brand-tag-premium">NEXAWEB DIGITAL ARCHITECTURE</div>

                    <h1 className="judul">NexaWeb</h1>
                    <h2 className="subjudul">Website Profesional untuk Bisnis Modern</h2>
                    <p className="deskripsi">
                        Tingkatkan kredibilitas bisnis global Anda dengan ekosistem website premium berkecepatan tinggi,
                        arsitektur responsif adaptif, dan desain eksklusif demi menjangkau konversi market yang jauh lebih luas.
                    </p>

                    {/* Action Call to Action Button */}
                    <div className="action-wrapper-landing">
                        <button className="btn-landing" onClick={handleGetStarted}>
                            Get Started
                            <span className="btn-shine"></span>
                        </button>
                    </div>

                    {/* Data Kompleks Komponen Tambahan (Metrics Grid Banner) */}
                    <div className="landing-metrics-banner">
                        {coreMetrics.map((metric, index) => (
                            <div key={index} className="metric-item-box">
                                <h3>{metric.rate}</h3>
                                <p>{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* Data Kompleks Keunggulan Agensi (Bento Framework) */}
                    <div className="landing-features-bento">
                        {valuePropositions.map((item, index) => (
                            <div key={index} className="bento-feature-item">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= PREMIUM INTRO ANIMATION SCREEN ================= */}
                <div className="intro-screen">
                    <div className="intro-logo-wrapper">
                        <img src={logo} className="intro-logo" alt="NexaWeb Premium Engine Loading" />
                        <div className="intro-spinner"></div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Landing;