import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/chaos/Icon";
import { TopAppBar } from "@/components/chaos/TopAppBar";
import { ReportToHRModal } from "@/components/chaos/ReportToHRModal";

const HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCnELoblzvO1bJj2Y5Yl4jFHqlClGzn8UW9AWDY_8U5e9a5d0u3VQ-DG5-9I0ih72gsUG3AH3eusZ9mc220VpFqjbzkEdkqK0puuUQdf6BXViDzQYMwQlO-65WHiiRbmg2X0V5HjqjNw-oFe7cwXITDsdjnGu_LUKqzacXoXMobrZQPacdko8orfrGtO29rzjG9y1egkNSOHyWk9-c2qIJqfhpi63QKrWWL4HRQKEv3BoLq4rkqj0wtsg";

const TITLE = "Corporate Chaos — Survive the Corporate Jungle";
const DESC =
  "A satirical office survival game: face absurd workplace scenarios, keep your stress in check and let Chaos Corp AI analyze your survival instincts.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: HERO },
      { name: "twitter:image", content: HERO },
    ],
  }),
  component: LaunchScreen,
});

function LaunchScreen() {
  const [showHR, setShowHR] = useState(false);
  return (
    <>
    <TopAppBar onReport={() => setShowHR(true)} />
    {showHR && <ReportToHRModal onClose={() => setShowHR(false)} />}
    <main className="jungle-bg relative flex min-h-screen w-full flex-grow items-center justify-center overflow-x-hidden px-margin-mobile pt-24 pb-12 md:px-margin-desktop md:pt-28">
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-between overflow-hidden opacity-30">
        <div className="h-full w-1/3 -translate-x-[20%] -skew-x-12 border-r-4 border-outline-variant bg-surface-container-high" />
        <div className="h-full w-1/3 translate-x-[20%] skew-x-12 border-l-4 border-surface-variant bg-surface-container" />
      </div>

      <div className="relative z-10 flex w-full max-w-container-max flex-col items-center gap-gutter md:flex-row md:gap-[40px]">
        <div className="flex flex-1 flex-col items-center space-y-6 text-center md:items-start md:text-left">
          <div className="inline-block rotate-2 rounded bg-tertiary-container px-4 py-2 font-label text-label-sm tracking-widest text-on-tertiary-container uppercase shadow-sticker-dark">
            <Icon name="warning" className="mr-1 align-middle text-[16px]" />
            System Override Active
          </div>

          <h1 className="distressed-text font-display text-display-lg leading-tight text-primary uppercase md:text-[80px] md:leading-none">
            Corporate <br className="hidden md:block" /> Chaos
          </h1>

          <p className="max-w-xl font-display text-headline-sm text-on-surface-variant md:text-headline-lg">
            Survive the corporate jungle.
          </p>

          <div className="pt-8">
            <Link
              to="/profile"
              className="group relative inline-flex items-center justify-center rounded-lg border-b-4 border-inverse-primary bg-gradient-to-br from-primary to-primary-container px-8 py-4 font-display text-headline-sm tracking-tight text-on-primary uppercase shadow-[4px_8px_0px_0px_var(--on-primary)] transition-all duration-150 hover:translate-y-1 hover:shadow-[2px_4px_0px_0px_var(--on-primary)] active:translate-y-2 active:shadow-none"
            >
              <span className="mr-3">Enter the jungle</span>
              <Icon name="arrow_forward" filled />
              <svg
                className="pointer-events-none absolute -top-4 -right-4 h-8 w-8 text-surface-variant transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="relative mt-12 w-full max-w-md flex-1 md:mt-0">
          <div className="relative -rotate-3 border-4 border-outline-variant bg-surface-container-high p-6 shadow-sticker transition-transform duration-300 hover:rotate-0">
            <div className="absolute -top-3 -left-4 h-6 w-16 -rotate-12 bg-tertiary opacity-80 shadow-sm" />
            <div className="absolute -right-4 -bottom-3 h-6 w-16 -rotate-6 bg-tertiary opacity-80 shadow-sm" />

            <div className="mb-4 border-b-2 border-dashed border-surface-variant pb-2 text-center">
              <h2 className="font-display text-headline-sm tracking-wider text-tertiary uppercase">
                Employee of the Month
              </h2>
              <p className="font-label text-label-sm text-on-surface-variant">Productivity +9000%</p>
            </div>

            <div className="group relative aspect-square w-full overflow-hidden border-2 border-outline bg-surface-container-lowest shadow-inner">
              <img
                src={HERO}
                alt="A monkey in a business suit typing at a desk inside a cubicle overgrown with jungle vines"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="mt-4 flex items-center justify-between rounded-sm border border-outline-variant bg-surface-container p-2 shadow-sm">
              <div className="flex items-center gap-2">
                <Icon name="star" filled className="text-primary" />
                <span className="font-label text-label-sm text-on-surface">Top Performer</span>
              </div>
              <span className="rounded bg-error-container px-2 py-1 font-label text-label-sm text-error">
                DO NOT FEED
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
