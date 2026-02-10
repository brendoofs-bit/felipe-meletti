import React, { useState } from 'react';
import Section from './Section';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: "Caso 1 - Fenol Like Profundo",
    time: "Resultado de 30 dias",
    before: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop", // Placeholder
    after: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop&sat=100" // Placeholder tweak
  },
  {
    id: 2,
    title: "Caso 2 - Remodelação Glútea",
    time: "Resultado de 90 dias",
    before: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=987&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=987&auto=format&fit=crop&sat=100"
  },
  {
    id: 3,
    title: "Caso 3 - Fenol Like Médio",
    time: "Resultado de 15 dias",
    before: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1740&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?q=80&w=1740&auto=format&fit=crop&sat=100"
  }
];

const BeforeAfter: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
    setSliderPosition(50);
  };

  return (
    <Section darker className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Resultados que Falam por Si</h2>
        <p className="text-gray-400">Transformações Reais de Pacientes Reais.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative group select-none cursor-ew-resize" onMouseMove={handleMouseMove}>
          <div className="aspect-[4/3] md:aspect-[16/9] relative overflow-hidden border-2 border-gold-500/30 rounded-sm">
            {/* Image After (Background) */}
            <img 
              src={cases[activeCase].after} 
              alt="Depois" 
              className="absolute inset-0 w-full h-full object-cover grayscale-0"
            />
            
            {/* Image Before (Clipped on top) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src={cases[activeCase].before} 
                alt="Antes" 
                className="absolute top-0 left-0 h-full max-w-none object-cover grayscale"
                style={{ width: '100vw', maxWidth: '894px' }} // Approx max-w-4xl
              />
              <div className="absolute top-4 left-4 bg-black/50 text-white px-2 py-1 text-xs">ANTES</div>
            </div>
            
            <div className="absolute top-4 right-4 bg-gold-500 text-black px-2 py-1 text-xs font-bold">DEPOIS</div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gold-500 cursor-ew-resize z-10"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <div className="w-0.5 h-3 bg-black"></div>
                  <div className="w-0.5 h-3 bg-black"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
             <button onClick={prevCase} className="p-2 border border-white/20 text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <ArrowLeft />
             </button>
             <div className="text-center">
                <h3 className="text-xl font-serif text-white">{cases[activeCase].title}</h3>
                <p className="text-sm text-gray-400">{cases[activeCase].time}</p>
             </div>
             <button onClick={nextCase} className="p-2 border border-white/20 text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <ArrowRight />
             </button>
          </div>
          
          <p className="text-center text-xs text-gray-600 mt-4">
            * Resultados podem variar conforme biotipo e adesão ao protocolo. Imagens ilustrativas.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default BeforeAfter;