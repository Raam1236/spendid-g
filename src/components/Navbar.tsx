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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F5F2ED]/95 backdrop-blur-xl border-b border-[#C5A059]/25 py-3.5 text-[#1A1A1A] shadow-lg'
            : 'bg-[#0B0C10]/85 backdrop-blur-md border-b border-[#C5A059]/20 py-4 text-white shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex items-center hover:opacity-95 transition-opacity">
            <SplendidLogo variant={isScrolled ? "light" : "dark"} size="md" />
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className={`hidden lg:flex items-center gap-10 text-[11px] font-semibold tracking-widest uppercase transition-colors duration-300 ${
            isScrolled ? 'text-[#1A1A1A]/80' : 'text-white/80'
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`transition-all relative py-1 group ${
                  isScrolled ? 'hover:text-[#1A1A1A]' : 'hover:text-[#FFB300]'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#FFB300] to-[#C5A059] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onOpenConcierge}
              className={`flex items-center gap-2 text-[11px] font-bold tracking-widest px-4 py-2.5 border rounded-full transition-all duration-300 ${
                isScrolled
                  ? 'text-[#C5A059] border-[#C5A059]/40 hover:border-[#1A1A1A] hover:text-[#1A1A1A] bg-white/50'
                  : 'text-[#FFB300] border-[#FFB300]/40 hover:border-white hover:text-white bg-black/40'
              }`}
              title="Splendid AI Concierge"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFB300]" />
              <span className="hidden xl:inline uppercase">AI Concierge</span>
            </button>

            <button
              onClick={onOpenEnquiry}
              className="btn-primary-rgb"
            >
              <span className="btn-primary-rgb-inner">
                <span>Enquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#1A1A1A] hover:text-[#C5A059]' : 'text-white hover:text-[#FFB300]'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#F5F2ED] text-[#1A1A1A] flex flex-col justify-between p-6 sm:p-8 animate-fade-in lg:hidden overflow-y-auto min-h-screen">
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

