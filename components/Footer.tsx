import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif text-white mb-6">Dr. Felipe Meletti</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Excelência em procedimentos estéticos avançados. Transformando vidas através da autoestima com segurança e responsabilidade médica.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:border-gold-500 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Procedimentos</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-gold-500 transition-colors">Fenol Like</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Remodelação de Glúteos</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Laser CO2</a></li>
              <li><a href="#" className="hover:text-gold-500 transition-colors">Tratamentos Faciais</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-serif text-lg mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0" />
                <span>Caxias do Sul/RS</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span>(54) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span>contato@felipemeletti.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Clínica Dr. Felipe Meletti. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 flex gap-6">
             <span>CRM 28145</span>
             <span>Responsável Técnico: Dr. Felipe Meletti</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;