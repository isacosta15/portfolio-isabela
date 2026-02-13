import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1E1E] text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <p className="text-center text-sm sm:text-base flex items-center gap-2 flex-wrap justify-center">
            <Heart size={16} className="text-[#B67DDC] fill-[#B67DDC]" />
            <span>© {currentYear} Isabela Costa Nunes — Todos os direitos reservados.</span>
          </p>
          <p className="text-xs text-gray-400 text-center">
            Desenvolvido com React e muito café ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;