import React from "react";
import MaskText, { FadeUp } from "./MaskText";
import { QUEM_SOMOS } from "../data";

export default function QuemSomos() {
  const q = QUEM_SOMOS;
  return (
    <section id="quem-somos" className="grid-lines relative border-t border-ink/10 bg-white">
      <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-8 lg:px-16 lg:py-36">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <FadeUp>
              <p className="mb-8 text-[13px] font-medium uppercase tracking-wide text-forest">[ {q.titulo} ]</p>
            </FadeUp>
            <MaskText
              text={q.titulo.toUpperCase()}
              className="font-display text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]"
            />
          </div>
          <div className="flex flex-col justify-end lg:col-span-5">
            <FadeUp delay={0.15}>
              <p className="text-lg font-semibold leading-snug text-forest">{q.subtitulo}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
                A <strong className="font-bold text-ink">ANL Engenharia &amp; Soluções Técnicas</strong>{" "}
                {q.texto.replace("A ANL Engenharia & Soluções Técnicas ", "")}
              </p>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.1} className="mt-16">
          <div className="overflow-hidden rounded-[22px] border border-ink/10 bg-white shadow-[0_30px_70px_-40px_rgba(10,31,46,0.4)]">
            <div className="grid grid-cols-1 bg-deep px-6 py-4 text-[13px] font-bold uppercase tracking-wide text-white sm:grid-cols-[1fr_1.5fr] sm:px-9">
              <span>Diferencial</span>
              <span className="hidden sm:block">Descrição</span>
            </div>
            {q.tabela.map(([k, v]) => (
              <div
                key={k}
                data-hover
                className="group relative grid grid-cols-1 gap-1 overflow-hidden border-t border-ink/10 px-6 py-6 sm:grid-cols-[1fr_1.5fr] sm:gap-6 sm:px-9 sm:py-7"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-forest transition-transform duration-500 ease-out group-hover:scale-y-100" />
                <span className="relative text-[17px] font-bold tracking-[-0.01em] transition-colors duration-300 group-hover:text-white">{k}</span>
                <span className="relative text-[15px] text-ink/70 transition-colors duration-300 group-hover:text-white/90">{v}</span>
              </div>
            ))}
          </div>
        </FadeUp>

        <MaskText
          text={q.foco}
          as="p"
          className="mx-auto mt-20 max-w-5xl text-center font-display text-[clamp(1.5rem,3.2vw,2.7rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-forest"
        />
      </div>
    </section>
  );
}
