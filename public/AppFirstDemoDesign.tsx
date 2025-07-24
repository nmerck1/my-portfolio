import React from 'react';
import { Calendar, ExternalLink, Github, Code2 } from 'lucide-react';

type ProjectStatus = 'In Progress' | 'Completed' | 'On Hold';

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  dateISO: string;
  status: ProjectStatus;
  technologies: string[];
  links: {
    github: string;
    live: string;
  };
  image: string;
}

const TimelineHomepage = () => {
  // Sample project data - you'll replace this with your actual projects
  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      date: "December 2024",
      dateISO: "2024-12-01",
      status: "In Progress",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      links: {
        github: "https://github.com/yourusername/portfolio",
        live: "https://yourportfolio.com"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "E-Commerce Dashboard",
      description: "Full-stack dashboard for managing online store inventory, orders, and analytics. Built with modern web technologies and RESTful API design.",
      date: "November 2024",
      dateISO: "2024-11-15",
      status: "Completed",
      technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
      links: {
        github: "https://github.com/yourusername/ecommerce-dashboard",
        live: "https://dashboard-demo.com"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team workspace features.",
      date: "October 2024",
      dateISO: "2024-10-20",
      status: "Completed",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      links: {
        github: "https://github.com/yourusername/task-manager",
        live: "https://taskapp-demo.com"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Weather Forecast API",
      description: "RESTful API service for weather forecasting with caching, rate limiting, and comprehensive documentation. Deployed on AWS with CI/CD pipeline.",
      date: "September 2024", 
      dateISO: "2024-09-10",
      status: "Completed",
      technologies: ["Python", "FastAPI", "Redis", "AWS", "Docker"],
      links: {
        github: "https://github.com/yourusername/weather-api",
        live: "https://api.weather-demo.com/docs"
      },
      image: "/api/placeholder/400/200"
    }
  ];

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Completed':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'On Hold':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r text-slate-300 bg-clip-text">
                Nathaniel Merck
              </h1>
              <p className="text-slate-400 mt-2">Full Stack Developer</p>
            </div>
            <nav className="flex gap-6">
              <a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">
                Projects
              </a>
              <a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">
                About
              </a>
              <a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-6">
            Building the{' '}
            <span className="text-blue-400">
              Future
            </span>{' '}
            with Code
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and beautiful user experiences. 
            Here's my journey through recent projects and milestones.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section id="projects" className="max-w-4xl mx-auto px-6 pb-16">
        <div className="flex items-center gap-3 mb-12">
          <Calendar className="w-8 h-8 text-blue-400" />
          <h3 className="text-3xl font-bold">Project Timeline</h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-500"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={project.id} className="relative flex gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-slate-900 border-4 border-blue-500 rounded-full shadow-lg shadow-blue-500/30">
                  <Code2 className="w-7 h-7 text-blue-400" />
                </div>

                {/* Project card */}
                <div className="flex-1 bg-slate-900/70 border border-slate-700 rounded-xl p-6 hover:bg-slate-900 transition-all duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Project image */}
                    <div className="lg:w-64 h-48 bg-slate-800 rounded-lg overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-slate-800/80 border border-slate-700 flex items-center justify-center">
                        <Code2 className="w-16 h-16 text-slate-500" />
                      </div>
                    </div>

                    {/* Project details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h4 className="text-2xl font-bold text-slate-50 mb-1">
                            {project.title}
                          </h4>
                          <p className="text-slate-400 flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {project.date}
                          </p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>

                      <p className="text-slate-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm border border-slate-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <a
                          href={project.links.github}
                          className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-slate-700"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                        <a
                          href={project.links.live}
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/25"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/90">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center text-slate-400">
            <p>&copy; 2024 Your Name. Built with React, TypeScript, and Tailwind CSS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TimelineHomepage;