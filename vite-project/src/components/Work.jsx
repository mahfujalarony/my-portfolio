import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; 

const projects = [
  {
    title: "Chat Application",
    description: "A real-time chat app using React, Node.js, Express, and Socket.IO with authentication.",
    githubLink: "https://github.com/yourusername/chat-app",
    liveLink: "https://yourusername-chat-app.vercel.app/", 
  },
  {
    title: "Responsive UI with Tailwind CSS",
    description: "A fully responsive UI built with Tailwind CSS, focusing only on design without functionality",
    githubLink: "https://github.com/mahfujalarony/tailwind-css",
    liveLink: "https://tailwind-pm2v2rorw-mahfuj-alam-ronys-projects.vercel.app/#", 
  },
  {
    title: "CRUD Application with PostgreSQL",
    description: "A full-stack CRUD application using React, Node.js, Express, and PostgreSQL to manage records efficiently.",
    githubLink: "https://github.com/mahfujalarony/Postgre-Sql-CRUD",
    liveLink: "https://postgre-sql-crud.vercel.app/", 
  },
];

const Work = () => {
  return (
    <div id="work" className="bg-gray-900 min-h-screen text-white p-10">
      <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 flex items-center"
              >
                <FaExternalLinkAlt className="mr-2" /> Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;