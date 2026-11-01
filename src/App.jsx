import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

// Part A: Public B2B Website components
import Hero from './components/public/Hero';
import Problems from './components/public/Problems';
import Solutions from './components/public/Solutions';
import HowItWorks from './components/public/HowItWorks';
import Pricing from './components/public/Pricing';
import ImplementationProcess from './components/public/ImplementationProcess';
import ConsultationForm from './components/public/ConsultationForm';
import Footer from './components/public/Footer';

// Part B: Internal SaaS CRM & Operations components
import SaasLayout from './components/saas/SaasLayout';
import DashboardOverview from './components/saas/DashboardOverview';
import LeadManagement from './components/saas/LeadManagement';
import LeadQualification from './components/saas/LeadQualification';
import AppointmentManagement from './components/saas/AppointmentManagement';
import CampaignManagement from './components/saas/CampaignManagement';
import AiAssistant from './components/saas/AiAssistant';
import AnalyticsReporting from './components/saas/AnalyticsReporting';
import B2BInquiriesViewer from './components/saas/B2BInquiriesViewer';
import DealershipSettings from './components/saas/DealershipSettings';
import DealerLogin from './components/saas/DealerLogin';

// Part C: Buyer Demo (Mandatory User Journey)
import BuyerDemo from './components/buyer/BuyerDemo';

import { api } from './services/api';
import { storageService } from './services/storage';

export default function App() {
  // Mode: 'buyer' (Default for demo!) | 'saas' | 'public'
  const [currentView, setCurrentView] = useState('buyer');
  const [activeSaasTab, setActiveSaasTab] = useState('overview');
  const [currentUser, setCurrentUser] = useState(() => api.getCurrentUser());

  // Live state connected to API / persistent storage
  const [b2bInquiries, setB2bInquiries] = useState([]);
  const [crmLeads, setCrmLeads] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [campaigns, setCampaigns] = useState([]);

  // Load data on mount & view change
  useEffect(() => {
    loadData();
  }, [currentView]);

  const loadData = async () => {
    const leads = await api.getDealerLeads();
    const apts = await api.getDealerAppointments();
    const inqs = await api.getB2BInquiries();
    const camps = storageService.getCampaigns();

    setCrmLeads(leads || []);
    setAppointments(apts || []);
    setB2bInquiries(inqs || []);
    setCampaigns(camps || []);
  };

  // Handlers
  const handleInquirySubmitted = async (newInquiry) => {
    const inqs = await api.getB2BInquiries();
    setB2bInquiries(inqs);
  };

  const handleUpdateLeadStatus = async (leadId, newStatus) => {
    await api.updateLeadStatus(leadId, newStatus);
    const leads = await api.getDealerLeads();
    setCrmLeads(leads);
  };

  const handleAddLead = async (leadData) => {
    await api.createBuyerLead(leadData);
    const leads = await api.getDealerLeads();
    setCrmLeads(leads);
  };

  const handleUpdateLead = async (updatedLead) => {
    storageService.updateCRMLead(updatedLead);
    const leads = await api.getDealerLeads();
    setCrmLeads(leads);
  };

  const handleAddAppointment = async (aptData) => {
    await api.bookAppointment(aptData);
    const apts = await api.getDealerAppointments();
    const leads = await api.getDealerLeads();
    setAppointments(apts);
    setCrmLeads(leads);
  };

  const handleUpdateAppointmentStatus = async (aptId, newStatus) => {
    await api.updateAppointmentStatus(aptId, newStatus);
    const apts = await api.getDealerAppointments();
    setAppointments(apts);
  };

  const handleAddCampaign = (campaignData) => {
    storageService.addCampaign(campaignData);
    setCampaigns(storageService.getCampaigns());
  };

  const handleResetData = async () => {
    await api.resetDatabase();
    await loadData();
  };

  const handleLogout = () => {
    api.logout();
    setCurrentUser(null);
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1019] text-[#F7F7F5] flex flex-col font-sans">
      {/* Top Universal Navbar */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* PORTAL 1: BUYER DEMO (MANDATORY USER JOURNEY) */}
      {currentView === 'buyer' && (
        <main className="flex-1">
          <BuyerDemo
            onNavigateToCRM={() => {
              setCurrentView('saas');
              loadData();
            }}
          />
        </main>
      )}

      {/* PORTAL 2: INTERNAL SAAS CRM (SHOWROOM CONSOLE) */}
      {currentView === 'saas' && (
        <main className="flex-1">
          {!currentUser ? (
            <DealerLogin
              onLoginSuccess={(user) => {
                setCurrentUser(user);
                loadData();
              }}
              onBackToBuyer={() => setCurrentView('buyer')}
            />
          ) : (
            <SaasLayout
              activeTab={activeSaasTab}
              setActiveTab={setActiveSaasTab}
              onBackToPublic={() => setCurrentView('public')}
              onResetData={handleResetData}
              leadsCount={crmLeads.length}
              b2bCount={b2bInquiries.length}
            >
              {activeSaasTab === 'overview' && (
                <DashboardOverview
                  leads={crmLeads}
                  appointments={appointments}
                  campaigns={campaigns}
                  onNavigateToTab={(tabId) => setActiveSaasTab(tabId)}
                />
              )}

              {activeSaasTab === 'leads' && (
                <LeadManagement
                  leads={crmLeads}
                  onUpdateLeadStatus={handleUpdateLeadStatus}
                  onAddLead={handleAddLead}
                  onUpdateLead={handleUpdateLead}
                />
              )}

              {activeSaasTab === 'qualification' && (
                <LeadQualification
                  leads={crmLeads}
                  onUpdateLead={handleUpdateLead}
                  onOpenCreateAppointment={(lead) => {
                    setActiveSaasTab('appointments');
                  }}
                />
              )}

              {activeSaasTab === 'appointments' && (
                <AppointmentManagement
                  appointments={appointments}
                  leads={crmLeads}
                  onAddAppointment={handleAddAppointment}
                  onUpdateAppointmentStatus={handleUpdateAppointmentStatus}
                />
              )}

              {activeSaasTab === 'campaigns' && (
                <CampaignManagement
                  campaigns={campaigns}
                  onAddCampaign={handleAddCampaign}
                />
              )}

              {activeSaasTab === 'ai-assistant' && (
                <AiAssistant leads={crmLeads} />
              )}

              {activeSaasTab === 'analytics' && (
                <AnalyticsReporting
                  leads={crmLeads}
                  appointments={appointments}
                  campaigns={campaigns}
                />
              )}

              {activeSaasTab === 'b2b-leads' && (
                <B2BInquiriesViewer inquiries={b2bInquiries} />
              )}

              {activeSaasTab === 'settings' && (
                <DealershipSettings onResetData={handleResetData} />
              )}
            </SaasLayout>
          )}
        </main>
      )}

      {/* PORTAL 3: PUBLIC B2B SALES WEBSITE */}
      {currentView === 'public' && (
        <main className="flex-1">
          <Hero
            onOpenSaas={() => {
              setCurrentView('saas');
              setActiveSaasTab('overview');
            }}
            onScrollToContact={scrollToContact}
          />
          <Problems />
          <Solutions />
          <HowItWorks />
          <Pricing onScrollToContact={scrollToContact} />
          <ImplementationProcess />
          <ConsultationForm onInquirySubmitted={handleInquirySubmitted} />
          <Footer
            onOpenSaas={() => {
              setCurrentView('saas');
              setActiveSaasTab('overview');
            }}
          />
        </main>
      )}
    </div>
  );
}
