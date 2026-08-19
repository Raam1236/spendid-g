import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowUpRight, ShieldCheck, X, Send, MessageSquare } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { SplendidLogo } from './SplendidLogo';

interface FooterProps {
  onOpenEnquiry: (projectName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenEnquiry }) => {
  const [legalModalOpen, setLegalModalOpen] = useState<'RERA' | 'PRIVACY' | 'TERMS' | null>(null);
  const [rgModalOpen, setRgModalOpen] = useState(false);
  const [rgForm, setRgForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [rgSubmitted, setRgSubmitted] = useState(false);

  const handleRgSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanName = rgForm.name.trim().slice(0, 80);
    const cleanPhone = rgForm.phone.trim().slice(0, 25);
    const cleanEmail = rgForm.email.trim().slice(0, 120);
    const cleanMessage = (rgForm.message || '').trim().slice(0, 500);

    if (!cleanName || !cleanPhone || !cleanEmail) {
      return;
    }

    const whatsappMessage = `*New Website Enquiry - RG WEBCRAFT*\n\n` +
      `*Name:* ${cleanName}\n` +
      `*Contact Number:* ${cleanPhone}\n` +
      `*Email ID:* ${cleanEmail}` +
      (cleanMessage ? `\n*Message:* ${cleanMessage}` : '');

    const whatsappUrl = `https://wa.me/916361380854?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setRgSubmitted(true);
  };

  const closeRgModal = () => {
    setRgModalOpen(false);
    setRgSubmitted(false);
    setRgForm({ name: '', phone: '', email: '', message: '' });
  };

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
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-white/60 pt-2 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>© 2026 SPLENDID GROUP. ALL RIGHTS RESERVED. BENGALURU, KARNATAKA.</span>
            </div>
            <span className="hidden sm:inline text-white/20">|</span>
            <div className="text-white/70">
              <span>Website created by </span>
              <button
                id="rg-webcraft-creator-btn"
                onClick={() => setRgModalOpen(true)}
                className="text-[#C5A059] hover:text-[#DFC17B] font-semibold uppercase tracking-wider underline underline-offset-4 transition-colors cursor-pointer focus:outline-none"
              >
                RG WEBCRAFT
              </button>
            </div>
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

      {/* RG WEBCRAFT Contact Modal */}
      {rgModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-4">
          <div className="bg-[#181818] text-white max-w-lg w-full p-6 sm:p-8 border border-[#C5A059]/40 shadow-2xl relative space-y-6 animate-fadeIn rounded-sm">
            <button
              id="close-rg-modal"
              onClick={closeRgModal}
              className="absolute top-5 right-5 p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5A059]" />
                <span className="text-[10px] tracking-[0.2em] font-mono text-[#C5A059] uppercase">Web Architecture & Engineering</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal tracking-wide" style={{ fontFamily: "'Georgia', serif" }}>
                Contact <span className="text-[#C5A059] italic">RG WEBCRAFT</span>
              </h3>
              <p className="text-xs text-white/70 font-light leading-relaxed">
                Connect with the creators of this digital platform for website design, custom software, or branding solutions.
              </p>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="bg-white/5 border border-white/10 p-3.5 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2.5 text-[#C5A059]">
                <MessageSquare className="w-4 h-4 shrink-0" />
                <span className="text-white/80 font-medium">Direct WhatsApp Support:</span>
              </div>
              <a
                href="https://wa.me/916361380854"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C5A059] hover:underline font-mono font-semibold"
              >
                +91 6361380854
              </a>
            </div>

            {rgSubmitted ? (
              <div className="bg-[#C5A059]/10 border border-[#C5A059]/30 p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 text-[#C5A059] flex items-center justify-center mx-auto">
                  <Send className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-lg text-white font-normal">WhatsApp Window Opened</h4>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Your enquiry details have been forwarded to WhatsApp (+91 6361380854). If the window did not open automatically, click the button below.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`https://wa.me/916361380854?text=${encodeURIComponent(
                      `*New Website Enquiry - RG WEBCRAFT*\n*Name:* ${rgForm.name}\n*Contact:* ${rgForm.phone}\n*Email:* ${rgForm.email}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C5A059] text-[#1A1A1A] px-6 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-[#d8b56e] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Open WhatsApp Chat
                  </a>
                  <button
                    onClick={closeRgModal}
                    className="border border-white/20 text-white px-5 py-2.5 text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRgSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="rg-name" className="block text-[11px] uppercase tracking-wider text-white/80 font-medium">
                    Your Name <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    id="rg-name"
                    type="text"
                    required
                    value={rgForm.name}
                    onChange={(e) => setRgForm({ ...rgForm, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#121212] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="rg-phone" className="block text-[11px] uppercase tracking-wider text-white/80 font-medium">
                    Contact Number <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    id="rg-phone"
                    type="tel"
                    required
                    value={rgForm.phone}
                    onChange={(e) => setRgForm({ ...rgForm, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full bg-[#121212] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="rg-email" className="block text-[11px] uppercase tracking-wider text-white/80 font-medium">
                    Email ID <span className="text-[#C5A059]">*</span>
                  </label>
                  <input
                    id="rg-email"
                    type="email"
                    required
                    value={rgForm.email}
                    onChange={(e) => setRgForm({ ...rgForm, email: e.target.value })}
                    placeholder="e.g. rahul@example.com"
                    className="w-full bg-[#121212] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="rg-message" className="block text-[11px] uppercase tracking-wider text-white/80 font-medium">
                    Message / Requirement <span className="text-white/40 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="rg-message"
                    rows={3}
                    value={rgForm.message}
                    onChange={(e) => setRgForm({ ...rgForm, message: e.target.value })}
                    placeholder="Tell us about your website project or enquiry..."
                    className="w-full bg-[#121212] border border-white/15 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#C5A059] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    id="rg-submit-btn"
                    type="submit"
                    className="w-full bg-[#C5A059] hover:bg-[#d8b56e] text-[#1A1A1A] font-bold text-xs uppercase tracking-widest py-3.5 px-6 flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#C5A059]/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Details & Send via WhatsApp</span>
                  </button>
                  <p className="text-[10px] text-center text-white/40 mt-2 font-mono">
                    Submitting sends your formatted details directly to +916361380854 on WhatsApp
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

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


