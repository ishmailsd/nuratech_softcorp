import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col page-bg">
      <Navbar />
      <main className="flex-grow flex items-center justify-center glass-section">
        <div className="text-center glass-card py-12 px-8 rounded-2xl max-w-md">
          <h1 className="text-9xl font-bold text-blue-400">404</h1>
          <h2 className="text-2xl font-semibold text-gray-100 mt-4">Page Not Found</h2>
          <p className="text-gray-300 mt-4">The page you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/" 
            className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound; 