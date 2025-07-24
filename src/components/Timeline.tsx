import React from 'react';
import { Calendar, MapPin, Award, Briefcase, GraduationCap, Star } from 'lucide-react';

const Timeline = () => {
  const events = [
    {
      id: 1,
      year: "2025",
      title: "Início da Graduação",
      subtitle: "Analista de Desenvolvimento de Sistemas",
      description: "Cursando Análise e Desenvolvimento de Sistemas, com foco em Análise de Dados, automações, desenvolvimento web e banco de dados.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 1,
      year: "2025",
      title: "Promoção para PL",
      subtitle: "Assistente de Logística PL",
      description: "Promovido para posição de liderança, responsável por liderar e executar demandas administrativas e operacionais do setor logístico.",
      icon: Star,
      type: "career",
      color: "emerald"
    },
    {
      id: 2,
      year: "2025",
      title: "Desenvolvimento de Dashboards",
      subtitle: "Criação de Indicadores KPI's",
      description: "Desenvolveu dashboards com insights dos indicadores e aplicativos para gerenciamento dos processos e tarefas logísticas.",
      icon: Award,
      type: "achievement",
      color: "blue"
    },
    {
      id: 3,
      year: "2025",
      title: "Curso de Trabalho em Altura (NR 35)",
      subtitle: "CTA Treinamentos [16h]",
      description: "Fundamentos e Legislação; Análise de Risco e Medidas Preventivas; Equipamentos de Proteção Individual (EPIs); Procedimentos e Técnicas de Trabalho; Condutas em Situação de Emergência.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 4,
      year: "2024",
      title: "Curso de Brigada de Incêndio (NR 23) e Primeiros Socorros (NR 7)",
      subtitle: "CTA Treinamentos [56h]",
      description: "Prevenção e Identificação de Riscos; Combate a Incêndios; Primeiros Socorros; Atuação em Emergências; Normas e Legislação.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 5,
      year: "2024",
      title: "Desenvolvimento de POP's - Rotinas Administrativas",
      subtitle: "Criação de Procedimentos nos setores de faturamento e financeiro",
      description: "Desenvolveu e implementou POP's para melhorias nos processos de execução, registros e controles de notas fiscais, canhotos, boletos, despesas, compras suprimentos, etc.",
      icon: Award,
      type: "achievement",
      color: "blue"
    },
    {
      id: 5,
      year: "2024",
      title: "Desenvolvimento de POP's - Logística de Entregas",
      subtitle: "Criação de Procedimentos no setor de Transportes",
      description: "Desenvolveu e implementou POP's para melhorias nos processos de acompanhamento, registros, roteirização e controle das entregas, utilizando conceitos como Last Mile Delivery e Ciclo PDCA.",
      icon: Award,
      type: "achievement",
      color: "blue"
    },
    {
      id: 6,
      year: "2023",
      title: "Desenvolvimento de POP's - Logística Reversa",
      subtitle: "Criação de Procedimentos nos setores de Controle de Ativos e Controle de Devoluções",
      description: "Desenvolveu e implementou POP's para melhorias nos processos de validação, controle e redução das devoluções, tal como nos registros e controle de ativos (caixas e paletes).",
      icon: Award,
      type: "achievement",
      color: "blue"
    },
    {
      id: 7,
      year: "2023",
      title: "Nova posição na Empresa",
      subtitle: "Assistente de Logística JR",
      description: "Crescimento na Trielo como assistente de logística júnior, executando demandas administrativas e operacionais do setor de logística.",
      icon: Briefcase,
      type: "career",
      color: "emerald"
    },
    {
      id: 8,
      year: "2021",
      title: "Segunda Experiência Profissional",
      subtitle: "Auxiliar Administrativo",
      description: "Início na empresa Fazenda Santa Terezinha como auxiliar administrativo, desenvolvendo habilidades em faturamento e financeiro.",
      icon: Briefcase,
      type: "career",
      color: "emerald"
    },
    {
      id: 8,
      year: "2016",
      title: "Conclusão da Formação Técnica",
      subtitle: "Técnico em Manutenção Mecânica",
      description: "Concluí formação técnica em Manutenção Mecânica Industrial pelo IFBA, desenvolvendo base sólida em processos industriais.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 9,
      year: "2015",
      title: "Certificação Auxiliar Administrativo",
      subtitle: "Centro de Integração Empresa-Escola (CIEE) [400h]",
      description: "Apoio aos Setores; Atendimento e Comunicação; Documentação e Organização.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 10,
      year: "2015",
      title: "Certificação Sistema Integrado de Engenharia da Manutenção (SIEM)",
      subtitle: "Instituição MF Planejamento [24h]",
      description: "Módulos: CE - Cadastro de Equipamentos; PD - Programação Diária; MP - Manutenção Programada; PI - Inspeção de Equipamentos; HE - Histórico Especializado; CA - Calibração e Aferição de Instrumentos.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 11,
      year: "2014",
      title: "Início da Formação Técnica",
      subtitle: "IFBA - Manutenção Mecânica [1600h]",
      description: "Início dos estudos técnicos em Manutenção Mecânica Industrial, marcando o começo da minha jornada profissional.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 12,
      year: "2014",
      title: "Primeira Experiência Profissional",
      subtitle: "Aprendiz Administrativo - Xerox",
      description: "Início como aprendiz administrativo na Xerox do Brasil, apoiando o setor nas demandas administrativas e PCM.",
      icon: Briefcase,
      type: "career",
      color: "emerald"
    },
    {
      id: 13,
      year: "2014",
      title: "Certificação Auxiliar de Recursos Humanos",
      subtitle: "Sest Senat - Pronatec [160h]",
      description: "Rotinas Administrativas; Recrutamento e Seleção; Treinamento e Desenvolvimento; Gestão de Cargos e Benefícios; Gestão de Contratos; Documentação.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 14,
      year: "2013",
      title: "Certificação Auxiliar Plataforma Petrolífera",
      subtitle: "Instituto Federal da Bahia (IFBA) - Pronatec [260h]",
      description: "Introdução sobre Perfuração de Poços; Organização Operacional; Montagem e Inspeção de equipamento de Processamento de Petróleo e Gás.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    },
    {
      id: 15,
      year: "2012",
      title: "Conclusão do Ensino Médio",
      subtitle: "CEA - Colégio Estadual de Aratu",
      description: "Conclusão do ensino médio, estabelecendo a base educacional para minha carreira profissional.",
      icon: GraduationCap,
      type: "education",
      color: "purple"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'blue': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'purple': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      default: return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
    }
  };

  const getLineColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'border-emerald-500';
      case 'blue': return 'border-blue-500';
      case 'purple': return 'border-purple-500';
      default: return 'border-emerald-500';
    }
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Minha Cronologia
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma jornada através dos marcos mais importantes da minha carreira e desenvolvimento pessoal
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm">Anos de Experiência</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm">Aplicativos Desenvolvidos</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">10+</div>
            <div className="text-gray-400 text-sm">Dashboards Criados</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <div className="text-3xl font-bold text-emerald-400 mb-2">3+</div>
            <div className="text-gray-400 text-sm">Empresas Trabalhadas</div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"></div>

          <div className="space-y-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              return (
                <div key={event.id} className="relative flex items-start gap-8">
                  {/* Icon */}
                  <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full border-2 backdrop-blur-sm ${getIconColor(event.color)}`}>
                    <Icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 pb-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                        <div className="flex items-center gap-3 mb-2 md:mb-0">
                          <span className={`text-2xl font-bold ${event.color === 'emerald' ? 'text-emerald-400' : event.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>
                            {event.year}
                          </span>
                          <div className={`w-2 h-2 rounded-full ${event.color === 'emerald' ? 'bg-emerald-400' : event.color === 'blue' ? 'bg-blue-400' : 'bg-purple-400'}`}></div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar size={14} />
                          Marco {event.type === 'career' ? 'Profissional' : event.type === 'education' ? 'Educacional' : 'Conquista'}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <h4 className={`font-medium mb-3 ${event.color === 'emerald' ? 'text-emerald-400' : event.color === 'blue' ? 'text-blue-400' : 'text-purple-400'}`}>
                        {event.subtitle}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Próximos Objetivos</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Continuar evoluindo na área de logística, liderar projetos de otimização e contribuir com inovações, implementando melhorias nos processos. Sempre buscar obter novas certificações e expandir conhecimentos em áreas como Business Intelligence, automação de processos e desenvolvimento de aplicações, buscando sempre soluções baseadas nas necessidades do mercado logístico.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;