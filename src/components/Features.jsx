import React from 'react';

const Features = () => {
  return (
    <section className="w-full max-w-7xl mx-auto mt-6 bg-secondary rounded-3xl py-16 px-8 flex flex-col items-center">
      <h2 className="text-tertiary text-3xl md:text-4xl font-bold mb-16 text-center">
        Vista sua melhor versão todos os dias
      </h2>

      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl gap-12 md:gap-8">
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center space-y-6 flex-1">
          <p className="text-dark font-bold text-lg md:text-xl leading-tight min-h-[50px] flex items-end justify-center">
            Mais conforto<br />no seu treino
          </p>
          <img src="/icon-conforto.png" alt="Ícone de conforto" className="w-20 h-20 object-contain" />
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center space-y-6 flex-1">
          <p className="text-dark font-bold text-lg md:text-xl leading-tight min-h-[50px] flex items-end justify-center">
            Mais confiança e<br />autoestima
          </p>
          <img src="/icon-confianca.png" alt="Ícone de confiança e autoestima" className="w-20 h-20 object-contain" />
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center space-y-6 flex-1">
          <p className="text-dark font-bold text-lg md:text-xl leading-tight min-h-[50px] flex items-end justify-center">
            Melhor desempenho<br />nos resultados
          </p>
          <img src="/icon-desempenho.png" alt="Ícone de desempenho nos resultados" className="w-20 h-20 object-contain" />
        </div>
      </div>
    </section>
  );
};

export default Features;