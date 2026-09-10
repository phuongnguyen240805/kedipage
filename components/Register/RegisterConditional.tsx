"use client";

import { usePathname } from "next/navigation";
import RegisterMain from "./RegisterMain";

export default function RegisterConditional() {
  const pathname = usePathname();

  // Danh sách các trang KHÔNG muốn hiện khối RegisterMain
  const hiddenRoutes = ["/", "/login-admin", "/admin", "/thiet-ke-landing-page"];
  if (!pathname || hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto pt-5 px-4 w-full">
      <RegisterMain />
    </div>
  );
}