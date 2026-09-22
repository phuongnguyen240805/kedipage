"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import { skillhubMarkup } from "./content";

export default function ClientPage() {
  return (
    <MonaCloneRuntime
      kind="skillhub"
      cssHref="/software-clone/skillhub/page.css"
      markup={skillhubMarkup}
    />
  );
}
