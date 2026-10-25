import React from "react";
import { DIFERENCIAIS } from "../data";

/** Faixa em movimento (como a faixa de logos do vídeo), com os critérios do slide 9. */
export default function Marquee() {
  const words = DIFERENCIAIS.tabela.map(([k]) => k);
  const row = [...words, ...words];
  return (
    <div className="overflow-hidden border-b border-ink/10 bg-paper py-7" aria-hidden="true">
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[...row, ...row].map((w, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-[clamp(1.4rem,3vw,2.4rem)] font-semibold uppercase tracking-[-0.03em] text-ink/80">
            {w}
            <span className="grid h-6 w-6 place-items-center rounded-full bg-forest text-[10px] text-white">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
