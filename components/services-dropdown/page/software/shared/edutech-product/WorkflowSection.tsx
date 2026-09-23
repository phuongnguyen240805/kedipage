import React from "react";
import SplitHeading from "./SplitHeading";
import { WorkflowItem } from "./types";

type Props = {
  productName?: string;
  eyebrow: string;
  titleLines: string[];
  lead: string;
  items: WorkflowItem[];
  humanSummary: string;
  workflowLabel?: string;
};

export default function WorkflowSection({ productName = "Kedi Outreach", eyebrow, titleLines, lead, items, humanSummary, workflowLabel }: Props) {
  const humanCount = items.filter((item) => item.keepHuman).length;
  return (
    <section className="e-sec e-mat-nhat" id="buoi-toi">
      <div className="e-wrap">
        <p className="e-eyebrow" data-fade="">{eyebrow}</p>
        <SplitHeading ariaLabel={titleLines.join(" ")} lines={titleLines} style={{ maxWidth: "22ch", marginTop: 16 }} />
        <p className="e-lead" data-fade="" style={{ maxWidth: "60ch", marginTop: 14 }}>{lead}</p>
        <div aria-hidden="true" className="e-phieu" id="e-phieu">
          {items.map((_, index) => <i key={index} style={{ "--x": `${5 + (index * 13) % 55}%`, "--y": `${(index * 17) % 65}%`, "--r": `${index % 2 ? 7 : -8}deg`, "--d": `${200 + index * 300}ms` } as React.CSSProperties} />)}
        </div>
        <div className="e-toi" data-pane="" id="e-toi">
          <div className="e-toi-top">
            <div className="e-toi-dem" id="e-toi-dem">{humanCount}</div>
            <div><b>việc giữ lại cho con người</b><span>{workflowLabel ?? `${productName} · workflow hỗ trợ vận hành`}</span></div>
            <div aria-hidden="true" className="e-toi-thanh"><i id="e-toi-p" /></div>
            <p className="e-toi-day">{humanSummary}</p>
          </div>
          <ul className="e-toi-ds">
            {items.map((item) => (
              <li className={`e-viec${item.keepHuman ? " giu" : ""}`} key={item.title}>
                <span aria-hidden="true" className="e-viec-o" />
                <span className="e-viec-ten">{item.keepHuman ? item.title : <em>{item.title}</em>}</span>
                <span className="e-viec-ai">{item.owner ?? (item.keepHuman ? "Con người" : productName)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
