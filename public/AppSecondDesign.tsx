import React, { useState } from 'react';
import { Calendar, ExternalLink, Github, Code2, Folder, FolderOpen, ChevronRight, ChevronDown, Terminal, FileText } from 'lucide-react';

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

const FileSystemPortfolio = () => {
  const [expandedFolders, setExpandedFolders] = useState<FolderState>({
    software: false,
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
        return 'bg-yellow-500 text-black border-yellow-500/60';
      case 'Completed':
        return 'bg-yellow-500 text-black border-yellow-500/60';
      case 'On Hold':
        return 'bg-gray-600 text-white border-gray-500';
      default:
        return 'bg-gray-700 text-white border-gray-600';
    }
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    return category === 'software' ? <Code2 className="w-5 h-5" /> : <Terminal className="w-5 h-5" />;
  };

  const getProjectsByCategory = (category: ProjectCategory) => {
    return allProjects.filter(project => project.category === category);
  };

  const renderProject = (project: Project, index: number) => (
    <div key={project.id} className="relative flex gap-6 ml-8">
      {/* Timeline dot */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gray-900 border border-yellow-500/40 rounded-full text-yellow-500">
        {getCategoryIcon(project.category)}
      </div>

      {/* Project card */}
      <div className="flex-1 bg-gray-900/50 border border-gray-700 p-6 mb-8 rounded-lg">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Project image */}
          <div className="lg:w-64 h-48 bg-gray-800 border border-gray-600 flex-shrink-0 rounded-md">
            <div className="w-full h-full bg-gray-800 border border-gray-600 rounded-md flex items-center justify-center text-yellow-500">
              {getCategoryIcon(project.category)}
            </div>
          </div>

          {/* Project details */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-2xl font-bold text-white mb-1">
                  {project.title}
                </h4>
                <p className="text-gray-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </p>
              </div>
              <span className={`px-3 py-1 text-sm font-medium border rounded-md ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>

            <p className="text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-800 text-gray-200 text-sm font-medium border border-gray-600 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3">
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-medium border border-gray-600 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-200 rounded"
                >
                  <Github className="w-4 h-4" />
                  CODE
                </a>
              )}
              {project.links.live && (
                <a
                  href={project.links.live}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-medium border border-gray-600 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-200 rounded"
                >
                  <ExternalLink className="w-4 h-4" />
                  LIVE DEMO
                </a>
              )}
              {project.links.roblox && (
                <a
                  href={project.links.roblox}
                  className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-black font-medium border border-yellow-500 hover:bg-yellow-400 hover:border-yellow-400 transition-all duration-200 rounded"
                >
                  <Terminal className="w-4 h-4" />
                  PLAY GAME
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTimeline = (projects: Project[]) => (
    <div className="relative ml-4">
      {/* Timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/60 to-yellow-500/20"></div>
      <div className="space-y-0">
        {projects.map((project, index) => renderProject(project, index))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      {/* Terminal Header */}
      <header className="border-b border-gray-800 bg-gray-900/30 p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <Terminal className="w-8 h-8 text-yellow-500" />
            <div>
              <h1 className="text-2xl font-bold text-white">user@portfolio:~$ ls -la projects/</h1>
              <p className="text-gray-400">Full Stack & Game Developer</p>
            </div>
          </div>
        </div>
      </header>

      {/* Terminal Content */}
      <main className="max-w-6xl mx-auto p-6">
        {/* Terminal Output */}
        <div className="mb-8">
          <p className="text-yellow-500 mb-2">total {allProjects.length} projects</p>
          <p className="text-gray-500">drwxr-xr-x  2 user user 4096 Dec 15 2024 ./</p>
          <p className="text-gray-500">drwxr-xr-x  3 user user 4096 Dec 15 2024 ../</p>
        </div>

        {/* File System */}
        <div className="space-y-4">
          {/* Software Development Folder */}
          <div>
            <button
              onClick={() => toggleFolder('software')}
              className="flex items-center gap-3 w-full text-left p-4 bg-gray-900/40 border border-gray-700 hover:bg-gray-800/60 hover:border-yellow-500/40 transition-all duration-200 font-medium rounded-lg"
            >
              {expandedFolders.software ? (
                <>
                  <ChevronDown className="w-5 h-5 text-yellow-500" />
                  <FolderOpen className="w-6 h-6 text-yellow-500" />
                </>
              ) : (
                <>
                  <ChevronRight className="w-5 h-5 text-yellow-500" />
                  <Folder className="w-6 h-6 text-yellow-500" />
                </>
              )}
              <span className="text-xl text-white">SOFTWARE_DEVELOPMENT/</span>
              <span className="text-sm text-gray-400 ml-auto">
                ({getProjectsByCategory('software').length} projects)
              </span>
            </button>

            {expandedFolders.software && (
              <div className="border-l-2 border-yellow-500/30 ml-8 pl-4 mt-4">
                <div className="mb-4 text-yellow-500/80">
                  <p>// Modern web applications and full-stack solutions</p>
                </div>
                {renderTimeline(getProjectsByCategory('software'))}
              </div>
            )}
          </div>

          {/* Roblox Game Development Folder */}
          <div>
            <button
              onClick={() => toggleFolder('roblox')}
              className="flex items-center gap-3 w-full text-left p-4 bg-gray-900/40 border border-gray-700 hover:bg-gray-800/60 hover:border-yellow-500/40 transition-all duration-200 font-medium rounded-lg"
            >
              {expandedFolders.roblox ? (
                <>
                  <ChevronDown className="w-5 h-5 text-yellow-500" />
                  <FolderOpen className="w-6 h-6 text-yellow-500" />
                </>
              ) : (
                <>
                  <ChevronRight className="w-5 h-5 text-yellow-500" />
                  <Folder className="w-6 h-6 text-yellow-500" />
                </>
              )}
              <span className="text-xl text-white">ROBLOX_GAME_DEVELOPMENT/</span>
              <span className="text-sm text-gray-400 ml-auto">
                ({getProjectsByCategory('roblox').length} projects)
              </span>
            </button>

            {expandedFolders.roblox && (
              <div className="border-l-2 border-yellow-500/30 ml-8 pl-4 mt-4">
                <div className="mb-4 text-yellow-500/80">
                  <p>// Interactive games and virtual experiences</p>
                </div>
                {renderTimeline(getProjectsByCategory('roblox'))}
              </div>
            )}
          </div>

          {/* README File */}
          <div className="flex items-center gap-3 p-4 bg-gray-900/30 border border-gray-700 text-gray-400 rounded-lg">
            <FileText className="w-6 h-6 text-yellow-500/60" />
            <span>README.md</span>
            <span className="text-sm ml-auto">Project documentation and setup guides</span>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="mt-12 p-4 border-t border-gray-800">
          <p className="text-yellow-500">user@portfolio:~$ echo "Thanks for visiting!"</p>
          <p className="text-white">Thanks for visiting!</p>
          <p className="text-yellow-500 mt-2">user@portfolio:~$ <span className="animate-pulse">_</span></p>
        </div>
      </main>
    </div>
  );
};

export default FileSystemPortfolio;