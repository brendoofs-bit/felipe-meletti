import React, { useEffect, useRef, useState } from 'react';
import { Award, Clock, Users, Star } from 'lucide-react';

const Stat: React.FC<{ icon: React.ReactNode; number: string; label: string; suffix?: string }> = ({ icon, number, label, suffix = '' }) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="mb-4 text-gold-500">{icon}</div>
      <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
        {number}{suffix}
      </div>
      <p className="text-gray-400 text-sm uppercase tracking-widest">{label}</p>
    </div>
  );
};

const Credibility: React.FC = () => {
  return (
    <div className="bg-dark-800 border-y border-white/5 py-12 relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/10">
          <Stat 
            icon={<Clock size={32} />} 
            number="24" 
            label="Anos de Medicina" 
          />
          <Stat 
            icon={<Award size={32} />} 
            number="7" 
            label="Anos em Peeling Profundo" 
          />
          <Stat 
            icon={<Users size={32} />} 
            number="4" 
            suffix="k+"
            label="Procedimentos Realizados" 
          />
          <Stat 
            icon={<Star size={32} />} 
            number="4" 
            label="Anos em Remodelação Glútea" 
          />
        </div>
      </div>
    </div>
  );
};

export default Credibility;