import { SectionReveal } from "../SectionReveal";

export function Destaque() {
  return (
    <section className="noise relative overflow-hidden border-t border-border py-32 md:py-48">
      <div aria-hidden className="grid-overlay absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6 md:px-12">
        <SectionReveal>
          <div className="mb-8 font-mono text-xs uppercase tracking-widest text-accent">
            [insight]
          </div>
          <p
            className="font-display font-bold leading-[0.95] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            "Conteúdo baseado em dados gera{" "}
            <span className="text-accent">6x mais conversões </span>
            do que conteúdo tradicional."
          </p>
          <div className="mt-10 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            — Demand Metric
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}