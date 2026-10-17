import React, { useState } from 'react';
import { ChevronDown, Sparkles, Calendar } from 'lucide-react';
import { FAQS_DATA } from '../data/content';

interface FAQSectionProps { onOpenConsultationModal: () => void; }

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultationModal }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS_DATA[0].id);
  const toggleFaq = (id: string) => setOpenFaqId(openFaqId === id ? null : id);

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-white relative overflow-x-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex max-w-full items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px] sm:tracking-[2px] text-[#C9A227]"><Sparkles className="w-3.5 h-3.5 shrink-0" /><span>FREQUENTLY ASKED QUESTIONS</span></div>
          <h2 className="text-[clamp(1.8rem,7vw,2.5rem)] font-bold font-serif text-[#0F2A47] leading-tight break-words">Got Questions? Clear Answers Without the Jargon.</h2>
          <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed break-words">Here are the most common questions individuals and families ask when setting up insurance in Canada.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div key={faq.id} id={`faq-item-${faq.id}`} className={`rounded-2xl border transition-all duration-200 overflow-hidden min-w-0 ${isOpen ? 'border-[#C9A227] bg-[#F6F7FA] shadow-sm' : 'border-[#E2E5EA] bg-white hover:border-slate-300'}`}>
                <button onClick={() => toggleFaq(faq.id)} className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-start justify-between gap-3 sm:gap-4 focus:outline-none cursor-pointer min-w-0">
                  <span className="text-sm sm:text-lg font-bold font-serif text-[#0F2A47] min-w-0 break-words">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'bg-[#0F2A47] text-[#C9A227] rotate-180' : 'bg-slate-100 text-[#0F2A47]'}`}><ChevronDown className="w-4 h-4" /></div>
                </button>
                {isOpen && <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-[#4A5568] leading-relaxed border-t border-slate-200/60 animate-in fade-in duration-200 break-words">{faq.answer}</div>}
              </div>
            );
          })}
        </div>

        <div className="mt-10 sm:mt-12 bg-[#F6F7FA] rounded-2xl p-5 sm:p-8 border border-[#E2E5EA] text-center space-y-4 min-w-0">
          <h4 className="text-base sm:text-lg font-bold font-serif text-[#0F2A47] break-words">Have a specific scenario or existing policy question?</h4>
          <p className="text-xs sm:text-sm text-[#4A5568] max-w-xl mx-auto break-words">Book a complimentary 15-minute policy audit. I will review your current contracts for hidden exclusions and rate overpayments.</p>
          <div className="pt-1"><button onClick={onOpenConsultationModal} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0F2A47] hover:bg-[#0B1F35] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors"><Calendar className="w-4 h-4 text-[#C9A227] shrink-0" /><span>Schedule a Policy Review Call</span></button></div>
        </div>
      </div>
    </section>
  );
};
