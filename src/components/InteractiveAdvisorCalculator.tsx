import React, { useState } from 'react';
import { Calculator, Shield, HelpCircle, ArrowRight, CheckCircle2, DollarSign, UserCheck, Sparkles } from 'lucide-react';
import { QuoteFormData } from '../types';

interface InteractiveAdvisorCalculatorProps {
  onOpenQuoteModal: (serviceId: string, prefill?: Partial<QuoteFormData>) => void;
}

export const InteractiveAdvisorCalculator: React.FC<InteractiveAdvisorCalculatorProps> = ({
  onOpenQuoteModal,
}) => {
  // Calculator inputs
  const [annualIncome, setAnnualIncome] = useState(85000);
  const [mortgageDebt, setMortgageDebt] = useState(450000);
  const [otherDebts, setOtherDebts] = useState(25000);
  const [numberOfKids, setNumberOfKids] = useState(2);
  const [existingCoverage, setExistingCoverage] = useState(100000);
  const [ageGroup, setAgeGroup] = useState<'20-30' | '30-40' | '40-50' | '50+'>('30-40');

  // Math for estimated needs
  // Income replacement = 8x annual income
  // Children education = $75k per child
  const incomeReplacement = annualIncome * 8;
  const educationNeeds = numberOfKids * 75000;
  const totalLiabilities = mortgageDebt + otherDebts;
  const grossNeed = incomeReplacement + educationNeeds + totalLiabilities;
  const netRecommendedLife = Math.max(250000, grossNeed - existingCoverage);

  // Approximate ballpark monthly rates for healthy non-smoker 20-year term in Canada
  const getEstimatedMonthlyRate = (coverage: number) => {
    const ratePerHundredK = ageGroup === '20-30' ? 6.5 : ageGroup === '30-40' ? 9.5 : ageGroup === '40-50' ? 18.0 : 38.0;
    const estimated = (coverage / 100000) * ratePerHundredK;
    return Math.round(estimated);
  };

  const estimatedMonthly = getEstimatedMonthlyRate(netRecommendedLife);

  return (
    <section id="calculator" className="py-20 md:py-24 bg-white relative border-b border-[#E2E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[2px] text-[#C9A227]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE COVERAGE ESTIMATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F2A47]">
            How Much Protection Does Your Family Actually Need?
          </h2>
          <p className="text-base text-[#4A5568]">
            Use this transparent calculation tool to calculate your financial obligations and discover what typical Canadian market rates look like.
          </p>
        </div>

        {/* Two Column Calculator Box */}
        <div className="bg-[#F6F7FA] rounded-2xl border border-[#E2E5EA] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Sliders & Variables (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <span className="font-bold text-[#0F2A47] text-base flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#C9A227]" />
                Family Financial Snapshot
              </span>
              <span className="text-xs text-slate-500 font-medium">Standard Canadian D.I.M.E. Model</span>
            </div>

            {/* Input 1: Annual Income */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-semibold text-[#0F2A47]">
                <span>Annual Gross Household Income</span>
                <span className="text-[#C9A227] font-bold text-base font-mono">${annualIncome.toLocaleString()}</span>
              </div>
              <input
                id="calc-slider-income"
                type="range"
                min="40000"
                max="300000"
                step="5000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
              />
              <div className="flex justify-between text-[10px] text-slate-400 gap-1">
                <span className="shrink-0">$40,000</span>
                <span className="hidden sm:inline text-center">Provides 8 yrs income replacement (${(annualIncome * 8).toLocaleString()})</span>
                <span className="shrink-0">$300,000+</span>
              </div>
            </div>

            {/* Input 2: Mortgage Debt */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-semibold text-[#0F2A47]">
                <span>Remaining Mortgage Balance</span>
                <span className="text-[#C9A227] font-bold text-base font-mono">${mortgageDebt.toLocaleString()}</span>
              </div>
              <input
                id="calc-slider-mortgage"
                type="range"
                min="0"
                max="1500000"
                step="25000"
                value={mortgageDebt}
                onChange={(e) => setMortgageDebt(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>$0 (Renting/Paid Off)</span>
                <span>$750,000</span>
                <span>$1,500,000</span>
              </div>
            </div>

            {/* Input 3: Other Debts */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs sm:text-sm font-semibold text-[#0F2A47]">
                <span>Other Debts (Car, Loans, Credit Lines)</span>
                <span className="text-[#C9A227] font-bold text-base font-mono">${otherDebts.toLocaleString()}</span>
              </div>
              <input
                id="calc-slider-debts"
                type="range"
                min="0"
                max="150000"
                step="5000"
                value={otherDebts}
                onChange={(e) => setOtherDebts(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C9A227]"
              />
            </div>

            {/* Input 4: Dependent Children & Age Group */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#0F2A47] mb-1.5">Number of Dependent Children</label>
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setNumberOfKids(num)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-colors ${
                        numberOfKids === num
                          ? 'bg-[#0F2A47] text-white shadow-xs'
                          : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {num === 4 ? '4+' : num}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F2A47] mb-1.5">Your Current Age Bracket</label>
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value as any)}
                  className="w-full py-2 px-3 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-[#0F2A47] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                >
                  <option value="20-30">Age 20 - 30</option>
                  <option value="30-40">Age 31 - 40</option>
                  <option value="40-50">Age 41 - 50</option>
                  <option value="50+">Age 51+</option>
                </select>
              </div>
            </div>

            {/* Input 5: Existing Employer Coverage */}
            <div className="space-y-1 pt-1">
              <div className="flex justify-between text-xs font-semibold text-[#0F2A47]">
                <span>Existing Group or Private Life Insurance (To Subtract)</span>
                <span className="text-slate-600 font-mono">${existingCoverage.toLocaleString()}</span>
              </div>
              <input
                id="calc-slider-existing"
                type="range"
                min="0"
                max="500000"
                step="25000"
                value={existingCoverage}
                onChange={(e) => setExistingCoverage(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0F2A47]"
              />
            </div>

          </div>

          {/* Right Column: Dynamic Results & Direct Quote Trigger (5 cols) */}
          <div className="lg:col-span-5 bg-[#0F2A47] text-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C9A227] bg-white/10 px-3 py-1 rounded-full mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Your Recommended Protection</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-slate-300">Suggested Total Life Coverage</div>
                <div className="text-3xl sm:text-4xl font-bold font-serif text-white tracking-tight">
                  ${(Math.round(netRecommendedLife / 25000) * 25000).toLocaleString()}
                </div>
              </div>

              {/* Breakdown List */}
              <div className="mt-6 space-y-2.5 text-xs border-t border-b border-white/10 py-4">
                <div className="flex justify-between text-slate-300">
                  <span>8-Year Family Income Guard:</span>
                  <span className="font-semibold text-white">${incomeReplacement.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Mortgage & Debts Clearance:</span>
                  <span className="font-semibold text-white">${totalLiabilities.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Post-Secondary Education Fund:</span>
                  <span className="font-semibold text-white">${educationNeeds.toLocaleString()}</span>
                </div>
                {existingCoverage > 0 && (
                  <div className="flex justify-between text-[#C9A227]">
                    <span>Less Existing Employer Coverage:</span>
                    <span>-${existingCoverage.toLocaleString()}</span>
                  </div>
                )}
              </div>

              {/* Estimated Premium Range */}
              <div className="mt-5 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="text-[11px] text-slate-300 uppercase tracking-wider font-semibold">
                  Estimated 20-Year Term Rate Range
                </div>
                <div className="text-2xl font-bold text-[#C9A227] mt-0.5">
                  ~${Math.max(18, Math.round(estimatedMonthly * 0.85))} - ${Math.round(estimatedMonthly * 1.15)}
                  <span className="text-xs font-normal text-slate-300 ml-1">/month</span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  *Based on standard healthy rates across top 15 Canadian carriers. Exact rate depends on health history.
                </p>
              </div>
            </div>

            {/* Direct Action Button */}
            <div className="pt-4 space-y-3">
              <button
                id="calc-lock-quote-btn"
                onClick={() => {
                  onOpenQuoteModal('life-insurance', {
                    coverageAmount: `$${(Math.round(netRecommendedLife / 25000) * 25000).toLocaleString()}`,
                    notes: `Calculated from Estimator: Income $${annualIncome.toLocaleString()}, Mortgage $${mortgageDebt.toLocaleString()}, Kids: ${numberOfKids}`,
                  });
                }}
                className="w-full py-3.5 px-4 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold rounded-xl text-sm shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Compare Official Carrier Rates</span>
                <ArrowRight className="w-4 h-4 text-[#0F2A47]" />
              </button>

              <p className="text-[11px] text-center text-slate-300">
                Zero spam. Malik will send a side-by-side comparison directly to your inbox.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
