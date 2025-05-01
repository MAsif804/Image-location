import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import heroBackground from '../assets/hero-bg.jpeg';
import NavbarMain from '@/components/NavbarMain';

export const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen ">
     
     <NavbarMain />
      {/* Background with overlay */}

      <div 
        className="absolute inset-0 bg-cover bg-no-repeat shrink-0 bg-center aspect-3/2"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          filter: 'brightness(0.6)'
        }}
      />

      {/* Navigation */}
      

      {/* Hero Content */}
      <main className="relative z-10 flex items-center justify-center min-h-full pt-32">
        <div className="text-center  px-6 font-Manrope flex flex-col items-center gap-12 ">
          <h1 className="px-16 self-stretch text-6xl font-medium md:text-6xl not-italic text-white mb-6 leading-10">
            Find the Ideal shooting location for your film using our search Tool
          </h1>
          <div className="mt-8">
            <Link 
              to="/image-search"
              className="inline-flex items-center bg-red-600 hover:bg-red text-white font-medium py-3 px-6 rounded-md transition duration-300"
            >
              Image Search
              <svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
export default HomePage;
