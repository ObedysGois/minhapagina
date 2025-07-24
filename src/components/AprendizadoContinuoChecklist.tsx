import React from 'react';
import { BookOpen, Rocket, Book, ArrowRight } from 'lucide-react';

const cursos = [
  { nome: 'Clean Architecture', status: 'lendo' },
  { nome: 'Web3 Development', status: 'proximo' },
  { nome: 'Advanced AI/ML', status: 'estudando' },
];

const statusConfig = {
  lendo: {
    label: 'Lendo',
    icon: <Book className="w-4 h-4 text-blue-400" />, 
    color: 'bg-blue-900/40 text-blue-300 border-blue-500',
  },
  proximo: {
    label: 'Próximo',
    icon: <ArrowRight className="w-4 h-4 text-pink-400" />, 
    color: 'bg-pink-900/40 text-pink-300 border-pink-500',
  },
  estudando: {
    label: 'Estudando',
    icon: <Rocket className="w-4 h-4 text-emerald-400" />, 
    color: 'bg-emerald-900/40 text-emerald-300 border-emerald-500',
  },
};

const AprendizadoContinuoChecklist = () => {
  return (
    <div className="bg-gray-800/50 rounded-2xl p-8 max-w-2xl mx-auto mt-16 shadow-lg border border-gray-700">
      <div className="flex flex-col items-center mb-6">
        <BookOpen className="w-12 h-12 text-emerald-400 mb-2" />
        <h3 className="text-3xl font-bold text-emerald-400 mb-2">Aprendizado Contínuo</h3>
        <p className="text-gray-300 text-center max-w-xl mb-4">
          Acredito firmemente no aprendizado contínuo. Atualmente estudando novas tecnologias emergentes, incluindo Web3, blockchain, e as mais recentes ferramentas de IA generativa.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {cursos.map((curso) => {
          const cfg = statusConfig[curso.status];
          return (
            <span
              key={curso.nome}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border font-medium text-sm ${cfg.color}`}
            >
              {cfg.icon}
              {cfg.label === 'Lendo' ? `Lendo: "${curso.nome}"` : cfg.label === 'Próximo' ? `Próximo: ${curso.nome}` : `Estudando: ${curso.nome}`}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default AprendizadoContinuoChecklist;