export function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border py-4">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
          >
            {t} <span className="ml-12 text-accent">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}