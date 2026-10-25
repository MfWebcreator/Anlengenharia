import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../data";

/** Menu em pílula de vidro que desce do topo depois do hero (como o "Resq.io" do vídeo). */
export default function FloatingNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = NAV_LINKS.filter(([, h]) => h !== "#inicio" && h !== "#contato");

  return (
    <div className="pointer-events-none fixed inset-x-0 top-3 z-50 flex justify-center px-2.5 sm:top-4 sm:px-3">
      <AnimatePresence>
        {show && (
          <motion.header
            initial={{ y: -90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            className="pointer-events-auto w-full max-w-[1000px]"
          >
            <div className="flex items-center justify-between gap-3 rounded-full border border-white/15 bg-ink/85 py-1.5 pl-2.5 pr-1.5 text-white shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:gap-4 sm:py-2 sm:pl-3 sm:pr-2">
              <a href="#inicio" className="flex items-center gap-2">
                <img src="/logo-emblem.png" alt="ANL" className="h-8 w-8 object-contain sm:h-9 sm:w-9" />
                <span className="font-display text-[14px] font-bold uppercase tracking-[-0.03em] sm:text-[15px]">ANL Engenharia</span>
              </a>
              <nav className="hidden items-center gap-6 text-[13.5px] text-white/75 lg:flex">
                {links.map(([l, h]) => (
                  <a key={h} href={h} className="transition hover:text-brand">
                    {l}
                  </a>
                ))}
              </nav>
              <a href="#contato" className="rounded-full bg-forest px-4 py-2 text-[12px] font-semibold transition hover:bg-brand hover:text-ink sm:px-5 sm:py-2.5 sm:text-[13px]">
                Fale Conosco
              </a>
            </div>
          </motion.header>
        )}
      </AnimatePresence>
    </div>
  );
}
