import { useState } from 'react';
import logo from '../assets/images/softcorplogo.png';
import logo1 from '../assets/images/Copilot_nura-tech2_white.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white text-black shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logos */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <a href="/">
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  className="h-15 w-auto"
                />
              </a>
            </div>
              
            <div>
            <a href="/"> {/* Default to Home.jsx if other options are not set up */}
              {/* <a href="https://nura-tech-solutions.com"> */}
              {/* <a href="https://nuratechsolutions.com"> */}
                <img 
                  src={logo1} 
                  alt="Company Logo" 
                  className="h-15 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Home</a>
              <a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">About</a>
              <a href="/services" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Services</a>
              <a href="/portfolio" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Portfolio</a>
              <a href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-lg font-medium">Contact</a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/about" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/services" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="/portfolio" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
          <a href="/contact" className="block hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium">Contact</a>
        </div>
      </div>
    </nav>
  );
}
