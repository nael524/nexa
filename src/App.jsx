import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Sesuaikan path-nya
import About from './pages/About';
import Landing from './pages/Landing'
import Home from './pages/Home';
import Testimoni from './pages/Testimoni';
import List from './pages/List';
import Layanan from './pages/Layanan';
import Waktu from './pages/Waktu';
import ScrollToTop from './pages/ScrollToTop';
import Portofolio from './pages/Portofolio';
function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        <Route path="/home" element={<Home />} />
        <Route path="/testi" element={<Testimoni />} />
        <Route path="/layanan" element={<Layanan />} />
        <Route path="/waktu" element={<Waktu />} />
        <Route path="/porto" element={<Portofolio />} />
      </Routes >
    </Router >
  );
}

export default App;