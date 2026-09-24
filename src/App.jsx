import React from 'react';
import TechBackground from './components/TechBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Desafios from './components/Desafios';
import QuemSomos from './components/QuemSomos';
import PropostaValor from './components/PropostaValor';
import Servicos from './components/Servicos';
import CalculadoraROI from './components/CalculadoraROI';
import Diferenciais from './components/Diferenciais';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950">
      {/* Interactive Tech Particle Canvas Background */}
      <TechBackground />

      {/* Main App Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        <main className="flex-grow">
          {/* Slide 01: Hero Presentation */}
          <Hero />

          {/* Quick Metrics Bar */}
          <Metrics />

          {/* Slide 02: Desafios da Indústria */}
          <Desafios />

          {/* Slide 03: Quem Somos & Pilares */}
          <QuemSomos />

          {/* Slide 04: Proposta de Valor Concreta */}
          <PropostaValor />

          {/* Slides 05 a 08: Portfólio de Serviços */}
          <Servicos />

          {/* Interactive ROI Calculator */}
          <CalculadoraROI />

          {/* Slide 09: Matriz de Diferenciais */}
          <Diferenciais />

          {/* Slide 10: Contato Direto & Proposta */}
          <Contato />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
