"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  Zap,
  CheckCircle2,
  X,
  CreditCard,
  ArrowRight,
  ArrowLeft,
  User,
  Mail,
  Phone,
  MapPin,
  Loader2,
} from "lucide-react";
import Boderyelow from "../ui/boder-yelow";
import { cn } from "@/lib/utils";

interface PaymentItem {
  label: string;
  price: number;
}

interface GlobalPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderInfo: {
    title: string;
    id: string | number;
    basePrice: number;
    discount?: number;
  };
  addons?: PaymentItem[];
}
export default function GlobalPaymentModal({
  isOpen, onClose, orderInfo, addons = [],
}: GlobalPaymentModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [paymentMethod, setPaymentMethod] = useState<"qr" | "bank">("qr");
  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "", address: "" });

  const totalAmount = useMemo(() => {
    const addonSum = addons.reduce((sum, item) => sum + item.price, 0);
    return orderInfo.basePrice - (orderInfo.discount || 0) + addonSum;
  }, [orderInfo, addons]);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep(2); }, 600);
  };

  const resetAndClose = () => { setStep(1); onClose(); };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in duration-500" onClick={resetAndClose} />

      {/* Sửa max-w-4xl (thu nhỏ lại từ 5xl) để cân đối hơn */}
      <div className="relative w-full max-w-4xl animate-in zoom-in-95 duration-300">
        <Boderyelow>
          <div className="bg-black w-full rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[500px] max-h-[90vh] border border-white/10 shadow-2xl">
            
            {step === 3 ? (
              <div className="w-full py-20 flex flex-col items-center justify-center text-center px-8">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-yellow-500/20">
                  <CheckCircle2 size={32} className="text-black" />
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2">Giao dịch đang chờ</h3>
                <p className="text-gray-400 text-sm max-w-xs italic font-light leading-relaxed">
                  Hệ thống sẽ tự động kích hoạt sau khi chuyên viên KEDI xác nhận thanh toán từ {customer.phone}.
                </p>
                <button onClick={resetAndClose} className="mt-8 text-yellow-500 font-bold uppercase text-[10px] tracking-widest border-b border-yellow-500/50 pb-1">Đóng cửa sổ</button>
              </div>
            ) : (
              <>
                {/* CỘT TRÁI: Gọn gàng hơn */}
                <div className="md:w-[38%] bg-[#0a0a0a] p-8 flex flex-col text-white relative border-b md:border-b-0 md:border-r border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8">
                      <span className="text-[9px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-1 block">Checkout</span>
                      <h3 className="text-xl font-black uppercase tracking-tighter italic">Đơn hàng</h3>
                    </div>

                    <div className="space-y-5 flex-grow">
                      <div className="pb-4 border-b border-white/5">
                        <p className="text-white/30 text-[8px] font-bold uppercase mb-1">Dịch vụ chính</p>
                        <span className="font-bold text-sm text-white leading-tight block">{orderInfo.title}</span>
                      </div>

                      <div className="space-y-2">
                        <p className="text-white/30 text-[8px] font-bold uppercase tracking-widest">Tiện ích bổ sung</p>
                        <div className="space-y-1.5 max-h-[150px] overflow-y-auto custom-scrollbar pr-2">
                          {addons.map((item, i) => (
                            <div key={i} className="flex justify-between text-[11px] text-white/50 group">
                              <span className="font-medium group-hover:text-yellow-500/80 transition-colors">+ {item.label}</span>
                              <span className="font-mono text-white/80">{(item.price / 1000000).toFixed(1)}M</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-white/30 text-[9px] font-bold uppercase mb-1 tracking-widest">Thành tiền</p>
                      <p className="text-3xl font-black text-yellow-500 tracking-tighter tabular-nums">
                        {totalAmount.toLocaleString()}<span className="text-sm ml-1">đ</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* CỘT PHẢI: Form tinh gọn */}
                <div className="md:w-[62%] p-8 sm:p-10 bg-black relative flex flex-col justify-center">
                  <button onClick={resetAndClose} className="absolute top-6 right-6 text-white/20 hover:text-white transition-all">
                    <X size={20} />
                  </button>

                  {step === 1 ? (
                    <form onSubmit={handleNextStep} className="space-y-6 animate-in fade-in slide-in-from-right-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-4 w-1 bg-yellow-500" />
                        <h4 className="text-sm font-black text-white uppercase tracking-widest">Thông tin khách hàng</h4>
                      </div>

                      <div className="grid grid-cols-1 gap-4">
                        <div className="group">
                          <input required className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-yellow-500 outline-none transition-all text-sm text-white placeholder:text-white/20 font-medium"
                            placeholder="Họ và tên khách hàng" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <input required type="tel" className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-yellow-500 outline-none transition-all text-sm text-white placeholder:text-white/20 font-medium"
                            placeholder="Số điện thoại" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} />
                          <input required type="email" className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-yellow-500 outline-none transition-all text-sm text-white placeholder:text-white/20 font-medium"
                            placeholder="Địa chỉ Email" value={customer.email} onChange={(e) => setCustomer({ ...customer, email: e.target.value })} />
                        </div>

                        <input required className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:border-yellow-500 outline-none transition-all text-sm text-white placeholder:text-white/20 font-medium"
                          placeholder="Địa chỉ bàn giao hệ thống" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} />
                      </div>

                      <button type="submit" disabled={loading} className="w-full mt-4 py-4 bg-yellow-500 text-black font-black rounded-full text-[11px] uppercase tracking-[0.2em] hover:bg-white transition-all flex items-center justify-center gap-2 group">
                        {loading ? <Loader2 className="animate-spin" size={16} /> : <>Tiếp tục thanh toán <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>}
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                      <div className="flex items-center justify-between">
                        <button onClick={() => setStep(1)} className="text-white/40 hover:text-white text-[9px] font-bold uppercase flex items-center gap-1.5 transition-colors">
                          <ArrowLeft size={12} /> Quay lại
                        </button>
                        <h4 className="text-sm font-black text-white uppercase tracking-widest">Thanh toán</h4>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => setPaymentMethod("qr")} className={cn("py-3 rounded-xl font-bold text-[10px] uppercase border transition-all flex items-center justify-center gap-2", 
                            paymentMethod === "qr" ? "bg-yellow-500 border-yellow-500 text-black" : "bg-white/5 border-white/5 text-white/30 hover:border-white/20")}>
                          <Zap size={14} /> Mã QR
                        </button>
                        <button onClick={() => setPaymentMethod("bank")} className={cn("py-3 rounded-xl font-bold text-[10px] uppercase border transition-all flex items-center justify-center gap-2", 
                            paymentMethod === "bank" ? "bg-yellow-500 border-yellow-500 text-black" : "bg-white/5 border-white/5 text-white/30 hover:border-white/20")}>
                          <CreditCard size={14} /> Chuyển khoản
                        </button>
                      </div>

                      <div className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[220px]">
                        {paymentMethod === "qr" ? (
                          <div className="text-center">
                            <div className="relative w-36 h-36 bg-white rounded-xl mb-4 mx-auto p-1.5 shadow-2xl">
                              <Image src={`https://img.vietqr.io/image/MB-0337325373-compact2.jpg?amount=${totalAmount}&addInfo=DTS%20${orderInfo.id}&accountName=VO%20THE%20CONG`}
                                alt="QR" width={150} height={150} className="w-full h-full object-contain" />
                            </div>
                            <p className="text-yellow-500/60 font-bold text-[8px] uppercase tracking-widest">Dùng App Ngân hàng quét mã</p>
                          </div>
                        ) : (
                          <div className="w-full max-w-[240px] space-y-3">
                            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-[9px] text-white/30 uppercase font-bold">Ngân hàng</span><span className="text-[11px] font-bold">MB BANK</span></div>
                            <div className="flex justify-between border-b border-white/5 pb-2"><span className="text-[9px] text-white/30 uppercase font-bold">Chủ TK</span><span className="text-[11px] font-bold uppercase">Vo THE CONG</span></div>
                            <div className="flex justify-between items-center"><span className="text-[9px] text-white/30 uppercase font-bold">Số tài khoản</span><span className="text-lg font-black text-yellow-500 tabular-nums">0337325373</span></div>
                            <div className="mt-2 bg-yellow-500/10 p-3 rounded-lg border border-yellow-500/20 text-center uppercase tracking-tighter">
                              <span className="text-[8px] text-yellow-500/50 block font-bold mb-0.5">Nội dung chuyển khoản</span>
                              <p className="text-xs font-black text-yellow-500 tracking-widest font-mono">DTS {orderInfo.id}</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <button onClick={() => setStep(3)} className="w-full py-4 bg-white text-black font-black rounded-full text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-yellow-500 transition-all">
                        Tôi đã hoàn tất chuyển khoản
                      </button>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </Boderyelow>
      </div>
    </div>
  );
}