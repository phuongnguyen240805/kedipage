'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Image from 'next/image';

const NewsCTA = () => {
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleCheckedChange = (checked: boolean | 'indeterminate') => {
    setIsChecked(checked === true); // đảm bảo boolean
  };

  const handleSubmit = async () => {
    if (!email || !isChecked) {
      setError('Vui lòng điền email và xác nhận bạn không phải là robot.');
      return;
    }

    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Đăng ký thành công!');
      setEmail('');
      setIsChecked(false);
    }, 2000);
  };

  return (
    <div className=" w-[100%] max-w-9xl mx-auto h-auto bg-gradient-to-br from-purple-400 rounded-2xl  via-purple-700 to-purple-800 flex items-center justify-center px-4 py-13 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
      <div className="absolute top-1/2 right-0 w-2 h-96 bg-white/20 rotate-12" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-y-12" />
      </div>

      <div className="w-full left-10  max-w-6xl grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left: Form */}
        <div className="text-white space-y-8 lg:pr-12">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase opacity-90">
              KHÔNG THỂ BỎ LỠ
            </p>
            <p className="text-5xl lg:text-4xl font-bold text-white whitespace-nowrap">
              Nhận bản tin của MONA.Media
            </p>
          </div>

          <div className="space-y-9">
            <div className="w-[900px]  inline-flex ">
              <Input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[350px] border-0 border-b-2 border-white/60 bg-transparent text-white placeholder:text-white/70 focus:outline-none focus:border-white transition-all text-lg rounded-none"
              />
              <Button
                onClick={() => {
                  if (!email || !isChecked || isLoading) return;
                  handleSubmit();
                }}
                className=" ml-4 bg-orange-400 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg text-sm ${(!email || !isChecked || isLoading) ? 'opacity-50 cursor-not-allowed' : ''"
              >
                {isLoading ? 'Đang xử lý...' : 'Theo dõi ngay'}
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              {/* Box màu trắng */}
              <div className="bg-white h-auto p-1 rounded border border-gray-100 flex items-center space-x-3">
                {/* Checkbox bên trái */}
                <div className="mt-1 ">
                  <Checkbox
                    id="robot-check"
                    checked={isChecked}
                    onCheckedChange={handleCheckedChange}
                    className="w-8 h-8 border-2 border-gray-400 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600"
                  />
                </div>
                {/* Text ở giữa */}
                <div className="flex-1">
                  <label
                    htmlFor="robot-check"
                    className="text-sm text-gray-800 cursor-pointer"
                  >
                    Tôi không phải là robot
                  </label>
                </div>
                {/* Logo và thông tin bên phải */}
                <div className="flex flex-col items-center">
                  {/* Logo reCAPTCHA */}
                  <div className="w-15 h-15 bg-blue-500 rounded-full flex items-center justify-center mb-1">
                    <Image
                      src="https://tse3.mm.bing.net/th/id/OIP.uUdRx8xeFtfLuEJO2wiDWgHaHa?pid=Api&P=0&h=180"
                      alt="icon"
                      className="ảnh logo captcha"
                      width={60}
                      height={60}
                    />
                  </div>
                  {/* Text reCAPTCHA */}
                  <div className="text-[10px] text-gray-500 text-center">
                    <div className="-mt-3">Bảo mật - Điều khoản</div>
                  </div>
                </div>
              </div>
              {/* Hiển thị lỗi nếu có */}
              {error && <p className="text-sm text-red-300">{error}</p>}
            </div>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-60 h-60 -left-18  lg:w-60 lg:h-60 relative  backdrop-blur-sm">
            <div className="text-center relative -left-2 z-10  ">
              <Image
                src="https://mona.media/template/assets/images/blog/blogrc2-icon.png"
                alt="Icon"
                width={60}
                height={60}
              />
            </div>
            <div className="relative w-1 h-[calc(10rem+15rem)] -translate-y-79">
              {/* Vòng tròn trên */}
              <div className="absolute top-0 -left-4 w-10 h-10 bg-white rounded-full z-10" />

              {/* Đường cắt dọc dashed */}
              <div className="absolute top-12 left-1/2 transform  w-[2px] h-[300px] border-l-2 border-dashed border-white z-0" />

              {/* Vòng tròn dưới */}
              <div className="absolute -bottom-0 -left-4 w-10 h-10 bg-white rounded-full z-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCTA;
