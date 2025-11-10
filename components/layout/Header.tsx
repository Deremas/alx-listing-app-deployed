import { FaHotel } from "react-icons/fa";
import { accommodations, heroImage } from "@/constants";
import Image from "next/image";
import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <nav className="bg-[#34967C] text-white flex items-center justify-between gap-4 px-4 py-3">
        {/* Icon */}
        <span className="flex-shrink-0">
          <FaHotel className="w-6 h-6" />
        </span>

        {/* Main text */}
        <p className="flex-1 text-sm text-white text-center md:text-left">
          Overseas trip? Get the latest information on travel guides
        </p>

        {/* More info button */}
        <button className="flex-shrink-0 bg-gray-800 text-white px-4 py-2 rounded cursor-pointer hover:bg-gray-700 transition text-sm">
          More info
        </button>
      </nav>
      <header className="bg-white shadow-md sticky top-0 z-50">
        {/* Top Row: Logo + Search + Auth */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <div className="relative w-[49px] h-[49px]">
            <Image
              src="/assets/Logo Showcase.png"
              alt="alx"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Search & Auth Buttons */}
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search properties..."
              className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Sign In
            </button>
            <button className="px-4 py-1 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100 transition">
              Sign Up
            </button>
          </div>
        </div>

        <nav className="flex overflow-x-auto no-scrollbar  gap-[1] px-4 py-2">
          {accommodations.map(({ label, Icon }) => (
            <button
              key={label}
              className="flex flex-col items-center min-w-[90px] hover:text-primary transition h-[68px] w-[15px]"
            >
              <Icon size={28} strokeWidth={1.5} />
              <span className="text-xs mt-1">{label}</span>
            </button>
          ))}
        </nav>

        <style jsx global>{`
          /* Hide scrollbar but keep scroll functionality */
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </header>
    </>
  );
};

export default Header;
