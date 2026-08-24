import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import { Icon } from "./Icon";

type Q = { id: string; question: string; options: string[] };

const QUESTIONS: Q[] = [
  {
    id: "reason",
    question: "Primary reason for abandoning the jungle?",
    options: [
      "Too many meetings that could've been emails",
      "The coffee machine broke my spirit",
      "'Quick sync' became a lifestyle",
      "I was promoted into oblivion",
    ],
  },
  {
    id: "meetings",
    question: "How many hours of your life did recurring meetings consume?",
    options: ["A polite few", "Roughly one full season", "I aged visibly", "Time lost all meaning"],
  },
  {
    id: "email",
    question: "Your final unread email count?",
    options: ["Inbox zero (liar)", "Under 100", "347 and climbing", "The number is classified"],
  },
  {
    id: "synergy",
    question: "Rate the synergy you leveraged during your tenure.",
    options: [
      "Circled back exactly once",
      "Moved the needle sideways",
      "Boiled the ocean, twice",
      "I never learned what synergy is",
    ],
  },
  {
    id: "manager",
    question: "Would you recommend your manager to a friend?",
    options: ["Yes, to an enemy", "Only with a warning label", "They were fine, honestly", "Who was my manager?"],
  },
  {
    id: "legacy",
    question: "What legacy do you leave behind?",
    options: [
      "An unmaintained spreadsheet",
      "A passive-aggressive kitchen note",
      "One extremely cursed Slack emoji",
      "347 unanswered calendar invites",
    ],
  },
  {
    id: "return",
    question: "Under what conditions would you return?",
    options: ["Double pay, half meetings", "A working coffee machine", "Witness protection", "Never. Absolutely never."],
  },
];

const PROFILE_KEY = "chaos-profile";
const RESULTS_KEY = "corporate-chaos-results";

export function ResignModal({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [note, setNote] = useState("");
  const [confirm, setConfirm] = useState("");
  const [done, setDone] = useState(false);

  const total = QUESTIONS.length;
  const atFeedback = step < total;
  const q = QUESTIONS[step];

  const deleteAccount = () => {
    try {
      sessionStorage.removeItem(PROFILE_KEY);
      sessionStorage.removeItem(RESULTS_KEY);
      localStorage.removeItem(PROFILE_KEY);
      localStorage.removeItem(RESULTS_KEY);
    } catch {
      /* storage unavailable */
    }
    setDone(true);
  };

  const exitJungle = () => {
    onClose();
    router.navigate({ to: "/" });
    if (typeof window !== "undefined") window.location.reload();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Resignation and exit interview"
      onClick={onClose}
    >
      <div
        className="jungle-bg relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-y-auto rounded-2xl border-2 border-outline-variant bg-surface-container-lowest shadow-[8px_8px_0px_0px_var(--primary-container)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b-2 border-dashed border-surface-variant bg-surface-container-low px-5 py-4 md:px-8">
          <div className="flex items-center gap-3">
            <span className="rounded border border-error/50 bg-error/20 px-2 py-1 font-label text-label-sm font-bold tracking-widest text-error uppercase">
              Exit Interview
            </span>
            <span className="font-label text-label-sm text-on-surface-variant uppercase">
              Offboarding Protocol
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

        <div className="px-5 pt-6 md:px-8">
          <h2 className="distressed-text font-display text-headline-lg font-black tracking-tight text-primary uppercase md:text-display-lg">
            Resign
          </h2>
          <p className="mt-2 font-label text-label-sm text-on-surface-variant">
            Before you escape, HR demands closure. Answer honestly — nobody will read it.
          </p>
        </div>

        {done ? (
          <div className="flex flex-col items-center gap-4 px-5 py-12 text-center md:px-8">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-error bg-error/20">
              <Icon name="person_off" filled className="text-[32px] text-error" />
            </span>
            <h3 className="font-display text-headline-md font-black text-primary uppercase">
              Records Deleted
            </h3>
            <p className="max-w-md font-label text-label-sm text-on-surface-variant">
              Your badge has been shredded, your profile wiped and your Slack account renamed to
              "Deactivated User". Nobody will remember you by Friday.
            </p>
            <button
              type="button"
              onClick={exitJungle}
              className="btn-tactical mt-2 flex items-center gap-2 rounded-lg border-b-4 border-error-container bg-error px-6 py-3 font-label text-label-sm font-bold text-on-error uppercase shadow-sticker-danger transition-all active:translate-y-1 active:border-b-0"
            >
              <Icon name="logout" filled className="text-[18px]" />
              Leave the Jungle
            </button>
          </div>
        ) : atFeedback ? (
          <div className="px-5 py-6 md:px-8">
            <div className="mb-4 flex items-center justify-between font-label text-label-sm text-on-surface-variant uppercase">
              <span>
                Question {step + 1} / {total}
              </span>
              <span>{Math.round(((step + 1) / total) * 100)}% escaped</span>
            </div>
            <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-surface-variant">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${((step + 1) / total) * 100}%` }}
              />
            </div>

            <h3 className="mb-5 font-display text-headline-sm font-bold text-on-surface md:text-headline-md">
              {q.question}
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt }))}
                    className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left font-label text-label-sm transition-all ${
                      selected
                        ? "border-primary bg-primary-container text-on-primary-container shadow-sticker"
                        : "border-surface-variant bg-surface-container text-on-surface-variant hover:border-primary/50"
                    }`}
                  >
                    <Icon
                      name={selected ? "radio_button_checked" : "radio_button_unchecked"}
                      className="text-[20px]"
                    />
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                type="button"
                disabled={step === 0}
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                className="flex items-center gap-2 rounded-lg border-2 border-surface-variant px-4 py-2 font-label text-label-sm text-on-surface-variant uppercase disabled:opacity-40"
              >
                <Icon name="arrow_back" className="text-[18px]" />
                Back
              </button>
              <button
                type="button"
                disabled={!answers[q.id]}
                onClick={() => setStep((s) => s + 1)}
                className="btn-tactical flex items-center gap-2 rounded-lg border-b-4 border-primary bg-primary-container px-6 py-3 font-label text-label-sm font-bold text-on-primary-container uppercase shadow-sticker transition-all active:translate-y-1 active:border-b-0 disabled:opacity-40"
              >
                {step === total - 1 ? "Finish Interview" : "Next"}
                <Icon name="arrow_forward" className="text-[18px]" />
              </button>
            </div>
          </div>
        ) : (
          <div className="px-5 py-6 md:px-8">
            <section className="rounded-2xl border-2 border-surface-variant bg-surface-container p-5 shadow-sticker">
              <h3 className="mb-3 font-display text-headline-sm font-bold tracking-wide text-primary uppercase">
                Final words for the record
              </h3>
              <textarea
                value={note}
                maxLength={400}
                onChange={(e) => setNote(e.target.value)}
                rows={4}
                placeholder="Optional. Be professional. Or don't."
                className="w-full resize-none rounded-lg border-2 border-surface-variant bg-surface-container-low p-3 font-label text-label-sm text-on-surface outline-none focus:border-primary"
              />
              <p className="mt-1 text-right font-label text-label-sm text-on-surface-variant">
                {note.length}/400
              </p>
            </section>

            <section className="mt-6 rounded-2xl border-2 border-error/60 bg-error/10 p-5">
              <div className="mb-3 flex items-center gap-3">
                <Icon name="warning" filled className="text-[22px] text-error" />
                <h3 className="font-display text-headline-sm font-bold tracking-wide text-error uppercase">
                  Delete your account
                </h3>
              </div>
              <p className="mb-4 font-label text-label-sm text-on-surface-variant">
                Leaving the company erases everything: your badge, your designation, your survival
                stats and any trace you ever existed. Type <span className="font-bold text-error">RESIGN</span> to confirm.
              </p>
              <input
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="RESIGN"
                className="mb-4 w-full rounded-lg border-2 border-surface-variant bg-surface-container-low p-3 font-mono text-label-sm tracking-widest text-on-surface uppercase outline-none focus:border-error"
              />
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(total - 1)}
                  className="flex items-center gap-2 rounded-lg border-2 border-surface-variant px-4 py-2 font-label text-label-sm text-on-surface-variant uppercase"
                >
                  <Icon name="arrow_back" className="text-[18px]" />
                  Back
                </button>
                <button
                  type="button"
                  disabled={confirm.trim().toUpperCase() !== "RESIGN"}
                  onClick={deleteAccount}
                  className="btn-tactical flex items-center gap-2 rounded-lg border-b-4 border-error-container bg-error px-6 py-3 font-label text-label-sm font-bold text-on-error uppercase shadow-sticker-danger transition-all active:translate-y-1 active:border-b-0 disabled:opacity-40"
                >
                  <Icon name="delete_forever" filled className="text-[18px]" />
                  Delete account & quit
                </button>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
