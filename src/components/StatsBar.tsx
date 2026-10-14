import React from 'react';
import { Users, Award, Building2, Star } from 'lucide-react';
import { STATS_DATA } from '../data/content';

export const StatsBar: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-7 h-7 text-[#C9A227]" />;
      case 'award':
        return <Award className="w-7 h-7 text-[#C9A227]" />;
      case 'building-2':
        return <Building2 className="w-7 h-7 text-[#C9A227]" />;
      case 'star':
        return <Star className="w-7 h-7 text-[#C9A227] fill-[#C9A227]" />;
      default:
        return <Award className="w-7 h-7 text-[#C9A227]" />;
    }
  };

  return (
    <section id="stats-trust-bar" className="bg-[#0F2A47] text-white py-14 md:py-16 border-y border-[#0B1F35] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#C9A227_1px,transparent_1px)] [background-size:24px_24px] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 text-center divide-y-2 md:divide-y-0 md:divide-x divide-white/10">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-block-${idx}`}
              className="flex flex-col items-center justify-center p-6 md:p-4"
            >
              <div className="mb-3 p-3 rounded-xl bg-white/5 border border-white/10 shadow-xs">
                {getIcon(stat.icon)}
              </div>
              <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold font-serif text-white tracking-tight leading-none mb-2">
                {stat.number}
              </div>
              <div className="text-xs uppercase tracking-wider text-slate-300 font-semibold max-w-[180px] mx-auto">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
