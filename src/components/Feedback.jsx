import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeedbackCard = ({ text, name }) => {
  return (
    <div className="bg-[#E0E0E0] p-8 md:px-8 md:py-10 rounded-[40px] flex flex-col min-w-[320px] max-w-[350px] min-h-[240px] snap-center shrink-0">
      <p className="text-[#3C3C3C] font-semibold text-[1.1rem] leading-snug mb-6">
        {text}
      </p>
      <p className="text-dark font-bold text-lg mt-auto">
        {name}
      </p>
    </div>
  );
};

const Feedback = () => {
  const scrollRef = useRef(null);

  const feedbacks = [
    {
      text: "Amei por conta dos tecidos fenomenais do pau brasil que tem sempre aqui no piaui, recomendo.",
      name: "Edineuza Natal"
    },
    {
      text: "As peças são maravilhosas, confortáveis e vestem perfeitamente. O treino rende muito mais com estilo e conforto!",
      name: "Mariana Silva"
    },
    {
      text: "A qualidade superou minhas expectativas. Zero transparência e muita sustentação. Indico de olhos fechados.",
      name: "Carla Ferreira"
    },
    {
      text: "As cores e os recortes das roupas valorizam muito o corpo. Melhor marca de moda fitness que já usei.",
      name: "Juliana Santos"
    },
    {
      text: "Atendimento impecável e os looks chegam super rápido e com um cheirinho delicioso. Sou cliente fiel!",
      name: "Fernanda Costa"
    },
    {
      text: "Amei por conta dos tecidos fenomenais que não limitam os movimentos.",
      name: "Larissa Oliveira"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 350 + 32; // card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="w-full bg-secondary pt-24 pb-32 rounded-b-[40px] md:rounded-b-[80px] relative z-10 mb-20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-tertiary text-4xl md:text-[2.75rem] font-bold mb-16 text-center tracking-tight">
          Veja o feedback dos nossos clientes
        </h2>

        <div className="relative w-full max-w-[1100px] group">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/80 hover:bg-white text-tertiary p-3 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
            aria-label="Previous feedback"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide pb-8 px-4 -mx-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {feedbacks.map((item, index) => (
              <FeedbackCard key={index} text={item.text} name={item.name} />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/80 hover:bg-white text-tertiary p-3 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"
            aria-label="Next feedback"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
