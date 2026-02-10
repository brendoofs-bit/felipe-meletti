import React from 'react';
import { BadgeCheck, ChevronDown } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const scrollToProcedures = () => {
    document.getElementById('procedures')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
          alt="Clínica Estética" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <div className="inline-flex items-center gap-2 border border-gold-500/30 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <BadgeCheck className="w-5 h-5 text-gold-500" />
          <span className="text-gray-300 text-sm tracking-wide">Dr. Felipe Meletti - CRM 28145</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up [animation-delay:200ms]">
          Rejuvenescimento Real. <br />
          <span className="text-gold-gradient">Técnica Comprovada.</span> <br />
          Resultados que Transformam.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light animate-fade-in-up [animation-delay:400ms]">
          24 anos de medicina e 7 anos de excelência em Peeling Fenol Like e Remodelação de Glúteos. 
          A união perfeita entre ciência médica e arte estética.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up [animation-delay:600ms]">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Agende Sua Avaliação Exclusiva
          </Button>
          <button 
            onClick={scrollToProcedures}
            className="text-white hover:text-gold-500 transition-colors underline-offset-4 hover:underline py-3 px-6"
          >
            Conheça os Procedimentos
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gold-500/50">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;