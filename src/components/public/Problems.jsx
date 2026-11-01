import React from 'react';
import { Clock, UserX, GitFork, BarChart3, TrendingDown, AlertCircle } from 'lucide-react';

export default function Problems() {
  const problems = [
    {
      num: '01',
      icon: Clock,
      title: 'Khách hàng không được chăm sóc kịp thời',
      desc: 'Khách để lại thông tin từ quảng cáo ban đêm hoặc ngoài giờ làm việc phải chờ nhiều giờ mới có nhân viên gọi, làm giảm nhiệt và đánh mất cơ hội tư vấn vào tay đối thủ.'
    },
    {
      num: '02',
      icon: UserX,
      title: 'Sales mất quá nhiều thời gian sàng lọc thủ công',
      desc: 'Đội ngũ tư vấn phải gọi hàng chục cuộc gọi mỗi ngày cho những người chỉ khảo sát giá, số điện thoại ảo hoặc không có nhu cầu thực, gây quá tải và giảm hiệu suất chốt xe.'
    },
    {
      num: '03',
      icon: GitFork,
      title: 'Thiếu quy trình follow-up khách hàng nhất quán',
      desc: 'Mua ô tô là quyết định lớn cần 3-7 lần tương tác. Khi không có kịch bản nuôi dưỡng tự động đa kênh (Zalo, SMS, Call), hàng chục lead tiềm năng bị lãng quên.'
    },
    {
      num: '04',
      icon: BarChart3,
      title: 'Khó đo lường ROI quảng cáo ra lịch hẹn thực',
      desc: 'Đại lý chi hàng chục triệu cho Meta/Google nhưng chỉ nắm được số CPL (chi phí trên mỗi lead thô), hoàn toàn mù mờ về số lịch hẹn lái thử và doanh thu thực sự mang về.'
    },
    {
      num: '05',
      icon: TrendingDown,
      title: 'Chi phí vận hành tăng vọt theo số lượng lead',
      desc: 'Khi mở rộng ngân sách quảng cáo, đại lý buộc phải tuyển thêm nhân sự CSKH và lễ tân xử lý dữ liệu thủ công, làm tăng chi phí cố định mà tỷ lệ chuyển đổi không tăng.'
    }
  ];

  return (
    <section id="problems" className="py-20 bg-[#0e141f] border-t border-b border-[#202735]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            Điểm Nghẽn Tác Nghiệp Thường Gặp
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            5 Thách Thức Khiến Đại Lý Ô Tô <br />
            <span className="text-slate-400">Lãng Phí Ngân Sách Marketing & Nguồn Lực Sales</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Trong kinh doanh ô tô cao cấp và xe lướt, tạo ra lead mới chỉ là 20% chặng đường. Điểm mấu chốt quyết định doanh thu nằm ở tốc độ phản hồi và năng lực chuyển hóa lead thành cuộc hẹn tại showroom.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative rounded-2xl bg-[#141B26] p-7 border border-slate-800 hover:border-[#C7A66A]/40 transition-all group hover:bg-[#18212e] shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#1E2634] border border-slate-700/80 flex items-center justify-center text-[#C7A66A] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-700 group-hover:text-[#C7A66A]/50 transition-colors">
                      {item.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#C7A66A] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-rose-400/90 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                  Gây lãng phí chi phí & mất khách hàng
                </div>
              </div>
            );
          })}

          {/* Solution Teaser Card */}
          <div className="rounded-2xl bg-gradient-to-br from-[#1E2634] to-[#121A26] p-7 border border-[#C7A66A]/40 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C7A66A] block mb-2">Lời giải toàn diện</span>
              <h3 className="text-xl font-bold text-white">AutoLead Systems giải quyết tận gốc như thế nào?</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Chúng tôi không bán phần mềm rời rạc. Chúng tôi cung cấp một quy trình khép kín từ Quảng cáo $\rightarrow$ AI Phản hồi tức thì $\rightarrow$ Sàng lọc 7 tiêu chí $\rightarrow$ Lên lịch lái thử bàn giao cho Sales.
              </p>
            </div>
            <a
              href="#solutions"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#C7A66A] hover:text-[#D4AF37] transition-colors"
            >
              Xem 6 thành phần giải pháp $\rightarrow$
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
