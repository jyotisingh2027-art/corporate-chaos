import { useEffect, useRef } from "react";

const EMOJIS = ["📧", "☕", "📎", "📉", "💼", "💻", "🗑️", "📞"];

export function EmojiMatrix() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const fontSize = 24;
    let drops: number[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops = new Array(Math.ceil(canvas.width / fontSize)).fill(1);
    };
    resize();
    window.addEventListener("resize", resize);

    const id = window.setInterval(() => {
      ctx.fillStyle = "rgba(4, 23, 6, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "JetBrains Mono"`;
      for (let i = 0; i < drops.length; i++) {
        const text = EMOJIS[Math.floor(Math.random() * EMOJIS.length)] ?? "📧";
        const y = drops[i] ?? 1;
        ctx.fillStyle = Math.random() > 0.9 ? "#78dc77" : "#253a25";
        ctx.fillText(text, i * fontSize, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 1 : y + 1;
      }
    }, 50);

    return () => {
      window.clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-30"
    />
  );
}