import React, { useState } from 'react';
import { Check, X, ShieldCheck, Calculator, Sparkles, HelpCircle } from 'lucide-react';

export default function Pricing({ onScrollToContact }) {
  const [appointmentCount, setAppointmentCount] = useState(20);

  const setupFee = 15000000;
  const pricePerApt = 300000;
  const variableCost = appointmentCount * pricePerApt;
  const totalCost = setupFee + variableCost;

  const formatVND = (num) => {
    return new Intl.NumberFormat('vi-VN').format(num) + ' VNĐ';
  };

  const setupIncludes = [
    'Khảo sát & phân tích mô hình kinh doanh đại lý',
    'Thiết kế quy trình tạo & chuyển đổi khách hàng số',
    'Thiết lập hệ thống quảng cáo & creative AI',
    'Cấu hình công cụ AI chăm sóc & kịch bản hội thoại',
    'Thiết lập bộ tiêu chuẩn 7 điều kiện sàng lọc lead',
    'Thiết lập quy trình đặt lịch & nhắc lịch lái thử',
    'Cấu hình CRM tác nghiệp & tracking phễu chuyển đổi',
    'Kiểm thử end-to-end, bàn giao & đào tạo sử dụng'
  ];

  const excludedCosts = [
    'Ngân sách chi trả cho nền tảng quảng cáo (Meta, Google, TikTok)',
    'Phí duy trì tài khoản phần mềm bên thứ ba',
    'Cước viễn thông tin nhắn Zalo ZNS / cuộc gọi thoại (nếu phát sinh)',
    'Chi phí sản xuất video, chụp ảnh ngoại cảnh ngoài phạm vi',
    'Lương thưởng và hoa hồng nhân sự Sales của đại lý'
  ];

  const qualificationConditions = [
    'Khách hàng cung cấp thông tin liên hệ hợp lệ (SĐT chính chủ, Zalo, Email)',
    'Có nhu cầu tìm hiểu hoặc mua xe rõ ràng',
    'Quan tâm đến mẫu xe hoặc phân khúc xe cụ thể tại showroom',
    'Đáp ứng tiêu chuẩn khách hàng mục tiêu đã thống nhất',
    'Đồng ý đến showroom để xem xe hoặc đăng ký lái thử',
    'Có thời gian hẹn cụ thể (ngày, giờ xác định)',
    'Lịch hẹn được xác nhận và ghi nhận chính thức trên hệ thống'
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0b1019] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E2634] border border-[#C7A66A]/40 text-[#C7A66A] text-xs font-bold uppercase tracking-wider mb-4">
            Chính Sách Giá & Cam Kết
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Mô Hình Hợp Tác Linh Hoạt: <br />
            <span className="gold-gradient-text">Setup Fee + Phí Theo Lịch Hẹn Đủ Điều Kiện</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Chúng tôi gắn liền thành công của AutoLead Systems với kết quả thực tế của đại lý: Chỉ tính phí trên các cuộc hẹn lái thử đạt chuẩn chất lượng.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Setup Fee */}
          <div className="rounded-3xl bg-[#141B26] border border-slate-800 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative">
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C7A66A]">Gói khởi tạo ban đầu</span>
                  <h3 className="text-2xl font-black text-white mt-1">Phí Triển Khai Hệ Thống</h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 border border-slate-700">
                  Trả 1 lần duy nhất
                </span>
              </div>

              <div className="mt-6 pb-6 border-b border-slate-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">15.000.000</span>
                  <span className="text-lg font-bold text-slate-400">VNĐ</span>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Hoàn thiện và bàn giao quy trình tác nghiệp khép kín trong vòng 30 ngày.
                </p>
              </div>

              <div className="mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-4">Hạng mục bao gồm:</span>
                <ul className="space-y-3">
                  {setupIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-[#C7A66A]/10 border border-[#C7A66A]/40 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#C7A66A]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onScrollToContact}
                className="w-full py-3.5 rounded-xl bg-[#1E2634] hover:bg-[#283244] border border-slate-700 hover:border-[#C7A66A] text-white text-sm font-semibold transition-all cursor-pointer"
              >
                Nhận Báo Giá Chi Tiết Theo Showroom
              </button>
            </div>
          </div>

          {/* Card 2: Performance-Based Fee */}
          <div className="rounded-3xl bg-gradient-to-b from-[#192231] to-[#121A26] border-2 border-[#C7A66A]/60 p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative gold-border-glow">
            <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-[#C7A66A] text-[#101B2B] text-xs font-black uppercase tracking-wider shadow-md">
              Pay-for-Performance
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C7A66A]">Phí theo kết quả đo lường</span>
                  <h3 className="text-2xl font-black text-white mt-1">Lịch Hẹn Đủ Điều Kiện</h3>
                </div>
              </div>

              <div className="mt-6 pb-6 border-b border-slate-800">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-[#C7A66A] tracking-tight">300.000</span>
                  <span className="text-lg font-bold text-slate-400">VNĐ / Lịch hẹn</span>
                </div>
                <p className="text-xs text-slate-300 mt-2">
                  Chỉ tính phí khi khách đáp ứng đầy đủ 7 tiêu chuẩn chất lượng và có lịch hẹn cụ thể.
                </p>
              </div>

              {/* Interactive Calculator */}
              <div className="mt-6 p-5 rounded-2xl bg-[#0f1520] border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#C7A66A]" />
                    <span className="text-xs font-bold text-slate-200">Dự tính chi phí theo tháng:</span>
                  </div>
                  <span className="text-sm font-black text-[#C7A66A]">{appointmentCount} cuộc hẹn</span>
                </div>

                <input
                  type="range"
                  min="5"
                  max="60"
                  step="5"
                  value={appointmentCount}
                  onChange={(e) => setAppointmentCount(Number(e.target.value))}
                  className="w-full accent-[#C7A66A] cursor-pointer"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>5 lịch</span>
                  <span>20 lịch</span>
                  <span>40 lịch</span>
                  <span>60 lịch</span>
                </div>

                {/* Calculation breakdown */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Phí lịch hẹn ({appointmentCount} $\times$ 300.000đ):</span>
                    <span className="font-bold text-slate-200">{formatVND(variableCost)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Phí triển khai ban đầu:</span>
                    <span className="text-slate-200">{formatVND(setupFee)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-slate-800 font-bold text-sm">
                    <span className="text-white">Tổng tháng đầu tiên:</span>
                    <span className="text-[#C7A66A]">{formatVND(totalCost)}</span>
                  </div>
                </div>
              </div>

              {/* Exclusion Checklist */}
              <div className="mt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">Chi phí chưa bao gồm:</span>
                <ul className="space-y-2">
                  {excludedCosts.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <X className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                onClick={onScrollToContact}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C7A66A] to-[#B08D4C] hover:from-[#D4AF37] hover:to-[#C7A66A] text-[#101B2B] font-bold text-sm shadow-lg transition-all cursor-pointer"
              >
                Đặt Lịch Khảo Sát & Thiết Lập Hệ Thống
              </button>
            </div>
          </div>
        </div>

        {/* 7 Conditions Box (TQM Standards) */}
        <div className="mt-14 p-8 rounded-3xl bg-[#141B26] border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C7A66A]" />
                <h3 className="text-lg font-bold text-white">7 Tiêu Chuẩn Lịch Hẹn Lái Thử Đủ Điều Kiện (Qualified Appointment)</h3>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Nguyên tắc minh bạch TQM: AutoLead Systems cam kết không tính phí đối với lead trùng lặp, thông tin ảo hoặc các cuộc hẹn bị hủy trước giờ hẹn.
              </p>
            </div>
            <span className="inline-block px-3 py-1 rounded bg-[#C7A66A]/10 text-[#C7A66A] border border-[#C7A66A]/30 text-xs font-bold shrink-0">
              Chuẩn Nghiệm Thu Chất Lượng
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {qualificationConditions.map((cond, cIdx) => (
              <div key={cIdx} className="p-4 rounded-xl bg-[#0f1520] border border-slate-800/80 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#1E2634] text-[#C7A66A] text-xs font-bold flex items-center justify-center shrink-0 border border-[#C7A66A]/30">
                  {cIdx + 1}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {cond}
                </p>
              </div>
            ))}
            <div className="p-4 rounded-xl bg-[#1C1710] border border-[#C7A66A]/40 flex flex-col justify-center text-center">
              <span className="text-xs font-bold text-[#C7A66A]">Đối Soát Minh Bạch</span>
              <p className="text-[11px] text-slate-400 mt-1">Ghi nhận và xuất file đối soát trước khi thanh toán phí kết quả.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
