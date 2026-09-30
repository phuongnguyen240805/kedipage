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
  [
    'Các <span class="bag-tg2">AI Agent</span> của KEDI',
    'Các <span class="bag-tg2">AI Agent</span> của Gâu Đần',
  ],
] as const;

const kedi10Markup = BRAND_REPLACEMENTS.reduce(
  (html, [from, to]) => html.replaceAll(from, to),
  boAiAgentMarkup
);

export default function ClientBoAiAgentKedi10() {
  return (
    <>
      <MonaCloneRuntime
        kind="aiagent"
        cssHref="/software-clone/ai-agent/page.css"
        markup={kedi10Markup}
      />

      <style jsx global>{`
        /* KEDI brand override for the "Danh sách / Các AI Agent" section only. */
        .mona-clone-root.mona-aiagent .bag.bag-list {
          --pu: #0b2d5b;
          --pu2: #174f85;
          --pu3: #2e76c5;
          --or: #b57e00;
          --or2: #ffc629;
          --ink: #0b2d5b;
          --ink2: #51657a;
          --ink3: #7b8b9c;
          --lav: #f4f6f9;
          --line: #dbe3ec;
          background: #f4f6f9 !important;
        }

        .mona-clone-root.mona-aiagent .bag.bag-list .bag-mast .bag-kick {
          color: #b57e00 !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-mast .bag-kick::before {
          background: #ffc629 !important;
          box-shadow: 0 0 0 calc(4px * var(--s)) rgba(255, 198, 41, 0.18) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-ghost {
          -webkit-text-stroke-color: rgba(11, 45, 91, 0.14) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-tg2 {
          background: linear-gradient(100deg, #0b2d5b 0%, #2e76c5 52%, #ffc629 100%) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          color: transparent !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-lead u {
          background: linear-gradient(transparent 62%, rgba(255, 198, 41, 0.38) 62%) !important;
        }

        .mona-clone-root.mona-aiagent .bag.bag-list .bag-pill-ban {
          color: #0b2d5b !important;
          background: rgba(255, 198, 41, 0.24) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-pill-xay {
          color: #174f85 !important;
          background: #e6eef8 !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-pill-noibo {
          color: #fff !important;
          background: #0b2d5b !important;
        }

        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-card {
          background: linear-gradient(160deg, #071a36 0%, #0b2d5b 58%, #174f85 100%) !important;
          box-shadow: 0 calc(44px * var(--s)) calc(80px * var(--s)) calc(-44px * var(--s)) rgba(7, 26, 54, 0.46) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-card::before {
          background: radial-gradient(circle, rgba(255, 198, 41, 0.34), transparent 68%) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-idx {
          color: rgba(255, 255, 255, 0.66) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-av {
          box-shadow: 0 0 0 calc(6px * var(--s)) rgba(255, 255, 255, 0.12),
            0 0 0 calc(15px * var(--s)) rgba(255, 198, 41, 0.12) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-role,
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-os li {
          color: rgba(255, 255, 255, 0.72) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-lbl {
          color: #ffc629 !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-dock-os li.is-on {
          color: #fff !important;
          border-color: #ffc629 !important;
          background: rgba(255, 198, 41, 0.14) !important;
        }

        .mona-clone-root.mona-aiagent .bag.bag-list .bag-row {
          background: #fff !important;
          border-color: #dbe3ec !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-row::before {
          background: radial-gradient(
            calc(440px * var(--s)) circle at var(--mx, 50%) var(--my, 50%),
            rgba(255, 198, 41, 0.12),
            transparent 62%
          ) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-row.is-on {
          border-color: rgba(255, 198, 41, 0.72) !important;
          box-shadow: 0 calc(30px * var(--s)) calc(60px * var(--s)) calc(-38px * var(--s)) rgba(11, 45, 91, 0.28) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-row-star {
          background: linear-gradient(135deg, #fff 0%, #f4f8fc 70%, #fff8d9 100%) !important;
          border-color: rgba(255, 198, 41, 0.46) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-row-role {
          color: #174f85 !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-row:hover .bag-more {
          color: #b57e00 !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-list .bag-row-ask {
          border-color: rgba(255, 198, 41, 0.48) !important;
        }
      `}</style>
    </>
  );
}
