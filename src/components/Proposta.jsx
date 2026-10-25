import React from "react";
import { motion } from "framer-motion";
import Particles from "./Particles";
import MaskText, { FadeUp } from "./MaskText";
import { PROPOSTA } from "../data";

// Cada cartão começa inclinado e fora de lugar e se alinha com entrada 3D suave
// (a mesma animação dos cartões "Built on a solid foundation" do vídeo).
const START = [
  { rx: 26, rz: -10, y: 80, x: -24 },
  { rx: 30, rz: 6, y: 110, x: -10 },
  { rx: 34, rz: -2, y: 130, x: 0 },
  { rx: 30, rz: -6, y: 110, x: 10 },
  { rx: 26, rz: 10, y: 80, x: 24 },
];

function TiltCard({ i, num, titulo, texto }) {
  const s = START[i];
  const highlight = i === 0;

  return (
    <motion.li
      data-hover
      initial={{ opacity: 0, y: s.y, rotateX: s.rx, rotateZ: s.rz, x: s.x }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateZ: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.85, delay: 0.12 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className={`group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[22px] border p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand/60 hover:shadow-[0_0_50px_-10px_rgba(0,191,165,0.55)] ${
        highlight
          ? "border-brand/40 bg-gradient-to-b from-forest to-deep"
          : "border-white/10 bg-gradient-to-b from-[#0d2633] to-[#071924]"
      }`}
    >
      <span className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-60 transition-opacity group-hover:opacity-100" style={{ background: "radial-gradient(closest-side, rgba(0,191,165,0.3), transparent)" }} />
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-forest font-display text-3xl font-semibold text-white shadow-[0_12px_30px_-8px_rgba(0,191,165,0.7)]">
        {num}
      </div>
      <div className="relative mt-8">
        <h3 className="font-head text-[17px] font-medium leading-snug text-white">{titulo}</h3>
        <p className="mt-2 text-[13.5px] leading-snug text-white/65">{texto}</p>
      </div>
    </motion.li>
  );
}

export default function Proposta() {
  const d = PROPOSTA;

  return (
    <section id="proposta" className="relative overflow-hidden bg-abyss text-white">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,128,111,0.25) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(8,63,70,0.5) 0%, transparent 70%)" }}
      />
      <Particles count={40} />

      <div className="relative mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <FadeUp>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-wide text-brand">[ Proposta de Valor ]</p>
          </FadeUp>
          <MaskText
            text={d.titulo.toUpperCase()}
            className="font-display text-[clamp(2.3rem,6vw,5.4rem)] font-semibold leading-[0.97] tracking-[-0.045em]"
          />
          <FadeUp delay={0.15}>
            <p className="mt-8 text-lg font-semibold text-brand">{d.subtitulo}</p>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/65">{d.intro}</p>
          </FadeUp>
        </div>

        <ul
          className="mx-auto mt-20 grid max-w-[1300px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5"
          style={{ perspective: "1000px" }}
        >
          {d.itens.map(([titulo, texto], i) => (
            <TiltCard key={titulo} i={i} num={i + 1} titulo={titulo} texto={texto} />
          ))}
        </ul>

        <FadeUp delay={0.1} className="mx-auto mt-20 max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border-l-4 border-brand bg-gradient-to-r from-deep/80 to-deep/20 px-7 py-7">
            <p className="text-lg italic leading-relaxed text-white/90 sm:text-xl">{d.citacao}</p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
