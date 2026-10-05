"use client";

import EdutechMotionRuntime from "../shared/EdutechMotionRuntime";
import { coreProductExperienceCss } from "../shared/core-product-experience";
import { getProductMascotSrc, kediMascotMotionCss, replaceLegacyGoldenMascots } from "../shared/edutech-product/mascots";
import { softwareLayoutArchetypeCss } from "../shared/software-layout-archetypes";
import { softwareVisualSignatureCss } from "../shared/software-visual-signatures";
import { kediProductTypographyCss } from "../shared/edutech-product/style";
import { kediLmsMarkup } from "./kedi-lms-content";
import { kediLmsCss } from "./kedi-lms-style";
import { kediLmsMotionScript, kediLmsRevealScript } from "./kedi-lms-motion";

const KEDI_LMS_AI_ASSET_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  ["/kedi-lms/gau-lien-lac.png", "https://assets.kedi.media/images/b8c998b835361aa6fdca-533.webp"],
  ["/kedi-lms/gau-luyen-thi.png", "https://assets.kedi.media/images/54986f1f0efc6c552fd6-533.webp"],
  ["/kedi-lms/gau-tro-giang.png", "https://assets.kedi.media/images/186372e1f09dfa1a8a43-533.webp"],
  ["/kedi-lms/kedi-edutech-og.webp", "https://assets.kedi.media/images/0833456c1cd2af25b822-1536.webp"],
  [
    "/kedi-lms/kedi-edutech-thoi-khoa-bieu.webp",
    "https://assets.kedi.media/images/bc1ec43e233e53459ec9-1536.webp",
  ],
  ["Gấu KEDI", "Chó Golden KEDI"],
];

function withKediLmsAiAssets(source: string) {
  return KEDI_LMS_AI_ASSET_REPLACEMENTS.reduce(
    (result, [from, to]) => result.split(from).join(to),
    source,
  );
}

const kediLmsAiMarkup = withKediLmsAiAssets(kediLmsMarkup);
const kediLmsAiMotionScript = withKediLmsAiAssets(kediLmsMotionScript);

export default function ClientEdutech({ routeKey }: { routeKey?: string }) {
  const mascotSrc = routeKey ? getProductMascotSrc(routeKey) : undefined;
  const resolvedMarkup = mascotSrc ? replaceLegacyGoldenMascots(kediLmsAiMarkup, mascotSrc) : kediLmsAiMarkup;
  const resolvedMotionScript = mascotSrc ? replaceLegacyGoldenMascots(kediLmsAiMotionScript, mascotSrc) : kediLmsAiMotionScript;

  return (
    <EdutechMotionRuntime
      className={routeKey ? `kedi-lms-route kedi-product-route ${routeKey}-route` : "kedi-lms-route"}
      css={kediLmsCss + (routeKey ? kediProductTypographyCss : "") + softwareVisualSignatureCss + softwareLayoutArchetypeCss + (routeKey ? coreProductExperienceCss : "") + kediMascotMotionCss}
      revealScript={kediLmsRevealScript}
      motionScript={resolvedMotionScript}
      markup={resolvedMarkup}
    />
  );
}
