import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, AlertCircle, Building2, User, Phone, Mail, MapPin, Layers } from 'lucide-react';
import { storageService } from '../../services/storage';

export default function ConsultationForm({ onInquirySubmitted }) {
  const [formData, setFormData] = useState({
    dealershipName: '',
    contactPerson: '',
    phone: '',
    email: '',
    location: '',
    dealershipType: 'Đại lý chính hãng xe sang',
    monthlyLeadVolume: '100 - 200 leads/tháng',
    notes: '',
    agreedConsent: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.dealershipName.trim()) {
      errs.dealershipName = 'Vui lòng nhập tên đại lý hoặc showroom';
    }
    if (!formData.contactPerson.trim()) {
      errs.contactPerson = 'Vui lòng nhập họ tên người phụ trách';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Vui lòng nhập số điện thoại liên hệ';
    } else if (!/^(0[3|5|7|8|9])[0-9]{8}$/.test(formData.phone.replace(/\s+/g, ''))) {
      errs.phone = 'Số điện thoại không đúng định dạng Việt Nam (10 số)';
    }
    if (!formData.email.trim()) {
      errs.email = 'Vui lòng nhập email công việc';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Địa chỉ email không hợp lệ';
    }
    if (!formData.location.trim()) {
      errs.location = 'Vui lòng nhập địa chỉ hoặc tỉnh/thành phố';
    }
    if (!formData.agreedConsent) {
      errs.agreedConsent = 'Vui lòng đồng ý với điều khoản bảo mật thông tin';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      // Save to Data Domain A
      const saved = storageService.addB2BInquiry({
        dealershipName: formData.dealershipName,
        contactPerson: formData.contactPerson,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        dealershipType: formData.dealershipType,
        monthlyLeadVolume: formData.monthlyLeadVolume,
        notes: formData.notes
      });

      setIsSubmitting(false);
      setSubmittedInquiry(saved);
      if (onInquirySubmitted) onInquirySubmitted(saved);

      // Reset form
      setFormData({
        dealershipName: '',
        contactPerson: '',
        phone: '',
        email: '',
        location: '',
        dealershipType: 'Đại lý chính hãng xe sang',
        monthlyLeadVolume: '100 - 200 leads/tháng',
        notes: '',
        agreedConsent: true
      });
      setErrors({});
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#0b1019] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E2634] border border-[#C7A66A]/40 text-[#C7A66A] text-xs font-bold uppercase tracking-wider mb-4">
            Khảo Sát & Tư Vấn Chuyên Biệt
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Đăng Ký Buổi Tư Vấn Tác Nghiệp <br />
            <span className="gold-gradient-text">30 Phút Dành Cho Showroom Của Bạn</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm leading-relaxed">
            Chúng tôi sẽ đánh giá hiện trạng tiếp nhận lead, phân tích tỷ lệ thất thoát và xây dựng bản kế hoạch triển khai AI thử nghiệm phù hợp nhất với mô hình của đại lý.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-3xl bg-[#141B26] border border-slate-800 p-8 sm:p-12 shadow-2xl relative">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Dealership Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Tên Đại lý / Showroom ô tô <span className="text-[#C7A66A]">*</span>
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.dealershipName}
                    onChange={(e) => setFormData({ ...formData, dealershipName: e.target.value })}
                    placeholder="Ví dụ: Mercedes-Benz Haxaco, Auto 568..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d121c] border ${errors.dealershipName ? 'border-rose-500' : 'border-slate-700/80 focus:border-[#C7A66A]'} text-white text-sm outline-none transition-colors`}
                  />
                </div>
                {errors.dealershipName && <p className="mt-1 text-xs text-rose-400">{errors.dealershipName}</p>}
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Họ tên Người liên hệ & Chức vụ <span className="text-[#C7A66A]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="Ví dụ: Nguyễn Văn A (Giám đốc Bán hàng)"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d121c] border ${errors.contactPerson ? 'border-rose-500' : 'border-slate-700/80 focus:border-[#C7A66A]'} text-white text-sm outline-none transition-colors`}
                  />
                </div>
                {errors.contactPerson && <p className="mt-1 text-xs text-rose-400">{errors.contactPerson}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Số điện thoại di động / Zalo <span className="text-[#C7A66A]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="09xx xxx xxx"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d121c] border ${errors.phone ? 'border-rose-500' : 'border-slate-700/80 focus:border-[#C7A66A]'} text-white text-sm outline-none transition-colors`}
                  />
                </div>
                {errors.phone && <p className="mt-1 text-xs text-rose-400">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Email công việc <span className="text-[#C7A66A]">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="contact@dealership.com.vn"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d121c] border ${errors.email ? 'border-rose-500' : 'border-slate-700/80 focus:border-[#C7A66A]'} text-white text-sm outline-none transition-colors`}
                  />
                </div>
                {errors.email && <p className="mt-1 text-xs text-rose-400">{errors.email}</p>}
              </div>

              {/* Location */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Tỉnh / Thành phố showroom <span className="text-[#C7A66A]">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Ví dụ: TP. Hồ Chí Minh, Hà Nội, Đà Nẵng..."
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d121c] border ${errors.location ? 'border-rose-500' : 'border-slate-700/80 focus:border-[#C7A66A]'} text-white text-sm outline-none transition-colors`}
                  />
                </div>
                {errors.location && <p className="mt-1 text-xs text-rose-400">{errors.location}</p>}
              </div>

              {/* Dealership Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Mô hình kinh doanh đại lý
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.dealershipType}
                    onChange={(e) => setFormData({ ...formData, dealershipType: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0d121c] border border-slate-700/80 text-white text-sm outline-none focus:border-[#C7A66A] cursor-pointer"
                  >
                    <option value="Đại lý chính hãng xe sang">Đại lý chính hãng xe sang (Mercedes, BMW, Porsche, Audi...)</option>
                    <option value="Showroom xe đã qua sử dụng">Showroom xe đã qua sử dụng / Xe lướt cao cấp</option>
                    <option value="Tổ hợp kinh doanh xe đa thương hiệu">Tổ hợp kinh doanh xe đa thương hiệu</option>
                    <option value="Đại lý ô tô phổ thông phân khúc cao">Đại lý ô tô phổ thông phân khúc cao</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Monthly Volume */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Quy mô lead phát sinh hàng tháng dự kiến
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {['< 100 leads', '100 - 250 leads', '250 - 500 leads', '> 500 leads'].map((vol) => (
                  <button
                    key={vol}
                    type="button"
                    onClick={() => setFormData({ ...formData, monthlyLeadVolume: vol })}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      formData.monthlyLeadVolume === vol
                        ? 'bg-[#C7A66A]/20 border-[#C7A66A] text-[#C7A66A]'
                        : 'bg-[#0d121c] border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {vol}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Khó khăn tác nghiệp đại lý đang muốn giải quyết nhất (Tùy chọn)
              </label>
              <textarea
                rows="3"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Ví dụ: Đội ngũ sales không kịp liên hệ lead ngoài giờ, tỷ lệ khách đến showroom thấp..."
                className="w-full px-4 py-3 rounded-xl bg-[#0d121c] border border-slate-700/80 text-white text-sm outline-none focus:border-[#C7A66A]"
              ></textarea>
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={formData.agreedConsent}
                  onChange={(e) => setFormData({ ...formData, agreedConsent: e.target.checked })}
                  className="mt-1 accent-[#C7A66A] w-4 h-4 cursor-pointer"
                />
                <span className="text-xs text-slate-400 leading-normal">
                  Tôi đồng ý để AutoLead Systems liên hệ xác nhận thông tin đại lý và bảo mật dữ liệu doanh nghiệp theo đúng quy định pháp luật.
                </span>
              </label>
              {errors.agreedConsent && <p className="mt-1 text-xs text-rose-400">{errors.agreedConsent}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C7A66A] to-[#B08D4C] hover:from-[#D4AF37] hover:to-[#C7A66A] text-[#101B2B] font-extrabold text-sm shadow-xl shadow-[#C7A66A]/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Đang ghi nhận yêu cầu...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Gửi Yêu Cầu Tư Vấn & Khảo Sát Miễn Phí</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Success Modal */}
        {submittedInquiry && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#141B26] border border-[#C7A66A]/50 rounded-3xl p-8 max-w-lg w-full shadow-2xl relative">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white text-center">Gửi Yêu Cầu Thành Công!</h3>
              <p className="text-xs text-slate-300 text-center mt-2">
                Mã hồ sơ tư vấn B2B: <strong className="text-[#C7A66A] font-mono">{submittedInquiry.id}</strong>
              </p>

              <div className="mt-6 p-4 rounded-2xl bg-[#0d121c] border border-slate-800 text-xs space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Đại lý:</span>
                  <span className="font-semibold text-white">{submittedInquiry.dealershipName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Người đại diện:</span>
                  <span className="font-semibold text-white">{submittedInquiry.contactPerson}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Số điện thoại:</span>
                  <span className="font-semibold text-white">{submittedInquiry.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dữ liệu lưu trữ:</span>
                  <span className="text-emerald-400 font-bold">Data Domain A (Sales Page Leads)</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-4">
                Đội ngũ chuyên viên tư vấn của AutoLead Systems sẽ liên hệ với anh/chị trong vòng 30 phút để sắp xếp lịch khảo sát thực tế.
              </p>

              <div className="mt-6">
                <button
                  onClick={() => setSubmittedInquiry(null)}
                  className="w-full py-3 rounded-xl bg-[#C7A66A] hover:bg-[#D4AF37] text-[#101B2B] font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Đóng & Tiếp Tục Trải Nghiệm
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
