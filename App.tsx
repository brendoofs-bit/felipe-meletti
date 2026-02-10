import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import WhyChoose from './components/WhyChoose';
import Procedures from './components/Procedures';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Investment from './components/Investment';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-gold-500 selection:text-black">
      <Navbar />
      <Hero />
      <Credibility />
      <WhyChoose />
      <Procedures />
      <BeforeAfter />
      <Process />
      <Investment />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;