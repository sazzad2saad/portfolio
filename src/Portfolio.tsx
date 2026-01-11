import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // BUTTON STYLES (MATCHED)
  const baseBtn =
    "px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105";

  const primaryDark =
    "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/50 hover:shadow-blue-400/60";

  const primaryLight =
    "bg-[var(--accent)] text-white shadow-lg shadow-[rgba(107,142,107,0.4)]";

  const outlineDark =
    "border-2 border-blue-400 text-blue-300 hover:bg-blue-500/10";

  const outlineLight =
    "border-2 border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10";

  const projects = [
    {
      title: "Flavixor",
      description:
        "A modern, mobile-first restaurant website built with React, featuring a clean, responsive UI, Firebase authentication, and MongoDB backend, deployed on Render for production.",
      tech: ["React", "JavaScript", "Tailwind CSS", "Firebase", "MongoDB", "Render"],
      link: "https://flavixor.netlify.app/",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "A developer portfolio built with React and TypeScript, showcasing projects, skills, and contact information with dark/light mode support and responsive design.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://sazzad2saad.netlify.app/",
    },
    {
      title: "Invoice Generator",
      description:
        "A desktop Python app for generating professional PDF invoices with automatic calculations, invoice numbering, and a clean layout. Built with Tkinter for GUI and ReportLab for PDF creation, packaged as a Windows executable.",
      tech: ["Python", "Tkinter", "ReportLab", "PyInstaller"],
      link: "https://github.com/sazzad2saad/pdf-generator-app.git",
    },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS"],
    },
    {
      category: "Programming",
      items: ["Python (OOP)", "C", "C++", "Basic Data Structures"],
    },
    {
      category: "Tools & Frameworks",
      items: ["Git", "GitHub", "VS Code", "MongoDB", "Firebase", "PyInstaller", "ReportLab", "Render"],
    },
    {
      category: "Soft Skills",
      items: ["Communication", "Time Management", "Fast Learner", "Problem Solving"],
    },
  ];


  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen transition-colors duration-300">
      {/* NAVBAR */}
      <header className="fixed top-0 w-full z-50 bg-[var(--bg)]/80 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Saad.dev</h1>

          <div className="flex items-center gap-6">
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>

            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-full border border-white/20"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-40 pb-32 px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Hi, I’m <span className="text-[var(--accent)]">Saad</span>
        </h2>

        <p className="max-w-xl mx-auto text-[var(--text-muted)] mb-10">
          Junior Web Developer from Dhaka, building clean & modern web interfaces.
        </p>

        <div className="flex justify-center gap-6">
          <button
            onClick={() => scrollToSection("projects")}
            className={`${baseBtn} ${dark ? primaryDark : primaryLight}`}
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className={`${baseBtn} ${dark ? outlineDark : outlineLight}`}
          >
            Contact Me
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-56 h-56 rounded-full bg-[var(--accent)] p-1">
              <img
                src="https://i.ibb.co.com/fYNp1KMn/Chat-GPT-Image-Dec-27-2025-12-46-13-AM.png"
                alt="Saad"
                className="w-full h-full rounded-full object-cover bg-[var(--bg-card)]"
              />
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-bold mb-6">About Me</h3>
            <p className="text-[var(--text-muted)] mb-4">
              I'm a passionate junior web developer who enjoys turning ideas into real, usable websites. I focus on clean design, responsive layouts, and writing understandable code.
            </p>
            <p className="text-[var(--text-muted)] mb-6">
              I’m continuously learning modern web technologies like React, Tailwind CSS, and TypeScript. I enjoy solving problems, improving my skills every day, and working closely with clients to deliver exactly what they need.
            </p>

            <div className="flex gap-6">
              <a href="https://github.com/sazzad2saad/" target="_blank">
                <Github />
              </a>
              <a href="https://linkedin.com" target="_blank">
                <Linkedin />
              </a>
              <a href="mailto:sazzad2saad@gmail.com" target="_blank">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-4 bg-[var(--bg-alt)]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Projects</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a href={project.link} target="_blank" key={index}>
                <div
                  className={`rounded-xl p-6 transition-all transform hover:scale-105 border backdrop-blur-md flex flex-col h-full ${
                    dark
                      ? "bg-slate-800/60 border-slate-700 hover:shadow-lg hover:shadow-cyan-500/40"
                      : "bg-[#f7f9f0]/50 border-[#d3e1c0] hover:bg-[#f0f4e8]/60 hover:shadow-lg hover:shadow-[#b5d48c]/30"
                  }`}
                >
                  <h3
                    className={`text-2xl font-bold mb-3 ${
                      dark ? "text-white" : "text-black"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mb-4 leading-relaxed text-left flex-1 ${
                      dark ? "text-gray-400" : "text-gray-800"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          dark
                            ? "bg-cyan-500/20 text-cyan-400"
                            : "bg-[#b5d48c] text-[#386641]"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-4 bg-[var(--bg-alt)]">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Skills</h3>

          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className={`rounded-xl p-6 transition-all transform hover:scale-105 border backdrop-blur-md ${
                  dark
                    ? "bg-slate-800/60 border-slate-700 hover:shadow-lg hover:shadow-cyan-500/40"
                    : "bg-[#f7f9f0]/50 border-[#d3e1c0] hover:bg-[#f0f4e8]/60 hover:shadow-lg hover:shadow-[#b5d48c]/30"
                }`}
              >
                <h3
                  className={`text-xl font-bold mb-4 ${
                    dark ? "text-cyan-400" : "text-black"
                  }`}
                >
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, i) => (
                    <li
                      key={i}
                      className={`flex items-center ${
                        dark ? "text-gray-300" : "text-gray-800"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mr-3 ${
                          dark ? "bg-cyan-400" : "bg-[#b5d48c]"
                        }`}
                      ></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Let’s Work Together</h3>

          <form className={`p-8 rounded-2xl border space-y-6 text-left transition-all backdrop-blur-md ${
              dark
                ? "bg-[var(--bg-card)] border-white/20"
                : "bg-white/30 border-gray-400"
            }`}
          >
            <input
              placeholder="Your Name"
              className={`w-full px-4 py-3 rounded-lg transition-all outline-none ${
                dark
                  ? "bg-[var(--bg-card)] border-gray-600 placeholder-gray-400 focus:border-[var(--accent)] focus:shadow-md focus:shadow-cyan-500/20 text-white"
                  : "bg-white/70 border-gray-500 placeholder-gray-700 focus:border-[var(--accent)] focus:shadow-md focus:shadow-[#b5d48c]/30 text-black"
              }`}
            />

            <input
              placeholder="Email"
              className={`w-full px-4 py-3 rounded-lg transition-all outline-none ${
                dark
                  ? "bg-[var(--bg-card)] border-gray-600 placeholder-gray-400 focus:border-[var(--accent)] focus:shadow-md focus:shadow-cyan-500/20 text-white"
                  : "bg-white/70 border-gray-500 placeholder-gray-700 focus:border-[var(--accent)] focus:shadow-md focus:shadow-[#b5d48c]/30 text-black"
              }`}
            />

            <textarea
              rows={5}
              placeholder="Message"
              className={`w-full px-4 py-3 rounded-lg transition-all outline-none resize-none ${
                dark
                  ? "bg-[var(--bg-card)] border-gray-600 placeholder-gray-400 focus:border-[var(--accent)] focus:shadow-md focus:shadow-cyan-500/20 text-white"
                  : "bg-white/70 border-gray-500 placeholder-gray-700 focus:border-[var(--accent)] focus:shadow-md focus:shadow-[#b5d48c]/30 text-black"
              }`}
            />


            <button
              type="submit"
              className={`w-full py-3 rounded-lg font-semibold ${
                dark ? primaryDark : primaryLight
              }`}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-[var(--text-muted)]">
        © {new Date().getFullYear()} Sazzadur Rahman Saad
      </footer>
    </div>
  );
}
