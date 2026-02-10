import React from 'react';
import Section from './Section';
import Button from './Button';
import { Check } from 'lucide-react';

const ProcedureCard: React.FC<{ 
  title: string; 
  subtitle: string;
  description: string;
  benefits: string[];
  price?: string;
  image: string;
  cta: string;
  highlight?: boolean;
}> = ({ title, subtitle, description, benefits, price, image, cta, highlight }) => (
  <div className={`group relative overflow-hidden bg-dark-800 border ${highlight ? 'border-gold-500' : 'border-white/10'} hover:border-gold-500/50 transition-all duration-500`}>
    <div className="h-64 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent z-10"></div>
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
      {highlight && (
        <div className="absolute top-4 right-4 z-20 bg-gold-500 text-black text-xs font-bold px-3 py-1 uppercase tracking-wider">
          Mais Procurado
        </div>
      )}
    </div>
    
    <div className="p-8 relative z-20 -mt-10">
      <h3 className="text-2xl font-serif text-white mb-1">{title}</h3>
      <p className="text-gold-500 text-sm uppercase tracking-wider mb-4">{subtitle}</p>
      
      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
            <Check className="w-5 h-5 text-gold-500 shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>

      {price && (
        <div className="mb-6 pb-6 border-b border-white/10">
           <p className="text-gray-400 text-xs">Investimento a partir de</p>
           <p className="text-xl text-white font-semibold">{price}</p>
           <p className="text-xs text-gray-500">em até 10x</p>
        </div>
      )}
      
      <Button variant={highlight ? 'primary' : 'outline'} fullWidth onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
        {cta}
      </Button>
    </div>
  </div>
);

const Procedures: React.FC = () => {
  return (
    <Section id="procedures">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Procedimentos de Alta Performance</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Tecnologia avançada e protocolos exclusivos para resultados definitivos.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <ProcedureCard 
          title="Fenol Like"
          subtitle="Rejuvenescimento Profundo"
          description="O peeling Fenol Like combina técnica exclusiva com múltiplos ácidos, alcançando camadas profundas da pele sem os riscos do fenol puro."
          image="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2080&auto=format&fit=crop"
          highlight={true}
          cta="Saiba Mais Sobre Fenol Like"
          benefits={[
            "Resultados visíveis e duradouros",
            "4 níveis de profundidade personalizados",
            "Protocolo completo pré e pós",
            "Acompanhamento médico integral"
          ]}
        />
        <ProcedureCard 
          title="Remodelação de Glúteos"
          subtitle="Resultado Definitivo"
          description="PMMA definitivo com técnica exclusiva, aplicação submuscular e cálculo personalizado. Resultado natural que dura para sempre."
          image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
          highlight={true}
          price="R$ 8.000"
          cta="Descubra Sua Transformação"
          benefits={[
            "Preenchimento definitivo com PMMA",
            "Melhora depressão trocantérica e celulite",
            "Técnica segura (4 anos de exp.)",
            "Resultado final em 4 meses"
          ]}
        />
        <ProcedureCard 
          title="Laser CO2 e Outros"
          subtitle="Tecnologia Complementar"
          description="Tratamentos complementares para refinar resultados, tratar cicatrizes superficiais e melhorar a qualidade geral da pele."
          image="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop"
          cta="Ver Todos Tratamentos"
          benefits={[
            "Tratamento de cicatrizes de acne",
            "Estímulo de colágeno",
            "Rejuvenescimento de mãos e colo",
            "Tecnologia de ponta"
          ]}
        />
      </div>
    </Section>
  );
};

export default Procedures;