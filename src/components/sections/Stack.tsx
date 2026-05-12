import { motion } from "framer-motion";
import { SectionReveal } from "../SectionReveal";

const groups = [
  { label: "Dados", tools: [{ n: "Python", l: 90 }, { n: "SQL", l: 85 }, { n: "Excel", l: 90 }] },
  { label: "Visualização", tools: [{ n: "Power BI", l: 90 }, { n: "Looker Studio", l: 85 }, { n: "Tableau", l: 70 }] },
  { label: "Marketing", tools: [{ n: "GA4", l: 92 }, { n: "Meta Ads", l: 88 }, { n: "CRM", l: 80 }] },
  { label: "Estatística", tools: [{ n: "Teste A/B", l: 90 }, { n: "Regressão", l: 82 }, { n: "Análise de Coorte", l: 86 }] },
];

export function Stack() {
  return (
    <section id="stack" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionReveal>
          <div className="mb-12 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-accent">[03]</span>
            <span>/ Stack</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2
            className="font-display font-bold leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            Toolkit<span className="text-accent">.</span>
          </h2>
        </SectionReveal>

        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, gi) => (
            <SectionReveal key={g.label} delay={gi * 0.1}>
              <div>
                <div className="mb-6 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">0{gi + 1}</span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight">
                    {g.label}
                  </h3>
                </div>
                <ul className="space-y-5">
                  {g.tools.map((t) => (
                    <li key={t.n}>
                      <div className="mb-2 flex items-center justify-between font-mono text-sm">
                        <span>{t.n}</span>
                        <span className="text-xs text-muted-foreground">{t.l}%</span>
                      </div>
                      <div className="h-px w-full bg-border">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${t.l}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                          className="h-px bg-accent"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}