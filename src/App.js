import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login.js';
import About from './Components/About.js';
import Education from './Components/education.js';
import Skills from './Components/Skills.js';
import Service from './Components/Service.js';
import Profile from './Components/profile.js';
import Contact from './Components/contact.js';
import Copyrights from './Components/Copyrights.js';
import React from 'react';

function App() {
  return ( 
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/service" element={<Service />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Copyrights" element={<Copyrights />} />


      </Routes>
    </div>
  );
}


export default App;
