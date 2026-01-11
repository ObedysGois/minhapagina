import React from 'react';
import { Code, Database, Brain, Settings, Layout, Server, Terminal, Workflow } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Sistemas & ERP",
      icon: Database,
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
      skills: [
        { name: "Power BI", level: 85 },
        { name: "DAX & M Query", level: 75 },
        { name: "Excel Avançado (VBA)", level: 90 },
        { name: "SQL Server", level: 65 }
      ]
    },
    {
      title: "Desenvolvimento & Automação",
      icon: Code,
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

  return (
    <div className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">
            Habilidades & Competências
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
          <p className="text-lg text-slate-400 max-w-3xl">
            Um conjunto equilibrado de competências técnicas e comportamentais focadas em 
            entregar valor e inovação para o negócio.
          </p>
        </div>

        {/* Hard Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-900 rounded-lg text-emerald-400">
                  <category.icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-emerald-500 rounded-full"
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
        <div className="bg-slate-800 rounded-2xl p-8 md:p-12 border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <h3 className="text-2xl font-bold text-slate-100 mb-8 relative z-10">Soft Skills & Diferenciais</h3>
          
          <div className="flex flex-wrap gap-4 relative z-10">
            {softSkills.map((skill, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-slate-900 rounded-lg border border-slate-700 text-slate-300 font-medium hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default"
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
