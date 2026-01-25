import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="py-24 bg-graphite-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Text Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-steel-50 font-heading">
              Vamos Conversar?
            </h2>
            <div className="section-divider mb-8"></div>

            <p className="text-lg text-steel-300 mb-10 leading-relaxed">
              Estou sempre em busca de novos desafios e oportunidades para aplicar minha experiência
              em análise de dados e otimização logística. Se sua empresa busca eficiência e inovação,
              entre em contato.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:obedysjunio@email.com"
                className="flex items-center gap-4 p-4 card-corporate group"
              >
                <div className="p-2.5 bg-forest-900/40 rounded-lg group-hover:bg-forest-900/60 transition-colors">
                  <Mail className="text-forest-400" size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-steel-500 uppercase tracking-wider">Email</h3>
                  <p className="text-base font-medium text-steel-100">obedysjunio@email.com</p>
                </div>
              </a>

              <a
                href="tel:+5547999226394"
                className="flex items-center gap-4 p-4 card-corporate group"
              >
                <div className="p-2.5 bg-forest-900/40 rounded-lg group-hover:bg-forest-900/60 transition-colors">
                  <Phone className="text-forest-400" size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-steel-500 uppercase tracking-wider">Telefone / WhatsApp</h3>
                  <p className="text-base font-medium text-steel-100">+55 (47) 9 9922-6394</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 card-corporate">
                <div className="p-2.5 bg-steel-800/60 rounded-lg">
                  <MapPin className="text-steel-400" size={20} />
                </div>
                <div>
                  <h3 className="text-xs font-medium text-steel-500 uppercase tracking-wider">Localização</h3>
                  <p className="text-base font-medium text-steel-100">Joinville, SC - Brasil</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-petrol-700 hover:bg-petrol-600 text-white rounded font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/ObedysGois"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 bg-steel-700 hover:bg-steel-600 text-white rounded font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-corporate p-6 md:p-8">
            <h3 className="text-lg font-semibold text-steel-100 mb-6">Envie uma mensagem</h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-steel-400 uppercase tracking-wider mb-1.5">Nome</label>
                <input
                  type="text"
                  className="w-full bg-graphite-950 border border-steel-700 rounded px-4 py-3 text-steel-100 focus:outline-none focus:border-forest-500 transition-colors text-sm"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-steel-400 uppercase tracking-wider mb-1.5">Email</label>
                <input
                  type="email"
                  className="w-full bg-graphite-950 border border-steel-700 rounded px-4 py-3 text-steel-100 focus:outline-none focus:border-forest-500 transition-colors text-sm"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-steel-400 uppercase tracking-wider mb-1.5">Assunto</label>
                <select className="w-full bg-graphite-950 border border-steel-700 rounded px-4 py-3 text-steel-100 focus:outline-none focus:border-forest-500 transition-colors text-sm">
                  <option>Oportunidade de Trabalho</option>
                  <option>Consultoria / Projeto</option>
                  <option>Networking</option>
                  <option>Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-steel-400 uppercase tracking-wider mb-1.5">Mensagem</label>
                <textarea
                  className="w-full bg-graphite-950 border border-steel-700 rounded px-4 py-3 text-steel-100 focus:outline-none focus:border-forest-500 transition-colors h-28 resize-none text-sm"
                  placeholder="Olá, gostaria de conversar sobre..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-forest-600 hover:bg-forest-700 text-white font-medium py-3 rounded transition-all flex items-center justify-center gap-2 mt-2"
              >
                <Send size={16} /> Enviar Mensagem
              </button>
            </form>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-steel-800 text-center text-steel-500 text-sm">
          <p>© {new Date().getFullYear()} Obedys Júnio. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
