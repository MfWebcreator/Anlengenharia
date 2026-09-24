import React, { useState } from 'react';
import { 
  Activity, 
  ShieldAlert, 
  GraduationCap, 
  Scale, 
  Check, 
  Sparkles, 
  ArrowRight,
  SlidersHorizontal,
  Flame,
  Wrench,
  FileCheck2,
  Cpu,
  Award,
  Users
} from 'lucide-react';

const servicosCategorias = [
  {
    id: "diagnostico",
    slide: "Slide 05",
    titulo: "Diagnóstico & Gestão",
    shortTitle: "Diagnóstico & Gestão",
    badge: "Eficiência & Redução de Custos",
    icon: Activity,
    color: "from-cyan-500 to-teal-500",
    borderActive: "border-cyan-400 bg-cyan-950/40 text-cyan-300",
    itens: [
      {
        titulo: "Diagnóstico Operacional Completo",
        desc: "Mapeamento minucioso de gargalos invisíveis, perdas térmicas e elétricas e oportunidades imediatas de melhoria contínua.",
        tags: ["Gargalos", "Perdas", "Kaizen"]
      },
      {
        titulo: "Implantação e Gestão de PCM",
        desc: "Planejamento e Controle de Manutenção estruturado para reduzir paradas corretivas não planejadas e maximizar a vida útil das máquinas.",
        tags: ["PCM", "Zero Quebra", "Disponibilidade"]
      },
      {
        titulo: "Otimização de Processos (Lean Manufacturing)",
        desc: "Metodologias Lean/Six Sigma para eliminação cirúrgica de desperdícios e aumento expressivo de cadência produtiva.",
        tags: ["Lean", "5S", "OEE Máximo"]
      },
      {
        titulo: "Gestão de Ativos & Ciclo de Vida",
        desc: "Maximização do retorno sobre investimento (ROI) em maquinário e instalações industriais pesadas.",
        tags: ["CapEx/OpEx", "Depreciação", "Ativos"]
      }
    ]
  },
  {
    id: "inspecao",
    slide: "Slide 06",
    titulo: "Inspeção & Conformidade",
    shortTitle: "Inspeção & Conformidade",
    badge: "NRs, Termografia & ART",
    icon: ShieldAlert,
    color: "from-blue-500 to-cyan-500",
    borderActive: "border-blue-400 bg-blue-950/40 text-blue-300",
    itens: [
      {
        titulo: "Inspeção Termográfica e Preditiva",
        desc: "Diagnóstico preventivo com câmeras infravermelhas de alta resolução para evitar panes elétricas e incêndios.",
        tags: ["Termografia", "Painéis Elétricos", "Prevenção"]
      },
      {
        titulo: "Laudos de Periculosidade e Insalubridade",
        desc: "Avaliação técnica detalhada com embasamento jurídico, laudo assinado e total fundamentação nas normas regulamentadoras.",
        tags: ["Laudos", "Blindagem Trabalhista", "Normas"]
      },
      {
        titulo: "Laudos de Ruído e Vibração Ocupacional",
        desc: "Medições instrumentadas e dosimetrias para conformidade rigorosa com normas ambientais e medicina do trabalho.",
        tags: ["Dosimetria", "Vibração", "Higiene Ocupacional"]
      },
      {
        titulo: "Adequação NR-10, NR-12, NR-13, NR-35",
        desc: "Análise de risco preliminar, projetos de adequação mecânica e elétrica e validação técnica com emissão de ART/CREA.",
        tags: ["NR-12", "NR-10", "NR-13 Caldeiras", "NR-35"]
      }
    ]
  },
  {
    id: "capacitacao",
    slide: "Slide 07",
    titulo: "Capacitação & Projetos",
    shortTitle: "Capacitação & Projetos",
    badge: "Treinamentos In Company & Mentoria",
    icon: GraduationCap,
    color: "from-teal-500 to-emerald-500",
    borderActive: "border-teal-400 bg-teal-950/40 text-teal-300",
    itens: [
      {
        titulo: "Treinamento Operacional Customizado",
        desc: "Capacitação prática focada na realidade exata do chão de fábrica da sua empresa, aumentando o rigor técnico.",
        tags: ["Chão de Fábrica", "Prático", "Cultura Segura"]
      },
      {
        titulo: "Capacitação em NR-10, NR-12 e NR-35",
        desc: "Formação e reciclagem com certificação válida em todo o território nacional, ministrado por engenheiro credenciado.",
        tags: ["Certificado Válido", "Reciclagem", "Segurança"]
      },
      {
        titulo: "Projetos de Melhoria Contínua",
        desc: "Condução de projetos Kaizen com metas claras de produtividade e mensuração matemática de resultados alcançados.",
        tags: ["Projetos Kaizen", "KPIs", "Metas"]
      },
      {
        titulo: "Mentoria para Lideranças Técnicas",
        desc: "Desenvolvimento de encarregados, supervisores e gestores de manutenção para sustentação perene das melhorias.",
        tags: ["Supervisão", "Liderança", "Gestão Ágil"]
      }
    ]
  },
  {
    id: "juridico",
    slide: "Slide 08",
    titulo: "Jurídico & Consultoria",
    shortTitle: "Jurídico & Consultoria",
    badge: "Perícias, Due Diligence & PGR",
    icon: Scale,
    color: "from-indigo-500 to-cyan-500",
    borderActive: "border-indigo-400 bg-indigo-950/40 text-indigo-300",
    itens: [
      {
        titulo: "Assistência Técnica em Perícias Judiciais",
        desc: "Acompanhamento presencial de perícias trabalhistas, formulação de quesitos estratégicos e pareceres técnicos fundamentados.",
        tags: ["Perícia Judicial", "Assistência Técnica", "Redução de Passivo"]
      },
      {
        titulo: "Due Diligence Técnica Industrial",
        desc: "Avaliação técnica do estado de conservação de instalações e maquinários para aquisições, fusões e auditorias bancárias.",
        tags: ["M&A", "Auditoria", "Avaliação de Ativos"]
      },
      {
        titulo: "Consultoria Regulatória Contínua",
        desc: "Suporte permanente mensal para manter sua planta 100% blindada e em conformidade contínua com a legislação trabalhista.",
        tags: ["Retainer", "Conformidade Contínua", "Plantão Técnico"]
      },
      {
        titulo: "Planos de Prevenção de Riscos (PGR / PCMSO)",
        desc: "Estruturação e revisão técnica dos programas obrigatórios de Segurança e Saúde do Trabalho com foco em prevenção real.",
        tags: ["PGR", "PCMSO", "eSocial"]
      }
    ]
  }
];

export default function Servicos() {
  const [activeTab, setActiveTab] = useState("diagnostico");
  const activeData = servicosCategorias.find((cat) => cat.id === activeTab) || servicosCategorias[0];

  return (
    <section id="servicos" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-slate-900/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Slides 05 a 08 • Portfólio de Serviços
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Soluções Especializadas de <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-white bg-clip-text text-transparent">Ponta a Ponta</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Atendimento modular ou integrado para indústrias, mineradoras e empresas de logística em todo o Brasil.
          </p>
        </div>

        {/* Barra de Navegação por Abas (Desktop & Mobile) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {servicosCategorias.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 border ${
                  isSelected
                    ? "border-cyan-400 bg-cyan-950/80 text-cyan-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] scale-105"
                    : "border-slate-800 bg-slate-950/60 text-slate-400 hover:text-slate-200 hover:border-slate-700"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-400" : "text-slate-500"}`} />
                <span>{cat.shortTitle}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  isSelected ? "bg-cyan-500/20 text-cyan-300" : "bg-slate-800 text-slate-500"
                }`}>
                  {cat.slide}
                </span>
              </button>
            );
          })}
        </div>

        {/* Conteúdo da Categoria Ativa */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Header do Card Ativo */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-slate-800/80 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>{activeData.slide}</span>
                <span>•</span>
                <span className="text-slate-400">{activeData.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                <activeData.icon className="w-8 h-8 text-cyan-400" />
                {activeData.titulo}
              </h3>
            </div>

            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 hover:brightness-110 transition-all shadow-md shadow-cyan-500/20 self-start md:self-auto"
            >
              <span>Consultar Especialista</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Grid de 4 Serviços da Categoria */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeData.itens.map((item, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 sm:p-7 hover:border-cyan-500/40 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(6,182,212,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-xs font-mono font-bold text-cyan-400">
                      0{idx + 1}
                    </span>
                    <Sparkles className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.titulo}
                  </h4>
                  
                  <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/60">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-cyan-900/40"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Rodapé da Seção */}
          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400" />
              <span>Todos os serviços possuem Anotação de Responsabilidade Técnica (ART - CREA/MG 382575MG).</span>
            </div>
            <a 
              href="https://wa.me/5531998049626?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico%20da%20ANL%20Engenharia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4"
            >
              Falar no WhatsApp (31) 9 9804-9626 →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
