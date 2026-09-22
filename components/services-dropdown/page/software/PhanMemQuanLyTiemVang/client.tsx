"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import { jmsMarkup } from "./content";

export default function ClientPage() {
  return (
    <MonaCloneRuntime
      kind="jms"
      cssHref="/software-clone/jms/page.css"
      markup={jmsMarkup}
    />
  );
}
