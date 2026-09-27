"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import VerticalProductFrame from "../shared/VerticalProductFrame";
import { skillhubMarkup } from "./content";

export default function ClientPage() {
  return (
    <VerticalProductFrame product="skillhub">
      <MonaCloneRuntime
        kind="skillhub"
        cssHref="/software-clone/skillhub/page.css"
        markup={skillhubMarkup}
      />
    </VerticalProductFrame>
  );
}
