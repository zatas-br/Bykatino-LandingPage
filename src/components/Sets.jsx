import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Sets = () => {
  const { sets } = content;
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  const colorOptions = [
    { id: 'marrom', alt: 'Conjunto Marrom', smallSrc: '/roupa-maior.png', largeSrc: '/roupa-marron.png' },
    { id: 'verde', alt: 'Conjunto Verde', smallSrc: '/roupa-menor-verde.png', largeSrc: '/roupa-verde.png' },
    { id: 'azul', alt: 'Conjunto Azul', smallSrc: '/roupa-menor-azul.png', largeSrc: '/roupa-azul.png' }
  ];

  const [activeColor, setActiveColor] = useState(colorOptions[0]);

  return (
    <section id="conjuntos" className="w-full bg-primary pt-16 pb-16 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start text-center md:text-left">
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <div className="max-w-xl flex flex-col items-center md:items-start">
            <h2 className="text-secondary text-3xl md:text-[2.75rem] font-bold mb-6 tracking-tight leading-tight">
              {sets.heading}
            </h2>
            <p className="text-white/90 text-base md:text-[1.1rem] leading-snug mb-10 font-medium whitespace-pre-line">
              {sets.description}
            </p>

            <a
              href="#"
              className="group relative inline-flex items-center font-bold py-3 pl-4 pr-16 transition-all duration-300 rounded-full cursor-pointer overflow-hidden"
              onMouseEnter={() => setIsBtnHovered(true)}
              onMouseLeave={() => setIsBtnHovered(false)}
            >
              <div
                className="absolute left-0 top-0 h-full bg-secondary transition-all duration-500 ease-out z-0 rounded-full"
                style={{ width: isBtnHovered ? '100%' : '48px' }}
              />

              <span className="relative z-10 text-[0.8rem] tracking-wider uppercase ml-12 transition-colors duration-300" style={{ color: isBtnHovered ? '#1E1E1E' : '#3C000E' }}>
                {sets.ctaButton}
              </span>

              <div
                className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center z-10 transition-all duration-500 ease-in-out bg-secondary rounded-full w-10 h-10 shadow-sm"
                style={{ left: isBtnHovered ? 'calc(100% - 44px)' : '4px' }}
              >
                 <ArrowRight size={18} className="text-primary" />
              </div>
            </a>
          </div>

          <div className="flex gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-32 w-full max-w-lg mx-auto md:mx-0 justify-center md:justify-start">
            {colorOptions.map((color) => (
              <div
                key={color.id}
                onClick={() => setActiveColor(color)}
                onMouseEnter={() => setActiveColor(color)}
                className={`flex-1 rounded-[16px] md:rounded-[24px] overflow-hidden aspect-[4/3] cursor-pointer transition-all duration-300 ${activeColor.id === color.id ? 'ring-4 ring-secondary scale-105 z-10' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}
                style={{ backgroundColor: color.id === 'marrom' ? '#f5e8d0' : color.id === 'verde' ? '#e8f0e6' : '#0E3572' }}
              >
                <img src={color.smallSrc} alt={color.alt} className="w-full h-full object-cover object-top" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-[400px] xl:w-[420px] shrink-0 self-stretch flex items-stretch mt-8 md:mt-0">
          <div className="w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-white/5 aspect-[3/4] lg:aspect-auto h-full flex items-center justify-center relative">
            {colorOptions.map((color) => (
              <img
                key={color.id}
                src={color.largeSrc}
                alt={color.alt}
                className={`w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 ease-in-out ${activeColor.id === color.id ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sets;