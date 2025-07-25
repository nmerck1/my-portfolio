import React, { useState } from 'react';
import { Calendar, ExternalLink, Github, Code2, Folder, FolderOpen, ChevronRight, ChevronDown, Play, FileText, User, Briefcase, Linkedin, Mail, Globe, Twitter } from 'lucide-react';

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

const MinimalPortfolio = () => {
  const [expandedFolders, setExpandedFolders] = useState<FolderState>({
    software: true,
    roblox: false
  });

  // All projects in chronological order (most recent first)
  const allProjects: Project[] = [
    {
      id: 1,
      title: "Pi-Plant App",
      description: "A plant health montioring app that runs on C# and uses React front-end. It uses physical sensors for things like data collection. It is hosted on my raspberry pi home server.",
      date: "August 2025",
      dateISO: "2025-08-01",
      status: "In Progress",
      category: "software",
      technologies: ["C#", "React", "Tailwind CSS", "Cloudflare"],
      links: {
        github: "https://github.com/nmerck1/Pi-Plant",
        live: "https://nathanielmerck.com"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Life Management Web App",
      description: "Full-stack website used for managing and monitoring individual's finances. ",
      date: "December 2021",
      dateISO: "2021-12-01",
      status: "Completed",
      category: "software",
      technologies: ["PHP", "CSS", "JavaScript", "MySQL", "MariaDB"],
      links: {
        github: "https://github.com/nmerck1/Life_Management",
        //live: "https://dashboard-demo.com"
      },
      image: "/api/placeholder/400/200"
    },
    /*
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
    */
    
    {
      id: 4,
      title: "Kinzoo Enchanted Trail",
      description: "Cutesy parkour/obby based in an enchanted forest. The game features puzzles, hidden areas, and a shop. (This project was created for my client Sean Herman).",
      date: "November 2024",
      dateISO: "2024-11-01",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "TweenService", "BodyVelocity", "DataStore", "RemoteEvents"],
      links: {
        roblox: "https://www.roblox.com/games/136071239388244/Kinzoo-Enchanted-Trail",
        //github: "https://github.com/yourusername/racing-game"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 5,
      title: "Future RNG",
      description: "Multiplayer card rolling game with inventory management, and randomized card selection. Features advanced scripting and DataStore integration.",
      date: "July 2024",
      dateISO: "2024-07-01",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "DataStore", "RemoteEvents", "TweenService"],
      links: {
        roblox: "https://www.roblox.com/games/18610939216/Future-RNG",
        //github: "https://github.com/yourusername/zombie-survival"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 6,
      title: "Cursed Cabin",
      description: "A multiplayer round-based survival horror game. ",
      date: "April 2024",
      dateISO: "2024-04-01",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "GUI Design", "HttpService"],
      links: {
        roblox: "https://www.roblox.com/games/17275401603/Cursed-Cabin-Beta"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 7,
      title: "Daniel's Apartment",
      description: "A singleplayer horror story game. ",
      date: "May 2021",
      dateISO: "2021-05-01",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "GUI Design", "HttpService"],
      links: {
        roblox: "https://www.roblox.com/games/6752394768/Daniels-Apartment"
      },
      image: "/api/placeholder/400/200"
    },
    {
      id: 8,
      title: "Revelary",
      description: "An adventure fantasy RPG. ",
      date: "November 2019",
      dateISO: "2019-11-01",
      status: "On Hold",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "GUI Design", "HttpService", "DataStore"],
      links: {
        roblox: "https://www.roblox.com/games/4353556075/Revelary-Alpha"
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
        return 'text-orange-400';
      case 'Completed':
        return 'text-white';
      case 'On Hold':
        return 'text-gray-400';
      default:
        return 'text-gray-400';
    }
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    return category === 'software' ? <Code2 className="w-4 h-4" /> : <Play className="w-4 h-4" />;
  };

  const getProjectsByCategory = (category: ProjectCategory) => {
    return allProjects.filter(project => project.category === category);
  };

  const renderProject = (project: Project, index: number) => (
    <div key={project.id} className="border-b border-gray-800 pb-8 last:border-b-0">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h4 className="text-lg font-medium text-white mb-2 hover:text-orange-400 transition-colors cursor-pointer">
            {project.title}
          </h4>
          <p className="text-gray-400 text-sm mb-1">
            {project.date}
          </p>
          <span className={`text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>
        <div className="text-orange-400 ml-4">
          {getCategoryIcon(project.category)}
        </div>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs text-gray-400 border border-gray-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        {project.links.github && (
          <a
            href={project.links.github}
            className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
          >
            <Github className="w-4 h-4" />
            Code
          </a>
        )}
        {project.links.live && (
          <a
            href={project.links.live}
            className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        )}
        {project.links.roblox && (
          <a
            href={project.links.roblox}
            className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1"
          >
            <Play className="w-4 h-4" />
            Play Game
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      {/* Minimal Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-light text-white mb-4">Nathaniel Merck</h1>
            <p className="text-orange-400 text-lg">Full Stack Software Engineer | Game Developer</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-8 py-12">
       
        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-12 mb-16 text-center">
          <div>
            <p className="text-3xl font-light text-white mb-2">{allProjects.length}</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Total Projects</p>
          </div>
          <div>
            <p className="text-3xl font-light text-white mb-2">{getProjectsByCategory('software').length}</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Web Applications</p>
          </div>
          <div>
            <p className="text-3xl font-light text-white mb-2">{getProjectsByCategory('roblox').length}</p>
            <p className="text-gray-400 text-sm uppercase tracking-wider">Games Created</p>
          </div>
        </div>

        {/* Project Categories */}
        <div className="space-y-12">
          {/* Software Development Section */}
          <div>
            <button
              onClick={() => toggleFolder('software')}
              className="flex items-center gap-4 w-full text-left mb-8 group"
            >
              {expandedFolders.software ? (
                <ChevronDown className="w-5 h-5 text-orange-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-orange-400" />
              )}
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-light text-white group-hover:text-orange-400 transition-colors">
                  Software Development
                </h3>
              </div>
              <div className="ml-auto text-gray-400 text-sm">
                {getProjectsByCategory('software').length}
              </div>
            </button>

            {expandedFolders.software && (
              <div className="ml-9 space-y-8">
                {getProjectsByCategory('software').map((project, index) => renderProject(project, index))}
              </div>
            )}
          </div>

          {/* Roblox Game Development Section */}
          <div>
            <button
              onClick={() => toggleFolder('roblox')}
              className="flex items-center gap-4 w-full text-left mb-8 group"
            >
              {expandedFolders.roblox ? (
                <ChevronDown className="w-5 h-5 text-orange-400" />
              ) : (
                <ChevronRight className="w-5 h-5 text-orange-400" />
              )}
              <div className="flex items-center gap-3">
                <Play className="w-5 h-5 text-orange-400" />
                <h3 className="text-xl font-light text-white group-hover:text-orange-400 transition-colors">
                  Game Development
                </h3>
              </div>
              <div className="ml-auto text-gray-400 text-sm">
                {getProjectsByCategory('roblox').length}
              </div>
            </button>

            {expandedFolders.roblox && (
              <div className="ml-9 space-y-8">
                {getProjectsByCategory('roblox').map((project, index) => renderProject(project, index))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
};

export default MinimalPortfolio;