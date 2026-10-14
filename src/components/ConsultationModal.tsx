import React, { useState } from 'react';
import { X, Calendar, Clock, Video, Phone, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { ConsultationFormData } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBooked: (data: ConsultationFormData) => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onBooked,
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: 'Tomorrow',
    preferredTime: '10:00 AM EST',
    meetingFormat: 'zoom',
    primaryGoal: 'Family Life & Mortgage Protection',
    additionalDetails: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const dateOptions = [
    { label: 'Tomorrow', sub: 'Flexible' },
    { label: 'Wednesday', sub: 'Morning slots open' },
    { label: 'Thursday', sub: 'Afternoon slots open' },
    { label: 'Friday', sub: 'Full availability' },
    { label: 'Next Week', sub: 'Choose custom date' },
  ];

  const timeOptions = [
    '9:30 AM EST',
    '11:00 AM EST',
    '1:30 PM EST',
    '3:30 PM EST',
    '5:30 PM EST',
    '7:00 PM EST',
  ];

  const goalOptions = [
    'Family Life & Mortgage Protection',
    'Critical Illness / Disability Coverage',
    'Newcomer to Canada / Super Visa',
    'Small Business & Corporate Key-Person',
    'Existing Policy Review & Price Audit',
    'Financial & RESP Education Planning',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      onBooked(formData);
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
              <Calendar className="w-3.5 h-3.5" />
              <span>DIRECT ADVISOR ACCESS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">
              Book a Free 1-on-1 Consultation
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              15-30 minutes • Zero sales pressure • Jargon-free advice with Malik
            </p>
          </div>
          <button
            id="consult-modal-close-btn"
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
                Consultation Confirmed!
              </h4>
              <p className="text-sm text-[#4A5568] max-w-md mx-auto leading-relaxed">
                Thank you, {formData.fullName}. A calendar invitation and link for our session have been sent to your email.
              </p>
              <div className="p-4 bg-[#F6F7FA] rounded-xl text-xs text-slate-700 max-w-md mx-auto space-y-1.5 text-left border border-slate-200">
                <div className="flex justify-between">
                  <span className="text-slate-500">Format:</span>
                  <span className="font-bold text-[#0F2A47] capitalize">{formData.meetingFormat} Meeting</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Requested Time:</span>
                  <span className="font-bold text-[#0F2A47]">{formData.preferredDate} at {formData.preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Topic:</span>
                  <span className="font-bold text-[#0F2A47]">{formData.primaryGoal}</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#0F2A47] text-white font-bold text-xs rounded-lg hover:bg-[#0B1F35] transition-colors"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Meeting Format */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                  1. Choose Meeting Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, meetingFormat: 'zoom' })}
                    className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border transition-all ${
                      formData.meetingFormat === 'zoom'
                        ? 'bg-[#0F2A47] text-white border-[#0F2A47] shadow-sm'
                        : 'bg-[#F6F7FA] text-[#0F2A47] border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Video className="w-4 h-4 text-[#C9A227]" />
                    <span>Zoom Video Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, meetingFormat: 'phone' })}
                    className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border transition-all ${
                      formData.meetingFormat === 'phone'
                        ? 'bg-[#0F2A47] text-white border-[#0F2A47] shadow-sm'
                        : 'bg-[#F6F7FA] text-[#0F2A47] border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Phone className="w-4 h-4 text-[#C9A227]" />
                    <span>Phone Call</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, meetingFormat: 'in-person' })}
                    className={`p-3 rounded-xl text-xs font-semibold flex flex-col items-center gap-1.5 border transition-all ${
                      formData.meetingFormat === 'in-person'
                        ? 'bg-[#0F2A47] text-white border-[#0F2A47] shadow-sm'
                        : 'bg-[#F6F7FA] text-[#0F2A47] border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#C9A227]" />
                    <span>In-Person (GTA)</span>
                  </button>
                </div>
              </div>

              {/* Preferred Date & Time */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                  2. Preferred Date & Time
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="block text-[11px] font-medium text-slate-600 mb-1">Select Day</span>
                    <select
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                    >
                      {dateOptions.map((d, i) => (
                        <option key={i} value={d.label}>
                          {d.label} — {d.sub}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="block text-[11px] font-medium text-slate-600 mb-1">Select Time Window</span>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                    >
                      {timeOptions.map((t, i) => (
                        <option key={i} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Primary Topic */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                  3. Primary Discussion Focus
                </label>
                <select
                  value={formData.primaryGoal}
                  onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                >
                  {goalOptions.map((goal, idx) => (
                    <option key={idx} value={goal}>
                      {goal}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Info */}
              <div>
                <label className="block text-xs font-bold text-[#0F2A47] mb-1.5 uppercase tracking-wide">
                  4. Your Contact Details
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
                    placeholder="Email (For Calendar Invite) *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Direct Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
                >
                  {isSubmitting ? (
                    <span>Scheduling Consultation...</span>
                  ) : (
                    <>
                      <span>Confirm 1-on-1 Call with Malik</span>
                      <ArrowRight className="w-4 h-4 text-[#0F2A47]" />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Free • Zero Commitment • 100% Confidential</span>
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
