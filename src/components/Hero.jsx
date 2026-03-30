import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { hero } = content;

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-16 rounded-3xl min-h-[650px] flex items-center px-12 z-10">
      {/* Background Wrapper */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden bg-secondary pointer-events-none">
        {/* Background Graphic */}
        <img
          src={hero.backgroundImageSrc}
          alt={hero.backgroundImageAlt}
          className="absolute top-1/2 left-[80%] w-[1000px] -translate-x-1/2 -translate-y-[45%] object-contain z-0 rotate-[15deg] opacity-60 mix-blend-multiply"
        />
      </div>

      <div className="relative z-10 flex w-full justify-between items-center h-full pt-12">
        {/* Left Content */}
        <div className="max-w-[700px] flex flex-col justify-center space-y-6">
          <h1 className="text-primary text-4xl lg:text-5xl font-bold leading-[1.1] z-10 relative drop-shadow-sm whitespace-pre-line">
            {hero.heading}
          </h1>

          <p className="text-[#7B1F34] text-lg font-semibold max-w-[550px] leading-relaxed z-10 relative whitespace-pre-line">
            {hero.description}
          </p>

          <div className="pt-12 z-20 relative">
            <button
              className="group relative inline-flex items-center font-bold py-3 pl-4 pr-16 transition-all duration-300 overflow-hidden rounded-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ backgroundColor: 'transparent' }}
            >
              {/* Expandable background starting from left */}
              <div
                className="absolute left-0 top-0 h-full bg-white/40 transition-all duration-500 ease-out z-0"
                style={{
                  width: isHovered ? '100%' : '48px',
                  borderRadius: '9999px'
                }}
              />

              <span className="relative z-10 text-sm tracking-wider uppercase ml-12 transition-colors duration-300" style={{ color: isHovered ? '#1E1E1E' : '#3C000E' }}>
                {hero.ctaButton}
              </span>

              {/* Arrow Icon sliding from left */}
              <div
                className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center z-10 transition-all duration-500 ease-in-out"
                style={{
                  left: isHovered ? 'calc(100% - 40px)' : '16px',
                  width: '48px',
                  height: '48px'
                }}
              >
                {/* Initial outline circle that stays on left */}
                <div
                  className="absolute inset-0 rounded-full border border-primary/50 transition-opacity duration-300"
                  style={{ opacity: isHovered ? 0 : 1 }}
                />

                 <ArrowRight
                   size={20}
                   className="text-primary"
                 />
              </div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="absolute right-0 bottom-0 h-[115%] w-[60%] flex items-end justify-end pointer-events-none z-20">
          <img
            src={hero.imageSrc}
            alt={hero.imageAlt}
            className="object-contain h-full w-auto object-right-bottom transform translate-y-0 translate-x-8"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;