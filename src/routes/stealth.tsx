import { createFileRoute, Link } from "@tanstack/react-router";
import { Icon } from "@/components/chaos/Icon";

export const Route = createFileRoute("/stealth")({
  head: () => ({
    meta: [
      { title: "Q3 Corporate Synergy Financial Audit — Chaos Corp" },
      {
        name: "description",
        content:
          "Confidential Q3 synergy audit spreadsheet: budgets, variance and compliance status across strategic initiatives.",
      },
      { property: "og:title", content: "Q3 Corporate Synergy Financial Audit" },
      {
        property: "og:description",
        content:
          "Confidential Q3 synergy audit spreadsheet: budgets, variance and compliance status.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StealthPage,
});

type Row = {
  n: number;
  initiative: string;
  budget: string;
  actual: string;
  variance: string;
  up: boolean;
  status: string;
  tone: "ok" | "bad" | "neutral";
  remark: string;
};

const ROWS: Row[] = [
  { n: 1, initiative: "Synergy Optimization Framework", budget: "1,250,000", actual: "1,480,000", variance: "+18.4%", up: true, status: "APPROVED", tone: "ok", remark: "Cross-functional alignment achieved." },
  { n: 2, initiative: "Breakroom Espresso Machine Lease", budget: "45,000", actual: "98,400", variance: "+118.6%", up: true, status: "CRITICAL", tone: "bad", remark: "Caffeine tolerance at capacity." },
  { n: 3, initiative: "Holistic Paradigm Shifts", budget: "500,000", actual: "492,000", variance: "-1.6%", up: false, status: "STABLE", tone: "neutral", remark: "Slide decks rendered in 4K." },
  { n: 4, initiative: "Unpaid Overtime Compensation", budget: "0", actual: "0", variance: "0.0%", up: false, status: "COMPLIANT", tone: "neutral", remark: "Voluntary enthusiasm logged." },
  { n: 5, initiative: "Executive Trust Fall Retreat", budget: "320,000", actual: "315,000", variance: "-1.5%", up: false, status: "APPROVED", tone: "ok", remark: "Zero physical injuries reported." },
  { n: 6, initiative: "AI Blockchain Buzzword Audit", budget: "850,000", actual: "1,200,000", variance: "+41.2%", up: true, status: "EXPANDED", tone: "neutral", remark: "Investigating Web3 synergy." },
  { n: 7, initiative: "Slack Emoji Subscription Tier", budget: "12,000", actual: "14,500", variance: "+20.8%", up: true, status: "APPROVED", tone: "ok", remark: "Eyes emoji usage up 300%." },
  { n: 8, initiative: "Wi-Fi Router Disconnection Probe", budget: "5,000", actual: "2,100", variance: "-58.0%", up: false, status: "IN PROGRESS", tone: "neutral", remark: "Friday 4:59 PM outages under review." },
  { n: 9, initiative: "Total Organizational Synergy", budget: "2,982,000", actual: "3,599,000", variance: "+20.6%", up: true, status: "EXCEEDS", tone: "ok", remark: "Pristine spreadsheet data." },
];

const BARS = [
  { label: "Q1", h: 40 },
  { label: "Q2", h: 62 },
  { label: "Q3", h: 88 },
  { label: "Q4 (EST)", h: 110 },
];

function StealthPage() {
  return (
    <div className="min-h-screen bg-stealth-paper font-mono text-stealth-ink">
      {/* Fake Excel title bar */}
      <header className="flex flex-wrap items-center justify-between gap-3 bg-stealth-header px-4 py-3 text-stealth-paper">
        <div className="flex items-center gap-2 text-sm font-bold tracking-tight md:text-base">
          <Icon name="table_chart" filled className="text-[20px]" />
          <span>Q3_Corporate_Synergy_Financial_Audit_CONFIDENTIAL.xlsx — Excel</span>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 rounded border-2 border-stealth-paper/80 px-3 py-1.5 text-xs font-bold tracking-wide uppercase transition-colors hover:bg-stealth-paper hover:text-stealth-header md:text-sm"
        >
          <Icon name="visibility" filled className="text-[16px]" />
          Exit Stealth Mode (Back to Game)
        </Link>
      </header>

      {/* Formula bar */}
      <div className="border-b border-stealth-line bg-stealth-panel px-3 py-2">
        <div className="rounded border border-stealth-line bg-stealth-paper px-3 py-1.5 text-xs md:text-sm">
          =SUM(C4:C24) * LOG10(SYNERGY_INDEX) + IF(BOSS_LOOKING, 999999, 0)
        </div>
      </div>

      {/* Sheet */}
      <main className="overflow-x-auto px-3 py-4">
        <h1 className="sr-only">Q3 Corporate Synergy Financial Audit</h1>
        <table className="w-full min-w-[900px] border-collapse text-xs md:text-sm">
          <thead>
            <tr className="bg-stealth-heading text-left align-bottom">
              <th className="w-10 border border-stealth-grid px-2 py-3" />
              <th className="border border-stealth-grid px-3 py-3 font-bold">A: Strategic Initiative</th>
              <th className="border border-stealth-grid px-3 py-3 text-right font-bold">B: Q1 Budget ($)</th>
              <th className="border border-stealth-grid px-3 py-3 text-right font-bold">C: Q2 Actual ($)</th>
              <th className="border border-stealth-grid px-3 py-3 text-right font-bold">D: Variance (%)</th>
              <th className="border border-stealth-grid px-3 py-3 text-center font-bold">E: Compliance Status</th>
              <th className="border border-stealth-grid px-3 py-3 font-bold">F: Audit Remarks</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.n} className={r.n % 2 === 0 ? "bg-stealth-row-alt" : "bg-stealth-paper"}>
                <td className="border border-stealth-grid bg-stealth-heading px-2 py-3 text-center text-stealth-muted">{r.n}</td>
                <td className="border border-stealth-grid px-3 py-3 font-bold">{r.initiative}</td>
                <td className="border border-stealth-grid px-3 py-3 text-right">{r.budget}</td>
                <td className="border border-stealth-grid px-3 py-3 text-right font-bold text-stealth-positive">{r.actual}</td>
                <td
                  className={`border border-stealth-grid px-3 py-3 text-right font-bold ${
                    r.up ? "text-stealth-alert" : "text-stealth-neutral"
                  }`}
                >
                  {r.variance}
                </td>
                <td className="border border-stealth-grid px-3 py-3 text-center">
                  <span
                    className={`inline-block rounded px-2 py-1 text-[11px] font-bold ${
                      r.tone === "ok"
                        ? "bg-stealth-positive-soft text-stealth-positive-dark"
                        : r.tone === "bad"
                          ? "bg-stealth-alert-soft text-stealth-alert-dark"
                          : "bg-stealth-neutral-soft text-stealth-ink"
                    }`}
                  >
                    {r.status}
                  </span>
                </td>
                <td className="border border-stealth-grid px-3 py-3 italic text-stealth-ink">{r.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Chart */}
        <section className="mt-6 max-w-xl rounded border border-stealth-grid bg-stealth-paper p-5 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <h2 className="max-w-xs text-sm font-bold uppercase">
              Figure 3.1: Q3 Synergy Growth vs Coffee Consumption
            </h2>
            <p className="text-xs font-bold uppercase text-stealth-positive">
              Status:
              <br />
              Optimal
            </p>
          </div>
          <div className="mt-6 flex h-32 items-end gap-3 border-b border-stealth-line pb-1">
            {BARS.map((b, i) => (
              <div
                key={b.label}
                style={{ height: `${b.h}px` }}
                className={`flex w-20 items-start justify-center rounded-t px-1 pt-1 text-center text-[10px] font-bold text-white ${
                  [
                    "bg-stealth-chart-q1",
                    "bg-stealth-chart-q2",
                    "bg-stealth-chart-q3",
                    "bg-stealth-chart-q4",
                  ][i]
                }`}
              >
                {b.label}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
