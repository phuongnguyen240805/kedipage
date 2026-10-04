'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { LockKeyhole, Paperclip, Zap } from 'lucide-react';
import styles from './home-contact.module.css';
import LiquidSelect from '@/components/liquid-glass/LiquidSelect';

type ContactTab = 'customer' | 'partner' | 'candidate';

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  partnerType: string;
  position: string;
  portfolio: string;
  cvName: string;
};

const INITIAL_FORM: FormData = {
  fullName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  partnerType: '',
  position: '',
  portfolio: '',
  cvName: '',
};

const SERVICES = [
  'Website cho doanh nghiệp / tổ chức / cá nhân',
  'SEO / Marketing',
  'Dịch vụ quay chụp',
  'Hosting / VPS / Cloud',
  'Web-App / phần mềm quản trị',
  'Mobile App',
  'AI Agent / AI Automation',
  'Outsource - dành cho đối tác',
];

const POSITIONS = [
  'Business Development / Sales',
  'UX/UI Designer',
  'Frontend Developer',
  'Backend Developer',
  'Mobile Developer',
  'AI / Automation Engineer',
  'SEO / Digital Marketing',
  'Tech Support',
];

const TAB_LABELS: Array<{ key: ContactTab; label: string }> = [
  { key: 'customer', label: 'Khách hàng' },
  { key: 'partner', label: 'Đối tác' },
  { key: 'candidate', label: 'Ứng viên' },
];

export default function ConsultationForm() {
  const recaptchaSiteKey =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.siteKey || '';

  const [activeTab, setActiveTab] = useState<ContactTab>('customer');
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaVersion, setCaptchaVersion] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const messageCount = useMemo(() => formData.message.length, [formData.message]);

  const updateField = (field: keyof FormData) => (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleTabChange = (tab: ContactTab) => {
    setActiveTab(tab);
    setCaptchaToken(null);
    setCaptchaVersion((version) => version + 1);
    setFeedback(null);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFormData((current) => ({ ...current, cvName: file?.name || '' }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    if (!recaptchaSiteKey) {
      setFeedback({
        type: 'error',
        text: 'reCAPTCHA chưa được cấu hình. Vui lòng kiểm tra biến môi trường.',
      });
      return;
    }

    if (!captchaToken) {
      setFeedback({ type: 'error', text: 'Vui lòng xác nhận reCAPTCHA.' });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    const contextByTab: Record<ContactTab, string> = {
      customer: formData.service,
      partner: formData.partnerType
        ? `Đối tác: ${formData.partnerType}`
        : 'Đối tác',
      candidate: formData.position
        ? `Ứng tuyển: ${formData.position}`
        : 'Ứng viên',
    };

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: captchaToken,
          data: {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            companyName: contextByTab[activeTab],
            domain: activeTab === 'candidate' ? formData.portfolio : '',
            pageUrl: window.location.href,
          },
        }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || 'Gửi yêu cầu chưa thành công.');
      }

      setFeedback({
        type: 'success',
        text: result?.message || 'KEDI đã nhận được yêu cầu của bạn.',
      });
      setFormData(INITIAL_FORM);
      setCaptchaToken(null);
      setCaptchaVersion((version) => version + 1);
    } catch (error) {
      setFeedback({
        type: 'error',
        text:
          error instanceof Error
            ? error.message
            : 'Không thể kết nối tới máy chủ. Vui lòng thử lại.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className={styles.tabs} role="tablist" aria-label="Nhóm liên hệ">
        {TAB_LABELS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.key}
            className={`${styles.tab} ${
              activeTab === tab.key ? styles.tabActive : ''
            }`}
            onClick={() => handleTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formPanel} key={activeTab} role="tabpanel">
          <div className={styles.fieldRow}>
            <input
              className={styles.input}
              type="text"
              required
              autoComplete="name"
              placeholder="Họ và tên của bạn"
              value={formData.fullName}
              onChange={updateField('fullName')}
            />
          </div>

          {activeTab === 'partner' ? (
            <div className={styles.fieldRow}>
              <LiquidSelect
                label="Loại đối tác"
                className={`${styles.input} ${styles.select}`}
                required
                value={formData.partnerType}
                onValueChange={(value) => setFormData(current => ({ ...current, partnerType: value }))}
              >
                <option value="" disabled>
                  Bạn là cá nhân hay doanh nghiệp?
                </option>
                <option value="Cá nhân">Cá nhân</option>
                <option value="Doanh nghiệp">Doanh nghiệp</option>
              </LiquidSelect>
            </div>
          ) : null}

          <div className={styles.fieldRow}>
            <input
              className={styles.input}
              type="email"
              required
              autoComplete="email"
              placeholder="Email"
              value={formData.email}
              onChange={updateField('email')}
            />
          </div>

          <div className={styles.fieldRow}>
            <input
              className={styles.input}
              type="tel"
              required
              autoComplete="tel"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={updateField('phone')}
            />
          </div>

          {activeTab === 'customer' ? (
            <>
              <div className={styles.fieldRow}>
                <LiquidSelect
                  label="Dịch vụ bạn quan tâm"
                  className={`${styles.input} ${styles.select}`}
                  required
                  value={formData.service}
                  onValueChange={(value) => setFormData(current => ({ ...current, service: value }))}
                >
                  <option value="" disabled>
                    Vui lòng chọn dịch vụ mà bạn quan tâm
                  </option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </LiquidSelect>
              </div>

              <div className={`${styles.fieldRow} ${styles.textareaRow}`}>
                <textarea
                  className={`${styles.input} ${styles.textarea}`}
                  maxLength={200}
                  placeholder="Yêu cầu cụ thể (nếu có)"
                  value={formData.message}
                  onChange={updateField('message')}
                />
                <span className={styles.counter}>{messageCount}/200</span>
              </div>
            </>
          ) : null}

          {activeTab === 'partner' ? (
            <div className={`${styles.fieldRow} ${styles.textareaRow}`}>
              <textarea
                className={`${styles.input} ${styles.textarea}`}
                maxLength={200}
                placeholder="Yêu cầu cụ thể (nếu có)"
                value={formData.message}
                onChange={updateField('message')}
              />
              <span className={styles.counter}>{messageCount}/200</span>
            </div>
          ) : null}

          {activeTab === 'candidate' ? (
            <>
              <div className={styles.fieldRow}>
                <LiquidSelect
                  label="Vị trí ứng tuyển"
                  className={`${styles.input} ${styles.select}`}
                  required
                  value={formData.position}
                  onValueChange={(value) => setFormData(current => ({ ...current, position: value }))}
                >
                  <option value="" disabled>
                    Bạn muốn ứng tuyển vị trí nào ở KEDI?
                  </option>
                  {POSITIONS.map((position) => (
                    <option key={position} value={position}>
                      {position}
                    </option>
                  ))}
                </LiquidSelect>
              </div>

              <div className={styles.fileField}>
                <label className={styles.fileLabel} htmlFor="kedi-contact-cv">
                  <span>{formData.cvName || 'CV của bạn (PDF)'}</span>
                  <Paperclip aria-hidden="true" />
                </label>
                <input
                  id="kedi-contact-cv"
                  className={styles.fileInput}
                  type="file"
                  accept=".pdf,application/pdf"
                  onChange={handleFileChange}
                />
              </div>

              <div className={styles.fieldRow}>
                <input
                  className={styles.input}
                  type="url"
                  placeholder="Link Portfolio (nếu có)"
                  value={formData.portfolio}
                  onChange={updateField('portfolio')}
                />
              </div>
            </>
          ) : null}

          <div className={styles.captchaRow}>
            {recaptchaSiteKey ? (
              <div className={styles.captchaScale}>
                <ReCAPTCHA
                  key={`${activeTab}-${captchaVersion}`}
                  sitekey={recaptchaSiteKey}
                  onChange={setCaptchaToken}
                  theme="light"
                />
              </div>
            ) : (
              <p className={styles.configError}>reCAPTCHA chưa được cấu hình.</p>
            )}
          </div>

          {feedback ? (
            <p
              className={`${styles.feedback} ${
                feedback.type === 'success'
                  ? styles.feedbackSuccess
                  : styles.feedbackError
              }`}
              role="status"
            >
              {feedback.text}
            </p>
          ) : null}

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting || !recaptchaSiteKey}
          >
            <span className={styles.submitContent}>
              <Zap className={styles.submitIcon} aria-hidden="true" />
              <span>
                {isSubmitting
                  ? 'Đang gửi yêu cầu...'
                  : activeTab === 'candidate'
                    ? 'Gửi ngay cho chúng tôi'
                    : 'Yêu cầu tư vấn MIỄN PHÍ!'}
              </span>
            </span>
          </button>
        </div>
      </form>

      <div className={styles.privacy}>
        <span className={styles.privacyIcon}>
          <LockKeyhole aria-hidden="true" />
        </span>
        KEDI cam kết không sử dụng thông tin của bạn để bán hoặc SPAM
      </div>
    </>
  );
}
