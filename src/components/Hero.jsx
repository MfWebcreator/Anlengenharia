import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import WaveBackground from "./WaveBackground";
import Particles from "./Particles";
import MaskText from "./MaskText";
import { CITACAO, CREA, NAV_LINKS, RESPONSAVEL, SERVICOS, SUBTITULO } from "../data";

function MenuPanel() {
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(window.innerWidth >= 1024), []);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative w-[min(300px,calc(100vw-4.5rem))] overflow-hidden rounded-3xl border border-white/25 bg-white/15 p-3 shadow-[0_20px_60px_-20px_rgba(2,40,44,0.6)] backdrop-blur-xl"
      style={{ background: "linear-gradient(160deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08) 60%, rgba(8,63,70,0.25))" }}
    >
      <div className="flex justify-end">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex items-center gap-3 rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-ink transition hover:bg-white"
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block h-[1.5px] w-5 bg-ink transition ${open ? "translate-y-[3.2px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-ink transition ${open ? "-translate-y-[3.2px] -rotate-45" : ""}`} />
          </span>
          Menu
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden px-2"
          >
            {NAV_LINKS.map(([label, href], i) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + i * 0.05 }}
              >
                <a
                  href={href}
                  onClick={() => {
                    if (window.innerWidth < 1024) setOpen(false);
                  }}
                  className="block py-[7px] text-[15px] font-medium text-white/95 transition hover:translate-x-1 hover:text-white"
                >
                  {label}
                </a>
              </motion.li>
            ))}
            <li className="h-3" />
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Hero() {
  const colunas = SERVICOS.categorias.slice(0, 3);
  return (
    <section id="inicio" className="px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="relative mx-auto flex min-h-[calc(100svh-1.5rem)] max-w-[1900px] flex-col overflow-hidden rounded-[26px] text-white sm:min-h-[calc(100svh-2.5rem)] sm:rounded-[30px]">
        <WaveBackground />
        <Particles count={55} />

        <div className="relative z-10 flex flex-1 flex-col justify-between gap-8 p-5 sm:p-8 lg:p-11">
          {/* Topo: logo + menu de vidro */}
          <div className="flex items-start justify-between gap-4">
            <motion.a
              href="#inicio"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-ink shadow-[0_8px_22px_-6px_rgba(2,30,40,0.6)] ring-1 ring-white/30 sm:h-14 sm:w-14">
                <img src="/logo-emblem.png" alt="ANL Engenharia" className="h-[88%] w-[88%] object-contain" />
              </span>
              <span className="font-display text-[22px] font-bold uppercase leading-[0.9] tracking-[-0.04em] sm:text-[28px]">
                ANL
                <span className="block text-[11px] font-semibold tracking-[0.08em] opacity-90 sm:text-[12px]">Engenharia</span>
              </span>
            </motion.a>
            <MenuPanel />
          </div>

          {/* Meio: frase entre colchetes + cartão branco */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mb-6 max-w-[760px] text-[12px] font-medium uppercase leading-snug tracking-wide sm:text-[13px] lg:mb-9"
            >
              [ {SUBTITULO}. ]
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className="grid gap-8 rounded-[22px] bg-white p-6 text-ink shadow-[0_30px_80px_-30px_rgba(2,40,44,0.55)] sm:p-9 lg:grid-cols-[1.35fr_1fr] lg:gap-10 lg:p-12"
            >
              <div>
                <MaskText
                  as="h1"
                  onMount
                  delay={0.6}
                  text={"ANL ENGENHARIA\n& SOLUÇÕES\nTÉCNICAS"}
                  className="font-display text-[clamp(2.15rem,5.7vw,5.3rem)] font-semibold uppercase leading-[0.96] tracking-[-0.045em]"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="mt-6 font-mono text-[11px] uppercase tracking-wider text-ink/60 sm:text-xs"
                >
                  {RESPONSAVEL} — {CREA}
                </motion.p>
              </div>

              <div className="flex flex-col justify-between gap-8">
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.9 }}
                  className="text-[15px] font-semibold leading-snug tracking-[-0.01em] sm:text-[17px]"
                >
                  {CITACAO}
                </motion.p>
                <motion.a
                  href="#contato"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.9 }}
                  className="group relative flex h-16 items-center justify-center gap-2 overflow-hidden rounded-full bg-forest text-[15px] font-semibold text-white sm:h-[72px]"
                >
                  <span className="absolute inset-0 -translate-x-full rounded-full bg-ink transition-transform duration-500 ease-out group-hover:translate-x-0" />
                  <span className="relative">Fale Conosco</span>
                  <ArrowUpRight className="relative h-4 w-4 transition group-hover:rotate-12" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Base: 3 áreas do portfólio + indicação de rolagem */}
          <div className="grid grid-cols-1 gap-3 border-t border-white/15 pt-5 sm:grid-cols-2 sm:gap-5 sm:border-0 sm:pt-0 lg:grid-cols-4 lg:gap-8">
            {colunas.map((c, i) => (
              <motion.a
                key={c.slide}
                href="#servicos"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + i * 0.12, duration: 0.9 }}
                className="group block rounded-2xl bg-white/[0.08] p-3.5 backdrop-blur-sm sm:bg-transparent sm:p-0 sm:backdrop-blur-none"
              >
                <div className="flex items-center gap-2.5 text-[14px] font-medium uppercase leading-tight tracking-[-0.01em] sm:text-[17px]">
                  <span className="shrink-0 font-mono text-xs text-white/90">[ {i + 1} ]</span>
                  <span className="transition group-hover:translate-x-1">{c.nome}</span>
                </div>
                <p className="mt-1.5 text-[12px] leading-snug text-white/80 sm:mt-2 sm:max-w-[260px] sm:pl-[28px] sm:text-[12.5px]">
                  {c.subtitulo}
                </p>
              </motion.a>
            ))}
            <motion.a
              href="#desafio"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.9 }}
              className="hidden items-start gap-3 text-[13px] opacity-70 transition hover:opacity-100 lg:flex"
            >
              <span className="text-xs">[ <ArrowDown className="inline h-3 w-3 animate-bounce" /> ]</span>
              Role para saber mais
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
