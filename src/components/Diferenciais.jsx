import React from 'react';
import { Check, X, Shield, Award, Zap, Compass, BarChart2 } from 'lucide-react';

const matrizComparativa = [
  {
    criterio: "Habilitação Técnica & ART",
    icon: Award,
    outros: "Muitas vezes sem responsável técnico habilitado no CREA; terceirização de laudos sem garantia.",
    anl: "Engenheiro Mecânico e de Segurança habilitado (CREA/MG 382575MG). Emissão de ART em 100% dos trabalhos.",
    vantagem: "Segurança jurídica e validade nacional perante auditorias e órgãos reguladores."
  },
  {
    criterio: "Abordagem no Chão de Fábrica",
    icon: Compass,
    outros: "Teórica e distante da realidade; relatórios genéricos que ficam engavetados.",
    anl: "Prática e 'chão de fábrica', com presença ativa na operação e entendimento real da rotina das máquinas.",
    vantagem: "Soluções viáveis que a equipe operacional realmente abraça e executa."
  },
  {
    criterio: "Metodologia & Longevidade",
    icon: Zap,
    outros: "Ações pontuais do tipo 'apaga-incêndio'; o problema volta a acontecer semanas depois.",
    anl: "Estruturação de processos sustentáveis com Lean, Six Sigma e PCM de padrão internacional.",
    vantagem: "Fim das paradas repetitivas e estabilização definitiva dos indicadores."
  },
  {
    criterio: "Escopo de Atuação",
    icon: Shield,
    outros: "Fragmentado: uma empresa faz segurança, outra mecânica, sem diálogo entre si.",
    anl: "Engenharia Mecânica, Segurança do Trabalho, Gestão e Conformidade em uma única solução coordenada.",
    vantagem: "Visão holística que evita retrabalho e reduz drasticamente o custo de contratação."
  },
  {
    criterio: "Retorno sobre Investimento (ROI)",
    icon: BarChart2,
    outros: "Custo alto com retorno incerto; sem mensuração de impacto real nas contas da empresa.",
    anl: "Alto ROI mensurável; projeto desenhado para se pagar com a própria redução de desperdícios.",
    vantagem: "Investimento que gera retorno financeiro claro comprovado na ponta do lápis."
  }
];

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Slide 09 • Matriz Comparativa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Por Que Escolher a <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">ANL Engenharia?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Compare o modelo tradicional de consultoria com a engenharia prática, resolutiva e juridicamente blindada que aplicamos.
          </p>
        </div>

        {/* Tabela Comparativa Desktop */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-cyan-500/30 bg-slate-950/80 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-12 bg-slate-900/90 border-b border-slate-800 p-6 text-sm font-bold">
            <div className="col-span-3 text-slate-400 uppercase tracking-wider text-xs">Critério de Avaliação</div>
            <div className="col-span-4 text-slate-500 flex items-center gap-2 uppercase tracking-wider text-xs">
              <X className="w-4 h-4 text-red-400/80" />
              Mercado / Consultorias Genéricas
            </div>
            <div className="col-span-5 text-cyan-300 flex items-center gap-2 uppercase tracking-wider text-xs font-mono">
              <Check className="w-4 h-4 text-teal-400" />
              ANL Engenharia & Soluções Técnicas
            </div>
          </div>

          <div className="divide-y divide-slate-800/80">
            {matrizComparativa.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="grid grid-cols-12 p-6 items-center hover:bg-slate-900/40 transition-colors"
                >
                  {/* Critério */}
                  <div className="col-span-3 pr-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-white text-sm">{item.criterio}</span>
                    </div>
                  </div>

                  {/* Outros */}
                  <div className="col-span-4 pr-6 text-xs text-slate-400 leading-relaxed font-light">
                    {item.outros}
                  </div>

                  {/* ANL Engenharia (Destaque) */}
                  <div className="col-span-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 p-4">
                    <p className="text-sm font-medium text-slate-100 mb-2 flex items-start gap-2">
                      <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                      {item.anl}
                    </p>
                    <p className="text-xs text-cyan-300/80 font-light italic pl-6">
                      Benefício: {item.vantagem}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Versão Mobile (Cards Responsivos) */}
        <div className="lg:hidden space-y-6">
          {matrizComparativa.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 backdrop-blur-xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base">{item.criterio}</h3>
                </div>

                <div className="space-y-4 text-xs">
                  {/* Outros */}
                  <div className="p-3.5 rounded-xl bg-red-950/10 border border-red-900/30 text-slate-400">
                    <span className="font-semibold text-red-400 block mb-1">✕ Outras Empresas:</span>
                    {item.outros}
                  </div>

                  {/* ANL */}
                  <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/40 text-slate-200 shadow-md shadow-cyan-950/40">
                    <span className="font-semibold text-cyan-300 block mb-1 flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-teal-400" />
                      ANL Engenharia:
                    </span>
                    <p className="mb-2 leading-relaxed">{item.anl}</p>
                    <p className="text-[11px] text-cyan-300/80 italic border-t border-cyan-900/50 pt-2">
                      {item.vantagem}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
