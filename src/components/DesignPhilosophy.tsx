import React from 'react';
import { ThreeDCard } from './ThreeDScroll';

export const DesignPhilosophy: React.FC = () => {
  const principles = [
    {
      num: '01',
      title: 'Thoughtful Design',
      desc: 'We prioritize functional geometry over superficial ornamentation. Every floor plan maximizes usable square footage, eliminates dead corridors, and ensures natural sunlight reaches every room.'
    },
    {
      num: '02',
      title: 'Quality & Craft',
      desc: 'From high-strength RCC core structures to anti-skid porcelain tiles and Kohler fittings, we select materials for durability, low maintenance, and tactile elegance over decades.'
    },
    {
      num: '03',
      title: 'Human Community',
      desc: 'Architecture should foster connection. Our clubhouses, infinity pools, co-working pods, and zen gardens are designed as welcoming gathering spaces for families and neighbors.'
    },
    {
      num: '04',
      title: 'Long-Term Value',
      desc: 'By choosing prime growth corridors near upcoming Metro lines and major tech parks, Splendid properties consistently deliver strong capital appreciation and premium rental yields.'
    }
  ];

  return (
    <section id="philosophy" className="py-12 md:py-20 bg-[#F5F2ED] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
              CORE PRINCIPLES
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </div>

          <h2
            className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-light"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Design with intention.
          </h2>
          <p className="text-sm sm:text-base text-[#1A1A1A]/70 font-sans font-light leading-relaxed">
            Four guiding tenets that govern every blueprint, stone selection, and construction site managed by Splendid Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((p) => (
            <ThreeDCard key={p.num} depth={12}>
              <div
                className="h-full bg-white p-8 border border-[#1A1A1A]/10 hover:border-[#C5A059] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span
                    className="font-serif italic text-3xl font-normal text-[#C5A059] block border-b border-[#1A1A1A]/10 pb-3"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {p.num}
                  </span>
                  <h3
                    className="font-serif italic text-xl text-[#1A1A1A] font-normal"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 font-sans font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            </ThreeDCard>
          ))}
        </div>

      </div>
    </section>
  );
};

