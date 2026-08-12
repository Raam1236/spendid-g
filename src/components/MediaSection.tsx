import React, { useState } from 'react';
import { ARTICLES_DATA } from '../data/articles';
import { Article } from '../types';
import { ArrowUpRight, Calendar, Clock, X, Maximize2 } from 'lucide-react';
import { getSafeImageUrl, handleImageError } from '../utils/imageUtils';
import { ThreeDCard } from './ThreeDScroll';

export const MediaSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <section id="media" className="py-12 md:py-16 bg-[#F5F2ED] text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1A1A1A]/10 pb-8">
          <div>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                NEWS & INSIGHTS
              </span>
            </div>
            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#1A1A1A] font-light"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              In the news
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans max-w-md font-light leading-relaxed">
            Press announcements, structural progress updates, and architectural commentary from Splendid Group.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES_DATA.map((art) => (
            <ThreeDCard key={art.id} depth={12}>
              <article
                onClick={() => setSelectedArticle(art)}
                className="h-full group bg-white border border-[#1A1A1A]/10 hover:border-[#C5A059] transition-all duration-300 overflow-hidden shadow-sm hover:shadow-xl flex flex-col justify-between cursor-pointer rounded-xs"
              >
                <div className="space-y-4">
                  <div className="aspect-[16/10] overflow-hidden bg-black relative">
                    <img
                      src={getSafeImageUrl(art.image)}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      onError={handleImageError}
                    />
                    <span className="absolute top-4 left-4 bg-[#1A1A1A] text-[#C5A059] text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 border border-white/10">
                      {art.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-[11px] text-[#1A1A1A]/60 font-sans">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#C5A059]" /> {art.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#C5A059]" /> {art.readTime}</span>
                    </div>

                    <h3
                      className="font-serif italic text-xl text-[#1A1A1A] group-hover:text-[#C5A059] transition-colors leading-snug font-normal"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {art.title}
                    </h3>

                    <p className="text-xs text-[#1A1A1A]/70 font-sans font-light line-clamp-3 leading-relaxed">
                      {art.snippet}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-[#1A1A1A]/10 mt-4 flex items-center justify-between text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#1A1A1A] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </article>
            </ThreeDCard>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-center p-4">
          <div className="bg-[#F5F2ED] text-[#1A1A1A] max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-12 border border-[#1A1A1A]/20 shadow-2xl relative space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs font-sans font-bold tracking-widest uppercase text-[#C5A059] block">
              {selectedArticle.category} • {selectedArticle.date}
            </span>

            <h2 className="font-serif italic text-3xl sm:text-4xl text-[#1A1A1A]" style={{ fontFamily: "'Georgia', serif" }}>{selectedArticle.title}</h2>

            <div 
              onClick={() => setFullscreenImage(selectedArticle.image)}
              className="aspect-[16/9] overflow-hidden border border-[#1A1A1A]/10 cursor-pointer group relative"
              title="Click to view full image"
            >
              <img src={getSafeImageUrl(selectedArticle.image)} alt={selectedArticle.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" onError={handleImageError} />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold uppercase tracking-widest">
                <Maximize2 className="w-5 h-5 text-[#C5A059]" />
                <span>VIEW FULL IMAGE</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#1A1A1A]/80 font-sans font-light leading-relaxed">
              {selectedArticle.content}
            </p>

            <div className="pt-6 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs text-[#1A1A1A]/60">
              <span>Published by {selectedArticle.author}</span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#1A1A1A] text-white px-6 py-2.5 uppercase font-bold tracking-widest text-xs border border-[#C5A059]"
              >
                CLOSE INSIGHT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Resolution Image Lightbox Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setFullscreenImage(null)}
        >
          {/* Top Right Close Button (X) */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setFullscreenImage(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] p-3 rounded-full bg-black/70 hover:bg-black/95 text-white hover:text-[#C5A059] border border-white/20 transition-all shadow-2xl cursor-pointer"
            aria-label="Close full image view"
          >
            <X className="w-8 h-8" />
          </button>

          <img
            src={getSafeImageUrl(fullscreenImage)}
            alt="Full resolution view"
            className="max-h-[92vh] max-w-[92vw] object-contain shadow-2xl rounded-sm"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
            onError={handleImageError}
          />
        </div>
      )}
    </section>
  );
};

