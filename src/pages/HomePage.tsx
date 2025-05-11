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
          filter: "brightness(0.6)",
        }}
      />

      {/* Navigation */}

      {/* Hero Content */}
      <main className="relative z-10 flex items-center justify-center min-h-full pt-32">
        <div className="text-center  px-6 font-Manrope flex flex-col items-center gap-[49.7px] ">
          <h1 className="px-16 self-stretch text-6xl font-medium md:text-6xl not-italic text-white mb-6 leading-10">
            Find the Ideal shooting location for your film using our search Tool
          </h1>
          <div className="mt-8">
            <Link
              to="/image-search"
              className="inline-flex items-center bg-[#FDC64C] hover:bg-[#FDC64C]/80 text-black font-semibold gap-[10.36px] py-[14.5px] px-[20.7px]  transition duration-300"
            >
              Search
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M12.6332 5.77771L5.72663 12.6843"
                  stroke="black"
                  stroke-width="1.55397"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.41729 5.77771H12.6332V11.9936"
                  stroke="black"
                  stroke-width="1.55397"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
export default HomePage;
