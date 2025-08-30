import React from 'react';
import CEOMessage from '../components/CEOMessage';
import History from '../components/History';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative h-[60vh] w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80")'
            }}
            role="img"
            aria-label="Modern office space with glass walls and natural lighting"
          >
            <div className="absolute inset-0 bg-blue-900/10 bg-opacity-50"></div>
            <div className="relative h-full flex items-center justify-center text-center px-4 z-10">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-8xl font-bold text-gray-100 mb-4">About Us</h1>
                <p className="text-2xl text-gray-100">Our Story, Our Mission, Our Future</p>
              </div>
            </div>
          </div>
        </section>

        

        {/* Digital Transformation Section */}
        <section className="relative py-20 bg-gray-800">
           
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-8">Digital Transformation Experts</h2>
              <div className="max-w-3xl mx-auto space-y-6 text-gray-200">
                <p className="text-lg">
                We specialize in creating software that transform businesses into digital powerhouses.
                  In today's rapidly evolving digital landscape, it's vital to have a digital existence. 
                  As countries develop, they follow some common trends; the digital trend is inevitable if a company is to survive in the future. 
                </p>
                <p className="text-lg">
                  From custom management systems to sophisticated e-commerce platforms, our applications are designed to streamline operations, enhance user experience, and drive business growth.
                </p>
                <p className="text-lg">
                  We understand that each business has unique needs, which is why we create tailored solutions that integrate seamlessly with your existing operations and scale with your growth.
                </p>
              </div>
            </div>
          </div>
          {/* Diagonal Divider */}
          <div className="grid grid-cols-2">
          <div className="absolute bottom-0 left-0 w-full h-24 bg-white transform skew-y-6 origin-top-left"></div>
          <div className="absolute bottom-0 right-0 w-full h-24 bg-white transform -skew-y-6 origin-top-right"></div>
          </div>
        </section>

        {/* History Section */}
        <History />

        {/* CEO Message Section */}
        <section className="py-16 bg-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CEOMessage />
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Innovation */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We constantly push boundaries and explore new technologies to deliver cutting-edge solutions.</p>
              </div>

              {/* Integrity */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We maintain the highest standards of honesty and transparency in all our dealings.</p>
              </div>

              {/* Excellence */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in every project, delivering quality results that exceed expectations.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
