import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ 
  title = "Project Title", 
  description = "A detailed description of the project showcasing its features and technologies used.",
  githubLink = "#",
  deployLink = "#",
  technologies = ["React", "Node.js", "MongoDB"]
}) => {
  return (
    <div className="p-8 flex items-center justify-center">
      <div className="group relative bg-gradient-to-br from-slate-900/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/10 hover:-translate-y-1 w-full max-w-6xl">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        
        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
              {title}
            </h3>
            
            {/* Links */}
            <div className="flex gap-3">
              <a 
                href={githubLink}
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 text-slate-400 hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a 
                href={deployLink}
                className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 text-slate-400 hover:text-cyan-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            {description}
          </p>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium bg-slate-800/50 text-cyan-300 rounded-full border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Decorative line */}
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent group-hover:via-cyan-400/60 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;