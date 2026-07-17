import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link dari react-router-dom
import '../styles/Navbar.css';

import logoImg from '../images/logo2.png'; // 1. Import file logo kamu di sini (sesuaikan arah foldernya)

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        <img src={logoImg} alt="Logo Perusahaan" className="logo-image" />
                    </Link>
                </div>

                {/* Tombol Hamburger untuk Mobile */}
                <button className={`menu-toggle ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>

                {/* Link Navigasi */}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/list" onClick={toggleMenu}>List Harga</Link></li>
                    <li><Link to="/porto" onClick={toggleMenu}>Portofolio</Link></li>
                    <li><Link to="/layanan" onClick={toggleMenu}>Layanan</Link></li>
                    <li><Link to="/testi" onClick={toggleMenu}>Testimoni</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
                </ul >
            </div >
        </nav >
    );
}

export default Navbar;