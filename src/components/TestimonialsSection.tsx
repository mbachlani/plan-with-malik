import React, { useState } from 'react';
import { Quote, Star, Sparkles, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/content';

export const TestimonialsSection: React.FC = () => {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F6F7FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[2px] text-[#C9A227]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT CLIENTS SAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F2A47]">
            Trusted by Canadian Families & Businesses
          </h2>
          <p className="text-base text-[#4A5568]">
            Real feedback from individuals, homeowners, and business owners who found clarity, peace of mind, and significant savings with Malik.
          </p>
        </div>

        {/* Desktop Grid (3-4 columns) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              id={`testimonial-card-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E5EA] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-250 flex flex-col justify-between"
            >
              <div>
                {/* Gold Quote Icon & 5 Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                    <Quote className="w-4 h-4" />
                  </div>
                  <div className="flex text-[#C9A227]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C9A227]" />
                    ))}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-[#4A5568] italic leading-relaxed mb-6 font-normal">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info & Coverage Badge */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#C9A227]/40 shadow-xs shrink-0"
                  />
                  <div>
                    <div className="text-xs sm:text-sm font-bold font-serif text-[#0F2A47] leading-tight">
                      {item.name}
                    </div>
                    <div className="text-[11px] text-slate-500">{item.roleOrLocation}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="inline-block text-[10px] font-semibold text-[#0F2A47] bg-[#F6F7FA] border border-slate-200 px-2.5 py-1 rounded-full">
                    {item.coveragePurchased}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Swipeable / Carousel View */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-6 border border-[#E2E5EA] shadow-md flex flex-col justify-between min-h-[300px]">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-full bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227]">
                  <Quote className="w-4 h-4" />
                </div>
                <div className="flex text-[#C9A227]">
                  {[...Array(TESTIMONIALS_DATA[activeMobileIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A227]" />
                  ))}
                </div>
              </div>

              <p className="text-sm text-[#4A5568] italic leading-relaxed mb-6">
                "{TESTIMONIALS_DATA[activeMobileIndex].quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={TESTIMONIALS_DATA[activeMobileIndex].avatarUrl}
                  alt={TESTIMONIALS_DATA[activeMobileIndex].name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C9A227]/40 shadow-xs"
                />
                <div>
                  <div className="text-sm font-bold font-serif text-[#0F2A47]">
                    {TESTIMONIALS_DATA[activeMobileIndex].name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {TESTIMONIALS_DATA[activeMobileIndex].roleOrLocation}
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <span className="inline-block text-[11px] font-semibold text-[#0F2A47] bg-[#F6F7FA] border border-slate-200 px-3 py-1 rounded-full">
                  {TESTIMONIALS_DATA[activeMobileIndex].coveragePurchased}
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Dot Pagination & Arrows */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={() =>
                setActiveMobileIndex((prev) =>
                  prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1
                )
              }
              className="p-2 rounded-lg bg-white border border-slate-200 text-[#0F2A47]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMobileIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    activeMobileIndex === idx ? 'w-6 bg-[#C9A227]' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setActiveMobileIndex((prev) =>
                  prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1
                )
              }
              className="p-2 rounded-lg bg-white border border-slate-200 text-[#0F2A47]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
