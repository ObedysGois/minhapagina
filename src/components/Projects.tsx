import React, { useState } from 'react';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, BarChart4, AppWindow, Eye } from 'lucide-react';
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
import checkpesoThumb from '../../assets/checkpeso2.png';
import checkpeso1 from '../../assets/checkpeso1.png';
import checkpeso3 from '../../assets/checkpeso3.png';
import checkpeso4 from '../../assets/checkpeso4.png';
import checkpeso5 from '../../assets/checkpeso5.png';
import checkpeso6 from '../../assets/checkpeso6.png';
import checkpeso7 from '../../assets/checkpeso7.png';
import checkpeso8 from '../../assets/checkpeso8.png';
import checkpeso9 from '../../assets/checkpeso9.png';
import checkpeso10 from '../../assets/checkpeso10.png';
import checkpeso11 from '../../assets/checkpeso11.png';
import checkpeso12 from '../../assets/checkpeso12.png';
import checkpeso13 from '../../assets/checkpeso13.png';
import checkpeso14 from '../../assets/checkpeso14.png';
import checkpeso15 from '../../assets/checkpeso15.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Dashboard de Indicadores Logísticos (KPI’s)",
      description: "Solução de Business Intelligence para monitoramento e análise de performance logística.",
      fullDescription: "Dashboard corporativo desenvolvido em Power BI para centralizar e padronizar a visualização de indicadores logísticos. A solução permite o acompanhamento contínuo de métricas críticas de desempenho operacional, apoiando a análise de eficiência, produtividade e nível de serviço por período, operação e unidade.",
      problem: "Indicadores logísticos descentralizados em planilhas, dificultando análise, comparação e tomada de decisão.",
      solution: "Centralização dos dados em dashboard interativo com atualização automática e visão consolidada de performance.",
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
      title: "Sistema Web de Gestão e Auditoria de Fretes",
      description: "Sistema corporativo para controle, validação e auditoria de processos de frete.",
      fullDescription: "Sistema Web desenvolvido para gestão estruturada do ciclo de fretes, contemplando cadastros, parametrizações e validações automáticas. Permite auditoria de valores, controle de tabelas de preços e acompanhamento do processo de forma padronizada e rastreável.",
      problem: "Processo manual e suscetível a erros no controle e validação de fretes.",
      solution: "Digitalização do processo com regras automáticas de validação e fluxo controlado de conferência.",
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
      title: "Dashboard de Dias de Estoque (DDE)",
      description: "Ferramenta analítica para gestão de estoque baseada em giro e cobertura.",
      fullDescription: "Dashboard analítico desenvolvido para monitorar Dias de Estoque (DDE), permitindo avaliação contínua do giro e da cobertura dos produtos. Apoia as áreas de compras e logística na tomada de decisão, reduzindo riscos de ruptura e excesso de inventário.",
      problem: "Baixa visibilidade sobre cobertura de estoque e comportamento do giro dos produtos.",
      solution: "Dashboard interativo com cálculo automático de DDE por SKU, categoria e período.",
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
      title: "Sistema de Gestão de Entregas e Last Mile",
      description: "Plataforma integrada para monitoramento e controle de entregas em tempo real.",
      fullDescription: "Sistema completo para gestão de entregas, composto por aplicativo mobile e painel web. Permite acompanhamento em tempo real, controle de status, registro de ocorrências e comprovação digital de entrega, atendendo diferentes perfis de usuário (administração, operação e cliente).",
      problem: "Baixa visibilidade operacional e dificuldade no acompanhamento do status das entregas.",
      solution: "Plataforma integrada com informações em tempo real e rastreabilidade do processo de entrega.",
      image: gestaoEntregasThumb,
      images: [gestaoEntregasThumb, gestaoEntregas1, gestaoEntregas2, gestaoEntregas3, gestaoEntregas4, gestaoEntregas5, gestaoEntregas6, gestaoEntregas7, gestaoEntregas8, gestaoEntregas9, gestaoEntregas10, gestaoEntregas11, gestaoEntregas12, gestaoEntregas13, gestaoEntregas14, gestaoEntregas15, gestaoEntregas16, gestaoEntregas17],
      technologies: ["React", "Node.js", "Supabase", "Mobile First"],
      category: "Logística",
      icon: AppWindow,
      featured: true
    },
    {
      id: 3,
      title: "Sistema de Gestão de Logística Reversa",
      description: "Sistema corporativo para controle e rastreabilidade de devoluções.",
      fullDescription: "Sistema desenvolvido para estruturar o fluxo de logística reversa, permitindo controle detalhado das devoluções, motivos, volumes e reentrada em estoque. Garante rastreabilidade e padronização do processo, reduzindo perdas e retrabalho.",
      problem: "Fluxo de devoluções descentralizado e sem controle padronizado.",
      solution: "Digitalização e rastreamento completo do processo de logística reversa.",
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
      title: "Automação de Processamento de NF-e (PDF)",
      description: "Ferramenta de automação para organização e tratamento de documentos fiscais.",
      fullDescription: "Utilitário Web desenvolvido para leitura, separação e renomeação automática de arquivos PDF de Notas Fiscais. Reduz significativamente o tempo operacional do time administrativo e elimina erros manuais no tratamento de documentos.",
      problem: "Processo manual e repetitivo no tratamento de arquivos fiscais.",
      solution: "Automação do processamento de PDFs com padronização e ganho de produtividade.",
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
      title: "Dashboard de Perdas Operacionais",
      description: "Painel analítico para monitoramento e redução de perdas logísticas.",
      fullDescription: "Dashboard focado na análise de perdas operacionais, permitindo identificação de padrões, causas recorrentes e impactos por produto, setor e período. Suporta ações corretivas e melhoria contínua dos processos.",
      problem: "Dificuldade em identificar causas e recorrência das perdas operacionais.",
      solution: "Visualização analítica clara para direcionamento de ações corretivas.",
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
      title: "Sistema de Controle de Expedição",
      description: "Sistema para conferência e validação do processo de despacho.",
      fullDescription: "Sistema desenvolvido para garantir acuracidade na expedição de cargas, realizando conferência sistêmica entre pedidos, volumes e carregamentos. Gera registros e romaneios de forma automatizada.",
      problem: "Erros de expedição e divergências entre pedido e carga.",
      solution: "Conferência estruturada e validação antes do carregamento.",
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
      title: "Sistema de Gestão de Canhotos",
      description: "Plataforma para digitalização e controle de comprovantes de entrega.",
      fullDescription: "Sistema voltado à digitalização, indexação e organização de canhotos de notas fiscais. Facilita a busca, comprovação de entregas e rastreabilidade documental.",
      problem: "Perda de documentos físicos e dificuldade de localização.",
      solution: "Arquivo digital centralizado, indexado e pesquisável.",
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
      title: "Dashboard de Despesas Logísticas",
      description: "Painel analítico para monitoramento e controle de despesas de transporte.",
      fullDescription: "Dashboard financeiro desenvolvido para análise de despesas logísticas, permitindo comparativos por transportadora, período e indicadores de custo. Suporta gestão financeira e avaliação de eficiência do transporte.",
      problem: "Baixa visibilidade sobre despesas logísticas e seus direcionadores.",
      solution: "Análise estruturada com indicadores financeiros e comparativos.",
      image: despesasFretesThumb,
      images: [despesasFretesThumb, despesasFretes1, despesasFretes2, despesasFretes3],
      technologies: ["Power BI", "Finanças"],
      category: "Business Intelligence",
      icon: BarChart4,
      demoUrl: bifrete,
      featured: true
    },
    {
      id: 15,
      title: "Sistema de Recebimento e Controle de Pesagens (CHECKPESO)",
      description: "Sistema Web corporativo para controle de recebimentos por pesagem e amostragem, com base na norma ABNT NBR 5429 – Nível S2.",
      fullDescription: `
        Sistema Web desenvolvido para gestão e controle de recebimentos logísticos por meio de pesagens e planos de amostragem, conforme a norma ABNT NBR 5429 (nível S2).

        A plataforma permite o registro estruturado das pesagens realizadas no recebimento de mercadorias, possibilitando a identificação de divergências, perdas e não conformidades de forma padronizada e rastreável.

        Os dados coletados são consolidados e analisados por produto, fornecedor, filial e período, oferecendo uma visão analítica detalhada do desempenho operacional e da recorrência de desvios no processo de recebimento.

        O sistema conta com dashboards interativos em tempo real, indicadores de perdas e conformidade, além da geração automática de relatórios em PDF, HTML e Excel. Também possui envio automatizado de relatórios e alertas via e-mail e WhatsApp, apoiando a tomada de decisão operacional e gerencial.

        Inclui módulos de cadastro e parametrização de produtos, fornecedores, filiais e critérios de amostragem, garantindo padronização do processo, histórico de registros e suporte contínuo à melhoria operacional.
        `,
      problem: "Falta de controle estruturado e rastreável sobre perdas, divergências de peso e não conformidades no processo de recebimento.",
      solution: "Padronização do controle de pesagens e amostragem, com análise detalhada de perdas e desempenho por produto, fornecedor e filial, suportada por dashboards e relatórios automatizados.",
      image: checkpesoThumb,
      images: [
        checkpesoThumb,
        checkpeso1,
        checkpeso3,
        checkpeso4,
        checkpeso5,
        checkpeso6,
        checkpeso7,
        checkpeso8,
        checkpeso9,
        checkpeso10,
        checkpeso11,
        checkpeso12,
        checkpeso13,
        checkpeso14,
        checkpeso15
      ],
      technologies: ["Next.js", "TypeScript", "React", "HTML", "CSS", "SHADCN"],
      category: "Sistema Web Corporativo",
      icon: BarChart4,
      demoUrl: "https://apppesagem.vercel.app/",
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
    <div className="py-24 bg-graphite-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-steel-50 font-heading">
            Projetos & Cases
          </h2>
          <div className="section-divider mb-8"></div>
          <p className="text-lg text-steel-400 max-w-3xl">
            Soluções desenvolvidas para resolver problemas reais de negócio.
            Foco em automação, visibilidade de dados e eficiência operacional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group card-corporate overflow-hidden flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-44 overflow-hidden cursor-pointer" onClick={() => openModal(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 bg-graphite-950/90 text-forest-400 text-xs font-medium rounded border border-steel-700/50">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-steel-100 mb-2 group-hover:text-forest-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-steel-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-xs text-steel-500 bg-steel-800/50 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-steel-700/50 flex justify-between items-center">
                  <button
                    onClick={() => openModal(project)}
                    className="text-sm text-forest-400 hover:text-forest-300 font-medium flex items-center gap-1.5"
                  >
                    <Eye size={15} /> Ver Detalhes
                  </button>
                  {project.codeUrl && project.codeUrl !== "#" && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-steel-500 hover:text-steel-300 transition-colors"
                    >
                      <Github size={17} />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-graphite-950/95">
          <div className="bg-graphite-900 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-steel-700 relative flex flex-col md:flex-row">

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-50 p-2 bg-graphite-950/80 hover:bg-steel-800 rounded text-steel-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left: Image Gallery */}
            <div className="w-full md:w-2/3 bg-graphite-950 relative group min-h-[280px] md:min-h-[500px] flex items-center justify-center">
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
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-graphite-950/70 hover:bg-steel-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft size={22} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-graphite-950/70 hover:bg-steel-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight size={22} />
                      </button>

                      {/* Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {selectedProject.images.map((_: any, idx: number) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-forest-500 w-5' : 'bg-steel-600 hover:bg-steel-500'
                              }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="text-steel-500">Sem imagens disponíveis</div>
              )}
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-1/3 p-6 flex flex-col">
              <div className="mb-4">
                <span className="text-forest-400 text-xs font-medium bg-forest-900/30 px-2.5 py-1 rounded border border-forest-700/30">
                  {selectedProject.category}
                </span>
              </div>

              <h2 className="text-2xl font-semibold text-steel-100 mb-4">{selectedProject.title}</h2>

              <div className="space-y-5 flex-1 overflow-y-auto pr-1">
                <div>
                  <h3 className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-2">Sobre o Projeto</h3>
                  <p className="text-steel-300 text-sm leading-relaxed">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.problem && (
                  <div className="bg-steel-800/30 p-3 rounded border-l-2 border-petrol-500">
                    <h3 className="text-xs font-semibold text-petrol-400 uppercase tracking-wider mb-1">Problema</h3>
                    <p className="text-steel-300 text-sm">{selectedProject.problem}</p>
                  </div>
                )}

                {selectedProject.solution && (
                  <div className="bg-steel-800/30 p-3 rounded border-l-2 border-forest-500">
                    <h3 className="text-xs font-semibold text-forest-400 uppercase tracking-wider mb-1">Solução</h3>
                    <p className="text-steel-300 text-sm">{selectedProject.solution}</p>
                  </div>
                )}

                <div>
                  <h3 className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-2">Tecnologias</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span key={tech} className="text-xs text-steel-300 bg-steel-800/50 px-2.5 py-1 rounded border border-steel-700/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-steel-700/50 flex flex-col gap-2">
                {selectedProject.demoUrl && selectedProject.demoUrl !== "#" && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-forest-600 hover:bg-forest-700 text-white rounded font-medium flex items-center justify-center gap-2 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    Ver Projeto / Documentação
                  </a>
                )}
                {selectedProject.codeUrl && selectedProject.codeUrl !== "#" && (
                  <a
                    href={selectedProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-steel-700 hover:bg-steel-600 text-steel-200 rounded font-medium flex items-center justify-center gap-2 transition-colors border border-steel-600 text-sm"
                  >
                    <Github size={16} />
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
