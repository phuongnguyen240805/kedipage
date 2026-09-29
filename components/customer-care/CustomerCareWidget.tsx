'use client';

import Image from 'next/image';
import {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import styles from './customer-care-widget.module.css';

type ChatMessage = {
  id: number;
  role: 'bot' | 'user' | 'system';
  text: string;
};

const KEDI_MASCOT = '/homepage/golden-mascot-transparent.png';
const ZALO_ICON = '/customer-care/zalo.png';

const ZALO_URL =
  process.env.NEXT_PUBLIC_KEDI_ZALO_URL?.trim() ||
  'https://zalo.me/4408585214232537731';

// m.me is the standard Messenger deep/universal link: on mobile it hands off
// to the Messenger app when available; otherwise it opens the web conversation.
const MESSENGER_URL =
  process.env.NEXT_PUBLIC_KEDI_MESSENGER_URL?.trim() ||
  'https://m.me/thietkewebsitemonamedia';

const EXTERNAL_CHANNEL_PROPS = {
  target: '_blank' as const,
  rel: 'noopener noreferrer nofollow external',
};

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 1,
    role: 'bot',
    text: 'Xin chào 👋 Mình là Kedi AI. Kedi có thể hỗ trợ bạn về website, automation và các giải pháp số.',
  },
];

export default function CustomerCareWidget() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const nextMessageIdRef = useRef(2);
  const messagesRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      if (expanded) {
        setExpanded(false);
        return;
      }
      if (open) setOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [expanded, open]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      setExpanded(false);
      return;
    }

    requestAnimationFrame(() => textareaRef.current?.focus());
  }, [open]);

  useEffect(() => {
    const viewport = messagesRef.current;
    if (!viewport) return;
    viewport.scrollTop = viewport.scrollHeight;
  }, [messages, typing, open]);

  const getNextMessageId = () => {
    const id = nextMessageIdRef.current;
    nextMessageIdRef.current += 1;
    return id;
  };

  const closePanel = () => {
    setExpanded(false);
    setOpen(false);
  };

  const togglePanel = () => {
    setOpen((current) => {
      if (current) setExpanded(false);
      return !current;
    });
  };

  const addSystemMessage = (text: string) => {
    setMessages((current) => [
      ...current,
      { id: getNextMessageId(), role: 'system', text },
    ]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = input.trim();
    if (!message || typing) return;

    const userId = getNextMessageId();
    const botId = getNextMessageId();
    setMessages((current) => [
      ...current,
      { id: userId, role: 'user', text: message },
    ]);
    setInput('');
    if (textareaRef.current) textareaRef.current.style.height = '44px';
    setTyping(true);

    if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    replyTimerRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        {
          id: botId,
          role: 'bot',
          text: 'Kedi đã nhận được yêu cầu. Đội ngũ KEDI sẽ phản hồi bạn sớm nhất có thể.',
        },
      ]);
      setTyping(false);
    }, 650);
  };

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget;
    setInput(target.value);

    // Auto-grow like a modern AI composer without letting the input take over the chat.
    target.style.height = '44px';
    target.style.height = `${Math.min(target.scrollHeight, 112)}px`;
  };

  const handleTextareaKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== 'Enter' || event.shiftKey) return;
    event.preventDefault();
    event.currentTarget.form?.requestSubmit();
  };

  const handlePickedFile = (file: File | undefined, kind: 'Hình ảnh' | 'Tệp') => {
    if (!file) return;
    addSystemMessage(`${kind} đã chọn: ${file.name}`);
  };



  return (
    <div className={styles.widget} data-kedi-customer-care="true">
      <div
        className={`${styles.backdrop} ${expanded ? styles.backdropVisible : ''}`}
        aria-hidden={!expanded}
        onClick={() => setExpanded(false)}
      />

      <div className={`${styles.satellites} ${open ? styles.satellitesHidden : ''}`}>
        <a
          className={styles.satellite}
          href={ZALO_URL}
          aria-label="Nhắn KEDI qua Zalo"
          {...EXTERNAL_CHANNEL_PROPS}
        >
          <Image
            src={ZALO_ICON}
            alt="Zalo"
            width={60}
            height={60}
            draggable={false}
            className={styles.satelliteImage}
          />
        </a>

        <a
          className={styles.satellite}
          href={MESSENGER_URL}
          aria-label="Nhắn KEDI qua Messenger"
          {...EXTERNAL_CHANNEL_PROPS}
        >
          <svg
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Messenger"
          >
            <defs>
              <radialGradient id="kedi-messenger-gradient" cx="19.25%" cy="99.45%" r="108.96%">
                <stop offset="0" stopColor="#0099FF" />
                <stop offset="0.61" stopColor="#A033FF" />
                <stop offset="0.93" stopColor="#FF5280" />
                <stop offset="1" stopColor="#FF7061" />
              </radialGradient>
            </defs>
            <circle cx="24" cy="24" r="24" fill="url(#kedi-messenger-gradient)" />
            <path
              fill="#fff"
              d="M24 10.5c-7.87 0-14 5.77-14 13.06 0 3.81 1.68 7.11 4.42 9.39.23.19.37.46.38.76l.08 2.5c.02.8.84 1.32 1.57 1l2.79-1.23c.24-.1.5-.12.75-.05 1.28.35 2.63.54 4.01.54 7.87 0 14-5.77 14-13.06S31.87 10.5 24 10.5zm8.41 10.05l-4.11 6.52c-.65 1.04-2.05 1.3-3.03.56l-3.27-2.45a.84.84 0 0 0-1.01 0l-4.42 3.35c-.59.45-1.36-.26-.96-.89l4.11-6.52c.65-1.04 2.05-1.3 3.03-.56l3.27 2.45c.3.22.71.22 1.01 0l4.42-3.35c.59-.45 1.36.26.96.89z"
            />
          </svg>
        </a>
      </div>

      <section
        id="kedi-chat"
        className={`${styles.panel} ${open ? styles.panelOpen : ''} ${
          expanded ? styles.panelExpanded : ''
        }`}
        role="dialog"
        aria-label="Kedi AI"
        aria-modal={expanded || undefined}
      >
        <header className={styles.header}>
          <div className={styles.headerAvatar}>
            <Image
              src={KEDI_MASCOT}
              alt="Golden Kedi"
              width={64}
              height={64}
              draggable={false}
              className={styles.headerAvatarImage}
            />
          </div>

          <div className={styles.headerInfo}>
            <div className={styles.headerTitle}>Kedi AI</div>
            <div className={styles.headerStatus}>Trợ lý AI KEDI — đang online</div>
          </div>

          <button
            className={styles.headerButton}
            type="button"
            title={expanded ? 'Thu nhỏ' : 'Phóng lớn'}
            aria-label={expanded ? 'Thu nhỏ cửa sổ chat' : 'Phóng lớn cửa sổ chat'}
            onClick={() => setExpanded((current) => !current)}
          >
            {expanded ? (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            )}
          </button>

          <button
            className={`${styles.headerButton} ${styles.headerCloseButton}`}
            type="button"
            title="Đóng"
            aria-label="Đóng cửa sổ chat"
            onClick={closePanel}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
              <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          </button>
        </header>

        <div className={styles.messages} ref={messagesRef} aria-live="polite">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`${styles.message} ${
                message.role === 'user'
                  ? styles.userMessage
                  : message.role === 'system'
                    ? styles.systemMessage
                    : styles.botMessage
              }`}
            >
              {message.text}
            </div>
          ))}

          {typing ? (
            <div className={styles.typing} aria-label="Kedi đang nhập">
              <span />
              <span />
              <span />
            </div>
          ) : null}
        </div>

        <div className={styles.channelLine}>
          Nói chuyện với Kedi qua{' '}
          <a
            href={ZALO_URL}
            {...EXTERNAL_CHANNEL_PROPS}
          >
            Zalo
          </a>{' '}
          hoặc{' '}
          <a
            href={MESSENGER_URL}
            {...EXTERNAL_CHANNEL_PROPS}
          >
            Messenger
          </a>{' '}
          đều được 💬
        </div>

        <form className={styles.composer} onSubmit={handleSubmit}>
          <div className={styles.composerShell}>
            <textarea
              ref={textareaRef}
              value={input}
              rows={1}
              maxLength={2000}
              placeholder="Nhập tin nhắn cho Kedi AI..."
              aria-label="Nội dung tin nhắn"
              onChange={handleInputChange}
              onKeyDown={handleTextareaKeyDown}
            />

            <div className={styles.composerToolbar}>
              <div className={styles.composerTools}>
                <button
                  className={styles.composerIcon}
                  type="button"
                  title="Gửi hình ảnh"
                  aria-label="Chọn hình ảnh"
                  onClick={() => imageInputRef.current?.click()}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.75 4.75h14.5v14.5H4.75z" />
                    <circle cx="9" cy="9" r="1.5" />
                    <path d="m6.5 17 4-4 2.5 2.5 2-2 2.5 3.5" />
                  </svg>
                </button>
                <button
                  className={styles.composerIcon}
                  type="button"
                  title="Đính kèm tệp"
                  aria-label="Chọn tệp"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m8.5 12.5 6.1-6.1a3 3 0 0 1 4.25 4.24l-7.3 7.3a4.5 4.5 0 0 1-6.36-6.36l7.07-7.07" />
                  </svg>
                </button>
              </div>

              <span className={styles.composerHint}>Enter để gửi · Shift + Enter xuống dòng</span>

              <button
                className={styles.sendButton}
                type="submit"
                aria-label="Gửi tin nhắn"
                title="Gửi tin nhắn"
                disabled={!input.trim() || typing}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 19V5m0 0-6 6m6-6 6 6" />
                </svg>
              </button>
            </div>
          </div>

          <input
            ref={imageInputRef}
            className={styles.hiddenInput}
            type="file"
            accept="image/*"
            onChange={(event) => {
              handlePickedFile(event.target.files?.[0], 'Hình ảnh');
              event.currentTarget.value = '';
            }}
          />
          <input
            ref={fileInputRef}
            className={styles.hiddenInput}
            type="file"
            onChange={(event) => {
              handlePickedFile(event.target.files?.[0], 'Tệp');
              event.currentTarget.value = '';
            }}
          />
        </form>

        <div className={styles.footerLine}>
          AI chăm sóc khách hàng bởi <strong>KEDI</strong>
        </div>
      </section>

      <button
        className={`${styles.bubble} ${open ? styles.bubbleOpen : ''}`}
        type="button"
        aria-label={open ? 'Đóng chat Kedi AI' : 'Mở chat Kedi AI'}
        aria-expanded={open}
        aria-controls="kedi-chat"
        onClick={togglePanel}
      >
        <span className={styles.bubbleAvatar} aria-hidden={open}>
          <Image
            src={KEDI_MASCOT}
            alt=""
            width={96}
            height={96}
            draggable={false}
            className={styles.bubbleAvatarImage}
          />
        </span>
        <svg className={styles.bubbleCloseIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
}
