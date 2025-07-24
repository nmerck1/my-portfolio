import React, { useState } from 'react';
import { Calendar, ExternalLink, Github, Code2, Folder, FolderOpen, ChevronRight, ChevronDown, Play, FileText, User, Briefcase } from 'lucide-react';

type ProjectStatus = 'In Progress' | 'Completed' | 'On Hold';
type ProjectCategory = 'software' | 'roblox';

interface Project {
  id: number;
  title: string;
  description: string;
  date: string;
  dateISO: string;
  status: ProjectStatus;
  technologies: string[];
  category: ProjectCategory;
  links: {
    github?: string;
    live?: string;
    roblox?: string;
  };
  image: string;
}

interface FolderState {
  software: boolean;
  roblox: boolean;
}

const ModernPortfolio = () => {
  const [expandedFolders, setExpandedFolders] = useState<FolderState>({
    software: true,
    roblox: false
  });

  // All projects in chronological order (most recent first)
  const allProjects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and optimized performance.",
      date: "December 2024",
      dateISO: "2024-12-01",
      status: "In Progress",
      category: "software",
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
      category: "software",
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
      category: "software",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      links: {
        github: "https://github.com/yourusername/task-manager",
        live: "https://taskapp-demo.com"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Zombie Survival Game",
      description: "Multiplayer survival game with custom weapon systems, inventory management, and procedural map generation. Features advanced scripting and DataStore integration.",
      date: "August 2024",
      dateISO: "2024-08-15",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "DataStore", "RemoteEvents"],
      links: {
        roblox: "https://www.roblox.com/games/your-game-id",
        github: "https://github.com/yourusername/zombie-survival"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "Racing Championship",
      description: "High-speed racing game with custom vehicle physics, track editor, and competitive leaderboard system. Optimized for performance with 50+ concurrent players.",
      date: "June 2024",
      dateISO: "2024-06-10",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "TweenService", "BodyVelocity"],
      links: {
        roblox: "https://www.roblox.com/games/your-racing-game",
        github: "https://github.com/yourusername/racing-game"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "Medieval RPG Adventure",
      description: "Fantasy RPG with quest system, character progression, and guild mechanics. Features custom GUI systems and complex inventory management.",
      date: "March 2024",
      dateISO: "2024-03-20",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "GUI Design", "HttpService"],
      links: {
        roblox: "https://www.roblox.com/games/your-rpg-game"
      },
      image: "/api/placeholder/400/200"
    }
  ];

  const toggleFolder = (folder: keyof FolderState) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folder]: !prev[folder]
    }));
  };

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case 'In Progress':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'On Hold':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    return category === 'software' ? <Code2 className="w-5 h-5" /> : <Play className="w-5 h-5" />;
  };

  const getProjectsByCategory = (category: ProjectCategory) => {
    return allProjects.filter(project => project.category === category);
  };

  const renderProject = (project: Project, index: number) => (
    <div key={project.id} className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-xl hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1">
      {/* Project image */}
      <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border-b border-gray-700">
        <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-blue-400 shadow-lg border border-gray-600">
          {getCategoryIcon(project.category)}
        </div>
      </div>

      {/* Project content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h4>
            <p className="text-gray-400 flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4" />
              {project.date}
            </p>
          </div>
          <span className={`px-3 py-1 text-xs font-semibold border rounded-full ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded-md border border-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-2">
          {project.links.github && (
            <a
              href={project.links.github}
              className="flex items-center gap-2 px-3 py-2 bg-gray-700 text-white text-sm font-medium hover:bg-gray-600 transition-colors duration-200 rounded-lg border border-gray-600"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.links.live && (
            <a
              href={project.links.live}
              className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200 rounded-lg"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
          {project.links.roblox && (
            <a
              href={project.links.roblox}
              className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors duration-200 rounded-lg"
            >
              <Play className="w-4 h-4" />
              Play
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Modern Header */}
      <header className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">My Portfolio</h1>
              <p className="text-gray-300 mt-1">Full Stack & Game Developer</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Overview */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 mb-8">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-2xl font-bold text-white">{allProjects.length}</p>
              <p className="text-gray-400 text-sm">Total Projects</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Code2 className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-2xl font-bold text-white">{getProjectsByCategory('software').length}</p>
              <p className="text-gray-400 text-sm">Web Applications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Play className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-2xl font-bold text-white">{getProjectsByCategory('roblox').length}</p>
              <p className="text-gray-400 text-sm">Games Created</p>
            </div>
          </div>
        </div>

        {/* Project Categories */}
        <div className="space-y-8">
          {/* Software Development Section */}
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleFolder('software')}
              className="flex items-center gap-4 w-full text-left p-6 hover:bg-gray-700/50 transition-colors duration-200"
            >
              {expandedFolders.software ? (
                <ChevronDown className="w-5 h-5 text-blue-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-blue-400" />
              )}
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Software Development</h3>
                <p className="text-gray-400 text-sm">Modern web applications and full-stack solutions</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-white">{getProjectsByCategory('software').length}</span>
                <p className="text-gray-400 text-sm">projects</p>
              </div>
            </button>

            {expandedFolders.software && (
              <div className="border-t border-gray-700 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProjectsByCategory('software').map((project, index) => renderProject(project, index))}
                </div>
              </div>
            )}
          </div>

          {/* Roblox Game Development Section */}
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            <button
              onClick={() => toggleFolder('roblox')}
              className="flex items-center gap-4 w-full text-left p-6 hover:bg-gray-700/50 transition-colors duration-200"
            >
              {expandedFolders.roblox ? (
                <ChevronDown className="w-5 h-5 text-green-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-green-400" />
              )}
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center">
                <Play className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white">Game Development</h3>
                <p className="text-gray-400 text-sm">Interactive games and virtual experiences on Roblox</p>
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-white">{getProjectsByCategory('roblox').length}</span>
                <p className="text-gray-400 text-sm">games</p>
              </div>
            </button>

            {expandedFolders.roblox && (
              <div className="border-t border-gray-700 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getProjectsByCategory('roblox').map((project, index) => renderProject(project, index))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <FileText className="w-4 h-4 text-gray-400" />
            <span className="text-gray-300 text-sm">Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernPortfolio;