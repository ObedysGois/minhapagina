import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-50">
              Vamos Conversar?
            </h2>
            <div className="w-20 h-1.5 bg-emerald-500 rounded-full mb-8"></div>
            
            <p className="text-lg text-slate-300 mb-12 leading-relaxed">
              Estou sempre em busca de novos desafios e oportunidades para aplicar minha experiência 
              em análise de dados e otimização logística. Se sua empresa busca eficiência e inovação, 
              entre em contato.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:obedysjunio@email.com" 
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Mail className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400">Email</h3>
                  <p className="text-lg font-semibold text-slate-100">obedysjunio@email.com</p>
                </div>
              </a>

              <a 
                href="tel:+5547999226394" 
                className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all group"
              >
                <div className="p-3 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400">Telefone / WhatsApp</h3>
                  <p className="text-lg font-semibold text-slate-100">+55 (47) 9 9922-6394</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <MapPin className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-slate-400">Localização</h3>
                  <p className="text-lg font-semibold text-slate-100">Joinville, SC - Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
              >
                <Linkedin size={20} /> LinkedIn
              </a>
              <a 
                href="https://github.com/ObedysGois" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-slate-900/20"
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>

          {/* Contact Form (Visual Only for now, or functional if backend exists, but keeping simple for frontend) */}
          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
            <h3 className="text-xl font-bold text-slate-100 mb-6">Envie uma mensagem</h3>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Assunto</label>
                <select className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors">
                  <option>Oportunidade de Trabalho</option>
                  <option>Consultoria / Projeto</option>
                  <option>Networking</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Mensagem</label>
                <textarea 
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-colors h-32 resize-none"
                  placeholder="Olá, gostaria de conversar sobre..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 mt-2"
              >
                <Send size={18} /> Enviar Mensagem
              </button>
            </form>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Obedys Júnio. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
