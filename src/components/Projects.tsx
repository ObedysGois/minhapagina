import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Brain, Smartphone, Globe, Database, X, ChevronLeft, ChevronRight, Search, BarChart3, AppWindow, AppWindowIcon, LucideAppWindow, TruckIcon, BarChart2, BarChart4, SmartphoneIcon } from 'lucide-react';
import AprendizadoContinuoChecklist from './AprendizadoContinuoChecklist';

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
import fundoProjetos from '../../assets/fundotelaprojetos.png';


const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({});

  useEffect(() => {
    console.log('Estado selectedImage mudou:', selectedImage);
  }, [selectedImage]);

  const projects = [
    {
      id: 1,
      title: "Dashboard de Indicadores KPI's",
      description: "Dashboard completo com visualizações de dados logísticos, relatórios e métricas de performance.",
      image: dashboardev,
      images: [
        dashboardDevolucoes1,
        dashboardDevolucoes2,
        dashboardDevolucoes3,
        dashboardDevolucoes4,
        dashboardDevolucoes5
      ],
      technologies: ["Power BI", "DAX", "Database"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiNzk4NjY2Y2EtODQ4NS00ODliLTlhMjEtYzYxYzE5MDhkYmYwIiwidCI6ImExOTdhMjQ0LWJmOTEtNDJiYS1hZDY2LTNjNzQyNTU3M2E4MSJ9",
      codeUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Sistema de Gestão de Fretes",
      description: "Aplicativo web para gerenciamento de fretes, com registros e controle de custos logísticos.",
      image: gestaoFretesThumb,
      images: [
        gestaoFretesThumb,
        gestaoFretes1,
        gestaoFretes2,
        gestaoFretes4
      ],
      technologies: ["IA", "JavaScript", "HTML/CSS", "CSV", "Database", "Processos Logísticos", "Relatórios"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioGestaoFretes,
      codeUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Sistema de Controle de Logística Reversa",
      description: "Sistema para gerenciamento de Retornos de ativos, trocas e processos de logística reversa.",
      image: logisticaReversaThumb,
      images: [
        logisticaReversaThumb,
        logisticaReversa1,
        logisticaReversa2,
        logisticaReversa3,
        logisticaReversa4,
        logisticaReversa5,
        logisticaReversa6
      ],
      technologies: ["IA", "JavaScript", "HTML/CSS", "CSV", "Database", "Processos Logísticos", "Relatórios"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioLogisticaReversa,
      codeUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Sistema 2",
      description: "Sistema para controle de ativos logísticos, paletes, bins e caixas IFCO.",
      image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["TOTVS Protheus", "Excel", "Power BI", "QR Code"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Sistema 1",
      description: "Aplicativo para registro e controle de operações de CrossDocking e otimização de processos.",
      image: "https://images.pexels.com/photos/7947661/pexels-photo-7947661.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "HTML/CSS", "TOTVS", "Excel"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Sistema 3",
      description: "Sistema para gestão e controle de canhotos de entrega e confirmação de recebimento.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["TOTVS Protheus", "Excel", "Power BI", "Mobile"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: "#",
      codeUrl: "#",
      featured: false
    },
    {
      id: 7,
      title: "Dashboard - Resultado de Perdas",
      description: "Dashboard interativo para análise e controle de perdas, com comparativos temporais e categóricos.",
      image: dashboardPerdasThumb,
      images: [
        dashboardPerdasThumb,
        dashboardPerdas1
      ],
      technologies: ["Power BI", "DAX", "Database"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: biperdas,
      codeUrl: "#",
      featured: true
    },
    {
      id: 8,
      title: "Dashboard - Resultado das Devoluções",
      description: "Dashboard desenvolvido em Excel para análise e controle de devoluções, trocas e processos de logística reversa.",
      image: dashboardDevolucoesExcel,
      images: [
        dashboardDevolucoesExcel
      ],
      technologies: ["Excel", "VBA", "Power Query", "Gráficos Dinâmicos"],
      category: "Excel",
      icon: BarChart4,
      demoUrl: devolucoesExcel,
      codeUrl: "#",
      featured: true
    },
    {
      id: 9,
      title: "Sistema de Registros de CrossDocking",
      description: "Aplicação web para registro, controle e acompanhamento de operações de CrossDocking, otimizando processos logísticos.",
      image: crossdockingThumb,
      images: [
        crossdockingThumb,
        crossdocking1,
        crossdocking2,
        crossdocking3
      ],
      technologies: ["IA", "JavaScript", "HTML/CSS", "CSV", "Database", "Processos Logísticos", "Relatórios"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
    {
      id: 10,
      title: "Aplicativo Web Renomeador e Separador de NF",
      description: "Aplicativo web para renomear e separar Notas Fiscais em PDF de forma automática e eficiente.",
      image: renThumb,
      images: [
        renThumb
      ],
      technologies: ["React", "JavaScript", "PDF.js", "Node.js"],
      category: "Automação",
      icon: AppWindow,
      demoUrl: "https://tiny-axolotl-6a8f46.netlify.app/",
      codeUrl: "https://github.com/ObedysGois/gdm-separador-pdf",
      featured: true
    },
    {
      id: 11,
      title: "Dashboard - DDE dos Produtos",
      description: "Dashboard interativo em Power BI para análise de DDE (Dias de Estoque) dos produtos, com visualização de tendências e indicadores.",
      image: dashboardDDEThumb,
      images: [
        dashboardDDEThumb,
        dashboardDDE1,
        dashboardDDE2,
        dashboardDDE3
      ],
      technologies: ["Power BI", "DAX", "Database"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: "https://app.powerbi.com/view?r=eyJrIjoiMzg0MjU1MmItMDJlOS00MTkwLWI4NDctMGJlYzY3MjUwOGIzIiwidCI6ImExOTdhMjQ0LWJmOTEtNDJiYS1hZDY2LTNjNzQyNTU3M2E4MSJ9",
      codeUrl: "#",
      featured: true
    },
    {
      id: 12,
      title: "Controle de Expedição",
      description: "Aplicativo para controle, acompanhamento e registro de expedição de mercadorias, com visualização de etapas e comprovantes.",
      image: expedicaoThumb,
      images: [
        expedicaoThumb,
        expedicao1,
        expedicao2,
        expedicao3,
        expedicao4
      ],
      technologies: ["IA", "JavaScript", "HTML/CSS", "CSV", "Database", "Processos Logísticos", "Relatórios"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioExpedicao,
      codeUrl: "#",
      featured: true
    },
    {
      id: 13,
      title: "Aplicativo Web - Gestão de Canhotos",
      description: "Aplicativo web para controle, registro e gestão de canhotos de entrega, com visualização e download de comprovantes.",
      image: canhotosThumb,
      images: [
        canhotosThumb,
        canhotos1,
        canhotos2,
        canhotos3,
        canhotos4,
        canhotos5,
        canhotos6,
        canhotos7,
        canhotos8
      ],
      technologies: ["IA", "JavaScript", "HTML/CSS", "CSV", "Database", "Processos Logísticos", "Relatórios"],
      category: "Logística (AppWeb)",
      icon: AppWindow,
      demoUrl: relatorioPorCliente,
      codeUrl: "#",
      featured: true
    },
    {
      id: 14,
      title: "Dashboard - Despesas de Fretes",
      description: "Dashboard para análise e acompanhamento das despesas de fretes, com visualização de relatórios e gráficos.",
      image: despesasFretesThumb,
      images: [
        despesasFretesThumb,
        despesasFretes1,
        despesasFretes2,
        despesasFretes3
      ],
      technologies: ["Power BI", "DAX", "Database"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: bifrete,
      codeUrl: "#",
      featured: true
    },
    {
      id: 15,
      title: "Aplicativo Web - Gestão de Entregas",
      description: "Aplicativo web responsivo para mobile, com foco em gestão de entregas, com 3 tipos de usuarios (admin, colaborador, motorista).",
      image: gestaoEntregasThumb,
      images: [
        gestaoEntregasThumb,
        gestaoEntregas1,
        gestaoEntregas2,
        gestaoEntregas3,
        gestaoEntregas4,
        gestaoEntregas5,
        gestaoEntregas6,
        gestaoEntregas7,
        gestaoEntregas8,
        gestaoEntregas9,
        gestaoEntregas10,
        gestaoEntregas11,
        gestaoEntregas12,
        gestaoEntregas13,
        gestaoEntregas14,
        gestaoEntregas15,
        gestaoEntregas16,
        gestaoEntregas17
      ],
      technologies: ["React", "Node.js", "Javascript", "HTML", "CSS", "Supabase", "Firebase"],
      category: "Logística",
      icon: AppWindow,
      demoUrl: "#",
      codeUrl: "#",
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const nextImage = (projectId: number, totalImages: number) => {
    console.log('Next image clicked for project:', projectId, 'Total images:', totalImages);
    setCurrentImageIndex(prev => {
      const newIndex = ((prev[projectId] || 0) + 1) % totalImages;
      console.log('New index:', newIndex);
      return {
        ...prev,
        [projectId]: newIndex
      };
    });
  };

  const prevImage = (projectId: number, totalImages: number) => {
    console.log('Prev image clicked for project:', projectId, 'Total images:', totalImages);
    setCurrentImageIndex(prev => {
      const newIndex = prev[projectId] === 0 ? totalImages - 1 : (prev[projectId] || 0) - 1;
      console.log('New index:', newIndex);
      return {
        ...prev,
        [projectId]: newIndex
      };
    });
  };

  const nextImageModal = () => {
    if (selectedProject && selectedProject.images) {
      const currentIndex = currentImageIndex[selectedProject.id] || 0;
      const nextIndex = (currentIndex + 1) % selectedProject.images.length;
      setCurrentImageIndex(prev => ({
        ...prev,
        [selectedProject.id]: nextIndex
      }));
      setSelectedImage(selectedProject.images[nextIndex]);
    }
  };

  const prevImageModal = () => {
    if (selectedProject && selectedProject.images) {
      const currentIndex = currentImageIndex[selectedProject.id] || 0;
      const prevIndex = currentIndex === 0 ? selectedProject.images.length - 1 : currentIndex - 1;
      setCurrentImageIndex(prev => ({
        ...prev,
        [selectedProject.id]: prevIndex
      }));
      setSelectedImage(selectedProject.images[prevIndex]);
    }
  };

  return (
    <div className="py-20 bg-gray-900 relative">
      <img 
        src={fundoProjetos}
        alt="Fundo de projetos"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-10"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Meus Projetos
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, incluindo aplicações web, projetos de IA e soluções inovadoras
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Projetos em Destaque
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-emerald-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                  <div className="relative overflow-hidden">
                    {project.images ? (
                      <>
                        <img
                          src={project.images[currentImageIndex[project.id] || 0]}
                          alt={`${project.title} - Imagem ${(currentImageIndex[project.id] || 0) + 1}`}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                          onClick={() => {
                            setSelectedImage(project.images[currentImageIndex[project.id] || 0]);
                            setSelectedProject(project);
                          }}
                          style={{ pointerEvents: 'auto' }}
                        />
                        {/* Navigation Arrows */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(project.id, project.images.length);
                          }}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(project.id, project.images.length);
                          }}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-10"
                        >
                          <ChevronRight size={18} />
                        </button>
                        {/* Image Counter */}
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full z-10">
                          {(currentImageIndex[project.id] || 0) + 1} / {project.images.length}
                        </div>
                      </>
                    ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(project.image)}
                        style={{ pointerEvents: 'auto' }}
                    />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-full p-2">
                        <Icon className="text-emerald-400" size={16} />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 text-xs px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <button
                        onClick={() => {
                          setSelectedImage(project.images ? project.images[currentImageIndex[project.id] || 0] : project.image);
                          setSelectedProject(project);
                        }}
                        className="bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-400 p-2 rounded-full hover:bg-emerald-500/30 transition-all duration-200 z-10"
                        title="Ampliar imagem"
                      >
                        <Search size={14} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-md border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download={project.title === "Sistema de Gestão de Fretes" ? "Relatorio_Gestao_Fretes_Ex.pdf" : project.title === "Controle de Logística Reversa" ? "relatorio_logistica_reversa.pdf" : project.title === "Dashboard de Devoluções - Excel" ? "Devoluções_Lançadas_excel.xlsm" : project.title === "Controle de Expedição" ? "Relatório_Expedição.pdf" : project.title === "Dashboard - Resultado de Perdas" || project.title === "Dashboard de Perdas" ? "biperdas.pdf" : project.title === "Dashboard - Despesas de Fretes" ? "bifrete.pdf" : project.title === "Aplicativo Web - Gestão de Canhotos" ? "relatorio_por_cliente.pdf" : undefined}
                        className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                      {(project.title === "Aplicativo Web Renomeador e Separador de NF" || project.title === "Aplicativo Web - Gestão de Entregas") && (
                      <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        Código
                      </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Outros Projetos */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <h3 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
            Outros Projetos
          </h3>
          <p className="text-gray-300 text-center max-w-xl mb-4">
            Tenho outros projetos desenvolvidos!<br />
            Acesse minha página no GitHub para ver mais exemplos e soluções:
          </p>
          <a
            href="https://github.com/ObedysGois"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 border border-emerald-500 text-emerald-400 px-6 py-2 rounded-lg font-medium hover:bg-emerald-500/10 hover:text-emerald-300 transition-all duration-200 shadow"
          >
            github.com/ObedysGois
          </a>
                    </div>
                  </div>
                  
      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => {
            setSelectedImage(null);
            setSelectedProject(null);
          }}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => {
                setSelectedImage(null);
                setSelectedProject(null);
              }}
              className="absolute -top-12 right-0 text-white hover:text-emerald-400 transition-colors z-10"
            >
              <X size={32} />
            </button>
            
            {/* Navigation Arrows for Modal */}
            {selectedProject && selectedProject.images && selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImageModal();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-10"
                      >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImageModal();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-200 z-10"
                    >
                  <ChevronRight size={24} />
                </button>
                {/* Image Counter for Modal */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full z-10">
                  {(currentImageIndex[selectedProject.id] || 0) + 1} / {selectedProject.images.length}
                </div>
              </>
            )}
            
            <img
              src={selectedImage}
              alt="Projeto ampliado"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
