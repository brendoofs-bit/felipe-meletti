import React, { useState } from 'react';
import Section from './Section';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqData: FAQItem[] = [
  {
    question: "Por que escolher PMMA definitivo ao invés de ácido hialurônico temporário?",
    answer: "O PMMA é ideal para quem busca resultado estrutural e definitivo, evitando manutenções anuais caras e repetitivas. Quando aplicado com a técnica correta (submuscular) e por médico experiente, oferece segurança e um custo-benefício superior a longo prazo."
  },
  {
    question: "Quanto tempo de recuperação para cada tipo de peeling?",
    answer: "O Fenol Like Superficial requer cerca de 3-5 dias. O Médio, cerca de 7-10 dias. O Profundo necessita de 12-15 dias para a recuperação inicial da pele. Durante este período, há descamação e necessidade de uso de produtos específicos que fornecemos."
  },
  {
    question: "O procedimento é seguro? Quais os riscos?",
    answer: "Sim, quando realizado por médico capacitado em ambiente adequado. Dr. Felipe tem 7 anos de experiência específica em peelings profundos e 24 anos de medicina. Todo procedimento tem riscos, mas nossos protocolos rigorosos de segurança e avaliação prévia minimizam drasticamente qualquer intercorrência."
  },
  {
    question: "Posso voltar ao trabalho depois do procedimento?",
    answer: "Para glúteos, o retorno é quase imediato (24-48h). Para peelings, depende da profundidade. Superficiais permitem retorno rápido, enquanto o profundo pode exigir 10-14 dias de afastamento social devido à aparência da pele em descamação."
  },
  {
    question: "Como é feito o cálculo de volume para glúteos?",
    answer: "O cálculo é matemático e artístico, considerando sua altura, peso, largura do quadril e objetivo estético. Não vendemos 'ml', vendemos o resultado harmônico para seu corpo."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Perguntas Frequentes</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-white/10 bg-dark-800">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium text-white text-lg pr-8">{item.question}</span>
              {openIndex === index ? (
                <Minus className="text-gold-500 shrink-0" />
              ) : (
                <Plus className="text-gold-500 shrink-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;