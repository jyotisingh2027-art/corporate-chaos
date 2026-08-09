import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { SideNavBar } from "@/components/chaos/SideNavBar";
import { SiteFooter } from "@/components/chaos/SiteFooter";
import { DEFAULT_RESULTS, loadResults, type Results } from "@/lib/chaos-game";
import { PERSONAS, matchPersona, type Persona } from "@/lib/personas";

const TITLE = "Your Office Persona — Corporate Chaos";
const DESC =
  "Your corporate jungle persona, revealed: from the Zen Master Sloth to the Micromanagement Lion. Meet every creature on your floor.";

export const Route = createFileRoute("/personas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PersonasScreen,
});

function PersonaCard({ p, index }: { p: Persona; index: number }) {
  return (
    <article
      className={`relative overflow-hidden rounded-xl border-2 border-outline-variant bg-surface-container shadow-sticker transition-transform duration-300 hover:rotate-0 ${
        index % 2 === 0 ? "-rotate-1" : "rotate-1"
      }`}
    >
      <div className="absolute -top-3 -left-3 z-10 h-5 w-14 -rotate-12 bg-tertiary opacity-80" />
      <img
        src={p.image}
        alt={p.alt}
        loading="lazy"
        className="aspect-square w-full object-cover"
      />
      <div className="p-6">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded border-2 border-primary bg-primary-container">
          <Icon name={p.icon} filled className="text-on-primary-container" />
        </div>
        <h3 className="font-display text-headline-sm text-on-surface">{p.name}</h3>
        <p className="mt-1 font-label text-label-sm text-primary uppercase">{p.title}</p>
        <p className="mt-2 text-body-md text-on-surface-variant">{p.trait}</p>
        <span className="mt-4 inline-block rounded bg-error-container px-2 py-1 font-label text-label-sm text-error">
          THREAT: {p.threat}
        </span>
      </div>
    </article>
  );
}

function PersonasScreen() {
  const [results, setResults] = useState<Results>(DEFAULT_RESULTS);

  useEffect(() => {
    const saved = loadResults();
    if (saved) setResults(saved);
  }, []);

  const match = matchPersona(results);

  return (
    <div className="flex min-h-screen flex-col">
      <TopAppBar />
      <div className="flex flex-1 pt-16">
        <SideNavBar />
        <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col p-margin-mobile lg:ml-64 lg:p-margin-desktop">
          <div className="mx-auto flex w-full max-w-container-max flex-1 flex-col gap-8">
            <header className="rounded-xl border border-surface-variant bg-surface-container-high p-6 shadow-sticker">
              <h1 className="font-display text-headline-sm tracking-tight text-primary uppercase md:text-headline-lg">
                Field Guide: Office Personas
              </h1>
              <p className="mt-1 font-label text-label-sm text-on-surface-variant">
                &gt; Do not approach. Do not feed. Do not add to the group chat.
              </p>
            </header>

            <section className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border-2 border-primary bg-surface-container-high shadow-sticker md:grid-cols-2">
              <img
                src={match.image}
                alt={match.alt}
                className="aspect-square w-full object-cover"
              />
              <div className="flex flex-col justify-center gap-3 p-6 md:p-8">
                <span className="w-fit rounded border border-tertiary-fixed bg-tertiary px-2 py-1 font-label text-label-sm font-bold text-on-tertiary uppercase">
                  Your persona
                </span>
                <h2 className="font-display text-headline-sm text-primary uppercase md:text-headline-lg">
                  {match.name}
                </h2>
                <p className="font-label text-label-sm text-on-surface-variant uppercase">
                  {match.title}
                </p>
                <p className="text-body-md text-on-surface">{match.trait}</p>
                <div className="mt-2 flex flex-wrap gap-2 font-label text-label-sm">
                  <span className="rounded bg-surface-container px-2 py-1 text-on-surface-variant">
                    SURVIVAL {results.survival}%
                  </span>
                  <span className="rounded bg-surface-container px-2 py-1 text-on-surface-variant">
                    CAFFEINE {results.caffeine}%
                  </span>
                  <span className="rounded bg-surface-container px-2 py-1 text-on-surface-variant">
                    MEETINGS {results.meetings}%
                  </span>
                  <span className="rounded bg-error-container px-2 py-1 text-error">
                    THREAT {match.threat}
                  </span>
                </div>
              </div>
            </section>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {PERSONAS.map((p, i) => (
                <PersonaCard key={p.id} p={p} index={i} />
              ))}
            </div>

            <Link
              to="/scenarios"
              className="btn-tactical self-start rounded-lg border-inverse-primary bg-primary px-6 py-3 font-display text-label-sm tracking-wide text-on-primary uppercase active:translate-y-1"
            >
              Back to the jungle
            </Link>
          </div>
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
