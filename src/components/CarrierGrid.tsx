import React from 'react';
import { Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { CARRIERS_DATA } from '../data/content';

export const CarrierGrid: React.FC = () => {
  return (
    <section id="carriers" className="py-14 bg-white border-b border-[#E2E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <div className="text-[11px] font-bold uppercase tracking-[2px] text-[#C9A227]">
            INDEPENDENT ACCESS TO CANADA'S PREMIER INSURERS
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            I compare live rates and underwriting terms across these A+ rated institutions to find you the best price.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {CARRIERS_DATA.map((carrier, idx) => (
            <div
              key={idx}
              className="bg-[#F6F7FA] rounded-xl p-3.5 border border-[#E2E5EA] text-center flex flex-col items-center justify-center hover:bg-white hover:border-[#C9A227]/50 hover:shadow-sm transition-all duration-200"
            >
              <div className="text-xs sm:text-sm font-bold font-serif text-[#0F2A47] leading-tight">
                {carrier.name}
              </div>
              <div className="text-[10px] text-slate-500 mt-1 font-medium">
                {carrier.category}
              </div>
              <div className="text-[9px] font-bold text-[#C9A227] mt-0.5 uppercase tracking-wider">
                {carrier.rating}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 text-center">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Regulated by the Financial Services Regulatory Authority (FSRA)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Assuris Protected Policies Across Canada</span>
          </div>
        </div>
      </div>
    </section>
  );
};
