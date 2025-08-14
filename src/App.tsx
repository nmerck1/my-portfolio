import { useState } from 'react';
import { Github, Code2, Play, ChevronLeft, ChevronRight, Star, X, User, Briefcase, Building } from 'lucide-react';

const MinimalPortfolio = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [projectIndices, setProjectIndices] = useState({ personal: 0, freelance: 0, professional: 0 });
  const [testimonialIndices, setTestimonialIndices] = useState({ personal: 0, freelance: 0, professional: 0 });
  const [selectedProject, setSelectedProject] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Sean Herman",
      role: "Upwork Client", 
      company: "Kinzoo Inc.",
      content: "Nathaniel was a pleasure to work with. Very patient with me as we built a Roblox Obby where I had a lot of questions. He took feedback and made changes quickly...",
      rating: 5,
      project: "Kinzoo Enchanted Trail - Roblox Game",
      date: "Oct 2024 - Feb 2025",
      category: "freelance"
    },
    {
      id: 2,
      name: "Michael Dezayas",
      role: "Upwork Client",
      content: "This guy is great, he's very polite and patient when it comes to sorting things out during projects. I would most definitely recommended him to others...",
      rating: 5,
      project: "Whispering Pines - Roblox Game", 
      date: "Jan 2024 - Present",
      category: "freelance"
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
      category: "freelance"
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
      category: "freelance"
    },
    {
      id: 5,
      name: "Marie Whelan",
      role: "Friend & Beta Tester",
      content: "The LMS app has helped me understand my spending better and be able to set clear budgets.",
      rating: 5,
      project: "LMS App",
      date: "Dec 2021",
      category: "personal"
    },
    {
      id: 6,
      name: "Michael Gardner",
      role: "Principal Software Engineer",
      company: "OnGen", 
      content: "Nathaniel is a great software engineer. He thinks outside the box when it counts and gets important tasks done in a timely manner. I can count on him to solve tough problems...",
      rating: 5,
      project: "LIS, MyHealthPro, Outreach Portal",
      date: "Jan 2023",
      category: "professional"
    }
  ];

  const allProjects = [
    {
      id: 1,
      title: "Pi-Plant App",
      description: "IoT plant monitoring with Go backend, React frontend, and Raspberry Pi sensors.",
      fullDescription: "A comprehensive IoT plant monitoring system that combines hardware sensors with modern web technologies. The application tracks soil moisture, temperature, humidity, and light levels in real-time, providing actionable insights to plant owners through an intuitive web interface.",
      date: "Aug 2025",
      status: "In Progress",
      category: "personal",
      type: "software",
      technologies: ["Go", "React", "TypeScript", "Tailwind CSS", "Raspberry Pi 4", "Cloudflare"],
      links: {
        github: "https://github.com/nmerck1/Pi-Plant",
        live: "https://nathanielmerck.com"
      },
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
      title: "LMS App",
      description: "Full-stack personal finance tracker with budgeting and reporting.",
      fullDescription: "The Life Management System (LMS) is a comprehensive personal finance management system built to help individuals track expenses, set budgets, and monitor their financial goals. Features secure user authentication, transaction categorization, and detailed reporting capabilities.",
      date: "Dec 2021",
      status: "Completed",
      category: "personal",
      type: "software",
      technologies: ["PHP", "CSS", "JavaScript", "MySQL", "MariaDB"],
      links: {
        github: "https://github.com/nmerck1/Life_Management"
      },
      keyFeatures: [
        "Secure user authentication system",
        "Transaction tracking and categorization",
        "Budget planning and monitoring",
        "Financial reporting and analytics",
        "Responsive design for mobile and desktop"
      ]
    },
    {
      id: 3,
      title: "Future RNG",
      description: "Multiplayer Roblox card game with inventory system and trading.",
      fullDescription: "A luck-based multiplayer game where players collect rare cards through randomized rolls. Features a complex rarity system, trading mechanics, and persistent inventory management. Built with scalable architecture to handle hundreds of concurrent players.",
      date: "Jul 2024",
      status: "Completed",
      category: "personal",
      type: "roblox",
      technologies: ["Lua", "Roblox Studio", "DataStore", "RemoteEvents", "TweenService"],
      links: {
        roblox: "https://www.roblox.com/games/18610939216/Future-RNG"
      },
      keyFeatures: [
        "Advanced RNG system with weighted probabilities",
        "Persistent inventory management",
        "Real-time trading system",
        "Rarity-based card collection",
        "Multiplayer social features"
      ]
    },
    {
      id: 4,
      title: "Kinzoo Enchanted Trail",
      description: "Family-friendly Roblox parkour game with puzzles and exploration.",
      fullDescription: "A family-friendly Roblox adventure game featuring challenging parkour sections, interactive puzzles, and exploration elements set in a magical forest environment. Designed specifically for the Kinzoo brand to engage young players in a safe, educational gaming experience.",
      date: "Nov 2024",
      status: "Completed",
      category: "freelance",
      type: "roblox",
      technologies: ["Lua", "Roblox Studio", "TweenService", "BodyVelocity", "DataStore", "RemoteEvents"],
      links: {
        roblox: "https://www.roblox.com/games/136071239388244/Kinzoo-Enchanted-Trail"
      },
      keyFeatures: [
        "Progressive difficulty parkour challenges",
        "Interactive environmental puzzles",
        "Hidden collectible system",
        "In-game shop with virtual rewards"
      ]
    },
    {
      id: 5,
      title: "MyHealthPro",
      description: "A web app for receiving COVID test kit results.",
      fullDescription: "A web app for registering a test kit after purchase. Users can get their results within two days after sending in their test kit.",
      date: "Feb 2022",
      status: "Completed",
      category: "professional",
      type: "software",
      technologies: ["C#", "Visual Studio", ".NET 6", "APIs", "MySQL"],
      links: {},
      keyFeatures: [
        "Login, Register, Actions, View Results, etc."
      ]
    }
  ];

  const getProjectsByCategory = (category) => {
    return allProjects.filter(project => project.category === category);
  };

  const getTestimonialsByCategory = (category) => {
    return testimonials.filter(testimonial => testimonial.category === category);
  };

  const nextProject = (category) => {
    const projects = getProjectsByCategory(category);
    if (projects.length > 0) {
      setProjectIndices(prev => ({
        ...prev,
        [category]: (prev[category] + 1) % projects.length
      }));
    }
  };

  const prevProject = (category) => {
    const projects = getProjectsByCategory(category);
    if (projects.length > 0) {
      setProjectIndices(prev => ({
        ...prev,
        [category]: (prev[category] - 1 + projects.length) % projects.length
      }));
    }
  };

  const nextTestimonial = (category) => {
    const testimonials = getTestimonialsByCategory(category);
    if (testimonials.length > 0) {
      setTestimonialIndices(prev => ({
        ...prev,
        [category]: (prev[category] + 1) % testimonials.length
      }));
    }
  };

  const prevTestimonial = (category) => {
    const testimonials = getTestimonialsByCategory(category);
    if (testimonials.length > 0) {
      setTestimonialIndices(prev => ({
        ...prev,
        [category]: (prev[category] - 1 + testimonials.length) % testimonials.length
      }));
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < rating ? 'text-amber-400 fill-amber-400' : 'text-neutral-600'
        }`}
      />
    ));
  };

  const getStatusColor = (status) => {
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

  const getTypeIcon = (type) => {
    return type === 'software' ? <Code2 className="w-4 h-4" /> : <Play className="w-4 h-4" />;
  };

  const renderProjectCarousel = (category) => {
    const projects = getProjectsByCategory(category);
    if (projects.length === 0) {
      return (
        <div className="text-neutral-500 text-sm italic text-center py-8">
          No {category} projects available...
        </div>
      );
    }

    const currentIndex = projectIndices[category];
    const currentProject = projects[currentIndex];
    
    return (
      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              <div className="text-amber-400 flex-shrink-0">
                {getTypeIcon(currentProject.type)}
              </div>
              <h3 className="text-white text-sm sm:text-base font-medium break-words min-w-0">{currentProject.title}</h3>
              <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${getStatusColor(currentProject.status)}`}>
                {currentProject.status.toLowerCase()}
              </span>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <p className="text-neutral-500 text-xs">{currentProject.date}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => prevProject(category)}
                  className="text-neutral-600 hover:text-amber-400 transition-colors p-1"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-neutral-600 text-xs whitespace-nowrap">
                  {currentIndex + 1}/{projects.length}
                </span>
                <button
                  onClick={() => nextProject(category)}
                  className="text-neutral-600 hover:text-amber-400 transition-colors p-1"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="min-h-[3rem]">
            <p className="text-neutral-400 leading-relaxed text-xs sm:text-sm">
              {currentProject.description}
            </p>
          </div>

          <div className="text-xs text-neutral-500 leading-relaxed">
            <span className="break-words">
              {currentProject.technologies.slice(0, 3).map((tech, i) => (
                <span key={tech}>
                  {tech}{i < Math.min(currentProject.technologies.length, 3) - 1 ? ' • ' : ''}
                </span>
              ))}
              {currentProject.technologies.length > 3 && (
                <span> • +{currentProject.technologies.length - 3}</span>
              )}
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 text-sm pt-1">
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
      </div>
    );
  };

  const renderTestimonialCarousel = (category) => {
    const categoryTestimonials = getTestimonialsByCategory(category);
    if (categoryTestimonials.length === 0) {
      return (
        <div className="text-neutral-500 text-sm italic text-center py-4">
          No testimonials yet for {category} projects...
        </div>
      );
    }

    const currentIndex = testimonialIndices[category];
    const currentTestimonial = categoryTestimonials[currentIndex];

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {renderStars(currentTestimonial.rating)}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => prevTestimonial(category)}
              className="text-neutral-600 hover:text-amber-400 transition-colors p-1"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-neutral-600 text-xs whitespace-nowrap">
              {currentIndex + 1}/{categoryTestimonials.length}
            </span>
            <button
              onClick={() => nextTestimonial(category)}
              className="text-neutral-600 hover:text-amber-400 transition-colors p-1"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="min-h-[2.5rem]">
          <p className="text-neutral-300 leading-relaxed text-xs sm:text-sm">
            "{currentTestimonial.content}"
          </p>
        </div>

        <div className="pt-1">
          <p className="text-white text-sm font-medium">{currentTestimonial.name}</p>
          <p className="text-neutral-500 text-xs break-words">
            {currentTestimonial.role}
            {currentTestimonial.company && ` • ${currentTestimonial.company}`}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-300 font-mono">
      <header className="py-6 sm:py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <h1 className="text-xl sm:text-2xl text-white mb-2">nathaniel merck</h1>
              <p className="text-neutral-500 text-sm">software engineer</p>
            </div>
            <div className="sm:text-right space-y-1 text-xs text-neutral-600">
              <p>professional for 5+ years</p>
              <p className="break-all sm:break-normal">nathanielmerck at yahoo.com</p>
              <p>SC, USA</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6">
        <section className="mb-6">
          <div className="flex items-center gap-4 sm:gap-6 mb-6 border-b border-neutral-800 overflow-x-auto pb-0">
            <button
              onClick={() => setActiveTab('personal')}
              className={`flex items-center gap-2 pb-3 text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === 'personal'
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <User className="w-4 h-4" />
              personal
            </button>
            <button
              onClick={() => setActiveTab('freelance')}
              className={`flex items-center gap-2 pb-3 text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === 'freelance'
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              freelance
            </button>
            <button
              onClick={() => setActiveTab('professional')}
              className={`flex items-center gap-2 pb-3 text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
                activeTab === 'professional'
                  ? 'text-amber-400 border-b-2 border-amber-400'
                  : 'text-neutral-500 hover:text-neutral-300'
              }`}
            >
              <Building className="w-4 h-4" />
              professional
            </button>
          </div>

          {renderProjectCarousel(activeTab)}
        </section>

        <section className="mb-8">
          <h2 className="text-neutral-400 text-xs uppercase tracking-widest mb-4">
            {activeTab} feedback
          </h2>
          {renderTestimonialCarousel(activeTab)}
        </section>
      </main>

      <footer className="pb-6 sm:pb-8 text-center space-y-4 px-4">
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/nmerck1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-amber-400 transition-colors p-2"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/nathaniel-merck-8145b5ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-amber-400 transition-colors p-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0160f990e9ef01cff0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-amber-400 transition-colors p-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3.012-2.439-5.463-5.439-5.463z"/>
            </svg>
          </a>
        </div>
        <p className="text-neutral-700 text-xs">react • tailwind</p>
      </footer>

      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="bg-neutral-800/95 backdrop-blur-sm rounded-lg w-full max-w-2xl max-h-[95vh] overflow-y-auto">
            <div className="sticky top-0 bg-neutral-800/95 backdrop-blur p-4 sm:p-6 flex items-center justify-between border-b border-neutral-800">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                <div className="text-amber-400 flex-shrink-0">
                  {getTypeIcon(selectedProject.type)}
                </div>
                <h2 className="text-base sm:text-lg text-white truncate">{selectedProject.title}</h2>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-neutral-500 hover:text-white transition-colors ml-4 flex-shrink-0 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 sm:p-6 space-y-6">
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
                      <div key={index} className="text-neutral-400">• {feature}</div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-white text-sm mb-3">tech</h3>
                <div className="text-neutral-400 text-sm break-words">
                  {selectedProject.technologies.map((tech, i) => (
                    <span key={tech}>
                      {tech}{i < selectedProject.technologies.length - 1 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm pt-2">
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