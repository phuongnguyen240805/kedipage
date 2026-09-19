'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CandidateData } from './types';

const CandidateForm = () => {
  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.siteKey || '';

  const [data, setData] = useState<CandidateData>({
    fullName: '', email: '', phone: '', position: '', experience: '', portfolio: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaSiteKey) return setMessage({ type: 'error', text: 'reCAPTCHA chưa được cấu hình.' });
    if (!captchaToken) return setMessage({ type: 'error', text: 'Xác nhận Captcha' });
    setSubmitting(true);
    // Logic fetch tương tự CustomerForm...
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <input type="text" required placeholder="Họ và tên ứng viên " className={inputStyle} value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} />
        <div className="grid grid-cols-2 gap-4">
          <input type="email" required placeholder="Email " className={inputStyle} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <input type="tel" required placeholder="Số điện thoại " className={inputStyle} value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </div>
        <input type="text" required placeholder="Vị trí ứng tuyển " className={inputStyle} value={data.position} onChange={(e) => setData({ ...data, position: e.target.value })} />
        <select required className={inputStyle} value={data.experience} onChange={(e) => setData({ ...data, experience: e.target.value })}>
          <option value="" className="bg-black">Kinh nghiệm</option>
          <option value="0-1" className="bg-black">Dưới 1 năm</option>
          <option value="1-3" className="bg-black">1 - 3 năm</option>
          <option value="3-5" className="bg-black">3 - 5 năm</option>
        </select>
        <input type="url" placeholder="Link Portfolio (Behance, GitHub...)" className={inputStyle} value={data.portfolio} onChange={(e) => setData({ ...data, portfolio: e.target.value })} />
      </div>
      
            <div className="flex flex-col ">
                {recaptchaSiteKey ? (
                  <ReCAPTCHA theme="dark" sitekey={recaptchaSiteKey} onChange={setCaptchaToken} />
                ) : (
                  <p className="text-[11px] text-red-400">reCAPTCHA chưa được cấu hình.</p>
                )}
              <button disabled={submitting || !recaptchaSiteKey} className="mt-3 w-full py-4 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-[0.98] disabled:bg-gray-700 disabled:text-gray-400">
                {submitting ? 'ĐANG XỬ LÝ...' : 'GỬI YÊU CẦU TƯ VẤN'}
              </button>
            </div>
    </form>
  );
};

export default CandidateForm;