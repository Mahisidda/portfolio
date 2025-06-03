"use client";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaPython, FaJs, FaDocker, FaReact, FaHtml5, FaCss3Alt, FaDatabase,
  FaCheckCircle, FaGitAlt, FaGithub, FaTerminal, FaServer, FaSearchengin, FaCloud,
  FaCogs
} from 'react-icons/fa';
import {
  SiTypescript, SiKotlin, SiScikitlearn, SiNumpy, SiPandas, SiOpenai,
  SiFlask, SiFastapi, SiRedis, SiNextdotjs, SiTailwindcss, SiPostgresql,
  SiPostman, SiVercel, SiRender, SiVsco, SiJupyter,
  SiAndroidstudio
} from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io5';

const skillSet = [
  {
    categoryTitle: "Languages",
    skills: [
      { name: "Python", icon: <FaPython size={22} className="text-blue-500" /> },
      { name: "JavaScript", icon: <IoLogoJavascript size={22} className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript size={22} className="text-blue-400" /> },
      { name: "Kotlin", icon: <SiKotlin size={22} className="text-purple-500" /> },
    ]
  },
  {
    categoryTitle: "ML & Data Science",
    skills: [
      { name: "scikit-learn", icon: <SiScikitlearn size={22} className="text-orange-500" /> },
      { name: "NumPy", icon: <SiNumpy size={22} className="text-blue-600" /> },
      { name: "Pandas", icon: <SiPandas size={22} className="text-indigo-500" /> },
      { name: "FAISS", icon: <FaSearchengin size={22} className="text-teal-500" /> },
      { name: "OpenAI API", icon: <SiOpenai size={22} className="text-green-500" /> },
    ]
  },
  {
    categoryTitle: "ML Ops & Backend",
    skills: [
      { name: "Flask", icon: <SiFlask size={22} className="text-gray-700" /> },
      { name: "FastAPI", icon: <SiFastapi size={22} className="text-green-600" /> },
      { name: "Redis", icon: <SiRedis size={22} className="text-red-600" /> },
      { name: "Docker", icon: <FaDocker size={22} className="text-blue-500" /> },
      { name: "Gunicorn", icon: <FaServer size={22} className="text-green-700" /> },
    ]
  },
  {
    categoryTitle: "Frontend",
    skills: [
      { name: "React", icon: <FaReact size={22} className="text-sky-500" /> },
      { name: "Next.js", icon: <SiNextdotjs size={22} className="text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={22} className="text-teal-400" /> },
      { name: "HTML", icon: <FaHtml5 size={22} className="text-orange-600" /> },
      { name: "CSS", icon: <FaCss3Alt size={22} className="text-blue-600" /> },
    ]
  },
  {
    categoryTitle: "Database & Storage",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql size={22} className="text-blue-700" /> },
      { name: "Redis", icon: <SiRedis size={22} className="text-red-600" /> },
      { name: "CSV (Data Eng.)", icon: <FaDatabase size={22} className="text-gray-500" /> },
    ]
  },
  {
    categoryTitle: "Testing & Debugging",
    skills: [
      { name: "Pytest", icon: <FaCheckCircle size={22} className="text-green-500" /> },
      { name: "Playwright", icon: <FaCogs size={22} className="text-emerald-600" /> },
      { name: "Postman", icon: <SiPostman size={22} className="text-orange-500" /> },
    ]
  },
  {
    categoryTitle: "Version Control & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt size={22} className="text-orange-600" /> },
      { name: "GitHub", icon: <FaGithub size={22} className="text-black" /> },
      { name: "Vercel", icon: <SiVercel size={22} className="text-black" /> },
      { name: "Render", icon: <SiRender size={22} className="text-teal-500" /> },
    ]
  },
  {
    categoryTitle: "Dev Environment",
    skills: [
      { name: "VS Code", icon: <SiVsco size={22} className="text-blue-500" /> },
      { name: "Jupyter", icon: <SiJupyter size={22} className="text-orange-500" /> },
      { name: "Android Studio", icon: <SiAndroidstudio size={22} className="text-green-600" /> },
      { name: "zsh", icon: <FaTerminal size={22} className="text-gray-600" /> },
    ]
  }
];

const SkillsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Slightly faster for potentially more items
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow p-6 sm:p-10 md:py-16 md:px-[50px]">
        <div className="max-w-5xl mx-auto">
          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-12 md:mb-16 text-black tracking-tight text-center"
            data-aos="fade-down"
          >
            My Technical Skillset
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skillSet.map((category, index) => (
              <div 
                key={index} 
                className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 flex flex-col aspect-square"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100} // Adjusted for grid layout (assuming up to 3 columns)
              >
                <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-4 flex items-center">
                  {category.categoryTitle}
                </h2>
                <div className="flex-grow overflow-y-auto flex flex-wrap gap-2 sm:gap-3 content-start pr-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-gray-200 rounded-full shadow-sm hover:bg-gray-100 hover:shadow-md transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 cursor-default"
                    >
                      <span className="mr-2 text-lg sm:text-xl">{skill.icon}</span>
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">{skill.name}</span> 
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Optional: Footer if needed, or ensure it's part of a global layout */}
      {/* <footer className="bg-black text-white text-sm text-center py-8">
        <p>&copy; {new Date().getFullYear()} Mahi Sidda</p>
      </footer> */}
    </div>
  );
};

export default SkillsPage; 