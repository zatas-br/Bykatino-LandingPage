import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const Freedom = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { freedom } = content;

  return (
    <div className="px-4 w-full md:px-0">
      <section className="relative w-full max-w-7xl mx-auto mt-6 bg-secondary h-auto md:h-[550px] flex flex-col md:flex-row items-center rounded-tl-[60px] md:rounded-tl-[120px] rounded-br-[60px] md:rounded-br-[120px] overflow-visible pt-10 md:pt-0 pb-0 md:pb-0">

        <div className="flex flex-col-reverse md:flex-row w-full h-full justify-end md:justify-start">
          <div className="w-full md:w-1/2 relative flex items-end justify-center h-[350px] md:h-full mt-auto md:mt-0">
              <img
                src={freedom.imageSrc}
                alt={freedom.imageAlt}
                className="object-contain h-full md:h-[110%] w-auto absolute bottom-0 md:left-16 z-10"
              />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:pr-20 pb-4 pt-4 md:py-16 text-center md:text-right items-center md:items-end z-20">
            <div className="flex flex-col items-center md:items-end w-full max-w-[550px]">
              <h2 className="text-tertiary text-3xl md:text-[3.25rem] font-bold mb-4 md:mb-4 leading-tight tracking-tight whitespace-pre-line">
                {freedom.heading}
              </h2>

              <p className="text-dark font-semibold text-base md:text-[1.05rem] mb-8 md:mb-12 leading-relaxed md:leading-snug whitespace-pre-line">
                {freedom.description}
              </p>

              <div className="z-20 relative w-full flex justify-center md:justify-end mt-4">
                <a
                  href="#"
                  className="group relative inline-flex items-center font-bold py-3 pl-4 pr-16 transition-all duration-300 rounded-full cursor-pointer overflow-hidden"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className="absolute left-0 top-0 h-full bg-[#F2E5C5] transition-all duration-500 ease-out z-0 rounded-full"
                    style={{ width: isHovered ? '100%' : '48px' }}
                  />

                  <span className="relative z-10 text-[0.8rem] tracking-wider uppercase ml-12 transition-colors duration-300" style={{ color: isHovered ? '#1E1E1E' : '#3C000E' }}>
                    {freedom.ctaButton}
                  </span>

                  <div
                    className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center z-10 transition-all duration-500 ease-in-out bg-[#F2E5C5] rounded-full w-10 h-10"
                    style={{ left: isHovered ? 'calc(100% - 44px)' : '4px' }}
                  >
                     <ArrowRight size={18} className="text-primary" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Freedom;