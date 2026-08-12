import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { SplendidLogo } from './SplendidLogo';

interface NavbarProps {
  onOpenEnquiry: () => void;
  onOpenConcierge: () => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry, onOpenConcierge }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'PHILOSOPHY', href: '#philosophy' },
    { label: 'BENGALURU', href: '#bengaluru' },
    { label: 'MEDIA', href: '#media' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b ${
          isScrolled
            ? 'bg-[#F8F5EE] backdrop-blur-xl border-[#C5A059]/30 py-3 text-[#1C1917] shadow-[0_8px_32px_rgba(28,25,23,0.08)]'
            : 'bg-[#FAF6EE]/95 backdrop-blur-lg border-[#C5A059]/20 py-4 text-[#1C1917] shadow-[0_4px_20px_rgba(28,25,23,0.04)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo with polished luxury frame */}
          <a
            href="#"
            className="group/brand flex items-center px-2.5 py-1.5 -ml-2.5 rounded-sm transition-all duration-300 hover:bg-white/90 hover:shadow-[0_4px_20px_rgba(197,160,89,0.15)] border border-transparent hover:border-[#C5A059]/30"
          >
            <SplendidLogo variant="light" size="md" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8.5 text-[11px] font-semibold tracking-[0.22em] text-[#2D2926] uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#863B6F] transition-all duration-300 relative py-1.5 group flex items-center gap-1 opacity-90 hover:opacity-100"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#863B6F] via-[#C5A059] to-[#863B6F] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3.5">
            {/* AI Concierge Button */}
            <button
              onClick={onOpenConcierge}
              className="group flex items-center gap-2 text-[11px] font-bold tracking-[0.16em] text-[#863B6F] hover:text-[#C5A059] px-4 py-2.5 border border-[#863B6F]/25 hover:border-[#C5A059] transition-all duration-300 bg-white/80 hover:bg-white hover:shadow-[0_4px_18px_rgba(134,59,111,0.12)] rounded-xs"
              title="Splendid AI Concierge"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
              <span className="hidden xl:inline uppercase">AI Concierge</span>
            </button>

            {/* Enquire CTA - Luxury Gold & Dark Obsidian Button */}
            <button
              onClick={onOpenEnquiry}
              className="group relative inline-flex items-center justify-center p-[1px] rounded-xs overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_16px_rgba(197,160,89,0.2)] hover:shadow-[0_6px_24px_rgba(197,160,89,0.3)]"
            >
              {/* Animated Luxury Metallic Border */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#C5A059] via-[#863B6F] to-[#D4AF37] opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-5 py-2.5 bg-[#1C1917] group-hover:bg-[#121110] text-white font-sans font-bold text-[11px] tracking-[0.18em] uppercase rounded-xs transition-colors duration-300">
                <span className="text-[#FAF8F5] group-hover:text-[#E5C178] transition-colors">Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1C1917] hover:text-[#C5A059] transition-colors rounded-xs border border-transparent hover:border-[#C5A059]/30"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF6EE] text-[#1C1917] flex flex-col justify-between p-6 sm:p-8 animate-fade-in lg:hidden overflow-y-auto min-h-screen">
          <div className="flex items-center justify-between pb-6 border-b border-[#1A1A1A]/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 border border-[#1A1A1A] flex items-center justify-center">
                <span className="text-[#C5A059] font-serif font-bold text-sm">S</span>
              </div>
              <span className="font-sans text-base sm:text-lg tracking-[0.2em] font-bold">SPLENDID GROUP</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 text-[#1A1A1A]/70 hover:text-[#1A1A1A] active:scale-95 transition-transform"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-5 my-auto py-8 text-left">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif italic text-2xl sm:text-3xl tracking-wide text-[#1A1A1A] hover:text-[#C5A059] transition-colors py-1.5 block"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-[#1A1A1A]/10 shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConcierge();
              }}
              className="w-full flex items-center justify-center gap-2 border border-[#C5A059] text-[#C5A059] py-3.5 text-xs tracking-widest font-bold uppercase active:bg-[#C5A059]/10"
            >
              <Sparkles className="w-4 h-4" />
              ASK AI CONCIERGE
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full bg-[#1A1A1A] text-white py-3.5 text-xs tracking-widest font-bold uppercase hover:bg-[#C5A059] transition-colors active:bg-[#C5A059]"
            >
              ENQUIRE NOW
            </button>
          </div>
        </div>
      )}
    </>
  );
};

