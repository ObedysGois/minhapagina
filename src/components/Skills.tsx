import React from 'react';
import { Code, Database, Brain, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Sistemas & ERP",
      icon: Database,
      color: "forest",
      skills: [
        { name: "TOTVS Protheus", level: 90 },
        { name: "SAP (Conceitos)", level: 60 },
        { name: "WMS / TMS", level: 85 },
        { name: "Gestão de Ativos", level: 80 }
      ]
    },
    {
      title: "Business Intelligence",
      icon: Brain,
      color: "petrol",
      skills: [
        { name: "Power BI", level: 85 },
        { name: "DAX & M Query", level: 75 },
        { name: "Excel Avançado (VBA)", level: 90 },
        { name: "SQL Server", level: 65 }
      ]
    },
    {
      title: "Automação & Soluções Digitais",
      icon: Code,
      color: "steel",
      skills: [
        { name: "JavaScript / TypeScript", level: 60 },
        { name: "React.js", level: 55 },
        { name: "Python (Automação)", level: 50 },
        { name: "Power Automate", level: 70 }
      ]
    },
    {
      title: "Processos & Gestão",
      icon: Settings,
      color: "forest",
      skills: [
        { name: "BPMN (Mapeamento)", level: 80 },
        { name: "Metodologia Ágil (Scrum)", level: 70 },
        { name: "PDCA / DMAIC", level: 85 },
        { name: "KPIs & OKRs", level: 80 }
      ]
    }
  ];

  const softSkills = [
    "Resolução de Problemas",
    "Comunicação Assertiva",
    "Pensamento Analítico",
    "Trabalho em Equipe",
    "Liderança Técnica",
    "Adaptabilidade"
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
            Um conjunto equilibrado de competências técnicas e comportamentais focadas em
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
