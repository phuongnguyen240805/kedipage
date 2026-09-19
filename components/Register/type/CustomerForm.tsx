'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { CustomerData } from './types';


interface CustomerFormProps {
  onSuccess?: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ onSuccess }) => {
  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.siteKey || '';

  const [data, setData] = useState<CustomerData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs placeholder:text-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaSiteKey) {
      setMessage({ type: 'error', text: 'reCAPTCHA chưa được cấu hình.' });
      return;
    }
    if (!captchaToken) {
      setMessage({ type: 'error', text: 'Vui lòng xác nhận reCAPTCHA.' });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: captchaToken, type: 'customer', data }),
      });
      const result = await res.json();
      if (result.success) {
        setMessage({ type: 'success', text: 'Gửi yêu cầu thành công!' });
        setData({ fullName: '', email: '', phone: '', company: '', interest: '' });
        onSuccess?.();
      } else {
        setMessage({ type: 'error', text: result.message || 'Có lỗi xảy ra.' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Lỗi kết nối máy chủ.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {message && (
        <div className={`p-3 rounded-xl text-[11px] ${message.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
          {message.text}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4">
        <input type="text" required placeholder="Họ và tên " className={inputStyle} value={data.fullName} onChange={(e) => setData({ ...data, fullName: e.target.value })} />
        <div className="grid grid-cols-2 gap-4">
          <input type="email" required placeholder="Email " className={inputStyle} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
          <input type="tel" required placeholder="Số điện thoại " className={inputStyle} value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} />
        </div>
        <input type="text" placeholder="Tên công ty" className={inputStyle} value={data.company} onChange={(e) => setData({ ...data, company: e.target.value })} />
        <textarea rows={3} placeholder="Dịch vụ bạn quan tâm..." className={`${inputStyle} resize-none`} value={data.interest} onChange={(e) => setData({ ...data, interest: e.target.value })} />
      </div>

      <div className="flex flex-col">
       
          {recaptchaSiteKey ? (
            <ReCAPTCHA theme="dark" sitekey={recaptchaSiteKey} onChange={setCaptchaToken} />
          ) : (
            <p className="text-[11px] text-red-400">reCAPTCHA chưa được cấu hình.</p>
          )}
      
        <button disabled={submitting || !recaptchaSiteKey} className="w-full mt-3 py-4 bg-white text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-[0.98] disabled:bg-gray-700 disabled:text-gray-400">
          {submitting ? 'ĐANG XỬ LÝ...' : 'GỬI YÊU CẦU TƯ VẤN'}
        </button>
      </div>
    </form>
  );
};

export default CustomerForm;