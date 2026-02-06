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

/* Radar ring: single ring with delay for stagger */
const RadarRing = ({ delay }) => (
  <div
    className="absolute left-1/2 top-1/2 w-[min(90vw,420px)] h-[min(90vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 pointer-events-none"
    style={{
      animation: 'radar-pulse 4s ease-out infinite',
      animationDelay: `${delay}ms`,
    }}
  />
);

/* Floating snippet: code or UI hint */
const FloatingSnippet = ({ children, className = '', style = {} }) => (
  <div
    className={`absolute text-white/70 font-mono text-xs md:text-sm whitespace-nowrap pointer-events-none ${className}`}
    style={{ animation: 'float-drift 18s ease-in-out infinite', ...style }}
  >
    {children}
  </div>
);

const snippetData = [
  { content: '{ }', left: '8%', top: '18%', delay: 0 },
  { content: '</>', left: '82%', top: '22%', delay: 2000 },
  { content: 'fn', left: '12%', top: '72%', delay: 4000 },
  { content: 'div', left: '78%', top: '68%', delay: 1000 },
  { content: 'api', left: '5%', top: '48%', delay: 3000 },
  { content: '() =>', left: '88%', top: '52%', delay: 5000 },
  { content: 'component', left: '22%', top: '12%', delay: 2500 },
  { content: 'route', left: '70%', top: '78%', delay: 1500 },
  { content: '< />', left: '75%', top: '35%', delay: 3500 },
  { content: 'config', left: '18%', top: '58%', delay: 4500 },
];

const Services = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section: radar rings + floating snippets */}
        <section className="relative h-[80vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 text-white px-4 pt-16 overflow-hidden">
          {/* Radar pulse rings (background layer) */}
          {[0, 800, 1600, 2400, 3200].map((delay) => (
            <RadarRing key={delay} delay={delay} />
          ))}

          {/* Floating code/UI snippets */}
          {snippetData.map(({ content, left, top, delay }, i) => (
            <FloatingSnippet
              key={i}
              style={{
                left,
                top,
                animationDelay: `${delay}ms`,
              }}
            >
              {content}
            </FloatingSnippet>
          ))}

          {/* Wireframe-style mini "cards" for UI metaphor */}
          <div
            className="absolute w-14 h-10 border border-white/25 rounded pointer-events-none"
            style={{
              left: '28%',
              top: '28%',
              animation: 'float-drift 20s ease-in-out infinite',
              animationDelay: '700ms',
            }}
          />
          <div
            className="absolute w-12 h-8 border border-white/20 rounded pointer-events-none"
            style={{
              right: '22%',
              bottom: '30%',
              animation: 'float-drift 22s ease-in-out infinite',
              animationDelay: '3s',
            }}
          />

          {/* Content on top */}
          <div className="relative z-10 max-w-3xl">
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
