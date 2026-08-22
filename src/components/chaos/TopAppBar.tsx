import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Icon } from "./Icon";

const AVATAR =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDEbAHdYL_HRiclFI52l3iEA9S8nPidUzZT3ymn-ccTGv0uxedhQc-oj55H7MiwH9jzMHBCrICb9o62_ZGS7MoImf0krlpNTUjBFuNAV20CFpj2WooQgVsAodqCiVsc7DHaJ4_cFoHLKHiqafnIQaetn7hNLSxRHXmPhp4uOh04AFW08Pjov-DQaiAnr6ZCVZz3MH3xXEMwEifgVoMPsh-SdL_ffgY2dovrwzwn3S3kOF4eu-1VQ0isvA";

export function TopAppBar({
  onPanic,
  onReport,
}: {
  onPanic?: () => void;
  onReport?: () => void;
}) {
  const [sfxOn, setSfxOn] = useState(true);

  return (
    <header className="fixed top-0 left-0 z-50 flex h-16 w-full items-center justify-between gap-4 border-b-4 border-surface-variant bg-surface-container-low px-margin-mobile shadow-[4px_4px_0px_0px_color-mix(in_oklab,var(--primary)_30%,transparent)] md:px-margin-desktop">
      <Link
        to="/"
        className="font-display text-headline-sm font-black tracking-tighter text-primary uppercase md:text-headline-lg"
      >
        Corporate Chaos
      </Link>

      <div className="flex items-center gap-3">
        {/* SFX toggle */}
        <button
          type="button"
          onClick={() => setSfxOn((v) => !v)}
          aria-pressed={sfxOn}
          className="hidden items-center gap-2 rounded-full border border-primary/50 px-3 py-1.5 font-label text-label-sm text-primary transition-colors hover:bg-primary-container/40 sm:flex"
        >
          <Icon name="volume_up" filled className="text-[16px]" />
          <span>{sfxOn ? "SFX ON" : "SFX OFF"}</span>
          <span
            className={`h-2 w-2 rounded-full transition-all ${
              sfxOn
                ? "bg-primary shadow-[0_0_8px_2px_var(--primary)]"
                : "bg-outline"
            }`}
          />
        </button>

        {/* Report to HR */}
        <button
          type="button"
          onClick={onReport}
          className="btn-tactical flex items-center gap-2 rounded-lg border-b-4 border-primary bg-primary-container px-4 py-2 font-label text-label-sm text-on-primary-container uppercase shadow-sticker transition-all hover:translate-y-0.5 hover:border-primary/60 active:translate-y-1 active:border-b-0"
        >
          <Icon name="campaign" filled className="text-[18px]" />
          <span className="hidden sm:inline">Report to HR</span>
        </button>

        {/* Panic */}
        <button
          type="button"
          onClick={onPanic}
          className="btn-tactical flex items-center gap-2 rounded-lg border-b-4 border-error-container bg-error px-4 py-2 font-label text-label-sm text-on-error uppercase shadow-sticker-danger transition-all hover:translate-y-0.5 hover:bg-error-container hover:text-error active:translate-y-1 active:border-b-0"
        >
          <Icon name="warning" filled className="text-[18px]" />
          <span>Panic!</span>
        </button>

        {/* Profile pill */}
        <div className="flex items-center gap-3 rounded-full border border-outline-variant bg-surface-container px-2 py-1 pr-4">
          <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-primary shadow-sticker">
            <img
              alt="Stressed employee ID photo"
              className="h-full w-full object-cover"
              src={AVATAR}
              loading="lazy"
            />
          </div>
          <div className="hidden flex-col leading-tight md:flex">
            <span className="flex items-center gap-1 font-label text-label-sm font-bold text-primary">
              Employee
              <Icon name="edit" className="text-[14px] text-on-surface-variant" />
            </span>
            <span className="font-label text-[10px] text-on-surface-variant">
              Level 1 Intern
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
