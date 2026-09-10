"use client";

import ServiceDetail from "./component/ServiceDetail";
import SystemIntegration from "./component/ServiceSection";
import GameDevService from "./container/GameDevService";
import HeroBanner from "./container/heroBanner";
import WebMobileService from "./container/mobileService";
import PrivateCloud from "./container/PrivateCloud";
import StartupService from "./container/StartupService";
import VideoStreaming from "./container/VideoStreaming";
// Import icon nếu cần dùng icon font
import {
  Settings,
  CircleDollarSign,
  Server,
  Phone,
  Ticket,
  MessageCircle,
} from "lucide-react";

export default function CloudHostingPage() {
  // 1. Định nghĩa dữ liệu tại đây
  const integrationData = [
    {
      title: "Thiết kế và triển khai",
      description:
        "Thiết kế, cung cấp, triển khai và vận hành hầu hết những hệ thống công nghệ thông tin tổng thể...",
      icon: <Settings size={35} />,
      bgColor: "bg-blue-600",
    },
    {
      title: "Tiết kiệm chi phí",
      description:
        "Tiết kiệm chi phí nhân sự vận hành, đơn giản hóa các vấn đề về hạ tầng...",
      icon: <CircleDollarSign size={35} />,
      bgColor: "bg-blue-600",
    },
    {
      title: "Đa dạng dịch vụ",
      description:
        "Các dịch vụ Tích hợp Hệ thống và thiết bị cung cấp gồm: Dịch vụ hạ tầng CNTT...",
      icon: <Server size={35} />,
      bgColor: "bg-blue-600",
    },
  ];
  const supportData = [
    {
      title: "Hotline (24/7)",
      description: (
        <div className="text-left">
          <p>Bạn cần thêm thông tin, gọi ngay tới:</p>
          <p className="text-blue-600 font-bold text-xl mt-1">0904.558.448</p>
        </div>
      ),
      icon: <Phone size={30} fill="currentColor" />,
      bgColor: "bg-blue-600",
    },
    {
      title: "Gửi Ticket",
      description:
        "Kênh tiếp nhận yêu cầu hỗ trợ dịch vụ dành cho khách hàng của CloudFly",
      icon: <Ticket size={30} />,
      bgColor: "bg-blue-600",
    },
    {
      title: "Live Chat",
      description:
        "Bạn có câu hỏi? Hãy chat ngay với nhân viên tư vấn để được giải quyết",
      icon: <MessageCircle size={30} />,
      bgColor: "bg-blue-600",
    },
  ];

  return (
    <main>
      <HeroBanner />
      <div id="website-hosting">
        <ServiceDetail
          title="Website Hosting"
          imageSrc="https://cloudfly.vn/_next/image?url=%2Fimage%2Fsolution%2Fweb_hosting.webp&w=1080&q=75"
          benefits={[
            "Lưu trữ dữ liệu website dễ dàng và đáng tin cậy...",
            "Hệ thống hỗ trợ đa dạng các ứng dụng cài đặt sẵn...",
            "Toàn quyền kiểm soát và bảo mật tối đa...",
          ]}
        />
      </div>
      <div id="web-mobile">
        <WebMobileService />
      </div>
      <div id="game-dev">
        <GameDevService />
      </div>
      <div id="video-streaming">
        <VideoStreaming />
      </div>
      <div id="startup">
        <StartupService />
      </div>
      <div id="private-cloud">
        <PrivateCloud />
      </div>
      <div id="cloud-storage">
        <ServiceDetail
          title="Cloud Storage"
          imageSrc="https://cloudfly.vn/_next/image?url=%2Fimage%2Fsolution%2Fcloud_storage.webp&w=1080&q=75"
          benefits={[
            "Giải pháp xây dựng hệ thống lưu trữ toàn diện cho doanh nghiệp...",
            "Đáp ứng cho các hệ thống và dịch vụ có nhu cầu lưu trữ lớn...",
            "Giải quyết các bài toán nhức nhối về nhu cầu lưu trữ dữ liệu lớn...",
          ]}
        />
      </div>
      <div id="integration">
        <SystemIntegration
          mainTitle="Tích hợp hệ thống"
          subTitle="Hệ thống hỗ trợ đa dạng các ứng dụng được cài đặt sẵn. Giúp rút ngắn thời gian triển khai trên một máy chủ mới"
          services={integrationData}
        />
      </div>
      {/* 2. Gọi component và truyền dữ liệu vào */}
      <SystemIntegration
        mainTitle="Bạn cần hỗ trợ thêm"
        subTitle="Liên hệ với đội ngũ 24/7 của chúng tôi"
        services={supportData}
      />
    </main>
  );
}
