import React from 'react';
import { ArrowRight } from 'lucide-react';

const Sets = () => {
  return (
    <section className="w-full bg-primary pt-16 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

        {/* Left Column: Text & Small Images */}
        <div className="flex-1 flex flex-col">
          <div className="max-w-xl">
            <h2 className="text-secondary text-4xl md:text-[2.75rem] font-bold mb-6 tracking-tight leading-tight">
              Conheça nossos conjuntos
            </h2>
            <p className="text-white/90 text-[1.1rem] leading-snug mb-10 font-medium">
              Nossos conjuntos foram criados para unir estilo, conforto e performance em cada detalhe. Com modelagens que valorizam o corpo e tecidos de alta qualidade, você se sente segura e pronta para qualquer treino — ou até para o dia a dia.
            </p>

            <button className="bg-secondary text-primary font-bold py-3 px-8 rounded-full btn-hover-effect inline-flex items-center gap-3 transition-all shadow-md">
              <span className="btn-hover-content flex items-center gap-3 text-sm">
                <ArrowRight size={18} />
                VER COLEÇÃO
              </span>
            </button>
          </div>

          {/* Small Images Row */}
          <div className="flex gap-6 mt-16 lg:mt-32 max-w-lg">
            <div className="flex-1 rounded-[24px] overflow-hidden aspect-[4/3] bg-white">
              <img
                src="/roupa-menor-verde.png"
                alt="Conjunto Verde"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 rounded-[24px] overflow-hidden aspect-[4/3] bg-[#0E3572]">
              <img
                src="/roupa-menor-azul.png"
                alt="Conjunto Azul"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Large Image */}
        <div className="w-full lg:w-[400px] xl:w-[420px] shrink-0 self-stretch flex items-stretch">
          <div className="w-full rounded-[32px] overflow-hidden bg-[#f5e8d0] aspect-[3/4] lg:aspect-auto h-full">
            <img
              src="/roupa-maior.png"
              alt="Conjunto Marrom"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sets;
