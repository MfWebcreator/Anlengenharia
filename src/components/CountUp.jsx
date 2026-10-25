import React, { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

/** Número que sobe até o valor final quando aparece na tela. */
export default function CountUp({ to, suffix = "", duration = 1.8, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const [v, setV] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: [0.2, 0.8, 0.2, 1], onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className}>
      {v}
      {suffix}
    </span>
  );
}
