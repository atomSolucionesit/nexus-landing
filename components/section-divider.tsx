interface SectionDividerProps {
  flip?: boolean;
  variant?: "wave" | "diagonal" | "glow";
}

export function SectionDivider({ flip = false, variant = "wave" }: SectionDividerProps) {
  if (variant === "glow") {
    return <div className="section-divider mx-auto max-w-4xl" />;
  }

  if (variant === "diagonal") {
    return (
      <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} style={{ height: "40px" }}>
        <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,40 1440,0 1440,40" fill="oklch(0.11 0.025 265)" fillOpacity="0.5" />
          <line x1="0" y1="40" x2="1440" y2="0" stroke="oklch(0.62 0.22 255)" strokeOpacity="0.15" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  // wave (default)
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} style={{ height: "48px", marginBottom: "-2px" }}>
      <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
          fill="oklch(0.11 0.025 265)"
          fillOpacity="0.4"
        />
        <path
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24"
          fill="none"
          stroke="oklch(0.62 0.22 255)"
          strokeOpacity="0.2"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
