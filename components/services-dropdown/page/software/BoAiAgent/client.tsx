"use client";

import MonaCloneRuntime from "../shared/MonaCloneRuntime";
import { boAiAgentMarkup } from "./content";

const kediAiAgentMarkup = boAiAgentMarkup
  .replaceAll("KEDI · Bộ AI Agent &amp; Phần mềm 2.0", "KEDI · Bộ AI Agent &amp; KEDI 1.0")
  .replaceAll("KEDI OS · Phần mềm 2.0", "KEDI · Nền tảng 1.0")
  .replaceAll("Phần mềm 1.0 và Phần mềm 2.0", "Phần mềm truyền thống và KEDI 1.0")
  .replaceAll("KEDI OS, một Phần mềm 2.0", "KEDI 1.0, nền tảng vận hành AI của KEDI")
  .replaceAll("Phần mềm 2.0 · KEDI OS", "KEDI 1.0 · AI Operating System")
  .replaceAll("Phần mềm 2.0", "KEDI 1.0")
  .replaceAll("KEDI OS 2.0", "KEDI 1.0")
  .replaceAll("Đầu não OS 2.0", "Đầu não KEDI 1.0")
  .replaceAll("OS 2.0", "1.0")
  .replaceAll('href="https://mona.media/dat-lich/"', 'href="#lien-he"')
  .replaceAll('href="https://mona.media/mo-hinh-phat-trien-phan-mem/"', 'href="/blog/viet-phan-mem-thoi-dai-ai"')
  .replaceAll('href="https://mona.media/wp-content/uploads/mona2/MONA-AI-Native-SDLC-2026.pdf"', 'href="/blog/viet-phan-mem-thoi-dai-ai"')
  .replace(/href="https:\/\/mona\.media\/[^"]+"/g, 'href="#danh-sach"')
  .replace(/src="https:\/\/mona\.media\/wp-content\/themes\/monatheme\/template\/assets\/images\/gau-webmaster\/agents\/sm\/[^"]+"/g, 'src="https://assets.kedi.media/images/ffc1569337686919aa34-1254.webp"')
  .replace(/src="https:\/\/mona\.media\/wp-content\/themes\/monatheme\/template\/assets\/images\/gau-webmaster\/ah\/[^"]+"/g, 'src="https://assets.kedi.media/images/591351c34c9b2bfc2ed8-1254.webp"');

export default function ClientBoAiAgent() {
  return (
    <>
      <MonaCloneRuntime
        kind="aiagent"
        cssHref="/software-clone/ai-agent/page.css"
        markup={kediAiAgentMarkup}
      />
      <style jsx global>{`
        .mona-clone-root.mona-aiagent {
          background: #071a36 !important;
        }
        .mona-clone-root.mona-aiagent .bag {
          --p950: #071a36;
          --pu: #174f85;
          --pu2: #0b2d5b;
          --pu3: #2e76c5;
          --or: #b57e00;
          --or2: #ffc629;
          --ink: #0b2d5b;
          --ink2: #51657a;
          --ink3: #7b8b9c;
          --lav: #f4f6f9;
          --line: #dbe3ec;
        }
        .mona-clone-root.mona-aiagent .bag.bag-hero::before {
          background: radial-gradient(55% 65% at 76% 46%,rgba(46,118,197,.34),transparent 70%),radial-gradient(45% 55% at 6% 0%,rgba(255,198,41,.16),transparent 70%),radial-gradient(38% 42% at 98% 100%,rgba(21,79,138,.28),transparent 72%) !important;
        }
        .mona-clone-root.mona-aiagent .bag .bag-tg,
        .mona-clone-root.mona-aiagent .bag .bag-tg2 {
          background: linear-gradient(100deg,#fff2b8 0%,#ffc629 48%,#75b7f7 100%) !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          color: transparent !important;
        }
        .mona-clone-root.mona-aiagent .bag .bag-btn-or {
          background: #ffc629 !important;
          color: #0b2d5b !important;
          box-shadow: 0 16px 34px -14px rgba(255,198,41,.45) !important;
        }
        .mona-clone-root.mona-aiagent .bag .bag-core {
          background: radial-gradient(circle at 34% 28%,#ffe79a 0%,#2e76c5 34%,#174f85 68%,#071a36 100%) !important;
          box-shadow: 0 0 0 12px rgba(255,198,41,.09),0 0 0 30px rgba(46,118,197,.08),0 30px 90px -8px rgba(0,0,0,.55) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-dk,
        .mona-clone-root.mona-aiagent .bag.bag-end {
          background: #071a36 !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-osgrid,
        .mona-clone-root.mona-aiagent .bag.bag-list {
          background: #f4f6f9 !important;
        }
        .mona-clone-root.mona-aiagent .bag .bag-os-xl {
          background: linear-gradient(150deg,#071a36 0%,#0b2d5b 58%,#174f85 100%) !important;
        }
        .mona-clone-root.mona-aiagent .bag .bag-oscard,
        .mona-clone-root.mona-aiagent .bag .bag-q {
          border-radius: 24px !important;
        }
        .mona-clone-root.mona-aiagent .bag .bag-faq-ask {
          background: linear-gradient(145deg,#0b2d5b,#174f85) !important;
        }
        .mona-clone-root.mona-aiagent .bag.bag-end::before {
          background: radial-gradient(60% 70% at 50% 110%,rgba(255,198,41,.28),transparent 70%),radial-gradient(50% 60% at 50% 0%,rgba(46,118,197,.32),transparent 72%) !important;
        }
      `}</style>
    </>
  );
}
