import React from 'react';
// Commenting out unused imports for now, can be added back if needed by new content
// import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaAws } from 'react-icons/fa';
// import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiTensorflow, SiPytorch } from 'react-icons/si';

function Skills() {
  return (
    <div className="min-h-screen p-8 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12 text-black">My Skillset</h1>
      <div className="max-w-3xl mx-auto"> {/* Centering the content block */}
        <div className="space-y-8 p-6 bg-gray-50 rounded-lg shadow-sm"> {/* Content block styling */}
          <div>
            <p className="text-base sm:text-lg leading-relaxed text-justify text-black font-mono">
              <strong>Languages:</strong> Python, JavaScript, TypeScript, Kotlin <br /> <br />
              <strong>ML & Data Science:</strong> scikit-learn, NumPy, Pandas, FAISS, OpenAI API <br /> <br />
              <strong>ML Ops & Backend:</strong> Flask, FastAPI, Redis, Docker, Gunicorn <br /> <br />
              <strong>Frontend:</strong> React, Next.js, Tailwind CSS, HTML, CSS <br /> <br />
              <strong>Database & Storage:</strong> PostgreSQL, Redis, CSV (Data Engineering) <br /> <br />
              <strong>Testing & Debugging:</strong> Pytest, Playwright, Postman <br /> <br />
              <strong>Version Control & Deployment:</strong> Git, GitHub, Vercel, Render <br /> <br />
              <strong>Dev Environment:</strong> VS Code, Jupyter, Android Studio, zsh <br /> <br />
            </p>
          </div>
          {/* Add more tool details or categories here as needed */}
        </div>
      </div>
    </div>
  );
}

export default Skills;