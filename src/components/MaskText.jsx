import React from "react";
import { motion } from "framer-motion";

/**
 * Texto que sobe por dentro de uma máscara, palavra por palavra
 * (a mesma animação dos títulos do vídeo de referência).
 * O gatilho fica no contêiner (que não se move) para o scroll detectar certo.
 */
export default function MaskText({
  text,
  as = "h2",
  className = "",
  delay = 0,
  onMount = false,
}) {
  const M = motion[as];
  const lines = text.split("\n");
  let n = 0;

  const trigger = onMount
    ? { initial: "hidden", animate: "show" }
    : { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "0px 0px -8% 0px" } };

  const word = {
    hidden: { y: "115%", rotate: 5, opacity: 0 },
    show: (i) => ({
      y: "0%",
      rotate: 0,
      opacity: 1,
      transition: { duration: 0.95, delay: delay + i * 0.07, ease: [0.2, 0.8, 0.2, 1] },
    }),
  };

  return (
    <M className={className} aria-label={text.replace(/\n/g, " ")} {...trigger}>
      {lines.map((line, li) => (
        <span key={li} className="block" aria-hidden="true">
          {line.split(" ").map((w, i) => {
            const idx = n++;
            return (
              <span key={i} className="mr-[0.26em] inline-block -mb-[0.14em] overflow-hidden pb-[0.14em] align-bottom last:mr-0">
                <motion.span className="inline-block origin-bottom-left will-change-transform" variants={word} custom={idx}>
                  {w}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </M>
  );
}

/** Aparece subindo suavemente. */
export function FadeUp({ children, delay = 0, className = "", y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
