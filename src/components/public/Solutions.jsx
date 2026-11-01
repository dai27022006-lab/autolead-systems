import { Palette, PhoneCall, Filter, CalendarCheck, Kanban, LineChart, CheckCircle2 } from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      id: 'sol-1',
      icon: Palette,
      title: '1. AI Advertising & Creative',
      subtitle: 'Sản xuất nội dung & hình ảnh quảng cáo tự động',
      description: 'Sử dụng AI tạo hàng loạt mẫu quảng cáo hình ảnh và thông điệp tối ưu riêng cho từng dòng xe sang và xe lướt, thử nghiệm A/B liên tục để giảm chi phí tiếp cận.',
      deliverables: [
        'Ý tưởng & visual quảng cáo chuẩn thẩm mỹ xe cao cấp',
        'Các phiên bản nội dung thử nghiệm A/B tự động',
        'Cấu hình phễu thu thập thông tin khách hàng tiềm năng',
        'Đo lường CTR và chi phí trên từng lượt tương tác'
      ]
    },
    {
      id: 'sol-2',
      icon: PhoneCall,
      title: '2. AI Lead Reception & Follow-up',
      subtitle: 'Phản hồi trong 60 giây & chăm sóc đa kênh 24/7',
      description: 'Tiếp nhận tức thời mọi yêu cầu từ Meta Ads, Google, TikTok và Zalo OA. Tự động gửi tài liệu xe, catalogue, video trải nghiệm và kích hoạt kịch bản follow-up thông minh.',
      deliverables: [
        'Tiếp nhận tự động đa kênh không để khách chờ',
        'Hệ thống tin nhắn Zalo OA kịch bản cá nhân hoá',
        'Theo dõi tiến độ tương tác và tỷ lệ mở tin nhắn',
        'Chuyển các trường hợp cần can thiệp nóng cho Sales'
      ]
    },
    {
      id: 'sol-3',
      icon: Filter,
      title: '3. AI Lead Qualification',
      subtitle: 'Sàng lọc chuẩn xác theo bộ tiêu chuẩn 7 điều kiện',
      description: 'AI đánh giá độ nét của nhu cầu: dòng xe quan tâm, mục đích sử dụng, khoảng ngân sách tự nguyện, thời gian dự kiến mua và mức độ sẵn sàng đến showroom.',
      deliverables: [
        'Bộ checklist 7 tiêu chí thẩm định chất lượng lead',
        'Chấm điểm AI Qualification Score (0-100%)',
        'Gợi ý lý do phân loại và khuyến nghị hành động kế tiếp',
        'Loại bỏ lead rác, tiết kiệm 70% thời gian cho Sales'
      ]
    },
    {
      id: 'sol-4',
      icon: CalendarCheck,
      title: '4. Automated Test Drive Appointment',
      subtitle: 'Chốt lịch hẹn lái thử cụ thể & nhắc hẹn thông minh',
      description: 'Hướng khách hàng đủ điều kiện đến bước chọn ngày giờ trải nghiệm xe tại showroom hoặc tại nhà. Hệ thống tự kiểm tra xe lái thử và phân bổ nhân sự tư vấn.',
      deliverables: [
        'Ghi nhận chính xác ngày, giờ và địa điểm lái thử',
        'Kiểm tra tình trạng sẵn sàng của dòng xe tương ứng',
        'Tự động gửi thông báo xác nhận và định vị showroom',
        'Gửi tin nhắn nhắc lịch trước 24h & 2h nhằm giảm tỷ lệ No-show'
      ]
    },
    {
      id: 'sol-5',
      icon: Kanban,
      title: '5. CRM & Lead Management',
      subtitle: 'Quản trị quy trình khép kín 6 trạng thái chuẩn',
      description: 'Tất cả dữ liệu được đồng bộ về bảng điều khiển trực quan dạng Kanban và Danh sách, theo dõi từng bước di chuyển của khách từ khi là lead thô đến khi chốt xe.',
      deliverables: [
        '6 trạng thái: New Lead $\\rightarrow$ Contacted $\\rightarrow$ Qualified $\\rightarrow$ Appointment $\\rightarrow$ Visit $\\rightarrow$ Sales Opportunity',
        'Lịch sử tương tác đầy đủ (Omnichannel Log)',
        'Ghi chú nội bộ và phân quyền cho từng nhân viên Sales',
        'Tìm kiếm, lọc nâng cao theo mẫu xe và phân khúc'
      ]
    },
    {
      id: 'sol-6',
      icon: LineChart,
      title: '6. Performance Tracking & Reporting',
      subtitle: 'Đo lường phễu chuyển đổi & chi phí minh bạch',
      description: 'Dashboard thời gian thực đo lường chính xác hiệu quả từng chiến dịch, số lead đủ điều kiện, số lịch hẹn thực tế và chi phí CPA chuẩn 300.000 VNĐ/lịch hẹn.',
      deliverables: [
        'Báo cáo phễu chuyển đổi từ Lead $\\rightarrow$ Lịch hẹn $\\rightarrow$ Doanh số',
        'Tính toán minh bạch phí dịch vụ theo kết quả (300.000đ/lịch)',
        'Thống kê hiệu quả theo từng nguồn quảng cáo và mẫu xe',
        'Phát hiện điểm nghẽn (bottleneck) để cải tiến liên tục theo Lean'
      ]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-[#0b1019] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E2634] border border-[#C7A66A]/40 text-[#C7A66A] text-xs font-bold uppercase tracking-wider mb-4">
            Giải Pháp Cốt Lõi 6 Chức Năng
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Hệ Thống Tác Nghiệp Khép Kín <br />
            <span className="gold-gradient-text">Từ Quảng Cáo Đến Cuộc Hẹn Lái Thử</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            AutoLead Systems tích hợp 6 trụ cột công nghệ và quy trình vận hành giúp đại lý tối ưu hóa toàn bộ chuỗi chuyển đổi khách hàng mà không cần gia tăng nhân sự xử lý.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[#141B26] border border-slate-800 p-8 hover:border-[#C7A66A]/60 transition-all group hover:bg-[#17202e] shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#1E2634] border border-[#C7A66A]/30 flex items-center justify-center text-[#C7A66A] group-hover:bg-[#C7A66A] group-hover:text-[#101B2B] transition-all mb-6 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#C7A66A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C7A66A] mt-1 uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-800/80">
                    <span className="text-xs font-bold uppercase text-slate-300 block mb-3">Đại lý nhận được:</span>
                    <ul className="space-y-2.5">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300 leading-normal">
                          <CheckCircle2 className="w-4 h-4 text-[#C7A66A] shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
