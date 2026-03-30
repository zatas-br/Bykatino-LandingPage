import React from 'react';

const FeedbackCard = ({ text, name }) => {
  return (
    <div className="bg-[#E0E0E0] p-8 md:px-8 md:py-10 rounded-[40px] flex flex-col min-h-[220px]">
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
  const feedbacks = [
    {
      text: "Amei por conta dos tecidos fenomenais do pau brasil que tem sempre aqui no piaui, recomendo.",
      name: "Edineuza Natal"
    },
    {
      text: "Amei por conta dos tecidos fenomenais do pau brasil que tem sempre aqui no piaui, recomendo.",
      name: "Edineuza Natal"
    },
    {
      text: "Amei por conta dos tecidos fenomenai",
      name: "Edineuza Natal"
    }
  ];

  return (
    <section className="w-full bg-secondary pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2 className="text-tertiary text-4xl md:text-[2.75rem] font-bold mb-16 text-center tracking-tight">
          Veja o feedback dos nossos clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px]">
          {feedbacks.map((item, index) => (
            <FeedbackCard key={index} text={item.text} name={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feedback;
