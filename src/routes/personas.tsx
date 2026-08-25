import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { SideNavBar } from "@/components/chaos/SideNavBar";
import { SiteFooter } from "@/components/chaos/SiteFooter";
import { DEFAULT_RESULTS, loadResults, severity, type Results } from "@/lib/chaos-game";
import { matchPersona } from "@/lib/personas";

const TITLE = "Your Office Persona — Corporate Chaos";
const DESC =
  "Your corporate jungle persona, revealed — from the Zen Master Sloth to the Chaos Agent and the Spreadsheet Ninja.";

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

function PersonasScreen() {
  const [results, setResults] = useState<Results>(DEFAULT_RESULTS);

  useEffect(() => {
    const saved = loadResults();
    if (saved) setResults(saved);
  }, []);

  const persona = matchPersona(results);

  const stats = [
    { label: "Survival", value: results.survival },
    { label: "Caffeine", value: results.caffeine },
    { label: "Meetings", value: results.meetings },
    { label: "Email avoidance", value: results.email },
    { label: "Stress", value: results.stress },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <TopAppBar showBack />
      <div className="flex flex-1 pt-16">
        <SideNavBar />
        <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col p-margin-mobile lg:ml-64 lg:p-margin-desktop">
          <div className="mx-auto flex w-full max-w-container-max flex-1 flex-col gap-8">
            <header className="rounded-xl border border-surface-variant bg-surface-container-high p-6 shadow-sticker">
              <h1 className="font-display text-headline-sm tracking-tight text-primary uppercase md:text-headline-lg">
                Your Office Persona
              </h1>
              <p className="mt-1 font-label text-label-sm text-on-surface-variant">
                &gt; Classification complete. One specimen matched to your answers.
              </p>
            </header>

            <section className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border-2 border-primary bg-surface-container-high shadow-sticker md:grid-cols-2">
              <img
                src={persona.image}
                alt={persona.alt}
                className="aspect-square w-full object-cover"
              />
              <div className="flex flex-col justify-center gap-4 p-6 md:p-8">
                <span className="w-fit rounded border border-tertiary-fixed bg-tertiary px-2 py-1 font-label text-label-sm font-bold text-on-tertiary uppercase">
                  You are
                </span>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded border-2 border-primary bg-primary-container">
                    <Icon name={persona.icon} filled className="text-on-primary-container" />
                  </div>
                  <h2 className="font-display text-headline-sm text-primary uppercase md:text-headline-lg">
                    {persona.name}
                  </h2>
                </div>
                <p className="font-label text-label-sm text-on-surface-variant uppercase">
                  {persona.title}
                </p>
                <p className="text-body-md text-on-surface">{persona.trait}</p>
                <span className="w-fit rounded bg-error-container px-2 py-1 font-label text-label-sm text-error">
                  THREAT LEVEL: {persona.threat}
                </span>
              </div>
            </section>

            <section className="rounded-xl border border-outline-variant bg-surface-container p-6 shadow-sticker">
              <h3 className="font-display text-headline-sm text-on-surface">Your field readings</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border-b-4 border-surface-variant bg-surface-container-low p-4"
                  >
                    <div className="flex items-baseline justify-between">
                      <span className="font-label text-label-sm text-on-surface-variant uppercase">
                        {s.label}
                      </span>
                      <span className="font-display text-headline-sm text-primary">{s.value}%</span>
                    </div>
                    <p className="mt-1 font-label text-label-sm text-on-surface-variant opacity-70">
                      &gt; {severity(s.value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/scenarios"
                className="btn-tactical flex items-center gap-2 rounded-lg border-inverse-primary bg-primary px-6 py-3 font-display text-label-sm tracking-wide text-on-primary uppercase shadow-sticker transition-all hover:translate-y-0.5 active:translate-y-1 active:border-b-0"
              >
                <Icon name="lock_open" filled />
                Level 2 Unlocked
              </Link>
            </div>
          </div>
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
