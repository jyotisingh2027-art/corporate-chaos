import { Icon } from "./Icon";

export type ProfileData = {
  name: string;
  designation: string;
  badge: string;
};

export type ResultsData = {
  survival: number;
  caffeine: number;
  meetings: number;
  email: number;
  stress: number;
};

function badgeId(name: string): string {
  if (!name) return "#CC-2026-404";
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return `#CC-2026-${String(h % 1000).padStart(3, "0")}`;
}

export function ProfileBadgeModal({
  profile,
  results,
  onClose,
}: {
  profile: ProfileData | null;
  results: ResultsData | null;
  onClose: () => void;
}) {
  const name = profile?.name?.trim() || "Employee";
  const designation = profile?.designation || "Level 1 Intern";
  const badge = profile?.badge;
  const stage = results ? "ANALYZED" : "INTRO";
  const stress = results ? `${results.stress}%` : "—";
  const status = "Active Employee";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Corporate employee badge ID"
      onClick={onClose}
    >
      <div
        className="jungle-bg relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-y-auto rounded-2xl border-2 border-outline-variant bg-surface-container-lowest shadow-[8px_8px_0px_0px_var(--primary-container)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-surface-variant bg-surface-container-low px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/40 bg-primary-container/40">
              <Icon name="badge" filled className="text-[20px] text-primary" />
            </span>
            <div className="leading-tight">
              <span className="block font-display text-headline-sm font-bold tracking-wide text-primary uppercase">
                Corporate Employee Badge ID
              </span>
              <span className="font-label text-label-sm text-on-surface-variant uppercase">
                Your player profile — view only
              </span>
            </div>
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

        {/* Body: view-only badge card */}
        <div className="px-5 py-6 md:px-8">
          <div className="overflow-hidden rounded-2xl border-2 border-primary/70 bg-surface-container p-4 shadow-sticker md:p-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-[180px_1fr] md:gap-6">
              {/* Photo */}
              <div className="flex flex-col items-center">
                <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-xl border-4 border-primary shadow-sticker">
                  {badge ? (
                    <img
                      src={badge}
                      alt={`${name} badge photo`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-surface-container-lowest">
                      <Icon
                        name="person"
                        filled
                        className="text-[64px] text-on-surface-variant"
                      />
                    </div>
                  )}
                </div>
                <span className="mt-3 rounded bg-tertiary-container px-3 py-1 font-label text-label-sm font-bold tracking-widest text-on-tertiary-container uppercase">
                  Verified ID
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-error-container/40 px-3 py-1 font-label text-label-sm font-bold tracking-wider text-error uppercase">
                    ID: {badgeId(name)}
                  </span>
                  <span className="rounded-full bg-primary-container/40 px-3 py-1 font-label text-label-sm font-bold tracking-wider text-primary uppercase">
                    Stage: {stage}
                  </span>
                </div>

                <h2 className="font-display text-display-sm font-black leading-none text-on-surface md:text-headline-lg">
                  {name}
                </h2>

                <div className="flex items-center gap-2">
                  <Icon
                    name="work"
                    filled
                    className="text-[20px] text-primary"
                  />
                  <span className="font-label text-headline-sm font-bold text-primary">
                    {designation}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Icon
                    name="shield"
                    filled
                    className="text-[20px] text-error"
                  />
                  <span className="font-label text-headline-sm font-bold text-error">
                    Stress: {stress}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Icon
                    name="circle"
                    filled
                    className="text-[16px] text-tertiary"
                  />
                  <span className="font-label text-label-sm font-bold tracking-wider text-tertiary uppercase">
                    Status: {status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-5 flex items-center justify-center gap-2 text-center font-label text-label-sm text-on-surface-variant">
            <Icon name="lock" filled className="text-[16px]" />
            This profile is view-only. Name and designation cannot be edited here.
          </p>
        </div>
      </div>
    </div>
  );
}
