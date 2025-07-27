import React, { useState } from 'react';
import { Calendar, ExternalLink, Github, Code2, Folder, FolderOpen, ChevronRight, ChevronDown, Play, FileText, User, Briefcase, Linkedin, Mail, Globe, Twitter, ChevronLeft, Quote, Star } from 'lucide-react';

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

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  project: string;
  date: string;
  avatar?: string;
}

const MinimalPortfolio = () => {
  const [expandedFolders, setExpandedFolders] = useState<FolderState>({
    software: true,
    roblox: false
  });

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Sample testimonials - replace with your actual client reviews
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sean Herman",
      role: "Upwork Client",
      company: "Kinzoo Inc.",
      content: "Nathaniel was a pleasure to work with. Very patient with me as we built a Roblox Obby where I had a lot of questions. He took feedback and made changes quickly. Would (and most likely will) absolutely work with him again.",
      rating: 5,
      project: "Kinzoo Enchanted Trail",
      date: "Oct 2024 - Feb 2025",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 2,
      name: "Michael Dezayas",
      role: "Upwork Client",
      content: "This guy is great, he's very polite and patient when it comes to sorting things out during projects.I would most definitely recommended him to others looking for scripting, animating and overall help regarding roblox studio. 10/10 rating.",
      rating: 5,
      project: "Whispering Pines - Roblox Game",
      date: "Jan 2024 - Present",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 3,
      name: "Sean",
      role: "Upwork Client",
      company: "Dark Roast Releasing LLC.",
      content: "Great developer, good communication and creative collaborator, problem solving initiative, and extremely knowledgable about the Roblox platform, assets, marketplace, and player base.",
      rating: 5,
      project: "Laser Tag Hero",
      date: "Aug 2024 - Jun 2025",
      avatar: "/api/placeholder/60/60"
    }
  ];

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
        github: "https://github.com/nmerck1/Life_Management"
      },
      image: "/api/placeholder/400/200"
    },
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
        roblox: "https://www.roblox.com/games/136071239388244/Kinzoo-Enchanted-Trail"
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
        roblox: "https://www.roblox.com/games/18610939216/Future-RNG"
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

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-orange-400 fill-orange-400' : 'text-gray-600'
        }`}
      />
    ));
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

  const currentTestimonial = testimonials[currentTestimonialIndex];

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

        {/* Client Testimonials Section */}
        <div className="mt-20 pt-16 border-t border-gray-800">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-white mb-4">Client Testimonials</h2>
            <p className="text-gray-400">What clients say about working with me</p>
          </div>

          {/* Main Testimonial Display */}
          <div className="relative">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8 mb-8 h-80 flex flex-col">
              {/* Quote Icon */}
              <Quote className="w-8 h-0 text-orange-400 mb-6 flex-shrink-0" />
              
              {/* Testimonial Content - Fixed height with scroll if needed */}
              <div className="flex-1 mb-6 overflow-y-auto">
                <blockquote className="text-lg text-gray-300 leading-relaxed">
                  "{currentTestimonial.content}"
                </blockquote>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6 flex-shrink-0">
                {renderStars(currentTestimonial.rating)}
                <span className="text-sm text-gray-400 ml-2">
                  {currentTestimonial.rating}/5 stars
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{currentTestimonial.name}</p>
                    <p className="text-sm text-gray-400">
                      {currentTestimonial.role}
                      {currentTestimonial.company && ` at ${currentTestimonial.company}`}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-orange-400">{currentTestimonial.project}</p>
                  <p className="text-xs text-gray-500">{currentTestimonial.date}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            {testimonials.length > 1 && (
              <div className="flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Previous
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentTestimonialIndex ? 'bg-orange-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Next
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <p className="text-2xl font-light text-white mb-2">
                {testimonials.length}+
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Happy Clients
              </p>
            </div>
            <div>
              <p className="text-2xl font-light text-white mb-2">
                {testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length}
                /5
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Average Rating
              </p>
            </div>
            <div>
              <p className="text-2xl font-light text-white mb-2">100%</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">
                Project Success
              </p>
            </div>
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