import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { content } from '../data.js';

const Header = () => {
  const { header } = content;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 w-full md:px-8 mt-4 md:mt-8 relative z-50">
      <header className={`bg-secondary ${isMenuOpen ? 'rounded-b-[20px] rounded-t-[20px] md:rounded-full' : 'rounded-full'} mx-auto max-w-7xl px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between shadow-sm`}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={header.logoSrc} alt={header.logoAlt} className="h-8 md:h-10" />
          <button
            className="md:hidden text-primary p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} mt-4 md:mt-0 md:flex flex-col md:flex-row items-center w-full md:w-auto space-y-4 md:space-y-0 md:space-x-8 xl:space-x-12`}>
          {header.navLinks.map((link, index) => (
            <a key={index} href={link.href} className="text-primary font-semibold text-sm hover:text-tertiary transition-colors w-full text-center md:w-auto py-2 md:py-0">
              {link.text}
            </a>
          ))}
          <button className="md:hidden bg-light hover:bg-white text-primary rounded-full px-5 py-3 font-bold text-sm flex items-center gap-2 transition-colors border border-transparent hover:border-primary/10 shadow-sm w-full justify-center mt-2">
            <div className="bg-secondary rounded-full p-1.5 flex items-center justify-center">
               <ArrowRight size={14} className="text-primary" />
            </div>
            {header.contactButton}
          </button>
        </nav>

        <button className="hidden md:flex bg-light hover:bg-white text-primary rounded-full px-6 py-2.5 font-bold text-sm items-center gap-2 transition-colors border border-transparent hover:border-primary/10 shadow-sm group">
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