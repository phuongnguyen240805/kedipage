"use client";

import React from "react";
import EdutechMotionRuntime from "../EdutechMotionRuntime";
import { kediLmsCss } from "../../Edutech/kedi-lms-style";
import { kediLmsMotionScript, kediLmsRevealScript } from "../../Edutech/kedi-lms-motion";
import CapabilityTableSection from "./CapabilityTableSection";
import ComparisonSection from "./ComparisonSection";
import CtaSection from "./CtaSection";
import EcosystemMapSection from "./EcosystemMapSection";
import FaqSection from "./FaqSection";
import GallerySection from "./GallerySection";
import HeroSection from "./HeroSection";
import Marquee from "./Marquee";
import ModuleBookSection from "./ModuleBookSection";
import PainSection from "./PainSection";
import RoadmapSection from "./RoadmapSection";
import WorkflowSection from "./WorkflowSection";
import { kediProductCss } from "./style";
import type { ProductLandingConfig, ProductSectionKey } from "./types";

type Props = { config: ProductLandingConfig };

export default function ProductLandingPage({ config }: Props) {
  const heroLines = config.hero.titleLines.map((line, index) =>
    index === config.hero.emphasisLine ? <em key={`${line}-${index}`}>{line}</em> : line,
  );

  const motionScript = kediLmsMotionScript
    .split("/kedi-lms/kedi-head-mark.png").join(config.motionMarkSrc ?? "/brand/kedi-icon.png")
    .split("/kedi-lms/gau-luyen-thi.png").join(config.motionMascotSrc ?? config.hero.mascot.src);

  const renderSection = (key: ProductSectionKey) => {
    switch (key) {
      case "marquee":
        return config.marquee ? <Marquee items={config.marquee} /> : null;
      case "pain":
        return config.pain ? <PainSection {...config.pain} /> : null;
      case "modules":
        return config.modules ? <ModuleBookSection eyebrow={config.modules.eyebrow} title={config.modules.title} modules={config.modules.items} /> : null;
      case "workflow":
        return config.workflow ? <WorkflowSection productName={config.productName} {...config.workflow} /> : null;
      case "ecosystem":
        return config.ecosystem ? <EcosystemMapSection {...config.ecosystem} /> : null;
      case "capability":
        return config.capability ? <CapabilityTableSection productName={config.productName} {...config.capability} /> : null;
      case "gallery":
        return config.gallery ? <GallerySection {...config.gallery} /> : null;
      case "roadmap":
        return config.roadmap ? <RoadmapSection {...config.roadmap} /> : null;
      case "comparison":
        return config.comparison ? <ComparisonSection {...config.comparison} /> : null;
      case "faq":
        return config.faq ? <FaqSection {...config.faq} /> : null;
      case "cta":
        return config.cta ? <CtaSection productName={config.productName} {...config.cta} /> : null;
      default:
        return null;
    }
  };

  return (
    <EdutechMotionRuntime
      className={`kedi-product-route ${config.routeClass ?? ""}`.trim()}
      css={kediLmsCss + kediProductCss + (config.css ?? "")}
      revealScript={kediLmsRevealScript}
      motionScript={motionScript}
    >
      <div className="edu" data-kedi-product={config.slug} id={`${config.slug}-main`}>
        <HeroSection
          productName={config.productName}
          eyebrow={config.hero.eyebrow}
          titleLabel={config.hero.titleLines.join(" ")}
          titleLines={heroLines}
          lead={config.hero.lead}
          primaryCta={config.hero.primaryCta}
          secondaryCta={config.hero.secondaryCta}
          statusNote={config.hero.statusNote}
          mainImage={config.hero.mainImage}
          secondaryImage={config.hero.secondaryImage}
          floatingBadges={config.hero.floatingBadges}
          mascot={config.hero.mascot}
          stats={config.hero.stats}
        />
        {config.sectionOrder.map((key, index) => (
          <React.Fragment key={`${key}-${index}`}>{renderSection(key)}</React.Fragment>
        ))}
      </div>
    </EdutechMotionRuntime>
  );
}
