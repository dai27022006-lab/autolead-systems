import { storageService } from './storage.js';

const API_BASE = '/api';

async function fetchJSON(url, options = {}) {
  try {
    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.warn(`API call failed for ${url}, using local fallback:`, err);
    return null;
  }
}

export const api = {
  // Cars
  getCars: async () => {
    const res = await fetchJSON(`${API_BASE}/cars`);
    if (res && res.success) return res.data;
    // Fallback cars
    return [
      {
        id: 'car-c200',
        name: 'Mercedes-Benz C200 Avantgarde 2024',
        segment: 'Luxury Sedan',
        price: '1.599.000.000 VNĐ',
        specs: 'Động cơ 1.5L Turbo Mild-Hybrid 204HP, Hộp số 9G-TRONIC, Màn hình 11.9 inch',
        image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
        status: 'Sẵn sàng lái thử'
      },
      {
        id: 'car-glc300',
        name: 'Mercedes-Benz GLC 300 4MATIC 2024',
        segment: 'Luxury SUV',
        price: '2.799.000.000 VNĐ',
        specs: 'Động cơ 2.0L Turbo 258HP, Dẫn động 4MATIC, Gói âm thanh Burmester 15 loa',
        image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80',
        status: 'Sẵn sàng lái thử'
      }
    ];
  },

  // Auth: Dealer Demo
  login: async (email, password) => {
    const res = await fetchJSON(`${API_BASE}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password })
    });
    if (res && res.success) {
      localStorage.setItem('autolead_dealer_user', JSON.stringify(res.user));
      return res;
    }
    // Local fallback login
    if (email === 'dealer@haxaco.vn' || password === 'demo123') {
      const user = {
        id: 'usr-01',
        name: 'Trần Tuấn Anh (Trưởng Nhóm Bán Hàng)',
        role: 'Dealer Manager',
        showroom: 'Mercedes-Benz Haxaco Sài Gòn',
        email
      };
      localStorage.setItem('autolead_dealer_user', JSON.stringify(user));
      return { success: true, user };
    }
    return { success: false, message: 'Sai thông tin tài khoản demo.' };
  },

  getCurrentUser: () => {
    try {
      return JSON.parse(localStorage.getItem('autolead_dealer_user'));
    } catch {
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem('autolead_dealer_user');
  },

  // Buyer Journey Step 1: Create Lead
  createBuyerLead: async (leadData) => {
    const res = await fetchJSON(`${API_BASE}/buyer/lead`, {
      method: 'POST',
      body: JSON.stringify(leadData)
    });
    if (res && res.success) return res.data;
    // Fallback to storageService
    return storageService.addCRMLead({ ...leadData, leadSource: 'Buyer Demo Portal' });
  },

  // Buyer Journey Step 2: AI Qualification Questionnaire
  qualifyBuyerLead: async (qualificationData) => {
    const res = await fetchJSON(`${API_BASE}/buyer/qualify`, {
      method: 'POST',
      body: JSON.stringify(qualificationData)
    });
    if (res && res.success) return res;
    // Fallback simulation
    return {
      success: true,
      isQualified: true,
      aiScore: 95,
      aiExplanation: 'Khách hàng quan tâm mẫu C200, tài chính phù hợp và sẵn sàng đến showroom trải nghiệm thực tế.',
      data: { id: qualificationData.leadId, status: 'Qualified Lead' }
    };
  },

  // Buyer Journey Step 3: Check Available Slots
  getAvailableSlots: async (date, vehicleModel) => {
    const res = await fetchJSON(`${API_BASE}/buyer/slots?date=${encodeURIComponent(date)}&vehicleModel=${encodeURIComponent(vehicleModel)}`);
    if (res && res.success) return res.slots;

    // Fallback available slots calculation
    const apts = storageService.getAppointments();
    const booked = apts
      .filter(a => a.appointmentDate === date && a.vehicleModel === vehicleModel && a.status !== 'Cancelled')
      .map(a => a.appointmentTime);
    const allSlots = ['09:00 - 10:30', '10:30 - 12:00', '14:00 - 15:30', '16:00 - 17:30'];
    return allSlots.map(s => ({
      slot: s,
      isAvailable: !booked.includes(s),
      bookedBy: booked.includes(s) ? 'Đã có khách hẹn' : null
    }));
  },

  // Buyer Journey Step 4: Book Appointment
  bookAppointment: async (appointmentData) => {
    const res = await fetchJSON(`${API_BASE}/buyer/appointment`, {
      method: 'POST',
      body: JSON.stringify(appointmentData)
    });
    if (res && res.success) return res.data;

    // Fallback to storageService
    const newApt = storageService.addAppointment({
      ...appointmentData,
      isQualifiedAppointment: true,
      status: 'Confirmed'
    });
    if (appointmentData.leadId) {
      storageService.updateLeadStatus(appointmentData.leadId, 'Appointment Booked');
    }
    return newApt;
  },

  // Dealer CRM queries
  getDealerLeads: async () => {
    const res = await fetchJSON(`${API_BASE}/dealer/leads`);
    if (res && res.success) return res.data;
    return storageService.getCRMLeads();
  },

  updateLeadStatus: async (id, status) => {
    const res = await fetchJSON(`${API_BASE}/dealer/leads/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    });
    if (res && res.success) return res.data;
    return storageService.updateLeadStatus(id, status);
  },

  getDealerAppointments: async () => {
    const res = await fetchJSON(`${API_BASE}/dealer/appointments`);
    if (res && res.success) return res.data;
    return storageService.getAppointments();
  },

  updateAppointmentStatus: async (id, status) => {
    const res = await fetchJSON(`${API_BASE}/dealer/appointments/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status })
    });
    if (res && res.success) return res.data;
    return storageService.updateAppointmentStatus(id, status);
  },

  getDealerDashboard: async () => {
    const res = await fetchJSON(`${API_BASE}/dealer/dashboard`);
    if (res && res.success) return res.data;
    return null;
  },

  getB2BInquiries: async () => {
    const res = await fetchJSON(`${API_BASE}/dealer/b2b-inquiries`);
    if (res && res.success) return res.data;
    return storageService.getB2BInquiries();
  },

  resetDatabase: async () => {
    const res = await fetchJSON(`${API_BASE}/dealer/reset`, { method: 'POST' });
    storageService.resetAllData();
    return res && res.success;
  }
};
