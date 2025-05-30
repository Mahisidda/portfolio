// pages/about.js
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { SiX } from 'react-icons/si';

function About() {
  return (
    <div className="mx-auto p-6 max-w-2xl">
      <h1 className="text-4xl font-mono font-bold mb-6 text-center">About Me</h1>

      {/* Circular Profile Image */}
      <div className="flex justify-center mb-8">
        <img 
          src="/ms.jpg"
          alt="Mahi's Profile"
          className="rounded-full w-36 h-36 border-4 border-yellow-600 object-cover"
        />
      </div>

      <div className="space-y-6">
        {/* Academic Background */}
        <div className="space-y-2">
          <h2 className="text-2xl font-mono font-bold text-gray-800 mb-2">Driven by Artificial Intelligence, Grounded in Innovation</h2>
          <p className="text-base text-justify font-mono text-gray-700">
            As a Master's student in Information Technology at Arizona State University, I'm focused on unraveling AI's transformative potential. My coursework in Natural Language Processing (NLP), Big Data, and AI in Cybersecurity forms my technical foundation, while hands-on work with Generative AI fuels my passion for practical solutions.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="space-y-2">
          <h2 className="text-2xl font-mono font-bold text-gray-800 mb-2">From Classroom to Startup Trenches</h2>
          <p className="text-base font-mono text-justify text-gray-700">
            At Hashmint, I helped develop MintPDF - a Retrieval-Augmented Generation (RAG) platform revolutionizing document interaction. Collaborating with engineers and founders, I implemented AI-driven querying systems using transformer models, gaining invaluable experience in scaling NLP solutions and shipping production-ready tools. This startup journey taught me agile development, user-centric design, and the art of transforming academic concepts into impactful products.
          </p>
        </div>

        {/* Future Goals */}
        <div className="space-y-2">
          <h2 className="text-2xl font-mono font-bold text-gray-800 mb-2">Building Tomorrow's Intelligent Solutions</h2>
          <p className="text-base font-mono text-justify text-gray-700">
            I'm now focused on bridging AI's theoretical promise with real-world implementation. My projects span generative models, document intelligence, and ethical AI frameworks, always prioritizing solutions that solve tangible challenges. Whether enhancing cybersecurity through machine learning or designing adaptive NLP systems, I aim to create tools that empower industries while maintaining cultural sensitivity and ethical responsibility.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-base font-mono text-gray-700 mb-4">
          Want to work together or just say hi? Feel free to reach out!
        </p>
        <a
          href="/contact"
          className="inline-block text-base font-mono bg-yellow-600 text-white px-6 py-2 rounded-3xl font-medium hover:bg-red-800 transition-all duration-300"
        >
          Let's Connect!
        </a>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a 
            href="https://www.linkedin.com/in/mahisidda/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-900 hover:text-gray-800 transition-all duration-300"
          >
            <FaLinkedin size={28} />
          </a>
          <a 
            href="https://github.com/Mahisidda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-900 hover:text-gray-800 transition-all duration-300"
          >
            <FaGithub size={28} />
          </a>
          <a 
            href="https://x.com/Mahi_Sidda" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-900 hover:text-gray-800 transition-all duration-300"
          >
            <SiX size={28} />
          </a>
          <a 
            href="mailto:msidda@asu.edu" 
            className="text-gray-900 hover:text-gray-800 transition-all duration-300"
          >
            <FiMail size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;