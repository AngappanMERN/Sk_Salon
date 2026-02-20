import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Layout/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Service from './components/Services/Service';
import Price from './components/Pricing/Price';

import Gallery from './components/Gallery/Gallery';
import Members from './components/Team/Members';
import Clients from './components/Testimonials/Clients';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToAnchor />
        <Navbar />
        <div className="hidden xl:block h-24"></div> {/* Spacer for fixed navbar */}
        <Routes>
          <Route path="/" element={
            <>
              <div id="home"><Hero /></div>
              <div id="about"><About /></div>
              <div id="service"><Service /></div>
              <div id="price"><Price /></div>
              <div id="gallery"><Gallery /></div>
              <div id="members"><Members /></div>
              <div id="clients"><Clients /></div>
              <div id="blog"><Blog /></div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/price" element={<Price />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/members" element={<Members />} />
        </Routes>
        <div id="contact"><Footer /></div>
      </BrowserRouter>
    </>
  )
}

export default App
