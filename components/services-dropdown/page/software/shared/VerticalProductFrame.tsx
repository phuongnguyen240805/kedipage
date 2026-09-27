import type { ReactNode } from "react";
import { verticalSolutionCss } from "./vertical-solution-signatures";

export type VerticalProductKey =
  | "nhtq"
  | "skillhub"
  | "jms"
  | "tools-ngon"
  | "restaurant-ai"
  | "edutech";

type Props = {
  product: VerticalProductKey;
  children: ReactNode;
};

/**
 * Presentation-only frame for legacy/vertical software pages.
 * Existing markup and copy stay untouched; the frame supplies a KEDI visual
 * identity layer after the legacy stylesheet so overrides remain predictable.
 */
export default function VerticalProductFrame({ product, children }: Props) {
  return (
    <div className="kedi-vertical-product" data-vertical-product={product}>
      {children}
      <style dangerouslySetInnerHTML={{ __html: verticalSolutionCss }} />
    </div>
  );
}
