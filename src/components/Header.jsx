import React from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Header = () => {
  const { header } = content;

  return (
    <header className="bg-secondary rounded-full mx-auto max-w-7xl mt-8 px-8 py-4 flex items-center justify-between shadow-sm relative z-20">
      <div className="flex items-center">
        <img src={header.logoSrc} alt={header.logoAlt} className="h-10" />
      </div>

      <nav className="hidden md:flex items-center space-x-12">
        {header.navLinks.map((link, index) => (
          <a key={index} href={link.href} className="text-primary font-semibold text-sm hover:text-tertiary transition-colors">
            {link.text}
          </a>
        ))}
      </nav>

      <button className="bg-light hover:bg-white text-primary rounded-full px-6 py-2.5 font-bold text-sm flex items-center gap-2 transition-colors border border-transparent hover:border-primary/10 shadow-sm group">
        <div className="bg-secondary rounded-full p-1.5 flex items-center justify-center">
           <ArrowRight size={16} className="text-primary" />
        </div>
        {header.contactButton}
      </button>
    </header>
  );
};

export default Header;