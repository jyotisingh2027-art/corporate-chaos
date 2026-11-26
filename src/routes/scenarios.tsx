import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { SideNavBar } from "@/components/chaos/SideNavBar";
import { SiteFooter } from "@/components/chaos/SiteFooter";
import { SCENARIOS, saveResults, scoreRun, type Choice } from "@/lib/chaos-game";

const TITLE = "Scenarios — Corporate Chaos";
const DESC =
  "Ten absurd workplace dilemmas, four terrible options each. Every choice moves your stress meter closer to critical.";

export const Route = createFileRoute("/scenarios")({
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
  component: ScenariosScreen,
});

const BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAu7ZSViX3c0P-0C-Yz67AuLcHP849EizZc8C1QoYyEQl5CM2PB5u-hEDQjfBi6XoKDFIiJOa7373t3xzcLb8HyFKUhHZsvV0PrSeTfEqSFS5oqQKn5wInLhUhtH4XC3gqO8Te2ys0v4PmGvbn1zQwzQgemGVX8-5oAG8jrCC2mhi46aT34RPqSE51rCE1BMHZNyrbJFo9Zn4T0f8nt9vIOvIccw5FZAIiHoOQAkF3iM_a5x48wDjnwlg";

const HOVER: Record<Choice["tone"], string> = {
  primary: "hover:border-primary",
  tertiary: "hover:border-tertiary",
  error: "hover:border-error",
};
const KEY_COLOR: Record<Choice["tone"], string> = {
  primary: "text-primary",
  tertiary: "text-tertiary",
  error: "text-error",
};
const ICON_HOVER: Record<Choice["tone"], string> = {
  primary: "group-hover:text-primary",
  tertiary: "group-hover:text-tertiary",
  error: "group-hover:text-error",
};

function ScenariosScreen() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<Choice[]>([]);

  const scenario = SCENARIOS[index]!;
  const stress = Math.min(
    98,
    picked.reduce((a, c) => a + c.stress, 0) / (SCENARIOS.length * 0.18),
  );

  const choose = (choice: Choice) => {
    const next = [...picked, choice];
    setPicked(next);
    if (index + 1 >= SCENARIOS.length) {
      saveResults(scoreRun(next));
      navigate({ to: "/analysis" });
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <TopAppBar showBack />
      <div className="flex flex-1 pt-16">
        <SideNavBar />
        <div className="flex flex-1 flex-col lg:ml-64">
          <main className="relative mx-auto flex w-full max-w-container-max flex-1 flex-col items-center justify-center overflow-hidden p-gutter py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url('${BG}')` }}
            />

            <div className="z-10 mb-8 w-full max-w-2xl">
              <div className="mb-2 flex items-end justify-between">
                <span className="font-label text-label-sm tracking-widest text-tertiary uppercase">
                  Stress Level
                </span>
                <span className="inline-block rotate-2 rounded bg-error-container px-2 py-1 font-label text-label-sm text-error">
                  {stress >= 70 ? "CRITICAL" : stress >= 40 ? "RISING" : "DECEPTIVELY FINE"}
                </span>
              </div>
              <div className="relative h-2 overflow-visible rounded-full bg-surface-variant">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-container to-primary transition-[width] duration-500"
                  style={{ width: `${Math.max(6, stress)}%` }}
                />
                <div
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rotate-12 border border-tertiary-container bg-tertiary shadow-sm"
                  style={{ left: `${Math.max(6, stress)}%` }}
                />
              </div>
            </div>

            <div className="scenario-card relative z-10 w-full max-w-2xl rounded-xl p-6 md:p-10">
              <svg
                className="absolute -top-4 -left-4 h-12 w-12 text-primary opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M12 4c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>

              <div className="mb-4 inline-block rounded bg-surface-variant px-3 py-1 font-label text-label-sm tracking-widest text-primary uppercase">
                Scenario {index + 1} of {SCENARIOS.length}
              </div>

              <h1 className="mb-8 font-display text-headline-sm text-on-surface md:text-headline-lg">
                {scenario.prompt}
              </h1>

              <div className="flex flex-col gap-4">
                {scenario.choices.map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => choose(c)}
                    className={`btn-tactical group flex items-center justify-between rounded-lg border-2 border-surface-variant bg-surface-bright p-4 text-left text-body-md text-on-surface active:translate-y-1 ${HOVER[c.tone]}`}
                  >
                    <span>
                      <span className={`mr-2 font-bold ${KEY_COLOR[c.tone]}`}>{c.key}.</span>
                      {c.text}
                    </span>
                    <Icon
                      name={c.icon}
                      className={`text-outline transition-colors ${ICON_HOVER[c.tone]}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/analysis"
              className="z-10 mt-6 font-label text-label-sm text-on-surface-variant underline decoration-dashed underline-offset-4 hover:text-primary"
            >
              Skip to the AI analysis
            </Link>
          </main>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}