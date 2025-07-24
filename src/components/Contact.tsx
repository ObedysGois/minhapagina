import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_x2zfv9s', 'template_v4mi20y', form.current, '3ijYRDNCVPW_YIExg')
        .then((result) => {
            console.log(result.text);
            alert("Mensagem enviada com sucesso!");
            form.current?.reset();
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, (error) => {
            console.log(error.text);
            alert("Ocorreu um erro ao enviar a mensagem. Tente novamente.");
        });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "obedysjunio@email.com",
      action: "mailto:obedysjunio@email.com",
      color: "emerald"
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "+55 (47) 9 9922-6394",
      action: "tel:+5547999226394",
      color: "blue"
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Joinville-SC, Brasil",
      action: "#",
      color: "purple"
    },
    {
      icon: Calendar,
      label: "Disponibilidade",
      value: "Disponível para oportunidades",
      action: "#",
      color: "green"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      username: "@ObedysGois",
      url: "https://github.com/ObedysGois",
      color: "gray"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Obedys Junio",
      url: "https://www.linkedin.com/in/obedys-junio-b4656096/",
      color: "blue"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      username: "+55 71 98624-0067",
      url: "https://wa.me/5571986240067",
      color: "green"
    },
    {
      icon: Mail,
      label: "Email",
      username: "obedysjunio@email.com",
      url: "mailto:obedysjunio@email.com",
      color: "emerald"
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'emerald': return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
      case 'blue': return 'text-blue-400 bg-blue-500/20 border-blue-500/30';
      case 'purple': return 'text-purple-400 bg-purple-500/20 border-purple-500/30';
      case 'green': return 'text-green-400 bg-green-500/20 border-green-500/30';
      case 'gray': return 'text-gray-400 bg-gray-500/20 border-gray-500/30';
      default: return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/30';
    }
  };

  return (
    <div className="py-20 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Se tiver interesse em algum projeto, oportunidade de emprego ou ideias para o seu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
              <MessageCircle className="text-emerald-400" size={24} />
              Informações de Contato
            </h3>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6"
                  >
                    <div className={`w-12 h-12 rounded-lg border backdrop-blur-sm flex items-center justify-center mb-4 ${getIconColor(contact.color)}`}>
                      <Icon size={20} />
                    </div>
                    <h4 className="text-white font-medium mb-1">
                      {contact.label}
                    </h4>
                    <p className="text-gray-400 text-sm">{contact.value}</p>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 mb-8">
              <h4 className="text-lg font-bold text-white mb-4">Redes Sociais</h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 border border-gray-600 hover:border-gray-500 transition-all duration-200 group"
                    >
                      <div className={`p-2 rounded-lg border ${getIconColor(social.color)}`}>
                        <Icon size={16} />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                          {social.label}
                        </div>
                        <div className="text-gray-400 text-xs">{social.username}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-emerald-400 mb-3">Disponibilidade</h4>
              <p className="text-gray-400 text-sm mb-4">
                Atualmente disponível para novas oportunidades nas áreas de logística e/ou comercial. 
                Respondo emails dentro de 24 horas.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-400 text-sm font-medium">Online agora</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-2">
              <Send className="text-emerald-400" size={24} />
              Deixe sua Mensagem
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nome e Sobrenome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                  placeholder="Sobre o que você gostaria de conversar?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Conte-me mais sobre seu projeto ou ideia..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/25 transform hover:scale-105"
              >
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>

            {/* Additional Info */}
            <div className="mt-8 p-4 bg-gray-800/30 border border-gray-700 rounded-lg">
              <p className="text-gray-400 text-sm text-center">
                💡 <strong>Dica:</strong> Mencione detalhes sobre o projeto, vaga de emprego ou negocio para uma resposta mais direcionada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;