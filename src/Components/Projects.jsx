// src/components/Projects.js
import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "My PortFolio",
      description: "This is my previous portfolio which i created in PHP",
      github: "https://github.com/Javed90045/My-Portfolio",
      liveDemo: "https://javedali90045.netlify.app/",
    },
    {
      title: "Google Gemini",
      description:
        "This is Google Gemini Clone which I created by using that API.",
      github: "https://github.com/Javed90045/Google-gemini",
      liveDemo: "https://javed-google-gemini.netlify.app/",
    },
    {
      title: "FinTechCourse Landing Page",
      description:
        "This is a FinTech organization online courses landing page.",
      github: "https://github.com/Javed90045/FinTech",
      liveDemo: "https://fintechcourse.netlify.app/",
    },
    {
      title: "News-App",
      description:
        "This is an awesome project where i used news api from which we can get easily any news.",
      github: "https://github.com/Javed90045/NewsApp",
      liveDemo: "https://news-app-javed.netlify.app/",
    },
    {
      title: "Career Portal",
      description:
        "It is a real-time Job Hunt Portal Project which i created in MERN technology, still is under building.",
      github: "https://github.com/Javed90045/Career-Portal",
      liveDemo: "", // Empty to simulate under-maintenance
    },
    {
      title: "Food App",
      description:
        "This is a food app in this project i added add to cart functionality by using redux.",
      github: "https://github.com/Javed90045/FoodApp",
      liveDemo: "", // Empty to simulate under-maintenance
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border rounded shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p>{project.description}</p>
            <div className="flex items-center gap-4 justify-center">
              {/* GitHub Button */}
              <button
                onClick={() => window.open(project.github, "_blank")}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View on GitHub
              </button>

              {/* Live Demo or Under Maintenance */}
              {project.liveDemo ? (
                <button
                  onClick={() => window.open(project.liveDemo, "_blank")}
                  className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Live Demo
                </button>
              ) : (
                <span className="mt-4 text-red-500 font-semibold">
                  Site is under maintenance
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4 mt-5 text-xl">
        <p>If you want see more projects, So visit my github profile !</p>
        <button
          className="underline font-semibold hover:text-blue-400"
          onClick={() => window.open("https://github.com/Javed90045", "_blank")}
        >
          See More Projects
        </button>
      </div>
    </section>
  );
};

export default Projects;
