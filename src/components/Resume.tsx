import React from 'react';
import { Target, TrendingUp, Users, CheckCircle2 } from 'lucide-react';
import { Truck, Boxes, BarChart3 } from 'lucide-react';

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
              <strong className="text-steel-200">Analista de Logística (Transportes e Operações)</strong>, com sólida experiência em
              <strong className="text-steel-200"> gestão de custos logísticos</strong>, incluindo fretes, produtividade operacional,
              perdas e devoluções, atuando com visão integrada de <strong className="text-steel-200">Supply Chain Management (SCM)</strong>.
              Forte atuação no monitoramento e análise de <strong className="text-steel-200">KPI’s logísticos</strong>, como Lead Time,
              OTIF, custo por entrega, despesas por rota, logística reversa, produtividade da mão de obra (Wrench Time) e tempo de
              ciclo (Cycle Time).
              <br /><br />
              Experiência na atuação integrada entre as áreas de <strong className="text-steel-200">Logística, Fiscal e Financeiro</strong>,
              com gestão de equipe e execução de rotinas de faturamento, lançamento e conferência de documentos fiscais
              (NF-e, CT-e, MDF-e, NFS-e, NFD-e), controle de canhotos, cobranças e suporte à conciliação operacional e financeira.
              Atuação estratégica em <strong className="text-steel-200">análise de estoques</strong>, DDE, acompanhamento de rupturas,
              excessos e estoques em trânsito, apoiando os setores Comercial e de Compras na construção de um
              <strong className="text-steel-200"> estoque mais saudável</strong>, equilibrando nível de serviço e giro.
              <br /><br />
              Vivência em <strong className="text-steel-200">planejamento orçamentário</strong>, análise de desvios e controle contínuo
              das despesas operacionais, com foco em redução de custos e eficiência. Desenvolvimento de
              <strong className="text-steel-200"> dashboards gerenciais</strong> e automação de relatórios em
              <strong className="text-steel-200"> Power BI</strong> e Excel, promovendo padronização de processos,
              confiabilidade das informações e redução de retrabalho.
              <br /><br />
              Atuação na <strong className="text-steel-200">contratação e gestão de veículos terceirizados</strong>, negociação com
              fretistas e transportadoras, acompanhamento ponta a ponta das entregas, controle de janelas,
              roteirização e monitoramento de cargas. Gestão de performance de fretistas por meio de indicadores
              como OTIF, SLA e nível de serviço, com foco em satisfação do cliente, confiabilidade das entregas e
              melhoria contínua dos processos logísticos.
              <br /><br />
              Meu objetivo vai além da análise operacional: transformar dados logísticos em
              <strong className="text-forest-400"> insights acionáveis</strong> que apoiem decisões estratégicas e
              impulsionem resultados sustentáveis para o negócio.
            </p>


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Análise e redução de custos logísticos (fretes, perdas e devoluções)</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Monitoramento de KPI’s logísticos (OTIF, Lead Time, SLA, custo por entrega)</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Análise de estoques, rupturas, excessos e estoques em trânsito</span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Dashboards e relatórios gerenciais para tomada de decisão</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Gestão orientada a dados (Data-Driven)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="text-forest-500 mt-1 shrink-0" size={20} />
                <span className="text-steel-300">Automação de tarefas e Melhoria contínua de processos (PDCA)</span>
              </div>
            </div>
          </div>

          {/* Cards / Highlights */}
          <div className="w-full md:w-1/3 space-y-5">

            {/* Objetivo */}
            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-forest-900/40 rounded-lg flex items-center justify-center mb-4">
                <Target className="text-forest-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Objetivo</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Otimizar operações logísticas por meio de análise de dados, controle de custos e indicadores de performance,
                elevando o nível de eficiência e previsibilidade dos processos.
              </p>
            </div>

            {/* Impacto */}
            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-petrol-900/40 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-petrol-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Impacto</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Redução de custos logísticos, melhoria no nível de serviço e maior confiabilidade nas entregas,
                apoiando decisões estratégicas com dados consistentes.
              </p>
            </div>

            {/* Colaboração */}
            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-steel-800/60 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-steel-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Colaboração</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Atuação integrada entre Logística, Comercial, Compras, Fiscal e Financeiro,
                facilitando alinhamento operacional e fluidez entre áreas.
              </p>
            </div>

            {/* Gestão de Transportes */}
            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-forest-900/40 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-forest-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Gestão de Transportes</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Contratação e gestão de fretes terceirizados, negociação com fretistas,
                controle de janelas, roteirização e acompanhamento ponta a ponta das entregas.
              </p>
            </div>

            {/* Gestão de Estoques */}
            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-petrol-900/40 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="text-petrol-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Análise de Estoques</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Análise de estoques, DDE, rupturas, excessos e estoques em trânsito,
                com foco em giro saudável, nível de serviço e redução de perdas.
              </p>
            </div>

            {/* Performance & Indicadores */}
            <div className="card-corporate p-6">
              <div className="w-11 h-11 bg-steel-800/60 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-steel-400" size={22} />
              </div>
              <h3 className="text-lg font-semibold text-steel-100 mb-2">Performance & KPIs</h3>
              <p className="text-steel-400 text-sm leading-relaxed">
                Monitoramento de indicadores como OTIF, SLA, Lead Time, custo por entrega,
                produtividade operacional, perdas, devoluções e acuracidade de dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
