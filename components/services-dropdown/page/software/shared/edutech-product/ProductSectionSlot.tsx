import type { ReactNode } from "react";
import type { ProductSectionKey } from "./types";

type Props = {
  sectionKey: ProductSectionKey;
  index: number;
  children: ReactNode;
};

/**
 * Semantic wrapper around a reusable product section.
 * Layout CSS can target the business meaning of a section without coupling to
 * the implementation details inside HeroSection/WorkflowSection/etc.
 */
export default function ProductSectionSlot({ sectionKey, index, children }: Props) {
  return (
    <div
      className={`ko-section-slot ko-section-slot--${sectionKey}`}
      data-product-section={sectionKey}
      data-product-section-index={index}
    >
      {children}
    </div>
  );
}
