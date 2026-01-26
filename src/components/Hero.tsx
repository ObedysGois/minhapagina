import React from 'react';
import { Download, Linkedin, Mail, Github, ArrowRight } from 'lucide-react';
import logistic1fundo from '../../assets/logistic1fundo.webp';
import fotoperfil from '../../assets/essa.jpg';
import curriculo from '../../assets/Currículo - Obedys Junio dos Santos Gois.pdf';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-graphite-950 relative overflow-hidden pt-8">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-graphite-950 via-graphite-950/98 to-graphite-950 z-10"></div>
        <img
          src={logistic1fundo}
          alt="Background"
          className="w-full h-full object-cover opacity-[0.04]"
        />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern z-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-forest-900/30 border border-forest-700/30 text-forest-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-forest-500"></span>
              </span>
              Disponível para novos desafios
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-steel-50 mb-4 tracking-tight font-heading">
              Obedys Júnio
            </h1>

            <h2 className="text-xl md:text-2xl text-steel-300 font-medium mb-6">
              <span className="text-forest-400">Analista</span>
              <span className="text-steel-500 mx-2">|</span>
              <span className="text-petrol-400">Dados e Logística</span>
            </h2>

            <p className="text-lg text-steel-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Especialista em otimização de processos logísticos,
              criação de dashboards gerenciais, análise de KPIs e automação de rotinas para maximizar eficiência e reduzir custos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10">
              <a
                href="#contact"
                className="px-6 py-3 rounded bg-forest-600 hover:bg-forest-700 text-white font-medium transition-all flex items-center justify-center gap-2 group"
              >
                Entrar em Contato
                <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href={curriculo}
                download="Obedys_Junio_Curriculo.pdf"
                className="px-6 py-3 rounded bg-steel-800 hover:bg-steel-700 text-steel-200 border border-steel-700 hover:border-steel-600 font-medium transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-5 text-steel-500">
              <a href="https://www.linkedin.com/in/obedys-junio-207315321/" target="_blank" rel="noopener noreferrer" className="hover:text-forest-400 transition-colors p-2">
                <Linkedin size={22} />
              </a>
              <a href="https://github.com/ObedysGois" target="_blank" rel="noopener noreferrer" className="hover:text-forest-400 transition-colors p-2">
                <Github size={22} />
              </a>
              <a href="mailto:obedysjunio@email.com" className="hover:text-forest-400 transition-colors p-2">
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              <div className="relative w-full h-full rounded-full border border-steel-700/50 p-1.5 bg-steel-800/30">
                <div className="w-full h-full rounded-full overflow-hidden relative bg-steel-800">
                  <img
                    src={fotoperfil}
                    alt="Obedys Júnio"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
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
