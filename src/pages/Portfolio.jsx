import React, { useState } from "react";
import ProjectsCards from "../components/ProjectsCards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import img from "../assets/images/ecommerce-2140603_1280.jpg";
import img1 from "../assets/images/onlinestore.jpg";
import img2 from "../assets/images/webdesign.jpg";
import img3 from "../assets/images/businessproposal.jpg";

const previousProjects = [
  {
    title: "Web Design and Hosting",
    
    image: img2,
    description: "We have done a few websites for businesses and friends.",
  },
  {
    title: "Business Planning",
    /* image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80", */
    image: img3,
    description: "Branding, budget proposal, business advice and marketing",
  },
  {
    title: "Custom ERP Solution",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=800&q=80",
    description: "ERP system for medium-sized companies.",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? previousProjects.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === previousProjects.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-[100vw]">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full flex items-center justify-center text-center bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 text-white px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-xl">Showcasing our innovative software solutions tailored for businesses.</p>
          </div>
        </section>

        {/* Current Project Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Current Project</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
             {/* <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Current Project"
                className="w-full md:w-1/2 rounded-lg shadow-lg"
              /> */}
               <img
               src={img1}
                alt="Online Store"
                className="w-full md:w-1/2 rounded-lg shadow-xl"
                
              />
              
              <div className="text-center md:text-left">
                <p className="text-lg text-gray-700">
                  We are currently developing an <span className="font-bold">online food delivery application</span> that will revolutionize how customers connect with restaurants and food vendors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Projects Section */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Past Projects</h2>
            <div className="relative flex items-center justify-center">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-gray-700/50 p-3 rounded-full hover:bg-gray-700 transition"
              >
                &#9664;
              </button>

              {/* Project Slider */}
              <div className="w-full md:w-[70vw] flex justify-center">
                <ProjectsCards
                  image={previousProjects[currentIndex].image}
                  title={previousProjects[currentIndex].title}
                  description={previousProjects[currentIndex].description}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-gray-700/50 p-3 rounded-full hover:bg-gray-700 transition"
              >
                &#9654;
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
