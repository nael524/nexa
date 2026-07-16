import React from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import "../styles/landing.css";
import gambar1 from "../images/gambar.png";
import logo from "../images/logo2.png";
import Navbar from "../components/Navbar";

function Landing() {
    const navigate = useNavigate(); // 2. Inisialisasi fungsi navigate

    const handleGetStarted = () => {
        navigate("/home"); // 3. Arahkan ke path home (sesuaikan dengan path di App.js kamu)
    };

    return (
        <>
            <Navbar />
            <div className="container-landing">
                <p className="circle"></p>
                <p className="judul">Nexa Web</p>
                <p className="subjudul">Website Profesional untuk Bisnis Modern</p>
                <p className="dekripsi">
                    Tingkatkan kredibilitas bisnis dengan website cepat, responsif,
                    dan desain yang menarik untuk menjangkau lebih banyak pelanggan.
                </p>

                {/* 4. Mengubah button menggunakan onClick handler */}
                <button className="btn-landing" onClick={handleGetStarted}>
                    Get Started
                </button>

                <img className="img-landing" src={gambar1} alt="landing" />

                <div className="intro-screen">
                    <img src={logo} className="intro-logo" alt="logo" />
                </div>
            </div>
        </>
    );
}

export default Landing;