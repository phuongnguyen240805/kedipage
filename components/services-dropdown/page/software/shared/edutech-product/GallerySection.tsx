import type React from "react";
import ProductMedia from "./ProductMedia";
import { GalleryItem } from "./types";

type Props = { eyebrow: string; quote: string; sourceNote: string; items: GalleryItem[] };

export default function GallerySection({ eyebrow, quote, sourceNote, items }: Props) {
  return (
    <section className="e-sec e-mat-tim2 e-cong" id="giao-dien" style={{ "--_next": "var(--nhat)" } as React.CSSProperties}>
      <div className="e-wrap">
        <div className="e-kh ko-gallery-heading">
          <div>
            <p className="e-eyebrow" data-fade="">{eyebrow}</p>
            <blockquote className="e-trich" data-fade="" style={{ margin: "20px 0 0" }}>{quote}</blockquote>
            <div className="e-trich-ai" data-fade=""><i /><div><b>Ảnh giao diện tham chiếu</b><span>{sourceNote}</span></div></div>
          </div>
          <div className="e-logos">
            {items.slice(0, 6).map((item) => <a href={`#shot-${item.title.replace(/\s+/g, "-").toLowerCase()}`} key={item.title}><b>{item.title}</b><span>{item.description}</span></a>)}
          </div>
        </div>
        <div className="ko-gallery-grid">
          {items.map((item) => (
            <figure className="ko-shot e-khung" id={`shot-${item.title.replace(/\s+/g, "-").toLowerCase()}`} key={item.title} data-pane="">
              <ProductMedia {...item} />
              <figcaption><b>{item.title}</b><span>{item.description}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
