import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Sesuaikan path-nya
import About from './pages/About';
import Landing from './pages/Landing'
import Home from './pages/Home';
import List from './pages/List';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<List />} />
        <Route path="/home" element={<Home />} />
      </Routes >
    </Router >
  );
}

export default App;