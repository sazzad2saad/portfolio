import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
        title: "Personal Portfolio Website",
        description: "A responsive personal portfolio built with React and Tailwind CSS.",
        tech: ["React", "TypeScript", "Tailwind CSS"],
        link: "#"
    },
    {
        title: "Student Management System (C)",
        description: "A command-line program to manage student records using file handling.",
        tech: ["C", "File Handling"],
        link: "#"
    },
    {
        title: "Simple Web Tools",
        description: "Small frontend tools like calculators, forms, and landing pages.",
        tech: ["HTML", "CSS", "JavaScript"],
        link: "#"
    }
  ];


  const skills = [
    { category: "Frontend", items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Programming", items: ["C/C++", "Python", "Basic Data Structures", "Problem Solving"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma (Basic)"] },
    { category: "Soft Skills", items: ["Communication", "Time Management", "Learning Fast"] }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-700">
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Sazzadur Rahman Saad
            </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Junior Web Developer | React & JavaScript
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            I build clean, responsive websites and web applications using modern tools.
            I'm focused on writing simple, maintainable code and delivering work on time.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
              >
                Contact Me
              </button>
            </div>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="mt-16 animate-bounce inline-block"
          >
            <ChevronDown size={32} className="text-cyan-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Profile Photo */}
              <div className="flex justify-center md:justify-start mb-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
                    <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img
                        src="https://i.ibb.co.com/fYNp1KMn/Chat-GPT-Image-Dec-27-2025-12-46-13-AM.png"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👋</span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate junior web developer who enjoys turning ideas into real, usable websites.
                I focus on clean design, responsive layouts, and writing understandable code.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I’m continuously learning modern web technologies like React, Tailwind CSS, and TypeScript.
                I enjoy solving problems, improving my skills every day, and working closely with clients
                to deliver exactly what they need.
              </p>

              <div className="flex gap-6 pt-4">
                <a href="https://github.com/sazzad2saad" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Github size={28} />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Linkedin size={28} />
                </a>
                <a href="mailto:sazzad2saad@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail size={28} />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-cyan-500/30">
              <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▹</span>
                    <span>Based in Dhaka, Bangladesh</span>
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▹</span>
                    <span>Junior / Entry-level Web Developer</span>
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▹</span>
                    <span>Focused on React & modern frontend</span>
                </li>
                <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">▹</span>
                    <span>Available for freelance & remote work</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50 transition-all hover:transform hover:scale-105"
              >
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700"
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div>
                <label className="block text-left mb-2 text-gray-300">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-gray-300">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-left mb-2 text-gray-300">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Sazzadur Rahman Saad. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}