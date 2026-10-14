import React, { useState, useEffect } from 'react';
import { Shield, Phone, Mail, ChevronDown, Menu, X, Calendar, ArrowRight, Heart, Sparkles, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface HeaderProps {
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenConsultationModal: () => void;
  onOpenRecruitmentModal: () => void;
  onSelectServiceDetail: (service: ServiceItem) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  onOpenConsultationModal,
  onOpenRecruitmentModal,
  onSelectServiceDetail,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Slim Top Utility Bar */}
      <div id="top-utility-bar" className="bg-[#0B1F35] text-white text-xs md:text-sm border-b border-[#0F2A47]/80 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-[#C9A227]/20 text-[#C9A227]">
              <Sparkles className="w-2.5 h-2.5" />
            </span>
            <span>Helping Individuals, Families & Businesses Across Canada</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-5 text-slate-300 text-xs sm:text-sm">
            <a
              id="header-phone-link"
              href="tel:+14168300762"
              className="flex items-center gap-1.5 hover:text-[#C9A227] transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>(416) 830-0762</span>
            </a>
            <span className="hidden sm:inline text-slate-600">|</span>
            <a
              id="header-email-link"
              href="mailto:malik.bachlani@gmail.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-[#C9A227] transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
              <span className="hidden md:inline">malik.bachlani@gmail.com</span>
              <span className="md:hidden">Email Malik</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        id="main-site-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white ${
          isScrolled
            ? 'shadow-md py-3 border-b border-[#E2E5EA]'
            : 'py-3.5 md:py-4 border-b border-[#E2E5EA]/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Brand Mark (Left) */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0F2A47] flex items-center justify-center text-[#C9A227] shadow-sm group-hover:bg-[#0B1F35] transition-colors shrink-0">
              <Shield className="w-5 h-5 fill-[#C9A227]/20" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F2A47] font-serif leading-none flex items-center gap-1.5">
                Plan With <span className="text-[#C9A227]">Malik</span>
              </span>
              <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#4A5568] font-semibold mt-1 whitespace-nowrap">
                Insurance & Financial Advisor
              </span>
            </div>
          </a>

          {/* Spacious Desktop Navigation Links (Center) */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2 text-[#0F2A47]">
            <a
              id="nav-home-link"
              href="#home"
              className="px-3 py-2 rounded-lg text-sm font-semibold hover:text-[#C9A227] hover:bg-slate-50 transition-all"
            >
              Home
            </a>

            <a
              id="nav-about-link"
              href="#about"
              className="px-3 py-2 rounded-lg text-sm font-semibold hover:text-[#C9A227] hover:bg-slate-50 transition-all"
            >
              About
            </a>

            {/* Services Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button
                id="nav-services-dropdown-btn"
                type="button"
                onClick={() => {
                  const el = document.getElementById('services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 hover:text-[#C9A227] hover:bg-slate-50 transition-all cursor-pointer"
              >
                <span>Services</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#C9A227] transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu with Ample Padding & Visual Cleanliness */}
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-2xl border border-[#E2E5EA] p-3.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C9A227] px-3 py-1 mb-1.5 border-b border-slate-100">
                    6 Core Solutions
                  </div>
                  <div className="space-y-1">
                    {SERVICES_DATA.map((svc) => (
                      <button
                        key={svc.id}
                        id={`dropdown-service-${svc.id}`}
                        onClick={() => {
                          setIsServicesDropdownOpen(false);
                          onSelectServiceDetail(svc);
                        }}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F6F7FA] text-[#0F2A47] hover:text-[#C9A227] transition-colors text-xs font-semibold flex items-center justify-between group/item cursor-pointer"
                      >
                        <span className="text-slate-800 group-hover/item:text-[#0F2A47]">{svc.title}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#C9A227]" />
                      </button>
                    ))}
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-slate-100 px-3 py-1.5 bg-[#F6F7FA] rounded-lg">
                    <p className="text-[11px] text-slate-500 font-medium">Need personalized guidance?</p>
                    <button
                      onClick={() => {
                        setIsServicesDropdownOpen(false);
                        onOpenQuoteModal();
                      }}
                      className="text-xs font-bold text-[#0F2A47] hover:text-[#C9A227] flex items-center gap-1 mt-0.5 cursor-pointer"
                    >
                      Compare Canadian carriers <ArrowRight className="w-3 h-3 text-[#C9A227]" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            <a
              id="nav-calculator-link"
              href="#calculator"
              className="px-3 py-2 rounded-lg text-sm font-semibold hover:text-[#C9A227] hover:bg-slate-50 transition-all whitespace-nowrap"
            >
              Calculator
            </a>

            <a
              id="nav-process-link"
              href="#process"
              className="px-3 py-2 rounded-lg text-sm font-semibold hover:text-[#C9A227] hover:bg-slate-50 transition-all whitespace-nowrap"
            >
              How It Works
            </a>

            <a
              id="nav-testimonials-link"
              href="#testimonials"
              className="px-3 py-2 rounded-lg text-sm font-semibold hover:text-[#C9A227] hover:bg-slate-50 transition-all"
            >
              Reviews
            </a>

            <a
              id="nav-careers-link"
              href="#careers"
              className="px-3 py-2 rounded-lg text-sm font-semibold text-[#0F2A47] hover:text-[#C9A227] hover:bg-slate-50 transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Careers</span>
              <span className="bg-[#C9A227]/20 text-[#0F2A47] text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide">
                Hiring
              </span>
            </a>

            <a
              id="nav-faq-link"
              href="#faq"
              className="px-3 py-2 rounded-lg text-sm font-semibold hover:text-[#C9A227] hover:bg-slate-50 transition-all"
            >
              FAQ
            </a>
          </nav>

          {/* Compact Tablet Navigation (1024px to 1279px) */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1 text-[#0F2A47]">
            <a
              href="#home"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:text-[#C9A227] hover:bg-slate-50"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:text-[#C9A227] hover:bg-slate-50"
            >
              About
            </a>
            <a
              href="#services"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:text-[#C9A227] hover:bg-slate-50"
            >
              Services
            </a>
            <a
              href="#calculator"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:text-[#C9A227] hover:bg-slate-50"
            >
              Estimator
            </a>
            <a
              href="#careers"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold text-[#0F2A47] hover:text-[#C9A227] hover:bg-slate-50 flex items-center gap-1"
            >
              <span>Careers</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
            </a>
            <a
              href="#testimonials"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:text-[#C9A227] hover:bg-slate-50"
            >
              Reviews
            </a>
            <a
              href="#faq"
              className="px-2.5 py-1.5 rounded-lg text-xs font-semibold hover:text-[#C9A227] hover:bg-slate-50"
            >
              FAQ
            </a>
          </nav>

          {/* Desktop Right CTAs (Right) */}
          <div className="hidden lg:flex items-center gap-2.5 2xl:gap-3 shrink-0">
            <button
              id="header-book-consult-btn"
              onClick={onOpenConsultationModal}
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-[#0F2A47] bg-white border border-[#0F2A47] hover:bg-[#F6F7FA] rounded-lg transition-all duration-200 shadow-2xs cursor-pointer whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C9A227]" />
              <span>Book Call</span>
            </button>

            <button
              id="header-quote-cta-btn"
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-1.5 px-4 xl:px-5 py-2.5 text-xs font-bold text-[#0F2A47] bg-[#C9A227] hover:bg-[#D9B84A] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0F2A47]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#0F2A47] hover:text-[#C9A227] hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Translucent Backdrop */}
          <div
            className="fixed inset-0 bg-[#0B1F35]/70 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-In Drawer */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#0F2A47] flex items-center justify-center text-[#C9A227]">
                    <Shield className="w-4 h-4" />
                  </div>
                  <span className="font-serif font-bold text-base text-[#0F2A47]">Plan With Malik</span>
                </div>
                <button
                  id="mobile-menu-close-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-[#0F2A47] hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links with Spacious Touch Padding */}
              <nav className="mt-6 flex flex-col space-y-2">
                <a
                  href="#home"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] hover:bg-[#F6F7FA] hover:text-[#C9A227] transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] hover:bg-[#F6F7FA] hover:text-[#C9A227] transition-colors"
                >
                  About Malik
                </a>
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] hover:bg-[#F6F7FA] hover:text-[#C9A227] transition-colors flex items-center justify-between"
                >
                  <span>Services (6 Core)</span>
                  <span className="text-xs bg-[#C9A227]/20 text-[#0F2A47] px-2 py-0.5 rounded font-bold">Explore</span>
                </a>
                <a
                  href="#calculator"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] hover:bg-[#F6F7FA] hover:text-[#C9A227] transition-colors"
                >
                  Needs Estimator
                </a>
                <a
                  href="#process"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] hover:bg-[#F6F7FA] hover:text-[#C9A227] transition-colors"
                >
                  How It Works
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] hover:bg-[#F6F7FA] hover:text-[#C9A227] transition-colors"
                >
                  Client Reviews
                </a>
                <a
                  href="#careers"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenRecruitmentModal();
                  }}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] bg-[#F6F7FA] hover:text-[#C9A227] transition-colors flex items-center justify-between border border-[#C9A227]/30"
                >
                  <span>Join as Advisor</span>
                  <span className="text-[10px] bg-[#C9A227] text-[#0F2A47] px-2 py-0.5 rounded font-bold uppercase">Mentorship</span>
                </a>
                <a
                  href="#faq"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F2A47] hover:bg-[#F6F7FA] hover:text-[#C9A227] transition-colors"
                >
                  Common FAQs
                </a>
              </nav>
            </div>

            {/* Bottom Pinned CTAs */}
            <div className="pt-6 border-t border-slate-200 space-y-3">
              <button
                id="mobile-quote-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 px-4 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl text-center shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="mobile-consult-btn"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultationModal();
                }}
                className="w-full py-3 px-4 bg-white border border-[#0F2A47] text-[#0F2A47] font-semibold rounded-xl text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#C9A227]" />
                <span>Book 1-on-1 Call</span>
              </button>

              <div className="pt-2 text-center">
                <a
                  href="tel:+14168300762"
                  className="text-xs font-semibold text-slate-600 hover:text-[#0F2A47] flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
                  <span>Call (416) 830-0762</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
