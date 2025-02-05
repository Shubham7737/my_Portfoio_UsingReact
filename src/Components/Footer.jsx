import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-zinc-300 text-black font-bold py-2">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <span>
          <a href="https://www.instagram.com/baddwolf__/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-2xl text-red-500 hover:text-red-900'/>
          </a>
        </span>
        <span>
          <a href="https://github.com/Shubham7737" target="_blank" rel="noopener noreferrer">
          <FaGithub className='text-black text-2xl' />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className='text-2xl text-blue-400 hover:text-blue-600' />
          </a>
        </span>
        <span>
          <a href="mailto:danushubham18@gmail.com" target="_blank" rel="noopener noreferrer">
          <MdOutlineEmail className='text-2xl text-blue-900'/>
          </a>
        </span>
      </div>

      {/* Footer Text */}
      <div className="text-center">
        <p className="text-sm text-black">
          Made with @ by Shubham Danu
        </p>
      </div>
    </footer>
  );
}
