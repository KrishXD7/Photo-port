import React from 'react';
import "./index.css";
import './App.css';
import Home from './routes/Home';
import Photos from './routes/Photos';
import About from './routes/About';
import Contact from './routes/Contact';
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/Photos" replace />} />
        <Route path="/Photos" element={<Photos />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
