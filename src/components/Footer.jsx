import React from 'react';


const Footer = () => {
  return (
    <footer className="relative py-16 flex flex-col items-center gap-3">
      {/* Top section: main footer content, full border, 90vw, blur */}
      <section className="w-[90vw] max-w-7xl bg-white/[0.06] backdrop-blur-xl text-gray-300 border border-white/25 rounded-lg">
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
      <h3 className="text-2xl font-bold text-white">360 SoftCorp & Nura Tech Solutions</h3>
      <p className="text-gray-400">
        Empowering businesses with innovative solutions for a digital future.
      </p>
      <div className="flex space-x-4">
        <a
          /* href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer" */
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
        >
          <i className="fab fa-twitter text-white"></i>
          <span className="sr-only">Twitter</span>
        </a>
        <a
          /* href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer" */
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
        >
          <i className="fab fa-linkedin-in text-white"></i>
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          /* href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer" */
          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-200"
        > 
          <i className="fab fa-instagram text-white"></i>
          <span className="sr-only">Instagram</span>
       </a>
      </div>
    </div>

           {/* Quick Links */}
           <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{ name: 'About Us', href: '/about' }, { name: 'Services', href: '/services' }, { name: 'Solutions', href: '/solutions' }, { name: 'Contact', href: '/contact' }].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4"><a href ="/services" className="hover:text-white transition-colors duration-200">Services</a></h4>
            <ul className="space-y-2">
              {[
                'Cloud Solutions',
                'Digital Transformation',
                'IT Consulting',
                'Managed Services'
              ].map((service) => (
                <li key={service}>
                    {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <span className="block text-gray-400">Email:</span>
                
                  contact@360softcorp.com
                
              </li>
              <li>
                <span className="block text-gray-400">Phone:</span>
                
                  +232 (90) 285-344
                
              </li>
              <li>
                <span className="block text-gray-400">Address:</span>
                <span className="block">
                  26 John St, Freetown
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>

      {/* Bottom section: copyright, full border, 90vw, minimal padding above */}
      <section className="w-[90vw] max-w-7xl bg-white/[0.06] backdrop-blur-xl text-gray-300 border border-white/25 rounded-lg py-4 px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} 360 SoftCorp &  Nura Tech Solutions.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
