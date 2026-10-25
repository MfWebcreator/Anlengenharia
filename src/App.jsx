import React, { useEffect } from "react";
import Lenis from "lenis";
import Cursor from "./components/Cursor";
import FloatingNav from "./components/FloatingNav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Desafio from "./components/Desafio";
import QuemSomos from "./components/QuemSomos";
import Proposta from "./components/Proposta";
import Servicos from "./components/Servicos";
import Diferenciais from "./components/Diferenciais";
import Contato from "./components/Contato";

export default function App() {
  // Rolagem suave e responsiva + âncoras do menu
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.65,
      smoothWheel: true,
      wheelMultiplier: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute("href");
      if (id === "#inicio") {
        e.preventDefault();
        lenis.scrollTo(0, { duration: 1.4 });
        return;
      }
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: 0, duration: 1.4 });
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("click", onClick);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Cursor />
      <FloatingNav />
      <main>
        <Hero />
        <Marquee />
        <Desafio />
        <QuemSomos />
        <Proposta />
        <Servicos />
        <Diferenciais />
        <Contato />
      </main>
    </>
  );
}
