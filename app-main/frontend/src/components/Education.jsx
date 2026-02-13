import React, { useEffect, useRef, useState } from "react";
import { GraduationCap, Calendar } from "lucide-react";
import { education } from "../data/mock";
import { Card, CardContent } from "./ui/card";

const Education = () => {
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
      id="education"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4 text-center">
            Minha <span className="text-[#7A3E9D]">Formação</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#7A3E9D] to-[#B67DDC] mx-auto mb-16 rounded-full"></div>

          {/* Grid com dois cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((item, index) => (
              <Card
                key={index}
                className="border-2 border-[#B67DDC]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
              >
                <CardContent className="p-8 sm:p-12">
                  <div className="flex flex-col items-center text-center space-y-6">
                    
                    {/* Ícone */}
                    <div className="p-6 bg-gradient-to-br from-[#7A3E9D] to-[#B67DDC] rounded-full">
                      <GraduationCap size={48} className="text-white" />
                    </div>

                    {/* Instituição */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#1E1E1E]">
                      {item.institution}
                    </h3>

                    {/* Curso */}
                    <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                      {item.course}
                    </p>

                    {/* Data */}
                    <div className="flex items-center gap-2 text-[#7A3E9D] font-medium pt-4">
                      <Calendar size={20} />
                      <span>{item.conclusion}</span>
                    </div>

                    {/* Linha decorativa */}
                    <div className="pt-6">
                      <div className="w-24 h-1 bg-gradient-to-r from-[#7A3E9D] to-[#B67DDC] rounded-full"></div>
                    </div>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
