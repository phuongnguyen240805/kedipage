'use client';

import Image from 'next/image';

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-center gap-3">
      {/* Zalo */}
      <a
        href="https://zalo.me/yourZaloID"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
      >
        <Image
          src="/images/zalo-button.png"
          alt="Zalo"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/yourMessengerUsername"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
      >
        <Image
          src="/images/messenger-button.png"
          alt="Messenger"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/yourTelegramUsername"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
      >
        <Image
          src="/images/telegram-button.png"
          alt="Telegram"
          width={48}
          height={48}
          className="w-full h-full object-cover"
        />
      </a>
    </div>
  );
}
