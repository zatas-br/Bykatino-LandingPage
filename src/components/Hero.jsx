import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-6 rounded-3xl overflow-hidden bg-secondary min-h-[600px] flex items-center px-12 z-10">
      {/* Background Graphic */}
      <img
        src="/logo-fundo-secao.png"
        alt=""
        className="absolute top-1/2 left-[60%] w-[900px] -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none z-0 rotate-[15deg] opacity-60 mix-blend-multiply"
      />

      <div className="relative z-10 flex w-full justify-between items-center h-full pt-12">
        {/* Left Content */}
        <div className="max-w-[700px] flex flex-col justify-center space-y-6">
          <h1 className="text-primary text-5xl lg:text-7xl font-bold leading-[1.1] z-10 relative drop-shadow-sm">
            Sua melhor versão<br/>começa com o look ideal.
          </h1>

          <p className="text-[#7B1F34] text-lg font-semibold max-w-[550px] leading-relaxed z-10 relative">
            Descubra a fusão perfeita entre conforto de alta<br/>
            performance e design sofisticado. A ByKatino traz a moda<br/>
            fitness que valoriza suas curvas e potencializa seus treinos,<br/>
            direto do coração do Piauí para você.
          </p>

          <div className="pt-12 z-20 relative">
            <button
              className="group relative inline-flex items-center text-primary font-bold py-3 transition-all duration-300 gap-4"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative flex items-center justify-center w-12 h-12">
                {/* Expandable background */}
                <div
                  className="absolute left-0 top-0 h-full bg-white/40 rounded-full transition-all duration-500 ease-out z-0"
                  style={{ width: isHovered ? '200px' : '48px' }}
                />

                {/* Arrow Icon */}
                <div className="absolute left-0 top-0 bg-transparent border border-primary/50 w-12 h-12 rounded-full flex items-center justify-center z-10">
                   <ArrowRight
                     size={20}
                     className="text-primary transition-transform duration-500"
                     style={{ transform: isHovered ? 'translateX(5px)' : 'translateX(0)' }}
                   />
                </div>
              </div>

              <span className="relative z-10 text-sm tracking-wider uppercase ml-2 transition-colors duration-300" style={{ color: isHovered ? '#1E1E1E' : '#3C000E' }}>
                VER COLEÇÃO
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 bottom-0 h-[105%] w-[60%] flex items-end justify-end pointer-events-none z-20">
          <img
            src="/mulher-melhor-versao.png"
            alt="Mulher com roupa fitness ByKatino"
            className="object-contain h-full w-auto object-right-bottom transform translate-y-4 translate-x-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;