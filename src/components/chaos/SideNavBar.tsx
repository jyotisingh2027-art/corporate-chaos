import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

const KIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4PKUocpULJOP2nCHFAXvFCdGIaPLcRcKN9ao8YXqq7lRSDH5608-UfxagDrzvpFnq2-eoJORKYTZgBVYrCG7s127Q-ejx60ZGdSs73LM28zBwCKjrwF7yGfiQDCEkFUw7rFbwrKZ8s6tH5zhyE888j7a1njKIAoax7fPcnNIq-_jL-flh2rjNiyJQzHdthzmZZcQRM0HDoV2FysWVPgHvAnTyrO9D7OWy6gp4-aNnkCW1Z9pgEyw_hw";

const LINKS = [
  { to: "/", icon: "forest", label: "Jungle" },
  { to: "/scenarios", icon: "quiz", label: "Scenarios" },
  { to: "/analysis", icon: "psychology", label: "Analysis" },
  { to: "/personas", icon: "badge", label: "Personas" },
] as const;

export function SideNavBar() {
  return (
    <aside className="fixed top-16 left-0 z-40 hidden h-[calc(100vh-4rem)] w-64 flex-col border-r-4 border-surface-variant bg-surface-container p-4 shadow-lg lg:flex">
      <div className="mb-8 flex flex-col items-center border-b-2 border-dashed border-surface-variant pb-4">
        <div className="relative mb-3 h-20 w-20 overflow-hidden rounded-full border-4 border-primary bg-surface shadow-sticker">
          <img
            alt="Office survival kit"
            className="h-full w-full object-cover"
            src={KIT}
            loading="lazy"
          />
        </div>
        <h2 className="font-display text-headline-sm leading-tight text-primary">Chaos Agent</h2>
        <p className="mt-1 font-label text-label-sm text-on-surface-variant">Level 1 Intern</p>
      </div>

      <nav className="flex flex-1 flex-col gap-2">
        {LINKS.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: l.to === "/" }}
            className="flex items-center gap-3 rounded-lg p-3 text-on-surface-variant opacity-80 transition-all duration-150 hover:scale-105 hover:bg-surface-container-high active:scale-95"
            activeProps={{
              className:
                "flex items-center gap-3 rounded-lg border-b-4 border-on-primary bg-primary-container p-3 font-bold text-on-primary-container opacity-100 shadow-sticker",
            }}
          >
            <Icon name={l.icon} />
            <span className="font-label text-label-sm">{l.label}</span>
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg border-b-4 border-error-container bg-error py-3 font-bold text-on-error shadow-sticker-danger transition-all hover:bg-error-container hover:text-error active:translate-y-1"
      >
        <Icon name="campaign" />
        Report to HR
      </button>
    </aside>
  );
}