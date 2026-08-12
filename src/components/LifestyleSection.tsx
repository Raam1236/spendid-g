import React from 'react';
import { getSafeImageUrl, handleImageError } from '../utils/imageUtils';

export const LifestyleSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
              THE SPLENDID EXPERIENCE
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </div>

          <h2
            className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-light"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Life, beautifully <br />
            <span className="not-italic text-[#C5A059] font-serif">considered.</span>
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-sans font-light leading-relaxed">
            From morning laps in temperature-controlled infinity pools to quiet evening conversations in sky gardens, every amenity is an invitation to slow down.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-[#242424]">
              <img
                src={getSafeImageUrl("/SPLENDID LAKE BREEZ-1.jpg")}
                alt="Waterfront & Pools"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
            </div>
            <h3 className="font-serif italic text-2xl text-white" style={{ fontFamily: "'Georgia', serif" }}>Waterfront & Pools</h3>
            <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
              Infinity pools overlooking lake view horizons with sunken sun-loungers and Jacuzzi jets.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-[#242424]">
              <img
                src={getSafeImageUrl("/splendid-skyline.jpg")}
                alt="Sky Lounges"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
            </div>
            <h3 className="font-serif italic text-2xl text-white" style={{ fontFamily: "'Georgia', serif" }}>Sky Lounges & Decks</h3>
            <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
              Elevated observation walkways and rooftop social hubs for starlit gatherings and weekend barbecues.
            </p>
          </div>

          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden border border-white/10 bg-[#242424]">
              <img
                src={getSafeImageUrl("/SPLENDID ELITE1.jpg")}
                alt="Fitness & Wellness"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
            </div>
            <h3 className="font-serif italic text-2xl text-white" style={{ fontFamily: "'Georgia', serif" }}>Wellness & Active Living</h3>
            <p className="text-xs text-white/70 font-sans font-light leading-relaxed">
              Fully equipped glass gymnasiums, indoor squash courts, badminton halls, and reflexology trails.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

