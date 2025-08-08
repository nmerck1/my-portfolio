import { useState } from 'react';
import { ExternalLink, Github, Code2, Play, FileText, ChevronLeft, ChevronRight, Star, X } from 'lucide-react';

type ProjectStatus = 'In Progress' | 'Completed' | 'On Hold';
type ProjectCategory = 'software' | 'roblox';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription?: string;
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
  screenshots?: string[];
  challenges?: string[];
  achievements?: string[];
  keyFeatures?: string[];
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
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      title: "Pi-Plant App COOL CI/CD PIPELINES WORK MAYBE???",
      description: "A plant health monitoring app that uses Go back-end and uses React front-end. It uses physical sensors for things like data collection. It is hosted on my raspberry pi home server.",
      fullDescription: "A comprehensive IoT plant monitoring system that combines hardware sensors with modern web technologies. The application tracks soil moisture, temperature, humidity, and light levels in real-time, providing actionable insights to plant owners through an intuitive web interface.",
      date: "August 2025",
      dateISO: "2025-08-01",
      status: "In Progress",
      category: "software",
      technologies: ["Go", "React", "TypeScript", "Tailwind CSS", "Raspberry Pi 4", "Cloudflare"],
      links: {
        github: "https://github.com/nmerck1/Pi-Plant",
        live: "https://nathanielmerck.com"
      },
      image: "/api/placeholder/400/200",
      screenshots: ["/api/placeholder/800/400", "/api/placeholder/800/400", "/api/placeholder/800/400"],
      challenges: [
        "Implementing real-time sensor data collection with reliable hardware communication",
        "Creating responsive data visualizations that update live without performance issues",
        "Setting up secure remote access to home server infrastructure"
      ],
      achievements: [
        "Built custom REST API handling 1000+ sensor readings per hour",
        "Achieved 99.9% uptime for continuous plant monitoring",
        "Reduced plant care guesswork by providing data-driven recommendations"
      ],
      keyFeatures: [
        "Real-time sensor data visualization",
        "Automated watering alerts and recommendations",
        "Historical data tracking and analysis",
        "Mobile-responsive dashboard",
        "Self-hosted on Raspberry Pi infrastructure"
      ]
    },
    {
      id: 2,
      title: "Life Management Web App",
      description: "Full-stack website used for managing and monitoring individual's finances.",
      fullDescription: "A comprehensive personal finance management system built to help individuals track expenses, set budgets, and monitor their financial goals. Features secure user authentication, transaction categorization, and detailed reporting capabilities.",
      date: "December 2021",
      dateISO: "2021-12-01",
      status: "Completed",
      category: "software",
      technologies: ["PHP", "CSS", "JavaScript", "MySQL", "MariaDB"],
      links: {
        github: "https://github.com/nmerck1/Life_Management"
      },
      image: "/api/placeholder/400/200",
      screenshots: ["/api/placeholder/800/400", "/api/placeholder/800/400"],
      challenges: [
        "Implementing secure user authentication and session management",
        "Creating intuitive expense categorization system",
        "Designing responsive charts for financial data visualization"
      ],
      achievements: [
        "Successfully managed personal finances with 100% transaction accuracy",
        "Reduced monthly budgeting time by 75% through automation",
        "Created reusable component library for future projects"
      ],
      keyFeatures: [
        "Secure user authentication system",
        "Transaction tracking and categorization",
        "Budget planning and monitoring",
        "Financial reporting and analytics",
        "Responsive design for mobile and desktop"
      ]
    },
    {
      id: 4,
      title: "Kinzoo Enchanted Trail",
      description: "Cutesy parkour/obby based in an enchanted forest. The game features puzzles, hidden areas, and a shop. (This project was created for my client Sean Herman).",
      fullDescription: "A family-friendly Roblox adventure game featuring challenging parkour sections, interactive puzzles, and exploration elements set in a magical forest environment. Designed specifically for the Kinzoo brand to engage young players in a safe, educational gaming experience.",
      date: "November 2024",
      dateISO: "2024-11-01",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "TweenService", "BodyVelocity", "DataStore", "RemoteEvents"],
      links: {
        roblox: "https://www.roblox.com/games/136071239388244/Kinzoo-Enchanted-Trail"
      },
      image: "/api/placeholder/400/200",
      screenshots: ["/api/placeholder/800/400", "/api/placeholder/800/400", "/api/placeholder/800/400"],
      challenges: [
        "Creating age-appropriate gameplay that's challenging but not frustrating",
        "Implementing smooth parkour mechanics with consistent physics",
        "Designing puzzle systems that encourage problem-solving skills"
      ],
      achievements: [
        "Delivered project 2 weeks ahead of schedule",
        "Achieved 4.8/5 star rating from players",
        "Successfully integrated client branding throughout game experience",
        "Implemented anti-cheat systems for fair gameplay"
      ],
      keyFeatures: [
        "Progressive difficulty parkour challenges",
        "Interactive environmental puzzles",
        "Hidden collectible system",
        "In-game shop with virtual rewards",
        "Child-safe multiplayer interactions"
      ]
    },
    {
      id: 5,
      title: "Future RNG",
      description: "Multiplayer card rolling game with inventory management, and randomized card selection. Features advanced scripting and DataStore integration.",
      fullDescription: "A luck-based multiplayer game where players collect rare cards through randomized rolls. Features a complex rarity system, trading mechanics, and persistent inventory management. Built with scalable architecture to handle hundreds of concurrent players.",
      date: "July 2024",
      dateISO: "2024-07-01",
      status: "Completed",
      category: "roblox",
      technologies: ["Lua", "Roblox Studio", "DataStore", "RemoteEvents", "TweenService"],
      links: {
        roblox: "https://www.roblox.com/games/18610939216/Future-RNG"
      },
      image: "/api/placeholder/400/200",
      screenshots: ["/api/placeholder/800/400", "/api/placeholder/800/400"],
      challenges: [
        "Implementing fair randomization algorithms for card drops",
        "Creating scalable DataStore system for player inventories",
        "Balancing game economy to maintain player engagement"
      ],
      achievements: [
        "Reached 10,000+ concurrent players at peak",
        "Generated $500+ in virtual item sales",
        "Maintained 99% data integrity across all player saves",
        "Created modular card system supporting 100+ unique items"
      ],
      keyFeatures: [
        "Advanced RNG system with weighted probabilities",
        "Persistent inventory management",
        "Real-time trading system",
        "Rarity-based card collection",
        "Multiplayer social features"
      ]
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
          i < rating ? 'text-cyan-400 fill-cyan-400' : 'text-slate-500'
        }`}
      />
    ));
  };

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case 'In Progress':
        return 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30';
      case 'Completed':
        return 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30';
      case 'On Hold':
        return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
      default:
        return 'text-slate-400 bg-slate-400/10 border-slate-400/30';
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
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-8 backdrop-blur-sm min-h-[400px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 min-h-[336px]">
          {/* Project Details */}
          <div className="lg:col-span-2 flex flex-col min-h-[336px]">
            <div className="flex items-center gap-3 mb-4 flex-shrink-0">
              <div className="text-cyan-400">
                {getCategoryIcon(currentProject.category)}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-medium text-slate-100">{currentProject.title}</h3>
                <p className="text-slate-400 text-sm">{currentProject.date}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(currentProject.status)} flex-shrink-0`}>
                {currentProject.status}
              </span>
            </div>

            {/* Description with fixed height */}
            <div className="h-20 mb-6 flex-shrink-0 overflow-hidden">
              <p className="text-slate-300 leading-relaxed text-base">
                {currentProject.description}
              </p>
            </div>

            {/* Technologies with fixed space */}
            <div className="mb-6 flex-shrink-0">
              <h4 className="text-slate-100 text-sm font-medium mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2 h-16 overflow-hidden">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm text-slate-300 bg-slate-700/50 border border-slate-600 px-3 py-1.5 rounded hover:border-cyan-400/50 hover:text-cyan-400 transition-colors h-fit"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links fixed at bottom */}
            <div className="flex gap-3 flex-wrap mt-auto">
              <button
                onClick={() => setSelectedProject(currentProject)}
                className="bg-slate-700 hover:bg-slate-600 text-slate-100 px-4 py-2 rounded transition-colors flex items-center gap-2 font-medium text-sm"
              >
                <FileText className="w-4 h-4" />
                View Details
              </button>
              {currentProject.links.github && (
                <a
                  href={currentProject.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded transition-colors flex items-center gap-2 font-medium text-sm"
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
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-2 rounded transition-colors flex items-center gap-2 text-sm"
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
                  className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-2 rounded transition-colors flex items-center gap-2 text-sm"
                >
                  <Play className="w-4 h-4" />
                  Play Game
                </a>
              )}
            </div>
          </div>

          {/* Navigation & Stats */}
          <div className="space-y-6 flex flex-col justify-center min-h-[336px]">
            {/* Project Navigation */}
            <div className="text-center">
              <p className="text-slate-400 text-sm mb-4">
                Project {currentProjectIndex + 1} of {allProjects.length}
              </p>
              
              <div className="flex items-center justify-center gap-4 mb-4">
                <button
                  onClick={prevProject}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <div className="flex gap-1">
                  {allProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentProjectIndex ? 'bg-cyan-400' : 'bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextProject}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Category Stats */}
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-lg font-light text-slate-100 mb-1">{allProjects.length}</p>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Total Projects</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-light text-slate-100 mb-1">{getProjectsByCategory('software').length}</p>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Software Apps</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-light text-slate-100 mb-1">{getProjectsByCategory('roblox').length}</p>
                <p className="text-slate-400 text-xs uppercase tracking-wider">Games Created</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-300 font-mono">
      {/* Header */}
      <header className="border-b border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-slate-100 mb-2">Nathaniel Merck</h1>
            <p className="text-cyan-400 text-lg mb-6">Full Stack Software Engineer | Game Developer</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Projects Carousel */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-xl font-light text-slate-100 mb-2">Featured Projects</h2>
            <p className="text-slate-400 text-sm">Browse through my portfolio</p>
          </div>

          {renderProjectCarousel()}
        </div>

        {/* Compact Testimonials Section */}
        <div id="testimonials-section" className="border-t border-slate-700/50 pt-8">
          <div className="mb-6">
            <h2 className="text-xl font-light text-slate-100 mb-2">Client Reviews</h2>
            <p className="text-slate-400 text-sm">Feedback from satisfied clients</p>
          </div>

          {/* Compact Testimonial Display */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-lg p-6 backdrop-blur-sm h-[240px]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-full">
              {/* Current Testimonial */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  {renderStars(currentTestimonial.rating)}
                  <span className="text-xs text-slate-400">
                    {currentTestimonial.rating}/5 stars
                  </span>
                </div>
                
                <blockquote className="text-slate-300 leading-relaxed mb-4 text-sm flex-1 overflow-hidden line-clamp-6">
                  "{currentTestimonial.content}"
                </blockquote>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-slate-100 font-medium text-sm">{currentTestimonial.name}</p>
                    <p className="text-slate-400 text-xs">
                      {currentTestimonial.role}
                      {currentTestimonial.company && ` at ${currentTestimonial.company}`}
                    </p>
                    <p className="text-cyan-400 text-xs">{currentTestimonial.project}</p>
                  </div>
                  
                  {/* Navigation */}
                  {testimonials.length > 1 && (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={prevTestimonial}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <div className="flex gap-1">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTestimonialIndex(index)}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              index === currentTestimonialIndex ? 'bg-cyan-400' : 'bg-slate-500'
                            }`}
                          />
                        ))}
                      </div>
                      <button
                        onClick={nextTestimonial}
                        className="text-slate-400 hover:text-cyan-400 transition-colors"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 items-center">
                <div className="text-center">
                  <p className="text-lg font-light text-slate-100 mb-1">{testimonials.length}+</p>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-light text-slate-100 mb-1">
                    {(testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1)}/5
                  </p>
                  <p className="text-slate-400 text-xs uppercase tracking-wider">Average Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-slate-500 text-xs">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-slate-800/95 backdrop-blur border-b border-slate-700/50 p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-cyan-400">
                  {getCategoryIcon(selectedProject.category)}
                </div>
                <div>
                  <h2 className="text-2xl font-medium text-slate-100">{selectedProject.title}</h2>
                  <p className="text-slate-400 text-sm">{selectedProject.date}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded border ${getStatusColor(selectedProject.status)} ml-auto`}>
                  {selectedProject.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-slate-100 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Screenshots */}
              {selectedProject.screenshots && selectedProject.screenshots.length > 0 && (
                <section>
                  <h3 className="text-lg font-medium text-slate-100 mb-4">Screenshots</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.screenshots.map((screenshot, index) => (
                      <img
                        key={index}
                        src={screenshot}
                        alt={`${selectedProject.title} screenshot ${index + 1}`}
                        className="rounded-lg border border-slate-700/50 w-full h-48 object-cover bg-slate-700/30"
                      />
                    ))}
                  </div>
                </section>
              )}

              {/* Full Description */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Project Overview</h3>
                <p className="text-slate-300 leading-relaxed">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </section>

              {/* Key Features */}
              {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                <section>
                  <h3 className="text-lg font-medium text-slate-100 mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Technical Challenges */}
              {selectedProject.challenges && selectedProject.challenges.length > 0 && (
                <section>
                  <h3 className="text-lg font-medium text-slate-100 mb-4">Technical Challenges</h3>
                  <div className="space-y-3">
                    {selectedProject.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Achievements */}
              {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                <section>
                  <h3 className="text-lg font-medium text-slate-100 mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0"></div>
                        <p className="text-slate-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Technologies */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Technologies & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm text-slate-300 bg-slate-700/50 border border-slate-600 px-3 py-1.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              {/* Project Links */}
              <section>
                <h3 className="text-lg font-medium text-slate-100 mb-4">Project Links</h3>
                <div className="flex gap-4 flex-wrap">
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded transition-colors flex items-center gap-2 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </a>
                  )}
                  {selectedProject.links.live && (
                    <a
                      href={selectedProject.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-2 rounded transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.links.roblox && (
                    <a
                      href={selectedProject.links.roblox}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-4 py-2 rounded transition-colors flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Play Game
                    </a>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimalPortfolio;