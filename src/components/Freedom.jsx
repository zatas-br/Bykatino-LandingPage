import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Freedom = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { freedom } = content;

  return (
    <div className="px-4 w-full md:px-0">
      <section className="relative w-full max-w-7xl mx-auto mt-6 bg-secondary h-auto md:h-[550px] flex flex-col md:flex-row items-center rounded-tl-[60px] md:rounded-tl-[120px] rounded-br-[60px] md:rounded-br-[120px] overflow-visible pb-12 md:pb-0">

        <div className="flex flex-col-reverse md:flex-row w-full h-full">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 relative flex items-end justify-center h-[300px] md:h-full mt-8 md:mt-0">
              <img
                src={freedom.imageSrc}
                alt={freedom.imageAlt}
                className="object-contain h-[350px] md:h-[110%] w-auto absolute bottom-0 md:left-16 z-10"
              />
          </div>

          {/* Right Side: Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pr-20 py-10 md:py-16 text-center md:text-right items-center md:items-end z-20">
            <div className="flex flex-col items-center md:items-end w-full max-w-[550px]">
              <h2 className="text-tertiary text-3xl md:text-[3.25rem] font-bold mb-4 md:mb-4 leading-tight tracking-tight whitespace-pre-line">
                {freedom.heading}
              </h2>

              <p className="text-dark font-semibold text-base md:text-[1.05rem] mb-8 md:mb-20 leading-relaxed md:leading-snug whitespace-pre-line">
                {freedom.description}
              </p>

              <div className="z-20 relative w-full flex justify-center mt-4 md:mt-auto md:mb-4 md:pl-16">
              <button
                className="group relative inline-flex items-center text-primary font-bold py-2 pr-6 transition-all duration-300 gap-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Expandable background */}
                <div
                  className="absolute left-0 top-0 h-full bg-[#F2E5C5] rounded-full transition-all duration-500 ease-out z-0"
                  style={{ width: isHovered ? '100%' : '40px' }}
                />

                <div className="relative flex items-center justify-center w-10 h-10 z-10">
                  {/* Arrow Icon */}
                   <ArrowRight
                     size={18}
                     className="text-primary transition-transform duration-500"
                     style={{ transform: isHovered ? 'translateX(5px)' : 'translateX(0)' }}
                   />
                </div>

                <span className="relative z-10 text-[0.9rem] font-bold tracking-wider uppercase transition-colors duration-300" style={{ color: isHovered ? '#1E1E1E' : '#3C000E' }}>
                  {freedom.ctaButton}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
};

export default Freedom;