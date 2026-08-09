import zenMaster from "@/assets/ChatGPT_Image_Aug_10_2026_12_00_53_AM.png.asset.json";
import hrPeacekeeper from "@/assets/ChatGPT_Image_Aug_10_2026_12_01_00_AM.png.asset.json";
import strategyWizard from "@/assets/ChatGPT_Image_Aug_10_2026_12_01_06_AM.png.asset.json";
import taskJuggler from "@/assets/ChatGPT_Image_Aug_10_2026_12_01_12_AM.png.asset.json";
import deadlineKraken from "@/assets/ChatGPT_Image_Aug_10_2026_12_01_18_AM.png.asset.json";
import synergySorcerer from "@/assets/ChatGPT_Image_Aug_10_2026_12_01_22_AM.webp.asset.json";
import overtimeOverlord from "@/assets/ChatGPT_Image_Aug_10_2026_12_01_28_AM.webp.asset.json";
import corporateRocket from "@/assets/ChatGPT_Image_Aug_10_2026_12_01_58_AM.webp.asset.json";
import microLion from "@/assets/ChatGPT_Image_Aug_10_2026_12_02_04_AM.webp.asset.json";
import type { Results } from "./chaos-game";

export type Persona = {
  id: string;
  icon: string;
  name: string;
  title: string;
  trait: string;
  threat: string;
  image: string;
  alt: string;
};

export const PERSONAS: Persona[] = [
  {
    id: "zen-master",
    icon: "self_improvement",
    name: "Zen Master Sloth",
    title: "Grandmaster of Minimal Effort & Maximum Chill",
    trait: "Meetings? Optional, maybe later, lol no. Slow is smooth, smooth is fast.",
    threat: "SUSPICIOUSLY CALM",
    image: zenMaster.url,
    alt: "Sloth in shirt and tie hanging in a cubicle holding a coffee mug, labelled Zen Master",
  },
  {
    id: "hr-peacekeeper",
    icon: "handshake",
    name: "HR Peacekeeper",
    title: "Diplomat Supreme",
    trait: "Guardian of harmony. Arrives with an olive branch and a policy PDF.",
    threat: "MILD",
    image: hrPeacekeeper.url,
    alt: "White dove with glasses and an HR lanyard holding an olive branch on a desk",
  },
  {
    id: "strategy-wizard",
    icon: "auto_awesome",
    name: "The Strategy Wizard",
    title: "Architect of Abstract Vision & Slide Magic",
    trait: "Abstract today. Action tomorrow. Legacy forever. Deck arrives never.",
    threat: "ELEVATED",
    image: strategyWizard.url,
    alt: "Owl in a wizard hat and suit conjuring a glowing strategic vision dashboard in a jungle",
  },
  {
    id: "task-juggler",
    icon: "tab",
    name: "Task Juggler",
    title: "Multitasking Virtuoso & Master of 40 Open Tabs",
    trait: "Not busy. Just productively overloaded. Focus mode? Nope.",
    threat: "SEVERE",
    image: taskJuggler.url,
    alt: "Purple octopus in a tie juggling laptop, phone, coffee and forty browser tabs",
  },
  {
    id: "deadline-kraken",
    icon: "schedule",
    name: "Deadline Kraken",
    title: "Apex Handler of Last-Minute Everything",
    trait: "Busy is my superpower. Another deadline survived, barely.",
    threat: "CRITICAL",
    image: deadlineKraken.url,
    alt: "Orange octopus in a shirt and tie handling phone, laptops and a wall of browser tabs",
  },
  {
    id: "synergy-sorcerer",
    icon: "campaign",
    name: "The Synergy Sorcerer",
    title: "Conductor of Keynotes & Executive Alignment",
    trait: "It's not just a meeting. It's a movement. Speak louder, use bigger words.",
    threat: "SEVERE",
    image: synergySorcerer.url,
    alt: "Monkey in a purple suit holding a microphone on stage conjuring golden sparks",
  },
  {
    id: "overtime-overlord",
    icon: "bedtime",
    name: "Overtime Overlord",
    title: "Master of Late Night Commits & Endless Grind",
    trait: "3:14 AM. One more commit. Tomorrow I will sleep (maybe).",
    threat: "CRITICAL",
    image: overtimeOverlord.url,
    alt: "Owl in a hoodie coding on a laptop at 3:14 AM under a full moon",
  },
  {
    id: "corporate-rocket",
    icon: "rocket_launch",
    name: "The Corporate Rocket",
    title: "High-Velocity Disrupter of Established Norms",
    trait: "Mission: disrupt, outperform, repeat. Good enough isn't in the vocabulary.",
    threat: "ELEVATED",
    image: corporateRocket.url,
    alt: "Rocket wearing a blazer and red tie launching from a jungle desk",
  },
  {
    id: "micromanagement-lion",
    icon: "search",
    name: "The Micromanagement Lion",
    title: "Apex Predator of Calendar Syncs & Status Updates",
    trait: "Details. Discipline. Deadlines. Excuses not allowed. CC'd for visibility.",
    threat: "CRITICAL",
    image: microLion.url,
    alt: "Lion in a suit inspecting a daily status report with a magnifying glass",
  },
];

export function matchPersona(r: Results): Persona {
  const pick = (id: string) => PERSONAS.find((p) => p.id === id)!;
  const max = Math.max(r.caffeine, r.meetings, r.email, r.stress);
  if (r.stress <= 30) return pick("zen-master");
  if (max === r.email && r.email >= 70) return pick("hr-peacekeeper");
  if (max === r.meetings && r.meetings >= 80) return pick("micromanagement-lion");
  if (max === r.meetings) return pick("synergy-sorcerer");
  if (max === r.caffeine && r.caffeine >= 90) return pick("overtime-overlord");
  if (max === r.caffeine) return pick("task-juggler");
  if (r.stress >= 80) return pick("deadline-kraken");
  if (r.survival >= 70) return pick("corporate-rocket");
  return pick("strategy-wizard");
}
