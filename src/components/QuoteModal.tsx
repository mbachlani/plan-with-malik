import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { QuoteFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialData?: Partial<QuoteFormData>;
  onSubmitted: (data: QuoteFormData) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialData,
  onSubmitted,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    insuranceType: initialServiceId || 'life-insurance',
    postalCode: '',
    age: '35',
    coverageAmount: '$500,000',
    smokingStatus: 'non-smoker',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, insuranceType: initialServiceId }));
    }
    if (initialData) {
      setFormData(prev => ({ ...prev, ...initialData }));
    }
    if (isOpen) setIsSuccess(false);
  }, [initialServiceId, initialData, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmitted(formData);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overscroll-none bg-[#0B1F35]/80 backdrop-blur-xs">
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      <div className="relative min-h-[100dvh] w-full flex items-start sm:items-center justify-center p-0 sm:p-4 md:p-6">
        <div className="relative bg-white w-full max-w-2xl min-h-[100dvh] sm:min-h-0 sm:max-h-[calc(100dvh-2rem)] rounded-none sm:rounded-2xl shadow-2xl border border-[#E2E5EA] z-10 animate-in zoom-in-95 duration-200 min-w-0 overflow-y-auto overscroll-contain">
          <div className="sticky top-0 z-20 bg-[#0F2A47] text-white p-4 sm:p-6 md:p-8 flex items-start justify-between gap-3 border-b-4 border-[#C9A227] min-w-0 shadow-sm">
            <div className="min-w-0 pr-1">
              <div className="inline-flex max-w-full items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C9A227] mb-1">
                <Sparkles className="w-3.5 h-3.5 shrink-0" />
                <span className="break-words">FREE PERSONALIZED COMPARISON</span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-serif text-white leading-tight break-words">
                Request Your Free Insurance Quote
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-300 mt-1 break-words">
                Comparing 15+ top Canadian life & health insurers for your best rate.
              </p>
            </div>
            <button
              id="quote-modal-close-btn"
              onClick={onClose}
              aria-label="Close quote form"
              type="button"
              className="w-10 h-10 rounded-full bg-white/15 text-white hover:bg-white/25 active:bg-white/30 flex items-center justify-center transition-colors shrink-0 border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            {isSuccess ? (
              <div className="text-center py-6 sm:py-8 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#C9A227]" />
                </div>
                <h4 className="text-xl sm:text-2xl font-bold font-serif text-[#0F2A47] break-words">
                  Thank You, {formData.fullName}!
                </h4>
                <p className="text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                  Your request has been received. Malik is currently reviewing underwriting matrices across Canadian providers to find you the strongest policy at the lowest rate.
                </p>
                <div className="p-4 bg-[#F6F7FA] rounded-xl text-xs text-slate-600 max-w-md mx-auto space-y-1 break-words">
                  We will send your quotes directly to: <span className="font-bold text-[#0F2A47] break-all">{formData.email || formData.phone}</span><br />
                  Expected turnaround: <span className="font-semibold text-emerald-600">Within 2 business hours</span>
                </div>
                <button
                  onClick={onClose}
                  type="button"
                  className="mt-4 px-6 py-2.5 bg-[#0F2A47] text-white font-bold text-xs rounded-lg hover:bg-[#0B1F35]"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                    1. Which Coverage Do You Need?
                  </label>
                  <div className="grid grid-cols-1 min-[400px]:grid-cols-2 sm:grid-cols-3 gap-2">
                    {SERVICES_DATA.map(svc => (
                      <button
                        key={svc.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, insuranceType: svc.id })}
                        className={`min-w-0 p-2.5 rounded-xl text-xs font-semibold text-left transition-all border break-words ${formData.insuranceType === svc.id ? 'bg-[#0F2A47] text-white border-[#0F2A47] shadow-sm' : 'bg-[#F6F7FA] text-[#0F2A47] border-slate-200 hover:border-slate-300'}`}
                      >
                        {svc.title}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                    2. Basic Coverage Parameters
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <span className="block text-[11px] font-medium text-slate-600 mb-1">Target Coverage</span>
                      <select value={formData.coverageAmount} onChange={e => setFormData({ ...formData, coverageAmount: e.target.value })} className="w-full min-w-0 px-3 py-2.5 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-[#C9A227] focus:outline-none">
                        <option>$250,000</option>
                        <option>$500,000 (Popular)</option>
                        <option>$750,000</option>
                        <option>$1,000,000</option>
                        <option>$2,000,000+</option>
                        <option value="custom">Not sure / Advise me</option>
                      </select>
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium text-slate-600 mb-1">Your Age Bracket</span>
                      <select value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} className="w-full min-w-0 px-3 py-2.5 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-[#C9A227] focus:outline-none">
                        <option value="20-29">20 - 29 years</option>
                        <option value="30-39">30 - 39 years</option>
                        <option value="40-49">40 - 49 years</option>
                        <option value="50-59">50 - 59 years</option>
                        <option value="60+">60+ years</option>
                      </select>
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium text-slate-600 mb-1">Tobacco / Nicotine Use</span>
                      <div className="flex gap-2">
                        <button type="button" onClick={() => setFormData({ ...formData, smokingStatus: 'non-smoker' })} className={`flex-1 min-w-0 py-2.5 text-xs font-semibold rounded-lg border ${formData.smokingStatus === 'non-smoker' ? 'bg-[#0F2A47] text-white border-[#0F2A47]' : 'bg-white text-slate-600 border-slate-200'}`}>Non-Smoker</button>
                        <button type="button" onClick={() => setFormData({ ...formData, smokingStatus: 'smoker' })} className={`flex-1 min-w-0 py-2.5 text-xs font-semibold rounded-lg border ${formData.smokingStatus === 'smoker' ? 'bg-[#0F2A47] text-white border-[#0F2A47]' : 'bg-white text-slate-600 border-slate-200'}`}>Smoker</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                    3. Where Should We Send Your Quotes?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input type="text" required placeholder="Your Full Legal Name *" value={formData.fullName} onChange={e => setFormData({ ...formData, fullName: e.target.value })} className="w-full min-w-0 px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-[#C9A227] focus:outline-none" />
                    <input type="email" required placeholder="Email Address (To receive quotes) *" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className="w-full min-w-0 px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-[#C9A227] focus:outline-none" />
                    <input type="tel" placeholder="Phone Number (For verification)" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className="w-full min-w-0 px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-[#C9A227] focus:outline-none" />
                    <input type="text" placeholder="Postal Code or City in Canada" value={formData.postalCode} onChange={e => setFormData({ ...formData, postalCode: e.target.value.toUpperCase() })} className="w-full min-w-0 px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-[#C9A227] focus:outline-none" />
                  </div>
                </div>

                <div>
                  <textarea rows={2} placeholder="Optional details (e.g. mortgage balance, existing conditions, super visa requirements)..." value={formData.notes} onChange={e => setFormData({ ...formData, notes: e.target.value })} className="w-full min-w-0 px-3 py-2 text-xs rounded-lg border border-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-[#C9A227] focus:outline-none resize-none" />
                </div>

                <div className="pt-1 pb-2">
                  <button type="submit" disabled={isSubmitting} className="w-full min-h-11 py-3.5 px-6 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg">
                    <span className="break-words text-center">{isSubmitting ? 'Comparing Carrier Rates...' : 'Generate My Personalized Quotes'}</span>
                    <ArrowRight className="w-4 h-4 text-[#0F2A47] shrink-0" />
                  </button>
                  <p className="text-[10px] sm:text-[11px] text-center text-slate-500 mt-2 flex items-start justify-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
                    <span>100% Free Service • No Obligation • Regulated in Canada</span>
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};