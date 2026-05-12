import { useState, type FormEvent } from "react";
import { SectionReveal } from "../SectionReveal";

export function Contato() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        nome: formData.get("nome"),
        email: formData.get("email"),
        mensagem: formData.get("mensagem"),
      };

      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/send-message`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSent(true);
        e.currentTarget.reset();
      } else {
        setError("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contato"
      className="relative flex min-h-screen flex-col justify-center border-t border-border py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12">
        <SectionReveal>
          <div className="mb-12 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="text-accent">[05]</span>
            <span>/ Contato</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2
            className="font-display font-bold leading-[0.9] tracking-tighter"
            style={{ fontSize: "clamp(2.5rem, 9vw, 9rem)" }}
          >
            Vamos construir algo
            <br />
            <span className="text-accent">com dados.</span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
          <SectionReveal>
            <div className="space-y-10">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Email direto
                </div>
                <a
                  href="mailto:luccasalnunes@gmail.com"
                  className="mt-2 inline-block font-display text-2xl font-bold underline decoration-accent decoration-2 underline-offset-8 hover:text-accent md:text-4xl"
                >
                  luccasalnunes@gmail.com
                </a>
              </div>

              <div className="space-y-3">
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Em outros lugares
                </div>
                <ul className="space-y-2">
                  {[
                    { label: "LinkedIn", href: "https://www.linkedin.com/in/luccas-nunes/" },
                    { label: "GitHub", href: "https://github.com/lucc4sn" },
                    { label: "Currículo", href: "#" },
                  ].map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-3 font-display text-lg hover:text-accent"
                      >
                        <span className="font-mono text-xs text-muted-foreground">→</span>
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="font-mono text-xs uppercase leading-relaxed tracking-widest text-muted-foreground">
                São Paulo, SP · UTC−3
                <br />
                <span className="text-accent" style={{ fontSize: "1.5rem" }}>●</span>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <form onSubmit={onSubmit} className="space-y-6">
              <Field label="Nome" name="nome" />
              <Field label="E-mail" name="email" type="email" />
              <Field label="Mensagem" name="mensagem" textarea />
              {error && <p className="text-sm text-red-500">{error}</p>}
              <button
                type="submit"
                disabled={loading || sent}
                className="group inline-flex items-center gap-3 bg-accent px-8 py-4 font-mono text-xs uppercase tracking-widest text-accent-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sent ? "Mensagem enviada ✓" : loading ? "Enviando..." : "Enviar mensagem"}
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full border-b border-border bg-transparent py-3 font-display text-lg outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} required />
      ) : (
        <input name={name} type={type} className={cls} required />
      )}
    </label>
  );
}