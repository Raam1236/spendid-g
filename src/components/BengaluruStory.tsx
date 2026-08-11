import React from 'react';
import { MapPin, Sun, Wind, Trees } from 'lucide-react';

export const BengaluruStory: React.FC = () => {
  return (
    <section id="bengaluru" className="py-12 md:py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-10">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                URBAN CONTEXT
              </span>
            </div>
            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.05]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Rooted in <br />
              <span className="not-italic text-[#C5A059] font-serif">Bengaluru.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed">
            Bengaluru is more than an IT metropolis—it is a garden city of lakes, temperate breezes, and dynamic urban growth. Splendid Group builds with a deep understanding of the city's microclimates and tech-driven lifestyle rhythms.
          </div>
        </div>

        {/* 3 Core Micro-Corridor Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#242424] border border-white/10 p-8 space-y-4 hover:border-[#C5A059] transition-colors">
            <div className="flex items-center justify-between text-[#C5A059]">
              <span className="text-xs font-mono font-bold">01 • SOUTH BENGALURU</span>
              <MapPin className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif italic text-2xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Begur & Lake Fronts
            </h3>
            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              Home to Splendid Lake Breez. Surrounded by historic lakes and lush greenery, providing immediate access to Silk Board and Electronics City while preserving tranquil waterfront living.
            </p>
          </div>

          <div className="bg-[#242424] border border-white/10 p-8 space-y-4 hover:border-[#C5A059] transition-colors">
            <div className="flex items-center justify-between text-[#C5A059]">
              <span className="text-xs font-mono font-bold">02 • TECH CORRIDORS</span>
              <MapPin className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif italic text-2xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Sarjapur & E-City
            </h3>
            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              Powerhouse tech hubs housing Splendid Elite and Splendid Times Square. Designed for high-efficiency daily commutes, walk-to-work culture, and vibrant social hubs.
            </p>
          </div>

          <div className="bg-[#242424] border border-white/10 p-8 space-y-4 hover:border-[#C5A059] transition-colors">
            <div className="flex items-center justify-between text-[#C5A059]">
              <span className="text-xs font-mono font-bold">03 • NORTH BENGALURU</span>
              <MapPin className="w-4 h-4 text-[#C5A059]" />
            </div>
            <h3 className="font-serif italic text-2xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Yelahanka Skyway
            </h3>
            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              The high-growth aviation and airport corridor featuring Splendid Skywalk. Combining broad avenues, international schools, and panoramic high-rise horizons.
            </p>
          </div>

        </div>

        {/* Climate Responsive Features Strip */}
        <div className="bg-[#242424] border border-white/10 p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-2">
            <div className="inline-flex p-3 bg-[#1A1A1A] text-[#C5A059] mb-2 border border-white/10">
              <Wind className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h4 className="font-serif italic text-xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Natural Cross-Ventilation
            </h4>
            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              Building orientation angled to capture prevailing lake and garden winds, keeping homes naturally cool.
            </p>
          </div>

          <div className="space-y-2">
            <div className="inline-flex p-3 bg-[#1A1A1A] text-[#C5A059] mb-2 border border-white/10">
              <Sun className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h4 className="font-serif italic text-xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Controlled Daylighting
            </h4>
            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              Extended architectural overhangs and Low-E glass facades reduce solar heat gain while illuminating living rooms naturally.
            </p>
          </div>

          <div className="space-y-2">
            <div className="inline-flex p-3 bg-[#1A1A1A] text-[#C5A059] mb-2 border border-white/10">
              <Trees className="w-5 h-5 text-[#C5A059]" />
            </div>
            <h4 className="font-serif italic text-xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
              Native Bengaluru Flora
            </h4>
            <p className="text-xs text-white/70 font-sans leading-relaxed font-light">
              Landscaping featuring rain trees, lotus ponds, and jacaranda walks that thrive in local soil with low water demands.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

