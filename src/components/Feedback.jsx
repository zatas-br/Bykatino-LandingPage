import React from 'react';
import { content } from '../data.js';

const FeedbackCard = ({ text, name }) => {
  return (
    <div className="bg-[#E0E0E0] p-6 md:px-8 md:py-10 rounded-[40px] flex flex-col w-[280px] md:w-[320px] lg:w-[350px] min-h-[240px] shrink-0">
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
  const { feedback } = content;

  // We double the feedbacks to ensure it covers very wide screens (like 4K)
  const extendedFeedbacks = [...feedback.items, ...feedback.items];

  return (
    <section className="w-full bg-secondary pt-24 pb-32 rounded-b-[40px] md:rounded-b-[80px] relative z-10 mb-20 shadow-md overflow-hidden">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-tertiary text-4xl md:text-[2.75rem] font-bold mb-16 text-center tracking-tight px-6">
          {feedback.heading}
        </h2>

        {/* Infinite scrolling container */}
        <div className="relative w-full overflow-hidden flex">
          <div className="flex w-max animate-marquee cursor-grab active:cursor-grabbing hover:[animation-play-state:paused]">
            <div className="flex w-max gap-8 px-4">
              {extendedFeedbacks.map((item, index) => (
                <FeedbackCard key={`set1-${index}`} text={item.text} name={item.name} />
              ))}
            </div>
            <div className="flex w-max gap-8 px-4" aria-hidden="true">
              {extendedFeedbacks.map((item, index) => (
                <FeedbackCard key={`set2-${index}`} text={item.text} name={item.name} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
