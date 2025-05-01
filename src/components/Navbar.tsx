import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine if we're on the home page to set appropriate styling
  const isHomePage = location.pathname === '/';
  
  // Styles based on whether we're on the home page or not
  const navBgClass = isHomePage 
    ? "bg-transparent" 
    : "bg-white border-b border-gray-200";
  
  const linkClass = isHomePage
    ? "text-white hover:text-gray-300 transition-colors px-4 py-2 border-l border-white"
    : "text-gray-700 hover:text-gray-900 px-4 py-2 border-l border-gray-200";
  
  const firstLinkClass = isHomePage
    ? "text-white hover:text-gray-300 transition-colors px-4 py-2 border-l border-white first:border-l-0"
    : "text-gray-700 hover:text-gray-900 px-4 py-2 border-l border-gray-200 first:border-l-0";
  
  const mobileMenuBgClass = isHomePage
    ? "bg-black bg-opacity-75"
    : "bg-gray-100";
  
  const mobileLinkClass = isHomePage
    ? "text-white hover:text-gray-300 py-2 px-4 block"
    : "text-gray-700 hover:text-gray-900 py-2 px-4 block";
  
  const menuButtonClass = isHomePage
    ? "md:hidden text-white"
    : "md:hidden text-gray-700";

  return (
    <nav className="px-8 relative z-10 bg-transparent">
    <div className=" mx-auto  pr-1 py-4">
      <div className="flex items-center flex-shrink-0 justify-between">
        <div className="flex items-center justify-between h-10 bg-black p-2.5 text-white text-xl/normal font-Manrope font-semibold">LOGO</div>
        <div className="hidden md:flex space-x-1 text-base/5 not-italic font-Manrope font-normal">
          <Link 
            to="/"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l border-line-gray-200"
          >
            Home
          </Link>
          <Link 
            to="/image-search"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l border-line-gray-200"
          >
            Image Search
          </Link>
          <Link 
            to="/permits"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l border-line-gray-200"
          >
            Permits
          </Link>
          <Link 
            to="/booking-enquiry"
            className="text-theme-gray-800  hover:text-black hover:font-bold transition-colors px-4 py-2 border-l  border-line-gray-200"
          >
            Booking Enquiry
          </Link>
          <Link 
            to="/list-property"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l  border-line-gray-200"
          >
            List My Property
          </Link>
          <Link 
            to="/projects"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l  border-line-gray-200"
          >
            Projects
          </Link>
          <Link 
            to="/about-us"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l  border-line-gray-200 "
          >
            About Us
          </Link>
          <Link 
            to="/contact-us"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l  border-line-gray-200 border-r "
          >
            Contact Us
          </Link>
        </div>
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-2 bg-black bg-opacity-75 rounded p-2">
            <Link 
              to="/"
              className="text-white hover:text-gray-300 py-2 px-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/image-search"
              className="text-white hover:text-gray-300 py-2 px-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Image Search
            </Link>
            <Link 
            to="/permits"
            className="text-theme-gray-800 hover:text-black hover:font-bold transition-colors px-4 py-2 border-l border-line-gray-200"
            >
            Permits
            </Link>
            <Link 
              to="/booking-enquiry"
              className="text-white hover:text-gray-300 py-2 px-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Booking Enquiry
            </Link>
            <Link 
              to="/list-property"
              className="text-white hover:text-gray-300 py-2 px-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              List My Property
            </Link>
            <Link 
              to="/projects"
              className="text-white hover:text-gray-300 py-2 px-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/about-us"
              className="text-white hover:text-gray-300 py-2 px-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact-us"
              className="text-white hover:text-gray-300 py-2 px-4 block"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </div>
    </nav>
  );
};

export default Navbar;
