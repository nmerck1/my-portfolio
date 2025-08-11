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
      title: "Pi-Plant App",
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
          i < rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-600'
        }`}
      />
    ));
  };

  const getStatusColor = (status: ProjectStatus): string => {
    switch (status) {
      case 'In Progress':
        return 'text-amber-400 bg-amber-900/20';
      case 'Completed':
        return 'text-emerald-400 bg-emerald-900/20';
      case 'On Hold':
        return 'text-neutral-400 bg-neutral-800/50';
      default:
        return 'text-neutral-400 bg-neutral-800/50';
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
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="text-amber-400">
              {getCategoryIcon(currentProject.category)}
            </div>
            <h3 className="text-white text-lg">{currentProject.title}</h3>
            <span className={`text-xs px-2 py-1 rounded ${getStatusColor(currentProject.status)}`}>
              {currentProject.status.toLowerCase()}
            </span>
          </div>

          <div className="h-20 overflow-hidden">
            <p className="text-neutral-400 leading-relaxed">
              {currentProject.description}
            </p>
          </div>

          <div className="text-xs text-neutral-500 space-x-2">
            {currentProject.technologies.slice(0, 4).map((tech, i) => (
              <span key={tech}>
                {tech}{i < Math.min(currentProject.technologies.length, 4) - 1 ? ' •' : ''}
              </span>
            ))}
            {currentProject.technologies.length > 4 && (
              <span> • +{currentProject.technologies.length - 4} more</span>
            )}
          </div>

          <div className="flex gap-6 text-sm pt-2">
            <button
              onClick={() => setSelectedProject(currentProject)}
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              details
            </button>
            {currentProject.links.github && (
              <a
                href={currentProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                code
              </a>
            )}
            {currentProject.links.live && (
              <a
                href={currentProject.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                live
              </a>
            )}
            {currentProject.links.roblox && (
              <a
                href={currentProject.links.roblox}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                play
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-6 border-t border-neutral-800">
          <div className="text-left">
            <p className="text-neutral-500 text-xs">{currentProject.date}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={prevProject}
              className="text-neutral-600 hover:text-amber-400 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-neutral-600 text-xs">
              {currentProjectIndex + 1}/{allProjects.length}
            </span>
            <button
              onClick={nextProject}
              className="text-neutral-600 hover:text-amber-400 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-300 font-mono">
      {/* Header */}
      <header className="py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h1 className="text-2xl text-white mb-2">nathaniel merck</h1>
          <p className="text-neutral-500 text-sm">software engineer</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6">
        {/* Projects */}
        <section className="mb-20">
          <h2 className="text-neutral-400 text-xs uppercase tracking-widest mb-8">work</h2>
          {renderProjectCarousel()}
        </section>

        {/* Testimonials */}
        <section className="mb-20">
          <h2 className="text-neutral-400 text-xs uppercase tracking-widest mb-8">feedback</h2>
          
          <div className="space-y-6">
            <div className="flex items-center gap-1 mb-4">
              {renderStars(currentTestimonial.rating)}
            </div>
            
            <div className="h-32 overflow-hidden">
              <p className="text-neutral-300 leading-relaxed">
                "{currentTestimonial.content}"
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
              <div>
                <p className="text-white text-sm">{currentTestimonial.name}</p>
                <p className="text-neutral-500 text-xs">
                  {currentTestimonial.role}
                  {currentTestimonial.company && ` • ${currentTestimonial.company}`}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="text-neutral-600 hover:text-amber-400 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-neutral-600 text-xs">
                  {currentTestimonialIndex + 1}/{testimonials.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="text-neutral-600 hover:text-amber-400 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pb-12 text-center">
        <p className="text-neutral-700 text-xs">
          react • tailwind
        </p>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="bg-neutral-800/95 backdrop-blur-sm rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-neutral-800/95 backdrop-blur p-6 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-3">
                <div className="text-amber-400">
                  {getCategoryIcon(selectedProject.category)}
                </div>
                <h2 className="text-lg text-white">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-white text-sm mb-3">overview</h3>
                <p className="text-neutral-400 leading-relaxed text-sm">
                  {selectedProject.fullDescription || selectedProject.description}
                </p>
              </div>

              {selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0 && (
                <div>
                  <h3 className="text-white text-sm mb-3">features</h3>
                  <div className="space-y-1 text-sm">
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <div key={index} className="text-neutral-400">
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-white text-sm mb-3">tech</h3>
                <div className="text-neutral-400 text-sm">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={tech}>
                      {tech}{i < selectedProject.technologies.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-6 text-sm pt-2">
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    view code
                  </a>
                )}
                {selectedProject.links.live && (
                  <a
                    href={selectedProject.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    live demo
                  </a>
                )}
                {selectedProject.links.roblox && (
                  <a
                    href={selectedProject.links.roblox}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    play game
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinimalPortfolio;