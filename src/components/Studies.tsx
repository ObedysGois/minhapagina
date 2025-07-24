import React from 'react';
import { BookOpen, Award, Calendar, ExternalLink, Star, Trophy, GraduationCap, AlignCenterVertical as Certificate } from 'lucide-react';
import certificadoAltura from '../../assets/certificadoaltura.pdf';

const Studies = () => {
  const education = [
    {
      degree: "Graduando em Análise e Desenvolvimento de Sistemas",
      institution: "Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA)",
      period: "2025 - 2028",
      status: "Em andaento",
      description: "Formando em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento web, banco de dados e metodologias ágeis.",
      highlights: ["Javascript", "CSS", "HTML", "Python", "React", "MySQL", "Cloud", "Mobile", "Web", "IA"],
      category: "Nível Superior"
    },
    {
      degree: "Técnico em Manutenção Mecânica Industrial",
      institution: "Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA)",
      period: "2014 - 2016",
      status: "Concluído",
      description: "Formação técnica sólida em manutenção mecânica industrial, processos de fabricação e gestão de equipamentos.",
      highlights: ["Manutenção Preventiva e Corretiva", "Gestão de Equipamentos", "Processos Industriais"],
      grade: "8.5/10",
      category: "Nível Técnico"
    },
    {
      degree: "Ensino Médio",
      institution: "CEA - Colégio Estadual de Aratu",
      period: "2012",
      status: "Concluído",
      description: "Formação básica completa, estabelecendo fundamentos para desenvolvimento profissional e pessoal.",
      highlights: ["Formação Básica", "Desenvolvimento Pessoal", "Preparação para Mercado de Trabalho"],
      grade: "Concluído",
      category: "Ensino Médio"
    }
  ];

  const certifications = [
    {
      name: "Certificação Trabalho em Altura (NR 35)",
      issuer: "CTA Treinamentos",
      date: "2025",
      credentialId: "Carga horária - 8h",
      status: "Concluído",
      level: "Básico",
      color: "cyan"
    },
    {
      name: "Certificação Brigada de Incêndio (NR 23) e Primeiros Socorros (NR 7)",
      issuer: "CTA Treinamentos",
      date: "2024",
      credentialId: "Carga horária - 36h",
      status: "Concluído",
      level: "Básico",
      color: "cyan"
    },
    {
      name: "Certificação Auxiliar Administrativo",
      issuer: "Centro de Integração Empresa-Escola (CIEE)",
      date: "2022",
      credentialId: "Carga horária - 400h",
      status: "Concluído",
      level: "Intermediário",
      color: "orange"
    },
    {
      name: "Certificação Sistema Integrado de Engenharia da Manutenção (SIEM)",
      issuer: "Instituição MF Planejamento",
      date: "2015",
      credentialId: "Carga horária - 24h",
      status: "Concluído",
      level: "Básico",
      color: "cyan"
    },
    {
      name: "Certificação Auxiliar de Recursos Humanos",
      issuer: "Sest Senat - Pronatec",
      date: "2014",
      credentialId: "Carga horária - 160h",
      status: "Concluído",
      level: "Básico",
      color: "cyan"
    },
    {
      name: "Certificação Auxiliar Plataforma Petrolífera",
      issuer: "Instituto Federal da Bahia (IFBA) - Pronatec",
      date: "2013",
      credentialId: "Carga horária - 260h",
      status: "Concluído",
      level: "Intermediário",
      color: "orange"
    }
  ];

  

  const getCertificationColor = (color: string) => {
    switch (color) {
      case 'orange': return 'text-orange-400 bg-orange-500/20 border-orange-500/30';
      case 'blue': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'cyan': return 'text-cyan-400 bg-cyan-500/20 border-cyan-500/30';
      case 'green': return 'text-green-400 bg-green-500/20 border-green-500/30';
      default: return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
    }
  };

  return (
    <div className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Formação & Estudos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Minha jornada educacional, certificações e desenvolvimento contínuo de conhecimentos
          </p>
        </div>

        {/* Education Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <GraduationCap className="text-emerald-400 mx-auto mb-3" size={32} />
            <div className="text-2xl font-bold text-emerald-400 mb-1">3</div>
            <div className="text-gray-400 text-sm">Formações</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <Certificate className="text-blue-400 mx-auto mb-3" size={32} />
            <div className="text-2xl font-bold text-blue-400 mb-1">6</div>
            <div className="text-gray-400 text-sm">Certificações</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <BookOpen className="text-purple-400 mx-auto mb-3" size={32} />
            <div className="text-2xl font-bold text-purple-400 mb-1">15+</div>
            <div className="text-gray-400 text-sm">Cursos Online</div>
          </div>
          <div className="text-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
            <Trophy className="text-yellow-400 mx-auto mb-3" size={32} />
            <div className="text-2xl font-bold text-yellow-400 mb-1">3000+</div>
            <div className="text-gray-400 text-sm">Horas de Estudo</div>
          </div>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
            <GraduationCap className="text-emerald-400" size={24} />
            Formação Acadêmica
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      {edu.degree}
                      <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full border border-emerald-500/30 ml-2">
                        {edu.category}
                      </span>
                    </h4>
                    <p className="text-emerald-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-gray-400 mb-4">{edu.description}</p>
                  </div>
                  
                  <div className="lg:text-right lg:ml-6">
                    <div className="flex items-center gap-2 text-emerald-400 text-sm mb-2">
                      <Calendar size={14} />
                      {edu.period}
                    </div>
                    <div className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded-full mb-2">
                      {edu.status}
                    </div>
                    <div className="text-white font-medium">Nota: {edu.grade}</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-4">
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Destaques:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span key={idx} className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded border border-gray-600">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
            <Award className="text-emerald-400" size={24} />
            Certificações Profissionais
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg border backdrop-blur-sm ${getCertificationColor(cert.color)}`}>
                    <Certificate size={20} />
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full border ${getCertificationColor(cert.color)}`}>
                    {cert.level}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {cert.name}
                </h4>
                <p className="text-gray-400 text-sm mb-3">{cert.issuer}</p>
                
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Emitido:</span>
                    <span>{cert.date}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-emerald-400">{cert.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>ID:</span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                </div>
                
                {cert.name === "Certificação Trabalho em Altura (NR 35)" ? (
                  <a href={certificadoAltura} download="certificado_trabalho_altura_nr35.pdf" className="mt-4 w-full bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
                    <ExternalLink size={14} />
                    Verificar Credencial
                  </a>
                ) : (
                  <button className="mt-4 w-full bg-gray-700/50 hover:bg-gray-700 border border-gray-600 hover:border-emerald-500/50 text-gray-300 hover:text-emerald-400 py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2">
                    <ExternalLink size={14} />
                    Verificar Credencial
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        

        {/* Continuous Learning */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
            <BookOpen className="text-emerald-400 mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">Aprendizado Contínuo</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-6">
              Acredito firmemente no aprendizado contínuo. Atualmente estudando novas tecnologias emergentes, 
              incluindo Web3, blockchain, e as mais recentes ferramentas de IA generativa.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-gray-800/50 border border-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm">
                📚 Lendo: "Clean Architecture"
              </span>
              <span className="bg-gray-800/50 border border-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm">
                🎯 Próximo: Web3 Development
              </span>
              <span className="bg-gray-800/50 border border-gray-700 text-gray-300 px-3 py-2 rounded-lg text-sm">
                🚀 Estudando: Advanced AI/ML
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Studies;