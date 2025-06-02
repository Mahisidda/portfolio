// components/Sidebar.js (acting as TopNavbar)
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Initial state: blurry, as this is for "at top" and "scrolling down".
  const [navbarBgClass, setNavbarBgClass] = useState('bg-white/50 backdrop-blur-md'); 
  const [lastKnownScrollY, setLastKnownScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastKnownScrollY(prevScrollY_from_state => {
        if (currentScrollY === 0) { // At the top
          setNavbarBgClass('bg-white/50 backdrop-blur-md'); // Blurry
        } else if (currentScrollY < prevScrollY_from_state) { // Scrolling up (and not at the top)
          setNavbarBgClass('bg-transparent'); // Transparent
        } else if (currentScrollY > prevScrollY_from_state) { // Scrolling down
          setNavbarBgClass('bg-white/50 backdrop-blur-md'); // Blurry
        }
        return currentScrollY; // Update lastKnownScrollY state
      });
    };

    // Set initial state on mount
    const initialScrollY = window.scrollY;
    if (initialScrollY === 0) {
      setNavbarBgClass('bg-white/50 backdrop-blur-md'); // Blurry if at top
    } else {
      // If loaded scrolled, start blurry (as if scrolled down to this point)
      setNavbarBgClass('bg-white/50 backdrop-blur-md'); 
    }
    setLastKnownScrollY(initialScrollY);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const baseNavbarClasses = "fixed top-0 left-0 w-full h-20 text-black shadow-sm z-50 flex items-center justify-between px-6 sm:px-10";

  return (
    <div className={`${baseNavbarClasses} ${navbarBgClass} transition-all duration-300 ease-in-out`}>
      {/* Logo Section */}
      <Link href="/" className="text-4xl font-bold text-black">
        MS
      </Link>

      {/* Navigation Links - Centered and taking available space (for medium screens and up) */}
      <nav className="hidden md:flex justify-center flex-grow">
        <ul className="flex items-center space-x-20">
          <li><Link href="/aboutme" className="text-sm font-semibold uppercase tracking-wider text-red-700 px-2">ABOUT ME</Link></li>
          <li><Link href="/projects" className="text-sm font-semibold uppercase tracking-wider text-red-700 px-2">PROJECTS</Link></li>
          <li><Link href="/blogs" className="text-sm font-semibold uppercase tracking-wider text-red-700 px-2">BLOGS</Link></li>
          {/* Keep your existing links if they fit or move them to a "More" dropdown */}
          {/*
          <li><Link href="/aboutme" className="text-sm font-semibold uppercase tracking-wider hover:text-gray-700">ABOUT ME</Link></li>
          <li><Link href="/projects" className="text-sm font-semibold uppercase tracking-wider hover:text-gray-700">PROJECTS</Link></li>
          <li><Link href="/workexperience" className="text-sm font-semibold uppercase tracking-wider hover:text-gray-700">WORK EXPERIENCE</Link></li>
          <li><Link href="/skills" className="text-sm font-semibold uppercase tracking-wider hover:text-gray-700">SKILLS</Link></li>
          <li><Link href="/resume" className="text-sm font-semibold uppercase tracking-wider hover:text-gray-700">RESUME</Link></li>
          <li><Link href="/blogs" className="text-sm font-semibold uppercase tracking-wider hover:text-gray-700">BLOGS</Link></li>
          */}
        </ul>
      </nav>

      {/* Right Group: Button & Hamburger Menu Icon */}
      <div className="flex items-center space-x-4">
        <a href="mailto:mahisidda7@gmail.com" className="hidden md:block">
          <button className="bg-red-800 text-white font-semibold py-3 px-6 rounded-full text-sm uppercase tracking-wider hover:bg-yellow-600 transition-colors">
            Let's Connect!
          </button>
        </a>

        {/* Hamburger Menu Button - visible only on small screens */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            <span className="sr-only">Open main menu</span>
            {/* Heroicon name: menu */}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Absolutely Positioned, shown when isMobileMenuOpen is true */}
      {isMobileMenuOpen && (
        <div className={`absolute top-20 left-0 w-full shadow-lg md:hidden z-40 ${navbarBgClass} transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li><Link href="/aboutme" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-100 w-full text-center">ABOUT ME</Link></li>
            <li><Link href="/projects" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-100 w-full text-center">PROJECTS</Link></li>
            <li><Link href="/resume" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-100 w-full text-center">RESUME</Link></li>
            <li><Link href="/blogs" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-100 w-full text-center">BLOGS</Link></li>
            <li>
              <a href="mailto:mahisidda7@gmail.com" className="block w-full px-2">
                <button className="w-full bg-red-800 text-white font-semibold py-3 px-6 text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors mt-2">
                  Let's Connect!
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;