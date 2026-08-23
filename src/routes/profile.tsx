import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { ReportToHRModal } from "@/components/chaos/ReportToHRModal";

const TITLE = "Employee Onboarding — Corporate Chaos";
const DESC =
  "Register your official Chaos Corp Badge ID: pick your name, corporate designation and badge photo before entering the corporate jungle.";

export const Route = createFileRoute("/profile")({
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
  component: ProfileScreen,
});

export const DESIGNATIONS = [
  "Level 1 Intern",
  "Chief Coffee Officer",
  "Senior Slide Deck Artisan",
  "Synergy Architect",
  "Unpaid Overtime Champion",
  "Spreadsheet Ninja",
  "Director of Quick Syncs",
] as const;

import badge1 from "@/assets/badge_Screenshot_2026-08-23_at_12.32.49_PM.png.asset.json";
import badge2 from "@/assets/badge_Screenshot_2026-08-23_at_12.32.56_PM.png.asset.json";
import badge3 from "@/assets/badge_Screenshot_2026-08-23_at_12.33.05_PM.png.asset.json";
import badge4 from "@/assets/badge_Screenshot_2026-08-23_at_12.33.12_PM.png.asset.json";
import badge5 from "@/assets/badge_Screenshot_2026-08-23_at_12.33.20_PM.png.asset.json";
import badge6 from "@/assets/badge_Screenshot_2026-08-23_at_12.33.27_PM.png.asset.json";

const BADGES = [
  { id: "burnout", label: "Burnout Veteran", url: badge1.url },
  { id: "sysadmin", label: "Server Room Sentinel", url: badge2.url },
  { id: "nightshift", label: "Night Shift Coder", url: badge3.url },
  { id: "globex", label: "Coffee-Fueled Associate", url: badge4.url },
  { id: "unhinged", label: "Deadline Survivor", url: badge5.url },
  { id: "chimp", label: "Jungle Cubicle Chimp", url: badge6.url },
];

function ProfileScreen() {
  const navigate = useNavigate();
  const [showHR, setShowHR] = useState(false);
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState<string>(DESIGNATIONS[0]);
  const [badge, setBadge] = useState(BADGES[0]!);

  const start = () => {
    try {
      sessionStorage.setItem(
        "chaos-profile",
        JSON.stringify({ name: name.trim() || "Employee", designation, badge: badge.url }),
      );
    } catch {
      /* storage unavailable */
    }
    navigate({ to: "/scenarios" });
  };

  return (
    <>
      <TopAppBar onReport={() => setShowHR(true)} showBack />
      {showHR && <ReportToHRModal onClose={() => setShowHR(false)} />}
      <main className="jungle-bg min-h-screen w-full px-margin-mobile pt-24 pb-16 md:px-margin-desktop md:pt-28">
        <div className="mx-auto max-w-container-max rounded-2xl border-4 border-outline-variant bg-surface-container-low p-6 shadow-sticker md:p-10">
          <div className="text-center">
            <span className="inline-block rounded bg-tertiary-container px-4 py-2 font-label text-label-sm tracking-widest text-on-tertiary-container uppercase">
              Step 1: Employee Onboarding
            </span>
            <h1 className="distressed-text mt-6 font-display text-display-lg leading-none text-primary uppercase">
              Ready to survive corporate life?
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-label text-on-surface-variant">
              Before entering Chaos Corp, register your official Corporate Badge ID below.
            </p>
          </div>

          <div className="mt-10 grid gap-gutter lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-xl border-2 border-outline-variant bg-surface-container p-6">
              <label
                htmlFor="emp-name"
                className="font-label text-label-sm tracking-wider text-tertiary uppercase"
              >
                Employee Full Name
              </label>
              <input
                id="emp-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name..."
                className="mt-2 w-full rounded-lg border-2 border-outline-variant bg-surface-container-lowest px-4 py-3 font-label text-on-surface placeholder:text-on-surface-variant/60 focus:border-primary focus:outline-none"
              />

              <label
                htmlFor="emp-title"
                className="mt-6 block font-label text-label-sm tracking-wider text-tertiary uppercase"
              >
                Corporate Designation / Job Title
              </label>
              <select
                id="emp-title"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                className="mt-2 w-full appearance-none rounded-lg border-2 border-outline-variant bg-surface-container-lowest px-4 py-3 font-label text-on-surface focus:border-primary focus:outline-none"
              >
                {DESIGNATIONS.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <p className="mt-6 font-label text-label-sm tracking-wider text-tertiary uppercase">
                Select Badge Photo (6 options)
              </p>
              <div className="mt-2 grid grid-cols-2 gap-3 rounded-lg border-2 border-outline-variant bg-surface-container-lowest p-3 sm:grid-cols-4">
                {BADGES.map((b) => {
                  const active = b.id === badge.id;
                  return (
                    <button
                      key={b.id}
                      type="button"
                      onClick={() => setBadge(b)}
                      aria-pressed={active}
                      className={`rounded-lg border-2 p-2 text-left transition-all ${
                        active
                          ? "border-primary bg-primary-container/30 shadow-sticker"
                          : "border-outline-variant hover:border-primary/60"
                      }`}
                    >
                      <img
                        src={b.url}
                        alt={b.label}
                        loading="lazy"
                        className="aspect-square w-full rounded object-cover"
                      />
                      <span className="mt-1 block truncate font-label text-[11px] text-on-surface">
                        {b.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live preview */}
            <div className="relative rounded-xl border-2 border-dashed border-primary/60 bg-surface-container p-6">
              <span className="absolute -top-3 right-4 rounded bg-tertiary px-2 py-1 font-label text-[11px] text-on-tertiary uppercase">
                Live Preview
              </span>
              <div className="flex flex-col items-center">
                <div className="w-full max-w-sm overflow-hidden rounded-xl border-4 border-primary shadow-sticker">
                  <img
                    src={badge.url}
                    alt="Selected badge photo"
                    className="aspect-square w-full object-cover"
                  />
                </div>
                <h2 className="mt-4 font-display text-headline-sm text-primary">
                  {name.trim() || "Employee"}
                </h2>
                <p className="font-label text-label-sm text-on-surface-variant">{designation}</p>
              </div>

              <div className="mt-6 space-y-2 border-t-2 border-dashed border-surface-variant pt-4 font-label text-label-sm">
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant uppercase">Security Clearance:</span>
                  <span className="text-primary uppercase">{designation}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant uppercase">Survival Kit:</span>
                  <span className="text-tertiary uppercase">Essentials Ready</span>
                </div>
              </div>

              <button
                type="button"
                onClick={start}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border-b-4 border-inverse-primary bg-primary px-6 py-4 font-display text-headline-sm text-on-primary uppercase shadow-sticker transition-all hover:translate-y-0.5 active:translate-y-1 active:border-b-0"
              >
                Welcome to Chaos Corp
                <Icon name="arrow_forward" filled />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
