import React, { useState } from 'react';
import { Calculator, Shield, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../types';

interface InteractiveAdvisorCalculatorProps { onOpenQuoteModal: (serviceId: string, prefill?: Partial<QuoteFormData>) => void; }

export const InteractiveAdvisorCalculator: React.FC<InteractiveAdvisorCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [annualIncome, setAnnualIncome] = useState(85000);
  const [mortgageDebt, setMortgageDebt] = useState(450000);
  const [otherDebts, setOtherDebts] = useState(25000);
  const [numberOfKids, setNumberOfKids] = useState(2);
  const [existingCoverage, setExistingCoverage] = useState(100000);
  const [ageGroup, setAgeGroup] = useState<'20-30' | '30-40' | '40-50' | '50+'>('30-40');

  const incomeReplacement = annualIncome * 8;
  const educationNeeds = numberOfKids * 75000;
  const totalLiabilities = mortgageDebt + otherDebts;
  const grossNeed = incomeReplacement + educationNeeds + totalLiabilities;
  const netRecommendedLife = Math.max(250000, grossNeed - existingCoverage);
  const getEstimatedMonthlyRate = (coverage: number) => {
    const ratePerHundredK = ageGroup === '20-30' ? 6.5 : ageGroup === '30-40' ? 9.5 : ageGroup === '40-50' ? 18.0 : 38.0;
    return Math.round((coverage / 100000) * ratePerHundredK);
  };
  const estimatedMonthly = getEstimatedMonthlyRate(netRecommendedLife);

  return (
    <section id="calculator" className="py-14 sm:py-20 md:py-24 bg-white relative border-b border-[#E2E5EA] overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3 min-w-0">
          <div className="inline-flex max-w-full items-center justify-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-[1.2px] sm:tracking-[2px] text-[#C9A227]">
            <Sparkles className="w-3.5 h-3.5 shrink-0" /><span className="break-words">INTERACTIVE COVERAGE ESTIMATOR</span>
          </div>
          <h2 className="text-[clamp(1.75rem,7vw,2.5rem)] font-bold font-serif text-[#0F2A47] leading-tight break-words">How Much Protection Does Your Family Actually Need?</h2>
          <p className="text-sm sm:text-base text-[#4A5568] break-words">Use this transparent calculation tool to calculate your financial obligations and discover what typical Canadian market rates look like.</p>
        </div>

        <div className="bg-[#F6F7FA] rounded-2xl border border-[#E2E5EA] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-w-0">
          <div className="lg:col-span-7 p-4 sm:p-8 lg:p-10 space-y-5 sm:space-y-6 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200 pb-4 min-w-0">
              <span className="font-bold text-[#0F2A47] text-sm sm:text-base flex items-center gap-2 min-w-0"><Calculator className="w-5 h-5 text-[#C9A227] shrink-0" /><span className="break-words">Family Financial Snapshot</span></span>
              <span className="text-[10px] sm:text-xs text-slate-500 font-medium break-words">Standard Canadian D.I.M.E. Model</span>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-start min-[380px]:justify-between gap-1 text-xs sm:text-sm font-semibold text-[#0F2A47]"><span>Annual Gross Household Income</span><span className="text-[#C9A227] font-bold text-sm sm:text-base font-mono shrink-0">${annualIncome.toLocaleString()}</span></div>
              <input id="calc-slider-income" type="range" min="40000" max="300000" step="5000" value={annualIncome} onChange={(e) => setAnnualIncome(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]" />
              <div className="flex justify-between text-[10px] text-slate-400 gap-2"><span className="shrink-0">$40,000</span><span className="hidden sm:inline text-center">Provides 8 yrs income replacement (${(annualIncome * 8).toLocaleString()})</span><span className="shrink-0">$300,000+</span></div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-start min-[380px]:justify-between gap-1 text-xs sm:text-sm font-semibold text-[#0F2A47]"><span>Remaining Mortgage Balance</span><span className="text-[#C9A227] font-bold text-sm sm:text-base font-mono shrink-0">${mortgageDebt.toLocaleString()}</span></div>
              <input id="calc-slider-mortgage" type="range" min="0" max="1500000" step="25000" value={mortgageDebt} onChange={(e) => setMortgageDebt(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]" />
              <div className="flex justify-between text-[10px] text-slate-400 gap-1"><span>$0 (Renting/Paid Off)</span><span>$750,000</span><span>$1,500,000</span></div>
            </div>

            <div className="space-y-2">
              <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-start min-[380px]:justify-between gap-1 text-xs sm:text-sm font-semibold text-[#0F2A47]"><span>Other Debts (Car, Loans, Credit Lines)</span><span className="text-[#C9A227] font-bold text-sm sm:text-base font-mono shrink-0">${otherDebts.toLocaleString()}</span></div>
              <input id="calc-slider-debts" type="range" min="0" max="150000" step="5000" value={otherDebts} onChange={(e) => setOtherDebts(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 min-w-0">
              <div className="min-w-0"><label className="block text-xs font-semibold text-[#0F2A47] mb-1.5">Number of Dependent Children</label><div className="flex items-center gap-1.5 sm:gap-2">{[0,1,2,3,4].map((num) => <button key={num} type="button" onClick={() => setNumberOfKids(num)} className={`flex-1 min-w-0 py-2.5 rounded-lg text-xs font-bold transition-colors ${numberOfKids === num ? 'bg-[#0F2A47] text-white shadow-xs' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}>{num === 4 ? '4+' : num}</button>)}</div></div>
              <div className="min-w-0"><label className="block text-xs font-semibold text-[#0F2A47] mb-1.5">Your Current Age Bracket</label><select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value as any)} className="w-full min-w-0 py-2.5 px-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-[#0F2A47] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"><option value="20-30">Age 20 - 30</option><option value="30-40">Age 31 - 40</option><option value="40-50">Age 41 - 50</option><option value="50+">Age 51+</option></select></div>
            </div>

            <div className="space-y-1 pt-1 min-w-0"><div className="flex flex-col min-[380px]:flex-row min-[380px]:items-start min-[380px]:justify-between gap-1 text-xs font-semibold text-[#0F2A47]"><span>Existing Group or Private Life Insurance (To Subtract)</span><span className="text-slate-600 font-mono shrink-0">${existingCoverage.toLocaleString()}</span></div><input id="calc-slider-existing" type="range" min="0" max="500000" step="25000" value={existingCoverage} onChange={(e) => setExistingCoverage(Number(e.target.value))} className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F2A47]" /></div>
          </div>

          <div className="lg:col-span-5 bg-[#0F2A47] text-white p-5 sm:p-8 lg:p-10 flex flex-col justify-between gap-6 min-w-0">
            <div className="min-w-0">
              <div className="inline-flex max-w-full items-start gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#C9A227] bg-white/10 px-3 py-1 rounded-full mb-4"><Shield className="w-3.5 h-3.5 shrink-0 mt-0.5" /><span className="break-words">Your Recommended Protection</span></div>
              <div className="space-y-1"><div className="text-xs text-slate-300">Suggested Total Life Coverage</div><div className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight break-words">${(Math.round(netRecommendedLife / 25000) * 25000).toLocaleString()}</div></div>
              <div className="mt-6 space-y-2.5 text-xs border-t border-b border-white/10 py-4">
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1 text-slate-300"><span>8-Year Family Income Guard:</span><span className="font-semibold text-white shrink-0">${incomeReplacement.toLocaleString()}</span></div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1 text-slate-300"><span>Mortgage & Debts Clearance:</span><span className="font-semibold text-white shrink-0">${totalLiabilities.toLocaleString()}</span></div>
                <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1 text-slate-300"><span>Post-Secondary Education Fund:</span><span className="font-semibold text-white shrink-0">${educationNeeds.toLocaleString()}</span></div>
                {existingCoverage > 0 && <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between gap-1 text-[#C9A227]"><span>Less Existing Employer Coverage:</span><span className="shrink-0">-${existingCoverage.toLocaleString()}</span></div>}
              </div>
              <div className="mt-5 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 min-w-0"><div className="text-[10px] sm:text-[11px] text-slate-300 uppercase tracking-wider font-semibold break-words">Estimated 20-Year Term Rate Range</div><div className="text-xl sm:text-2xl font-bold text-[#C9A227] mt-0.5 break-words">~${Math.max(18, Math.round(estimatedMonthly * 0.85))} - ${Math.round(estimatedMonthly * 1.15)}<span className="text-xs font-normal text-slate-300 ml-1">/month</span></div><p className="text-[10px] text-slate-400 mt-1">*Based on standard healthy rates across top 15 Canadian carriers. Exact rate depends on health history.</p></div>
            </div>
            <div className="pt-2 space-y-3"><button id="calc-lock-quote-btn" onClick={() => onOpenQuoteModal('life-insurance', { coverageAmount: `$${(Math.round(netRecommendedLife / 25000) * 25000).toLocaleString()}`, notes: `Calculated from Estimator: Income $${annualIncome.toLocaleString()}, Mortgage $${mortgageDebt.toLocaleString()}, Kids: ${numberOfKids}` })} className="w-full min-h-11 py-3.5 px-4 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl text-sm shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:shadow-xl hover:-translate-y-0.5"><span className="break-words">Compare Official Carrier Rates</span><ArrowRight className="w-4 h-4 text-[#0F2A47] shrink-0" /></button><p className="text-[11px] text-center text-slate-300 break-words">Zero spam. Malik will send a side-by-side comparison directly to your inbox.</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};