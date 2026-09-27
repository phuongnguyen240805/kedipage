"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import VerticalProductFrame from "../shared/VerticalProductFrame";
import { jmsMarkup } from "./content";

export default function ClientPage() {
  return (
    <VerticalProductFrame product="jms">
      <MonaCloneRuntime
        kind="jms"
        cssHref="/software-clone/jms/page.css"
        markup={jmsMarkup}
      />
    </VerticalProductFrame>
  );
}
