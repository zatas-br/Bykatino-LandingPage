import React from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Header = () => {
  const { header } = content;

  return (
    <div className="px-4 w-full md:px-8 mt-4 md:mt-8 relative z-20">
      <header className="bg-secondary rounded-[30px] md:rounded-full mx-auto max-w-7xl px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between shadow-sm gap-4 md:gap-0">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={header.logoSrc} alt={header.logoAlt} className="h-8 md:h-10" />
        </div>

        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {header.navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-primary font-semibold text-sm hover:text-tertiary transition-colors">
              {link.text}
            </a>
          ))}
        </nav>

        <button className="bg-light hover:bg-white text-primary rounded-full px-5 py-2 md:px-6 md:py-2.5 font-bold text-xs md:text-sm flex items-center gap-2 transition-colors border border-transparent hover:border-primary/10 shadow-sm group w-full md:w-auto justify-center md:justify-start">
          <div className="bg-secondary rounded-full p-1.5 flex items-center justify-center">
             <ArrowRight size={14} className="text-primary" />
          </div>
          {header.contactButton}
        </button>
      </header>
    </div>
  );
};

export default Header;