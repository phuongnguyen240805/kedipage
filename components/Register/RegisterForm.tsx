'use client';

import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  User,
  Building2,
  Phone,
  Mail,
  Globe,
  HeartHandshake,
} from 'lucide-react';

type RegisterFormProps = {
  position?: 'left' | 'center' | 'right';
  getRecaptchaToken?: () => Promise<string | null>;
};

const RegisterForm = ({
  position = 'center',
  getRecaptchaToken,
}: RegisterFormProps) => {
  // --- GIỮ NGUYÊN LOGIC ---
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    domain: '',
  });

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false); // Thêm trạng thái gửi
  const [submitMessage, setSubmitMessage] = useState<string>('');
  const [isSubmitError, setIsSubmitError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setSubmitMessage('');
    setIsSubmitError(false);

    let token = captchaToken;
    if (getRecaptchaToken) {
      try {
        token = await getRecaptchaToken();
      } catch (err) {
        console.error('Error executing parent reCAPTCHA:', err);
      }
    }

    if (!token) {
      setSubmitMessage('Vui long xac nhan reCAPTCHA!');
      setIsSubmitError(true);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      token,
      data: {
        ...formData,
        pageUrl: window.location.href,
      },
    };

    setIsSubmitError(false);
    setFormData({ fullName: '', companyName: '', phone: '', email: '', domain: '' });
    setCaptchaToken(null);
    setIsSubmitting(false);

    void fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        const result = await response.json().catch(() => null);

        if (!response.ok || !result?.success) {
          setSubmitMessage(result?.message || 'Xu ly dang ky that bai. Vui long thu lai.');
          setIsSubmitError(true);
          return;
        }

        if (result?.message) {
          setSubmitMessage(result.message);
        }
      })
      .catch((error) => {
        console.error('Submit error:', error);
        setSubmitMessage('Khong the ket noi den may chu. Vui long thu lai.');
        setIsSubmitError(true);
      });
  };

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'ml-0 mr-auto';
      case 'right':
        return 'ml-auto mr-0';
      case 'center':
      default:
        return 'mx-auto';
    }
  };
  // ------------------------

  const fields = [
    {
      name: 'fullName',
      placeholder: 'Nhập họ tên của bạn',
      icon: User,
      required: true,
    },
    {
      name: 'companyName',
      placeholder: 'Tên doanh nghiệp (tùy chọn)',
      icon: Building2,
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Số điện thoại của bạn',
      icon: Phone,
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'email@example.com',
      icon: Mail,
      required: true,
    },
    { name: 'domain', placeholder: 'Website của bạn (tùy chọn)', icon: Globe },
  ];

  return (
    <div
      className={`relative border border-gray-100 max-w-sm rounded-2xl p-6 shadow-2xl shadow-gray-200/80 ${getPositionClasses()} overflow-hidden bg-transparent`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-purple-100/60 blur-[60px] -z-10"></div>

      <div className="mb-8 text-center relative z-10">
        <h3 className="text-2xl font-bold text-gray-900">
          Level-Up Cùng <span className="text-purple-600">KEDI</span>
        </h3>
        <p className="text-sm text-gray-500 mt-2 font-light leading-relaxed">
          Biến website thành cỗ máy &ldquo;render Tiền&rdquo; đúng nghĩa.
        </p>
      </div>

      <div className="space-y-4 relative z-10">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.name} className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 group-focus-within:text-purple-600 transition-colors duration-300">
                <Icon className="h-5 w-5" />
              </div>
              <input
                type={field.type || 'text'}
                name={field.name}
                value={formData[field.name as keyof typeof formData]}
                onChange={handleInputChange}
                className="w-full pl-11 pr-4 py-3 bg-transparent border border-gray-200 rounded-xl focus:outline-none focus:bg-white focus:border-purple-500 focus:ring-1 focus:ring-purple-200 text-gray-900 placeholder:text-gray-400 text-sm transition-all duration-300"
                placeholder={field.placeholder}
                required={field.required}
              />
            </div>
          );
        })}

        <div className="mt-4 flex justify-center py-2">
          <div className="transform scale-[0.85] sm:scale-[0.9] origin-center">
            <ReCAPTCHA
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
              onChange={(token) => setCaptchaToken(token)}
              theme="light"
            />
          </div>
        </div>

        <div className="flex items-start gap-3 bg-purple-50 rounded-lg p-3 border border-purple-100">
          <HeartHandshake className="h-6 w-6 text-purple-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed text-left">
            <span className="font-bold text-gray-800">KEDI</span> sẽ cử riêng
            một{' '}
            <span className="text-purple-700 font-bold">
              &quot;Người Bạn Thân&quot;
            </span>{' '}
            (Account) để đồng hành, hỗ trợ và chăm sóc bạn mãi mãi!
          </p>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 hover:from-purple-700 hover:via-fuchsia-700 hover:to-pink-700 py-6 rounded-xl font-bold text-base tracking-wide text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-purple-200 hover:shadow-purple-400/40 relative overflow-hidden group"
        >
          <span className="relative z-10">{isSubmitting ? 'ĐANG GỬI...' : 'ĐĂNG KÝ NGAY'}</span>
          <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/20"></div>
        </Button>
      </div>
    </div>
  );
};

// Component Demo
const FormDemo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-transparent rounded-3xl">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <RegisterForm position="center" />
      </div>
    </div>
  );
};

export default FormDemo;