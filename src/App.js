import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Planes from './components/Planes';
import Faq from './components/Faq';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
