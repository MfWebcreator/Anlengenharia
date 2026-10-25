import React from "react";
import { Mail, MessageCircle, ArrowUpRight, ArrowUp } from "lucide-react";
import Particles from "./Particles";
import MaskText, { FadeUp } from "./MaskText";
import { CITACAO, CONTATO, CREA, EMAIL, EMPRESA, NAV_LINKS, RESPONSAVEL, TELEFONE, WHATSAPP } from "../data";

export default function Contato() {
  return (
    <section id="contato" className="relative overflow-hidden bg-abyss text-white">
      {/* Feixes de luz (aurora) como no final do vídeo de referência */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[760px]">
        <div className="beam absolute left-[50%] top-[-120px] h-[760px] w-[420px]" style={{ background: "radial-gradient(ellipse 35% 50% at 50% 40%, rgba(0,191,165,0.55), rgba(0,128,111,0.25) 55%, transparent 100%)" }} />
        <div className="beam absolute left-[22%] top-[40px] h-[620px] w-[200px] -rotate-[28deg]" style={{ animationDelay: "-3s", background: "radial-gradient(ellipse 30% 50% at 50% 40%, rgba(127,240,220,0.35), rgba(0,128,111,0.2) 60%, transparent 100%)" }} />
        <div className="beam absolute left-[78%] top-[40px] h-[620px] w-[200px] rotate-[28deg]" style={{ animationDelay: "-6s", background: "radial-gradient(ellipse 30% 50% at 50% 40%, rgba(127,240,220,0.28), rgba(0,128,111,0.18) 60%, transparent 100%)" }} />
      </div>
      <Particles count={90} />

      <div className="relative mx-auto max-w-[1300px] px-5 pt-32 sm:px-8 lg:px-16 lg:pt-44">
        <div className="text-center">
          <FadeUp>
            <img src="/logo-emblem.png" alt="ANL Engenharia" className="floaty mx-auto h-24 w-24 object-contain drop-shadow-[0_0_40px_rgba(0,191,165,0.55)]" />
          </FadeUp>
          <MaskText
            text={CONTATO.titulo.toUpperCase()}
            className="mt-8 font-display text-[clamp(3rem,9.5vw,9rem)] font-semibold leading-[0.92] tracking-[-0.055em]"
          />
          <FadeUp delay={0.2}>
            <p className="mx-auto mt-8 max-w-xl text-xl font-medium text-brand sm:text-2xl">{CONTATO.subtitulo}</p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1} y={50} className="mx-auto mt-16 max-w-3xl">
          <div className="relative overflow-hidden rounded-[26px] border border-brand/40 bg-gradient-to-b from-[#0e2d3b] to-[#081d29] p-5 text-center shadow-[0_0_90px_-30px_rgba(0,191,165,0.6)] sm:rounded-[28px] sm:p-12">
            <h3 className="font-head text-xl font-medium sm:text-2xl">{EMPRESA}</h3>
            <p className="mt-2 text-[13.5px] text-white/70 sm:mt-3 sm:text-[14.5px]">
              {RESPONSAVEL} — {CREA}
            </p>

            <div className="mt-8 grid gap-3.5 sm:mt-9 sm:grid-cols-2 sm:gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-full border border-white/20 px-4 py-3.5 text-[12px] font-medium leading-tight sm:gap-3 sm:px-5 sm:py-4 sm:text-[14px]"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 group-hover:scale-y-100" />
                <Mail className="relative h-4 w-4 shrink-0 text-brand transition group-hover:text-forest sm:h-5 sm:w-5" />
                <span className="relative text-center transition-colors group-hover:text-ink">
                  <span className="block sm:inline">engenheiroandersongoncalves</span>
                  <span className="text-brand group-hover:text-ink sm:text-inherit">@gmail.com</span>
                </span>
              </a>
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent("Olá Eng. Anderson, gostaria de conversar sobre os serviços da ANL Engenharia.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-full bg-forest px-4 py-3.5 text-[13.5px] font-semibold sm:gap-3 sm:px-5 sm:py-4 sm:text-[14px]"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-white transition-transform duration-500 group-hover:scale-y-100" />
                <MessageCircle className="relative h-4 w-4 shrink-0 transition group-hover:text-forest sm:h-5 sm:w-5" />
                <span className="relative transition-colors group-hover:text-ink">{TELEFONE}</span>
                <ArrowUpRight className="relative h-4 w-4 shrink-0 transition-colors group-hover:text-ink" />
              </a>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1} className="mx-auto mt-14 max-w-3xl">
          <p className="border-l-4 border-brand pl-6 text-[15px] italic leading-relaxed text-white/80">“{CITACAO}”</p>
        </FadeUp>

        {/* Rodapé */}
        <footer className="mt-28 border-t border-white/10 py-10">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <a href="#inicio" className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ink ring-1 ring-white/20">
                <img src="/logo-emblem.png" alt="" className="h-[88%] w-[88%] object-contain" />
              </span>
              <span className="font-display text-lg font-bold uppercase tracking-[-0.03em]">ANL Engenharia</span>
            </a>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13.5px] text-white/65">
              {NAV_LINKS.map(([l, h]) => (
                <a key={h} href={h} className="transition hover:text-brand">
                  {l}
                </a>
              ))}
            </nav>
            <a href="#inicio" className="group flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] transition hover:bg-white hover:text-ink">
              Voltar ao topo <ArrowUp className="h-4 w-4 transition group-hover:-translate-y-0.5" />
            </a>
          </div>
          <p className="mt-8 text-center text-[12.5px] text-white/45">
            © {new Date().getFullYear()} {EMPRESA} — {RESPONSAVEL} — {CREA}
          </p>
        </footer>
      </div>
    </section>
  );
}
