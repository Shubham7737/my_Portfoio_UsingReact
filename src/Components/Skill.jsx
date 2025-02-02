import React from 'react';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { FaBootstrap, FaJava, FaJsSquare } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from 'react-icons/io';
import { IoLogoReact } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';

const Skill = () => {
  return (
    <section id="skills" className="py-16 bg-zinc-950">
      <div className="container flex flex-col items-center mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-12 text-gray-300">
          My Skills
        </h2>
        <div className="flex flex-wrap  gap-12 justify-center align-middle ">
          {/* Skill Card */}
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <BiLogoCPlusPlus className="text-6xl text-blue-500 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-blue-500">
              C++
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <FaJava className="text-6xl text-red-600 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-red-600">
              Java
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <IoLogoHtml5 className="text-6xl text-orange-600 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-orange-600">
              HTML
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <IoLogoCss3 className="text-6xl text-blue-600 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-blue-600">
              CSS
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <FaJsSquare className="text-6xl text-yellow-500 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-yellow-500">
              JavaScript
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <IoLogoNodejs className="text-6xl text-green-600 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-green-600">
              NodeJS
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <SiMongodb className="text-6xl text-green-500 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-green-500">
              MongoDB
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <IoLogoReact className="text-6xl text-blue-400 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-blue-400">
              React
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <FaBootstrap className="text-6xl text-purple-600 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-purple-600">
              Bootstrap
            </span>
          </div>
          <div className="w-44 flex flex-col items-center bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <RiTailwindCssFill className="text-6xl text-teal-400 group-hover:scale-125 transition-transform duration-200" />
            <span className="mt-4 text-lg text-gray-300 group-hover:text-teal-400">
              Tailwind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;