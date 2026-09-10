"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { Lock, ArrowRight, UserCog, Loader2 } from "lucide-react";
import Boderyelow from "@/components/ui/boder-yelow";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Gọi đến API Route bạn đã tạo
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // Đăng nhập thành công -> Chuyển hướng vào trang quản lý
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        alert("Thông tin xác thực không chính xác!");
      }
    } catch (error) {
      console.error("Login Error:", error); // Sử dụng biến error ở đây
      alert("Lỗi kết nối đến hệ thống quản trị!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-md bg-white border border-gray-100 rounded-[32px] p-6 md:p-10 my-8 flex flex-col gap-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden mx-auto"
    >
      {/* Header - Căn giữa nội dung */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-black tracking-tight uppercase">
          Hệ thống quản trị
        </h2>
        <p className="text-xs text-gray-400 font-medium italic">
          Vui lòng xác thực quyền truy cập cấp cao
        </p>
      </div>

      <div className="space-y-5">
        {/* Username */}
        <div className="flex flex-col gap-1.5 text-left">
          <div className="flex justify-between items-center px-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Tên định danh
            </label>
            <UserCog className="w-3.5 h-3.5 text-gray-300" />
          </div>
          <Boderyelow>
            <div className="relative w-full bg-gray-50 rounded-2xl group focus-within:bg-white border border-transparent focus-within:border-gray-100 transition-all">
              <input
                type="text"
                name="username"
                placeholder="admin_id"
                autoComplete="off"
                className="w-full bg-transparent px-5 py-4 text-black text-sm font-medium outline-none placeholder:text-gray-300"
                required
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>
          </Boderyelow>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-1.5 text-left">
          <div className="flex justify-between items-center px-2">
            <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">
              Mã khóa bảo mật
            </label>
            <Lock className="w-3.5 h-3.5 text-gray-300" />
          </div>
          <Boderyelow>
            <div className="relative w-full bg-gray-50 rounded-2xl group focus-within:bg-white border border-transparent focus-within:border-gray-100 transition-all">
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                className="w-full bg-transparent px-5 py-4 text-black text-sm tracking-[0.3em] outline-none placeholder:text-gray-300"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </Boderyelow>
        </div>
      </div>

      <div className="flex items-center justify-between px-2 text-[10px] font-bold uppercase tracking-widest text-gray-400">
        <label className="flex items-center gap-2.5 cursor-pointer hover:text-black transition-colors group">
          <input
            type="checkbox"
            className="w-3.5 h-3.5 rounded border-gray-200 bg-gray-50 accent-black appearance-none border checked:bg-black checked:border-black transition-all cursor-pointer"
          />
          Duy trì
        </label>
        <button type="button" className="hover:text-black transition-colors">
          Mất quyền?
        </button>
      </div>

      <div className="pt-1">
        <Button
          type="submit"
          disabled={loading}
          className="group w-full bg-black text-white font-black h-14 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:bg-gray-900 transition-all active:scale-[0.98] relative overflow-hidden"
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <span className="flex items-center justify-center gap-3 z-10 text-[11px] tracking-[0.2em] uppercase">
                Xác nhận
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
