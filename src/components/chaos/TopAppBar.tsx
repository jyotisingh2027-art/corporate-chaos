import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEbAHdYL_HRiclFI52l3iEA9S8nPidUzZT3ymn-ccTGv0uxedhQc-oj55H7MiwH9jzMHBCrICb9o62_ZGS7MoImf0krlpNTUjBFuNAV20CFpj2WooQgVsAodqCiVsc7DHaJ4_cFoHLKHiqafnIQaetn7hNLSxRHXmPhp4uOh04AFW08Pjov-DQaiAnr6ZCVZz3MH3xXEMwEifgVoMPsh-SdL_ffgY2dovrwzwn3S3kOF4eu-1VQ0isvA";

export function TopAppBar({ onPanic }: { onPanic?: () => void }) {
  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b-4 border-surface-variant bg-surface-container-low px-margin-mobile shadow-[4px_4px_0px_0px_color-mix(in_oklab,var(--primary)_30%,transparent)] md:px-margin-desktop">
      <Link
        to="/"
        className="font-display text-headline-sm font-black tracking-tighter text-primary uppercase md:text-headline-lg"
      >
        Corporate Chaos
      </Link>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onPanic}
          className="btn-tactical flex items-center gap-2 rounded-lg border-error-container bg-error px-4 py-2 font-label text-label-sm text-on-error uppercase transition-colors hover:bg-error-container hover:text-error active:translate-y-1"
        >
          <Icon name="warning" filled className="text-[18px]" />
          Panic
        </button>
        <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-primary shadow-sticker">
          <img
            alt="Stressed employee ID photo"
            className="h-full w-full object-cover"
            src={AVATAR}
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}