import React from 'react';
import { ArrowRight, Compass, Flame, Sparkles } from 'lucide-react';
import { SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE } from '../data/splendidLakeBreezImage';

interface HeroProps {
  onExploreProjects: () => void;
  onDiscoverBrand: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onDiscoverBrand }) => {
  return (
    <section className="relative w-full min-h-[90vh] pt-32 pb-16 flex flex-col justify-between bg-[#0B0C10] text-white overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          <source src="https://v1.pinimg.com/videos/mc/720p/da/68/d9/da68d926f31eb7a2e977d2e69c23719d.mp4" type="video/mp4" />
        </video>
        {/* Soft dark luxury overlay to ensure high contrast and clear text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0C10]/90 via-[#0B0C10]/75 to-[#0B0C10]/95" />
      </div>

      {/* Background Watermark Typography */}
      <div
        className="absolute top-28 right-[-50px] text-[140px] sm:text-[180px] lg:text-[220px] font-serif opacity-[0.02] rotate-90 select-none pointer-events-none text-white z-0 leading-none"
        style={{ fontFamily: "'Cormorant Garamond', 'Georgia', serif" }}
      >
        ARCHITECTURE
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10 flex-1 my-auto">
        
        {/* Left Column: Artistic Display Heading & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center relative z-10 space-y-6">
          {/* Eyebrow label with Glowing Gold/Flame Rule */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-[1.5px] bg-gradient-to-r from-[#FFD700] to-[#FF4500]" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-bold fire-text-glow flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#FF6D00] inline-block animate-pulse" />
              Crafted for Bengaluru
            </span>
          </div>

          {/* Main Title with Fire Text Glow */}
          <h1
            className="text-5xl sm:text-7xl md:text-8xl lg:text-[95px] xl:text-[105px] leading-[0.92] font-serif font-light text-white tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
          >
            A more <br />
            <span className="fire-text-glow italic font-medium pr-2">distinct way</span> <br />
            to live.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg max-w-md leading-relaxed text-[#CBD5E1] font-light pt-2">
            Thoughtfully conceived spaces for contemporary Bengaluru. Where architecture meets everyday life in Begur, Sarjapur & Electronics City.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-6">
            <button
              onClick={onExploreProjects}
              className="btn-primary-rgb"
            >
              <span className="btn-primary-rgb-inner">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </button>

            <button
              onClick={onDiscoverBrand}
              className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#CBD5E1] hover:text-[#FFB300] transition-colors py-2 group"
            >
              <span>Discover Splendid</span>
              <Compass className="w-4 h-4 text-[#FFB300] group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right Column: Featured Project Framing Card */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="w-full max-w-md lg:max-w-none aspect-[4/5] relative z-10 bg-[#12131A] border border-[#FFB300]/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden group rounded-md">
            <img
              src={SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE}
              alt="Splendid Lake Breez Begur"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Cinematic Gradient Mask */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C10] via-black/30 to-transparent z-10" />

            {/* Featured Overlay Info */}
            <div className="absolute bottom-8 left-8 right-8 z-20 text-white space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest fire-text-glow font-bold">
                <Sparkles className="w-3 h-3 text-[#FFB300]" />
                FEATURED DEVELOPMENT
              </div>
              <div
                className="text-2xl sm:text-3xl font-serif italic text-white"
                style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', serif" }}
              >
                Splendid Lake Breez
              </div>
              <div className="text-xs uppercase tracking-widest font-sans text-[#CBD5E1]/80">
                Lake View Residences • Begur, Bengaluru
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Hero Footer Strip ("Our Impact") */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 relative z-10">
        <div className="flex flex-col gap-3">
          <div className="text-[10px] uppercase tracking-[0.4em] font-bold fire-text-glow">
            Our Impact
          </div>
          <div className="flex flex-wrap gap-8 sm:gap-12">
            <div>
              <div className="text-3xl font-serif italic fire-text-glow" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                20+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-semibold mt-1">
                Years Legacy
              </div>
            </div>
            <div>
              <div className="text-3xl font-serif italic fire-text-glow" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                1,200+
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-semibold mt-1">
                Luxury Homes
              </div>
            </div>
            <div>
              <div className="text-3xl font-serif italic fire-text-glow" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                07
              </div>
              <div className="text-[10px] uppercase tracking-widest text-[#94A3B8] font-semibold mt-1">
                Landmark Projects
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 max-w-xs">
          <div className="text-[10px] uppercase tracking-widest font-bold text-white flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D00] animate-ping" />
            Rooted in Bengaluru
          </div>
          <p className="text-[11px] leading-relaxed text-[#94A3B8] font-light text-left md:text-right">
            Building contemporary urban spaces integrated into Bengaluru's evolving natural and tech ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
};


