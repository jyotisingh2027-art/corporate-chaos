export function SiteFooter() {
  return (
    <footer className="relative z-20 mt-auto flex w-full flex-col items-center justify-center gap-2 border-t-2 border-dashed border-outline-variant bg-surface-container-lowest py-4">
      <div className="flex gap-4 font-label text-label-sm text-on-surface-variant">
        <a className="transition-colors hover:text-error" href="#legal">
          Corporate Legal
        </a>
        <span className="text-outline-variant">|</span>
        <a className="transition-colors hover:text-error" href="#hr">
          HR Complaints
        </a>
        <span className="text-outline-variant">|</span>
        <a className="transition-colors hover:text-error" href="#overtime">
          Unpaid Overtime
        </a>
      </div>
      <div className="font-label text-label-sm text-tertiary italic opacity-70">
        © 2024 Chaos Corp. All souls reserved.
      </div>
    </footer>
  );
}