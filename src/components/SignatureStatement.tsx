import React from 'react';

export const SignatureStatement: React.FC = () => {
  return (
    <section className="py-28 md:py-36 bg-[#1A1A1A] text-white relative overflow-hidden border-y border-[#1A1A1A]/20">
      {/* Background Subtle Line Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center relative z-10 space-y-8">
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-[1px] bg-[#C5A059]" />
          <span className="text-xs font-sans tracking-[0.4em] text-[#C5A059] uppercase font-bold block">
            ARCHITECTURAL PHILOSOPHY
          </span>
          <div className="w-10 h-[1px] bg-[#C5A059]" />
        </div>

        <h2
          className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.02] text-white font-light max-w-5xl mx-auto"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Where <span className="not-italic text-[#C5A059] font-serif">architecture</span> <br />
          meets everyday life.
        </h2>

        <div className="w-16 h-[1px] bg-[#C5A059] mx-auto opacity-60 my-6" />

        <p className="text-sm sm:text-base text-white/70 font-sans max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
          We believe homes should be quiet sanctuaries of light and airflow—crafted not to impress from the highway, but to enrich every morning, afternoon, and evening lived inside them.
        </p>
      </div>
    </section>
  );
};

