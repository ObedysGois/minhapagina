import React from 'react';
import { Github, Linkedin, Mail, Download, Brain, Code, Database, FileBox, Table2, AppWindow, LucideAreaChart, LucideGanttChartSquare, LucideGanttChart, LucideBarChart, LucideAxe, LucideCombine, PieChart, LucideTruck, TruckIcon, SlashSquare, SparklesIcon, Truck, DollarSignIcon, MonitorIcon, Cog, FileCog2, FileCog, LucideFileCog2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900/20 relative overflow-hidden">
      {/* Background Image */}
      <img
        src="/assets/logistic1fundo.webp"
        alt="Fundo logístico"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <img 
                  src="/assets/fotoperfil.png" 
                  alt="Obedys Júnio" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 1%' , marginRight: '10%' }}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent font-sans">
            Obedys Júnio
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Analyst
          </h2>
          
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Profissional com ampla experiência nos seguimentos logístico e comercial, com foco em otimização de processos, gestão de indicadores KPI's e desenvolvimento de soluções tecnológicas. 
            Especializado em gerar dashboards, aplicativos e relatórios automatizados para melhorias e acompanhamento dos processos operacionais e comerciais.
          </p>

          {/* Skills Highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
              <AppWindow className="text-emerald-400" size={16} />
              <span className="text-sm text-gray-300">TOTVS Protheus</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
              <PieChart className="text-emerald-400" size={16} />
              <span className="text-sm text-gray-300">Power BI</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
              <Database className="text-emerald-400" size={16} />
              <span className="text-sm text-gray-300">Excel</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
              <Code className="text-emerald-400" size={16} />
              <span className="text-sm text-gray-300">IA (App)</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
              <LucideFileCog2 className="text-emerald-400" size={16} />
              <span className="text-sm text-gray-300">Automações</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
              <TruckIcon className="text-emerald-400" size={16} />
              <span className="text-sm text-gray-300">Processos Logísticos</span>
            </div>
            <div className="flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm border border-emerald-500/30 rounded-full px-4 py-2">
              <DollarSignIcon className="text-emerald-400" size={16} />
              <span className="text-sm text-gray-300">Rotinas Comerciais</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="/assets/curriculo_teste.pdf" 
              download="Obedys_Junio_Curriculo.pdf"
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 justify-center shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
            >
              <Download size={20} />
              Download Currículo
            </a>
            
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/ObedysGois"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-emerald-500 text-gray-400 hover:text-emerald-400 transition-all duration-200 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/obedys-junio-b4656096/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-emerald-500 text-gray-400 hover:text-emerald-400 transition-all duration-200 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:obedysjunio@gmail.com"
              className="p-3 rounded-full bg-gray-800/50 border border-gray-700 hover:border-emerald-500 text-gray-400 hover:text-emerald-400 transition-all duration-200 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;