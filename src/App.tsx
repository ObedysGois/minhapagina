import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Studies from './components/Studies';
import Contact from './components/Contact';
import Ticker from './components/Ticker';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'projects', label: 'Projetos' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'education', label: 'Formação' },
    { id: 'contact', label: 'Contato' },
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
    <div className="min-h-screen bg-graphite-950 text-steel-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-graphite-950/95 backdrop-blur-sm border-b border-steel-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-steel-100 tracking-tight">
                Obedys Júnio
              </span>
              <span className="hidden sm:inline-block ml-3 text-xs text-steel-500 font-medium uppercase tracking-wider">
                Analista de Logística
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${isActive
                          ? 'bg-steel-800/50 text-forest-400'
                          : 'text-steel-400 hover:text-steel-100 hover:bg-steel-800/30'
                        }`}
                    >
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
                className="p-2 rounded text-steel-400 hover:text-forest-400 hover:bg-steel-800/50 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-graphite-950 border-t border-steel-800/50">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block px-3 py-3 rounded text-base font-medium transition-all duration-200 w-full text-left ${isActive
                        ? 'bg-steel-800/50 text-forest-400 border-l-2 border-forest-500'
                        : 'text-steel-400 hover:bg-steel-800/30 hover:text-steel-100'
                      }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {/* Ticker Bar */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <Ticker />
      </div>

      {/* Main Content */}
      <main className="pt-[104px]">
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