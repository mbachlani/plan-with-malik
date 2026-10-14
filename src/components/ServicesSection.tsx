import React from 'react';
import { 
  Heart, 
  ShieldAlert, 
  Umbrella, 
  Stethoscope, 
  Plane, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Sparkles,
  HelpCircle,
  Calculator
} from 'lucide-react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceDetail: (service: ServiceItem) => void;
  onOpenQuoteModal: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceDetail,
  onOpenQuoteModal,
}) => {
  // Map icon names to Lucide icons
  const renderIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'heart-handshake':
        return <Heart className="w-6 h-6 text-[#C9A227]" />;
      case 'shield-alert':
        return <ShieldAlert className="w-6 h-6 text-[#C9A227]" />;
      case 'umbrella':
        return <Umbrella className="w-6 h-6 text-[#C9A227]" />;
      case 'stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#C9A227]" />;
      case 'plane':
        return <Plane className="w-6 h-6 text-[#C9A227]" />;
      case 'trending-up':
        return <TrendingUp className="w-6 h-6 text-[#C9A227]" />;
      default:
        return <Heart className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#F6F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[2px] text-[#C9A227]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR INSURANCE SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold font-serif text-[#0F2A47] leading-tight">
            Coverage Tailored For Every Stage of Life
          </h2>
          <p className="text-base sm:text-lg text-[#4A5568] leading-relaxed pt-1">
            As an independent advisor, I compare policies across Canada’s premier insurance institutions to secure the strongest coverage at the lowest market rate.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const isComplementary = service.id === 'financial-planning';
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative bg-white rounded-2xl p-7 lg:p-8 border border-[#E2E5EA] shadow-xs hover:shadow-xl hover:border-[#C9A227]/60 hover:-translate-y-1.5 transition-all duration-250 flex flex-col justify-between"
              >
                {/* Secondary badge for 6th item */}
                {isComplementary && (
                  <div className="absolute top-4 right-4 bg-[#0F2A47]/5 text-[#0F2A47] border border-[#0F2A47]/10 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full">
                    Complementary Wealth
                  </div>
                )}

                <div>
                  {/* Top Navy Square Badge with Gold Icon */}
                  <div className="w-14 h-14 rounded-xl bg-[#0F2A47] flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#0B1F35] group-hover:scale-105 transition-all duration-200">
                    {renderIcon(service.iconName)}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-serif text-[#0F2A47] mb-3 group-hover:text-[#0B1F35] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                    {service.keyBenefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-[#C9A227]/15 text-[#C9A227] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    id={`service-learn-more-${service.id}`}
                    onClick={() => onSelectServiceDetail(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F2A47] group-hover:text-[#C9A227] transition-colors cursor-pointer"
                  >
                    <span>Full Coverage Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button
                    id={`service-quote-btn-${service.id}`}
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#F6F7FA] text-[#0F2A47] hover:bg-[#C9A227] hover:text-[#0F2A47] transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Advisory Banner below services */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E5EA] shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#0F2A47] text-[#C9A227] flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold font-serif text-[#0F2A47]">
                Not sure how much coverage your family requires?
              </h4>
              <p className="text-xs sm:text-sm text-[#4A5568]">
                Try our interactive 30-second Needs Estimator below or consult directly with Malik.
              </p>
            </div>
          </div>
          <a
            href="#calculator"
            className="shrink-0 px-5 py-2.5 bg-[#0F2A47] hover:bg-[#0B1F35] text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-2"
          >
            <span>Launch Estimator</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C9A227]" />
          </a>
        </div>

      </div>
    </section>
  );
};
