import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Video } from 'lucide-react';
import { projects } from '../data/mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E1E1E] mb-4 text-center">
            Meus <span className="text-[#7A3E9D]">Projetos</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#7A3E9D] to-[#B67DDC] mx-auto mb-4 rounded-full"></div>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi em competições e hackathons
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#B67DDC] group ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7A3E9D]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl text-[#1E1E1E] group-hover:text-[#7A3E9D] transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-[#7A3E9D]">
                    {project.subtitle}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-[#B67DDC]/20 text-[#7A3E9D] hover:bg-[#B67DDC]/30 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="bg-[#7A3E9D] hover:bg-[#9B59B6] text-white flex-1 min-w-[100px]"
                    >
                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Saiba Mais
                      </a>
                    </Button>
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

export default Projects;