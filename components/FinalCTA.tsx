import React from 'react';
import Button from './Button';
import { MessageCircle } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-dark-900 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-black via-dark-900 to-black opacity-90"></div>
          {/* Abstract Gold glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
          Sua Transformação Começa <br/>
          <span className="text-gold-gradient">Com uma Conversa</span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 font-light">
          Agende sua avaliação exclusiva com o Dr. Felipe Meletti e descubra qual procedimento é ideal para você.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
           <Button className="w-full md:w-auto text-lg px-10 py-5">
              Quero Minha Transformação
           </Button>
           
           <a 
             href="https://wa.me/5554999999999" 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex items-center gap-2 text-white hover:text-gold-500 transition-colors"
           >
             <MessageCircle size={20} />
             <span>Tirar dúvidas pelo WhatsApp</span>
           </a>
        </div>
        
        <p className="mt-6 text-sm text-gold-500/80 font-medium tracking-wide">
          * VAGAS LIMITADAS PARA AVALIAÇÃO NESTE MÊS
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;