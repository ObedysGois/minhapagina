import React from 'react';
import { Code, Database, Brain, Smartphone, Globe, Server, Palette, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Sistemas ERP",
      icon: Database,
      color: "emerald",
      skills: [
        { name: "TOTVS Protheus", level: 90, years: "3+" },
        { name: "Gestão de Fretes", level: 85, years: "3+" },
        { name: "Controle de Estoque", level: 80, years: "2+" },
        { name: "Emissão de NF-e", level: 95, years: "3+" },
        { name: "MDF-e e CT-e", level: 85, years: "2+" },
        { name: "Gestão de Ativos", level: 80, years: "2+" }
      ]
    },
    {
      title: "Análise de Dados",
      icon: Brain,
      color: "blue",
      skills: [
        { name: "Power BI", level: 70, years: "2+" },
        { name: "Excel Avançado", level: 80, years: "3+" },
        { name: "Dashboards", level: 75, years: "2+" },
        { name: "Relatórios KPI's", level: 85, years: "3+" },
        { name: "Análise de Indicadores", level: 80, years: "2+" },
        { name: "Automação de Relatórios", level: 75, years: "2+" }
      ]
    },
    {
      title: "Desenvolvimento",
      icon: Code,
      color: "purple",
      skills: [
        { name: "JavaScript", level: 40, years: "1+" },
        { name: "HTML/CSS", level: 60, years: "1+" },
        { name: "Aplicativos Web", level: 50, years: "1+" },
        { name: "Automação de Processos", level: 70, years: "2+" },
        { name: "Testes Automatizados", level: 60, years: "1+" },
        { name: "Otimização de Sistemas", level: 65, years: "2+" }
      ]
    },
    {
      title: "Gestão de Processos",
      icon: Settings,
      color: "pink",
      skills: [
        { name: "Metodologia 5W2H", level: 85, years: "3+" },
        { name: "5S", level: 80, years: "2+" },
        { name: "PDCA", level: 75, years: "2+" },
        { name: "Empowerment", level: 70, years: "2+" },
        { name: "Compliance", level: 80, years: "2+" },
        { name: "Kaizen", level: 75, years: "2+" }
      ]
    }
  ];

  const tools = [
    { name: "TOTVS Protheus", category: "ERP" },
    { name: "Power BI", category: "Business Intelligence" },
    { name: "Excel", category: "Planilhas" },
    { name: "Word", category: "Documentos" },
    { name: "PowerPoint", category: "Apresentações" },
    { name: "Outlook", category: "Email" },
    { name: "Teams", category: "Comunicação" },
    { name: "SharePoint", category: "Colaboração" }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'emerald': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'blue': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'purple': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      case 'pink': return 'text-pink-400 bg-pink-500/20 border-pink-500/30';
      default: return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
    }
  };

  const getProgressColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'from-emerald-400 to-emerald-600';
      case 'blue': return 'from-blue-400 to-blue-600';
      case 'purple': return 'from-purple-400 to-purple-600';
      case 'pink': return 'from-pink-400 to-pink-600';
      default: return 'from-emerald-400 to-emerald-600';
    }
  };

  return (
    <div className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Habilidades & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Tecnologias, ferramentas e frameworks que domino para criar soluções inovadoras
          </p>
        </div>

        {/* Skills Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-2 backdrop-blur-sm flex items-center justify-center ${getColorClasses(category.color)}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.skills.length} tecnologias</p>
              </div>
            );
          })}
        </div>

        {/* Detailed Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.title} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg border backdrop-blur-sm ${getColorClasses(category.color)}`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-400 text-xs">{skill.years}</span>
                          <span className={`text-sm font-medium ${category.color === 'emerald' ? 'text-emerald-400' : category.color === 'blue' ? 'text-blue-400' : category.color === 'purple' ? 'text-purple-400' : 'text-pink-400'}`}>
                            {skill.level}%
                          </span>
                        </div>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${getProgressColor(category.color)} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Tools & Technologies */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
            <Settings className="text-emerald-400" size={24} />
            Ferramentas & Tecnologias
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="text-center group">
                <div className="bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-emerald-500/50 rounded-lg p-4 transition-all duration-200 group-hover:transform group-hover:scale-105">
                  <div className="text-sm font-medium text-white mb-1 group-hover:text-emerald-400 transition-colors">
                    {tool.name}
                  </div>
                  <div className="text-xs text-gray-400">{tool.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-emerald-400 mb-8">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Liderança",
              "Trabalho em Equipe",
              "Comunicação",
              "Resolução de Problemas",
              "Análise de Dados",
              "Adaptabilidade",
              "Gestão de Tempo",
              "Pensamento Crítico",
              "Aprendizado Contínuo",
              "Orientação a Resultados",
              "Planejamento Estratégico",
              "Otimização de Processos"
            ].map((skill) => (
              <div key={skill} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 rounded-lg p-3 text-sm text-gray-300 hover:text-emerald-400 transition-all duration-200">
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