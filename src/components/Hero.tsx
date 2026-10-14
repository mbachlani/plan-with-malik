import React, { useState } from 'react';
import { ShieldCheck, Sliders, HeartHandshake, Calendar, ArrowRight, CheckCircle2, Star, Sparkles, Building2, UserCheck, Shield } from 'lucide-react';
import { HERO_DATA, SERVICES_DATA } from '../data/content';
import { QuoteFormData } from '../types';

interface HeroProps {
  onOpenQuoteModal: (serviceId?: string, prefill?: Partial<QuoteFormData>) => void;
  onOpenConsultationModal: () => void;
  onSubmittedQuote: (data: QuoteFormData) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onOpenConsultationModal,
  onSubmittedQuote,
}) => {
  // Quick quote form state
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    insuranceType: 'life-insurance',
    postalCode: '',
    age: '35',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleHeroFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || (!formData.email && !formData.phone)) {
      onOpenQuoteModal(formData.insuranceType, formData);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      onSubmittedQuote(formData);
    }, 600);
  };

  return (
    <section id="home" className="relative overflow-x-hidden bg-gradient-to-b from-[#F6F7FA] via-white to-white pt-8 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
      {/* Subtle Background Geometry */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#0F2A47]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Value Props & Fast Quote Bar (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2A47]/5 border border-[#0F2A47]/10">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
              <span className="text-[11px] md:text-xs font-bold uppercase tracking-[1.5px] text-[#0F2A47]">
                {HERO_DATA.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-bold text-[#0F2A47] font-serif leading-[1.14] tracking-tight">
                {HERO_DATA.headingLine1}{' '}
                <span className="text-[#C9A227] block sm:inline">
                  {HERO_DATA.headingLine2}
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed max-w-2xl font-normal">
                {HERO_DATA.description}
              </p>
            </div>

            {/* Trust Badges Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-b border-slate-200/80 py-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F2A47]/10 text-[#0F2A47] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                </div>
                <span className="text-xs font-semibold text-[#0F2A47]">Licensed Independent Broker</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F2A47]/10 text-[#0F2A47] flex items-center justify-center shrink-0">
                  <Sliders className="w-4 h-4 text-[#C9A227]" />
                </div>
                <span className="text-xs font-semibold text-[#0F2A47]">15+ Top Canadian Carriers</span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#0F2A47]/10 text-[#0F2A47] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4 text-[#C9A227]" />
                </div>
                <span className="text-xs font-semibold text-[#0F2A47]">100% Free Advisory & Care</span>
              </div>
            </div>

            {/* Clean Integrated Fast Quote Form Card (Directly in Column - No Image Overlap) */}
            <div
              id="hero-quick-quote-card"
              className="bg-[#0F2A47] text-white rounded-2xl p-5 sm:p-6 shadow-xl border-t-4 border-[#C9A227] border-x border-b border-[#0F2A47]/80"
            >
              {submittedSuccess ? (
                <div className="text-center py-4 space-y-2.5 animate-in fade-in duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#C9A227]/20 text-[#C9A227] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold font-serif text-white">Quote Request Received!</h3>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.fullName}. Malik is analyzing rates from 15+ Canadian carriers and will send your comparison shortly.
                  </p>
                  <button
                    onClick={() => setSubmittedSuccess(false)}
                    className="text-xs text-[#C9A227] hover:underline font-semibold pt-1"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleHeroFormSubmit} className="space-y-3.5">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold font-serif text-white flex items-center gap-2">
                        <span>Compare 15+ Canadian Carriers & Get a Free Quote</span>
                      </h3>
                      <p className="text-[11px] text-slate-300">Fast, personalized rates • Zero sales pressure</p>
                    </div>
                    <span className="text-[10px] uppercase font-bold bg-[#C9A227]/20 text-[#C9A227] px-2 py-0.5 rounded shrink-0">
                      No Obligation
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* Input: Full Name */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">Your Full Name</label>
                      <input
                        id="hero-quote-name"
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Dropdown: Insurance Type */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">Insurance Type</label>
                      <select
                        id="hero-quote-type"
                        value={formData.insuranceType}
                        onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                        className="w-full px-2.5 py-2 text-xs rounded-lg bg-[#0B1F35] border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent"
                      >
                        {SERVICES_DATA.map((svc) => (
                          <option key={svc.id} value={svc.id} className="bg-[#0F2A47] text-white">
                            {svc.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Input: Phone or Email */}
                    <div>
                      <label className="block text-[11px] font-medium text-slate-300 mb-1">Phone or Email</label>
                      <input
                        id="hero-quote-contact"
                        type="text"
                        required
                        placeholder="Email or Phone Number"
                        value={formData.email || formData.phone}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (val.includes('@')) {
                            setFormData({ ...formData, email: val });
                          } else {
                            setFormData({ ...formData, phone: val, email: val });
                          }
                        }}
                        className="w-full px-3 py-2 text-xs rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C9A227] focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Submit Button & Direct Consultation Button */}
                  <div className="pt-1 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      id="hero-quote-submit-btn"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-2.5 px-4 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-lg text-xs shadow-md transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg active:scale-98"
                    >
                      {isSubmitting ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-3.5 h-3.5 border-2 border-[#0F2A47] border-t-transparent rounded-full animate-spin" />
                          <span>Matching Best Canadian Rates...</span>
                        </span>
                      ) : (
                        <>
                          <span>Get My Free Comparison Quote</span>
                          <ArrowRight className="w-3.5 h-3.5 text-[#0F2A47]" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={onOpenConsultationModal}
                      className="w-full sm:w-auto py-2.5 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg text-xs border border-white/20 transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
                      <span>Book Call with Malik</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-slate-400 flex items-center justify-center gap-1.5 pt-0.5">
                    <ShieldCheck className="w-3 h-3 text-[#C9A227]" />
                    <span>Your privacy is 100% protected. Never sold or shared with 3rd parties.</span>
                  </p>
                </form>
              )}
            </div>

            {/* Reassurance Subtext & Star Rating */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-1">
              <div className="flex text-[#C9A227]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#C9A227]" />
                ))}
              </div>
              <span className="font-semibold text-slate-700">5.0 Star Client Rating</span>
              <span className="text-slate-300">•</span>
              <span>500+ Canadian families & business owners protected</span>
            </div>

          </div>

          {/* Right Column: Full, Clean, Beautiful Family Photo (Completely Unobstructed) (lg:col-span-5) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Outer Decorative Glow Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none py-4 sm:py-6 lg:py-0 px-4 sm:px-6 lg:px-0">
              
              {/* Main Family Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] lg:aspect-[4/5] bg-slate-100 group">
                <img
                  src="/images/hero_family.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src.endsWith('/images/hero_family.jpg')) {
                      target.src = '/images/hero_family_1787003913257.jpg';
                    } else if (target.src.endsWith('/images/hero_family_1787003913257.jpg')) {
                      target.src = 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  alt="Happy Canadian family smiling together with peace of mind"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F2A47]/80 via-[#0F2A47]/30 to-transparent flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs uppercase font-bold tracking-wider text-[#C9A227]">
                      Peace of Mind for Life
                    </div>
                    <div className="text-sm font-semibold text-white/90">
                      Protecting What Matters Most
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Left - 15+ Top Carriers */}
              <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-[#E2E5EA] flex items-center gap-2 sm:gap-3 text-[#0F2A47] animate-in fade-in duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#0F2A47] text-[#C9A227] flex items-center justify-center font-bold shrink-0">
                  <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F2A47]">15+ Canadian Carriers</div>
                  <div className="hidden sm:block text-[10px] text-slate-500 font-medium">Manulife, Sun Life, Canada Life...</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Right - Fiduciary Guarantee */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:p-3.5 shadow-xl border border-[#E2E5EA] flex items-center gap-2 sm:gap-3 text-[#0F2A47] animate-in fade-in duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center font-bold shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F2A47]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-bold text-[#0F2A47]">100% Independent Advice</div>
                  <div className="hidden sm:block text-[10px] text-slate-500 font-medium">Zero Corporate Quotas</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
