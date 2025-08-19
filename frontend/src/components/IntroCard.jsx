import React from "react";
import TypingEffect from "./TypingEffect";
import MyPhoto from "../assets/MyPhoto.jpg";

const IntroCard = () => {
  const myCustomStrings = [
    "Hi, I'm Ahmer Haider",
    "A passionate Full Stack Developer with expertise in the MERN stack and Java technologies.",
    "With hands-on experience and a strong foundation in both frontend and backend development."
  ];

  return (
    <div className="flex justify-center items-center px-4 md:px-8 lg:px-12 py-4">
      <div className="relative w-full max-w-6xl p-6 md:p-8">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-600/10 to-purple-600/10 rounded-2xl blur-xl"></div>
       
        <div className="relative bg-gradient-to-br from-zinc-900/95 to-zinc-800/95 backdrop-blur-lg rounded-2xl border border-cyan-400/40 shadow-2xl shadow-cyan-400/25 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-50 animate-pulse"></div>
         
          <div className="relative z-10 p-8 md:p-12 lg:p-16">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-lg"></div>
           
            <div className="relative z-20 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Text content with proper padding */}
              <div className="flex-1 lg:pr-8">
                <h1 className="font-bold text-xl md:text-xl lg:text-xl text-slate-100 leading-relaxed min-h-[160px] md:min-h-[140px] lg:min-h-[120px]">
                  <TypingEffect strings={myCustomStrings} />
                </h1>
                <div className="mt-6 h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
              </div>
             
              {/* Image container */}
              <div className="flex-shrink-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse"></div>
               
                <div className="relative w-full h-full rounded-full border-2 border-cyan-400/50 overflow-hidden shadow-lg shadow-cyan-400/25 cursor-pointer">
                  <img
                    src={MyPhoto}
                    alt="Ahmer Haider"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent"></div>
                  
                  {/* Resume Icon - Small and positioned on the image */}
                  <div className="absolute bottom-7 right-10 w-10 h-10 bg-cyan-500 backdrop-blur-sm rounded-full flex items-center justify-center opacity-100 transition-all duration-300 ease-out hover:scale-110 shadow-xl border-2 border-white/30">
                    <svg 
                      className="w-6 h-6 text-white drop-shadow-lg" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                      />
                    </svg>
                  </div>
                  
                  {/* Hover overlay with resume link */}
                  <div 
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-100 ease-out"
                    onClick={() => {
                      // Replace with your Google Drive resume link
                      window.open('https://drive.google.com/file/d/1G6YbQsRNP9qwSYcK7g1NwUbjcCrKkauM/view?usp=drive_link', '_blank');
                    }}
                  >
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                        <svg 
                          className="w-6 h-6" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                          />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">View Resume</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent blur-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;