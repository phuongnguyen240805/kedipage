import React from "react";
import SplitHeading from "./SplitHeading";
import ProductMedia from "./ProductMedia";
import { ProductImage, ProductStat } from "./types";

type Props = {
  productName?: string;
  eyebrow: string;
  titleLines: React.ReactNode[];
  titleLabel: string;
  lead: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  statusNote: string;
  mainImage: ProductImage;
  secondaryImage: ProductImage;
  floatingBadges: [string, string];
  mascot: ProductImage;
  stats: ProductStat[];
};

export default function HeroSection(props: Props) {
  const productName = props.productName ?? "Kedi Outreach";
  return (
    <section className="e-hero" id="mo-dau">
      <div aria-hidden="true" className="e-sao" />
      <div className="e-wrap">
        <div className="e-hero-grid">
          <div>
            <p className="e-eyebrow" data-fade="">{props.eyebrow}</p>
            <SplitHeading as="h1" ariaLabel={props.titleLabel} lines={props.titleLines} />
            <p className="e-lead" data-fade="">{props.lead}</p>
            <div className="e-hero-do">
              <a className="e-btn" href={props.primaryCta.href}>{props.primaryCta.label}</a>
              <a className="e-btn e-btn--vien" href={props.secondaryCta.href}>{props.secondaryCta.label}</a>
            </div>
            <p className="e-hero-xn" data-fade=""><i /><b>{productName}</b> · {props.statusNote}</p>
          </div>
          <div className="e-hero-vis" data-pane="">
            <figure className="e-anh e-khung">
              <ProductMedia {...props.mainImage} loading="eager" fetchPriority="high" />
              <figcaption className="e-anh-cap"><b>{productName}</b> · {props.mainImage.caption}</figcaption>
            </figure>
            <figure className="e-anh-phu">
              <ProductMedia {...props.secondaryImage} />
              <span>{props.secondaryImage.caption}</span>
            </figure>
            <div className="e-dau e-dau--a">{props.floatingBadges[0]}</div>
            <div className="e-dau e-dau--b">{props.floatingBadges[1]}</div>
          </div>
        </div>
        <img
          alt={props.mascot.alt}
          className="e-gau-lon ko-mascot"
          decoding="async"
          height="448"
          src={props.mascot.src}
          width="448"
        />
        <div className="e-hero-so">
          {props.stats.map((stat) => (
            <div data-stag="" key={stat.label}>
              <b>
                {stat.prefix}
                <span data-count={stat.value}>{stat.value}</span>
                {stat.suffix ? <em>{stat.suffix}</em> : null}
              </b>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
