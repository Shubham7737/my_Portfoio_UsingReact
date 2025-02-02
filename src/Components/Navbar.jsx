import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the mobile menu visibility
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white text-black font-bold py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo/Brand Name */}
        <div>
          <h1 className="text-2xl font-bold">Shubham</h1>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-zinc-950 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skill"
                className="hover:text-blue-400 transition duration-300"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="hover:text-blue-400 transition duration-300"
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              to="/"
              className="block text-white hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block text-white hover:text-blue-400 transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="block text-white hover:text-blue-400 transition duration-300"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block text-white hover:text-blue-400 transition duration-300"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className="block text-white hover:text-blue-400 transition duration-300"
            >
              Projects
            </Link>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}
