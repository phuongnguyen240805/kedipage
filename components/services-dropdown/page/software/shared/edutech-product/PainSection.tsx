import SplitHeading from "./SplitHeading";
import { PainItem, ProductImage } from "./types";

type Props = {
  eyebrow: string;
  titleLines: string[];
  lead: string;
  mascot: ProductImage;
  items: PainItem[];
};

export default function PainSection({ eyebrow, titleLines, lead, mascot, items }: Props) {
  return (
    <section className="e-sec e-mat-nhat e-cheo" id="cho-tac">
      <div className="e-wrap">
        <p className="e-eyebrow" data-fade="">{eyebrow}</p>
        <SplitHeading ariaLabel={titleLines.join(" ")} lines={titleLines} style={{ maxWidth: "22ch", marginTop: 14 }} />
        <p className="e-lead" data-fade="" style={{ maxWidth: "62ch", marginTop: 16 }}>{lead}</p>
        <img className="e-gau-muc ko-pain-mascot" src={mascot.src} alt={mascot.alt} width="448" height="448" loading="lazy" />
        <div className="e-ban" id="e-giay">
          {items.map((item, index) => (
            <article className="e-to" data-stag="" key={item.title}>
              <div className="e-to-vong">{item.kicker}</div>
              <div className="e-to-so">{String(index + 1).padStart(2, "0")}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
