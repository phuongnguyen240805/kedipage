"use client";

import EdutechMotionRuntime from "../shared/EdutechMotionRuntime";
import {
  CapabilityTableSection,
  ComparisonSection,
  CtaSection,
  EcosystemMapSection,
  FaqSection,
  GallerySection,
  HeroSection,
  Marquee,
  ModuleBookSection,
  PainSection,
  RoadmapSection,
  WorkflowSection,
} from "../shared/edutech-product";
import { kediLmsCss } from "../Edutech/kedi-lms-style";
import { kediLmsMotionScript, kediLmsRevealScript } from "../Edutech/kedi-lms-motion";
import {
  capabilityRows,
  comparisons,
  faqs,
  gallery,
  heroStats,
  mapNodes,
  marqueeItems,
  mascot,
  modules,
  outreachAssets,
  pains,
  roadmap,
  workflow,
} from "./content";
import { kediOutreachCss } from "./style";

const outreachMotionScript = kediLmsMotionScript
  .split("/kedi-lms/kedi-head-mark.png").join("/brand/kedi-icon.png")
  .split("/kedi-lms/gau-luyen-thi.png").join(outreachAssets.mascot);

export default function ClientKediOutreach() {
  return (
    <EdutechMotionRuntime
      className="kedi-product-route kedi-outreach-route"
      css={kediLmsCss + kediOutreachCss}
      revealScript={kediLmsRevealScript}
      motionScript={outreachMotionScript}
    >
      <div className="edu" data-kedi-outreach-page="true" id="outreach-main">
        <HeroSection
          eyebrow="THE KEDI GROUP · KEDI OUTREACH"
          titleLabel="Prospect, nhắn tin và chăm sóc Zalo trong một workflow"
          titleLines={["Prospect, nhắn tin và", "chăm sóc Zalo trong", <em key="brand">Kedi Outreach</em>]}
          lead="Kedi Outreach gom các tác vụ quanh Web Chat, inbox theo danh sách, network, nhóm, tìm lead và phân phối nội dung vào một luồng thống nhất cho sales, CSKH và marketing cộng đồng."
          primaryCta={{ label: "Xem 6 module", href: "#bo-san-pham" }}
          secondaryCta={{ label: "Xem ảnh giao diện", href: "#giao-dien" }}
          statusNote="Sales · CSKH · marketing cộng đồng"
          mainImage={{ src: outreachAssets.overview, alt: "Giao diện tổng quan ZooZalo dùng làm visual reference", caption: "6 module · một luồng sales" }}
          secondaryImage={{ src: outreachAssets.promo, alt: "Banner giải pháp Zalo Sale trong dữ liệu crawl ZooZalo", caption: "Sales · CSKH · marketing cộng đồng" }}
          floatingBadges={["Extension workflow", "Inbox · Group · Lead"]}
          mascot={mascot}
          stats={heroStats}
        />

        <Marquee items={marqueeItems} />

        <PainSection
          eyebrow="01 · Chỗ tắc"
          titleLines={["Zalo không thiếu thao tác,", "đội sales thiếu một luồng thống nhất"]}
          lead="Giá trị chính không nằm ở một nút gửi tin đơn lẻ, mà ở việc gom các tác vụ lặp quanh chat, danh sách, nhóm, lead và content về cùng nhịp vận hành."
          mascot={mascot}
          items={pains}
        />

        <ModuleBookSection eyebrow="02 · Bộ module" title="Lật từng trang, đủ 6 nhóm tác vụ" modules={modules} />

        <WorkflowSection
          eyebrow="03 · Đổi cách vận hành"
          titleLines={["Máy nhận phần lặp,", "sales giữ phần cần phán đoán"]}
          lead="Workflow dưới đây không cố tự động hóa mọi thứ. Kedi Outreach nhận các bước chuẩn hóa và lặp lại; hội thoại thực tế, quyết định và chốt đơn vẫn để người phụ trách xử lý."
          items={workflow}
          humanSummary="Các thao tác đồng bộ, chuẩn bị nội dung, gửi, prospecting và tái sử dụng content có thể được điều phối. Hai bước cuối vẫn giữ cho sales vì chúng phụ thuộc ngữ cảnh và trách nhiệm kinh doanh."
          workflowLabel="Kedi Outreach · workflow hỗ trợ sales"
        />

        <EcosystemMapSection
          eyebrow="04 · Bản đồ hệ"
          titleLines={["Sáu module cùng quay về", "một customer outreach flow"]}
          lead="Web Chat, inbox, network, group, lead và content không nên là sáu công cụ rời. Chúng chỉ là sáu điểm vào của cùng một luồng tiếp cận và chăm sóc khách."
          centerTitle="Outreach Flow"
          centerSubtitle="Lead → Engage → Follow-up"
          nodes={mapNodes}
        />

        <CapabilityTableSection
          eyebrow="05 · Capability"
          titleLines={["Một capability map đủ rõ", "để đội vận hành kiểm tra"]}
          lead="Các capability được nhóm theo đúng công việc hằng ngày: trình duyệt, nhiều tài khoản, messaging, group ops, lead search, content và điều phối chiến dịch. Mục tiêu là để đội vận hành nhìn một lần là biết luồng nào được gom lại."
          chips={["Extension", "Multi Zalo", "Group Ops", "Maps B2B", "Reup Video"]}
          rows={capabilityRows}
        />

        <GallerySection
          eyebrow="06 · Giao diện tham chiếu"
          quote="Từ tổng quan, gửi tin, nhóm, reup video đến lead theo vị trí — giao diện cần cho thấy toàn bộ workflow mà không bắt người dùng nhảy qua nhiều công cụ."
          sourceNote="Ảnh tham chiếu lấy từ output crawl ZooZalo để kiểm tra layout; khi production sẽ thay bằng asset Kedi Outreach đã được phê duyệt."
          items={gallery}
        />

        <RoadmapSection
          eyebrow="07 · Cách vào việc"
          titleLines={["Từ browser tới một", "workflow outreach có cấu trúc"]}
          lead="Luồng vào việc được rút gọn còn bốn bước: cài lớp vận hành, nối dữ liệu, chọn module phù hợp, rồi để sales tập trung vào phần con người."
          steps={roadmap}
        />

        <ComparisonSection
          eyebrow="08 · Trước và sau"
          titleLines={["Không phải gửi nhiều hơn,", "mà là bớt thao tác rời"]}
          lead="Điểm khác biệt cần thể hiện trên page là cách tổ chức công việc. Automation chỉ có giá trị khi nó làm cho danh sách, nội dung và hành động đi cùng một chiến dịch dễ quan sát hơn."
          columns={comparisons}
        />

        <FaqSection
          eyebrow="09 · Câu hỏi hay gặp"
          titleLines={["Những câu đội sales", "sẽ hỏi trước khi dùng"]}
          lead="Các câu hỏi tập trung vào cách vận hành nhiều tài khoản, group, nguồn lead và ranh giới giữa automation với công việc cần con người xử lý."
          mascot={{ ...mascot, src: outreachAssets.ctaMascot }}
          items={faqs}
          closingTitle="Cần map thêm nghiệp vụ Zalo của đội sales?"
          closingText="Giữ workflow hiện tại, Kedi Outreach sẽ được cấu hình theo luồng thực tế thay vì bắt đội ngũ đổi cách làm."
        />

        <CtaSection
          eyebrow="Bước tiếp theo"
          titleLines={["Đưa workflow Zalo", "về một chỗ"]}
          lead="Bắt đầu từ luồng đội sales đang làm mỗi ngày: nguồn lead nào đang dùng, nhóm nào đang chăm, nội dung nào đang gửi và phần việc nào đang lặp nhiều nhất. Kedi Outreach tổ chức lại chính các bước đó thành một flow dễ theo dõi."
          mascot={{ ...mascot, src: outreachAssets.ctaMascot }}
          productName="Kedi Outreach"
          sideTitle="One outreach flow"
          sideText="Gom prospecting, messaging, community và content về cùng một nhịp vận hành để sales tập trung vào hội thoại và chốt đơn."
        />
      </div>
    </EdutechMotionRuntime>
  );
}
