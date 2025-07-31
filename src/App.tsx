import React, { useState } from 'react';
import { Calendar, ExternalLink, Github, Code2, Folder, FolderOpen, ChevronRight, ChevronDown, Play, FileText, User, Briefcase, Linkedin, Mail, Globe, Twitter, ChevronLeft, Quote, Star, Menu, X } from 'lucide-react';

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

const MinimalOrangePortfolio = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Sample testimonials
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sean Herman",
      role: "Upwork Client",
      company: "Kinzoo Inc.",
      content: "Nathaniel was a pleasure to work with. Very patient with me as we built a Roblox Obby where I had a lot of questions. He took feedback and made changes quickly. Would (and most likely will) absolutely work with him again.",
      rating: 5,
      project: "Kinzoo Enchanted Trail - Roblox Game",
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
      name: "Amanda Close",
      role: "Upwork Client",
      company: "Dark Roast Releasing LLC.",
      content: "Great developer, good communication and creative collaborator, problem solving initiative, and extremely knowledgable about the Roblox platform, assets, marketplace, and player base.",
      rating: 5,
      project: "Laser Tag Hero - Roblox Game",
      date: "Aug 2024 - Jun 2025",
      avatar: "/api/placeholder/60/60"
    },
    {
      id: 4,
      name: "Ely Santos Jr",
      role: "Upwork Client",
      company: "Ely's Agency",
      content: "Nathaniel is great, he's a native Roblox player that understands the game really well and comes up with ideas that make sense within the Roblox context and solve technical challenges.",
      rating: 5,
      project: "Danger Spring - Roblox Game",
      date: "Jan 2025 - Mar 2025",
      avatar: "/api/placeholder/60/60"
    }
  ];

  // All projects
  const allProjects: Project[] = [
    {
      id: 1,
      title: "Pi-Plant App",
      description: "A plant health monitoring app that uses Go back-end and uses React front-end. It uses physical sensors for things like data collection. It is hosted on my raspberry pi home server.",
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
      description: "Full-stack website used for managing and monitoring individual's finances.",
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
      description: "A multiplayer round-based survival horror game.",
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
      description: "A singleplayer horror story game.",
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
      description: "An adventure fantasy RPG.",
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

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % allProjects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
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
        className={`w-3 h-3 ${
          i < rating ? 'text-orange-400 fill-orange-400' : 'text-gray-600'
        }`}
      />
    ));
  };

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case 'In Progress':
        return 'text-orange-400 bg-orange-400/10 border-orange-400/30';
      case 'Completed':
        return 'text-orange-300 bg-orange-300/10 border-orange-300/30';
      case 'On Hold':
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    return category === 'software' ? <Code2 className="w-4 h-4" /> : <Play className="w-4 h-4" />;
  };

  const getProjectsByCategory = (category: ProjectCategory) => {
    return allProjects.filter(project => project.category === category);
  };

  const renderProjectCarousel = () => {
    const currentProject = allProjects[currentProjectIndex];
    
    return (
      <div className="bg-gray-950 border border-gray-800 rounded-lg p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-orange-400">
                {getCategoryIcon(currentProject.category)}
              </div>
              <div>
                <h3 className="text-2xl font-medium text-white">{currentProject.title}</h3>
                <p className="text-gray-400 text-sm">{currentProject.date}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(currentProject.status)} ml-auto`}>
                {currentProject.status}
              </span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              {currentProject.description}
            </p>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-white text-sm font-medium mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-gray-300 bg-gray-800 border border-gray-700 px-3 py-1.5 rounded hover:border-orange-400/50 hover:text-orange-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4">
              {currentProject.links.github && (
                <a
                  href={currentProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-400 hover:bg-orange-300 text-black px-4 py-2 rounded transition-colors flex items-center gap-2 font-medium"
                >
                  <Github className="w-4 h-4" />
                  View Code
                </a>
              )}
              {currentProject.links.live && (
                <a
                  href={currentProject.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-4 py-2 rounded transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              )}
              {currentProject.links.roblox && (
                <a
                  href={currentProject.links.roblox}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-black px-4 py-2 rounded transition-colors flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Play Game
                </a>
              )}
            </div>
          </div>

          {/* Navigation & Stats */}
          <div className="space-y-6">
            {/* Project Navigation */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Project {currentProjectIndex + 1} of {allProjects.length}
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={prevProject}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex gap-1">
                  {allProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentProjectIndex ? 'bg-orange-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextProject}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Category Stats */}
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg font-light text-white mb-1">{allProjects.length}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Total Projects</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-light text-white mb-1">{getProjectsByCategory('software').length}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Software Apps</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-light text-white mb-1">{getProjectsByCategory('roblox').length}</p>
                <p className="text-gray-400 text-xs uppercase tracking-wider">Games Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen bg-black text-gray-300 font-mono">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-white mb-2">Nathaniel Merck</h1>
            <p className="text-orange-400 text-lg mb-6">Full Stack Software Engineer | Game Developer</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Projects Carousel */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-light text-white mb-2">Featured Projects</h2>
            <p className="text-gray-400 text-sm">Browse through my portfolio</p>
          </div>

          {renderProjectCarousel()}
        </div>

        {/* Compact Testimonials Section */}
        <div id="testimonials-section" className="border-t border-gray-800 pt-8">
          <div className="mb-6">
            <h2 className="text-xl font-light text-white mb-2">Client Reviews</h2>
            <p className="text-gray-400 text-sm">Feedback from satisfied clients</p>
          </div>

          {/* Compact Testimonial Display */}
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Current Testimonial */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(currentTestimonial.rating)}
                  <span className="text-xs text-gray-400">
                    {currentTestimonial.rating}/5 stars
                  </span>
                </div>
                
                <blockquote className="text-gray-300 leading-relaxed mb-4 text-sm">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">{currentTestimonial.name}</p>
                    <p className="text-gray-400 text-xs">
                      {currentTestimonial.role}
                      {currentTestimonial.company && ` at ${currentTestimonial.company}`}
                    </p>
                    <p className="text-orange-400 text-xs">{currentTestimonial.project}</p>
                  </div>
                  
                  {/* Navigation */}
                  {testimonials.length > 1 && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <div className="flex gap-1">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTestimonialIndex(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              index === currentTestimonialIndex ? 'bg-orange-400' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={nextTestimonial}
                        className="text-gray-400 hover:text-orange-400 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="text-center">
                  <p className="text-lg font-light text-white mb-1">{testimonials.length}+</p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-light text-white mb-1">
                    {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}/5
                  </p>
                  <p className="text-gray-400 text-xs uppercase tracking-wider">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </main>
    </div>
  );
};

export default MinimalOrangePortfolio;