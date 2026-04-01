import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Sets = () => {
  const { sets } = content;

  const colorOptions = [
    {
      id: 'marrom',
      alt: 'Conjunto Marrom',
      smallSrc: '/roupa-maior.png',
      largeSrc: '/roupa-marron.png'
    },
    {
      id: 'verde',
      alt: 'Conjunto Verde',
      smallSrc: '/roupa-menor-verde.png',
      largeSrc: '/roupa-verde.png'
    },
    {
      id: 'azul',
      alt: 'Conjunto Azul',
      smallSrc: '/roupa-menor-azul.png',
      largeSrc: '/roupa-azul.png'
    }
  ];

  const [activeColor, setActiveColor] = useState(colorOptions[0]);

  return (
    <section className="w-full bg-primary pt-16 pb-16 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center lg:items-start text-center md:text-left">

        {/* Left Column: Text & Small Images */}
        <div className="flex-1 flex flex-col items-center md:items-start w-full">
          <div className="max-w-xl flex flex-col items-center md:items-start">
            <h2 className="text-secondary text-3xl md:text-[2.75rem] font-bold mb-6 tracking-tight leading-tight">
              {sets.heading}
            </h2>
            <p className="text-white/90 text-base md:text-[1.1rem] leading-snug mb-10 font-medium whitespace-pre-line">
              {sets.description}
            </p>

            <button className="bg-secondary text-primary font-bold py-3 px-8 rounded-full btn-hover-effect inline-flex items-center gap-3 transition-all shadow-md mx-auto md:mx-0">
              <span className="btn-hover-content flex items-center gap-3 text-sm">
                <ArrowRight size={18} />
                {sets.ctaButton}
              </span>
            </button>
          </div>

          {/* Small Images Row */}
          <div className="flex gap-4 md:gap-6 mt-12 md:mt-16 lg:mt-32 w-full max-w-lg mx-auto md:mx-0 justify-center md:justify-start">
            {colorOptions.map((color) => (
              <div
                key={color.id}
                onClick={() => setActiveColor(color)}
                onMouseEnter={() => setActiveColor(color)}
                className={`flex-1 rounded-[16px] md:rounded-[24px] overflow-hidden aspect-[4/3] cursor-pointer transition-all duration-300 ${
                  activeColor.id === color.id
                    ? 'ring-4 ring-secondary scale-105 z-10'
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
                style={{
                  backgroundColor: color.id === 'marrom' ? '#f5e8d0' : color.id === 'verde' ? '#e8f0e6' : '#0E3572'
                }}
              >
                <img
                  src={color.smallSrc}
                  alt={color.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Large Image */}
        <div className="w-full lg:w-[400px] xl:w-[420px] shrink-0 self-stretch flex items-stretch mt-8 md:mt-0">
          <div className="w-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-white/5 aspect-[3/4] lg:aspect-auto h-full flex items-center justify-center relative">
            {colorOptions.map((color) => (
              <img
                key={color.id}
                src={color.largeSrc}
                alt={color.alt}
                className={`w-full h-full object-cover object-top absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  activeColor.id === color.id ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sets;
