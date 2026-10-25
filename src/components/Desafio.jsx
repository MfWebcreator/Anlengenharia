import React from "react";
import { AlertTriangle, DollarSign, FileText, LineChart, Users } from "lucide-react";
import MaskText, { FadeUp } from "./MaskText";
import CountUp from "./CountUp";
import { DESAFIO } from "../data";

const ICONS = { alert: AlertTriangle, dollar: DollarSign, file: FileText, chart: LineChart, users: Users };

export default function Desafio() {
  const d = DESAFIO;
  return (
    <section id="desafio" className="grid-lines relative bg-[#f8f9f9]">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-16 lg:py-36">
        <div className="lg:col-span-7">
          <FadeUp>
            <p className="mb-8 text-[13px] font-medium uppercase tracking-wide text-forest">[ O Desafio ]</p>
          </FadeUp>
          <MaskText
            text={d.titulo.toUpperCase()}
            className="font-display text-[clamp(2.2rem,5.2vw,4.8rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
          />
          <FadeUp delay={0.15}>
            <p className="mt-8 max-w-xl text-lg font-semibold leading-snug text-forest">{d.subtitulo}</p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink/70">{d.intro}</p>
          </FadeUp>

          <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
            {d.itens.map((it, i) => {
              const Icon = ICONS[it.icon];
              return (
                <FadeUp key={i} delay={i * 0.06}>
                  <li data-hover className="group relative flex items-start gap-5 overflow-hidden py-5">
                    <span className="absolute inset-0 -z-0 origin-left scale-x-0 bg-forest/[0.07] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                    <span className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-brand transition group-hover:bg-forest group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="relative pt-1.5 text-[15.5px] leading-snug text-ink/80">
                      <strong className="font-bold text-ink">{it.forte}</strong> {it.resto}
                    </p>
                  </li>
                </FadeUp>
              );
            })}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <FadeUp delay={0.1} y={60} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[28px] bg-forest p-8 text-white shadow-[0_40px_90px_-40px_rgba(0,128,111,0.8)] sm:p-12">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(0,191,165,0.4), transparent)" }} />
              <div className="pointer-events-none absolute -bottom-28 -left-10 h-64 w-64 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(10,31,46,0.5), transparent)" }} />
              <p className="relative text-[13px] font-medium uppercase tracking-wide text-white/80">{d.destaque.antes}</p>
              <div className="relative mt-5 font-display text-[clamp(4rem,9vw,7.5rem)] font-semibold leading-none tracking-[-0.06em]">
                <CountUp to={5} suffix="%" />
                <span className="mx-2 text-[0.38em] font-medium tracking-normal">a</span>
                <CountUp to={15} suffix="%" />
              </div>
              <p className="relative mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em]">do faturamento</p>
              <p className="relative mt-8 border-t border-white/25 pt-6 text-[15px] leading-relaxed text-white/90">
                {d.destaque.depois}
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
