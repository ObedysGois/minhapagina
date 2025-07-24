import React from 'react';
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase } from 'lucide-react';

const Resume = () => {
  return (
    <div className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Currículo
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Minha experiência profissional, formação acadêmica e principais conquistas
          </p>
          <a 
            href="/assets/curriculo_teste.pdf" 
            download="Obedys_Junio_Curriculo.pdf"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 justify-center shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
          >
            <Download size={18} />
            Download PDF Completo
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Informações Pessoais
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="text-emerald-400" size={16} />
                  <span className="text-gray-300 text-sm">obedysjunio@email.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-emerald-400" size={16} />
                  <span className="text-gray-300 text-sm">+55 (47) 9 9922-6394</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-emerald-400" size={16} />
                  <span className="text-gray-300 text-sm">Joinville-SC</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Principais Habilidades
              </h3>
              
              <div className="space-y-4">
                {[
                  { skill: "TOTVS Protheus", level: 80 },
                  { skill: "Power BI", level: 70 },
                  { skill: "Excel", level: 80 },
                  { skill: "Javascript", level: 40 },
                  { skill: "Html e Css", level: 50 },
                  { skill: "IA", level: 75 }
                ].map((item) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 text-sm">{item.skill}</span>
                      <span className="text-emerald-400 text-sm">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                Idiomas
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Português</span>
                  <span className="text-emerald-400 text-sm">Nativo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Inglês</span>
                  <span className="text-emerald-400 text-sm">Básico</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Espanhol</span>
                  <span className="text-emerald-400 text-sm">Básico</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience & Education */}
          <div className="lg:col-span-2">
            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Briefcase className="text-emerald-400" size={24} />
                Experiência Profissional
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    position: "Assistente de Logística PL",
                    company: "Trielo Comercio, Exportação e Importação de Alimentos LTDA",
                    period: "2024 - Presente",
                    description: "Responsável por liderar e executar demandas administrativas e operacionais, pertinentes ao setor logístico, bem como: emissão de relatórios; Backoffice em demandas fiscais (CFOP, faturamento, lançamentos, prazos, etc.); gerenciamento de fretes; gerenciamento Last Mile Delivery (Outbound); acompanhamento dos indicadores KPI's (Perdas, Lead Time, Devoluções, Despesas de Fretes, DDE, EBTIDA, Orçamento, etc.); entre outras atividades utilizando ferramentas e metodologias (5W2H, 5S, PDCA, Empowerment, Compliance, ASAP, Hands-on, Kaizen).",
                    achievements: [
                      "Desenvolveu Dashboards com insights dos Indicadores",
                      "Desenvolveu Aplicativos para gerenciamento dos processos e tarefas (Gestão de Fretes, Gestão de Logística Reversa, Registros CrossDocking, Controle de IFCO, Gestão de Canhotos, Gestão de Ativos, Gestão de Entregas)."
                    ]
                  },
                  {
                    position: "Assistente de Logística JR",
                    company: "Trielo Comercio, Exportação e Importação de Alimentos LTDA",
                    period: "2022 - 2024",
                    description: "Responsável por executar demandas administrativas e operacionais, pertinentes ao setor logístico, bem como: emissão de relatórios; organização e arquivamento de documentos; emissão e lançamento de notas fiscais de entrada e de saída (NF-e, MDF-e, NFS-e, CT-e, etc.); roteirização de cargas; contratação de caminhões terceirizados; controle de fretes; controle de ativos (paletes, bins, caixas IFCO); acompanhamento das entregas; entre outras atividades.",
                    achievements: [
                      "Desenvolveu Relatórios automatizados para otimização dos processos e tarefas",
                      "Implementou testes automatizados",
                      "Melhorou performance de sistemas legados em 60%"
                    ]
                  },
                  {
                    position: "Auxiliar Administrativo",
                    company: "Fazenda Santa Terezinha LTDA (Frutas Docemel)",
                    period: "2021 - 2022",
                    description: "Atividades correlacionadas a caixa/financeiro (emissão de NF’s e NFC’s, atendimento ao cliente, acompanhamento de canhotos, contas a pagar e a receber e demais demandas dos setores de faturamento e financeiro).",
                    achievements: [
                      "Implantou um procedimento eficiente de controle de notas fiscais",
                    ]
                  },
                   {
                    position: " Aprendiz - Administrativo PCM (maintenance planning and control)",
                    company: "Xerox do Brasil",
                    period: "2014 - 2015",
                    description: "Apoio ao setor nas demandas administrativas (arquivo, relatórios, emissão de RC’s, RMA’S e NF’s), bem como os registros das manutenções preventivas e corretivas.",
                    achievements: [
                    ]
                  },
      
                ].map((job, index) => (
                  <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{job.position}</h4>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                    </div>
                    <p className="text-emerald-400 font-medium mb-3">{job.company}</p>
                    <p className="text-gray-400 mb-4">{job.description}</p>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="w-1 h-1 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
                <Award className="text-emerald-400" size={24} />
                Formação Acadêmica
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    degree: "Análise de Desenvolvimento de Sistemas",
                    institution: "Uninter (EAD)",
                    period: "2025 - Presente",
                  },
                  {
                    degree: "Tecnico em Manutenção Mecânica industrial",
                    institution: " Instituto Federal de Educação, Ciência e Tecnologia da Bahia (IFBA)",
                    period: "2015 - 2019",
                  },
                  {
                    degree: "Ensino Médio - Concluído",
                    institution: " CEA - Colégio Estadual de Aratu",
                    period: "2012",
                  }
                ].map((education, index) => (
                  <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-lg p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h4 className="text-lg font-bold text-white">{education.degree}</h4>
                      <div className="flex items-center gap-2 text-emerald-400 text-sm">
                        <Calendar size={14} />
                        {education.period}
                      </div>
                    </div>
                    <p className="text-emerald-400 font-medium mb-3">{education.institution}</p>
                    <p className="text-gray-400">{education.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;