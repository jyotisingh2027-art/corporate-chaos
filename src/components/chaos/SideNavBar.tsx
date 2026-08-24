import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

const KIT =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA4PKUocpULJOP2nCHFAXvFCdGIaPLcRcKN9ao8YXqq7lRSDH5608-UfxagDrzvpFnq2-eoJORKYTZgBVYrCG7s127Q-ejx60ZGdSs73LM28zBwCKjrwF7yGfiQDCEkFUw7rFbwrKZ8s6tH5zhyE888j7a1njKIAoax7fPcnNIq-_jL-flh2rjNiyJQzHdthzmZZcQRM0HDoV2FysWVPgHvAnTyrO9D7OWy6gp4-aNnkCW1Z9pgEyw_hw";

const RESULTS_KEY = "corporate-chaos-results";

const BASE =
  "flex items-center gap-3 rounded-lg p-3 text-on-surface-variant opacity-80 transition-all duration-150 hover:scale-105 hover:bg-surface-container-high active:scale-95";
const ACTIVE =
  "flex items-center gap-3 rounded-lg border-b-4 border-on-primary bg-primary-container p-3 font-bold text-on-primary-container opacity-100 shadow-sticker";

export function SideNavBar() {
  const [level1Done, setLevel1Done] = useState(false);

  useEffect(() => {
    try {
      setLevel1Done(Boolean(sessionStorage.getItem(RESULTS_KEY)));
    } catch {
      setLevel1Done(false);
    }
  }, []);

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
        <Link to="/" activeOptions={{ exact: true }} className={BASE} activeProps={{ className: ACTIVE }}>
          <Icon name="forest" />
          <span className="font-label text-label-sm">Jungle</span>
        </Link>

        <Link to="/scenarios" className={BASE} activeProps={{ className: ACTIVE }}>
          <Icon name="quiz" />
          <span className="font-label text-label-sm">Level 1</span>
        </Link>

        <LockedLevel
          icon="directions_car"
          label="Level 2"
          hint="Jungle drive — reach the destination"
          unlocked={level1Done}
        />
        <LockedLevel
          icon="apartment"
          label="Level 3"
          hint="Jungle office simulation — manage the chaos"
          unlocked={false}
        />
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

function LockedLevel({
  icon,
  label,
  hint,
  unlocked,
}: {
  icon: string;
  label: string;
  hint: string;
  unlocked: boolean;
}) {
  return (
    <div
      title={unlocked ? `${label} — coming soon` : `Locked · ${hint}`}
      aria-disabled="true"
      className={`flex items-center gap-3 rounded-lg p-3 ${
        unlocked ? "text-on-surface-variant opacity-70" : "text-outline opacity-50"
      }`}
    >
      <Icon name={icon} />
      <span className="font-label text-label-sm">{label}</span>
      <Icon
        name={unlocked ? "lock_open" : "lock"}
        filled
        className={`ml-auto text-[16px] ${unlocked ? "text-primary" : "text-outline"}`}
      />
    </div>
  );
}
