import React from 'react'
import Navbar from './components/Navbar'
import IntroCard from './components/IntroCard'
import ProjectCard from './components/ProjectCard'

const App = () => {
  // Project data array - customize with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, shopping cart functionality, and payment integration. Features include real-time inventory updates and order tracking.",
      githubLink: "https://github.com/yourusername/ecommerce-platform",
      deployLink: "https://your-ecommerce-app.vercel.app",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"]
    },
    {
      id: 2,
      title: "Task Management Dashboard", 
      description: "A collaborative project management tool with drag-and-drop functionality, real-time updates, and team collaboration features. Includes task assignment, progress tracking, and deadline management.",
      githubLink: "https://github.com/yourusername/task-dashboard",
      deployLink: "https://task-manager-pro.netlify.app",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io", "Chart.js"]
    },
    {
      id: 3,
      title: "Weather Analytics App",
      description: "A comprehensive weather application that provides detailed forecasts, historical data analysis, and interactive maps. Features include location-based weather alerts and customizable dashboard widgets.",
      githubLink: "https://github.com/yourusername/weather-app", 
      deployLink: "https://weather-analytics.surge.sh",
      technologies: ["React", "TypeScript", "OpenWeather API", "D3.js", "Tailwind CSS"]
    }
  ]

  return (
    <>
      <Navbar/>
      <IntroCard/>
      
      {/* Projects Section Heading */}
      <div className="py-16 flex justify-center">
        <div className="relative">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-250 leading-tight pb-2 cursor-pointer">
            My Projects
          </h2>
          {/* Decorative underline */}
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-400/30"></div>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-xl -z-10 opacity-50"></div>
        </div>
      </div>
      
      {projects.map(project => (
        <ProjectCard 
          key={project.id}
          title={project.title}
          description={project.description}
          githubLink={project.githubLink}
          deployLink={project.deployLink}
          technologies={project.technologies}
        />
      ))}
    </>
  )
}

export default App