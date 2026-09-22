"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import { nhtqMarkup } from "./content";

export default function ClientPage() {
  return (
    <MonaCloneRuntime
      kind="nhtq"
      cssHref="/software-clone/nhtq/page.css"
      markup={nhtqMarkup}
    />
  );
}
