import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Web Development',
    description: 'We build modern, scalable, and high-performance web applications tailored to your business needs.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Our mobile applications offer seamless user experiences on both iOS and Android platforms.',
    icon: '📱',
  },
  {
    title: 'UI/UX Design',
    description: 'We create intuitive and engaging user interfaces that enhance usability and customer satisfaction.',
    icon: '🎨',
  },
  {
    title: 'Strategic Business Advisory',
    description: 'We partner with you to create a clear roadmap for success, aligning your business goals with impactful strategies for sustainable growth.',
    icon: '📈',
  },
  {
    title: 'E-Commerce Development',
    description: 'We build secure, scalable, and user-friendly e-commerce platforms to boost online sales.',
    icon: '🛒',
  },
  {
    title: 'Custom Software Solutions',
    description: 'Tailor-made software applications that meet specific business requirements and drive innovation.',
    icon: '💡',
  },
];

const Services = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">Empowering Businesses with Cutting-Edge Digital Solutions</p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
