import React from 'react';
import { Leaf, Droplets, Sun, Recycle } from 'lucide-react';
import { getSafeImageUrl, handleImageError } from '../utils/imageUtils';

export const SustainabilitySection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#F5F2ED] text-[#1A1A1A] border-t border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                ENVIRONMENTAL RESPONSIBILITY
              </span>
            </div>

            <h2
              className="font-serif italic text-4xl sm:text-5xl text-[#1A1A1A] font-light leading-tight"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Built with tomorrow <br />
              <span className="not-italic text-[#C5A059] font-serif">in mind.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#1A1A1A]/70 font-sans font-light leading-relaxed">
              Real estate development must respect the ecology of Bengaluru. Across every Splendid project, sustainable engineering is integrated from ground excavation to solar roof panels.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Droplets className="w-5 h-5 text-[#1A1A1A]" />
                  <h4 className="font-serif italic text-lg font-normal text-[#1A1A1A]" style={{ fontFamily: "'Georgia', serif" }}>Rainwater Harvesting</h4>
                </div>
                <p className="text-xs text-[#1A1A1A]/70 font-sans font-light">100% percolation recharge wells restoring local water table levels.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Sun className="w-5 h-5 text-[#1A1A1A]" />
                  <h4 className="font-serif italic text-lg font-normal text-[#1A1A1A]" style={{ fontFamily: "'Georgia', serif" }}>Solar EV Infrastructure</h4>
                </div>
                <p className="text-xs text-[#1A1A1A]/70 font-sans font-light">Solar-assisted common lighting and basement EV charging docks.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Leaf className="w-5 h-5 text-[#1A1A1A]" />
                  <h4 className="font-serif italic text-lg font-normal text-[#1A1A1A]" style={{ fontFamily: "'Georgia', serif" }}>AAC Thermal Blocks</h4>
                </div>
                <p className="text-xs text-[#1A1A1A]/70 font-sans font-light">Eco-friendly aerated concrete blocks providing high heat insulation.</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#C5A059]">
                  <Recycle className="w-5 h-5 text-[#1A1A1A]" />
                  <h4 className="font-serif italic text-lg font-normal text-[#1A1A1A]" style={{ fontFamily: "'Georgia', serif" }}>Organic Waste Converters</h4>
                </div>
                <p className="text-xs text-[#1A1A1A]/70 font-sans font-light">On-site STP water recycling for garden irrigation and organic composting.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="border border-[#1A1A1A]/10 p-4 bg-white shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={getSafeImageUrl("/images/projects/eco-garden.jpg")}
                  alt="Green eco architecture Splendid Group"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

