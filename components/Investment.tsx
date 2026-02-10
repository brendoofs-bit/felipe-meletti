import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';

const Investment: React.FC = () => {
  return (
    <Section darker>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif mb-4 text-white">Investimento e Condições</h2>
        <p className="text-gray-400">Transparência e facilidade para realizar seu sonho.</p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[768px] max-w-5xl mx-auto bg-dark-800 rounded-sm border border-white/10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-white">
                <th className="p-6 font-serif text-xl">Procedimento</th>
                <th className="p-6 font-serif text-xl">Investimento</th>
                <th className="p-6 font-serif text-xl">Parcelamento</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-gray-300">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-medium text-white">Fenol Like Superficial</td>
                <td className="p-6">A partir de R$ 4.000</td>
                <td className="p-6 text-gold-500">10x sem juros</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-medium text-white">Fenol Like Médio</td>
                <td className="p-6">R$ 8.000</td>
                <td className="p-6 text-gold-500">10x sem juros</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors bg-gold-500/5">
                <td className="p-6 font-medium text-white">Fenol Like Profundo <span className="text-xs bg-gold-500 text-black px-2 py-0.5 rounded ml-2">POPULAR</span></td>
                <td className="p-6 text-white font-bold">R$ 10.000</td>
                <td className="p-6 text-gold-500 font-bold">10x sem juros</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="p-6 font-medium text-white">Remodelação Glúteos</td>
                <td className="p-6">R$ 8.000 <span className="text-xs text-gray-500 block">+ R$ 30/ml adicional</span></td>
                <td className="p-6 text-gold-500">10x sem juros</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="text-center mt-8">
         <p className="text-gray-400 text-sm mb-4">Aceitamos as principais formas de pagamento.</p>
      </div>
    </Section>
  );
};

export default Investment;