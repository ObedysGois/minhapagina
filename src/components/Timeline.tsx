import React from 'react';
import { Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

const Timeline = () => {
  const experiences = [
    {
      id: 1,
      role: "Encarregado de Logística Jr - Liderança | Análise de Dados",
      company: "Trielo",
      period: "2025 - Presente",
      location: "Salvador, BA",
      description: "Atuação na liderança operacional e administrativa da logística, com foco em controle de custos, indicadores de performance, gestão de pessoas e suporte analítico à tomada de decisão.",
      achievements: [
        "Análise e controle de custos logísticos, incluindo fretes, produtividade operacional, perdas e devoluções, com visão integrada de Supply Chain Management (SCM).",
        "Monitoramento e análise de KPI’s logísticos, como Lead Time, OTIF, custo por entrega, despesas por rota, logística reversa, Wrench Time e Cycle Time.",
        "Atuação integrada entre Logística, Fiscal e Financeiro, com gestão do time nas rotinas de faturamento, conferência e lançamento de documentos fiscais (NF-e, CT-e, MDF-e, NFS-e, NFD-e), controle de canhotos e suporte à conciliação operacional e financeira.",
        "Análise e gestão de estoques, incluindo DDE, rupturas, excessos e estoques em trânsito, apoiando Comercial e Compras na melhoria do nível de serviço e giro.",
        "Planejamento orçamentário, acompanhamento de despesas operacionais e análise de desvios, com foco em redução de custos e eficiência.",
        "Desenvolvimento de dashboards gerenciais e relatórios analíticos em Power BI e Excel, apoiando decisões estratégicas da operação.",
        "Automação de relatórios e padronização de rotinas operacionais, reduzindo retrabalho e aumentando confiabilidade das informações.",
        "Gestão da equipe de logística e administrativo, com foco em produtividade, cumprimento de prazos e melhoria contínua dos processos.",
        "Definição e monitoramento de estoque mínimo e máximo, análise de giro, lead time de ressuprimento e acuracidade sistêmica x física (ERP).",
        "Contratação e gestão de fretes terceirizados, negociação com fretistas e transportadoras, acompanhamento ponta a ponta das entregas e controle de janelas.",
        "Gestão de performance de fretistas por meio de indicadores (OTIF, SLA, nível de serviço), análise de ocorrências, avarias e não conformidades.",
        "Aplicação de métodos logísticos e de armazenagem (FIFO/PEPS, FEFO, picking, paletização, inventários e crossdocking), garantindo eficiência operacional."
      ]
    },

    {
      id: 2,
      role: "Assistente de Logística PL - Distribuição | Análise de Dados",
      company: "Trielo",
      period: "2024 - 2025",
      location: "Salvador, BA",
      description: "Atuação na operação de distribuição e transporte, com foco em controle operacional, indicadores logísticos, análise de dados e suporte à gestão da performance.",
      achievements: [
        "Planejamento, execução e controle das operações de transporte e Last Mile (Outbound), assegurando cumprimento de prazos, qualidade do serviço e eficiência operacional.",
        "Gestão e controle de fretes, operações de cross-docking e logística reversa (devoluções e ativos), com análise de causas e tratativas para redução de ocorrências.",
        "Roteirização e monitoramento das entregas, atuando na otimização de rotas, redução de custos e melhoria do nível de serviço (OTIF).",
        "Acompanhamento e análise de indicadores de desempenho logístico, como produtividade, lead time, devoluções e custos operacionais.",
        "Apoio às rotinas de faturamento e gestão fiscal, incluindo conferência, lançamento e controle de documentos fiscais (DANFE, MDF-e, NFD-e).",
        "Monitoramento de ocorrências logísticas, com interface junto a transportadoras e áreas internas para tratativas e ações corretivas.",
        "Elaboração de relatórios operacionais e desenvolvimento de dashboards, automatizando informações para acompanhamento da performance logística.",
        "Suporte às operações de Recebimento e Expedição, garantindo alinhamento entre programação logística, documentação e execução no pátio.",
        "Aplicação da metodologia PDCA para resolução de problemas recorrentes em devoluções, atrasos e controle de ativos.",
        "Apoio na estruturação e melhoria do processo de Last Mile Delivery, com foco em controle, visibilidade e eficiência operacional."
      ]
    },

    {
      id: 3,
      role: "Assistente de Logística JR - Administrativo | Distribuição",
      company: "Trielo",
      period: "2022 - 2024",
      location: "Salvador, BA",
      description: "Atuação administrativa na área de logística e distribuição, com foco no suporte às rotinas operacionais, fiscais e financeiras, garantindo organização, conformidade e fluidez dos processos.",
      achievements: [
        "Atuação nas rotinas administrativas, logísticas, fiscais e financeiras, com suporte direto às áreas de compras e distribuição.",
        "Emissão, conferência e lançamento de documentos fiscais de entrada e saída (DANFE, NF-e/NFS-e, CT-e, MDF-e, RPS e NFD-e), assegurando conformidade fiscal, operacional e documental.",
        "Controle e acompanhamento de despesas operacionais, fretes e compras de suprimentos, com organização, validação e arquivamento de documentos fiscais e financeiros.",
        "Acompanhamento e apoio na roteirização de entregas, controle de fretes, devoluções e ativos logísticos, garantindo rastreabilidade e organização da operação.",
        "Elaboração e atualização de relatórios administrativos e operacionais, apoiando o controle de custos, prazos e indicadores básicos da logística.",
        "Apoio às rotinas de faturamento, controle de canhotos, cobranças e organização de documentos para conciliação operacional e financeira.",
        "Interface com fornecedores, transportadoras e áreas internas, auxiliando no alinhamento de informações e resolução de pendências administrativas.",
        "Suporte às rotinas de controle interno, contribuindo para padronização de processos e melhoria da eficiência administrativa."
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
    },
    {
      id: 5,
      role: "Jovem Aprendiz - Administrativo | PCM",
      company: "Xerox do Brasil",
      period: "2014 - 2015",
      location: "Simões Filho, BA",
      description: "Apoio administrativo no Planejamento e Controle da Manutenção.",
      achievements: [
        "Apoio no controle de ordens de serviço, atualização de sistemas e planilhas, organização de documentos técnicos e suporte às rotinas administrativas da manutenção.",
        "Acompanhamento de indicadores de manutenção, auxílio no planejamento de atividades, controle de registros e apoio à melhoria dos processos, contribuindo para a organização, eficiência e controle das rotinas da área de PCM."
      ]
    },
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
