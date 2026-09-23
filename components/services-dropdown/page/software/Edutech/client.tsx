"use client";

import EdutechMotionRuntime from "../shared/EdutechMotionRuntime";
import { getProductMascotSrc, kediMascotMotionCss, replaceLegacyGoldenMascots } from "../shared/edutech-product/mascots";
import { kediProductTypographyCss } from "../shared/edutech-product/style";
import { kediLmsMarkup } from "./kedi-lms-content";
import { kediLmsCss } from "./kedi-lms-style";
import { kediLmsMotionScript, kediLmsRevealScript } from "./kedi-lms-motion";

const KEDI_LMS_AI_ASSET_REPLACEMENTS: ReadonlyArray<readonly [string, string]> = [
  ["/kedi-lms/gau-lien-lac.png", "/kedi-lms/kedi-lien-lac.png"],
  ["/kedi-lms/gau-luyen-thi.png", "/kedi-lms/kedi-luyen-thi.png"],
  ["/kedi-lms/gau-tro-giang.png", "/kedi-lms/kedi-tro-giang.png"],
  ["/kedi-lms/kedi-edutech-og.webp", "/kedi-lms/kedi-edutech-hero-ai.webp"],
  [
    "/kedi-lms/kedi-edutech-thoi-khoa-bieu.webp",
    "/kedi-lms/kedi-edutech-schedule-ai.webp",
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
      css={kediLmsCss + (routeKey ? kediProductTypographyCss : "") + kediMascotMotionCss}
      revealScript={kediLmsRevealScript}
      motionScript={resolvedMotionScript}
      markup={resolvedMarkup}
    />
  );
}
