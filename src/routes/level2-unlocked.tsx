import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { SideNavBar } from "@/components/chaos/SideNavBar";
import { SiteFooter } from "@/components/chaos/SiteFooter";
import { loadResults } from "@/lib/chaos-game";
import { matchPersona } from "@/lib/personas";

const TITLE = "Level 2 Unlocked — Corporate Chaos";
const DESC =
  "Congratulations, survivor. You've cleared Level 1 of the corporate jungle. Level 2 is coming soon.";

export const Route = createFileRoute("/level2-unlocked")({
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
  component: Level2UnlockedScreen,
});

function Level2UnlockedScreen() {
  const [personaName, setPersonaName] = useState<string>("the jungle");

  useEffect(() => {
    const saved = loadResults();
    if (saved) setPersonaName(matchPersona(saved).name);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <TopAppBar showBack />
      <div className="flex flex-1 pt-16">
        <SideNavBar />
        <main className="flex min-h-[calc(100vh-4rem)] flex-1 flex-col p-margin-mobile lg:ml-64 lg:p-margin-desktop">
          <div className="mx-auto flex w-full max-w-container-max flex-1 flex-col gap-8 py-8">
            {/* Letter card */}
            <section className="relative overflow-hidden rounded-xl border-2 border-primary bg-surface-container-high p-8 shadow-sticker md:p-12">
              <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,currentColor_3px,transparent_4px)]" />

              <div className="relative flex flex-col items-center text-center gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-tertiary-fixed bg-tertiary-container shadow-sticker">
                  <Icon name="military_tech" filled className="text-on-tertiary-container text-headline-lg" />
                </div>

                <span className="w-fit rounded border border-tertiary-fixed bg-tertiary px-3 py-1 font-label text-label-sm font-bold text-on-tertiary uppercase tracking-widest">
                  Official Corporate Dispatch
                </span>

                <h1 className="font-display text-headline-sm tracking-tight text-primary uppercase md:text-headline-lg">
                  Congratulations, Survivor
                </h1>

                <div className="mx-auto max-w-2xl space-y-4 text-left font-body text-body-md text-on-surface">
                  <p className="font-label text-label-sm text-on-surface-variant uppercase">
                    {">"} Memo: Clearance Level Upgrade — Effective Immediately
                  </p>
                  <p>
                    By order of the Chaos Corp Jungle Council, you are hereby
                    notified that your clearance has been upgraded. You survived
                    Level 1 and have been officially classified as{" "}
                    <span className="font-bold text-tertiary uppercase">
                      {personaName}
                    </span>
                    .
                  </p>
                  <p>
                    Your coffee tolerance, meeting endurance, and email
                    avoidance skills have been logged into the permanent
                    record. Management is... impressed. Or concerned. We can't
                    tell. We're never sure with this place.
                  </p>
                  <p>
                    As a certified jungle operative, you are now eligible to
                    descend deeper into the corporate wilderness. A new vehicle
                    pass is being requisitioned. Additional chaos will follow.
                  </p>
                  <p className="font-label text-label-sm text-on-surface-variant uppercase">
                    Signed,<br />
                    The Office of Unnecessary Synergy
                  </p>
                </div>

                <div className="mt-2 flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container-low px-4 py-2">
                  <Icon name="verified" filled className="text-primary" />
                  <span className="font-label text-label-sm text-on-surface-variant uppercase">
                    Level 1 Verified — {personaName}
                  </span>
                </div>
              </div>
            </section>

            {/* Coming soon banner */}
            <section className="flex flex-col items-center gap-4 rounded-xl border-2 border-dashed border-error bg-error-container/40 p-8 text-center shadow-sticker">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-error bg-surface-container-high">
                <Icon name="construction" filled className="text-error text-headline-sm" />
              </div>
              <h2 className="font-display text-headline-sm text-error uppercase">
                Level 2 Coming Soon
              </h2>
              <p className="max-w-md font-body text-body-md text-on-surface-variant">
                The jungle drive to destination is being paved by underpaid
                interns. Check back shortly — the road will be open before your
                next status update.
              </p>
            </section>
          </div>
          <SiteFooter />
        </main>
      </div>
    </div>
  );
}
