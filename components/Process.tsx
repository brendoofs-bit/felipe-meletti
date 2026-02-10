import React from 'react';
import Section from './Section';
import { ClipboardList, User, Sparkles, HeartHandshake } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList size={24} />,
    title: "Avaliação Médica",
    desc: "Análise completa do seu caso, expectativas e indicações personalizadas."
  },
  {
    icon: <User size={24} />,
    title: "Planejamento",
    desc: "Protocolo customizado, orientações pré-procedimento e cronograma."
  },
  {
    icon: <Sparkles size={24} />,
    title: "Procedimento",
    desc: "Realizado pelo Dr. Felipe Meletti em consultório equipado e confortável."
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Acompanhamento",
    desc: "Suporte completo no pós-procedimento até o resultado final."
  }
];

const Process: React.FC = () => {
  return (
    <Section>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Como Funciona o Processo</h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Line for Desktop */}
        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-800 z-0"></div>

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-dark-900 border-2 border-gold-500 rounded-full flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-lg font-serif text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;