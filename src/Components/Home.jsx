import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  // Show/Hide Scroll-to-Top Button
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
      {/* Home Section */}
      <section id="HOME" className="py-16 bg-white text-black">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="selfName max-w-3xl mx-auto px-4">
            <h1
              id="headerRun"
              className="text-4xl md:text-5xl font-bold transition-all duration-500 ease-in-out transform hover:scale-105"
            >
              Hello, I'm Shubham
            </h1>
            <p className="mt-4 text-xl transition-all duration-500 ease-in-out hover:text-blue-400">
              I'm a Front-end developer.
            </p>
            <a href="#" download>
              <button
                id="cv"
                className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ABOUT" className="py-12 bg-white text-black">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 px-4">
          {/* Profile Picture */}
          <div className="pic w-full lg:w-1/3 flex justify-center">
            <img
              src=""
              alt="Shubham Danu"
              className="rounded-xl shadow-lg w-64 h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* About Content */}
          <div className="rightAbout w-full lg:w-2/3">
            {/* Box 1: About Me Section */}
            <div className="box1 mb-8">
              <h1 className="text-3xl font-bold mb-4 transition-all duration-500 ease-in-out hover:text-blue-400">
                About me
              </h1>
              <p className="mb-2 transition-all duration-500 ease-in-out hover:text-blue-400">
                A result-focused professional, seeking an opportunity to utilize
              </p>
              <p className="mb-2 transition-all duration-500 ease-in-out hover:text-blue-400">
                career experience, skills, and education to contribute to employer
              </p>
              <p className="mb-2 transition-all duration-500 ease-in-out hover:text-blue-400">
                objectives, profitability, and success with a company offering potential
              </p>
              <p className="transition-all duration-500 ease-in-out hover:text-blue-400">
                for challenge and growth.
              </p>
            </div>

            {/* Box 2: Get to Know Me Section */}
            <div className="box2 mb-8">
              <h1 className="text-3xl font-bold mb-4 transition-all duration-500 ease-in-out hover:text-blue-400">
                Get to know me!
              </h1>
              <p className="mb-2 transition-all duration-500 ease-in-out hover:text-blue-400">
                Hey! It's Shubham Danu, and I'm a Frontend Web Developer
              </p>
              <p className="mb-2 transition-all duration-500 ease-in-out hover:text-blue-400">
                located in Jaipur (Rajasthan).
              </p>
              <p className="mb-2 transition-all duration-500 ease-in-out hover:text-blue-400">
                I'm a bit of a digital product junky. Over the years,
              </p>
              <p className="mb-2 transition-all duration-500 ease-in-out hover:text-blue-400">
                I've used hundreds of web and mobile apps in different
              </p>
              <p className="transition-all duration-500 ease-in-out hover:text-blue-400">
                industries and verticals. Feel free to contact me here.
              </p>
            </div>

            {/* Contact Button */}
            <div className="contactMeBtn">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
              onClick={()=> navigator("/Contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
}
