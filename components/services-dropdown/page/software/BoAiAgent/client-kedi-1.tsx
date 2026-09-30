"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import { boAiAgentMarkup } from "./content";

const BRAND_REPLACEMENTS = [
  ["KEDI · Bộ AI Agent &amp; Phần mềm 2.0", "KEDI 1.0 · Bộ AI Agent"],
  ["KEDI OS · Phần mềm 2.0", "KEDI 1.0"],
  ["KEDI OS, một Phần mềm 2.0", "KEDI 1.0"],
  ["03 · KEDI OS · Phần mềm 2.0", "03 · KEDI 1.0"],
  ["KEDI Sales OS 2.0", "KEDI Sales 1.0"],
  ["KEDI Web OS 2.0", "KEDI Web 1.0"],
  ["KEDI Commerce OS 2.0", "KEDI Commerce 1.0"],
  ["KEDI Legal OS 2.0", "KEDI Legal 1.0"],
  ["KEDI Care OS 2.0", "KEDI Care 1.0"],
  ["KEDI eLearning OS 2.0", "KEDI eLearning 1.0"],
  ["KEDI HRM OS 2.0", "KEDI HRM 1.0"],
  ["KEDI OS 2.0", "KEDI 1.0"],
  ["Đầu não OS 2.0", "KEDI 1.0"],
  ["Web OS 2.0", "KEDI Web 1.0"],
  ["Sales OS 2.0", "KEDI Sales 1.0"],
  ["Commerce OS 2.0", "KEDI Commerce 1.0"],
  ["Legal OS 2.0", "KEDI Legal 1.0"],
  ["Care OS 2.0", "KEDI Care 1.0"],
  ["eLearning OS 2.0", "KEDI eLearning 1.0"],
  ["HRM OS 2.0", "KEDI HRM 1.0"],
  ["KEDI OS phía sau", "KEDI 1.0 phía sau"],
  ["KEDI OS", "KEDI 1.0"],
] as const;

const kedi10Markup = BRAND_REPLACEMENTS.reduce(
  (html, [from, to]) => html.replaceAll(from, to),
  boAiAgentMarkup
);

export default function ClientBoAiAgentKedi10() {
  return (
    <MonaCloneRuntime
      kind="aiagent"
      cssHref="/software-clone/ai-agent/page.css"
      markup={kedi10Markup}
    />
  );
}
