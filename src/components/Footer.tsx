import React from 'react';
import { Shield, Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook, ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface FooterProps {
  onSelectServiceDetail: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenConsultationModal: () => void;
  onOpenRecruitmentModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectServiceDetail,
  onOpenQuoteModal,
  onOpenConsultationModal,
  onOpenRecruitmentModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0B1F35] text-white pt-16 pb-12 border-t border-[#0F2A47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F2A47] border border-[#C9A227]/40 flex items-center justify-center text-[#C9A227]">
                <Shield className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-serif leading-none">
                  Plan With <span className="text-[#C9A227]">Malik</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mt-1">
                  Insurance & Financial Advisor
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              Independent life, health, and living benefits advisory. Helping families and business owners across Ontario and Canada protect their financial future with honest, fiduciary guidance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2A47] hover:bg-[#C9A227] text-slate-300 hover:text-[#0F2A47] flex items-center justify-center transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2A47] hover:bg-[#C9A227] text-slate-300 hover:text-[#0F2A47] flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#0F2A47] hover:bg-[#C9A227] text-slate-300 hover:text-[#0F2A47] flex items-center justify-center transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227] font-sans">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li>
                <a href="#home" className="hover:text-[#C9A227] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C9A227] transition-colors">
                  About Malik
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#C9A227] transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-[#C9A227] transition-colors">
                  Needs Estimator
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#C9A227] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#C9A227] transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#careers" className="text-[#C9A227] hover:underline font-bold flex items-center gap-1">
                  <span>★ Join as Advisor</span>
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#C9A227] transition-colors">
                  Common FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Insurance Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227] font-sans">
              Insurance Solutions
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              {SERVICES_DATA.map((svc) => (
                <li key={svc.id}>
                  <button
                    onClick={() => onSelectServiceDetail(svc)}
                    className="text-left hover:text-[#C9A227] transition-colors cursor-pointer"
                  >
                    {svc.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onOpenQuoteModal()}
                  className="text-[11px] text-[#C9A227] hover:underline font-bold flex items-center gap-1"
                >
                  <span>→ Compare 15+ Carriers</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C9A227] font-sans">
              Contact & Advisory Hours
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <a
                href="tel:+14168300762"
                className="flex items-start gap-2.5 hover:text-[#C9A227] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>+1 (416) 830-0762</span>
              </a>

              <a
                href="mailto:malik.bachlani@gmail.com"
                className="flex items-start gap-2.5 hover:text-[#C9A227] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>malik.bachlani@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>Greater Toronto Area, Ontario (Serving Clients Province-Wide & Across Canada)</span>
              </div>

              <div className="flex items-start gap-2.5 pt-1 border-t border-slate-800">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Advisory Office Hours:</div>
                  <div>Mon – Fri: 8:30 AM – 7:00 PM EST</div>
                  <div>Saturday: 10:00 AM – 4:00 PM EST</div>
                  <div>Sunday: By Scheduled Appointment</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="text-center md:text-left space-y-1">
            <div>
              © {new Date().getFullYear()} Plan With Malik. All rights reserved. Licensed Independent Insurance Advisor.
            </div>
            <div className="text-[11px] text-slate-500">
              Insurance products underwritten by respective Canadian life and health insurers. Regulated by FSRA (Ontario).
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#C9A227] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
