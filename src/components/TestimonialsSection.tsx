import React, { useState } from 'react';
import { TESTIMONIALS_DATA } from '../data/testimonials';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : TESTIMONIALS_DATA.length - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev < TESTIMONIALS_DATA.length - 1 ? prev + 1 : 0));
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-12 md:py-16 bg-[#1A1A1A] text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-12">
        
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-[#C5A059]" />
            <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
              RESIDENT PERSPECTIVES
            </span>
            <div className="w-12 h-[1px] bg-[#C5A059]" />
          </div>

          <h2
            className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-white font-light"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Voices of Splendid
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="bg-[#242424] border border-white/10 p-8 sm:p-12 md:p-16 relative space-y-8 shadow-2xl">
          <Quote className="w-12 h-12 text-[#C5A059]/30 absolute top-8 left-8" />

          <p
            className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed relative z-10 pt-4"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            "{current.quote}"
          </p>

          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="font-serif italic text-xl text-white font-normal" style={{ fontFamily: "'Georgia', serif" }}>{current.name}</h4>
              <p className="text-xs font-sans text-[#C5A059] tracking-widest uppercase mt-0.5 font-bold">
                {current.project} • {current.location}
              </p>
              <p className="text-[11px] text-white/60 font-sans">{current.role}</p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-white/10 hover:border-[#C5A059] text-white flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-[#C5A059]" />
              </button>
              <span className="text-xs font-mono text-white/60">
                0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-white/10 hover:border-[#C5A059] text-white flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-[#C5A059]" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

