import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CarrierGrid } from './components/CarrierGrid';
import { ServicesSection } from './components/ServicesSection';
import { InteractiveAdvisorCalculator } from './components/InteractiveAdvisorCalculator';
import { AboutSection } from './components/AboutSection';
import { StatsBar } from './components/StatsBar';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { RecruitmentSection } from './components/RecruitmentSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { RecruitmentModal } from './components/RecruitmentModal';
import { QuoteFormData, ConsultationFormData, ServiceItem, AdvisorApplicationFormData } from './types';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  // Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string | undefined>(undefined);
  const [quotePrefillData, setQuotePrefillData] = useState<Partial<QuoteFormData> | undefined>(undefined);

  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isRecruitmentModalOpen, setIsRecruitmentModalOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleOpenQuoteModal = (serviceId?: string, prefill?: Partial<QuoteFormData>) => {
    setSelectedServiceForQuote(serviceId);
    setQuotePrefillData(prefill);
    setIsQuoteModalOpen(true);
  };

  const handleOpenConsultationModal = () => {
    setIsConsultationModalOpen(true);
  };

  const handleOpenRecruitmentModal = () => {
    setIsRecruitmentModalOpen(true);
  };

  const handleQuoteSubmitted = (data: QuoteFormData) => {
    showToast(`Quote request received for ${data.fullName}! Malik will send your comparison shortly.`);
  };

  const handleConsultationBooked = (data: ConsultationFormData) => {
    showToast(`1-on-1 consultation booked for ${data.fullName} (${data.preferredDate} at ${data.preferredTime})!`);
  };

  const handleAdvisorApplicationSubmitted = (data: AdvisorApplicationFormData) => {
    showToast(`Mentorship application received for ${data.fullName}! Malik will contact you within 24 hours.`);
  };

  return (
    <div className="min-h-screen bg-white text-[#4A5568] flex flex-col selection:bg-[#C9A227]/20 selection:text-[#0F2A47] overflow-x-hidden">
      {/* Navigation Header */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenConsultationModal={handleOpenConsultationModal}
        onOpenRecruitmentModal={handleOpenRecruitmentModal}
        onSelectServiceDetail={(service) => setSelectedServiceDetail(service)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with Floating Quote Form & Family Photo */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenConsultationModal={handleOpenConsultationModal}
          onSubmittedQuote={handleQuoteSubmitted}
        />

        {/* 2. Top Canadian Insurance Carriers Trust Bar */}
        <CarrierGrid />

        {/* 3. Core 6-Card Services Section */}
        <ServicesSection
          onSelectServiceDetail={(service) => setSelectedServiceDetail(service)}
          onOpenQuoteModal={(serviceId) => handleOpenQuoteModal(serviceId)}
        />

        {/* 4. Interactive Coverage Needs Estimator */}
        <InteractiveAdvisorCalculator
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 5. About Malik Section */}
        <AboutSection
          onOpenConsultationModal={handleOpenConsultationModal}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenRecruitmentModal={handleOpenRecruitmentModal}
        />

        {/* 6. Solid Navy Stats / Trust Bar */}
        <StatsBar />

        {/* 7. How Working With Malik Works (4 Steps) */}
        <ProcessSection
          onOpenConsultationModal={handleOpenConsultationModal}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
        />

        {/* 8. Testimonials Section */}
        <TestimonialsSection />

        {/* 9. Career / Recruiting Mentorship Section */}
        <RecruitmentSection
          onOpenRecruitmentModal={handleOpenRecruitmentModal}
        />

        {/* 10. Frequently Asked Questions */}
        <FAQSection
          onOpenConsultationModal={handleOpenConsultationModal}
        />

        {/* 11. Final Call To Action Banner */}
        <FinalCTA
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onOpenConsultationModal={handleOpenConsultationModal}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectServiceDetail={(service) => setSelectedServiceDetail(service)}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenConsultationModal={handleOpenConsultationModal}
        onOpenRecruitmentModal={handleOpenRecruitmentModal}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialServiceId={selectedServiceForQuote}
        initialData={quotePrefillData}
        onSubmitted={handleQuoteSubmitted}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        onBooked={handleConsultationBooked}
      />

      <RecruitmentModal
        isOpen={isRecruitmentModalOpen}
        onClose={() => setIsRecruitmentModalOpen(false)}
        onSubmitted={handleAdvisorApplicationSubmitted}
      />

      <ServiceDetailModal
        service={selectedServiceDetail}
        onClose={() => setSelectedServiceDetail(null)}
        onOpenQuoteForService={(serviceId) => {
          setSelectedServiceDetail(null);
          handleOpenQuoteModal(serviceId);
        }}
        onOpenConsultation={() => {
          setSelectedServiceDetail(null);
          handleOpenConsultationModal();
        }}
      />

      {/* Floating Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:max-w-md bg-[#0F2A47] text-white p-4 rounded-xl shadow-2xl border-l-4 border-[#C9A227] flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0" />
            <p className="text-xs sm:text-sm font-medium">{toastMessage}</p>
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
