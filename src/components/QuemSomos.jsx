import React from 'react';
import { UserCheck, Stamp, Crosshair, Layers, TrendingUp } from 'lucide-react';

export default function QuemSomos() {
  return (
    <section id="sobre" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#00e5a3] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-2 inline-block">Conheça a ANL</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Quem Somos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-teal-300 font-medium">
            ANL Engenharia: especialistas em confiabilidade e performance industrial
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* APRESENTAÇÃO */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-card/80 border border-teal-500/25 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-[#00e5a3] text-2xl shadow-inner">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-white">Eng. Anderson Gonçalves Silvério</h3>
                  <span className="text-xs text-teal-300 font-mono font-semibold">CREA/MG 382575MG</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                A <strong>ANL Engenharia &amp; Soluções Técnicas</strong> é uma empresa especializada em manutenção, confiabilidade e suporte técnico em engenharia mecânica, com atuação estratégica voltada para a geração de valor real nas operações industriais.
              </p>

              <div className="p-4 rounded-xl bg-teal-950/40 border border-teal-500/30">
                <div className="text-xs uppercase tracking-wider text-teal-400 font-bold mb-1">Nosso Foco Primordial</div>
                <p className="text-xs sm:text-sm text-slate-300 italic">
                  "Nosso foco é transformar a manutenção e a engenharia em áreas estratégicas de geração de valor para nossos clientes."
                </p>
              </div>
            </div>
          </div>

          {/* MATRIZ DE DIFERENCIAIS (SLIDE 3) */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-teal-500/30 bg-dark-card/90 shadow-2xl">
              <div className="bg-teal-900/50 px-6 py-4 border-b border-teal-500/30 flex items-center justify-between">
                <span className="font-display font-bold text-white text-base">Matriz de Diferenciais Estruturados</span>
                <span className="text-xs text-teal-300 font-medium">Padrão ANL</span>
              </div>
              
              <div className="divide-y divide-teal-500/20">
                
                <div className="p-5 sm:p-6 hover:bg-teal-900/20 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:w-1/3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#00e5a3] flex items-center justify-center text-sm">
                      <Stamp className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white">Responsabilidade Técnica</span>
                  </div>
                  <div className="sm:w-2/3 text-sm text-teal-300 font-medium sm:text-right">
                    Eng. Anderson Gonçalves Silvério — CREA/MG 382575MG
                  </div>
                </div>

                <div className="p-5 sm:p-6 hover:bg-teal-900/20 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:w-1/3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#00e5a3] flex items-center justify-center text-sm">
                      <Crosshair className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white">Foco Estratégico</span>
                  </div>
                  <div className="sm:w-2/3 text-sm text-slate-300 sm:text-right">
                    Transformar manutenção em vantagem competitiva mensurável
                  </div>
                </div>

                <div className="p-5 sm:p-6 hover:bg-teal-900/20 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:w-1/3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#00e5a3] flex items-center justify-center text-sm">
                      <Layers className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white">Abrangência</span>
                  </div>
                  <div className="sm:w-2/3 text-sm text-slate-300 sm:text-right">
                    Do diagnóstico à conformidade legal e projetos mecânicos
                  </div>
                </div>

                <div className="p-5 sm:p-6 hover:bg-teal-900/20 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3 sm:w-1/3">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-[#00e5a3] flex items-center justify-center text-sm">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-white">Resultado</span>
                  </div>
                  <div className="sm:w-2/3 text-sm text-emerald-400 font-bold sm:text-right">
                    Redução de custos + aumento de disponibilidade + segurança total
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
