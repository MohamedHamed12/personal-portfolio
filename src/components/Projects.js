import React from 'react';

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-white p-4">
      <div className="container mx-auto ">
        <h2 className="text-3xl font-bold mb-6 text-center">Projects</h2>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example project */}
          <div className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>A brief description of the project goes here.</p>
          </div>

          <div className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>A brief description of the project goes here.</p>
          </div>

          <div className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>A brief description of the project goes here.</p>
          </div>

          <div className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p>A brief description of the project goes here.</p>
          </div>
          
          {/* Add more projects here */}
        </div>
        
      </div>
      
    </section>
  );
}

export default Projects;
