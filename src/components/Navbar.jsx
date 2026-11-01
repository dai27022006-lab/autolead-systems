import React from 'react';
import { ShieldCheck, Cpu, LayoutDashboard, ChevronRight, PhoneCall, Car, Building2, Globe } from 'lucide-react';

export default function Navbar({ currentView, setCurrentView, currentUser, onLogout }) {
  return (
    <header className="sticky top-0 z-50 bg-[#0d121c]/95 backdrop-blur-md border-b border-[#202735]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentView('public')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1E2634] to-[#101B2B] border border-[#C7A66A]/40 flex items-center justify-center shadow-lg group-hover:border-[#C7A66A] transition-all">
            <span className="text-[#C7A66A] font-black text-xl tracking-tighter">AL</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-white">AutoLead</span>
              <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-[#C7A66A]/15 text-[#C7A66A] border border-[#C7A66A]/30">Systems</span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium tracking-wide">AI Lead Gen & Test Drive Platform</p>
          </div>
        </div>

        {/* 3 Main Mode Switchers (User Journey Experience) */}
        <div className="flex items-center p-1 rounded-xl bg-[#141B26] border border-slate-800 text-xs font-semibold">
          <button
            onClick={() => setCurrentView('buyer')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              currentView === 'buyer'
                ? 'bg-gradient-to-r from-[#C7A66A] to-[#B08D4C] text-[#101B2B] font-bold shadow-md'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Car className="w-3.5 h-3.5" />
            <span>1. Khách Đặt Lái Thử (Buyer Demo)</span>
          </button>

          <button
            onClick={() => setCurrentView('saas')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              currentView === 'saas'
                ? 'bg-[#1E2634] text-[#C7A66A] font-bold border border-[#C7A66A]/40 shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>2. CRM Đại Lý</span>
          </button>

          <button
            onClick={() => setCurrentView('public')}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              currentView === 'public'
                ? 'bg-[#1E2634] text-white font-bold border border-slate-700 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>3. Website Chào Hàng B2B</span>
          </button>
        </div>

        {/* User Status / Quick Action */}
        <div className="hidden lg:flex items-center gap-3">
          {currentUser ? (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400">Đại lý: <strong className="text-white">{currentUser.showroom?.split(' ')[0]}</strong></span>
              <button
                onClick={onLogout}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] cursor-pointer"
              >
                Đăng xuất
              </button>
            </div>
          ) : (
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Backend Active
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
