import { createFileRoute } from "@tanstack/react-router";
import bottle from "@/assets/monarch-bottle.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Monarch by Sarkar | Saffron · Oud · Amber Parfum 100ml" },
      {
        name: "description",
        content:
          "Monarch, the fifth expression from Sarkar. A 25% oil parfum of saffron, incense and oud for the ones who never had to announce themselves.",
      },
      { property: "og:title", content: "Monarch by Sarkar | Saffron · Oud · Amber Parfum" },
      {
        property: "og:description",
        content:
          "Saffron, incense and oud at 25% oil concentration. Monarch — the quietest kind of power, from the house of Sarkar.",
      },
    ],
  }),
  component: Monarch,
});

const notes = [
  {
    stage: "Top",
    items: "Saffron · Bergamot · Pink Pepper",
    line: "A dry, gilded opening — spice before sweetness.",
  },
  {
    stage: "Heart",
    items: "Incense · Damask Rose · Cedar",
    line: "Smoke curling around a rose that refuses to soften.",
  },
  {
    stage: "Base",
    items: "Oud · Amber · Vetiver · Leather",
    line: "The part of you that stays in the room after you leave.",
  },
];

const specs = [
  ["Concentration", "25% Parfum Oil"],
  ["Family", "Oud · Spicy · Woody"],
  ["Longevity", "10–12 Hours"],
  ["Sillage", "Heavy · Room Filling"],
  ["Volume", "100 ML"],
  ["Made In", "France"],
];

function Monarch() {
  return (
    <main className="min-h-screen veil">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <span className="font-display text-2xl tracking-[0.5em] text-foreground">
            SARKAR
          </span>
          <nav className="hidden gap-10 md:flex">
            {["Orion", "Noble", "Throne", "Regal"].map((n) => (
              <span key={n} className="eyebrow">
                {n}
              </span>
            ))}
            <span className="eyebrow text-gold">Monarch</span>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-16 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="bg-canvas p-6" style={{ boxShadow: "var(--shadow-shelf)" }}>
          <img
            src={bottle}
            alt="Monarch by Sarkar — emerald chess-king 100ml parfum bottle with the Sarkar wordmark on the base"
            width={1024}
            height={1024}
            className="w-full object-contain"
          />
          <p className="eyebrow -mt-2 text-center text-neutral-500">
            100 ML · Parfum
          </p>
        </div>



        <div className="flex flex-col justify-center">
          <p className="eyebrow">The Fifth Expression</p>
          <h1 className="mt-4 font-display text-6xl leading-none tracking-tight md:text-8xl">
            <span className="text-gold">Monarch</span>
          </h1>
          <p className="mt-5 eyebrow">Saffron · Oud · Amber</p>

          <div className="mt-8 rule-gold max-w-24" />

          <p className="mt-8 max-w-md font-display text-2xl leading-snug text-foreground md:text-3xl">
            &ldquo;A crown is never announced. It is simply worn.&rdquo;
          </p>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            Monarch was built for the people who arrive last and are remembered
            first. Saffron and pepper open like a hand raised for silence; oud,
            leather and amber hold that silence for twelve hours. Twenty-five
            percent oil. No apology.
          </p>

          <div className="mt-10 flex items-end gap-4">
            <span className="font-display text-4xl text-foreground">₹ 1,699</span>
            <span className="pb-1 text-sm text-muted-foreground line-through">
              ₹ 2,099
            </span>
            <span className="pb-1 eyebrow text-gold">Incl. of all taxes</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="btn-sarkar hover:btn-sarkar-hover">Add to Bag</button>
            <button className="btn-ghost-sarkar hover:border-primary">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-px px-6 py-16 md:grid-cols-3">
          {notes.map((n) => (
            <article key={n.stage} className="px-2 py-6 md:px-8">
              <p className="eyebrow text-gold">{n.stage} Notes</p>
              <h2 className="mt-4 font-display text-3xl">{n.items}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {n.line}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="eyebrow">The Specification</p>
        <div className="mt-8 grid gap-x-12 gap-y-6 sm:grid-cols-2 md:grid-cols-3">
          {specs.map(([k, v]) => (
            <div key={k} className="border-t border-border pt-4">
              <p className="eyebrow">{k}</p>
              <p className="mt-2 font-display text-2xl text-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="eyebrow">Know Sarkar</p>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">
            Anyone can raise their voice.
            <br />
            <span className="text-gold">Monarch never had to.</span>
          </h2>
          <div className="mx-auto mt-10 max-w-16 rule-gold" />
          <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Five expressions. One signature. Each a parfum at 25% oil
            concentration, made for ordinary days and the extraordinary people
            who live them.
          </p>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10">
          <span className="font-display text-xl tracking-[0.5em]">SARKAR</span>
          <p className="eyebrow">Monarch · Concept Expression</p>
        </div>
      </footer>
    </main>
  );
}
