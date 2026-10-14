import React, { useState } from 'react';
import { X, Briefcase, GraduationCap, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Phone, Mail, User, MapPin } from 'lucide-react';
import { AdvisorApplicationFormData } from '../types';

interface RecruitmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted: (data: AdvisorApplicationFormData) => void;
}

export const RecruitmentModal: React.FC<RecruitmentModalProps> = ({
  isOpen,
  onClose,
  onSubmitted,
}) => {
  const [formData, setFormData] = useState<AdvisorApplicationFormData>({
    fullName: '',
    email: '',
    phone: '',
    cityProvince: 'Toronto, ON',
    licensingStatus: 'Not Licensed (Want to Learn)',
    employmentGoal: 'Full-Time Independent Advisor',
    currentOccupation: '',
    experienceNotes: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onSubmitted(formData);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B1F35]/80 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#E2E5EA] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="bg-[#0F2A47] text-white p-6 sm:p-7 flex items-center justify-between border-b-4 border-[#C9A227]">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A227] mb-1">
              <Briefcase className="w-3.5 h-3.5" />
              <span>CAREER & MENTORSHIP APPLICATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Launch Your Independent Advisory Career
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              1-on-1 mentorship with Malik • LLQP training • 15+ Canadian carriers
            </p>
          </div>
          <button
            id="recruitment-modal-close-btn"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 text-white hover:bg-white/20 flex items-center justify-center transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 text-[#0F2A47] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#C9A227]" />
              </div>
              <h4 className="text-2xl font-bold font-serif text-[#0F2A47]">
                Application Received!
              </h4>
              <p className="text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. Malik has received your career discovery request. You will be contacted within 24 hours to arrange your 1-on-1 discovery session.
              </p>
              <div className="p-4 bg-[#F6F7FA] rounded-xl text-xs text-slate-700 max-w-md mx-auto space-y-1.5 text-left border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Licensing Status:</span>
                  <span className="font-bold text-[#0F2A47]">{formData.licensingStatus}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Track:</span>
                  <span className="font-bold text-[#0F2A47]">{formData.employmentGoal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Location:</span>
                  <span className="font-bold text-[#0F2A47]">{formData.cityProvince}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#0F2A47] text-white font-bold text-xs rounded-lg hover:bg-[#0B1F35] transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              
              {/* Contact Information */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                  1. Contact Information
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Direct Phone *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              {/* City & Occupation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0F2A47] mb-1 uppercase tracking-wide">
                    City & Province
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Toronto, ON or Calgary, AB"
                    value={formData.cityProvince}
                    onChange={(e) => setFormData({ ...formData, cityProvince: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F2A47] mb-1 uppercase tracking-wide">
                    Current Occupation / Industry
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sales, Real Estate, Banking, Tech, Student..."
                    value={formData.currentOccupation || ''}
                    onChange={(e) => setFormData({ ...formData, currentOccupation: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              {/* Licensing Status */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                  2. Current Licensing Status
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {[
                    'Not Licensed (Want to Learn)',
                    'Currently Studying LLQP',
                    'Already LLQP Licensed',
                    'Transferring from Another Agency',
                  ].map((status, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setFormData({ ...formData, licensingStatus: status as any })}
                      className={`p-2.5 rounded-lg text-left text-xs font-semibold border transition-all flex items-center justify-between ${
                        formData.licensingStatus === status
                          ? 'bg-[#0F2A47] text-white border-[#0F2A47]'
                          : 'bg-[#F6F7FA] text-[#0F2A47] border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <span>{status}</span>
                      {formData.licensingStatus === status && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal / Format */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                  3. Your Career Goal & Timeline
                </label>
                <select
                  value={formData.employmentGoal}
                  onChange={(e) => setFormData({ ...formData, employmentGoal: e.target.value as any })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                >
                  <option value="Full-Time Independent Advisor">Full-Time Independent Advisor Practice</option>
                  <option value="Part-Time Transition">Part-Time Transition (While Working Current Job)</option>
                  <option value="Exploring Financial Career Options">Exploring Financial Career Options & Mentorship</option>
                </select>
              </div>

              {/* Aspirations & Notes */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1 uppercase tracking-wide">
                  4. What are your aspirations or questions for Malik? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us what motivates you to become an independent advisor..."
                  value={formData.experienceNotes || ''}
                  onChange={(e) => setFormData({ ...formData, experienceNotes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <span>Submitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Career Discovery Application</span>
                      <ArrowRight className="w-4 h-4 text-[#0F2A47]" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>100% Confidential • Zero Commitment • Direct Response from Malik</span>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
