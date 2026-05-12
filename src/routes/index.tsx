import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Projetos } from "@/components/sections/Projetos";
import { Stack } from "@/components/sections/Stack";
import { Experiencia } from "@/components/sections/Experiencia";
import { Destaque } from "@/components/sections/Destaque";
import { Contato } from "@/components/sections/Contato";
import { Rodape } from "@/components/sections/Rodape";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luccas Nunes — Análise de Dados aplicada ao Marketing" },
      {
        name: "description",
        content:
          "Portfólio de Luccas Nunes — analista de dados especializado em inteligência de marketing, mídia paga, segmentação e otimização de campanhas em São Paulo.",
      },
      { property: "og:title", content: "Luccas Nunes — Análise de Dados aplicada ao Marketing" },
      {
        property: "og:description",
        content: "Transformo ruído de marketing em decisões baseadas em dados.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Sobre />
      <Projetos />
      <Stack />
      <Experiencia />
      <Destaque />
      <Contato />
      <Rodape />
    </main>
  );
}
