import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="">
        {/* Home Section */}
        <div id="HOME" className="py-16 text-white">
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
              <a href="./Shubham_Cv.pdf" download>
                <button
                  id="cv"
                  className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>

      
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-50 bg-blue-600 text-xl text-white p-4 rounded-full pl-6 pr-6 shadow-lg hover:bg-blue-700 transition-all duration-300"
        >
          ↑
        </button>
      )}

    

    </>
  );
}
