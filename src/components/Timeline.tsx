import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Assistente de Logística PL",
      company: "Trielo",
      period: "2025 - Presente",
      location: "Joinville, SC",
      description: "Atuação estratégica na liderança de processos logísticos e administrativos, com foco em inteligência de dados e otimização de recursos.",
      achievements: [
        "Promovido para posição de liderança devido à excelência na gestão de processos e implementação de melhorias.",
        "Desenvolvimento de Dashboards em Power BI para monitoramento de KPIs de transportes e perdas, aumentando a visibilidade da operação.",
        "Criação de aplicativos para gerenciamento de tarefas logísticas, reduzindo o tempo de resposta da equipe.",
        "Gestão direta de indicadores de performance e implementação de planos de ação corretivos."
      ]
    },
    {
      id: 2,
      role: "Assistente de Logística JR",
      company: "Trielo",
      period: "2023 - 2025",
      location: "Joinville, SC",
      description: "Responsável pela execução e padronização de rotinas operacionais, garantindo conformidade e eficiência nos processos.",
      achievements: [
        "Desenvolvimento e implementação de POPs (Procedimentos Operacionais Padrão) para os setores de Logística Reversa, Transportes e Administrativo.",
        "Aplicação da metodologia PDCA para resolução de problemas crônicos em devoluções e controle de ativos.",
        "Estruturação do processo de Last Mile Delivery, otimizando o roteiro e o acompanhamento de entregas.",
        "Redução de inconsistências nos registros de notas fiscais e controles de estoque através de novos procedimentos de validação."
      ]
    },
    {
      id: 3,
      role: "Auxiliar Administrativo",
      company: "Empresa Anterior", 
      period: "2021 - 2023",
      location: "Joinville, SC",
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
    <div className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
          <p className="text-lg text-slate-400 max-w-3xl">
            Minha trajetória é marcada pela evolução constante e pela entrega de resultados consistentes. 
            Em cada desafio, busco aplicar tecnologia e metodologia para superar expectativas.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-emerald-500"></div>
              
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start group">
                {/* Header Info (Mobile: Top, Desktop: Left fixed width?) No, let's keep it fluid */}
                <div className="w-full">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-emerald-400 font-medium mt-1">
                        <Building2 size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-400">
                      <div className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-6 leading-relaxed bg-slate-800/30 p-4 rounded-lg border-l-2 border-emerald-500/50">
                    {exp.description}
                  </p>

                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors">
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                      Principais Entregas & Resultados
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="text-emerald-500 mt-1 shrink-0" size={18} />
                          <span className="text-slate-300 text-sm leading-relaxed">
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
