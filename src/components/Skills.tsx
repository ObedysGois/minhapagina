import React from 'react';
import { Code, Database, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Sistemas & ERP",
      icon: Database,
      color: "forest",
      skills: [
        { name: "ERP TOTVS Protheus", level: 90 },
        { name: "TOTVS RM", level: 70 },
        { name: "System GLPI", level: 80 },
        { name: "QIVE Arquivei", level: 85 },
        { name: "Treasy (Planejamento Financeiro)", level: 70 },
        { name: "Portal IFCO", level: 70 }
      ]
    },
    {
      title: "Business Intelligence & Dados",
      icon: Brain,
      color: "petrol",
      skills: [
        { name: "Power BI", level: 70 },
        { name: "Dashboards Interativos", level: 80 },
        { name: "Desenvolvimento de Relatórios Gerenciais", level: 80 },
        { name: "Análise e Interpretação de Dados", level: 80 },
        { name: "Excel Avançado", level: 90 },
        { name: "Google Sheets", level: 75 }
      ]
    },
    {
      title: "Automação, IA & Desenvolvimento",
      icon: Code,
      color: "steel",
      skills: [
        { name: "Automação de Tarefas", level: 70 },
        { name: "Inteligência Artificial (Aplicações Práticas)", level: 75 },
        { name: "Desenvolvimento de Sistemas", level: 80 },
        { name: "Desenvolvimento de Aplicativos (APPs)", level: 80 },
        { name: "GitHub (Versionamento)", level: 75 },
        { name: "IDE (VS Code)", level: 75 }
      ]
    },
    {
      title: "Ferramentas & Produtividade",
      icon: Settings,
      color: "petrol",
      skills: [
        { name: "Word", level: 75 },
        { name: "PowerPoint", level: 75 },
        { name: "Google Docs", level: 75 },
        { name: "Google Drive", level: 80 },
        { name: "Google Meet", level: 70 },
        { name: "Google Forms", level: 80 },
      ]
    },
    {
      title: "Gestão & Performance Logística",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Gestão de Performance Logística", level: 65 },
        { name: "KPIs Operacionais", level: 85 },
        { name: "Controle de Custos Logísticos", level: 75 }
      ]
    },
    {
      title: "Melhoria Contínua & Qualidade",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Ciclo PDCA", level: 75 },
        { name: "Metodologia 5S", level: 70 },
        { name: "Padronização de Processos Operacionais", level: 70 },
      ]
    },
    {
      title: "Gestão de Projetos & Processos",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Gestão de Projetos", level: 70 },
        { name: "Mapeamento e Otimização de Processos", level: 75 },
        { name: "Análise de Gargalos Operacionais", level: 75 }
      ]
    },
    {
      title: "Gestão de Estoques",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Planejamento e Controle de Estoques", level: 60 },
        { name: "Gestão de Inventários", level: 65 },
        { name: "Controle de Ativos", level: 75 }
      ]
    },
    {
      title: "Armazenagem & Operações de CD",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Gestão de Armazenagem", level: 60 },
        { name: "Separação (Picking) e Conferência", level: 60 },
        { name: "Recebimento e Conferência de Mercadorias", level: 70 }
      ]
    },
    {
      title: "Expedição & Distribuição",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Expedição e Distribuição", level: 85 },
        { name: "Gestão de Transporte (Inbound / Outbound)", level: 90 },
        { name: "Cross Docking", level: 60 }
      ]
    },
    {
      title: "Logística Reversa",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Logística Reversa", level: 80 },
        { name: "Controle de Devoluções", level: 85 },
        { name: "Controle de Recolhimento", level: 70 }
      ]
    },
    {
      title: "Processos Fiscais & Faturamento",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "Controle de Notas Fiscais e CFOP", level: 50 },
        { name: "Fluxo de Faturamento", level: 85 },
        { name: "Controle de Canhotos", level: 85 }
      ]
    }
  ];


  const softSkills = [
    "Proatividade",
    "Resolução de Problemas",
    "Pensamento Analítico e Crítico",
    "Tomada de Decisão Orientada a Dados",
    "Autonomia",
    "Escuta Ativa",
    "Empatia",
    "Resiliência",
    "Liderança e Liderança Transformacional",
    "Trabalho em Equipe e Colaboração",
    "Organização e Gestão do Tempo",
    "Foco em Resultados",
    "Visão Sistêmica",
    "Adaptabilidade e Flexibilidade",
    "Capacidade de Aprendizado Contínuo",
    "Inovação",
    "Atenção a Detalhes",
    "Comunicação Clara",
    "Perfil Hands-on"
  ];


  const getProgressColor = (color: string) => {
    switch (color) {
      case 'forest': return 'bg-forest-500';
      case 'petrol': return 'bg-petrol-500';
      default: return 'bg-steel-500';
    }
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case 'forest': return 'bg-forest-900/40 text-forest-400';
      case 'petrol': return 'bg-petrol-900/40 text-petrol-400';
      default: return 'bg-steel-800/60 text-steel-400';
    }
  };

  return (
    <div className="py-24 bg-graphite-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-steel-50 font-heading">
            Habilidades & Competências
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-steel-400 max-w-3xl">
            Um conjunto equilibrado de competências técnicas focadas em
            entregar valor e inovação para o negócio.
          </p>
        </div>

        {/* Hard Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card-corporate p-5">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 rounded-lg ${getIconBg(category.color)}`}>
                  <category.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-steel-100">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-sm text-steel-300">{skill.name}</span>
                      <span className="text-xs text-steel-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-steel-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${getProgressColor(category.color)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="card-corporate p-8 md:p-10">
          <h3 className="text-xl font-semibold text-steel-100 mb-6">Soft Skills & Diferenciais</h3>

          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="px-5 py-2.5 bg-graphite-950 rounded border border-steel-700/50 text-steel-300 font-medium text-sm hover:border-forest-600/50 hover:text-forest-400 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;
