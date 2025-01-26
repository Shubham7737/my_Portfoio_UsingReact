import React from "react";

function Projects() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 p-4 gap-4">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index} className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Project {index + 1}</h2>
          <p className="text-gray-600">
            This is a brief description of Project {index + 1}. Explore the details to learn more about this work.
          </p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}

export default Projects;
