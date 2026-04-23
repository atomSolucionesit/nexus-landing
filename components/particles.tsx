"use client";

const PARTICLES = [
  { size: 3, top: "15%", left: "8%",  duration: "7s",  delay: "0s" },
  { size: 2, top: "70%", left: "5%",  duration: "9s",  delay: "1s" },
  { size: 4, top: "30%", left: "92%", duration: "8s",  delay: "2s" },
  { size: 2, top: "80%", left: "88%", duration: "11s", delay: "0.5s" },
  { size: 3, top: "50%", left: "15%", duration: "10s", delay: "3s" },
  { size: 2, top: "20%", left: "75%", duration: "6s",  delay: "1.5s" },
  { size: 4, top: "60%", left: "50%", duration: "13s", delay: "4s" },
  { size: 2, top: "10%", left: "40%", duration: "8s",  delay: "2.5s" },
  { size: 3, top: "85%", left: "30%", duration: "9s",  delay: "0.8s" },
  { size: 2, top: "40%", left: "60%", duration: "12s", delay: "3.5s" },
];

export function Particles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            boxShadow: `0 0 ${p.size * 3}px ${p.size}px oklch(0.62 0.22 255 / 0.4)`,
          }}
        />
      ))}
    </div>
  );
}
