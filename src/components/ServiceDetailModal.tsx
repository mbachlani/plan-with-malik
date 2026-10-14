import React from 'react';
import { X, CheckCircle2, Shield, ArrowRight, Calendar, Sparkles, UserCheck, HelpCircle } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuoteForService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuoteForService,
  onOpenConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B1F35]/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E2E5EA] overflow-hidden z-10 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="bg-[#0F2A47] text-white p-6 sm:p-7 flex items-center justify-between border-b-4 border-[#C9A227] shrink-0">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A227] mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INSURANCE SOLUTION BREAKDOWN</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              {service.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#C9A227] mb-2">
              Overview & Protection Scope
            </h4>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Advantages Grid */}
          <div className="bg-[#F6F7FA] rounded-2xl p-5 sm:p-6 border border-[#E2E5EA]">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2A47] mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C9A227]" />
              <span>Key Policy Advantages</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.keyBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Who is this ideal for? */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#0F2A47] mb-3 flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#C9A227]" />
              <span>Who Needs This Protection Most?</span>
            </h4>
            <div className="space-y-2">
              {service.idealFor.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Typical Coverage Scope & FAQ highlight */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                Typical Canadian Coverage Amounts
              </div>
              <div className="text-xs font-semibold text-[#0F2A47]">
                {service.typicalCoverage}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0F2A47]/5 border border-[#0F2A47]/10">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F2A47] mb-1 flex items-center gap-1">
                <HelpCircle className="w-3.5 h-3.5 text-[#C9A227]" />
                <span>Advisor Insight</span>
              </div>
              <div className="text-xs text-slate-700 italic">
                "{service.faqHighlight}"
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-[#F6F7FA] p-5 sm:p-6 border-t border-[#E2E5EA] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#0F2A47] text-[#0F2A47] hover:bg-slate-50 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Discuss with Malik</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenQuoteForService(service.id);
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold text-xs rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Get a Free Quote for {service.title}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#0F2A47]" />
          </button>
        </div>

      </div>
    </div>
  );
};
