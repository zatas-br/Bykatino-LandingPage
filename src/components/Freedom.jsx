import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Freedom = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative w-full max-w-7xl mx-auto mt-6 bg-secondary h-[550px] flex items-center rounded-tl-[120px] rounded-br-[120px] overflow-visible">

      <div className="flex w-full h-full">
        {/* Left Side: Image */}
        <div className="w-1/2 relative flex items-end justify-center h-full">
            <img
              src="/mulher-liberdade.png"
              alt="Mulher com roupa branca e garrafa"
              className="object-contain h-[115%] w-auto absolute bottom-0 left-12 z-10"
            />
        </div>

        {/* Right Side: Content */}
        <div className="w-1/2 flex flex-col justify-center pr-24 py-16 text-right items-end">
          <h2 className="text-tertiary text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Liberdade para se<br/>movimentar
          </h2>

          <p className="text-dark font-semibold text-lg max-w-[450px] mb-16 leading-relaxed">
            Peças feitas para acompanhar cada movimento do<br/>
            seu corpo, sem apertar ou limitar.
          </p>

          <div className="z-20 relative w-full flex justify-center mt-auto">
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
      </div>
    </section>
  );
};

export default Freedom;