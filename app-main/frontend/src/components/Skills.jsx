import React, { useEffect, useRef, useState } from 'react';
import { Code2, Users } from 'lucide-react';
import { hardSkills, softSkills } from '../data/mock';
import { Badge } from './ui/badge';

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#FAF8FB] via-white to-[#FAF8FB]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4 text-center">
              Minhas <span className="text-[#7A3E9D]">Habilidades</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#7A3E9D] to-[#B67DDC] mx-auto mb-16 rounded-full"></div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Hard Skills */}
              <div
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#7A3E9D]/10 rounded-lg">
                    <Code2 size={28} className="text-[#7A3E9D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">Hard Skills</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {hardSkills.map((skill, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-[#7A3E9D] to-[#9B59B6] text-white px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-300 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Soft Skills */}
              <div
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 delay-200 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#B67DDC]/10 rounded-lg">
                    <Users size={28} className="text-[#7A3E9D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1E1E1E]">Soft Skills</h3>
                </div>

                <ul className="space-y-4">
                  {softSkills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-700 hover:text-[#7A3E9D] transition-colors duration-300 group"
                    >
                      <span className="mt-1 w-2 h-2 bg-[#7A3E9D] rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                      <span className="text-base font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;