import React, { useState } from 'react';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-2xl bg-dark-bg/85 border-b border-teal-500/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-24 flex items-center justify-between">
        
        {/* LOGO OFICIAL DO PORTFÓLIO */}
        <a href="#inicio" className="flex items-center gap-3 group focus:outline-none">
          <img 
            src="/logo-anl.svg" 
            alt="ANL Engenharia & Soluções Técnicas" 
            className="h-14 sm:h-16 w-auto transform group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_15px_rgba(0,229,163,0.35)]" 
          />
        </a>

        {/* LINKS DESKTOP */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#inicio" className="text-sm font-medium text-slate-300 hover:text-[#00e5a3] transition-colors">Início</a>
          <a href="#desafio" className="text-sm font-medium text-slate-300 hover:text-[#00e5a3] transition-colors">Desafios</a>
          <a href="#sobre" className="text-sm font-medium text-slate-300 hover:text-[#00e5a3] transition-colors">Quem Somos</a>
          <a href="#proposta" className="text-sm font-medium text-slate-300 hover:text-[#00e5a3] transition-colors">Proposta de Valor</a>
          <a href="#servicos" className="text-sm font-medium text-slate-300 hover:text-[#00e5a3] transition-colors">Serviços</a>
          <a href="#diferenciais" className="text-sm font-medium text-slate-300 hover:text-[#00e5a3] transition-colors">Diferenciais</a>
          <a href="#calculadora" className="text-sm font-medium text-teal-300 hover:text-teal-200 transition-colors flex items-center gap-1.5">
            Calculadora ROI
          </a>
        </nav>

        {/* CTA & BADGE */}
        <div className="hidden sm:flex items-center gap-4">
          <span className="hidden xl:inline-flex items-center gap-1.5 text-xs text-teal-300/90 font-mono bg-teal-950/60 px-3 py-1.5 rounded-lg border border-teal-500/25">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00e5a3]"></span> CREA/MG 382575MG
          </span>
          <a 
            href="#contato" 
            className="btn-glow relative group overflow-hidden rounded-xl p-px font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-teal-500/10"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 rounded-xl group-hover:opacity-100 transition-opacity"></span>
            <span className="relative flex items-center gap-2 px-5 py-3 rounded-xl bg-dark-bg text-teal-300 font-medium group-hover:bg-opacity-80 transition-all duration-300">
              <span>Falar com Engenheiro</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Abrir Menu" 
          className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white hover:bg-teal-900/30 border border-teal-500/20 focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {isOpen && (
        <div className="lg:hidden bg-dark-card/95 backdrop-blur-2xl border-b border-teal-500/20 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4">
            <div className="pb-3 border-b border-teal-500/20 flex items-center justify-between text-xs text-slate-300">
              <span className="text-teal-300 font-mono font-semibold">CREA/MG 382575MG</span>
              <a href="tel:+5531998049626" className="flex items-center gap-1.5 hover:text-white">
                <Phone className="w-3.5 h-3.5 text-[#00e5a3]" /> (31) 9 9804-9626
              </a>
            </div>
            <a onClick={() => setIsOpen(false)} href="#inicio" className="text-base font-medium text-slate-200 hover:text-[#00e5a3] py-1">Início</a>
            <a onClick={() => setIsOpen(false)} href="#desafio" className="text-base font-medium text-slate-200 hover:text-[#00e5a3] py-1">O Desafio Industrial</a>
            <a onClick={() => setIsOpen(false)} href="#sobre" className="text-base font-medium text-slate-200 hover:text-[#00e5a3] py-1">Quem Somos & CREA</a>
            <a onClick={() => setIsOpen(false)} href="#proposta" className="text-base font-medium text-slate-200 hover:text-[#00e5a3] py-1">Proposta de Valor</a>
            <a onClick={() => setIsOpen(false)} href="#servicos" className="text-base font-medium text-slate-200 hover:text-[#00e5a3] py-1">Portfólio de Serviços</a>
            <a onClick={() => setIsOpen(false)} href="#diferenciais" className="text-base font-medium text-slate-200 hover:text-[#00e5a3] py-1">Por Que Nos Escolher</a>
            <a onClick={() => setIsOpen(false)} href="#calculadora" className="text-base font-medium text-teal-300 hover:text-teal-200 py-1">Simular Economia (5% a 15%)</a>
            <a 
              onClick={() => setIsOpen(false)} 
              href="#contato" 
              className="w-full text-center mt-2 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-dark-bg font-bold tracking-wide uppercase text-sm shadow-lg shadow-teal-500/20"
            >
              Solicitar Atendimento Imediato
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
