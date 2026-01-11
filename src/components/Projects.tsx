import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, BarChart4, AppWindow, Database, Eye } from 'lucide-react';
import dashboardev from '../../assets/dashboardev.jpg';
import dashboardDevolucoes1 from '../../assets/1DASHBOARD_DEVOLUCOES_MODELO_1.png';
import dashboardDevolucoes2 from '../../assets/2DASHBOARD_DEVOLUCOES_MODELO_1.png';
import dashboardDevolucoes3 from '../../assets/3DASHBOARD_DEVOLUCOES_MODELO_1.png';
import dashboardDevolucoes4 from '../../assets/4DASHBOARD_DEVOLUCOES_MODELO_1.png';
import dashboardDevolucoes5 from '../../assets/5DASHBOARD_DEVOLUCOES_MODELO_1.png';
import gestaoFretesThumb from '../../assets/3primeira.png';
import gestaoFretes1 from '../../assets/1.png';
import gestaoFretes2 from '../../assets/2.png';
import gestaoFretes4 from '../../assets/4.png';
import relatorioGestaoFretes from '../../assets/Relatorio_Gestao_Fretes_Ex.pdf';
import logisticaReversaThumb from '../../assets/22.png';
import logisticaReversa1 from '../../assets/11.png';
import logisticaReversa2 from '../../assets/33.png';
import logisticaReversa3 from '../../assets/44.png';
import logisticaReversa4 from '../../assets/55.png';
import logisticaReversa5 from '../../assets/66.png';
import logisticaReversa6 from '../../assets/77.png';
import relatorioLogisticaReversa from '../../assets/relatorio_logistica_reversa.pdf';
import dashboardPerdasThumb from '../../assets/1DASHBOARD_PERDAS_MODELO_2.png';
import dashboardPerdas1 from '../../assets/2DASHBOARD_PERDAS_MODELO_2.png';
import biperdas from '../../assets/biperdas.pdf';
import dashboardDevolucoesExcel from '../../assets/1DASHBOARD_DEVOLUCOES_MODELO_EXCEL.png';
import devolucoesExcel from '../../assets/Devoluções_Lançadas_excel.xlsm';
import crossdockingThumb from '../../assets/1print.png';
import crossdocking1 from '../../assets/2print.png';
import crossdocking2 from '../../assets/3print.png';
import crossdocking3 from '../../assets/4print.png';
import renThumb from '../../assets/REN.png';
import dashboardDDEThumb from '../../assets/1DASHBOARD_DDE_MODELO_BI.png';
import dashboardDDE1 from '../../assets/2DASHBOARD_DDE_MODELO_BI.png';
import dashboardDDE2 from '../../assets/3DASHBOARD_DDE_MODELO_BI.png';
import dashboardDDE3 from '../../assets/4DASHBOARD_DDE_MODELO_BI.png';
import expedicaoThumb from '../../assets/111.png';
import expedicao1 from '../../assets/222.png';
import expedicao2 from '../../assets/333.png';
import expedicao3 from '../../assets/444.png';
import expedicao4 from '../../assets/555.png';
import relatorioExpedicao from '../../assets/Relatório_Expedição.pdf';
import canhotosThumb from '../../assets/n1.png';
import canhotos1 from '../../assets/n2.png';
import canhotos2 from '../../assets/n3.png';
import canhotos3 from '../../assets/n4.png';
import canhotos4 from '../../assets/n5.png';
import canhotos5 from '../../assets/n6.png';
import canhotos6 from '../../assets/n7.png';
import canhotos7 from '../../assets/n8.png';
import canhotos8 from '../../assets/n9.png';
import relatorioPorCliente from '../../assets/relatorio_por_cliente.pdf';
import despesasFretesThumb from '../../assets/d1.png';
import despesasFretes1 from '../../assets/d2.png';
import despesasFretes2 from '../../assets/d3.png';
import despesasFretes3 from '../../assets/d4.png';
import bifrete from '../../assets/bifrete.pdf';
import gestaoEntregasThumb from '../../assets/e1.png';
import gestaoEntregas1 from '../../assets/e2.png';
import gestaoEntregas2 from '../../assets/e3.png';
import gestaoEntregas3 from '../../assets/e4.png';
import gestaoEntregas4 from '../../assets/e5.png';
import gestaoEntregas5 from '../../assets/e6.png';
import gestaoEntregas6 from '../../assets/e7.png';
import gestaoEntregas7 from '../../assets/e8.png';
import gestaoEntregas8 from '../../assets/e9.png';
import gestaoEntregas9 from '../../assets/e10.png';
import gestaoEntregas10 from '../../assets/e11.png';
import gestaoEntregas11 from '../../assets/e12.png';
import gestaoEntregas12 from '../../assets/e13.png';
import gestaoEntregas13 from '../../assets/e14.png';
import gestaoEntregas14 from '../../assets/e15.png';
import gestaoEntregas15 from '../../assets/e16.png';
import gestaoEntregas16 from '../../assets/e17.png';
import gestaoEntregas17 from '../../assets/e18.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Dashboard de Indicadores KPI's",
      description: "Solução de Business Intelligence para monitoramento logístico.",
      fullDescription: "Dashboard completo desenvolvido em Power BI para centralizar a visualização de dados logísticos. Permite acompanhamento em tempo real de métricas críticas como tempo de entrega, custo por km e eficiência operacional.",
      problem: "Falta de visibilidade centralizada dos indicadores logísticos dispersos em planilhas.",
      solution: "Implementação de dashboard automatizado com conexão direta ao banco de dados.",
      image: dashboardev,
      images: [dashboardDevolucoes1, dashboardDevolucoes2, dashboardDevolucoes3, dashboardDevolucoes4, dashboardDevolucoes5],
      technologies: ["Power BI", "DAX", "SQL Server"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzk4NjY2Y2EtODQ4NS00ODliLTlhMjEtYzYxYzE5MDhkYmYwIiwidCI6ImExOTdhMjQ0LWJmOTEtNDJiYS1hZDY2LTNjNzQyNTU3M2E4MSJ9",
      featured: true
    },
    {
      id: 2,
      title: "Sistema de Gestão de Fretes",
      description: "Aplicação web para controle de custos e auditoria de fretes.",
      fullDescription: "Sistema robusto para gestão completa do ciclo de vida dos fretes, desde a contratação até o pagamento e auditoria. Inclui módulos de cadastro de transportadoras, tabelas de preço e conciliação de faturas.",
      problem: "Dificuldade no controle de custos de frete e divergências em faturas.",
      solution: "Sistema web com validação automática de valores e fluxo de aprovação.",
      image: gestaoFretesThumb,
      images: [gestaoFretesThumb, gestaoFretes1, gestaoFretes2, gestaoFretes4],
      technologies: ["JavaScript", "HTML/CSS", "Processos Logísticos"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioGestaoFretes,
      featured: true
    },
    {
      id: 11,
      title: "Dashboard - DDE dos Produtos",
      description: "Análise estratégica de Dias de Estoque para otimização de compras.",
      fullDescription: "Ferramenta analítica para gestão de estoque baseada no giro de produtos (DDE). Auxilia o time de compras e logística a manter níveis ideais de inventário, evitando rupturas e excessos.",
      problem: "Falta de clareza sobre a cobertura de estoque e risco de ruptura.",
      solution: "Dashboard interativo com cálculo automático de DDE por SKU e Categoria.",
      image: dashboardDDEThumb,
      images: [dashboardDDEThumb, dashboardDDE1, dashboardDDE2, dashboardDDE3],
      technologies: ["Power BI", "DAX", "Análise de Estoque"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzg0MjU1MmItMDJlOS00MTkwLWI4NDctMGJlYzY3MjUwOGIzIiwidCI6ImExOTdhMjQ0LWJmOTEtNDJiYS1hZDY2LTNjNzQyNTU3M2E4MSJ9",
      featured: true
    },
    {
      id: 15,
      title: "App Gestão de Entregas",
      description: "Plataforma completa para gestão de last mile e monitoramento em tempo real.",
      fullDescription: "Aplicativo multi-perfil (Admin, Motorista, Cliente) para gestão de entregas em tempo real. Inclui roteirização, comprovante digital de entrega e rastreamento.",
      problem: "Falta de informação em tempo real sobre o status das entregas.",
      solution: "App mobile para motoristas e painel web para gestão da frota.",
      image: gestaoEntregasThumb,
      images: [gestaoEntregasThumb, gestaoEntregas1, gestaoEntregas2, gestaoEntregas3, gestaoEntregas4, gestaoEntregas5, gestaoEntregas6, gestaoEntregas7, gestaoEntregas8, gestaoEntregas9, gestaoEntregas10, gestaoEntregas11, gestaoEntregas12, gestaoEntregas13, gestaoEntregas14, gestaoEntregas15, gestaoEntregas16, gestaoEntregas17],
      technologies: ["React", "Node.js", "Supabase", "Mobile First"],
      category: "Logística",
      icon: AppWindow,
      featured: true
    },
    {
      id: 3,
      title: "Controle de Logística Reversa",
      description: "Sistema para gestão de devoluções e trocas.",
      fullDescription: "Sistema especializado no fluxo de logística reversa, permitindo controle rigoroso de devoluções, motivos de recusa e reentrada no estoque.",
      problem: "Processo de devolução manual e desorganizado, gerando perdas.",
      solution: "Digitalização do fluxo de reversa com validação e rastreabilidade.",
      image: logisticaReversaThumb,
      images: [logisticaReversaThumb, logisticaReversa1, logisticaReversa2, logisticaReversa3, logisticaReversa4, logisticaReversa5, logisticaReversa6],
      technologies: ["JavaScript", "HTML/CSS", "Processos Logísticos"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioLogisticaReversa,
      featured: true
    },
    {
      id: 10,
      title: "Automação de NF-e (PDF)",
      description: "Ferramenta para processamento em lote de Notas Fiscais.",
      fullDescription: "Utilitário web para separação e renomeação automática de arquivos PDF de Notas Fiscais, otimizando o tempo do time administrativo.",
      problem: "Tempo excessivo gasto renomeando e separando arquivos PDF manualmente.",
      solution: "Automação que lê o conteúdo do PDF e organiza os arquivos.",
      image: renThumb,
      images: [renThumb],
      technologies: ["React", "PDF.js", "Automação"],
      category: "Automação",
      icon: AppWindow,
      demoUrl: "https://tiny-axolotl-6a8f46.netlify.app/",
      codeUrl: "https://github.com/ObedysGois/gdm-separador-pdf",
      featured: true
    },
    {
      id: 7,
      title: "Dashboard de Perdas",
      description: "Monitoramento de avarias e quebras operacionais.",
      fullDescription: "Painel de controle focado na identificação e redução de perdas operacionais, permitindo análise por motivo, setor e produto.",
      problem: "Dificuldade em identificar a causa raiz das perdas de estoque.",
      solution: "Visualização clara dos focos de perda para ação corretiva imediata.",
      image: dashboardPerdasThumb,
      images: [dashboardPerdasThumb, dashboardPerdas1],
      technologies: ["Power BI", "Análise de Dados"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: biperdas,
      featured: true
    },
    {
      id: 12,
      title: "Controle de Expedição",
      description: "Sistema para conferência e despacho de cargas.",
      fullDescription: "Ferramenta para garantir a acuracidade na expedição, validando pedidos contra cargas e gerando romaneios automáticos.",
      problem: "Erros de expedição e divergências de inventário.",
      solution: "Conferência sistêmica antes do carregamento.",
      image: expedicaoThumb,
      images: [expedicaoThumb, expedicao1, expedicao2, expedicao3, expedicao4],
      technologies: ["JavaScript", "Logística"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioExpedicao,
      featured: true
    },
    {
      id: 13,
      title: "Gestão de Canhotos",
      description: "Digitalização e controle de comprovantes de entrega.",
      fullDescription: "Sistema para digitalização e indexação de canhotos de nota fiscal, facilitando a busca e comprovação de entregas.",
      problem: "Perda de comprovantes físicos e demora na localização.",
      solution: "Arquivo digital indexado e pesquisável.",
      image: canhotosThumb,
      images: [canhotosThumb, canhotos1, canhotos2, canhotos3, canhotos4, canhotos5, canhotos6, canhotos7, canhotos8],
      technologies: ["JavaScript", "Gestão Documental"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioPorCliente,
      featured: true
    },
    {
      id: 14,
      title: "Dashboard Despesas de Fretes",
      description: "Análise financeira de custos logísticos.",
      fullDescription: "Dashboard financeiro focado em despesas de transporte, permitindo análise de custo por kg, % da receita e comparativos entre transportadoras.",
      problem: "Falta de controle sobre o impacto do frete na margem.",
      solution: "Visão detalhada do custo de servir logístico.",
      image: despesasFretesThumb,
      images: [despesasFretesThumb, despesasFretes1, despesasFretes2, despesasFretes3],
      technologies: ["Power BI", "Finanças"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: bifrete,
      featured: true
    }
  ];

  const openModal = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <div className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">
            Projetos & Cases
          </h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
          <p className="text-lg text-slate-400 max-w-3xl">
            Soluções desenvolvidas para resolver problemas reais de negócio. 
            Foco em automação, visibilidade de dados e eficiência operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => openModal(project)}>
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-slate-900/90 backdrop-blur-sm text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/20">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-slate-800 flex justify-between items-center">
                  <button 
                    onClick={() => openModal(project)}
                    className="text-sm text-emerald-400 hover:text-emerald-300 font-medium flex items-center gap-1"
                  >
                    <Eye size={16} /> Ver Detalhes
                  </button>
                  {project.codeUrl && project.codeUrl !== "#" && (
                    <a 
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/95 backdrop-blur-sm">
          <div className="bg-slate-800 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto border border-slate-700 shadow-2xl relative flex flex-col md:flex-row">
            
            {/* Close Button */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-50 p-2 bg-slate-900/50 hover:bg-slate-700 rounded-full text-slate-300 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Left: Image Gallery */}
            <div className="w-full md:w-2/3 bg-slate-900 relative group min-h-[300px] md:min-h-[600px] flex items-center justify-center">
              {selectedProject.images && selectedProject.images.length > 0 ? (
                <>
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={selectedProject.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/50 hover:bg-slate-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-slate-900/50 hover:bg-slate-700 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight size={24} />
                      </button>
                      
                      {/* Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.images.map((_: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              currentImageIndex === idx ? 'bg-emerald-500 w-6' : 'bg-slate-600 hover:bg-slate-500'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-slate-500">Sem imagens disponíveis</div>
              )}
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/3 p-8 flex flex-col">
              <div className="mb-6">
                <span className="text-emerald-400 text-sm font-medium bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                  {selectedProject.category}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-100 mb-4">{selectedProject.title}</h2>
              
              <div className="space-y-6 flex-1 overflow-y-auto pr-2 custom-scrollbar">
                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2">Sobre o Projeto</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.problem && (
                  <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20">
                    <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-1">Problema</h3>
                    <p className="text-slate-300 text-sm">{selectedProject.problem}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500/20">
                    <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-1">Solução</h3>
                    <p className="text-slate-300 text-sm">{selectedProject.solution}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Tecnologias</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span key={tech} className="text-sm text-slate-300 bg-slate-800 px-3 py-1.5 rounded-md border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col gap-3">
                {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                  <a 
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Ver Projeto Online / Documentação
                  </a>
                )}
                {selectedProject.codeUrl && selectedProject.codeUrl !== "#" && (
                  <a 
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors border border-slate-600"
                  >
                    <Github size={18} />
                    Ver Código Fonte
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
