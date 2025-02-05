import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Travel Website",
    description:
      " It provides beautiful destinations, travel guides, and essential information to make every trip memorable.",
    video:
      "https://videos.pexels.com/video-files/2519660/2519660-uhd_2560_1440_24fps.mp4",
    github: "https://github.com/Shubham7737/Travel-Website",
    liveDemo: "https://travel-website-plum-six.vercel.app/",
  },
  {
    title: "Wether Update",
    description:
      "The Weather Update App allows users to check real-time weather conditions for any location around the world.",
    video:
      "https://videos.pexels.com/video-files/4590157/4590157-hd_1920_1080_30fps.mp4",
    github: "https://github.com/Shubham7737/Wether_Update",
    liveDemo: "https://wether-update.vercel.app/",
  },
  {
    title: "Stopwatch using JS",
    description:
      "Whether it's for sports, workouts, or just everyday tasks, this app provides a reliable stopwatch with start, stop, and reset.",
    video:
      "https://videos.pexels.com/video-files/4954949/4954949-hd_1920_1080_25fps.mp4",
    github: "https://github.com/Shubham7737/Stop-Clock",
    liveDemo: "https://stop-clock-xi.vercel.app/",
  },
  {
    title: "To-Do App",
    description:
      "The To-Do App is a simple yet powerful task management tool designed to help users add, delate daily tasks efficiently",
    video:
      "https://videos.pexels.com/video-files/5977122/5977122-uhd_2560_1440_25fps.mp4",
    github: "https://github.com/Shubham7737/To-Do-App",
    liveDemo: "https://to-do-app-sooty-sigma.vercel.app/",
  },
  {
    title: "Login Student",
    description:
      "This project includes a Firebase-based Login System  with features to add, view, update, and delete student records.",
    video:
      "https://videos.pexels.com/video-files/7247829/7247829-hd_1080_1920_30fps.mp4",
    github: "https://github.com/Shubham7737/Login-student-page",
    liveDemo: "https://login-student-page.vercel.app/",
  },
  {
    title: "My PortFolio",
    description:
      "Hi, I'm Shubham, a passionate Frontend Developer with expertise in React.js, JavaScript, and modern web technologies.",
    video:
      "https://videos.pexels.com/video-files/26857607/12022519_1920_1080_25fps.mp4",
    github: "https://github.com/Shubham7737/my_Portfoio_UsingReact",
    liveDemo: "https://my-portfoio-using-react.vercel.app/",
  },
];

function Projects() {
  const [projectList, setProjectList] = useState(projects);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-zinc-950 min-h-screen p-8">
      {/* Header */}
      <div className="py-5 text-center">
        <h1 className="text-white text-3xl font-bold">Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="mt-20">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-blue-50 min-w-fit h-[400px] text-black rounded-xl p-2"
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                className="w-full h-48 object-cover rounded-lg mb-3"
              ></video>
              <h2 className="text-xl font-semibold text-center mt-5">{project.title}</h2>
              <p className="text-sm text-gray-500 mt-4 text-center">
                {project.description}
              </p>
              <div className="flex justify-between mt-3 p-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-black font-semibold rounded-lg p-2 hover:bg-blue-600"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-black font-semibold rounded-lg p-2 hover:bg-blue-600"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;