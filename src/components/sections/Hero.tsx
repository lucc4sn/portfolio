import { motion } from "framer-motion";
import { CursorGlow } from "../CursorGlow";

const FIRST = "LUCCAS";
const LAST = "NUNES";

export function Hero() {
  return (
    <section
      id="hero"
      className="noise relative flex min-h-screen flex-col justify-between overflow-hidden pt-32"
    >
      <CursorGlow />
      <div aria-hidden className="grid-overlay absolute inset-0 opacity-40" />

      {/* top meta */}
      <div className="relative z-10 flex items-start justify-between px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="size-2 animate-pulse rounded-full bg-accent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="hidden font-mono text-xs uppercase tracking-widest text-muted-foreground md:block"
        >
          [Portfólio]
        </motion.div>
      </div>

      {/* Headline */}
      <div className="relative z-10 px-6 md:px-12">
        <h1
          className="font-display font-bold leading-[0.85] tracking-tighter"
          style={{ fontSize: "clamp(4rem, 18vw, 18rem)" }}
        >
          <span className="block overflow-hidden">
            <SplitText text={FIRST} from="left" />
          </span>
          <span className="block overflow-hidden text-right md:text-left">
            <SplitText text={LAST} from="right" />
          </span>
        </h1>
      </div>

      {/* Bottom row */}
      <div className="relative z-10 grid grid-cols-1 gap-8 px-6 pb-12 md:grid-cols-3 md:items-end md:px-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-widest text-muted-foreground"
        >
          Analista de Dados · Inteligência de Marketing
          <br />
          <span className="text-foreground">[São Paulo, SP]</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex gap-3 md:justify-center"
        >
          <a
            href="#projetos"
            className="group inline-flex items-center gap-2 bg-accent px-6 py-3 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Ver Projetos
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 border border-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:text-right"
        >
          ↓ scroll
          <br />
          <span className="text-foreground">para o caso 01</span>
        </motion.div>
      </div>
    </section>
  );
}

function SplitText({ text, from }: { text: string; from: "left" | "right" }) {
  const dir = from === "left" ? -1 : 1;
  return (
    <span className="inline-flex">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          initial={{ x: 200 * dir, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.2 + i * 0.05,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </span>
  );
}