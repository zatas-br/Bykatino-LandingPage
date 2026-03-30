import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Freedom = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { freedom } = content;

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-6 bg-secondary h-[550px] flex items-center rounded-tl-[120px] rounded-br-[120px] overflow-visible">

      <div className="flex w-full h-full">
        {/* Left Side: Image */}
        <div className="w-1/2 relative flex items-end justify-center h-full">
            <img
              src={freedom.imageSrc}
              alt={freedom.imageAlt}
              className="object-contain h-[110%] w-auto absolute bottom-0 left-16 z-10"
            />
        </div>

        {/* Right Side: Content */}
        <div className="w-1/2 flex flex-col justify-center pr-20 py-16 text-right items-end">
          <div className="flex flex-col items-end w-full max-w-[550px]">
            <h2 className="text-tertiary text-[2.75rem] md:text-[3.25rem] font-bold mb-4 leading-tight tracking-tight whitespace-pre-line">
              {freedom.heading}
            </h2>

            <p className="text-dark font-semibold text-lg md:text-[1.05rem] mb-20 leading-snug whitespace-pre-line">
              {freedom.description}
            </p>

            <div className="z-20 relative w-full flex justify-center mt-auto mb-4 pl-16">
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
  );
};

export default Freedom;