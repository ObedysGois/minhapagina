import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Analista de Operações Logísticas – Transportes e Fretes",
      company: "Trielo",
      period: "2025 - Presente",
      location: "Salvador, BA",
      description: "Atuação estratégica na liderança de processos logísticos e administrativos, com foco em inteligência de dados e otimização de recursos.",
      achievements: [
        "Análise de custos de fretes, DDE, produtividade operacional, devoluções e perdas.",
        "Construção e acompanhamento de KPIs logísticos (Lead Time, OTIF, despesas por rota, custo por entrega)",
        "Interface entre logística, fiscal e financeiro (CT-e, MDF-e, faturamento, canhotos e cobrança)",
        "Planejamento orçamentário e reminder de desvios de custo",
        "Desenvolvimento de dashboards em Power BI para tomada de decisão.",
        "Automação de relatórios e rotinas de controle."
      ]
    },
    {
      id: 2,
      role: "Assistente de Logística PL",
      company: "Trielo",
      period: "2024 - 2025",
      location: "Salvador, BA",
      description: "Atuação estratégica na liderança de processos logísticos e administrativos, com foco em inteligência de dados e otimização de recursos.",
      achievements: [
        "Promovido para posição de liderança devido à excelência na gestão de processos e implementação de melhorias.",
        "Desenvolvimento de Dashboards em Power BI para monitoramento de KPIs de transportes e perdas, aumentando a visibilidade da operação.",
        "Criação de aplicativos para gerenciamento de tarefas logísticas, reduzindo o tempo de resposta da equipe.",
        "Gestão direta de indicadores de performance e implementação de planos de ação corretivos."
      ]
    },
    {
      id: 3,
      role: "Assistente de Logística JR",
      company: "Trielo",
      period: "2022 - 2024",
      location: "Salvador, BA",
      description: "Responsável pela execução e padronização de rotinas operacionais, garantindo conformidade e eficiência nos processos.",
      achievements: [
        "Desenvolvimento e implementação de POPs (Procedimentos Operacionais Padrão) para os setores de Logística Reversa, Transportes e Administrativo.",
        "Aplicação da metodologia PDCA para resolução de problemas crônicos em devoluções e controle de ativos.",
        "Estruturação do processo de Last Mile Delivery, otimizando o roteiro e o acompanhamento de entregas.",
        "Redução de inconsistências nos registros de notas fiscais e controles de estoque através de novos procedimentos de validação."
      ]
    },
    {
      id: 4,
      role: "Auxiliar Administrativo",
      company: "Fazenda Santa Terezinha",
      period: "2021 - 2022",
      location: "Salvador, BA",
      description: "Suporte administrativo e operacional, com foco na organização de documentos e atendimento a demandas internas.",
      achievements: [
        "Organização e arquivamento de documentos fiscais e administrativos.",
        "Suporte no controle de contas a pagar e receber.",
        "Atendimento a fornecedores e clientes internos, garantindo fluxo de informações eficiente.",
        "Apoio na elaboração de planilhas de controle para o setor financeiro."
      ]
    }
  ];

  return (
    <div className="py-24 bg-graphite-950 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-steel-50 font-heading">
            Experiência Profissional
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-steel-400 max-w-3xl">
            Minha trajetória é marcada pela evolução constante e pela entrega de resultados consistentes.
            Em cada desafio, busco aplicar tecnologia e metodologia para superar expectativas.
          </p>
        </div>

        <div className="relative border-l border-steel-700 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[7px] top-0 w-3.5 h-3.5 rounded-full bg-graphite-950 border-2 border-forest-500"></div>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-steel-100 group-hover:text-forest-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-forest-400 font-medium mt-1">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-steel-400">
                      <div className="flex items-center gap-1.5 bg-steel-800/50 px-3 py-1 rounded border border-steel-700/50">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 bg-steel-800/50 px-3 py-1 rounded border border-steel-700/50">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-steel-300 mb-6 leading-relaxed bg-steel-800/20 p-4 rounded border-l-2 border-forest-600/50">
                    {exp.description}
                  </p>

                  <div className="card-corporate p-5">
                    <h4 className="text-xs font-semibold text-steel-400 uppercase tracking-wider mb-4">
                      Principais Entregas & Resultados
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <CheckCircle2 className="text-forest-500 mt-0.5 shrink-0" size={16} />
                          <span className="text-steel-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
