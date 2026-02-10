import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Fenol Like", href: "#procedures" },
    { label: "Glúteos", href: "#procedures" },
    { label: "Resultados", href: "#results" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-serif font-bold text-white tracking-wider">
          DR. FELIPE <span className="text-gold-500">MELETTI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium text-gray-300">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-gold-500 transition-colors uppercase tracking-wide text-xs">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="outline" className="px-6 py-2 text-xs" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Agendar
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="flex flex-col p-6 gap-4">
           {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-white hover:text-gold-500 py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button fullWidth onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}}>
              Agendar Avaliação
            </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;