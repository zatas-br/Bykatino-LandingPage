import React from 'react';
import { content } from '../data.js';

const Features = () => {
  const { features } = content;

  return (
    <div className="px-4 w-full md:px-0">
      <section className="w-full max-w-7xl mx-auto mt-6 md:mt-6 bg-secondary rounded-[30px] md:rounded-3xl py-12 md:py-16 px-4 md:px-8 flex flex-col items-center">
        <h2 className="text-tertiary text-2xl md:text-4xl font-bold mb-10 md:mb-16 text-center whitespace-pre-line px-4">
          {features.heading}
        </h2>

        <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl gap-12 md:gap-8">
          {features.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4 md:space-y-6 flex-1">
              <p className="text-dark font-bold text-base md:text-xl leading-tight min-h-0 md:min-h-[50px] flex items-end justify-center whitespace-pre-line">
                {item.text}
              </p>
              <img src={item.iconSrc} alt={item.iconAlt} className="w-16 h-16 md:w-20 md:h-20 object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;