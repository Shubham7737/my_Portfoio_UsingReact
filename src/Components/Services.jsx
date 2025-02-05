import React from 'react';

const arr = [
  {
    video: 'https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4',
    title: 'Frontend Developer',
    des: 'The Calculator App provides an easy-to-use, web-based calculator that performs basic arithmetic operations.'
  },
  {
    video: 'https://videos.pexels.com/video-files/18069232/18069232-uhd_2560_1440_24fps.mp4',
    title: 'UI/UX Designer',
    des: 'The Calculator App provides an easy-to-use, web-based calculator that performs basic arithmetic operations.'
  },
];

function Services() {
  return (
    <div className="bg-zinc-950 py-8 h-[80vh]">
      {/* Title */}
      <div>
        <h1 className="text-white text-center font-bold text-2xl mb-8">Services</h1>
      </div>

      {/* Service Cards */}
      <div className=" lg:grid lg:grid-cols-2 lg:gap-8 px-4">
        {arr.map((element, index) => (
          <div key={index} className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
            {/* Video */}
            <video
              src={element.video}
              autoPlay
              loop
              muted
              className="w-full h-48 object-cover rounded-lg"
            ></video>

            {/* Text */}
            <div className="p-4">
              <h1 className="text-xl font-semibold text-gray-800">{element.title}</h1>
              <p className="mt-2 text-gray-600">{element.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
