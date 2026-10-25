import React, { useEffect, useRef } from "react";

/** Bolinha que segue o mouse e inverte a cor do que está embaixo. Cresce sobre links e botões. */
export default function Cursor() {
  const ball = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.documentElement.classList.add("has-ball");

    const pos = { x: -100, y: -100, tx: -100, ty: -100 };
    let raf;
    let scale = 1;
    let target = 1;

    const move = (e) => {
      pos.tx = e.clientX;
      pos.ty = e.clientY;
      if (pos.x < 0) { pos.x = pos.tx; pos.y = pos.ty; }
      const el = e.target.closest?.("a, button, input, textarea, select, [data-hover]");
      target = el ? 3.2 : 1;
    };
    const down = () => (target = Math.max(0.7, target * 0.7));
    const up = () => (target = 1);
    const leave = () => { pos.tx = -100; pos.ty = -100; };

    const tick = () => {
      pos.x += (pos.tx - pos.x) * 0.45;
      pos.y += (pos.ty - pos.y) * 0.45;
      scale += (target - scale) * 0.22;
      ball.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      inner.current.style.transform = `scale(${scale})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-ball");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div ref={ball} className="cursor-ball" aria-hidden="true">
      <span ref={inner} />
    </div>
  );
}
