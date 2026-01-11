import React from 'react';
import { Download, Linkedin, Mail, Github, Database, BarChart3, ArrowRight } from 'lucide-react';
import logistic1fundo from '../../assets/logistic1fundo.webp';
import fotoperfil from '../../assets/essa.jpg';
import curriculo from '../../assets/curriculo_teste.pdf';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 relative overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 z-10"></div>
        <img
          src={logistic1fundo}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Disponível para novos projetos
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-50 mb-6 tracking-tight">
              Obedys Júnio
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-300 font-medium mb-6 flex flex-col md:flex-row gap-2 md:items-center justify-center md:justify-start">
              <span className="text-emerald-400">Analista de Dados & Processos</span>
              <span className="hidden md:block text-slate-600">•</span>
              <span className="text-slate-400">Logística & BI</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Transformo dados complexos em decisões estratégicas. Especialista em otimização de processos logísticos, 
              criação de dashboards gerenciais e automação de rotinas para maximizar eficiência e reduzir custos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
              <a 
                href="#contact" 
                className="px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group"
              >
                Entrar em Contato
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={curriculo} 
                download="Obedys_Junio_Curriculo.pdf"
                className="px-8 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 hover:border-slate-600 font-medium transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 text-slate-400">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ObedysGois" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="mailto:obedysjunio@email.com" className="hover:text-emerald-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-slate-700/50 p-2 bg-slate-800/50 backdrop-blur-sm">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-slate-700">
                  <img 
                    src={fotoperfil} 
                    alt="Obedys Júnio" 
                    className="w-full h-full object-cover scale-110 hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: 'center top' }}
                  />
                </div>
                
                {/* Floating Badges */}
                <div className="absolute top-10 -right-4 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-xl animate-bounce delay-1000 duration-3000 hidden md:block">
                  <BarChart3 className="text-emerald-400" size={24} />
                </div>
                <div className="absolute bottom-10 -left-4 bg-slate-800/90 backdrop-blur-md border border-slate-700 p-3 rounded-xl shadow-xl animate-bounce delay-500 duration-3000 hidden md:block">
                  <Database className="text-blue-400" size={24} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
