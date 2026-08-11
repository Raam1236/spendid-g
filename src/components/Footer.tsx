import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, X } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SplendidLogo } from './SplendidLogo';

interface FooterProps {
  onOpenEnquiry: (projectName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const [legalModalOpen, setLegalModalOpen] = useState<'RERA' | 'PRIVACY' | 'TERMS' | null>(null);

  return (
    <footer id="contact" className="bg-[#1A1A1A] text-white border-t border-white/10 pt-20 pb-12 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        
        {/* Top Contact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-white/10 pb-16 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <SplendidLogo variant="dark" size="lg" />
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-md">
              A sophisticated Bengaluru real estate developer crafting thoughtfully designed residential and commercial spaces across Begur, Electronics City, Sarjapur, and Yelahanka.
            </p>

            <div className="space-y-2 text-xs text-[#C5A059]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
                <span className="text-white/80">Begur Main Road & Sarjapur Corridor, Bengaluru, KA 560068</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059]" />
                <a href="tel:+918049001100" className="hover:underline text-white/80">+91 80 4900 1100</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059]" />
                <a href="mailto:enquiries@splendidgroup.in" className="hover:underline text-white/80">enquiries@splendidgroup.in</a>
              </div>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif italic text-lg text-white font-normal border-b border-white/10 pb-2" style={{ fontFamily: "'Georgia', serif" }}>
              Portfolio
            </h4>
            <ul className="space-y-2.5 text-xs text-white/70">
              {PROJECTS_DATA.map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => onOpenEnquiry(p.name)}
                    className="hover:text-[#C5A059] transition-colors text-left flex items-center gap-1 group"
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C5A059]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif italic text-lg text-white font-normal border-b border-white/10 pb-2" style={{ fontFamily: "'Georgia', serif" }}>
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-white/70">
              <a href="#about" className="hover:text-[#C5A059] transition-colors py-1">About Splendid</a>
              <a href="#projects" className="hover:text-[#C5A059] transition-colors py-1">All Projects</a>
              <a href="#philosophy" className="hover:text-[#C5A059] transition-colors py-1">Design Philosophy</a>
              <a href="#bengaluru" className="hover:text-[#C5A059] transition-colors py-1">Bengaluru Story</a>
              <a href="#media" className="hover:text-[#C5A059] transition-colors py-1">News & Insights</a>
              <a href="#site-visit" className="hover:text-[#C5A059] transition-colors py-1">Book Site Visit</a>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[10px] font-sans text-[#C5A059] uppercase tracking-widest block font-bold">
                RERA TRANSPARENCY
              </span>
              <p className="text-[11px] text-white/60 leading-relaxed">
                All projects are registered under Karnataka RERA. Detailed sanction plans, encumbrance certificates, and RERA registration documents are available upon request.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/50 pt-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span>© 2026 SPLENDID GROUP. ALL RIGHTS RESERVED. BENGALURU, KARNATAKA.</span>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button onClick={() => setLegalModalOpen('RERA')} className="hover:text-[#C5A059] transition-colors">
              RERA COMPLIANCE
            </button>
            <button onClick={() => setLegalModalOpen('PRIVACY')} className="hover:text-[#C5A059] transition-colors">
              PRIVACY POLICY
            </button>
            <button onClick={() => setLegalModalOpen('TERMS')} className="hover:text-[#C5A059] transition-colors">
              TERMS OF USE
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal Popup */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-4">
          <div className="bg-[#1A1A1A] text-white max-w-2xl w-full p-8 border border-white/10 shadow-2xl relative space-y-4">
            <button
              onClick={() => setLegalModalOpen(null)}
              className="absolute top-6 right-6 p-2 text-white/60 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <h3 className="font-serif italic text-2xl text-[#C5A059]" style={{ fontFamily: "'Georgia', serif" }}>
              {legalModalOpen === 'RERA' && 'Karnataka RERA Disclaimer'}
              {legalModalOpen === 'PRIVACY' && 'Privacy Policy'}
              {legalModalOpen === 'TERMS' && 'Terms of Use'}
            </h3>

            <p className="text-xs text-white/70 leading-relaxed font-sans font-light">
              {legalModalOpen === 'RERA' &&
                'All project specifications, renders, floor plans, and amenities shown on this website are indicative and subject to approval by local authorities. Real estate projects by Splendid Group are registered with Karnataka RERA (e.g. PRM/KA/RERA/1251/310/PR/181210/002201). Prices and availability are subject to change without prior notice.'}
              {legalModalOpen === 'PRIVACY' &&
                'Splendid Group respects your privacy. Personal information collected via enquiry and site visit forms is strictly utilized for property consultations, site visit scheduling, and official project updates. We never sell or share client information with unauthorized third-party brokers.'}
              {legalModalOpen === 'TERMS' &&
                'By accessing the digital platform of Splendid Group, you agree to use the content for personal property evaluation. Architectural renderings are artistic impressions and final construction details are governed by the formal Sale & Construction Agreement.'}
            </p>

            <div className="pt-4 text-right">
              <button
                onClick={() => setLegalModalOpen(null)}
                className="bg-[#C5A059] text-[#1A1A1A] px-6 py-2 text-xs font-bold uppercase tracking-widest border border-[#C5A059]"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

