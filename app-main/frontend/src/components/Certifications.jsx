import React, { useEffect, useRef, useState } from 'react';
import { certifications } from '../data/mock';
import { Card, CardContent } from './ui/card';

const Certifications = () => {
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
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#FAF8FB] via-white to-[#FAF8FB]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4 text-center">
            Minhas <span className="text-[#7A3E9D]">Certificações</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7A3E9D] to-[#B67DDC] mx-auto mb-16 rounded-full"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card
                key={cert.id}
                className={`hover:shadow-xl transition-all duration-500 border-2 border-transparent hover:border-[#B67DDC] hover:scale-105 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  {/* Logo */}
                  <div className="h-16 flex items-center justify-center">
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      className="max-h-12 w-auto object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[#1E1E1E] text-lg leading-tight min-h-[3rem] flex items-center justify-center">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="text-sm font-medium text-[#7A3E9D]">
                    {cert.issuer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;