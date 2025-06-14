"use client";
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { SiX } from 'react-icons/si';
import GitHubContributions from '@/components/GitHubContributions';

const PortfolioPage = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Effect to delay testimonial scroll on mobile
  useEffect(() => {
    const startScrolling = () => {
      // 768px is the md breakpoint in Tailwind
      if (window.innerWidth < 768) {
        setTimeout(() => {
          setIsScrolling(true);
        }, 7000); // 7-second delay on mobile
      } else {
        setIsScrolling(true); // Start immediately on desktop
      }
    };

    // Call it after a brief moment to ensure the layout is stable
    const initTimer = setTimeout(startScrolling, 100);

    return () => clearTimeout(initTimer);
  }, []);

  const testimonialsData = [
    {
      id: 1,
      quote: "Mahi is a thorough professional. He was part of our AI research + dev team and led a team of 3 to create a highly optimised RAG model from scratch, customised for our hardware architecture.\n\nThe deliverables included prototyping, research, and model tweaks to adhere to cost structures, understanding business needs, and further incorporating changes from UX feedback with seamless collaboration.\n\nWould highly recommend, kudos!",
      name: "Arvind Mohan",
      role: "Co-founder,CPO, hashmint",
      avatar: "arvind.jpeg",
    },
    {
      id: 2,
      quote: "Mahi laid the foundational architecture for AI at HashMint with the launch of MintPDF, our Retrieval-Augmented Generation (RAG) system that answers queries directly from user-uploaded documents.\n\n He engineered the entire backend pipeline, integrated OpenAI APIs, and built production-grade LLM workflows that made MintPDF fast, accurate, and reliable from day one. That foundation has been critical.\n\n Much of our rapid progress in AI since then has been possible because of the strong technical and architectural base Mahi set early on. He is a true 100x engineer who moves fast, solves hard problems, and quietly unlocks massive leverage for the entire team.",
      name: "Yaswanth Rayapati",
      role: "Co-founder,CEO,hashmint",
      avatar: "ryuk.jpeg",
    },
    // {
    //   id: 3,
    //   quote: "The RAG model Mahi built was top-notch, perfectly tailored to our needs and delivered with impressive speed and quality.",
    //   name: "Karthik Sarvanan",
    //   role: "Founding Engineer, hashmint",
    //   avatar: "samuel.png",
    // },
  ];

  // Duplicate testimonials for a seamless loop
  const scrollingTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-loop-corrected {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-loop-corrected {
          animation: scroll-loop-corrected 40s linear infinite;
        }
        @keyframes paint-and-vanish {
          0% {
            transform: scaleX(0);
            transform-origin: left;
          }
          50% {
            transform: scaleX(1);
            transform-origin: left;
          }
          50.1% {
            transform-origin: right;
          }
          100% {
            transform: scaleX(0);
            transform-origin: right;
          }
        }
        .name-container h1 {
          position: relative;
          display: inline-block;
        }
        .name-container h1::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #eab308;
            transform: scaleX(0);
            z-index: -1;
        }
        .name-container.aos-animate h1::after {
            animation: paint-and-vanish 1.2s ease-out forwards;
            animation-delay: 0.2s; /* Delay after fade-in */
        }
      `}</style>
      <div className="flex flex-col min-h-screen">
        <div className="p-6 sm:p-10 md:p-[50px] bg-white">
          {/* Section 1: About Me (Profile Pic & Bio) */}
          <div className="flex flex-col md:flex-row mb-10 md:mb-16">
            {/* Image Column */}
            <div className="w-full md:w-1/2 md:pr-4 mb-8 md:mb-0 flex justify-center md:justify-start items-start" data-aos="fade-right">
              <img
                src="profes.jpg"
                alt="Mahi Sidda"
                style={{ width: '70%', height: 'auto', objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
            {/* Text Column */}
            <div className="w-full md:w-1/2 md:pl-4 flex flex-col justify-start">
              {/* Container for Mahi Sidda name */}
              <div className="mb-5 leading-tight md:leading-normal name-container" data-aos="fade-left" data-aos-delay="100">
                <h1 className="font-sans text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-black">
                  Mahi Sidda
                </h1>
                <p className="font-sans text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-normal -mt-2 sm:-mt-3 text-black">
                  
                </p>
              </div>
              <p className="text-base sm:text-lg leading-relaxed text-black max-w-md text-justify" data-aos="fade-right" data-aos-delay="200">
                Hola! I am Mahi, an AI/ML Engineer who loves training neural networks and building smart systems that solve real problems.<br />
                
                With hands-on experience in LLMs, RAG pipelines, and ML system design, I specialize in bridging the gap between cutting-edge research and real world applications.<br />

                Recently, I built a production grade RAG model for a startup called <a href="https://hashmint.in" target="_blank" rel="noopener noreferrer" className="text-black hover:text-yellow-600 font-semibold underline">hashmint.</a> during a two month AI internship tailoring it to user needs from the ground up.<br />

                I'm currently pursuing my Master's at Arizona State University, diving deep into deep learning, LLMs, and applied AI.
              </p>
            </div>
          </div>

          {/* Section 2: Projects and Tools - Combined Section */}
          <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up" data-aos-delay="200">
            {/* Column 1: Project Description */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black tracking-tight">
                My Work
              </h2>
              <div className="space-y-8">
                <div>
                  <p className="text-base sm:text-lg leading-relaxed max-w-md text-justify text-black ">
                  I've worked on <Link href="/projects" legacyBehavior><a className="text-red-600 hover:text-yellow-600 font-semibold underline"> multiple impactful projects</a></Link>, 
                  including a Fake News Detection system using multimodal learning, a Book Recommendation engine powered by collaborative filtering, and iVote, 
                  a full-stack web application for secure digital voting. These projects strengthened my ability to build robust end-to-end ML pipelines, 
                  apply deep learning techniques effectively, and develop AI solutions aligned with real-world user needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Tools Description */}
            <div className="w-full md:w-1/2 flex flex-col">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-black tracking-tight">
                Tools I Work With
              </h2>
              <div className="space-y-8">
                  <p className="text-base sm:text-lg leading-relaxed max-w-md text-justify text-black "> 
                    I've worked with a worked with <Link href="/skills" legacyBehavior><a className="text-red-600 hover:text-yellow-600 font-semibold underline">broad range of tools</a></Link> , 
                    but the ones I enjoy and frequently use as a framework include: Python,NumPy, pandas, scikit-learn, PyTorch, HuggingFace, FastAPI(for deployment),Docker(for production),Git/GitHub</p>
              </div>
            </div>
          </div>

          {/* Section 3: Testimonials - Updated for scrolling marquee */}
          <div className="mt-10 md:mt-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black tracking-tight text-center">
              Here's what they say about me!
            </h2>
            <div className="overflow-hidden w-full max-w-[1920px] mx-auto relative group">
              <div className={`flex group-hover:pause-animation ${isScrolling ? 'animate-scroll-loop-corrected' : ''}`}>
                {scrollingTestimonials.map((testimonial, index) => (
                  <div 
                    key={`${testimonial.id}-${index}`}
                    className="bg-gray-50 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col flex-shrink-0 w-[85vw] mr-4 md:w-[540px] md:mr-6 lg:w-[600px] lg:mr-8 border border-gray-100"
                    style={{ minHeight: '250px' }}
                  >
                    {/* Optional: Avatar - uncomment if you have avatar images 
                    <div className="flex justify-center mb-4">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-24 h-24 rounded-full object-cover shadow-md" />
                    </div>
                    */}
                    <p className="text-gray-700 italic text-base sm:text-lg leading-relaxed mb-6 flex-grow whitespace-pre-line">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-auto pt-4 border-t border-gray-200 flex items-center gap-3 sm:gap-4">
                      <img 
                        src={`/${testimonial.avatar}`}
                        alt={testimonial.name} 
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md" 
                      />
                      <div>
                        <p className="font-semibold text-slate-800 text-left text-sm sm:text-md">- {testimonial.name}</p>
                        <p className="text-gray-600 text-xs sm:text-sm text-left">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

       

        {/* Section 4: Let's Make AI Talk - Full Bleed Background */}
        <div className="mt-10 md:mt-16 bg-black flex flex-col flex-grow" data-aos="fade-up">
          {/* Inner container for content alignment, padding, and original styling */}
          <div className="max-w-7xl mx-auto py-8 md:py-12 px-6 sm:px-10 md:px-[50px] text-white rounded-lg flex flex-col justify-center flex-grow">
            <div className="text-center">
              <h2 className="text-2xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Let's engineer what's next 
              </h2>
              <p className="text-lg sm:text-m mb-8 max-w-2xl mx-auto">
                I would like to connect with you to discuss more.
              </p>
              <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
                {/* Replace # with your actual profile URLs */}
                <a href="https://www.linkedin.com/in/mahisidda/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                  <FaLinkedin size={28} />
                </a>
                <a href="https://github.com/Mahisidda" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-300">
                  <FaGithub size={28} />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/1N6BLo8NweHCPOfO1ph83zPWYUGBq_u3e/view?usp=share_link" // Replace # with the actual path to your resume
                className="inline-block bg-red-800 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
              >
                Resume-mahisidda.pdf
              </a>
            </div>
          </div>
        </div>

        <footer className="bg-black text-white text-sm text-center py-8">
          <p>&copy; 2025 Mahi Sidda</p>
        </footer>
      </div>
    </>
  );
};

export default PortfolioPage;

