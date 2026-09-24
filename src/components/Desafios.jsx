import React from 'react';
import { AlertTriangle, DollarSign, FileWarning, TrendingDown, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Desafios() {
  return (
    <section id="desafio" className="py-24 relative z-10 border-t border-teal-500/20 bg-dark-surface/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5a3] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 inline-block">Cenário Operacional</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            O Desafio das Empresas Industriais
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-300 font-light">
            <strong className="text-teal-300 font-semibold">Manutenção ineficiente custa caro — e compromete a operação.</strong><br />
            Empresas industriais enfrentam diariamente desafios críticos que impactam diretamente sua competitividade e lucratividade:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 5 DESAFIOS CRÍTICOS */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            
            <div className="spotlight-card group flex items-start gap-4 p-5 rounded-2xl bg-dark-card/70 border border-teal-500/20 hover:border-red-400/40 transition-all duration-300 shadow-md">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400 text-xl group-hover:scale-110 transition-transform">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-red-300 transition-colors">
                  Paradas não planejadas
                </h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Interrompem a cadeia produtiva, causam atrasos nos prazos e geram prejuízos financeiros imediatos com horas paradas de operadores.
                </p>
              </div>
            </div>

            <div className="spotlight-card group flex items-start gap-4 p-5 rounded-2xl bg-dark-card/70 border border-teal-500/20 hover:border-yellow-400/40 transition-all duration-300 shadow-md">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400 text-xl group-hover:scale-110 transition-transform">
                <DollarSign className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">
                  Custos de manutenção elevados sem visibilidade
                </h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Gastos excessivos com peças sobressalentes e serviços emergenciais, sem clareza sobre a raiz onde os desperdícios estão ocorrendo.
                </p>
              </div>
            </div>

            <div className="spotlight-card group flex items-start gap-4 p-5 rounded-2xl bg-dark-card/70 border border-teal-500/20 hover:border-orange-400/40 transition-all duration-300 shadow-md">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 text-xl group-hover:scale-110 transition-transform">
                <FileWarning className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-orange-300 transition-colors">
                  Falta de conformidade com normas técnicas (NR-12, NR-13)
                </h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Exposição crítica da empresa a riscos legais graves, multas de fiscalização trabalhista, interdições e graves acidentes de trabalho.
                </p>
              </div>
            </div>

            <div className="spotlight-card group flex items-start gap-4 p-5 rounded-2xl bg-dark-card/70 border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 shadow-md">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#00e5a3] text-xl group-hover:scale-110 transition-transform">
                <TrendingDown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                  Ausência de indicadores confiáveis
                </h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Falta de métricas essenciais como MTBF (tempo médio entre falhas), MTTR (tempo médio para reparo) e disponibilidade para embasar decisões estratégicas.
                </p>
              </div>
            </div>

            <div className="spotlight-card group flex items-start gap-4 p-5 rounded-2xl bg-dark-card/70 border border-teal-500/20 hover:border-cyan-400/40 transition-all duration-300 shadow-md">
              <div className="w-12 h-12 shrink-0 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Equipes sem capacitação adequada
                </h3>
                <p className="text-sm text-slate-400 mt-1 leading-relaxed">
                  Operadores e técnicos sem instrução formal de segurança e procedimentos corretos para operar e manter equipamentos pesados.
                </p>
              </div>
            </div>

          </div>

          {/* CALLOUT CARD (5% A 15%) */}
          <div className="lg:col-span-5 flex">
            <div className="spotlight-card w-full rounded-3xl bg-gradient-to-br from-teal-900/40 via-dark-card to-cyan-950/40 border-2 border-teal-400/40 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl"></div>
              
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-6 border border-teal-500/30">
                  Dado Crítico de Mercado
                </span>
                
                <div className="text-5xl sm:text-6xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 mb-4">
                  5% a 15%
                </div>
                
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                  do faturamento de uma empresa pode ser consumido por custos evitáveis de manutenção.
                </h4>
                
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  A manutenção mal gerida não é apenas uma despesa operacional: ela corrói a margem de lucro direta do negócio e coloca em risco a continuidade operacional da fábrica.
                </p>
              </div>

              <div className="pt-6 border-t border-teal-500/30 relative z-10">
                <div className="flex items-center gap-3 text-teal-300 font-semibold mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00e5a3]" />
                  <span>A Solução da ANL Engenharia</span>
                </div>
                <p className="text-sm text-slate-300">
                  Transformamos sua manutenção de um centro passivo de custos em uma <strong className="text-white">área estratégica de geração de valor e competitividade</strong>.
                </p>
                
                <a href="#calculadora" className="mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-teal-300 hover:text-white transition-colors">
                  <span>Calcular quanto sua empresa pode estar perdendo</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
