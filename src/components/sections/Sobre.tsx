import { SectionReveal } from "../SectionReveal";
import { Marquee } from "../Marquee";
import { StatCounter } from "../StatCounter";

const skills = [
  "PYTHON", "SQL", "POWER BI", "LOOKER STUDIO", "GA4", "META ADS",
  "GOOGLE ADS", "TESTE A/B", "REGRESSÃO", "COORTE", "CRM",
  "EXCEL", "TABLEAU", "BIGQUERY",
];

export function Sobre() {
  return (
    <section id="sobre" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12">
        <SectionReveal>
          <div className="mb-16 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-accent">[01]</span>
            <span>/ Sobre</span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </SectionReveal>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <SectionReveal>
            <p
              className="font-display font-bold leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
            >
              Transformando <span className="text-accent">dados</span> em decisões de Marketing.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:pt-4">
              <p>
                Os dados são mais que números: ele contam uma história. Atuar na intersecção 
                entre Social Media e dados é entender a história que seu público de conta 
                por meio dos números.
              </p>
              <p>
                Minha experiência como comunicador é o ponto diferencial, que me permite, 
                não só entender a história que os dados contam, mas contá-la de forma clara.
              </p>
              <p className="font-mono text-sm uppercase tracking-widest text-foreground">
                → Foco em ROAS, ROI, LTV, retenção e Benchmarking.
              </p>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-20">
          <Marquee items={skills} />
        </div>

        <SectionReveal>
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatCounter value={6} label="Anos de experiência" suffix="+" />
            <StatCounter value={6} label="Projetos concluídos" />
            <StatCounter value={7} label="Plataformas dominadas" />
            <StatCounter value={1} label="gerados em receita" suffix="M" />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}