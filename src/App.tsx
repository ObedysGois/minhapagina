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
    { id: 'projects', label: 'Projetos', icon: Code },
    { id: 'resume', label: 'Currículo', icon: Download },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'skills', label: 'Habilidades', icon: Brain },
    { id: 'studies', label: 'Estudos', icon: Award },
    { id: 'contact', label: 'Contato', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'resume', 'timeline', 'skills', 'studies', 'contact'];
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
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-emerald-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-emerald-400">Minha Página Profissional</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                        activeSection === item.id
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-emerald-400'
                      }`}
                    >
                      <Icon size={16} />
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
                className="p-2 rounded-md text-gray-300 hover:text-emerald-400 hover:bg-gray-700"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-emerald-500/20">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 w-full text-left flex items-center gap-2 ${
                      activeSection === item.id
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-emerald-400'
                    }`}
                  >
                    <Icon size={16} />
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
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="resume">
          <Resume />
        </section>
        
        <section id="timeline">
          <Timeline />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="studies">
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