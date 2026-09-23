"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import { boAiAgentMarkup } from "./content";

export default function ClientBoAiAgent() {
  return (
    <MonaCloneRuntime
      kind="aiagent"
      cssHref="/software-clone/ai-agent/page.css"
      markup={boAiAgentMarkup}
    />
  );
}
