import type { ReactNode } from "react";

interface HudPanelProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function HudPanel({ title, children, className = "" }: HudPanelProps) {
  return (
    <div className={`hud-panel ${className}`}>
      <span className="hud-corner hud-corner--tl" />
      <span className="hud-corner hud-corner--tr" />
      <span className="hud-corner hud-corner--bl" />
      <span className="hud-corner hud-corner--br" />
      {title && <div className="hud-panel__title">{title}</div>}
      <div className="hud-panel__body">{children}</div>
    </div>
  );
}
