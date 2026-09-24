import React from 'react';
import { 
  TrendingDown, 
  ShieldCheck, 
  Gauge, 
  GraduationCap, 
  BarChart3, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

const entregas = [
  {
    icon: TrendingDown,
    num: "01",
    titulo: "Redução de Custos Operacionais",
    desc: "Eliminação de desperdícios invisíveis de 5% a 15% e otimização cirúrgica no consumo de insumos, energia e paradas não programadas.",
    tag: "Impacto Financeiro Imediato",
    color: "from-cyan-500/20 to-teal-500/5",
    border: "border-cyan-500/30",
    badge: "text-cyan-400 bg-cyan-950/60"
  },
  {
    icon: ShieldCheck,
    num: "02",
    titulo: "Conformidade e Segurança Jurídica",
    desc: "Laudos técnicos rigorosos, emissão de ARTs sob CREA/MG 382575MG e adequação plena às normas regulamentadoras (NR-10, NR-12, NR-13, NR-35).",
    tag: "Blindagem Regulatória",
    color: "from-blue-500/20 to-cyan-500/5",
    border: "border-blue-500/30",
    badge: "text-blue-400 bg-blue-950/60"
  },
  {
    icon: Gauge,
    num: "03",
    titulo: "Produtividade & Eficiência Máxima",
    desc: "Engenharia de processos enxutos (Lean & Six Sigma), garantindo equipamentos operando no ponto ótimo de capacidade e ciclo contínuo.",
    tag: "Otimização OEE",
    color: "from-emerald-500/20 to-teal-500/5",
    border: "border-emerald-500/30",
    badge: "text-emerald-400 bg-emerald-950/60"
  },
  {
    icon: GraduationCap,
    num: "04",
    titulo: "Capacitação da Equipe",
    desc: "Treinamentos práticos e imersivos 'in company' que transformam a cultura de trabalho, elevando a disciplina operacional e a segurança coletiva.",
    tag: "Cultura & Pessoas",
    color: "from-teal-500/20 to-cyan-500/5",
    border: "border-teal-500/30",
    badge: "text-teal-400 bg-teal-950/60"
  },
  {
    icon: BarChart3,
    num: "05",
    titulo: "Decisões Baseadas em Dados",
    desc: "Diagnósticos instrumentados e relatórios analíticos de alta precisão que eliminam o 'achismo' e fundamentam cada decisão de investimento.",
    tag: "Engenharia Analítica",
    color: "from-indigo-500/20 to-cyan-500/5",
    border: "border-indigo-500/30",
    badge: "text-indigo-400 bg-indigo-950/60"
  }
];

export default function PropostaValor() {
  return (
    <section id="proposta-valor" className="relative py-28 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/70">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Slide 04 • Proposta de Valor
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            O Que Entregamos de <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">Concreto</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Resultados mensuráveis, documentação técnica com validade jurídica e transformações sustentáveis que se refletem diretamente no DRE da sua indústria.
          </p>
        </div>

        {/* Grid de 5 Entregas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {entregas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`relative group rounded-2xl border ${item.border} bg-gradient-to-b ${item.color} p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)] flex flex-col justify-between`}
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md border border-cyan-500/20 ${item.badge}`}>
                      {item.tag}
                    </span>
                    <span className="text-3xl font-black text-slate-700 group-hover:text-cyan-400 transition-colors">
                      {item.num}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-slate-900/90 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/50 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.titulo}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Footer link */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-medium text-slate-400 group-hover:text-cyan-400 transition-colors">
                  <span className="inline-flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                    Garantia Técnica ANL
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            );
          })}

          {/* Card Resumo / Chamada */}
          <div className="rounded-2xl border border-dashed border-cyan-500/40 bg-cyan-950/20 p-8 backdrop-blur-xl flex flex-col justify-between text-center md:col-span-2 lg:col-span-1">
            <div className="my-auto py-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-4 animate-bounce">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Engenharia de Alto Padrão
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 font-light">
                Cada diagnóstico é assinado por engenheiro habilitado com ART, garantindo tranquilidade jurídica perante auditorias, Ministério do Trabalho e seguradoras.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all"
              >
                Solicitar Diagnóstico Agora
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
