import React from 'react';
import Link from 'next/link';

function ProjectsPage() {
  const projects = [
    {
      title: "Fake News Detection",
      description: "Few shot based Prompt based tuning with knowledge grounding framework for fake news detection.",
      tech: "Proposed stack for now: BERT, Prompt Tuning, Knowledge Grounding",
      link: "#",
      demoLink: "#"
    },
    {
      title: "Brec",
      description: "Production-grade book recommendation engine powered by collaborative filtering and FAISS, serving real-time personalized results from 1M+ ratings. <br/> Read my Blog about it <a href='https://portfolio.mahisidda.com/blogs/1' target='_blank' rel='noopener noreferrer' class='text-red-700 hover:underline'> here </a>",
      tech: "Python, Flask, Next.js, Tailwind CSS, Collaborative Filtering, FAISS, Redis",
      link: "https://github.com/Mahisidda/Brec",
      demoLink: "https://brec.mahisidda.com"
    },
    {
      title: "iVote",
      description: "Online Voting System where users can create and participate in elections, with real-time updates and secure authentication.",
      tech: "Python, SQLite, Django, HTML, CSS, JavaScript, Git",
      link: "https://github.com/Mahisidda/iVote",
      demoLink: "#"
    },
  
  ];

  // Add error handling for empty projects
  if (!projects?.length) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Projects</h1>
          <p className="text-gray-600">No projects available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Technical Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
              role="article"
              aria-labelledby={`project-title-${index}`}
            >
              <div>
                <h3 
                  id={`project-title-${index}`}
                  className="text-2xl font-bold text-gray-900 mb-3"
                >
                  {project.title}
                </h3>
                <p 
                  className="text-gray-700 mb-6 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.split(', ').map(techItem => (
                    <span 
                      key={techItem}
                      className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-gray-100">
                  {project.link !== "#" ? (
                    <Link
                      href={project.link}
                      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors w-full sm:w-auto text-center ${project.demoLink && project.demoLink !== "#" ? 'bg-transparent border border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400' : 'bg-black text-white hover:bg-gray-800'}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} project on GitHub`}
                    >
                      GitHub
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm py-2.5 px-5 w-full sm:w-auto text-center sm:text-left">GitHub: Coming soon</span>
                  )}

                  {project.title === "Fake News Detection" && project.demoLink === "#" ? (
                    <div className="flex items-center justify-center sm:justify-start py-2.5 px-5 w-full sm:w-auto">
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block mr-2 animate-pulse"></span>
                      <span className="text-sm text-green-600 font-semibold">In Progress</span>
                    </div>
                  ) : project.demoLink && project.demoLink !== "#" ? (
                    <Link
                      href={project.demoLink}
                      className="inline-flex items-center justify-center bg-black text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      Live Demo
                    </Link>
                  ) : (
                    <span className="text-gray-400 text-sm py-2.5 px-5 w-full sm:w-auto text-center sm:text-left">Demo: Coming soon</span>
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



