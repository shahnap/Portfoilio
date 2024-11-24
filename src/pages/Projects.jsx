import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
function Projects() {
  const projects = [
    {
      name: "ASPK",
      description:
        "A two-team project 'ERP for Life' currently including sessions of money management with features like money tracking, daily notes, and reports. Still developing other areas like fitness management, targets, gallery, and chat.",
      hostedLink: "https://aspk-2o.netlify.app/",
      githubLink: "https://github.com/shahnap/ASPK.git",
      tech: "Full Stack (MERN)",
    },
    {
      name: "Live Chat",
      description:
        "A live chat app built with Socket.IO where different users can chat with each other in real-time. Frontend only.",
      hostedLink: "https://live-chat-ipd5.vercel.app/",
      githubLink: "https://github.com/shahnap/LiveChat.git",
      tech: "Frontend Only",
    },
    {
      name: "Journal",
      description:
        "A journal writing tool with a real book-like design. The project focuses on frontend design.",
      hostedLink: "https://journal-wheat.vercel.app/",
      githubLink: "https://github.com/shahnap/Journal.git",
      tech: "Frontend Only",
    },
    {
      name: "LazyTest",
      description:
        "A study-focused project on lazy importing components for efficient resource management. Frontend only.",
      hostedLink: "https://lazy-test-sigma.vercel.app/",
      githubLink: "https://github.com/shahnap/LazyTest.git",
      tech: "Frontend Only",
    },
    {
      name: "Movie Search",
      description:
        "A movie filtering app using the Open Movie API with a focus on array filtering techniques.",
      hostedLink: "https://search-movie-lime.vercel.app/",
      githubLink: "https://github.com/shahnap/SearchMovie.git",
      tech: "Frontend Only",
    },
  ];

  return (
    <div className="container mx-auto p-6">
  <h2 className="text-3xl font-bold mb-4 text-gray-200">My Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {projects.map((project, index) => (
     <div
     key={index}
     className="bg-[#162c6f] shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow relative group h-full flex flex-col"
   >
     <div className="flex-grow">
       <h3 className="text-2xl font-semibold mb-3 text-gray-200 group-hover:text-yellow-400 transition-colors">
         {project.name}
       </h3>
       <p className="text-sm text-gray-400 mb-4">{project.description}</p>
       <p className="text-sm font-medium text-gray-200 mb-4">
         <strong>Tech Stack:</strong> {project.tech}
       </p>
     </div>
     <div className="flex space-x-4 mt-auto">
       <a
         href={project.hostedLink}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center space-x-2 text-yellow-400 font-medium hover:underline cursor-pointer"
       >
         <FaExternalLinkAlt className="text-yellow-400" />
         <span>Live Demo</span>
       </a>
       <a
         href={project.githubLink}
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center space-x-2 text-gray-200 font-medium hover:text-yellow-400 hover:underline cursor-pointer"
       >
         <FaGithub className="text-gray-200" />
         <span>GitHub</span>
       </a>
     </div>
     <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-yellow-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity pointer-events-none"></div>
   </div>
   
    ))}
  </div>
</div>


  );
}

export default Projects;
