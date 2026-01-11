import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Calendar, Code, Brain, Award, Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Studies from './components/Studies';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início', icon: Menu },
    { id: 'about', label: 'Sobre', icon: Download },
    { id: 'experience', label: 'Experiência', icon: Calendar },
    { id: 'projects', label: 'Projetos', icon: Code },
    { id: 'skills', label: 'Habilidades', icon: Brain },
    { id: 'education', label: 'Formação', icon: Award },
    { id: 'contact', label: 'Contato', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Minha Página Profissional
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${
                        isActive
                          ? 'bg-slate-800 text-emerald-400 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/20'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800'
                      }`}
                    >
                      <Icon size={16} className={`transition-colors duration-300 ${isActive ? 'text-emerald-400' : 'text-slate-500 group-hover:text-slate-300'}`} />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-400 hover:text-emerald-400 hover:bg-slate-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900 border-t border-slate-800">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 w-full text-left flex items-center gap-3 ${
                      isActive
                        ? 'bg-slate-800 text-emerald-400 border-l-4 border-emerald-500'
                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                    }`}
                  >
                    <Icon size={18} className={isActive ? 'text-emerald-400' : 'text-slate-500'} />
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <Resume />
        </section>

        <section id="experience">
          <Timeline />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Studies />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;