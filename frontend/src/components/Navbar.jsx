import React, { useState } from "react";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const navItems = ["Home", "Projects", "Certificates", "Responsibility"];

  return (
    <nav className="sticky top-0 z-50 mb-8">
      {/* Navigation container */}
      <div className="relative backdrop-blur-lg rounded-full px-8 py-4 mx-4">
        {/* Navigation items */}
        <ol className="relative z-10 flex justify-evenly list-none text-slate-100 font-semibold">
          {navItems.map((item, index) => (
            <li
              key={item}
              className={`
                relative px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ease-out
                hover:text-cyan-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25
                ${activeItem === item ? 'text-cyan-300 bg-cyan-400/10' : ''}
              `}
              onClick={() => setActiveItem(item)}
            >
              {/* Active item background */}
              {activeItem === item && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-sm animate-pulse"></div>
              )}
             
              {/* Text content */}
              <span className="relative z-10">{item}</span>
             
              {/* Hover underline effect */}
              <div className={`
                absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full
                transition-all duration-300 ease-out
                ${activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'}
              `}></div>
            </li>
          ))}
        </ol>
       
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
      </div>
     
      {/* Mobile menu button (for smaller screens) */}
      <div className="md:hidden absolute top-4 right-8">
        <button className="p-2 rounded-lg bg-zinc-800/80 text-cyan-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;