import SplitHeading from "./SplitHeading";
import { ProductImage } from "./types";

type Props = {
  productName?: string;
  eyebrow: string;
  titleLines: string[];
  lead: string;
  mascot: ProductImage;
  sideTitle?: string;
  sideText?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

export default function CtaSection({
  productName = "Kedi Outreach",
  eyebrow,
  titleLines,
  lead,
  mascot,
  sideTitle,
  sideText,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section className="e-sec e-mat-tim" id="lien-he">
      <div className="e-wrap"><div className="e-cta" data-pane="">
        <div className="e-cta-noi"><p className="e-eyebrow" data-fade="">{eyebrow}</p><SplitHeading ariaLabel={titleLines.join(" ")} lines={titleLines} /><p className="e-lead" data-fade="">{lead}</p><div className="e-cta-do"><a className="e-btn e-btn--phan" href={primaryCta?.href ?? "#mo-dau"}>{primaryCta?.label ?? "Xem lại tổng quan"}</a><a className="e-btn e-btn--vien" href={secondaryCta?.href ?? "#giao-dien"}>{secondaryCta?.label ?? "Xem ảnh giao diện"}</a></div></div>
        <div className="e-cta-goi"><span className="e-cta-nhan">{productName}</span><span className="e-cta-hot ko-cta-title">{sideTitle ?? productName}</span><p className="e-cta-phu">{sideText ?? lead}</p><img alt={mascot.alt} className="e-cta-gau ko-cta-mascot" src={mascot.src} width="448" height="448" loading="lazy" /></div>
      </div></div>
    </section>
  );
}
