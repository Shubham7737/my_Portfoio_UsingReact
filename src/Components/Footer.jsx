import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white font-bold py-8">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-4">
        <span>
          <a href="https://www.instagram.com/baddwolf__/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl hover:text-pink-600 transition duration-300"></i>
          </a>
        </span>
        <span>
          <a href="https://github.com/Shubham7737" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl hover:text-gray-400 transition duration-300"></i>
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl hover:text-blue-600 transition duration-300"></i>
          </a>
        </span>
        <span>
          <a href="mailto:danushubham18@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope text-2xl hover:text-red-600 transition duration-300"></i>
          </a>
        </span>
      </div>

      {/* Footer Text */}
      <div className="text-center">
        <p className="text-sm text-gray-400">
          Made with @ by Shubham Danu
        </p>
      </div>
    </footer>
  );
}
