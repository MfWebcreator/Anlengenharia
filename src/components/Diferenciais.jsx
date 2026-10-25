import React from "react";
import MaskText, { FadeUp } from "./MaskText";
import { DIFERENCIAIS } from "../data";

export default function Diferenciais() {
  const d = DIFERENCIAIS;
  return (
    <section id="diferenciais" className="grid-lines relative bg-[#f8f9f9]">
      <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <FadeUp>
              <p className="mb-8 text-[13px] font-medium uppercase tracking-wide text-forest">[ Diferenciais ]</p>
            </FadeUp>
            <MaskText
              text={d.titulo.toUpperCase()}
              className="font-display text-[clamp(2.2rem,5.4vw,5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
            />
          </div>
          <div className="flex items-end lg:col-span-4">
            <FadeUp delay={0.15}>
              <p className="text-lg font-semibold leading-snug text-forest">{d.subtitulo}</p>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.1} className="mt-16">
          <div className="overflow-hidden rounded-[22px] border border-ink/10 bg-white shadow-[0_30px_70px_-40px_rgba(10,31,46,0.4)]">
            <div className="grid grid-cols-[1fr_1.5fr] bg-deep px-5 py-4 text-[13px] font-bold uppercase tracking-wide text-white sm:px-9">
              <span>Critério</span>
              <span>ANL Engenharia</span>
            </div>
            {d.tabela.map(([k, v], i) => (
              <div
                key={k}
                data-hover
                className="group relative grid grid-cols-1 gap-1 overflow-hidden border-t border-ink/10 px-5 py-6 sm:grid-cols-[1fr_1.5fr] sm:gap-6 sm:px-9 sm:py-7"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-forest transition-transform duration-500 ease-out group-hover:scale-x-100" />
                <span className="relative flex items-center gap-4 text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-white">
                  <span className="font-mono text-xs font-medium text-forest transition-colors group-hover:text-white/70">0{i + 1}</span>
                  {k}
                </span>
                <span className="relative text-[15px] text-ink/70 transition-colors duration-300 group-hover:text-white/95">{v}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mt-12">
          <div className="rounded-r-2xl border-l-4 border-brand bg-deep px-7 py-7 text-white sm:px-10">
            <p className="text-lg italic leading-relaxed sm:text-xl">
              A ANL Engenharia é o parceiro técnico que sua empresa precisa para operar com{" "}
              <strong className="font-bold text-brand">segurança, eficiência e confiabilidade</strong>.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
