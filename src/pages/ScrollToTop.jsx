import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    // Mengambil informasi rute jalan/halaman saat ini
    const { pathname } = useLocation();

    useEffect(() => {
        // Memaksa browser kembali ke koordinat X:0, Y:0 (paling atas)
        window.scrollTo(0, 0);
    }, [pathname]); // Efek ini berjalan otomatis setiap kali rute (pathname) berubah

    return null; // Komponen ini tidak merender elemen visual apa pun
}

export default ScrollToTop;