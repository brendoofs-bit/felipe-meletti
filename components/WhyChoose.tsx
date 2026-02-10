import React from 'react';
import Section from './Section';
import { UserCheck, Sparkles, ShieldCheck } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-dark-800 p-8 border border-white/5 hover:border-gold-500/50 transition-all duration-500 group">
    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-gold-500 mb-6 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const WhyChoose: React.FC = () => {
  return (
    <Section darker>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Por Que Dr. Felipe Meletti?</h2>
        <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<UserCheck size={32} />}
          title="Médico Especialista - Não Terceirizado"
          description="Todos os procedimentos são realizados pessoalmente pelo Dr. Felipe Meletti. Sem terceirização. Sua segurança e resultado em mãos experientes."
        />
        <FeatureCard 
          icon={<Sparkles size={32} />}
          title="Técnica Exclusiva Fenol Like"
          description="Domínio de técnica diferenciada que alcança resultados próximos ao fenol tradicional, com diversos ácidos e protocolo personalizado. 7 anos de expertise."
        />
        <FeatureCard 
          icon={<ShieldCheck size={32} />}
          title="PMMA Definitivo"
          description="Remodelação de glúteos com técnica avançada e cálculo personalizado por altura, peso e biótipo. Resultados naturais, seguros e definitivos."
        />
      </div>
    </Section>
  );
};

export default WhyChoose;