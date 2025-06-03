import React from 'react';
import {
  FaPython, FaJs, FaDocker, FaReact, FaHtml5, FaCss3Alt, FaDatabase, 
  FaCheckCircle, FaGitAlt, FaGithub, FaTerminal, FaServer, FaSearchengin, FaCloud,
  FaCogs
} from 'react-icons/fa';
import {
  SiTypescript, SiKotlin, SiScikitlearn, SiNumpy, SiPandas, SiOpenai,
  SiFlask, SiFastapi, SiRedis, SiNextdotjs, SiTailwindcss, SiPostgresql,
  SiPostman, SiVercel, SiRender, SiVscode, SiJupyter,
  SiAndroidstudio
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

const skillSet = [
  // ... skillSet data remains the same
  {
    categoryTitle: "Languages",
    skills: [
      { name: "Python", icon: <FaPython className="text-blue-500" /> },
      { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "Kotlin", icon: <SiKotlin className="text-purple-500" /> },
    ]
  },
  {
    categoryTitle: "ML & Data Science",
    skills: [
      { name: "scikit-learn", icon: <SiScikitlearn className="text-orange-500" /> },
      { name: "NumPy", icon: <SiNumpy className="text-blue-600" /> },
      { name: "Pandas", icon: <SiPandas className="text-indigo-500" /> },
      { name: "FAISS", icon: <FaSearchengin className="text-teal-500" /> }, 
      { name: "OpenAI API", icon: <SiOpenai className="text-green-500" /> },
    ]
  },
  {
    categoryTitle: "ML Ops & Backend",
    skills: [
      { name: "Flask", icon: <SiFlask className="text-gray-700" /> },
      { name: "FastAPI", icon: <SiFastapi className="text-green-600" /> },
      { name: "Redis", icon: <SiRedis className="text-red-600" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Gunicorn", icon: <FaServer className="text-green-700" /> }, 
    ]
  },
  {
    categoryTitle: "Frontend",
    skills: [
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-blue-600" /> },
    ]
  },
  {
    categoryTitle: "Database & Storage",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
      { name: "Redis", icon: <SiRedis className="text-red-600" /> }, 
      { name: "CSV (Data Eng.)", icon: <FaDatabase className="text-gray-500" /> }, 
    ]
  },
  {
    categoryTitle: "Testing & Debugging",
    skills: [
      { name: "Pytest", icon: <FaCheckCircle className="text-green-500" /> }, 
      { name: "Playwright", icon: <FaCogs className="text-emerald-600" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    ]
  },
  {
    categoryTitle: "Version Control & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub className="text-black" /> },
      { name: "Vercel", icon: <SiVercel className="text-black" /> },
      { name: "Render", icon: <SiRender className="text-teal-500" /> },
    ]
  },
  {
    categoryTitle: "Dev Environment",
    skills: [
      { name: "VS Code", icon: <SiVscode className="text-blue-500" /> },
      { name: "Jupyter", icon: <SiJupyter className="text-orange-500" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="text-green-600" /> },
      { name: "zsh", icon: <FaTerminal className="text-gray-600" /> }, 
    ]
  }
];

function Skills() {
  return (
    <div className="min-h-screen p-6 sm:p-8 bg-white text-black">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-12">My Skillset</h1>
      <div className="max-w-4xl mx-auto space-y-10">
        {skillSet.map((category, index) => (
          <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-5 flex items-center">
              {category.categoryTitle}
            </h2>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white border border-gray-200 rounded-full shadow-xs hover:bg-yellow-50 transition-colors cursor-default"
                >
                  <span className="mr-2 text-lg sm:text-xl">{skill.icon}</span>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">{skill.name}</span> 
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;