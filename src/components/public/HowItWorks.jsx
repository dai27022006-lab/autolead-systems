import React from 'react';
import { Target, UserCheck, Bot, CheckSquare, Calendar, UserPlus, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: 'Bước 01',
      phase: 'INPUT',
      title: 'Thu hút khách hàng bằng quảng cáo AI',
      desc: 'Chiến dịch quảng cáo chạy trên Meta, Google, TikTok với nội dung & visual được AI tối ưu riêng theo dòng xe mục tiêu.',
      icon: Target
    },
    {
      step: 'Bước 02',
      phase: 'INPUT',
      title: 'Thu thập dữ liệu lead đa kênh',
      desc: 'Khách hàng để lại thông tin quan tâm xe qua Lead Form, Zalo OA hoặc Hotline, dữ liệu tự động đổ về hệ thống.',
      icon: UserCheck
    },
    {
      step: 'Bước 03',
      phase: 'TRANSFORMATION',
      title: 'AI tự động liên hệ & Follow-up tức thì',
      desc: 'Trong vòng 60 giây, AI tự động kích hoạt kịch bản nhắn tin Zalo hoặc cuộc gọi thoại thông minh để gửi tài liệu và hâm nóng nhu cầu.',
      icon: Bot
    },
    {
      step: 'Bước 04',
      phase: 'TRANSFORMATION',
      title: 'Sàng lọc theo 7 tiêu chí chất lượng',
      desc: 'AI thẩm định dòng xe, mục đích mua, thời điểm, ngân sách tự nguyện và mức độ sẵn sàng đến showroom để loại bỏ lead ảo.',
      icon: CheckSquare
    },
    {
      step: 'Bước 05',
      phase: 'TRANSFORMATION',
      title: 'Chốt lịch hẹn lái thử cụ thể',
      desc: 'Khách hàng đạt chuẩn được hướng dẫn chọn ngày giờ lái thử tiện lợi nhất. Hệ thống tự động khóa lịch và phân công xe.',
      icon: Calendar
    },
    {
      step: 'Bước 06',
      phase: 'OUTPUT',
      title: 'Bàn giao trọn gói cho đội ngũ Sales',
      desc: 'Toàn bộ hồ sơ khách hàng, ghi chú nhu cầu và lịch hẹn xác nhận được chuyển giao trực tiếp cho chuyên viên Sales đón tiếp và chốt hợp đồng.',
      icon: UserPlus
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#0e141f] border-t border-b border-[#202735]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E2634] border border-[#C7A66A]/30 text-[#C7A66A] text-xs font-semibold uppercase tracking-wider mb-4">
            Mô Hình Tác Nghiệp I–T–O
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Quy Trình 6 Bước Chuẩn Hóa <br />
            <span className="gold-gradient-text">Từ Lead Đến Cuộc Hẹn Showroom</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Áp dụng triết lý Lean Operations và BPM: Cắt giảm thời gian chờ đợi, loại bỏ lãng phí tác nghiệp và tối đa hóa tỷ lệ xuất hiện của khách tại showroom.
          </p>
        </div>

        {/* Step Grid with Phase Badges */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((st, i) => {
            const Icon = st.icon;
            const isInput = st.phase === 'INPUT';
            const isOutput = st.phase === 'OUTPUT';
            return (
              <div 
                key={i}
                className="relative rounded-2xl bg-[#141B26] p-7 border border-slate-800 hover:border-[#C7A66A]/50 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#1E2634] text-[#C7A66A] border border-[#C7A66A]/30">
                      {st.step}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded tracking-wider ${
                      isInput ? 'bg-sky-500/10 text-sky-400 border border-sky-500/30' :
                      isOutput ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' :
                      'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    }`}>
                      {st.phase}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#1E2634] border border-slate-700 flex items-center justify-center text-white group-hover:text-[#C7A66A] group-hover:border-[#C7A66A] transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#C7A66A] transition-colors leading-snug">
                    {st.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Trạng thái tiếp theo</span>
                  <ArrowRight className="w-4 h-4 text-[#C7A66A] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Value Stream Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#171D27] via-[#1A2332] to-[#171D27] border border-[#C7A66A]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C7A66A]"></span>
              Hiệu quả tác nghiệp vượt trội (VSM Benchmark)
            </h4>
            <p className="text-xs text-slate-300 mt-1">
              Rút ngắn thời gian phản hồi từ trung bình 4–6 tiếng xuống <strong>dưới 60 giây</strong>. Tăng tỷ lệ lead chuyển đổi thành lịch hẹn lái thử từ <strong>8% lên 28%</strong>.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#C7A66A]/20 border border-[#C7A66A]/40 text-[#C7A66A] text-xs font-bold">
              Lean Waste Reduction: -75%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
