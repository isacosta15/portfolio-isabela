import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#7A3E9D] to-[#9B59B6] text-white relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Vamos <span className="text-[#FAF8FB]">Conversar?</span>
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8 rounded-full"></div>

          <p className="text-lg sm:text-xl mb-12 text-white/90 leading-relaxed">
            Estou sempre aberta a novas oportunidades, colaborações e conversas sobre tecnologia.
            <br className="hidden sm:block" />
            Entre em contato comigo através dos canais abaixo!
          </p>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Mail size={32} />
                </div>
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-sm text-white/80 break-all">{personalInfo.email}</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Linkedin size={32} />
                </div>
                <h3 className="font-bold text-lg">LinkedIn</h3>
                <p className="text-sm text-white/80">Conecte-se comigo</p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                  <Github size={32} />
                </div>
                <h3 className="font-bold text-lg">GitHub</h3>
                <p className="text-sm text-white/80">Veja meu código</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;