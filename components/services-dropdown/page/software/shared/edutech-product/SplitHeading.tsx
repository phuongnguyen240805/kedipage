import React, { ReactNode } from "react";

type Tag = "h1" | "h2";

type Props = {
  as?: Tag;
  lines: ReactNode[];
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function SplitHeading({
  as = "h2",
  lines,
  ariaLabel,
  className = "",
  style,
}: Props) {
  const Tag = as;
  return (
    <Tag aria-label={ariaLabel} className={`e-rv ${className}`} data-split="1" style={style}>
      {lines.map((line, index) => (
        <div
          aria-hidden="true"
          className="line"
          key={index}
          style={{ position: "relative", display: "block", textAlign: "start" }}
        >
          <span style={{ "--d": `${index * 90}ms` } as React.CSSProperties}>{line}</span>
        </div>
      ))}
    </Tag>
  );
}
