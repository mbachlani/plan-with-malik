import React from 'react';
import { ShieldCheck, Award, CheckCircle2, HeartHandshake, User, ArrowRight, Calendar, Sparkles, Scale, FileSearch, Clock } from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultationModal: () => void;
  onOpenQuoteModal: () => void;
  onOpenRecruitmentModal?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenConsultationModal,
  onOpenQuoteModal,
  onOpenRecruitmentModal,
}) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Professional Advisor Portrait with Floating Accent Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none py-4 sm:py-6 lg:py-0 px-4 sm:px-6 lg:px-0">
              
              {/* Advisor Photo Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] bg-slate-100">
                <img
                  src="/images/advisor_portrait.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('/images/advisor_portrait.jpg')) {
                      target.src = '/images/advisor_portrait_1787003925481.jpg';
                    } else if (target.src.endsWith('/images/advisor_portrait_1787003925481.jpg')) {
                      target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80';
                    }
                  }}
                  alt="Malik - Independent Insurance and Financial Advisor"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
                
                {/* Gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0F2A47]/80 to-transparent flex items-end p-5">
                  <div className="text-white">
                    <div className="text-lg font-bold font-serif">Malik, LLQP</div>
                    <div className="text-xs text-[#C9A227] font-medium">Licensed Financial Security Advisor</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left - 10+ Years Experience */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-6 bg-white rounded-xl p-2.5 sm:p-3.5 shadow-xl border border-[#E2E5EA] flex items-center gap-2 sm:gap-3 animate-in fade-in duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0F2A47] text-[#C9A227] flex items-center justify-center font-bold">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0F2A47]">10+ Years</div>
                  <div className="hidden sm:block text-[10px] sm:text-[11px] text-slate-500 font-medium">Industry Experience</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right - Trusted Advisor */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-6 bg-white rounded-xl p-2.5 sm:p-3.5 shadow-xl border border-[#E2E5EA] flex items-center gap-2 sm:gap-3 animate-in fade-in duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F2A47]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#0F2A47]">Independent</div>
                  <div className="hidden sm:block text-[10px] sm:text-[11px] text-slate-500 font-medium">100% Unbiased Fiduciary</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio, Checklist, and "Why Work With Malik" (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Section Eyebrow */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[2px] text-[#C9A227]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT YOUR ADVISOR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F2A47] leading-tight">
                Your Dedicated Insurance & Financial Ally
              </h2>
              <p className="text-base text-[#4A5568] leading-relaxed pt-1">
                Insurance is never one-size-fits-all. When you work with me, you aren’t being steered into a proprietary company quota. I partner with you directly to understand your real-life priorities—whether that’s guarding your mortgage, funding your children’s education, or protecting your business—and match you with the absolute best contract on the Canadian market.
              </p>
            </div>

            {/* Checklist with Bold Navy Lead-Ins */}
            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div className="text-sm text-[#4A5568] leading-relaxed">
                  <span className="font-bold text-[#0F2A47]">Independent Advisor — </span>
                  direct broker access to 15+ top-rated Canadian insurers (Manulife, Sun Life, Canada Life, Desjardins, etc.) with no corporate sales quotas.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div className="text-sm text-[#4A5568] leading-relaxed">
                  <span className="font-bold text-[#0F2A47]">Honest Advice — </span>
                  recommendations built entirely around your budget, family needs, and lifestyle, not complex financial sales talk.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div className="text-sm text-[#4A5568] leading-relaxed">
                  <span className="font-bold text-[#0F2A47]">Tailored Solutions — </span>
                  coverage structured around your specific medical history to maximize approval speed and lock in standard preferred rates.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227]" />
                </div>
                <div className="text-sm text-[#4A5568] leading-relaxed">
                  <span className="font-bold text-[#0F2A47]">Ongoing Support — </span>
                  I stay your direct point of contact for annual policy reviews, beneficiary adjustments, and hands-on claims assistance.
                </div>
              </div>
            </div>

            {/* Compact Navy "Why Work With Malik?" Panel */}
            <div className="bg-[#0F2A47] rounded-2xl p-5 sm:p-6 text-white shadow-lg border border-[#0B1F35]">
              <div className="text-xs uppercase font-bold tracking-wider text-[#C9A227] mb-3">
                The Plan With Malik Promise
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#C9A227] shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-100">Personalized 1-on-1 Attention</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#C9A227] shrink-0">
                    <FileSearch className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-100">Clear & Simple Explanations</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#C9A227] shrink-0">
                    <Scale className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-100">Affordable Options Compared</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[#C9A227] shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-slate-100">Support When You Need It Most</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                id="about-book-call-btn"
                onClick={onOpenConsultationModal}
                className="px-6 py-3.5 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl shadow-md transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer hover:-translate-y-0.5"
              >
                <Calendar className="w-4 h-4 text-[#0F2A47]" />
                <span>Book a 1-on-1 Consultation</span>
              </button>

              <button
                id="about-quote-btn"
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#0F2A47] font-semibold rounded-xl border border-[#0F2A47] transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <span>Request Custom Quote</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227]" />
              </button>
            </div>

            {/* Advisor Career Mentorship Callout */}
            <div className="mt-4 p-4 rounded-xl bg-[#F6F7FA] border border-dashed border-[#C9A227]/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F2A47] text-[#C9A227] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#0F2A47]">
                    Interested in becoming an Independent Financial Advisor?
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Malik offers 1-on-1 coaching, LLQP licensing guidance & carrier contracts.
                  </div>
                </div>
              </div>

              {onOpenRecruitmentModal ? (
                <button
                  onClick={onOpenRecruitmentModal}
                  className="text-xs font-bold text-[#0F2A47] hover:text-[#C9A227] flex items-center gap-1 shrink-0 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs hover:border-[#C9A227] transition-all"
                >
                  <span>Learn with Malik</span>
                  <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                </button>
              ) : (
                <a
                  href="#careers"
                  className="text-xs font-bold text-[#0F2A47] hover:text-[#C9A227] flex items-center gap-1 shrink-0 px-3 py-1.5 bg-white rounded-lg border border-slate-200 shadow-2xs hover:border-[#C9A227] transition-all"
                >
                  <span>Learn with Malik</span>
                  <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                </a>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
