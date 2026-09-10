export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-20">
      <h1 className="text-5xl font-black uppercase tracking-tighter">
        Chào mừng trở lại, Master Admin
      </h1>
      <p className="text-yellow-500 mt-4 italic">Toàn bộ hệ thống đã sẵn sàng điều khiển.</p>
      
      {/* Thêm các bảng quản lý nội dung ở đây */}
      <div className="grid grid-cols-3 gap-10 mt-20">
        <div className="h-40 border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
          <h3 className="text-sm font-bold opacity-50 uppercase">Quản lý Website</h3>
          <p className="text-2xl mt-2 font-black italic">1,248 Mẫu</p>
        </div>
        <div className="h-40 border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
          <h3 className="text-sm font-bold opacity-50 uppercase">Người dùng mới</h3>
          <p className="text-2xl mt-2 font-black italic">+86 Hôm nay</p>
        </div>
        <div className="h-40 border border-white/10 rounded-3xl p-8 bg-white/5 hover:bg-white/10 transition-all cursor-pointer">
          <h3 className="text-sm font-bold opacity-50 uppercase">Doanh thu</h3>
          <p className="text-2xl mt-2 font-black italic">$42.5K</p>
        </div>
      </div>
    </div>
  );
}