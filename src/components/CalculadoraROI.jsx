import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

export default function CalculadoraROI() {
  const [faturamentoAnual, setFaturamentoAnual] = useState(5000000); // R$ 5 milhões
  const [percentualDesperdicio, setPercentualDesperdicio] = useState(10); // 10% (entre 5% e 15%)

  // Cálculos matemáticos
  const perdaEstimada = (faturamentoAnual * percentualDesperdicio) / 100;
  const economiaPotencial = perdaEstimada * 0.7; // Recuperação média de até 70% com engenharia preventiva

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  const getWhatsAppLink = () => {
    const msg = `Olá Eng. Anderson! Fiz a simulação na calculadora do site da ANL Engenharia:\n` +
      `• Faturamento Anual: ${formatCurrency(faturamentoAnual)}\n` +
      `• Desperdício Estimado (${percentualDesperdicio}%): ${formatCurrency(perdaEstimada)}/ano\n` +
      `• Economia Potencial: ${formatCurrency(economiaPotencial)}/ano\n\n` +
      `Gostaria de agendar um diagnóstico operacional para a minha empresa.`;
    return `https://wa.me/5531998049626?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="calculadora" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-950/90 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Simulador de Impacto Financeiro
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Descubra Quanto Sua Indústria Pode <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">Economizar</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Baseado no dado estatístico do portfólio: 5% a 15% da receita industrial é consumida por falhas, paradas não programadas e passivos ocultos.
          </p>
        </div>

        {/* Card Interativo */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-cyan-500/30 bg-slate-900/80 backdrop-blur-2xl p-6 sm:p-12 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            
            {/* Controles da Calculadora */}
            <div className="space-y-8">
              {/* Slider 1: Faturamento */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-200">
                    Faturamento Anual da Planta:
                  </label>
                  <span className="text-lg font-bold font-mono text-cyan-400">
                    {formatCurrency(faturamentoAnual)}
                  </span>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="50000000"
                  step="500000"
                  value={faturamentoAnual}
                  onChange={(e) => setFaturamentoAnual(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>R$ 500 mil</span>
                  <span>R$ 25 mi</span>
                  <span>R$ 50 mi</span>
                </div>
              </div>

              {/* Slider 2: % Desperdício */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-semibold text-slate-200">
                    Nível Estimado de Perdas/Desperdício:
                  </label>
                  <span className="text-lg font-bold font-mono text-teal-400">
                    {percentualDesperdicio}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="15"
                  step="0.5"
                  value={percentualDesperdicio}
                  onChange={(e) => setPercentualDesperdicio(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400 focus:outline-none"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>5% (Mínimo de Perdas)</span>
                  <span>10% (Média Geral)</span>
                  <span>15% (Crítico / Sem PCM)</span>
                </div>
              </div>

              {/* Informação contextual */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-950/60 text-xs text-slate-400 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p>
                  Perdas invisíveis incluem paradas não programadas, retrabalho, horas extras de manutenção corretiva, multas trabalhistas e consumo energético excessivo.
                </p>
              </div>
            </div>

            {/* Resultado Visual */}
            <div className="rounded-2xl border border-cyan-500/40 bg-gradient-to-br from-cyan-950/50 via-slate-900/90 to-teal-950/40 p-6 sm:p-8 flex flex-col justify-between h-full text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <div>
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1">
                  Desperdício Invisível Estimado
                </p>
                <div className="text-2xl sm:text-3xl font-extrabold text-red-400/90 line-through decoration-red-500/50 font-mono mb-6">
                  {formatCurrency(perdaEstimada)}/ano
                </div>

                <div className="h-px bg-slate-800 w-full mb-6"></div>

                <p className="text-xs uppercase font-mono tracking-wider text-teal-400 font-semibold mb-1 flex items-center justify-center gap-1.5">
                  <TrendingUp className="w-4 h-4" />
                  Economia Potencial com a ANL
                </p>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-gradient-to-r from-teal-300 via-cyan-400 to-white bg-clip-text font-mono mb-3">
                  {formatCurrency(economiaPotencial)}
                </div>
                <p className="text-xs text-slate-300 font-light">
                  Estimativa de até 70% de recuperação através de PCM, Kaizen e conformidade técnica.
                </p>
              </div>

              {/* CTA direto pro WhatsApp com a mensagem formatada */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all group"
                >
                  <span>Apresentar Diagnóstico ao Eng. Anderson</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
                <p className="text-[11px] text-slate-500 mt-2">
                  Atendimento direto pelo WhatsApp oficial (31) 9 9804-9626
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
