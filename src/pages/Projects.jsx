import React from 'react';

function Projects() {
  return (
    <div><h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="container mx-auto p-4 flex flex-col items-center justify-center">
      {/* <h2 className="text-3xl font-bold mb-6">My Projects</h2> */}
      <div className="bg-gray-200 p-10 rounded-lg shadow-lg text-center animate-pulse">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Under Development
        </h3>
        <p className="text-lg text-gray-600">Coming Soon...</p>
      </div>
    </div>
    </div>
    
  );
}

export default Projects;
