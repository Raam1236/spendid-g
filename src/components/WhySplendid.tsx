import React from 'react';
import { ShieldCheck, Award, HeartHandshake, Sparkles, Building, Landmark } from 'lucide-react';

export const WhySplendid: React.FC = () => {
  const pillars = [
    {
      title: 'Thoughtful Development',
      desc: 'Land acquisition focused exclusively on high-growth, serene micro-markets in Bengaluru.',
      icon: Landmark
    },
    {
      title: 'Contemporary Architecture',
      desc: 'International spatial design, climate-responsive layouts, and high ceiling heights.',
      icon: Building
    },
    {
      title: 'Uncompromised Quality',
      desc: 'Multi-stage civil structural audits, branded fittings, and hydro-pneumatic water systems.',
      icon: ShieldCheck
    },
    {
      title: 'On-Time Handover',
      desc: 'Strict project execution schedules supported by modern aluminum formwork tech.',
      icon: Award
    },
    {
      title: 'Customer First Culture',
      desc: 'Dedicated relationship managers from initial enquiry to home key handover and beyond.',
      icon: HeartHandshake
    },
    {
      title: 'Responsible Growth',
      desc: 'Environmentally conscious water harvesting, solar lighting, and zero-discharge STP.',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F2ED] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1A1A]/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                THE SPLENDID PROMISE
              </span>
            </div>
            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Why Splendid
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans max-w-md font-light leading-relaxed">
            Built on transparency, engineering rigor, and a deep-seated respect for our homeowners' life savings.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 border border-[#1A1A1A]/10 hover:border-[#C5A059] transition-all duration-300 space-y-4 shadow-sm hover:shadow-md"
              >
                <div className="w-10 h-10 bg-[#E6E2D8] text-[#C5A059] flex items-center justify-center border border-[#1A1A1A]/10">
                  <Icon className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <h3 className="font-serif italic text-xl text-[#1A1A1A] font-normal" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h3>
                <p className="text-xs text-[#1A1A1A]/70 font-sans font-light leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Statistics Strip */}
        <div className="bg-[#1A1A1A] text-white p-10 md:p-14 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <span className="font-serif italic text-4xl md:text-5xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>20+</span>
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-white/70 uppercase mt-2 block font-semibold">
              YEARS IN BENGALURU
            </span>
          </div>
          <div>
            <span className="font-serif italic text-4xl md:text-5xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>7+</span>
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-white/70 uppercase mt-2 block font-semibold">
              ICONIC DEVELOPMENTS
            </span>
          </div>
          <div>
            <span className="font-serif italic text-4xl md:text-5xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>1.2M+</span>
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-white/70 uppercase mt-2 block font-semibold">
              SQ. FT. DELIVERED
            </span>
          </div>
          <div>
            <span className="font-serif italic text-4xl md:text-5xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>100%</span>
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] text-white/70 uppercase mt-2 block font-semibold">
              RERA COMPLIANCE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

