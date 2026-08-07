import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { SideNavBar } from "@/components/chaos/SideNavBar";
import { SiteFooter } from "@/components/chaos/SiteFooter";

const TITLE = "Office Personas — Corporate Chaos";
const DESC =
  "Meet the species of the corporate jungle: the Reply-All Raptor, the Synergy Sloth and other creatures you share a floor with.";

export const Route = createFileRoute("/personas")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
    ],
  }),
  component: PersonasScreen,
});

const PERSONAS = [
  {
    icon: "forward_to_inbox",
    name: "Reply-All Raptor",
    trait: "Hunts in inboxes. Never spares a bystander.",
    threat: "SEVERE",
  },
  {
    icon: "self_improvement",
    name: "Synergy Sloth",
    trait: "Moves slowly, speaks exclusively in frameworks.",
    threat: "ELEVATED",
  },
  {
    icon: "local_cafe",
    name: "Caffeine Cobra",
    trait: "Six espressos deep before the first standup.",
    threat: "CRITICAL",
  },
  {
    icon: "calendar_month",
    name: "Calendar Kraken",
    trait: "Tentacles in every free slot you had.",
    threat: "CRITICAL",
  },
  {
    icon: "visibility_off",
    name: "Ghost Contractor",
    trait: "Present in headcount only. Camera permanently off.",
    threat: "MILD",
  },
  {
    icon: "gavel",
    name: "Process Panther",
    trait: "Will escalate. Has a template ready.",
    threat: "SEVERE",
  },
];

function PersonasScreen() {
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

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {PERSONAS.map((p, i) => (
                <article
                  key={p.name}
                  className={`relative rounded-xl border-2 border-outline-variant bg-surface-container p-6 shadow-sticker transition-transform duration-300 hover:rotate-0 ${
                    i % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >
                  <div className="absolute -top-3 -left-3 h-5 w-14 -rotate-12 bg-tertiary opacity-80" />
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border-2 border-primary bg-primary-container">
                    <Icon name={p.icon} filled className="text-on-primary-container" />
                  </div>
                  <h2 className="font-display text-headline-sm text-on-surface">{p.name}</h2>
                  <p className="mt-2 text-body-md text-on-surface-variant">{p.trait}</p>
                  <span className="mt-4 inline-block rounded bg-error-container px-2 py-1 font-label text-label-sm text-error">
                    THREAT: {p.threat}
                  </span>
                </article>
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