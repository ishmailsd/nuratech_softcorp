import React from 'react';

const History = () => {
  return (
    <section className="relative py-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-gray-800 bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-200">
            <p className="text-lg">
              Founded in 2020, 360 SoftCorp emerged as a pioneer in digital transformation, just before the global pandemic reshaped how businesses operate. Our vision was clear: to revolutionize how companies interact with technology.
            </p>
            <p className="text-lg">
              During the challenging times of COVID-19, our CEO pursued advanced studies abroad, gaining invaluable insights into global technological trends and business practices. This period of growth and learning has strengthened our foundation and expanded our capabilities.
            </p>
            <p className="text-lg">
              Today, we're back and stronger than ever, bringing fresh perspectives and enhanced expertise to every project. Our commitment to innovation and excellence remains unwavering as we continue to shape the future of digital solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
