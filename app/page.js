"use client";
import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Briefcase, GraduationCap, Award } from 'lucide-react';

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si"
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [isZoomed, setIsZoomed] = useState(false)

  // GitHub Profile Link - YAHAN APNA GITHUB USERNAME DAALO
  const githubUsername = 'talah-cpu'
  const linkedinUrl = 'https://www.linkedin.com/in/zain-bahi-60a69539a';
  const emailAddress = 'talhabahi373@gmail.com';

  // WhatsApp Number - YAHAN APNA WHATSAPP NUMBER DAALO (country code ke saath)
  // Example: '923001234567' for Pakistan (+92 300 1234567)
  const whatsappNumber = '923417584765';

  const scrollToSection = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      // WhatsApp message bhejne ke liye
      const whatsappMessage = `New Portfolio Message!%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      // WhatsApp open karo
      window.open(whatsappUrl, '_blank');

      setFormStatus('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 5000);
    } else {
      setFormStatus('Please fill all fields!');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const projects = [
    {
      title: 'Calculator',
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://your-calculator-demo.vercel.app', // YAHAN APNA LIVE PROJECT LINK
      codeLink: 'https://github.com/talah-cpu/calculator', // YAHAN APNA GITHUB REPO LINK
      bgImage: '/calculator.jpeg'
    },
    {
      title: 'Password Manager',
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://your-password-manager.vercel.app',
      codeLink: 'https://github.com/talah-cpu/password-manager',
      bgImage: '/password.jpeg'
    },
    {
      title: 'Currency Converter',
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://your-currency-converter.vercel.app',
      codeLink: 'https://github.com/talah-cpu/currency-convertor',
      bgImage: '/currency.jpeg'
    },
    {
      title: 'Portfolio',
      tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
      liveLink: 'https://your-portfolio.netlify.app',
      codeLink: 'https://github.com/talah-cpu/portfolio',
      bgImage: '/portfolio.jpeg'
    }
  ];

  
  const resumeSkills = [
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
      description: "Semantic markup, accessibility standards, and modern HTML5 features."
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
      description: "Responsive design, Flexbox, and Grid layouts."
    },
    {
      name: "JavaScript",
      icon: FaJs,
      color: "text-yellow-400",
      description: "ES6+, DOM manipulation, and logic building."
    },
    {
      name: "React",
      icon: FaReact,
      color: "text-cyan-400",
      description: "Component-based UI development."
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-black dark:text-white",
      description: "Server-side rendering and routing."
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-sky-400",
      description: "Utility-first CSS framework."
    }
  ];


  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'] },
    { category: 'Tools', items: ['Git', 'Github', 'Figma'] }
  ];

  const experience = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: '2024 - Present',
      description: 'Lead development of enterprise web applications'
    },
    {
      role: 'Frontend Developer',
      company: 'Digital Agency',
      period: '2024 - 2026',
      description: 'Built responsive websites for diverse clients'
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-linear-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'resume', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === item ? 'text-purple-400' : ''
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
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'resume', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-500/20 rounded-md"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="text-center max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full">
              <div>
                <div
                  className="w-32 h-32 rounded-full bg-linear-to-r from-pink-500 to-purple-500 p-1 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform mx-auto"
                  onClick={() => setIsZoomed(true)}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <img
                      src="/image.jpg"
                      alt="photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Zoom Modal */}
                {isZoomed && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
                    onClick={() => setIsZoomed(false)}
                  >
                    <button
                      className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors"
                      onClick={() => setIsZoomed(false)}
                    >
                      <X size={32} />
                    </button>

                    <img
                      src="/image.jpg"
                      alt="photo"
                      className="max-w-full max-h-full object-contain rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-5xl font-bold mb-4 bg-linear-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            TALHA JAHAGIR
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Frontend Developer | Problem Solver
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-all"
            >
              <Github size={24} />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-all"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${emailAddress}`}
              className="p-3 bg-purple-500/20 rounded-full hover:bg-purple-500/30 transition-all"
            >
              <Mail size={24} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 bg-linear-to-r from-purple-500 to-pink-600 rounded-full hover:scale-105 transition-transform font-semibold"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
            <p className="text-lg text-gray-300 mb-6">
              I'm a passionate Frontend Web Developer who loves crafting beautiful, responsive, and user-friendly websites. With expertise in modern web technologies like HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS, I transform ideas into interactive digital experiences.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              My journey in web development started with a curiosity for design and code, and has evolved into a commitment to building pixel-perfect interfaces that users love. I believe in writing clean, maintainable code and staying updated with the latest industry trends. Let's build something amazing together!
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillSet, idx) => (
                <div key={idx} className="bg-slate-700/30 rounded-xl p-4">
                  <h3 className="text-purple-400 font-semibold mb-3">{skillSet.category}</h3>
                  <ul className="space-y-2">
                    {skillSet.items.map((skill, i) => (
                      <li key={i} className="text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-center mb-4">Resume</h2>
            <p className="text-center text-gray-400 text-lg">Here are some of my skills</p>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-semibold text-purple-400">{exp.role}</h4>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                  <p className="text-gray-400">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section - 6 cards with icons, descriptions, hover effects */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-purple-400" size={28} />
              <h3 className="text-2xl font-bold">Skills</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resumeSkills.map((skill, idx) => {
                const Icon = skill.icon; // component assign karo

                return (
                  <div
                    key={idx}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 group cursor-pointer"
                  >
                    {/* Icon Circle */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-linear-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/30">
                      <Icon className={`text-4xl ${skill.color}`} />
                    </div>

                    <h4 className="text-xl font-bold text-center mb-4 group-hover:text-purple-400 transition-colors">
                      {skill.name}
                    </h4>

                    <p className="text-gray-400 text-center text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section - View Project aur Get Code buttons ke saath */}
      <section id="projects" className="flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all hover:scale-105 group"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <Code className="text-purple-400" size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-500/30 backdrop-blur-sm rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons at bottom */}
                  <div className="mt-auto flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/40 rounded-lg transition-all text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                    
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/40 rounded-lg transition-all text-sm font-medium"
                    >
                      <Github size={16} />
                      Get Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Mail className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-400">{emailAddress}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Phone className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-400">+92 341 7584765</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <MapPin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="mb-4">
                <label className="block mb-2 font-medium">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none text-white"
                  placeholder="Your message..."
                />
              </div>
              {formStatus && (
                <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
                  {formStatus}
                </div>
              )}
              <button
                onClick={handleSubmit}
                className="w-full py-3 bg-linear-to-r from-purple-500 to-pink-600 rounded-lg hover:scale-105 transition-transform font-semibold"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}