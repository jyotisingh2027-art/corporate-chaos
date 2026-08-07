export type Choice = {
  key: "A" | "B" | "C" | "D";
  text: string;
  icon: string;
  tone: "primary" | "tertiary" | "error";
  stress: number;
  caffeine: number;
  meetings: number;
  email: number;
};

export type Scenario = {
  prompt: string;
  choices: Choice[];
};

export const SCENARIOS: Scenario[] = [
  {
    prompt: "Your manager schedules a meeting at 7 PM. What do you do?",
    choices: [
      { key: "A", text: "Join with a smile.", icon: "check_circle", tone: "primary", stress: 12, caffeine: 10, meetings: 14, email: 0 },
      { key: "B", text: "Say you're stuck in traffic.", icon: "directions_car", tone: "tertiary", stress: 6, caffeine: 2, meetings: 4, email: 6 },
      { key: "C", text: "Ask if it can wait until tomorrow.", icon: "calendar_clock", tone: "primary", stress: 4, caffeine: 0, meetings: 2, email: 4 },
      { key: "D", text: "Pretend your Wi-Fi died.", icon: "wifi_off", tone: "error", stress: 8, caffeine: 4, meetings: 0, email: 12 },
    ],
  },
  {
    prompt: "A colleague takes credit for your slide deck in front of leadership.",
    choices: [
      { key: "A", text: "Applaud loudly. Play the long game.", icon: "sentiment_very_dissatisfied", tone: "primary", stress: 14, caffeine: 8, meetings: 6, email: 2 },
      { key: "B", text: "Reply-all with the original file timestamp.", icon: "receipt_long", tone: "tertiary", stress: 9, caffeine: 6, meetings: 2, email: 0 },
      { key: "C", text: "Book a 'quick sync' to discuss ownership.", icon: "handshake", tone: "primary", stress: 7, caffeine: 4, meetings: 12, email: 2 },
      { key: "D", text: "Delete the shared folder. Chaos reigns.", icon: "delete_forever", tone: "error", stress: 18, caffeine: 12, meetings: 0, email: 14 },
    ],
  },
  {
    prompt: "The 'quick 15-minute standup' has entered its 52nd minute.",
    choices: [
      { key: "A", text: "Keep nodding. Nobody can prove you're awake.", icon: "self_improvement", tone: "primary", stress: 10, caffeine: 14, meetings: 16, email: 4 },
      { key: "B", text: "Fake a hard stop with an imaginary client.", icon: "timer_off", tone: "tertiary", stress: 5, caffeine: 4, meetings: 2, email: 6 },
      { key: "C", text: "Ask a question. Extend everyone's suffering.", icon: "help", tone: "primary", stress: 12, caffeine: 8, meetings: 18, email: 0 },
      { key: "D", text: "Leave silently. Blame the calendar invite.", icon: "logout", tone: "error", stress: 6, caffeine: 2, meetings: 0, email: 10 },
    ],
  },
  {
    prompt: "347 unread emails. One is titled 'URGENT — ACTION REQUIRED'.",
    choices: [
      { key: "A", text: "Open it. Face the beast.", icon: "mark_email_read", tone: "primary", stress: 11, caffeine: 10, meetings: 4, email: 0 },
      { key: "B", text: "Mark all as read. Fresh start.", icon: "drafts", tone: "tertiary", stress: 4, caffeine: 2, meetings: 0, email: 20 },
      { key: "C", text: "Set an out-of-office. In the office.", icon: "beach_access", tone: "primary", stress: 3, caffeine: 0, meetings: 0, email: 16 },
      { key: "D", text: "Forward it to someone more junior.", icon: "forward_to_inbox", tone: "error", stress: 7, caffeine: 4, meetings: 2, email: 12 },
    ],
  },
  {
    prompt: "HR announces mandatory Friday fun: a virtual escape room.",
    choices: [
      { key: "A", text: "Become the team's escape room captain.", icon: "emoji_events", tone: "primary", stress: 13, caffeine: 12, meetings: 14, email: 2 },
      { key: "B", text: "Join muted, camera off, doing real work.", icon: "videocam_off", tone: "tertiary", stress: 6, caffeine: 6, meetings: 8, email: 4 },
      { key: "C", text: "Schedule a conflicting client call.", icon: "event_busy", tone: "primary", stress: 5, caffeine: 4, meetings: 6, email: 6 },
      { key: "D", text: "Reply: 'Is attendance optional?' Reply-all.", icon: "campaign", tone: "error", stress: 15, caffeine: 8, meetings: 2, email: 10 },
    ],
  },
  {
    prompt: "The coffee machine is broken. Again. It's 9:02 AM.",
    choices: [
      { key: "A", text: "Drink the emergency instant sachet.", icon: "local_cafe", tone: "primary", stress: 8, caffeine: 20, meetings: 0, email: 2 },
      { key: "B", text: "Walk 20 minutes for artisanal salvation.", icon: "directions_walk", tone: "tertiary", stress: 4, caffeine: 16, meetings: 0, email: 6 },
      { key: "C", text: "File a maintenance ticket. Wait forever.", icon: "build", tone: "primary", stress: 10, caffeine: 4, meetings: 2, email: 8 },
      { key: "D", text: "Steal from the executive floor machine.", icon: "priority_high", tone: "error", stress: 12, caffeine: 22, meetings: 0, email: 0 },
    ],
  },
  {
    prompt: "'Can you jump on a quick call?' arrives with no context at 4:58 PM.",
    choices: [
      { key: "A", text: "Jump. Always jump.", icon: "call", tone: "primary", stress: 14, caffeine: 10, meetings: 16, email: 0 },
      { key: "B", text: "'Can you send it in writing?'", icon: "edit_note", tone: "tertiary", stress: 6, caffeine: 2, meetings: 2, email: 2 },
      { key: "C", text: "Answer tomorrow. Time is a construct.", icon: "schedule", tone: "primary", stress: 5, caffeine: 0, meetings: 0, email: 14 },
      { key: "D", text: "Go offline mid-sentence.", icon: "cloud_off", tone: "error", stress: 9, caffeine: 4, meetings: 0, email: 12 },
    ],
  },
  {
    prompt: "Performance review season. Rate yourself out of five.",
    choices: [
      { key: "A", text: "Five. Absolute confidence.", icon: "star", tone: "primary", stress: 10, caffeine: 8, meetings: 8, email: 2 },
      { key: "B", text: "Three. Humility is strategy.", icon: "balance", tone: "tertiary", stress: 7, caffeine: 4, meetings: 6, email: 4 },
      { key: "C", text: "Write 4,000 words of self-praise.", icon: "history_edu", tone: "primary", stress: 13, caffeine: 14, meetings: 4, email: 0 },
      { key: "D", text: "Leave it blank. Let fate decide.", icon: "casino", tone: "error", stress: 16, caffeine: 6, meetings: 0, email: 16 },
    ],
  },
  {
    prompt: "Someone microwaved fish. The open-plan office is a crime scene.",
    choices: [
      { key: "A", text: "Say nothing. Breathe through your mouth.", icon: "masks", tone: "primary", stress: 9, caffeine: 4, meetings: 2, email: 4 },
      { key: "B", text: "Post a passive-aggressive kitchen note.", icon: "sticky_note_2", tone: "tertiary", stress: 6, caffeine: 2, meetings: 0, email: 8 },
      { key: "C", text: "Escalate to facilities. Formally.", icon: "gavel", tone: "primary", stress: 11, caffeine: 6, meetings: 6, email: 6 },
      { key: "D", text: "Work from the stairwell for a week.", icon: "stairs", tone: "error", stress: 13, caffeine: 10, meetings: 0, email: 12 },
    ],
  },
  {
    prompt: "You're offered a promotion: same pay, triple responsibility.",
    choices: [
      { key: "A", text: "Accept. The title is the reward.", icon: "workspace_premium", tone: "primary", stress: 18, caffeine: 18, meetings: 18, email: 6 },
      { key: "B", text: "Negotiate. Politely. Firmly.", icon: "payments", tone: "tertiary", stress: 10, caffeine: 8, meetings: 8, email: 2 },
      { key: "C", text: "Ask for a written scope first.", icon: "description", tone: "primary", stress: 8, caffeine: 6, meetings: 6, email: 4 },
      { key: "D", text: "Decline and update your CV instead.", icon: "rocket_launch", tone: "error", stress: 5, caffeine: 4, meetings: 0, email: 10 },
    ],
  },
];

export type Results = {
  survival: number;
  caffeine: number;
  meetings: number;
  email: number;
  stress: number;
};

export const DEFAULT_RESULTS: Results = {
  survival: 78,
  caffeine: 92,
  meetings: 85,
  email: 64,
  stress: 45,
};

const STORAGE_KEY = "corporate-chaos-results";

const clamp = (n: number) => Math.max(5, Math.min(99, Math.round(n)));

export function scoreRun(choices: Choice[]): Results {
  const sum = (k: "stress" | "caffeine" | "meetings" | "email") =>
    choices.reduce((acc, c) => acc + c[k], 0);
  const stress = clamp((sum("stress") / (choices.length * 18)) * 100);
  return {
    stress,
    caffeine: clamp(30 + (sum("caffeine") / (choices.length * 22)) * 100),
    meetings: clamp(20 + (sum("meetings") / (choices.length * 18)) * 100),
    email: clamp(20 + (sum("email") / (choices.length * 20)) * 100),
    survival: clamp(100 - stress * 0.6),
  };
}

export function saveResults(results: Results) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(results));
  } catch {
    /* storage unavailable */
  }
}

export function loadResults(): Results | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Results) : null;
  } catch {
    return null;
  }
}

export function severity(value: number): string {
  if (value >= 85) return "CRITICAL";
  if (value >= 70) return "SEVERE";
  if (value >= 50) return "ELEVATED";
  return "SUSPICIOUSLY CALM";
}