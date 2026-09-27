"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import VerticalProductFrame from "../shared/VerticalProductFrame";
import { nhtqMarkup } from "./content";

export default function ClientPage() {
  return (
    <VerticalProductFrame product="nhtq">
      <MonaCloneRuntime
        kind="nhtq"
        cssHref="/software-clone/nhtq/page.css"
        markup={nhtqMarkup}
      />
    </VerticalProductFrame>
  );
}
