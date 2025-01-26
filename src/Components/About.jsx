import React from 'react';

export default function About() {
  return (
    <div id="ABOUT" className="py-12 bg-gray-100">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Profile Picture */}
        <div className="pic w-full lg:w-1/3 flex justify-center">
          <img
            src="./img/img2.jpg"
            alt="Shubham Danu"
            className="rounded-xl shadow-lg w-64 h-64 object-cover"
          />
        </div>

        {/* About Content */}
        <div className="rightAbout w-full lg:w-2/3">
          {/* Box 1: About Me Section */}
          <div className="box1 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">About me</h1>
            <p className="boxPara text-gray-700 mb-2">
              A result-focused professional, seeking an opportunity to utilize
            </p>
            <p className="text-gray-700 mb-2">
              career experience, skills, and education to contribute to employer
            </p>
            <p className="text-gray-700 mb-2">
              objectives, profitability, and success with a company offering potential
            </p>
            <p className="text-gray-700">for challenge and growth.</p>
          </div>

          {/* Box 2: Get to Know Me Section */}
          <div className="box2 mb-8">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Get to know me!</h1>
            <p className="boxPara text-gray-700 mb-2">
              Hey! It's Shubham Danu, and I'm a Frontend Web Developer
            </p>
            <p className="text-gray-700 mb-2">located in Jaipur (Rajasthan).</p>
            <p className="text-gray-700 mb-2">
              I'm a bit of a digital product junky. Over the years,
            </p>
            <p className="text-gray-700 mb-2">
              I've used hundreds of web and mobile apps in different
            </p>
            <p className="text-gray-700">
              industries and verticals. Feel free to contact me here.
            </p>
          </div>

          {/* Contact Button */}
          <div className="contactMeBtn">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
