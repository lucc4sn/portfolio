import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function StatCounter({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="border-l border-border pl-4">
      <div className="font-display text-5xl font-bold tracking-tight md:text-6xl">
        {n.toLocaleString("pt-BR")}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
}