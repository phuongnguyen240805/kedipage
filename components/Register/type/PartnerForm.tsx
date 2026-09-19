"use client";

import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { PartnerData } from "./types";

const PartnerForm = () => {
  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.siteKey || '';

  const [data, setData] = useState<PartnerData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    website: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  // Thêm hàm xử lý gửi dữ liệu
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaSiteKey) {
      alert("reCAPTCHA chưa được cấu hình.");
      return;
    }
    if (!captchaToken) {
      alert("Vui lòng xác nhận reCAPTCHA!");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaToken, type: "partner", data }),
      });
      const result = await res.json();
      if (result.success) {
        alert("Gửi đề xuất thành công!");
        setData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          businessType: "",
          website: "",
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {" "}
      {/* Thêm onSubmit */}
      <div className="grid grid-cols-1 gap-4">
        <input
          type="text"
          required
          placeholder="Tên đơn vị đối tác "
          className={inputStyle}
          value={data.companyName}
          onChange={(e) => setData({ ...data, companyName: e.target.value })} // Thêm onChange
        />
        <input
          type="text"
          required
          placeholder="Người đại diện liên hệ "
          className={inputStyle}
          value={data.contactPerson}
          onChange={(e) => setData({ ...data, contactPerson: e.target.value })} // Thêm onChange
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="email"
            required
            placeholder="Email liên hệ "
            className={inputStyle}
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })} // Thêm onChange
          />
          <input
            type="tel"
            required
            placeholder="Số điện thoại "
            className={inputStyle}
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })} // Thêm onChange
          />
        </div>
        <select
          required
          className={inputStyle}
          value={data.businessType}
          onChange={(e) => setData({ ...data, businessType: e.target.value })} // Thêm onChange
        >
          <option value="" className="bg-black">
            Lĩnh vực hợp tác{" "}
          </option>
          <option value="tech" className="bg-black">
            Công nghệ / Software
          </option>
          <option value="marketing" className="bg-black">
            Marketing Agency
          </option>
          <option value="supply" className="bg-black">
            Cung ứng / Logistics
          </option>
        </select>
        <input
          type="url"
          placeholder="Website công ty"
          className={inputStyle}
          value={data.website}
          onChange={(e) => setData({ ...data, website: e.target.value })} // Thêm onChange
        />
      </div>
      <div className="flex flex-col">
        {recaptchaSiteKey ? (
          <ReCAPTCHA
            theme="dark"
            sitekey={recaptchaSiteKey}
            onChange={setCaptchaToken}
          />
        ) : (
          <p className="text-[11px] text-red-400">reCAPTCHA chưa được cấu hình.</p>
        )}

        <button
          disabled={submitting || !recaptchaSiteKey}
          className="mt-3 w-full py-4 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-[0.98] disabled:bg-gray-700 disabled:text-gray-400"
        >
          {submitting ? "ĐANG XỬ LÝ..." : "GỬI YÊU CẦU TƯ VẤN"}
        </button>
      </div>
    </form>
  );
};

export default PartnerForm;
