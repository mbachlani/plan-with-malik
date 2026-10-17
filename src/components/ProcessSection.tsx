import React from 'react';
import { PhoneCall, SearchCheck, FileText, CheckCircle2, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps { onOpenConsultationModal: () => void; onOpenQuoteModal: () => void; }

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenConsultationModal, onOpenQuoteModal }) => {
  const getStepIcon = (icon: string) => {
    switch (icon) {
      case 'phone-call': return <PhoneCall className="w-5 h-5 text-[#C9A227]" />;
      case 'search-check': return <SearchCheck className="w-5 h-5 text-[#C9A227]" />;
      case 'file-text': return <FileText className="w-5 h-5 text-[#C9A227]" />;
      case 'check-circle-2': return <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />;
      default: return <CheckCircle2 className="w-5 h-5 text-[#C9A227]" />;
    }
  };

  return (
    <section id="process" className="py-14 sm:py-20 md:py-28 bg-[#F6F7FA] relative border-t border-[#E2E5EA] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3">
          <div className="inline-flex max-w-full items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px] sm:tracking-[2px] text-[#C9A227]"><Sparkles className="w-3.5 h-3.5 shrink-0" /><span>HOW IT WORKS</span></div>
          <h2 className="text-[clamp(1.8rem,7vw,2.5rem)] font-bold font-serif text-[#0F2A47] leading-tight break-words">Simple, Transparent, Zero-Pressure Advisory</h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed break-words">Getting proper insurance protection shouldn't feel like a high-pressure sales pitch. Here is exactly how we work together from first question to policy delivery.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} id={`process-step-${idx}`} className="bg-white rounded-2xl p-5 sm:p-7 border border-[#E2E5EA] shadow-xs relative flex flex-col justify-between hover:shadow-lg transition-all duration-200 hover:-translate-y-1 min-w-0">
              <div className="min-w-0">
                <div className="flex items-center justify-between mb-5 sm:mb-6"><span className="text-3xl font-serif font-bold text-[#C9A227] tracking-tight shrink-0">{step.step}</span><div className="w-10 h-10 rounded-xl bg-[#0F2A47] flex items-center justify-center shadow-xs shrink-0">{getStepIcon(step.icon)}</div></div>
                <h3 className="text-lg font-bold font-serif text-[#0F2A47] mb-2 break-words">{step.title}</h3>
                <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed break-words">{step.description}</p>
              </div>
              <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-start text-[11px] font-semibold text-[#0F2A47]"><span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] mr-2 mt-1 shrink-0" /><span>100% Free • No Obligation</span></div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
          <button id="process-book-call-btn" onClick={onOpenConsultationModal} className="w-full sm:w-auto px-6 py-3.5 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"><Calendar className="w-4 h-4 text-[#0F2A47] shrink-0" /><span>Book Your Free Discovery Call</span></button>
          <button id="process-instant-quote-btn" onClick={onOpenQuoteModal} className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0F2A47] font-semibold rounded-xl border border-[#0F2A47] transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer"><span>Request Fast Quote Online</span><ArrowRight className="w-4 h-4 text-[#C9A227] shrink-0" /></button>
        </div>
      </div>
    </section>
  );
};
