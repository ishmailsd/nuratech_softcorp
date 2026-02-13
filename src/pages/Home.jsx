import React from 'react';
import Hero from '../components/Hero';
import OurVision from '../components/OurVision';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen page-bg overflow-x-hidden">
      <Navbar />
      <Hero />
      {/* Oval padded band with blur; 110vw so left/right borders sit outside the page */}
      <div className="glass-oval py-4" aria-hidden="true" />
      <OurVision />
      <Footer />
    </div>
  );
};

export default Home;
