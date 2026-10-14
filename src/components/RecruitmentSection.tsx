import React from 'react';
import { 
  GraduationCap, 
  TrendingUp, 
  Briefcase, 
  Award, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  DollarSign, 
  Clock, 
  Building2, 
  BookOpen, 
  ShieldCheck,
  Target,
  Zap,
  HelpCircle
} from 'lucide-react';

interface RecruitmentSectionProps {
  onOpenRecruitmentModal: () => void;
}

export const RecruitmentSection: React.FC<RecruitmentSectionProps> = ({
  onOpenRecruitmentModal,
}) => {
  const pillars = [
    {
      icon: GraduationCap,
      title: 'LLQP Licensing & Exam Prep',
      description: 'Step-by-step coaching for the Life License Qualification Program (LLQP). Study guides, practice modules, and provincial licensing sponsorship.',
      highlight: 'Zero financial background required',
    },
    {
      icon: Users,
      title: '1-on-1 Mentorship with Malik',
      description: 'Direct access to an experienced advisor. Learn case design, client discovery interviews, product comparisons, and compliance fundamentals.',
      highlight: 'Live joint field calls & coaching',
    },
    {
      icon: Building2,
      title: 'Direct Access to 15+ Top Carriers',
      description: 'Represent Canada’s premier institutions (Manulife, Sun Life, Canada Life, Desjardins, iA, etc.) without proprietary quota handcuffs.',
      highlight: 'Uncapped top-tier commission split',
    },
    {
      icon: TrendingUp,
      title: 'True Business Equity & Ownership',
      description: 'You own your client book from Day 1. Build recurring renewal income, long-term legacy value, and scale your personal brand.',
      highlight: 'Vested renewals & client ownership',
    },
    {
      icon: Clock,
      title: 'Flexible Full-Time or Part-Time',
      description: 'Begin building your practice while maintaining your current employment. Set your own working hours and work remotely from anywhere in Canada.',
      highlight: 'Complete lifestyle flexibility',
    },
    {
      icon: Zap,
      title: 'Digital Tools, CRM & Lead Systems',
      description: 'Equipped with modern quoting engines, digital application portals, and proven marketing playbooks to kickstart your pipeline.',
      highlight: 'Turnkey operational setup',
    },
  ];

  const candidateTypes = [
    {
      title: 'Career Switchers & Professionals',
      desc: 'Looking for higher earning potential, professional autonomy, and freedom from standard 9-to-5 limitations.',
      tag: 'High Potential',
    },
    {
      title: 'Newcomers to Canada',
      desc: 'Seeking a respected, high-income financial career in Canada with full sponsorship and supportive cultural mentorship.',
      tag: 'Full Sponsorship',
    },
    {
      title: 'Real Estate & Mortgage Agents',
      desc: 'Add life, mortgage protection, and living benefits to your existing client base for substantial multi-stream revenue.',
      tag: 'Synergy Revenue',
    },
    {
      title: 'Recent Graduates & Entrepreneurs',
      desc: 'Eager to master financial advisory, wealth accumulation, and launch an independent business early in life.',
      tag: 'Rapid Growth',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Discovery & Vision Call',
      desc: 'A 20-minute 1-on-1 consultation with Malik to discuss your background, financial goals, and mutual fit.',
    },
    {
      step: '02',
      title: 'LLQP Licensing Track',
      desc: 'Enroll in provincial LLQP course with Malik’s exam study roadmaps, practice drills, and coaching.',
    },
    {
      step: '03',
      title: 'Carrier Contracting & Setup',
      desc: 'Get contracted with 15+ major Canadian carriers, setup E&O insurance, and access software tools.',
    },
    {
      step: '04',
      title: 'Joint Fieldwork & Revenue',
      desc: 'Conduct real client meetings alongside Malik, close your first policies, and scale your client base.',
    },
  ];

  return (
    <section id="careers" className="py-20 bg-gradient-to-b from-[#F6F7FA] via-white to-[#F6F7FA] border-t border-b border-[#E2E5EA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Badge & Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2A47]/10 text-[#0F2A47] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>ADVISOR CAREERS & MENTORSHIP</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0F2A47] tracking-tight leading-tight">
            Learn & Work as an <span className="text-[#C9A227]">Independent Agent</span>
          </h2>
          
          <p className="mt-4 text-base text-[#4A5568] leading-relaxed">
            Ready to take control of your financial destiny? Malik mentors ambitious individuals across Canada to achieve licensing, master advisory skills, and build thriving six-figure independent practices.
          </p>
        </div>

        {/* Hero Mentorship Spotlight Card */}
        <div className="bg-[#0F2A47] rounded-3xl text-white overflow-hidden shadow-xl border border-[#0B1F35] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative h-56 sm:h-80 lg:h-full min-h-[300px] lg:min-h-[380px] overflow-hidden">
              <img
                src="/images/advisor_mentorship.jpg"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src.endsWith('/images/advisor_mentorship.jpg')) {
                    target.src = '/images/advisor_mentorship_1787004381297.jpg';
                  } else if (target.src.endsWith('/images/advisor_mentorship_1787004381297.jpg')) {
                    target.src = 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80';
                  }
                }}
                alt="Malik mentoring an aspiring independent financial advisor in Canada"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A47] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0F2A47]" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 lg:right-auto bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200 text-[#0F2A47] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#0F2A47] text-[#C9A227] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                    DIRECT MENTORSHIP
                  </div>
                  <div className="text-xs font-semibold text-[#0F2A47]">
                    Malik will guide you through every milestone
                  </div>
                </div>
              </div>
            </div>

            {/* Right Copy & Value Column */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C9A227]">
                <Target className="w-4 h-4" />
                <span>Malik Can Help You Achieve Your Dream</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-serif leading-snug">
                Why Build Your Independent Advisory Practice With Our Mentorship Team?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Many aspiring advisors get stuck with captive agencies that enforce micro-management, strict product quotas, and take ownership of their hard-earned clients. Under Malik’s mentorship, you operate as a <strong className="text-white">true independent broker</strong> from day one with the guidance of a top practitioner.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>No upfront franchise or desk fees</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>100% ownership of your client book</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>Comprehensive LLQP exam prep</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>Bilingual & newcomer friendly</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  id="advisor-recruitment-apply-cta"
                  onClick={onOpenRecruitmentModal}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Apply for Advisor Mentorship</span>
                  <ArrowRight className="w-4 h-4 text-[#0F2A47]" />
                </button>

                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                  <span>Confidential • 1-on-1 Discovery Call</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Core Mentorship Pillars */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-serif text-[#0F2A47]">
              The 6 Pillars of Our Agent Development Program
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] mt-2">
              Everything you need to launch, license, and scale an independent financial services career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E2E5EA] shadow-xs hover:shadow-md hover:border-[#C9A227]/60 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div className="space-y-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2A47] text-[#C9A227] flex items-center justify-center shadow-xs group-hover:bg-[#0B1F35] transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h4 className="text-lg font-bold text-[#0F2A47] font-serif group-hover:text-[#C9A227] transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#0F2A47]">
                    <span className="text-[#C9A227] font-bold">Key Benefit:</span>
                    <span className="bg-[#F6F7FA] px-2 py-0.5 rounded text-slate-700">{item.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Who Can Join - Candidate Profiles */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E5EA] shadow-xs mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-1">
                INCLUSIVE PATHWAYS
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#0F2A47]">
                Who Excels as an Independent Advisor?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#4A5568] max-w-md">
              We welcome diverse backgrounds. What matters most is integrity, empathy, strong communication, and a desire to help families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {candidateTypes.map((cand, i) => (
              <div
                key={i}
                className="bg-[#F6F7FA] rounded-2xl p-5 border border-slate-200/80 flex flex-col justify-between hover:bg-white hover:border-[#C9A227] transition-all"
              >
                <div>
                  <div className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[#0F2A47] text-[#C9A227] px-2.5 py-0.5 rounded-full mb-3">
                    {cand.tag}
                  </div>
                  <h4 className="text-sm font-bold text-[#0F2A47] mb-2 font-serif">
                    {cand.title}
                  </h4>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {cand.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Step Road to Becoming an Advisor */}
        <div className="mb-14">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-wider text-[#C9A227] mb-1">
              THE ROADMAP
            </div>
            <h3 className="text-2xl font-bold font-serif text-[#0F2A47]">
              Your 4-Step Launch Journey
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((st, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E2E5EA] shadow-xs relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black font-serif text-[#C9A227]/40 mb-2">
                    {st.step}
                  </div>
                  <h4 className="text-base font-bold text-[#0F2A47] mb-2 font-serif">
                    {st.title}
                  </h4>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action Card */}
        <div className="bg-[#0F2A47] rounded-2xl p-8 sm:p-10 text-white text-center border-b-4 border-[#C9A227] max-w-4xl mx-auto shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif">
            Ready to Take the First Step Toward Independence?
          </h3>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have questions about the LLQP exam, commission potential, or day-to-day life as an advisor? Schedule a direct 1-on-1 mentorship call with Malik.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="advisor-recruitment-bottom-cta"
              onClick={onOpenRecruitmentModal}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C9A227] hover:bg-[#D9B84A] text-[#0F2A47] font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg hover:-translate-y-0.5"
            >
              <span>Schedule Advisor Discovery Call with Malik</span>
              <ArrowRight className="w-4 h-4 text-[#0F2A47]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
