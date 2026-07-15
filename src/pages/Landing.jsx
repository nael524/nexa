import React from "react";
import "../styles/landing.css"
import gambar1 from "../images/gambar.png"
import logo from "../images/logo2.png"
import Navbar from "../components/Navbar";
function Landing() {
    return (

        <><br /><br /><br />

            <div className="container-landing">
                <p className="circle"></p>
                <p className="judul">Nexa Web</p>
                <p className="subjudul">Website Profesional untuk Bisnis Modern</p>
                <p className="dekripsi">Tingkatkan kredibilitas bisnis dengan website cepat, responsif, dan desain yang menarik untuk menjangkau lebih banyak pelanggan.</p>
                <button className="btn-landing"><a href="#get-started">Get Started</a></button>
                <img className="img-landing" src={gambar1} alt="landing" />
                <div className="intro-screen">
                    <img src={logo} className="intro-logo" alt="logo" />
                </div>
            </div>
        </>
    );
}
export default Landing;