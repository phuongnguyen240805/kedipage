import type React from "react";
import SplitHeading from "./SplitHeading";
import { FaqItem, ProductImage } from "./types";

type Props = {
  eyebrow: string;
  titleLines: string[];
  lead: string;
  mascot: ProductImage;
  items: FaqItem[];
  closingTitle?: string;
  closingText?: string;
};

export default function FaqSection({ eyebrow, titleLines, lead, mascot, items, closingTitle, closingText }: Props) {
  return (
    <section className="e-sec e-mat-nhat e-cong" id="cau-hoi" style={{ "--_next": "#1b2a6b" } as React.CSSProperties}>
      <div className="e-wrap"><div className="e-hoi-luoi">
        <div className="e-hoi-trai"><p className="e-eyebrow" data-fade="">{eyebrow}</p><SplitHeading ariaLabel={titleLines.join(" ")} lines={titleLines} style={{ marginTop: 16 }} /><p className="e-lead" data-fade="" style={{ marginTop: 14 }}>{lead}</p><img alt={mascot.alt} className="e-hoi-gau ko-faq-mascot" src={mascot.src} width="448" height="448" loading="lazy" /></div>
        <div className="e-hoi">
          {items.map((item, index) => <details data-stag="" open={index === 0} key={item.question}><summary>{item.question}</summary><div className="e-hoi-tl">{item.answer}</div></details>)}
          <a className="e-hoi-chot" data-stag="" href="#lien-he"><i aria-hidden="true" /><span className="e-an">Xem bước tiếp theo</span><span style={{ display: "block" }}><b>{closingTitle ?? "Cần map thêm workflow thực tế?"}</b><span>{closingText ?? "Giữ cách vận hành hiện tại, Kedi sẽ cấu hình theo luồng thực tế thay vì bắt đội ngũ đổi công cụ chỉ để hợp với phần mềm."}</span></span></a>
        </div>
      </div></div>
    </section>
  );
}
