import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Zap, Calendar, TrendingUp } from 'lucide-react';

export default function Hero({ onOpenSaas, onScrollToContact }) {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Decorative luxury automotive background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#C7A66A]/10 to-transparent blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171D27] border border-[#C7A66A]/40 text-xs sm:text-sm font-medium text-[#C7A66A] mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C7A66A]"></span>
            Hệ thống AI Tác nghiệp Độc quyền cho Đại lý Ô tô & Showroom Xe lướt
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Chuyển Đổi Khách Hàng Tiềm Năng Thành <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Cuộc Hẹn Lái Thử Đủ Điều Kiện</span>
          </h1>

          {/* Subtitle / Core Value Proposition */}
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            AutoLead Systems kết hợp quảng cáo số, trí tuệ nhân tạo và hệ thống CRM tinh gọn để xây dựng quy trình tiếp nhận – sàng lọc – chốt lịch hẹn lái thử chuẩn xác, <span className="text-white font-medium">giúp đội ngũ Sales tập trung vào khách hàng thực sự có nhu cầu mua xe</span>.
          </p>

          {/* Key Metric Highlights */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C7A66A]" />
              <span>Phí thiết lập: <strong className="text-white font-semibold">15.000.000 VNĐ</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C7A66A]" />
              <span>Phí theo kết quả: <strong className="text-white font-semibold">300.000 VNĐ/Lịch hẹn</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#C7A66A]" />
              <span>Bàn giao vận hành: <strong className="text-white font-semibold">Trong 30 ngày</strong></span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#C7A66A] to-[#B08D4C] hover:from-[#D4AF37] hover:to-[#C7A66A] text-[#101B2B] font-bold text-sm shadow-xl shadow-[#C7A66A]/20 hover:shadow-[#C7A66A]/35 transition-all cursor-pointer group"
            >
              <span>Đăng Ký Tư Vấn 30 Phút Cho Đại Lý</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenSaas}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#171D27] hover:bg-[#1E2634] text-white font-semibold text-sm border border-slate-700 hover:border-[#C7A66A]/60 transition-all cursor-pointer"
            >
              <span>Trải Nghiệm Hệ Thống SaaS CRM</span>
              <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">Live Demo</span>
            </button>
          </div>
        </div>

        {/* Hero Visual: Interactive Mock Preview */}
        <div className="mt-16 relative mx-auto max-w-5xl rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#202735] to-[#101B2B] border border-slate-700/80 shadow-2xl">
          <div className="rounded-xl bg-[#0d121c] p-4 sm:p-6 border border-slate-800">
            {/* Window control bar */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/70 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block"></span>
                <span className="ml-2 font-mono text-[11px] text-slate-500">AutoLead Systems | Showroom Operations Console v1.0</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-700/50 text-emerald-400 text-[11px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  AI Follow-up Active
                </span>
              </div>
            </div>

            {/* Quick Hero Metrics Showcase */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-5">
              <div className="p-3.5 rounded-xl bg-[#171D27] border border-slate-800">
                <span className="text-xs text-slate-400 block">Lead Mới Tiếp Nhận</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-white">48</span>
                  <span className="text-[11px] text-emerald-400 font-medium">+18% tuần này</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#171D27] border border-slate-800">
                <span className="text-xs text-slate-400 block">Sàng Lọc Đạt Chuẩn AI</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-[#C7A66A]">22</span>
                  <span className="text-[11px] text-slate-400 font-medium">Tỷ lệ: 45.8%</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#171D27] border border-[#C7A66A]/30 bg-gradient-to-br from-[#171D27] to-[#1E2634]">
                <span className="text-xs text-[#C7A66A] font-medium block">Lịch Hẹn Đã Chốt (CPA)</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-white">14</span>
                  <span className="text-[11px] text-emerald-400 font-medium">300.000đ/lịch</span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#171D27] border border-slate-800">
                <span className="text-xs text-slate-400 block">Thời Gian Phản Hồi AI</span>
                <div className="flex items-baseline justify-between mt-1">
                  <span className="text-xl sm:text-2xl font-bold text-white">&lt; 60s</span>
                  <span className="text-[11px] text-indigo-400 font-medium">Tự động 24/7</span>
                </div>
              </div>
            </div>

            {/* Micro Flow snippet banner */}
            <div className="mt-4 p-3 rounded-lg bg-[#141B26] border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2">
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#C7A66A]" />
                <span>Quy trình tác nghiệp tinh gọn: <strong>Quảng cáo $\rightarrow$ AI Sàng lọc $\rightarrow$ Lịch hẹn Showroom $\rightarrow$ Sales chốt xe</strong></span>
              </span>
              <button 
                onClick={onOpenSaas} 
                className="text-[#C7A66A] hover:underline font-semibold flex items-center gap-1 cursor-pointer"
              >
                Khám phá đầy đủ 6 chức năng $\rightarrow$
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
