import React from 'react';
import { Target, TrendingUp, Users, Lightbulb, CheckCircle2 } from 'lucide-react';

const Resume = () => {
  return (
    <div className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">
              Sobre Mim
            </h2>
            <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Sou um profissional movido por resultados e eficiência. Minha atuação combina 
              <span className="text-emerald-400 font-semibold"> análise de dados</span>, 
              <span className="text-emerald-400 font-semibold"> otimização de processos</span> e 
              <span className="text-emerald-400 font-semibold"> inteligência logística</span> para 
              transformar operações complexas em fluxos de trabalho ágeis e rentáveis.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Com sólida experiência em ambientes corporativos, atuo na ponte entre a operação e a gestão estratégica, 
              desenvolvendo dashboards, automações e relatórios que dão visibilidade real aos indicadores de desempenho (KPIs). 
              Meu objetivo não é apenas entregar números, mas fornecer insights acionáveis que impulsionam o crescimento do negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300">Foco em redução de custos e desperdícios</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300">Automação de tarefas repetitivas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300">Gestão orientada a dados (Data-Driven)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={20} />
                <span className="text-slate-300">Melhoria contínua de processos (PDCA)</span>
              </div>
            </div>
          </div>

          {/* Cards / Highlights */}
          <div className="w-full md:w-1/3 space-y-6">
            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-emerald-500/30 transition-colors shadow-lg shadow-black/20">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-emerald-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Objetivo</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Elevar o nível de maturidade analítica da empresa, implementando cultura de dados e processos eficientes.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-blue-500/30 transition-colors shadow-lg shadow-black/20">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-blue-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Impacto</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transformação digital de setores operacionais, eliminando controles manuais e planilhas obsoletas.
              </p>
            </div>

            <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl hover:border-purple-500/30 transition-colors shadow-lg shadow-black/20">
              <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-purple-400" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">Colaboração</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Facilidade em transitar entre equipes técnicas e de negócio, traduzindo necessidades em soluções.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Resume;
