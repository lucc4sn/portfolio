export function Rodape() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-12">
        <div>
          <div className="font-display text-2xl font-bold tracking-tight">
            Luccas Nunes<span className="text-accent">.</span>
          </div>
          <div className="mt-1 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            Dados que viram decisão.
          </div>
        </div>
        <ul className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {["Sobre", "Cases", "Stack", "Experiência", "Contato"].map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="hover:text-accent"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 px-6 py-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground md:flex-row md:px-12">
          <span>© {new Date().getFullYear()} Luccas Nunes — Todos os direitos reservados</span>
          <span>[São Paulo, SP]</span>
        </div>
      </div>
    </footer>
  );
}