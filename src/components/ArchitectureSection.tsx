import React from 'react';
import { SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE } from '../data/splendidLakeBreezImage';
import { getSafeImageUrl, handleImageError } from '../utils/imageUtils';

export const ArchitectureSection: React.FC = () => {
  const visualItems = [
    {
      title: 'Structural Facades',
      sub: 'Seismic Zone III Compliant Framing',
      img: SPLENDID_LAKE_BREEZ_ELEVATION_IMAGE,
      span: 'md:col-span-8'
    },
    {
      title: 'Cantilevered Balconies',
      sub: 'Deep Overhangs for Sun Shade',
      img: '/splendid-eternity.jpg',
      span: 'md:col-span-4'
    },
    {
      title: 'Natural Light Integration',
      sub: 'Floor-to-Ceiling UPVC Windows',
      img: '/splendid-lake-dews.jpg',
      span: 'md:col-span-4'
    },
    {
      title: 'Waterfront Living',
      sub: 'Begur Lake Decking & Reflections',
      img: '/splendid-skyline.jpg',
      span: 'md:col-span-8'
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F5F2ED] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1A1A]/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                MATERIALITY & DETAIL
              </span>
            </div>
            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-light leading-none"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Form. Function. <br />
              <span className="not-italic text-[#C5A059] font-serif">And the space between.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans max-w-md font-light leading-relaxed">
            Examining the quiet details: teakwood main doorways, acoustic glass barriers, anti-skid wooden terraces, and landscaped garden courtyards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {visualItems.map((item, i) => (
            <div key={i} className={`${item.span} group relative overflow-hidden bg-[#1A1A1A] aspect-[16/10] border border-[#1A1A1A]/10`}>
              <img
                src={getSafeImageUrl(item.img)}
                alt={item.title}
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-[10px] font-sans tracking-[0.2em] text-[#C5A059] uppercase font-bold">{item.sub}</p>
                <h3 className="font-serif italic text-2xl text-white font-normal" style={{ fontFamily: "'Georgia', serif" }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

