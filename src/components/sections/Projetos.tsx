import { useEffect, useRef } from "react";
import { SectionReveal } from "../SectionReveal";

type Project = {
  n: string;
  category: string;
  title: string;
  year: string;
  desc: string;
  img: string;
};

const projects: Project[] = [
  {
    n: "01",
    category: "Analytics de Redes Sociais",
    title: "Dashboard de Performance de Campanhas",
    year: "2025",
    desc: "Unificação de 7 plataformas em uma camada semântica única.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  },
  {
    n: "02",
    category: "ROI de Mídia Paga",
    title: "Atribuição Multi-Touch para E-commerce",
    year: "2025",
    desc: "Modelo Markov reduziu CAC em 27% em 90 dias.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
  {
    n: "03",
    category: "Segmentação de Audiência",
    title: "Clusterização Comportamental K-Means",
    year: "2024",
    desc: "12 clusters acionáveis a partir de 4M de usuários.",
    img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80",
  },
  {
    n: "04",
    category: "Análise de Funil",
    title: "Diagnóstico de Conversão SaaS B2B",
    year: "2024",
    desc: "Identificação de 3 gargalos = +18% activation.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=80",
  },
  {
    n: "05",
    category: "Teste A/B Criativo",
    title: "Framework de Testagem em Meta Ads",
    year: "2024",
    desc: "Significância estatística com 40% menos budget.",
    img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80",
  },
  {
    n: "06",
    category: "Retenção",
    title: "Análise de Coorte para App Mobile",
    year: "2023",
    desc: "Mapeamento de churn por canal de aquisição.",
    img: "https://images.unsplash.com/photo-1551288049-48bc81dba3d8?w=1200&q=80",
  },
];

export function Projetos() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    let ctx: { revert: () => void } | null = null;
    (async () => {
      const gsapMod = await import("gsap");
      const stMod = await import("gsap/ScrollTrigger");
      const gsap = gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const wrap = wrapRef.current;
      const track = trackRef.current;
      if (!wrap || !track) return;

      ctx = gsap.context(() => {
        const distance = track.scrollWidth - window.innerWidth;
        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top top",
            end: () => `+=${distance}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }, wrap);
    })();

    return () => {
      ctx?.revert();
    };
  }, []);

  return (
    <section id="projetos" className="relative border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 pt-24 md:px-12 md:pt-32">
        <SectionReveal>
          <div className="mb-12 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-accent">[02]</span>
            <span>/ Cases</span>
            <div className="h-px flex-1 bg-border" />
            <span>{projects.length} selecionados</span>
          </div>
          <h2
            className="font-display font-bold leading-none tracking-tighter"
            style={{ fontSize: "clamp(3rem, 12vw, 12rem)" }}
          >
            CASES<span className="text-accent">.</span>
          </h2>
        </SectionReveal>
      </div>

      {/* Horizontal pinned gallery (desktop) */}
      <div ref={wrapRef} className="relative mt-20 hidden h-screen overflow-hidden md:block">
        <div ref={trackRef} className="flex h-full items-center gap-8 px-12 will-change-transform">
          {projects.map((p) => (
            <Card key={p.n} project={p} />
          ))}
          <div className="flex h-full w-[40vw] flex-col items-start justify-center pl-12">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              [fim do índice]
            </div>
            <a
              href="#contato"
              className="mt-4 inline-flex items-center gap-2 font-display text-3xl font-bold hover:text-accent"
            >
              Discutir um case →
            </a>
          </div>
        </div>
      </div>

      {/* Mobile stacked */}
      <div className="mt-12 grid gap-6 px-6 pb-24 md:hidden">
        {projects.map((p) => (
          <Card key={p.n} project={p} />
        ))}
      </div>
    </section>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <article className="group relative h-[70vh] w-[80vw] shrink-0 overflow-hidden border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:border-accent md:w-[55vw] lg:w-[42vw]">
      <div className="absolute inset-0">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-70 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-start justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-accent">{project.n}</span>
          <span>{project.year}</span>
        </div>

        <div>
          <div className="mb-3 inline-block border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground backdrop-blur">
            {project.category}
          </div>
          <h3 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {project.title}
          </h3>
          <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
            <p className="text-sm text-muted-foreground">{project.desc}</p>
            <span className="mt-3 inline-block font-mono text-xs uppercase tracking-widest text-accent">
              Ver Case →
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}