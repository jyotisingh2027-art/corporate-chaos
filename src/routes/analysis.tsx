import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { SideNavBar } from "@/components/chaos/SideNavBar";
import { SiteFooter } from "@/components/chaos/SiteFooter";
import { EmojiMatrix } from "@/components/chaos/EmojiMatrix";
import { DEFAULT_RESULTS, loadResults, severity, type Results } from "@/lib/chaos-game";

const TITLE = "Chaos Corp AI Analysis — Corporate Chaos";
const DESC =
  "Chaos Corp AI scans your office survival instincts: caffeine tolerance, meeting fatigue, email avoidance and your overall survival rate.";

export const Route = createFileRoute("/analysis")({
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
  component: AnalysisScreen,
});

function Metric({
  icon,
  iconClass,
  label,
  value,
  valueClass,
  barClass,
  nodeClass,
  hoverBorder,
  note,
}: {
  icon: string;
  iconClass: string;
  label: string;
  value: number;
  valueClass: string;
  barClass: string;
  nodeClass: string;
  hoverBorder: string;
  note: string;
}) {
  return (
    <div
      className={`group rounded-lg border-b-4 border-surface-variant bg-surface-container-low p-5 transition-colors ${hoverBorder}`}
    >
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name={icon} className={iconClass} />
          <h3 className="font-bold text-on-surface">{label}</h3>
        </div>
        <span className={`font-label text-label-sm font-bold ${valueClass}`}>
          {value}% ({severity(value)})
        </span>
      </div>
      <div className="relative h-3 w-full overflow-visible rounded-full border border-outline-variant bg-surface-container-highest">
        <div className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-surface-variant" />
        <div
          className={`animate-vine relative h-full rounded-full ${barClass}`}
          style={{ ["--target-width" as string]: `${value}%` }}
        >
          <div
            className={`absolute top-1/2 right-0 -translate-y-1/2 border-2 border-surface shadow-sm ${nodeClass}`}
          />
        </div>
      </div>
      <p className="mt-2 font-label text-label-sm text-on-surface-variant opacity-70 transition-opacity group-hover:opacity-100">
        &gt; {note}
      </p>
    </div>
  );
}

function AnalysisScreen() {
  const [results, setResults] = useState<Results>(DEFAULT_RESULTS);

  useEffect(() => {
    const saved = loadResults();
    if (saved) setResults(saved);
  }, []);

  const circumference = 2 * Math.PI * 45;

  return (
    <div className="relative flex min-h-screen flex-col">
      <EmojiMatrix />
      <TopAppBar showBack />
      <div className="relative z-10 flex flex-1 pt-16">
        <SideNavBar />
        <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col p-margin-mobile lg:ml-64 lg:p-margin-desktop">
          <div className="mx-auto flex w-full max-w-container-max flex-1 flex-col gap-8">
            <header className="relative overflow-hidden rounded-xl border border-surface-variant bg-surface-container-high p-6 shadow-sticker">
              <div className="scanline-effect" />
              <div className="relative z-10 flex items-start gap-4 sm:items-center">
                <div className="flex h-12 w-12 -rotate-2 items-center justify-center rounded border-2 border-primary bg-primary-container shadow-sticker">
                  <Icon name="psychology" filled className="text-3xl text-on-primary-container" />
                </div>
                <div>
                  <h1 className="font-display text-headline-sm tracking-tight text-primary uppercase md:text-headline-lg">
                    Chaos Corp AI
                  </h1>
                  <p className="mt-1 font-label text-label-sm text-on-surface-variant">
                    &gt; Chaos Corp AI is analyzing your office survival instincts...
                  </p>
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12">
              <div className="relative col-span-1 flex flex-col items-center justify-center rounded-xl border border-outline-variant bg-surface-container p-6 shadow-sticker md:col-span-5 lg:col-span-4">
                <div className="absolute top-4 left-4 rotate-[3deg]">
                  <span className="rounded border border-tertiary-fixed bg-tertiary px-2 py-1 font-label text-label-sm font-bold text-on-tertiary uppercase">
                    Live Scan
                  </span>
                </div>
                <div className="relative mt-4 h-48 w-48 sm:h-64 sm:w-64">
                  <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="var(--surface-container)"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference * (1 - results.survival / 100)}
                      style={{ transition: "stroke-dashoffset 1.5s ease-out" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <Icon name="radar" filled className="animate-pulse text-5xl text-primary" />
                    <div className="mt-2 font-display text-headline-sm text-primary">
                      {results.survival}%
                    </div>
                    <div className="font-label text-[10px] text-on-surface-variant">
                      SURVIVAL RATE
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-1 grid auto-rows-min grid-cols-1 gap-4 md:col-span-7 lg:col-span-8">
                <Metric
                  icon="local_cafe"
                  iconClass="text-tertiary"
                  label="Caffeine Tolerance"
                  value={results.caffeine}
                  valueClass="text-primary"
                  barClass="bg-gradient-to-r from-primary-container to-primary shadow-[0_0_8px_color-mix(in_oklab,var(--primary)_50%,transparent)]"
                  nodeClass="h-4 w-4 rotate-45 rounded-sm bg-tertiary"
                  hoverBorder="hover:border-primary"
                  note="Replacing blood with espresso..."
                />
                <Metric
                  icon="groups"
                  iconClass="text-error"
                  label="Meeting Fatigue"
                  value={results.meetings}
                  valueClass="text-error"
                  barClass="bg-gradient-to-r from-error-container to-error"
                  nodeClass="h-5 w-3 -rotate-[5deg] rounded-sm bg-tertiary-fixed"
                  hoverBorder="hover:border-error"
                  note="Brain waves flatlining during 'synergy' discussions..."
                />
                <Metric
                  icon="mail"
                  iconClass="text-tertiary-fixed"
                  label="Email Avoidance"
                  value={results.email}
                  valueClass="text-tertiary-fixed"
                  barClass="bg-gradient-to-r from-tertiary-container to-tertiary"
                  nodeClass="h-4 w-4 rotate-[15deg] rounded-full bg-primary"
                  hoverBorder="hover:border-tertiary"
                  note="Mastering the art of the 'Mark as Read' maneuver..."
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/personas"
                className="btn-tactical rounded-lg border-surface-variant bg-surface-container-high px-6 py-3 font-display text-label-sm tracking-wide text-on-surface uppercase active:translate-y-1"
              >
                See your persona
              </Link>
            </div>
          </div>
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}