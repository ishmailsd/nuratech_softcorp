import React from 'react';
import Hero from '../components/Hero';
import OurVision from '../components/OurVision';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <OurVision />
      <Footer />
    </div>
  );
};

export default Home;
