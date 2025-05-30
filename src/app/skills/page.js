
import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaAws } from 'react-icons/fa';
//import { DiKotlin } from "react-icons/di";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiPostgresql, SiTensorflow, SiPytorch } from 'react-icons/si';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact className="w-6 h-6" />,
      color: 'text-blue-500',
      items: [
        { name: 'React.js', icon: <FaReact /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> }
      ]
    },
    {
      title: 'Backend',
      icon: <FaNodeJs className="w-6 h-6" />,
      color: 'text-green-500',
      items: [
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ]
    },
    {
      title: 'Languages',
      icon: <FaPython className="w-6 h-6" />,
      color: 'text-yellow-500',
      items: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Java', icon: <FaJava /> },
        { name: 'JavaScript', icon: <FaReact /> },
        //{ name: 'Kotlin', icon: <DiKotlin /> }
      ]
    },
    {
      title: 'AI/ML Frameworks',
      icon: <SiTensorflow className="w-6 h-6" />,
      color: 'text-red-500',
      items: [
        { name: 'TensorFlow', icon: <SiTensorflow /> },
        { name: 'PyTorch', icon: <SiPytorch /> },
        { name: 'HuggingFace', icon: <FaPython /> }
      ]
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Skills & Expertise</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <span className={`${category.color} mr-2`}>{category.icon}</span>
              <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {category.items.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className="flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-yellow-100 transition-colors"
                >
                  <span className={`${category.color} mr-2`}>{skill.icon}</span>
                  <span className="text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Tools & Technologies</h2>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
            <FaGitAlt className="text-orange-500 mr-2" />
            <span className="text-gray-700">Git & GitHub</span>
          </div>
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
            <FaAws className="text-yellow-600 mr-2" />
            <span className="text-gray-700">AWS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills; 


/*
import React from 'react'

export default function page() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h1 style={{ fontSize: '3em' }}>OOPS... UNDER CONSTRUCTION</h1>
    </div>
  )
}
*/