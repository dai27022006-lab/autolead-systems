import React from 'react';
import { ShieldCheck, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenSaas }) {
  return (
    <footer className="bg-[#080c14] border-t border-[#1e2634] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1E2634] to-[#101B2B] border border-[#C7A66A]/50 flex items-center justify-center">
                <span className="text-[#C7A66A] font-extrabold text-base">AL</span>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">AutoLead Systems</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Hệ thống AI tạo khách hàng tiềm năng và hỗ trợ đặt lịch hẹn lái thử đủ điều kiện chuyên biệt cho đại lý xe sang và showroom xe lướt cao cấp.
            </p>
            <p className="mt-3 text-[#C7A66A] font-medium text-xs">
              “From Leads to Qualified Test Drives – Tối ưu hóa chuỗi tác nghiệp chuyển đổi.”
            </p>

            {/* Quick SaaS Launch Button */}
            <div className="mt-6">
              <button
                onClick={onOpenSaas}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#141B26] border border-[#C7A66A]/40 text-[#C7A66A] hover:bg-[#C7A66A] hover:text-[#101B2B] text-xs font-semibold transition-all cursor-pointer"
              >
                <span>Mở Trình Quản Trị Tác Nghiệp SaaS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 3: Giải Pháp */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">6 Chức Năng Cốt Lõi</h4>
            <ul className="space-y-2.5">
              <li><a href="#solutions" className="hover:text-white transition-colors">AI Advertising & Creative</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">AI Lead Reception & Follow-up</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">AI Lead Qualification (7 Tiêu chí)</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Automated Test Drive Appointment</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">CRM & Lead Management (6 Bậc)</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Performance Tracking & Reporting</a></li>
            </ul>
          </div>

          {/* Col 4: Dịch Vụ & Biểu Phí */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Mô Hình Thương Mại</h4>
            <ul className="space-y-2.5">
              <li><span className="text-slate-300">Phí thiết lập: 15.000.000 VNĐ</span></li>
              <li><span className="text-slate-300">Phí kết quả: 300.000 VNĐ / Lịch hẹn</span></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Tiêu chuẩn nghiệm thu TQM</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Lộ trình triển khai 30 ngày</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Chính sách cam kết bảo hành 15 ngày</a></li>
            </ul>
          </div>

          {/* Col 5: Liên Hệ & Học Thuật */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-4">Thông Tin Học Phần</h4>
            <div className="space-y-2 text-slate-400">
              <p><strong className="text-slate-200">Học phần:</strong> Quản trị tác nghiệp TMĐT</p>
              <p><strong className="text-slate-200">Giảng viên:</strong> PGS.TS. Bùi Thành Khoa</p>
              <p><strong className="text-slate-200">Đơn vị:</strong> Khoa Thương Mại - Du Lịch, IUH</p>
              <p><strong className="text-slate-200">Dự án:</strong> Web MVP Giữa kỳ nhóm 10 TV</p>
              <p className="pt-2 text-[11px] text-slate-500">Website: autoleadsystems.com (Dự kiến)</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 AutoLead Systems. Đồ án môn học Quản trị tác nghiệp Thương mại điện tử.</p>
          <div className="flex items-center gap-6">
            <span>Dữ liệu minh họa kiểm thử chuẩn SOP</span>
            <span>Chính sách bảo mật dữ liệu doanh nghiệp</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
