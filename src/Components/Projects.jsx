import React from "react";

const projects = [
  {
    title: "Calculator",
    description:
      "The Calculator App provides an easy-to-use, web-based calculator that performs basic arithmetic operations. ",
    video:
      "https://videos.pexels.com/video-files/6781912/6781912-uhd_1440_2560_30fps.mp4",
    github: "https://github.com/Shubham7737/Calculator",
    liveDemo: "https://calculator-five-opal-76.vercel.app/",
  },
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
    title: "Dark mode",
    description:
      "Dark mode Projects are this functionality allows users to seamlessly switch between light and dark themes",
    video:
      "https://videos.pexels.com/video-files/6758640/6758640-hd_1920_1080_24fps.mp4",
    github: "https://github.com/Shubham7737/dark-mode",
    liveDemo: "https://dark-mode-six-alpha.vercel.app/",
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
  return (
    <div className="bg-zinc-950 min-h-screen">
      {/* Header */}
      <div className="bg-zinc-950 py-5">
        <h1 className="text-white text-center font-bold text-3xl">Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg p-5 hover:scale-105 transition-transform"
          >
            <video
              src={project.video}
              autoPlay loop muted
              className="w-full h-48 object-cover rounded-lg mb-3"
            ></video>
            <h2 className="text-xl font-semibold text-center">{project.title}</h2>
            <p className="text-gray-500 text-sm mt-2 mb-4 text-center">{project.description}</p>
            <div className="flex justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold rounded-lg bg-blue-400 p-2 hover:bg-blue-600"
              >
                GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black font-semibold rounded-lg bg-blue-400 p-2 hover:bg-blue-600"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
