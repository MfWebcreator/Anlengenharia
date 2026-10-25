import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart3, DraftingCompass, FileSignature, Gauge, GraduationCap, Scale, Search,
  Settings, ShieldCheck, Snowflake, TrendingUp,
} from "lucide-react";
import Particles from "./Particles";
import MaskText, { FadeUp } from "./MaskText";
import { SERVICOS } from "../data";

const ICONS = {
  search: Search, settings: Settings, bars: BarChart3, sign: FileSignature, shield: ShieldCheck,
  gauge: Gauge, cap: GraduationCap, snow: Snowflake, compass: DraftingCompass, scale: Scale, trend: TrendingUp,
};

// Posições dos 4 nós no diagrama (coordenadas de um quadro 1000 x 460)
const NODES = [
  { x: 0, y: 20, w: 280, h: 185 },
  { x: 330, y: 20, w: 280, h: 185 },
  { x: 0, y: 255, w: 280, h: 185 },
  { x: 330, y: 255, w: 280, h: 185 },
];
const PATHS = [
  "M280,112 H330",
  "M280,347 H330",
  "M610,112 H645 Q665,112 665,140 V210 Q665,230 685,230",
  "M610,347 H645 Q665,347 665,320 V250 Q665,230 685,230",
];

function Node({ cat, active, onClick, style, className = "", isAbsolute = false }) {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`group ${isAbsolute ? "absolute" : "relative"} flex flex-col justify-between overflow-hidden rounded-[18px] border p-3.5 sm:rounded-[20px] sm:p-5 text-left transition duration-500 ${
        active
          ? "border-brand/70 bg-gradient-to-br from-forest via-forest/80 to-deep shadow-[0_0_60px_-8px_rgba(0,191,165,0.7)]"
          : "border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:border-white/30"
      } ${className}`}
    >
      <span className="font-mono text-[10px] sm:text-[11px] tracking-widest text-white/50">[ {cat.slide} ]</span>
      <span className="mt-2 sm:mt-0">
        <span className="block font-head text-[13.5px] font-medium leading-snug text-white sm:text-[17px]">{cat.nome}</span>
        <span className="mt-1 block text-[11px] leading-tight text-white/60 sm:mt-1.5 sm:text-[12.5px]">{cat.subtitulo}</span>
      </span>
    </button>
  );
}

export default function Servicos() {
  const [active, setActive] = useState(0);
  const cats = SERVICOS.categorias;
  const cat = cats[active];

  return (
    <section id="servicos" className="relative overflow-hidden bg-[#04101a] text-white">
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[600px] w-[700px] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(0,128,111,0.25), transparent)" }} />
      <div className="pointer-events-none absolute bottom-0 left-[-10%] h-[500px] w-[600px] rounded-full" style={{ background: "radial-gradient(closest-side, rgba(8,63,70,0.5), transparent)" }} />
      <Particles count={70} />

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-wide text-brand">[ Serviços ]</p>
          </FadeUp>
          <MaskText
            text={SERVICOS.titulo.toUpperCase()}
            className="font-display text-[clamp(2.4rem,6.4vw,5.8rem)] font-semibold leading-[0.97] tracking-[-0.045em]"
          />
        </div>

        {/* Diagrama (desktop): 4 áreas do portfólio convergindo para a ANL */}
        <FadeUp delay={0.1} className="mt-20">
          <div className="relative mx-auto hidden w-full max-w-[1100px] md:block" style={{ aspectRatio: "1000 / 460" }}>
            <svg viewBox="0 0 1000 460" className="absolute inset-0 h-full w-full" fill="none">
              <defs>
                <linearGradient id="lineG" x1="0" x2="1">
                  <stop offset="0" stopColor="#00bfa5" stopOpacity="0.2" />
                  <stop offset="1" stopColor="#7ff0dc" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              {/* circuitos em volta do chip */}
              <g stroke="#00bfa5" strokeOpacity="0.28" strokeWidth="1">
                {[150, 190, 270, 310].map((y) => (
                  <path key={y} d={`M960,${y} H${990 - (y % 3) * 6}`} />
                ))}
                {[740, 800, 860, 920].map((x) => (
                  <path key={x} d={`M${x},100 V${60 - (x % 5)}`} />
                ))}
                {[740, 800, 860, 920].map((x) => (
                  <path key={"b" + x} d={`M${x},360 V${400 + (x % 5)}`} />
                ))}
              </g>
              {PATHS.map((d, i) => (
                <g key={i}>
                  <path id={`p${i}`} d={d} stroke="#ffffff" strokeOpacity="0.12" strokeWidth="2" />
                  <path d={d} stroke="url(#lineG)" strokeWidth="2.5" className="flow-line" />
                </g>
              ))}
            </svg>

            {cats.map((c, i) => (
              <Node
                key={c.slide}
                cat={c}
                active={i === active}
                onClick={() => setActive(i)}
                isAbsolute
                style={{
                  left: `${NODES[i].x / 10}%`,
                  top: `${NODES[i].y / 4.6}%`,
                  width: `${NODES[i].w / 10}%`,
                  height: `${NODES[i].h / 4.6}%`,
                }}
              />
            ))}

            {/* Chip central com a logo */}
            <div
              className="floaty absolute grid place-items-center rounded-[34px] border border-white/30 bg-gradient-to-br from-forest to-deep shadow-[0_0_100px_10px_rgba(0,191,165,0.4),inset_0_0_30px_rgba(255,255,255,0.18)]"
              style={{ left: "68.5%", top: `${20 / 4.6}%`, width: "31.5%", height: `${420 / 4.6}%` }}
            >
              <span className="absolute inset-3 rounded-[26px] border border-white/20" />
              <span className="grid aspect-square w-[62%] place-items-center rounded-full bg-ink shadow-[0_0_40px_rgba(0,191,165,0.6)] ring-1 ring-brand/50">
                <img src="/logo-emblem.png" alt="ANL Engenharia" className="h-[90%] w-[90%] object-contain" />
              </span>
            </div>
          </div>

          {/* Versão mobile */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:hidden">
            {cats.map((c, i) => (
              <Node key={c.slide} cat={c} active={i === active} onClick={() => setActive(i)} className="min-h-[120px] sm:min-h-[150px]" />
            ))}
          </div>
        </FadeUp>

        {/* Detalhes da área escolhida */}
        <div className="mt-16 sm:mt-28">
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.slide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div className="mb-10 flex flex-col gap-2 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
                <h3 className="font-display text-[clamp(1.6rem,3.4vw,2.8rem)] font-semibold leading-tight tracking-[-0.035em]">
                  {SERVICOS.titulo}: {cat.nome}
                </h3>
                <p className="text-[15px] font-semibold text-brand sm:max-w-sm sm:text-right">{cat.subtitulo}</p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {cat.itens.map((it, i) => {
                  const Icon = ICONS[it.icon];
                  return (
                    <motion.article
                      key={it.titulo}
                      data-hover
                      initial={{ opacity: 0, y: 40, rotateX: 18 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                      style={{ transformPerspective: 1200 }}
                      className="group relative flex flex-col overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-b from-[#0e2736] to-[#071824] p-7 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-[0_20px_60px_-20px_rgba(0,191,165,0.5)]"
                    >
                      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-60 transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(closest-side, rgba(0,191,165,0.3), transparent)" }} />
                      <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-forest text-white shadow-[0_10px_26px_-8px_rgba(0,191,165,0.7)]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <h4 className="relative mt-6 font-head text-[19px] font-medium leading-snug">{it.titulo}</h4>
                      <p className="relative mt-3 flex-1 text-[14px] leading-relaxed text-white/65">{it.texto}</p>
                      <div className="relative mt-6 border-t border-white/10 pt-4">
                        <p className="text-[11px] font-bold uppercase tracking-widest text-brand">Resultado</p>
                        <p className="mt-1 text-[13.5px] font-semibold italic leading-snug text-white/90">{it.resultado}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
