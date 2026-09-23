import SplitHeading from "./SplitHeading";
import { RoadmapStep } from "./types";

type Props = { eyebrow: string; titleLines: string[]; lead: string; steps: RoadmapStep[] };

export default function RoadmapSection({ eyebrow, titleLines, lead, steps }: Props) {
  return (
    <section className="e-sec e-mat-nhat" id="lo-trinh">
      <div className="e-wrap">
        <p className="e-eyebrow" data-fade="">{eyebrow}</p>
        <SplitHeading ariaLabel={titleLines.join(" ")} lines={titleLines} style={{ maxWidth: "21ch", marginTop: 14 }} />
        <p className="e-lead" data-fade="" style={{ maxWidth: "58ch", marginTop: 14 }}>{lead}</p>
        <div className="e-thang" id="e-thang">
          <svg aria-hidden="true" className="e-thang-svg" height="267" id="e-thang-svg" viewBox="0 0 1232 267" width="1232"><defs><linearGradient id="eThang" x1="0" x2="1" y1="1" y2="0"><stop offset="0" stopColor="#2f4fe0" /><stop offset=".55" stopColor="#f41e92" /><stop offset="1" stopColor="#f41e92" /></linearGradient></defs><path stroke="url(#eThang)" /></svg>
          {steps.map((step, index) => (
            <article className="e-buoc" data-stag="" key={step.title}>
              <span className="e-buoc-so">BƯỚC {String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3><p>{step.description}</p><span className="e-buoc-tg">{step.meta}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
