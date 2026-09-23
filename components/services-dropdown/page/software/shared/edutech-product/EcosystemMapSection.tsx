import type React from "react";
import SplitHeading from "./SplitHeading";
import { MapNode } from "./types";

type Props = {
  eyebrow: string;
  titleLines: string[];
  lead: string;
  centerTitle: string;
  centerSubtitle: string;
  nodes: MapNode[];
};

export default function EcosystemMapSection(props: Props) {
  return (
    <section className="e-sec e-mat-tim e-cong" id="ban-do" style={{ "--_next": "var(--nhat)" } as React.CSSProperties}>
      <div className="e-wrap">
        <p className="e-eyebrow" data-fade="">{props.eyebrow}</p>
        <SplitHeading ariaLabel={props.titleLines.join(" ")} lines={props.titleLines} style={{ maxWidth: "23ch", marginTop: 14 }} />
        <p className="e-lead" data-fade="" style={{ maxWidth: "60ch", marginTop: 14 }}>{props.lead}</p>
        <div className="e-troi" id="e-troi">
          <svg aria-hidden="true" className="e-troi-svg" height="600" id="e-troi-svg" viewBox="0 0 1232 600" width="1232">
            <defs><linearGradient id="eLine" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#fecd1f" /><stop offset=".5" stopColor="#f59034" /><stop offset="1" stopColor="#f41e92" /></linearGradient></defs>
          </svg>
          <div className="e-loi"><b>{props.centerTitle}</b><span>{props.centerSubtitle}</span></div>
          {props.nodes.map((node, index) => (
            <a
              className="e-nut"
              href="#giao-dien"
              key={node.title}
              style={{ "--tn": `${6.4 + index * 0.45}s`, "--dn": `${-index * 1.1}s` } as React.CSSProperties}
            >
              <i>{index + 1}</i><b>{node.title}</b><span>{node.description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
