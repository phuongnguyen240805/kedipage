"use client";

interface GoldenFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function Boderyelow({ children, className = "" }: GoldenFrameProps) {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative w-full h-full">
        <div className={`
          relative
          h-full
          rounded-xl
          border border-kedi-yellow/50
          
          /* Shadow mặc định - Đã xóa inset để không lấn vào trong */
          shadow-[0_0_15px_rgba(255,198,41,0.3)]
          
          transition-all duration-500
          
          /* HIỆU ỨNG HOVER */
          hover:border-kedi-yellow 
          /* Tăng cường độ sáng tỏa ra bên ngoài */
          hover:shadow-[0_0_30px_rgba(255,198,41,0.5),0_0_10px_rgba(255,198,41,0.3)]
          
          /* KHÔNG DÙNG brightness ở đây để bảo vệ nội dung bên trong */
        `}>
          {/* Nội dung bên trong luôn giữ nguyên trạng thái gốc */}
          <div className="relative z-10 h-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}