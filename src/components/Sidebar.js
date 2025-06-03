// components/Sidebar.js (acting as TopNavbar)
"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarBgClass, setNavbarBgClass] = useState('bg-transparent'); 
  const [logoColorClass, setLogoColorClass] = useState('text-black');
  const [navLinkColorClass, setNavLinkColorClass] = useState('text-red-700');
  const [hamburgerColorClass, setHamburgerColorClass] = useState('text-gray-500 hover:text-gray-700');
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  useEffect(() => {
    if (!initialRenderComplete) {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setNavbarBgClass('bg-transparent');
        setLogoColorClass('text-black');
        setNavLinkColorClass('text-red-700');
        setHamburgerColorClass('text-gray-500 hover:text-gray-700');
      } else {
        setNavbarBgClass('bg-black shadow-sm');
        setLogoColorClass('text-white');
        setNavLinkColorClass('text-gray-200 hover:text-white');
        setHamburgerColorClass('text-gray-300 hover:text-white');
      }
    };

    handleScroll(); // Call once to set based on initial scroll position after mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialRenderComplete]); // Effect now depends on initialRenderComplete

  // Base classes excluding shadow, as it's now part of navbarBgClass states
  const baseNavbarClasses = "fixed top-0 left-0 w-full h-20 z-50 flex items-center justify-between px-6 sm:px-10";

  return (
    <div className={`${baseNavbarClasses} ${navbarBgClass} transition-all duration-300 ease-in-out`}>
      {/* Logo Section */}
      <Link href="/" className={`text-4xl font-bold ${logoColorClass} transition-colors duration-300 ease-in-out`}>
        MS
      </Link>

      {/* Navigation Links */}
      <nav className="hidden md:flex justify-center flex-grow">
        <ul className="flex items-center space-x-20">
          <li><Link href="/aboutme" className={`text-sm font-semibold uppercase tracking-wider px-2 ${navLinkColorClass} transition-colors duration-300 ease-in-out`}>ABOUT ME</Link></li>
          <li><Link href="/projects" className={`text-sm font-semibold uppercase tracking-wider px-2 ${navLinkColorClass} transition-colors duration-300 ease-in-out`}>PROJECTS</Link></li>
          <li><Link href="/workexperience" className={`text-sm font-semibold uppercase tracking-wider px-2 ${navLinkColorClass} transition-colors duration-300 ease-in-out`}>RESUME</Link></li>
          <li><Link href="/blogs" className={`text-sm font-semibold uppercase tracking-wider px-2 ${navLinkColorClass} transition-colors duration-300 ease-in-out`}>BLOGS</Link></li>
        </ul>
      </nav>

      {/* Right Group: Button & Hamburger Menu Icon */}
      <div className="flex items-center space-x-4">
        <a href="mailto:mahisidda7@gmail.com" className="hidden md:block">
          {/* Button color remains constant, or can be adjusted if needed */}
          <button className="bg-red-800 text-white font-semibold py-3 px-6 rounded-full text-sm uppercase tracking-wider hover:bg-yellow-600 transition-colors">
            Let's Connect!
          </button>
        </a>

        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${hamburgerColorClass} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-300 ease-in-out`}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`absolute top-20 left-0 w-full shadow-lg md:hidden z-40 ${navbarBgClass} transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col items-center space-y-4 py-4">
            {/* Mobile links color (text-yellow-700) should be fine on black bg. Add transition if navbar elements also transition their text color */}
            <li><Link href="/aboutme" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-700/50 w-full text-center rounded transition-colors duration-150">ABOUT ME</Link></li>
            <li><Link href="/projects" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-700/50 w-full text-center rounded transition-colors duration-150">PROJECTS</Link></li>
            <li><Link href="/resume" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-700/50 w-full text-center rounded transition-colors duration-150">RESUME</Link></li>
            <li><Link href="/blogs" className="block text-sm font-semibold uppercase tracking-wider text-yellow-700 px-2 py-2 hover:bg-gray-700/50 w-full text-center rounded transition-colors duration-150">BLOGS</Link></li>
            <li>
              <a href="mailto:mahisidda7@gmail.com" className="block w-full px-2">
                <button className="w-full bg-red-800 text-white font-semibold py-3 px-6 text-sm uppercase tracking-wider hover:bg-yellow-600 transition-colors mt-2">
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