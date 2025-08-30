import React from 'react';

import video from '../assets/images/hightechworld_phone.mp4';

const OurVision = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
            {/* Image */}
            <div className="h-[60vh] p-3 col-span-1 md:col-span-5 relative md:h-auto">
              {/* Original image source: https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2425&q=80 */}
              
              <video className="h-[55vh] md:h-auto w-full rounded-lg" autoPlay loop muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
              
            </div>

            {/* Vision Text */}
            <div className="col-span-1 md:col-span-5 prose prose-lg mt-4">
            <p className="text-gray-600 mb-6">
                Our mission is delivered through two specialized practices, united by a shared team of experts and a commitment to excellence. This unique structure allows us to offer both powerful execution and strategic, principled guidance for your digital journey.
              </p>
              
              <p className="text-gray-600 mb-6">
                <strong>360 SoftCorp</strong> is the engine of your operational excellence. We specialize in developing robust, high-performance software and empowering your teams through cutting-edge training. Our focus is on building the technical capacity that allows your organization to innovate, scale, and accelerate with confidence.
              </p>

              <p className="text-gray-600 mb-6">
                <strong>Nura Tech Solutions</strong> extends this capability into the realm of strategic transformation. As a premier technology and business consultancy, we architect sophisticated digital ecosystems and provide expert guidance for long-term growth. We selectively partner with organizations committed to creating sustainable, positive impact, ensuring our collaborations are built on a foundation of integrity and shared values.
              </p>

              <p className="text-gray-600 mb-6">
                Whether you need to build a powerful application with 360 SoftCorp or design a comprehensive, value-aligned digital strategy with Nura Tech, you engage with the same core team of dedicated professionals. We are not two separate companies, but two integrated approaches to achieving success. Do you have a vision, an idea? Let us help you make it a reality.
              </p>

              <p className="text-gray-600">
                Join us in building a future where powerful technology is guided by clear purpose. Let's create solutions that not only perform, but also endure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
