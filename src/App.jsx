import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Corrected import path
import Home from './Components/Home'; // Corrected import path
import About from './Components/About'; // Corrected import path
import Contact from './Components/Contact'; // Corrected import path
import Skill from './Components/Skill';
import Footer from './Components/Footer';
import Projects from './Components/Projects';


function App() {
  return (
    <BrowserRouter>
      {/* Navbar Component */}
      <Navbar />
      
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
