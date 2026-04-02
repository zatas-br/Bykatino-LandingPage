import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { hero } = content;

  return (
    <section className="px-4 md:px-0 font-montserrat">
      {/* PARENTE DA HERO: Adicionado 'md:overflow-visible' para permitir que a imagem "vaze" o topo */}
      <div className="relative w-full max-w-7xl mx-auto mt-8 md:mt-16 rounded-[40px] min-h-[550px] md:min-h-[650px] flex items-center px-6 md:px-12 z-10 overflow-hidden md:overflow-visible bg-secondary">
        
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[40px]">
          <img
            src={hero.backgroundImageSrc}
            alt={hero.backgroundImageAlt}
            className="hidden md:block absolute top-1/2 left-[80%] w-[1000px] -translate-x-1/2 -translate-y-[45%] object-contain z-0 rotate-[15deg] opacity-60 mix-blend-multiply max-w-none"
          />
        </div>

        <div className="relative z-10 flex flex-col md:flex-row w-full justify-between items-center h-full pt-8 md:pt-12">
          <div className="w-full md:max-w-[700px] flex flex-col justify-center space-y-4 md:space-y-6 z-30">
            <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] md:leading-[1.1] text-center md:text-left">
              {hero.heading}
            </h1>

            <p className="text-[#7B1F34] text-base md:text-lg font-semibold max-w-[550px] text-center md:text-left mx-auto md:mx-0">
              {hero.description}
            </p>

            <div className="pt-4 md:pt-12 z-40 relative flex justify-center md:justify-start">
              <a
                href="#"
                className="group relative inline-flex items-center font-bold py-3 pl-4 pr-16 transition-all duration-300 rounded-full cursor-pointer overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div
                  className="absolute left-0 top-0 h-full bg-white/40 transition-all duration-500 ease-out z-0 rounded-full"
                  style={{ width: isHovered ? '100%' : '48px' }}
                />

                <span className="relative z-10 text-sm tracking-wider uppercase ml-12 transition-colors duration-300" style={{ color: isHovered ? '#1E1E1E' : '#3C000E' }}>
                  {hero.ctaButton}
                </span>

                <div
                  className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center z-10 transition-all duration-500 ease-in-out bg-white/40 rounded-full w-10 h-10 shadow-sm"
                  style={{ left: isHovered ? 'calc(100% - 44px)' : '4px' }}
                >
                   <ArrowRight size={20} className="text-primary" />
                </div>
              </a>
            </div>
          </div>

          {/* Contêiner da Imagem Direita com Comentários de Ajuste */}
          {/* COMO AJUSTAR A IMAGEM NO DESKTOP (md:):
              1. TAMANHO: Altere 'md:h-[165%]'. Aumente para maior, diminua para menor.
              2. SUBIR/DESCER: Altere 'md:-bottom-5'. Use valores negativos maiores (ex: -bottom-20) para descer mais, ou zero/positivos para subir.
              3. ESQUERDA/DIREITA: Altere 'md:right-4'. Diminua para mover para a direita (pode usar negativo ex: -right-10), aumente para mover para a esquerda.
          */}
          <div className="relative md:absolute right-0 md:right-0 -bottom-30.5 mt-8 md:mt-0 h-[350px] md:h-[175%] w-full md:w-[50%] flex items-end justify-center md:justify-end pointer-events-none z-20 overflow-visible">
            <img
              src={hero.imageSrc}
              alt={hero.imageAlt}
              className="object-contain h-full w-auto object-bottom md:absolute md:bottom-0 md:right-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;