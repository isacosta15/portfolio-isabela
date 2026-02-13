import React, { useEffect, useRef, useState } from 'react';
import { about } from '../data/mock';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4 text-center">
              Sobre <span className="text-[#7A3E9D]">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7A3E9D] to-[#B67DDC] mx-auto mb-12 rounded-full"></div>

            <div className="bg-gradient-to-br from-[#FAF8FB] to-white p-8 sm:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                {about.description.split('\n\n').map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-base sm:text-lg transition-all duration-700 delay-${index * 100} ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-8 border-t border-[#B67DDC]/20">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#7A3E9D] mb-2">1º</div>
                  <div className="text-xs sm:text-sm text-gray-600">Semestre FATEC</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#7A3E9D] mb-2">6+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Certificações</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-[#7A3E9D] mb-2">6</div>
                  <div className="text-xs sm:text-sm text-gray-600">Projetos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;