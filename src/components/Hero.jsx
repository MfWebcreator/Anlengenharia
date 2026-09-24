import React from 'react';
import { ShieldCheck, ClipboardCheck, MessageCircle, Quote } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-28 sm:pt-32 sm:pb-36 lg:pt-36 lg:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full relative z-10 text-center">
        
        {/* LOGO OFICIAL DO PORTFÓLIO EM DESTAQUE (SLIDE 1) */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal-400/20 rounded-full blur-xl group-hover:bg-teal-400/30 transition-all duration-500"></div>
            <img 
              src="/logo-anl.svg" 
              alt="Logo Oficial ANL Engenharia" 
              className="relative w-48 sm:w-56 md:w-64 h-auto mx-auto transform group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_10px_25px_rgba(0,229,163,0.35)]" 
            />
          </div>
          
          {/* LINHA DE ACENTO CIANO DO SLIDE 1 */}
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#00e5a3] to-transparent mx-auto rounded-full mt-6 mb-2"></div>
        </div>

        {/* TÍTULO PRINCIPAL */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
          ANL Engenharia &amp; <br />
          <span className="text-gradient">
            Soluções Técnicas
          </span>
        </h1>

        {/* SUBTÍTULO DO SLIDE 1 */}
        <p className="font-sans text-lg sm:text-xl md:text-2xl text-teal-200/90 font-light max-w-3xl mx-auto leading-relaxed mb-6">
          Engenharia aplicada à manutenção, inspeção e suporte técnico especializado.
        </p>

        {/* RESPONSÁVEL TÉCNICO E CREA (SLIDE 1) */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs sm:text-sm font-semibold mb-10 shadow-lg">
          <ShieldCheck className="w-4 h-4 text-[#00e5a3]" />
          <span className="shiny-text">Eng. Anderson Gonçalves Silvério — CREA/MG 382575MG</span>
        </div>

        {/* CARD DA CITAÇÃO OFICIAL (SLIDE 1 COM BORDA CIANO) */}
        <div className="spotlight-card max-w-3xl mx-auto p-6 sm:p-9 rounded-2xl bg-dark-card/90 border-l-4 border-l-[#00e5a3] border-y border-r border-teal-500/25 shadow-2xl backdrop-blur-xl text-left mb-12 relative overflow-hidden">
          <Quote className="w-10 h-10 text-teal-500/20 absolute right-5 top-5 pointer-events-none" />
          <p className="text-slate-200 italic text-base sm:text-lg md:text-xl leading-relaxed relative z-10 font-normal">
            "Reduzimos custos e aumentamos a confiabilidade dos seus equipamentos através de engenharia aplicada à manutenção, inspeção e suporte técnico especializado."
          </p>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
          <a 
            href="#contato" 
            className="btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 text-dark-bg font-bold text-base shadow-xl shadow-teal-500/25 hover:shadow-teal-500/40 hover:scale-105 transition-all duration-300 text-center"
          >
            <ClipboardCheck className="w-5 h-5" />
            <span>Solicitar Diagnóstico Técnico</span>
          </a>
          
          <a 
            href="https://wa.me/5531998049626?text=Ol%C3%A1%20Eng.%20Anderson,%20gostaria%20de%20conversar%20sobre%20os%20servi%C3%A7os%20da%20ANL%20Engenharia." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-dark-card/90 text-teal-300 border border-teal-500/30 hover:border-teal-400 hover:bg-teal-900/30 text-base font-semibold transition-all duration-300 hover:scale-105 text-center"
          >
            <MessageCircle className="w-5 h-5 text-[#00e5a3]" />
            <span>Falar no WhatsApp: (31) 9 9804-9626</span>
          </a>
        </div>

      </div>
    </section>
  );
}
