import SplitHeading from "./SplitHeading";
import { CompareColumn } from "./types";

type Props = { eyebrow: string; titleLines: string[]; lead: string; columns: CompareColumn[] };

export default function ComparisonSection({ eyebrow, titleLines, lead, columns }: Props) {
  const displayNumber = eyebrow.match(/^(\d+)/)?.[1] ?? "08";
  return (
    <section className="e-sec e-mat-tim" id="chi-phi">
      <div className="e-wrap">
        <p className="e-eyebrow" data-fade="">{eyebrow}</p>
        <SplitHeading ariaLabel={titleLines.join(" ")} lines={titleLines} style={{ maxWidth: "24ch", marginTop: 14 }} />
        <p className="e-lead" data-fade="" style={{ maxWidth: "60ch", marginTop: 14 }}>{lead}</p>
        <div aria-hidden="true" className="e-so-lon">{displayNumber}</div>
        <div className="e-vs">
          {columns.map((column) => (
            <div className={`e-vs-cot${column.accent ? " e-vs-cot--mona" : ""}`} key={column.title}>
              <span className="e-vs-nhan">{column.label}</span><h3>{column.title}</h3>
              <ul className="e-vs-ds">{column.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              <p className="e-vs-tong">{column.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
