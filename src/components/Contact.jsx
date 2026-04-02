import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { content } from '../data.js';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#7B1F34]">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contact = () => {
  const { contact } = content;

  return (
    <section id="contato" className="w-full bg-primary pt-32 relative z-0 flex flex-col items-center">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 px-4 text-center tracking-tight">
        {contact.heading}
      </h2>

      <div className="w-full max-w-6xl bg-[#e6ce9e] rounded-t-[40px] md:rounded-t-[80px] flex flex-col md:flex-row items-start justify-between relative min-h-[500px] overflow-visible">

        <div className="flex-1 flex flex-col w-full z-10 self-start px-6 md:pl-20 py-12 md:py-20">
          <div className="mb-10 md:mb-16 -ml-2 md:-ml-4 text-center md:text-left">
            <h3 className="text-primary text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-bold tracking-[-0.08em] leading-none uppercase select-none" style={{ fontFamily: 'Georgia, serif' }}>
               {contact.logoText}
            </h3>
          </div>

          <div className="flex flex-col gap-5 max-w-[400px] w-full z-20">
            <a href="#" className="bg-[#7B1F34] hover:bg-[#5a1525] transition-colors rounded-3xl py-4 px-6 flex items-center justify-between group">
               <div className="flex items-center gap-4">
                 <div className="bg-[#e6ce9e] p-2 rounded-full">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-[#7B1F34]">
                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                   </svg>
                 </div>
                 <span className="text-white font-bold text-lg">{contact.whatsappButton}</span>
               </div>
               <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#" className="bg-[#7B1F34] hover:bg-[#5a1525] transition-colors rounded-3xl py-4 px-6 flex items-center justify-between group">
               <div className="flex items-center gap-4">
                 <div className="bg-[#e6ce9e] p-2 rounded-full">
                   <Mail className="text-[#7B1F34] w-6 h-6" />
                 </div>
                 <span className="text-white font-bold text-lg">{contact.emailButton}</span>
               </div>
               <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a href="#" className="bg-[#7B1F34] hover:bg-[#5a1525] transition-colors rounded-3xl py-4 px-6 flex items-center justify-between group">
               <div className="flex items-center gap-4">
                 <div className="bg-[#e6ce9e] p-2 rounded-full">
                   <InstagramIcon />
                 </div>
                 <span className="text-white font-bold text-lg">{contact.instagramButton}</span>
               </div>
               <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Imagem Desktop com comentários de ajuste */}
        <div className="hidden md:flex flex-1 absolute right-0 bottom-0 pointer-events-none z-10 items-end justify-end overflow-visible h-[120%] lg:h-[111%]">
          {/* COMO AJUSTAR A IMAGEM ABAIXO:
              1. AUMENTAR/DIMINUIR: Altere o 'h-[120%]' no div acima ou o 'max-w-[60%]' na img abaixo.
              2. MOVER PARA CIMA: Adicione uma margem negativa (ex: -translate-y-10) ou altere 'bottom-0' para algo como 'bottom-10'.
              3. MOVER PARA OS LADOS: Altere o 'right-0' no div acima (ex: 'right-10' move para a esquerda).
          */}
          <img
            src={contact.imageSrc}
            alt={contact.imageAlt}
            className="object-contain object-bottom h-full absolute right-0 bottom-0 max-w-[60%] lg:max-w-none"
          />
        </div>

        <div className="w-full flex justify-center mt-8 md:hidden z-10 relative overflow-visible pb-0">
           <img
            src={contact.imageSrc}
            alt={contact.imageAlt}
            className="object-contain h-[350px] w-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;