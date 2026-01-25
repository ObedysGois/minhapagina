import React from 'react';
import { Target, TrendingUp, Users, CheckCircle2 } from 'lucide-react';

const Resume = () => {
  return (
    <div className="py-24 bg-graphite-900/50 bg-flow-lines">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row gap-16">

          {/* Main Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-steel-50 font-heading">
              Sobre Mim
            </h2>
            <div className="section-divider mb-8"></div>

            <p className="text-lg text-steel-300 leading-relaxed mb-6">
              Sou um profissional orientado a resultados, eficiência e tomada de decisão baseada em
              <strong className="text-forest-400"> análise de dados</strong>,
              <strong className="text-forest-400"> otimização de processos</strong> e
              <strong className="text-forest-400"> inteligência logística</strong>,
              aplicadas para transformar operações complexas em fluxos de trabalho mais ágeis,
              controlados e rentáveis.
            </p>

            <p className="text-lg text-steel-300 leading-relaxed mb-8">
              <strong className="text-steel-200">Analista de Logística / Administrativo</strong>, com experiência prática como
              <strong className="text-steel-200"> Encarregado de Logística Jr</strong>, com atuação na gestão de transportes,
              controle de fretes, acompanhamento de KPI's e suporte às rotinas comerciais e fiscais.
              Vivência em faturamento, conferência de documentos fiscais
              (NF-e, CT-e, MDF-e) e integração dos processos logísticos com as áreas comercial e
              financeira. Forte atuação em análise de dados, desenvolvimento de relatórios
              gerenciais e dashboards, utilizando <strong className="text-steel-200">ERP TOTVS Protheus</strong> e
              <strong className="text-steel-200"> Power BI</strong>, com foco em melhoria contínua, redução de custos e
              eficiência operacional.
              <br /><br />
              Meu objetivo vai além da entrega de números: transformar dados operacionais em
              <strong className="text-forest-400"> insights acionáveis</strong> que apoiem a tomada de decisão e impulsionem o
              crescimento sustentável do negócio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Foco em redução de custos e desperdícios</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Automação de tarefas repetitivas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Gestão orientada a dados (Data-Driven)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Melhoria contínua de processos (PDCA)</span>
              </div>
            </div>
          </div>

          {/* Cards / Highlights */}
          <div className="w-full md:w-1/3 space-y-5">
            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-forest-900/40 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-forest-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Objetivo</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Elevar o nível de maturidade analítica da empresa, implementando cultura de dados e processos eficientes.
              </p>
            </div>

            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-petrol-900/40 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-petrol-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Impacto</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Transformação digital de setores operacionais, eliminando controles manuais e planilhas obsoletas.
              </p>
            </div>

            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-steel-800/60 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-steel-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Colaboração</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
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
