import React from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FAF8FB] via-[#F5F0F8] to-[#FAF8FB] relative overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#B67DDC]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#7A3E9D]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="text-sm font-medium text-[#7A3E9D] bg-[#B67DDC]/20 px-4 py-2 rounded-full">
                Desenvolvedora em Formação
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight">
              {personalInfo.name}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-medium">
              {personalInfo.subtitle}
            </p>

            <p className="text-xl sm:text-2xl text-[#7A3E9D] font-light italic max-w-2xl">
              "{personalInfo.quote}"
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                onClick={() => scrollToSection('projects')}
                className="bg-[#7A3E9D] hover:bg-[#9B59B6] text-white px-8 py-6 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Ver Projetos
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-2 border-[#7A3E9D] text-[#7A3E9D] hover:bg-[#7A3E9D] hover:text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-300 hover:scale-105"
              >
                Entrar em Contato
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#7A3E9D] hover:text-white text-[#7A3E9D] transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#7A3E9D] hover:text-white text-[#7A3E9D] transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-[#7A3E9D] hover:text-white text-[#7A3E9D] transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7A3E9D] to-[#B67DDC] rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-8 border-white"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={32} className="text-[#7A3E9D]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;