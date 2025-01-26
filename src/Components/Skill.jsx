import React from 'react';

export default function Skill() {
  return (
    <div id="SKILL" className="bg-gray-50 h-140 p-20">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Skills</h1>
      </div>

      {/* Skill Icons */}
      <div className="flex flex-wrap justify-center gap-8 p-20">
        {/* First Row of Icons */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="w-24 h-24 flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEc9A_S6BPxCDRp5WjMFEfXrpCu1ya2OO-Lw&s"
              alt="HTML Icon"
              className="object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="w-24 h-24 flex justify-center items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
              alt="CSS Icon"
              className="object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="w-24 h-24 flex justify-center items-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E12AQFfe1nZbaWdMw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1698604163003?e=2147483647&v=beta&t=zrcrB8lfoVmZo0LcSLgut3A_4PwE6YFe9EK3iy17L2Y"
              alt="JavaScript Icon"
              className="object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Second Row of Icons */}
        <div className="flex justify-center gap-8 mb-6">
          <div className="w-24 h-24 flex justify-center items-center">
            <img
              src="https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png"
              alt="React Icon"
              className="object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
          <div className="w-24 h-24 flex justify-center items-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:900/1*TY9uBBO9leUbRtlXmQBiug.png"
              alt="Node.js Icon"
              className="object-contain transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
