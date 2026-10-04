"use client";
import { isValidElement, type CSSProperties, type ReactNode } from 'react';

interface GoldenFrameProps {
  children: ReactNode;
  className?: string;
  radius?: string;
}

export default function Boderyelow({ children, className = "", radius = 'var(--glass-panel-radius,20px)' }: GoldenFrameProps) {
  // Glass panels already own their border; do not add a second decorative frame.
  if (isValidElement<{ 'data-glass'?: string }>(children) && children.props['data-glass']) {
    return <div className={`relative w-full ${className}`}>{children}</div>;
  }
  return (
    <div className={`kedi-golden-frame relative w-full h-full ${className}`} style={{ '--frame-radius': radius } as CSSProperties}>
      <div className="kedi-frame-content relative z-10 h-full">
        {children}
      </div>
    </div>
  );
}
