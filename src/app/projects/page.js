import React from 'react';
import Link from 'next/link';

function ProjectsPage() {
  const projects = [
    {
      title: "Fake News Detection",
      description: "Few shot based Prompt based tuning with knowledge grounding framework for fake news detection.",
      tech: "Python · TensorFlow · Apache Spark · Kafka",
      link: "#",
      demoLink: "#"
    },
    {
      title: "iVote",
      description: "Online Voting System where users can create and participate in elections, with real-time updates and secure authentication.",
      tech: "Python · SQLite · Django Framework · HTML · CSS · JavaScript · Version Control(Git)",
      link: "https://github.com/Mahisidda/iVote",
      demoLink: "#"
    },
    {
      title: "Brec",
      description: "ML-powered recommendation engine using Neural Collaborative Filtering, processing 1M+ ratings from Book-Crossing dataset with real-time updates.",
      tech: "Python, Flask, Next.js, Tailwind CSS CF FAISS ",
      link: "https://github.com/Mahisidda/Brec",
      demoLink: "https://brec.mahisidda.com"
    }
  ];

  // Add error handling for empty projects
  if (!projects?.length) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-mono font-bold text-gray-900 mb-4">Technical Projects</h1>
          <p className=" font-mono text-gray-600">No projects available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-mono bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl font-mono mx-auto">
        <h1 className="text-4xl font-mono font-bold text-gray-900 mb-8 text-center">
          Technical Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              <div className="p-6">
                <h3 
                  id={`project-title-${index}`}
                  className="text-xl font-semibold text-gray-800 mb-3"
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    {project.tech}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-yellow-600 hover:bg-red-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project on GitHub`}
                    >
                      GitHub
                    </Link>
                  ) : (
                    <span className="text-gray-500 text-sm">GitHub: Coming soon</span>
                  )}
                  {project.demoLink && project.demoLink !== "#" ? (
                    <Link
                      href={project.demoLink}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-red-700 hover:bg-yellow-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo
                    </Link>
                  ) : (
                    <span className="text-gray-500 text-sm">Demo: Coming soon</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;



