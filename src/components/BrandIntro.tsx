import React from 'react';
import { ShieldCheck, MapPin } from 'lucide-react';
import { SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE } from '../data/splendidLakeBreezImage';
import { getSafeImageUrl, handleImageError } from '../utils/imageUtils';

export const BrandIntro: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-20 bg-[#F5F2ED] text-[#1A1A1A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - Editorial Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-[#C5A059]" />
                <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                  SPLENDID GROUP • BENGALURU
                </span>
              </div>
              <h2
                className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#1A1A1A] leading-[1.1] font-light"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Building more than <br />
                <span className="text-[#C5A059] not-italic font-serif">places to live.</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#1A1A1A]/80 font-sans leading-relaxed font-light">
              Splendid Group is a premier Bengaluru-focused real estate developer founded on a singular conviction: that true luxury lies in quiet architectural permanence, intelligent spatial geometry, and honest material craft across Begur, Sarjapur, Electronics City, and Yelahanka.
            </p>

            {/* Key Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1A1A1A]/10">
              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#E6E2D8] text-[#C5A059] rounded-none border border-[#1A1A1A]/10 shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A1A1A] font-semibold">100% RERA Certified</h4>
                  <p className="text-xs text-[#1A1A1A]/60 mt-0.5 font-sans">Transparent titles, verified RERA numbers, and punctual delivery track record.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 bg-[#E6E2D8] text-[#C5A059] rounded-none border border-[#1A1A1A]/10 shrink-0">
                  <MapPin className="w-4 h-4 text-[#1A1A1A]" />
                </div>
                <div>
                  <h4 className="font-serif text-base text-[#1A1A1A] font-semibold">Prime Growth Hubs</h4>
                  <p className="text-xs text-[#1A1A1A]/60 mt-0.5 font-sans">Strategic land banks along Metro corridors, tech hubs, and serene lakes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Architectural Visual & Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 bg-white shadow-2xl overflow-hidden rounded-sm">
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5] relative group">
                <img
                  src={getSafeImageUrl(SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE)}
                  alt="Splendid Lake Breez View Begur"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <p className="text-[10px] font-sans tracking-[0.2em] text-[#C5A059] uppercase font-bold">BEGUR, SOUTH BENGALURU</p>
                  <p className="font-serif italic text-lg" style={{ fontFamily: "'Georgia', serif" }}>Splendid Lake Breez View</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Integrated Statistics Bar */}
        <div className="bg-[#1A1A1A] text-white p-6 sm:p-8 border border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div>
            <span className="font-serif italic text-3xl sm:text-4xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>20+</span>
            <span className="text-[10px] font-sans tracking-[0.2em] text-white/70 uppercase mt-1 block font-semibold">
              YEARS IN BENGALURU
            </span>
          </div>
          <div>
            <span className="font-serif italic text-3xl sm:text-4xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>7+</span>
            <span className="text-[10px] font-sans tracking-[0.2em] text-white/70 uppercase mt-1 block font-semibold">
              ICONIC DEVELOPMENTS
            </span>
          </div>
          <div>
            <span className="font-serif italic text-3xl sm:text-4xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>1.2M+</span>
            <span className="text-[10px] font-sans tracking-[0.2em] text-white/70 uppercase mt-1 block font-semibold">
              SQ. FT. DELIVERED
            </span>
          </div>
          <div>
            <span className="font-serif italic text-3xl sm:text-4xl font-light text-[#C5A059] block" style={{ fontFamily: "'Georgia', serif" }}>100%</span>
            <span className="text-[10px] font-sans tracking-[0.2em] text-white/70 uppercase mt-1 block font-semibold">
              RERA COMPLIANCE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

