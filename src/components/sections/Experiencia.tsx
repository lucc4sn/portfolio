import { motion } from "framer-motion";
import { SectionReveal } from "../SectionReveal";

const items = [
  {
    company: "JOTA",
    role: "Analista de SEO",
    period: "2022 — 2025",
    bullets: [
      "Revisão, edição e publicação de conteúdos jornalísticos com análise estratégica de dados de SEO.",
      "Otimização de performance de busca através de análise competitiva e ajuste de palavras-chave.",
      "Alinhamento de estratégia editorial com indicadores de tráfego e comportamento de usuários.",
    ],
  },
  {
    company: "Spalla Marketing",
    role: "Analista de Canais Digitais",
    period: "2025 — Presente",
    bullets: [
      "Planejamento e produção de conteúdo orientados por análise de dados de engajamento, alcance e retenção.",
      "Monitoramento contínuo de performance de conteúdo com tratamento de dados em Python.",
      "Estruturação de dashboards no Looker Studio para acompanhamento de resultados.",
    ],
  },
  {
    company: "Grupo H2",
    role: "Analista de Social Media",
    period: "2026 — Presente",
    bullets: [
      "Planejamento e produção de conteúdo para Instagram, TikTok, WhatsApp e Telegram.",
      "Estratégia de conteúdo voltada à conversão no mercado de bets esportivos e cassinos.",
      "Análise de resultados e performance para ajuste de estratégia e comunicação.",
    ],
  },
];

export function Experiencia() {
  return (
    <section id="experiencia" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionReveal>
          <div className="mb-12 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-accent">[04]</span>
            <span>/ Experiência</span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </SectionReveal>

        <div className="relative mx-auto max-w-5xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />
          <ul className="space-y-16">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <li key={it.company} className="relative grid md:grid-cols-2 md:gap-12">
                  <span className="absolute left-4 top-2 size-3 -translate-x-1/2 rounded-full border border-accent bg-background md:left-1/2" />
                  <motion.div
                    initial={{ opacity: 0, x: left ? -60 : 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`pl-12 md:pl-0 ${left ? "md:text-right" : "md:col-start-2"}`}
                  >
                    <div className="font-mono text-xs uppercase tracking-widest text-accent">
                      {it.period}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold tracking-tight md:text-3xl">
                      {it.company}
                    </h3>
                    <div className="mt-1 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                      {it.role}
                    </div>
                    <ul
                      className={`mt-4 space-y-2 text-sm text-muted-foreground ${
                        left ? "md:ml-auto" : ""
                      }`}
                    >
                      {it.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-accent">→</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}