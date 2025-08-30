import React from 'react';


const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 text-gray-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      
      {/* Main Footer Content */}
      <div className="relative container mx-auto px-4 py-16">
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
    "We are Online" 🤷🏽‍♂️
  </span>
</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="justify-items-center mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} 360 SoftCorp &  Nura Tech Solutions. All rights reserved.
            </p>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
