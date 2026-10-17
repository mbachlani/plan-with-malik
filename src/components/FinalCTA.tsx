import React from 'react';
import { Phone, Calendar, ArrowRight, ShieldCheck, Sparkles, Star } from 'lucide-react';

interface FinalCTAProps { onOpenQuoteModal: () => void; onOpenConsultationModal: () => void; }

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenQuoteModal, onOpenConsultationModal }) => (
  <section id="contact-cta" className="bg-[#0F2A47] text-white py-14 sm:py-20 md:py-24 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] max-w-[600px] aspect-square bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8 min-w-0">
      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/10 border border-white/20 text-[#C9A227] flex items-center justify-center mx-auto shadow-xl"><Phone className="w-7 h-7 sm:w-8 sm:h-8" /></div>
      <div className="space-y-3 max-w-3xl mx-auto min-w-0">
        <div className="inline-flex max-w-full items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[1.5px] sm:tracking-[2px] text-[#C9A227]"><Sparkles className="w-3.5 h-3.5 shrink-0" /><span>START PROTECTING YOUR FAMILY TODAY</span></div>
        <h2 className="text-[clamp(1.8rem,7vw,3rem)] font-bold font-serif text-white leading-tight break-words">Ready to Protect What You’ve Built?</h2>
        <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto pt-2 font-normal leading-relaxed break-words">Whether you need to secure a new mortgage, safeguard your family’s income, or protect against serious illness, I am here to find you the most cost-effective coverage in Canada.</p>
      </div>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 max-w-md mx-auto w-full">
        <button id="final-quote-cta-btn" onClick={onOpenQuoteModal} className="w-full sm:w-auto px-8 py-4 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer hover:-translate-y-0.5"><span>Get a Free Quote</span><ArrowRight className="w-4 h-4 text-[#0F2A47] shrink-0" /></button>
        <button id="final-consult-cta-btn" onClick={onOpenConsultationModal} className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/30 transition-all duration-200 flex items-center justify-center gap-2.5 text-sm sm:text-base cursor-pointer hover:-translate-y-0.5"><Calendar className="w-4 h-4 text-[#C9A227] shrink-0" /><span>Schedule a 1-on-1 Call</span></button>
      </div>
      <div className="pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-slate-300 min-w-0">
        <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C9A227] shrink-0" /><span>Licensed Independent Broker</span></div>
        <div className="flex items-center gap-1.5"><Star className="w-4 h-4 text-[#C9A227] fill-[#C9A227] shrink-0" /><span>5.0 Rated Client Satisfaction</span></div>
        <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" /><a href="tel:+14168300762" className="hover:text-[#C9A227] transition-colors break-words">Direct Access: (416) 830-0762</a></div>
      </div>
    </div>
  </section>
);
