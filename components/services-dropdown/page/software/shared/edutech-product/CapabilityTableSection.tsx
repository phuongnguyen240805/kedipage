import type React from "react";
import SplitHeading from "./SplitHeading";
import { CapabilityRow } from "./types";

type Props = {
  productName?: string;
  eyebrow: string;
  titleLines: string[];
  lead: string;
  chips: string[];
  rows: CapabilityRow[];
  caption?: string;
  valueHeader?: string;
  whyHeader?: string;
};

export default function CapabilityTableSection({
  productName = "Kedi Outreach",
  eyebrow,
  titleLines,
  lead,
  chips,
  rows,
  caption,
  valueHeader,
  whyHeader,
}: Props) {
  const displayNumber = eyebrow.match(/^(\d+)/)?.[1] ?? "05";
  return (
    <section className="e-sec e-mat-nhat" id="nen-tang">
      <div className="e-wrap">
        <p className="e-eyebrow" data-fade="">{eyebrow}</p>
        <SplitHeading ariaLabel={titleLines.join(" ")} lines={titleLines} style={{ maxWidth: "22ch", marginTop: 14 }} />
        <p className="e-lead" data-fade="" style={{ maxWidth: "58ch", marginTop: 14 }}>{lead}</p>
        <div aria-hidden="true" className="e-so-lon">{displayNumber}</div>
        <div aria-hidden="true" className="e-chip-bay">
          {chips.slice(0, 5).map((chip, index) => (
            <i key={chip} style={{ "--x": `${4 + index * 12}%`, "--y": `${(index * 21) % 80}%`, "--t": `${6.2 + index * .35}s`, "--d": `${-.4 - index * .9}s` } as React.CSSProperties}>{chip}</i>
          ))}
        </div>
        <div className="e-tbl-box" data-fade="">
          <table className="e-tbl">
            <caption>{caption ?? `Capability map của ${productName} theo từng nhóm tác vụ trong workflow.`}</caption>
            <thead><tr><th scope="col">Hạng mục</th><th scope="col">{valueHeader ?? productName}</th><th scope="col">{whyHeader ?? "Ý nghĩa trong workflow"}</th></tr></thead>
            <tbody>
              {rows.map((row) => <tr key={row.label}><th scope="row">{row.label}</th><td><b>{row.value}</b></td><td>{row.why}</td></tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
