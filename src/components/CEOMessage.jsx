import React from 'react';
//import image from "../assets/images/ish_ceo1.jpg";
import image1 from "../assets/images/ish_ceo2.jpg";

const CEOMessage = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-2">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A Message from Our CEO</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
            {/* Image */}
            <div className="md:col-span-5 relative h-[50vh] md:h-auto overflow-hidden">
              <img
               src={image1}
                alt="CEO Ishmail Daoh"
                className="w-full object-cover rounded-lg shadow-xl absolute"
                style={{ height: 'calc(100% + 35px)', top: '-30px' }}
              />
            </div>

            {/* Message */}
            <div className="md:col-span-5 prose prose-lg">
              <p className="text-gray-600 mb-6">
                Welcome. I’m glad you’re here.
              </p>
              
              <p className="text-gray-600 mb-6">
                I founded Nura Tech Solutions and co-founded 360 SoftCorp based on a single, guiding principle: that technology should be a force for positive growth, created with both purpose and integrity. Our journey is just beginning, but our commitment to this ideal is at the core of everything we do.
              </p>

              <p className="text-gray-600 mb-6">
                We believe that the best work comes from genuine partnership. We don't offer one-size-fits-all solutions. Instead, we dive deep to understand the unique challenges and opportunities your business faces. Our goal isn't just to be a service provider, but a dedicated collaborator in your success.
              </p>

              <p className="text-gray-600 mb-6">
                Whether it's building powerful software and training teams through 360 SoftCorp, or architecting a value-driven digital strategy with Nura Tech, our approach is always personal and focused on real-world results.
              </p>

              <p className="text-gray-600 mb-6">
                As we look to the future, we are excited about the possibilities ahead and the diverse partners we have yet to meet. We are actively seeking to collaborate with businesses across all industries who are passionate about building a better future through technology.
              </p>

              <p className="text-gray-600 mb-6">
                If you have an idea to explore or a challenge to overcome, I personally invite you to reach out. Let's start a conversation.
              </p>

              <div className="mt-8 not-prose">
                <p className="text-gray-900 font-semibold">Ishmail Sheriff Daoh</p>
                <p className="text-gray-600 text-base">Founder & CEO, Nura Tech Solutions</p>
                <p className="text-gray-600 text-base">Co-Founder & CEO, 360 SoftCorp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;
