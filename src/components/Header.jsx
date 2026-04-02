import React, { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { content } from '../data.js';

const Header = () => {
  const { header } = content;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="px-4 w-full md:px-8 mt-4 md:mt-8 relative z-50 font-montserrat">
      <header className={`bg-secondary ${isMenuOpen ? 'rounded-[24px]' : 'rounded-[100px]'} mx-auto max-w-7xl px-4 md:px-8 py-3 md:py-4 flex flex-col md:flex-row items-center justify-between shadow-sm transition-all duration-300 ease-in-out`}>
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src={header.logoSrc} alt={header.logoAlt} className="h-8 md:h-10" />
          <button
            className="md:hidden text-primary p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <nav className={`grid transition-all duration-300 ease-in-out w-full md:w-auto ${isMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 md:opacity-100 md:grid-rows-none'}`}>
          <div className="overflow-hidden flex flex-col md:flex-row items-center">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 xl:space-x-12 pt-6 md:pt-0 pb-4 md:pb-0">
              {header.navLinks.map((link, index) => (
                <a key={index} href={link.href} className="text-primary font-bold text-sm hover:text-tertiary transition-colors w-full text-center md:w-auto">
                  {link.text}
                </a>
              ))}
              
              <button className="md:hidden bg-light text-primary rounded-full px-6 py-3 font-bold text-sm flex items-center gap-3 w-full justify-center shadow-sm">
                <div className="bg-secondary rounded-full p-1.5 flex items-center justify-center">
                   <ArrowRight size={14} className="text-primary" />
                </div>
                {header.contactButton}
              </button>
            </div>
          </div>
        </nav>

        <button className="hidden md:flex bg-light hover:bg-white text-primary rounded-full px-6 py-2.5 font-bold text-sm items-center gap-3 transition-all border border-transparent hover:border-primary/10 shadow-sm group">
          <div className="bg-secondary rounded-full p-1.5 flex items-center justify-center transition-transform group-hover:scale-110">
             <ArrowRight size={14} className="text-primary" />
          </div>
          {header.contactButton}
        </button>
      </header>
    </div>
  );
};

export default Header;