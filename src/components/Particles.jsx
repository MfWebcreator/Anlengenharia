import React, { useEffect, useRef } from "react";

/** Partículas brilhantes flutuando (as "estrelinhas" do vídeo de referência). */
export default function Particles({ count = 70, className = "", color = "255,255,255" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const parent = canvas.parentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf, visible = true;
    const dots = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.8 + 0.5,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.25 - 0.03,
        ph: Math.random() * Math.PI * 2,
        sp: Math.random() * 1.4 + 0.5,
      });
    }

    let running = false;
    const tick = (now) => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (const d of dots) {
        if (!reduce) {
          d.x += d.vx;
          d.y += d.vy;
          if (d.y < -4) { d.y = h + 4; d.x = Math.random() * w; }
          if (d.x < -4) d.x = w + 4;
          if (d.x > w + 4) d.x = -4;
        }
        const a = 0.25 + 0.75 * (0.5 + 0.5 * Math.sin(now / 1000 * d.sp + d.ph));
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${a})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    const startLoop = () => {
      if (running) return;
      running = true;
      raf = requestAnimationFrame(tick);
    };

    const stopLoop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        startLoop();
      } else {
        stopLoop();
      }
    });
    io.observe(parent);
    startLoop();

    window.addEventListener("resize", resize);
    return () => {
      stopLoop();
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [count, color]);

  return <canvas ref={ref} className={`pointer-events-none absolute inset-0 ${className}`} />;
}
