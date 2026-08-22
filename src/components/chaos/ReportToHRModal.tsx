import { Icon } from "./Icon";

export function ReportToHRModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Chaos Corp company profile and overview"
      onClick={onClose}
    >
      <div
        className="jungle-bg relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-2xl border-2 border-outline-variant bg-surface-container-lowest shadow-[8px_8px_0px_0px_var(--primary-container)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-surface-variant bg-surface-container-low px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <span className="rounded border border-primary/50 bg-primary-container/40 px-2 py-1 font-label text-label-sm font-bold tracking-widest text-primary uppercase">
              Chaos Corp HQ
            </span>
            <span className="font-label text-label-sm text-on-surface-variant uppercase">
              Company Profile & Overview
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-tactical flex items-center gap-2 rounded-lg border-b-4 border-tertiary bg-tertiary-container px-4 py-2 font-label text-label-sm text-on-tertiary-container uppercase shadow-sticker-dark transition-all hover:translate-y-0.5 active:translate-y-1 active:border-b-0"
          >
            <Icon name="close" filled className="text-[18px]" />
            <span>Close</span>
          </button>
        </div>

        {/* Title */}
        <div className="px-5 pt-6 md:px-8">
          <h2 className="distressed-text font-display text-headline-lg font-black tracking-tight text-primary uppercase md:text-display-lg">
            About Chaos Corp
          </h2>
        </div>

        {/* Body: contact + location only */}
        <div className="grid grid-cols-1 gap-6 px-5 py-6 md:grid-cols-2 md:px-8">
          {/* HEADQUARTERS & CONTACT */}
          <section className="rounded-2xl border-2 border-surface-variant bg-surface-container p-5 shadow-sticker">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container/50 border border-primary/40">
                <Icon name="public" filled className="text-[20px] text-primary" />
              </span>
              <h3 className="font-display text-headline-sm font-bold tracking-wide text-primary uppercase">
                Headquarters & Contact
              </h3>
            </div>
            <p className="mb-4 font-body text-body-md text-on-surface-variant">
              Have questions or feedback about your corporate survival simulation?
              Get in touch with our team.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Direct Hotline", value: "1-800-555-CHAOS", icon: "call" },
                { label: "General Inquiries", value: "info@chaoscorp.internal", icon: "mail" },
                { label: "Community Channel", value: "#chaos-corp-lounge", icon: "forum" },
                { label: "Operating Hours", value: "Mon – Fri 9:00 AM – 5:00 PM EST", icon: "schedule" },
              ].map((row) => (
                <li
                  key={row.label}
                  className="flex items-center justify-between gap-3 rounded-full border border-outline-variant bg-surface-container-low px-4 py-2"
                >
                  <span className="flex items-center gap-2 font-label text-label-sm text-on-surface-variant uppercase">
                    <Icon name={row.icon} filled className="text-[16px] text-tertiary" />
                    {row.label}
                  </span>
                  <span className="font-label text-label-sm font-bold text-on-surface">
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* HQ & JUNGLE OFFICE LOCATION */}
          <section className="rounded-2xl border-2 border-surface-variant bg-surface-container p-5 shadow-sticker-dark">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tertiary-container border border-tertiary/40">
                <Icon name="location_on" filled className="text-[20px] text-tertiary" />
              </span>
              <h3 className="font-display text-headline-sm font-bold tracking-wide text-tertiary uppercase">
                HQ & Jungle Office Location
              </h3>
            </div>
            <p className="mb-4 font-body text-body-md text-on-surface-variant">
              Our corporate headquarters is conveniently nestled within Sector C of
              the Corporate Jungle Tower.
            </p>
            <div className="rounded-lg border-2 border-dashed border-outline-variant bg-surface-container-low p-4">
              <ul className="flex flex-col gap-2 font-label text-label-sm text-on-surface">
                <li className="flex items-center gap-2">
                  <Icon name="apartment" filled className="text-[16px] text-primary" />
                  <span className="font-bold">Chaos Corp Tower</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="stairs" filled className="text-[16px] text-primary" />
                  Suite 404 — Jungle Canopy Floor
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="home" filled className="text-[16px] text-primary" />
                  100 Synergy Boulevard, Tech Ridge
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="explore" filled className="text-[16px] text-tertiary" />
                  <span className="font-bold text-tertiary">37.7749° N, 122.4194° W</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="language" filled className="text-[16px] text-tertiary" />
                  <span className="text-on-surface-variant uppercase">Global Reach:</span>
                  <span className="font-bold text-tertiary">100% Virtual & Hybrid Remote</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
