import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';

const Studies = () => {
  const education = [
    {
      id: 1,
      degree: "Tecnologia em Análise e Desenvolvimento de Sistemas",
      institution: "IFBA - Instituto Federal da Bahia",
      period: "2025 - 2028 (Em andamento)",
      description: "Foco em engenharia de software, banco de dados, inteligência artificial e gestão de projetos tecnológicos."
    },
    {
      id: 2,
      degree: "Técnico em Manutenção Mecânica Industrial",
      institution: "IFBA - Instituto Federal da Bahia",
      period: "2014 - 2016",
      description: "Formação técnica com ênfase em processos industriais, gestão de manutenção e controle de qualidade."
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Trabalho em Altura (NR 35)",
      issuer: "CTA Treinamentos",
      year: "2025",
      hours: "16h"
    },
    {
      id: 2,
      title: "Brigada de Incêndio (NR 23) e Primeiros Socorros (NR 7)",
      issuer: "CTA Treinamentos",
      year: "2024",
      hours: "56h"
    },
    {
      id: 3,
      title: "Auxiliar Administrativo",
      issuer: "CIEE",
      year: "2022",
      hours: "400h"
    },
    {
      id: 4,
      title: "Sistema Integrado de Engenharia de Manutenção",
      issuer: "MF Planejamento",
      year: "2015",
      hours: "24h"
    },
    {
      id: 5,
      title: "Auxiliar de Recursos Humanos",
      issuer: "Sest Senat",
      year: "2014",
      hours: "160h"
    },
    {
      id: 6,
      title: "Auxiliar de Plataforma Petrolífera",
      issuer: "IFBA",
      year: "2013",
      hours: "260h"
    }
  ];

  return (
    <div className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Formal Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-xl">
                <GraduationCap className="text-emerald-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-50">Formação Acadêmica</h2>
            </div>

            <div className="space-y-8">
              {education.map((item) => (
                <div key={item.id} className="relative pl-8 border-l-2 border-slate-700">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-800 border-2 border-emerald-500"></div>
                  
                  <div className="mb-1 text-emerald-400 font-medium text-sm flex items-center gap-2">
                    <Calendar size={14} />
                    {item.period}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-1">{item.degree}</h3>
                  <p className="text-slate-400 font-medium mb-3">{item.institution}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-blue-500/10 rounded-xl">
                <Award className="text-blue-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-slate-50">Certificações</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-slate-900 p-4 rounded-xl border border-slate-700 hover:border-blue-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-2">
                    <BookOpen className="text-slate-500 group-hover:text-blue-400 transition-colors" size={20} />
                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">{cert.year}</span>
                  </div>
                  <h4 className="text-slate-200 font-semibold mb-1 line-clamp-2 min-h-[3rem]">
                    {cert.title}
                  </h4>
                  <div className="flex justify-between items-center text-sm text-slate-400">
                    <span>{cert.issuer}</span>
                    <span className="text-xs opacity-60">{cert.hours}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Studies;
