'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Import các icon cần thiết từ Lucide
import { Mail, Phone, MapPin, X, CheckCircle2, ChevronDown } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegisterModal({ isOpen, onClose }: RegisterModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-5xl bg-[#1a1a1a] border border-white/10 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 z-10"
        >
          {/* CỘT TRÁI */}
          <div className="lg:col-span-4 bg-gradient-to-br from-orange-600 to-orange-800 p-8 lg:p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black uppercase mb-8 tracking-tighter">Thông tin liên hệ</h3>
              <div className="space-y-6">
                {/* Truyền Component Icon trực tiếp vào */}
                <ContactItem Icon={Mail} title="Email" content="contact@izisolution.vn" />
                <ContactItem Icon={Phone} title="Điện thoại" content="0936-468-469" />
                <ContactItem Icon={MapPin} title="Địa chỉ" content="Tầng 7, Tòa nhà Hoàng Ngọc, Cầu Giấy, Hà Nội" />
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20 opacity-60 text-xs italic">
              Đội ngũ chuyên gia của chúng tôi sẽ liên hệ lại trong vòng 24h làm việc.
            </div>
          </div>

          {/* CỘT PHẢI */}
          <div className="lg:col-span-8 p-8 lg:p-12 bg-zinc-900">
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors">
              <X size={24} />
            </button>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <InputField label="Sản phẩm tư vấn *" type="select" options={['ERP', 'CRM', 'HRM']} />
              <InputField label="Tên công ty *" placeholder="Nhập tên doanh nghiệp" />
              <InputField label="Tỉnh thành phố *" type="select" options={['Hà Nội', 'TP. HCM', 'Đà Nẵng']} />
              <InputField label="Lĩnh vực hoạt động *" type="select" options={['Sản xuất', 'Thương mại', 'Dịch vụ']} />
              <InputField label="Người liên hệ *" placeholder="Họ và tên" />
              <InputField label="Số điện thoại *" placeholder="Số điện thoại cá nhân" />
              
              <div className="md:col-span-2 text-zinc-300">
                <label className="block text-xs font-bold text-zinc-500 uppercase mb-2 tracking-widest">Nội dung yêu cầu (*)</label>
                <textarea 
                  className="w-full bg-zinc-800 border border-white/5 rounded-xl p-4 text-white focus:outline-none focus:border-orange-500 transition-colors resize-none" 
                  rows={3}
                  placeholder="Mô tả ngắn gọn bài toán của bạn..."
                ></textarea>
              </div>

              <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 mt-4">
                <div className="flex items-center gap-2 text-green-500 text-sm font-bold">
                  <CheckCircle2 size={18} />
                  An toàn & Bảo mật
                </div>
                <button className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-black px-10 py-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 active:scale-95 text-sm uppercase tracking-widest">
                  GỬI ĐĂNG KÝ
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

// --- SUB-COMPONENTS ĐÃ FIX TYPES ---

interface ContactItemProps {
  Icon: React.ElementType; // Nhận một Component làm Prop
  title: string;
  content: string;
}

function ContactItem({ Icon, title, content }: ContactItemProps) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
        <Icon size={18} strokeWidth={2.5} className="text-white" />
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold opacity-60 tracking-widest mb-1">{title}</p>
        <p className="text-sm font-medium leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  options?: string[];
}

function InputField({ label, type = "text", placeholder, options }: InputFieldProps) {
  return (
    <div>
      <label className="block text-[10px] font-bold text-zinc-500 uppercase mb-2 tracking-widest">{label}</label>
      {type === "select" ? (
        <div className="relative">
          <select className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 appearance-none transition-colors cursor-pointer">
            {options?.map(opt => <option key={opt} value={opt} className="bg-zinc-900">{opt}</option>)}
          </select>
          <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
        </div>
      ) : (
        <input 
          type={type} 
          placeholder={placeholder}
          className="w-full bg-zinc-800 border border-white/5 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
        />
      )}
    </div>
  );
}