import React from 'react';
import { Phone, MessageSquare, Sparkles, Send } from 'lucide-react';

interface FloatingCTABarProps {
  onOpenEnquiry: () => void;
  onOpenConcierge: () => void;
}

export const FloatingCTABar: React.FC<FloatingCTABarProps> = ({
  onOpenEnquiry,
  onOpenConcierge
}) => {
  const whatsappUrl = `https://wa.me/919900041880?text=${encodeURIComponent(
    'Hello Splendid Group, I am interested in exploring your luxury real estate projects in Bengaluru.'
  )}`;

  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="hidden lg:flex fixed bottom-8 right-8 z-40 flex-col items-end gap-3">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-[#25D366] text-white p-3.5 shadow-2xl hover:scale-105 transition-all duration-300"
          title="Chat on WhatsApp"
        >
          <span className="hidden group-hover:inline text-xs font-bold tracking-wider uppercase font-sans pr-1">
            WHATSAPP
          </span>
          <MessageSquare className="w-5 h-5 fill-white" />
        </a>

        {/* Call Sales Desk */}
        <a
          href="tel:+918049001100"
          className="group flex items-center gap-3 bg-[#1A1A1A] border border-white/10 hover:border-[#C5A059] text-[#C5A059] p-3.5 shadow-2xl transition-all duration-300"
          title="Call Sales Desk"
        >
          <span className="hidden group-hover:inline text-xs font-bold tracking-wider uppercase font-sans text-white pr-1">
            +91 80 4900 1100
          </span>
          <Phone className="w-5 h-5 text-[#C5A059]" />
        </a>

        {/* AI Concierge Trigger */}
        <button
          onClick={onOpenConcierge}
          className="group flex items-center gap-3 bg-[#C5A059] text-[#1A1A1A] px-5 py-3 shadow-2xl font-bold text-xs tracking-widest uppercase hover:bg-white transition-all duration-300 border border-[#C5A059]"
        >
          <Sparkles className="w-4 h-4 text-[#1A1A1A]" />
          <span>ASK AI</span>
        </button>
      </div>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1A1A1A]/95 backdrop-blur-md border-t border-white/10 px-2 py-2.5 pb-safe flex items-center justify-around text-white shadow-2xl">
        <a
          href="tel:+918049001100"
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-sans text-white/80 hover:text-[#C5A059] active:scale-95 px-2 py-1 transition-transform"
        >
          <Phone className="w-4 h-4 text-[#C5A059]" />
          <span className="font-bold tracking-wider">CALL</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-sans text-[#25D366] active:scale-95 px-2 py-1 transition-transform"
        >
          <MessageSquare className="w-4 h-4 fill-[#25D366]" />
          <span className="font-bold tracking-wider">WHATSAPP</span>
        </a>

        <button
          onClick={onOpenConcierge}
          className="flex flex-col items-center justify-center gap-1 text-[10px] font-sans text-[#C5A059] active:scale-95 px-2 py-1 transition-transform"
        >
          <Sparkles className="w-4 h-4 text-[#C5A059]" />
          <span className="font-bold tracking-wider">AI CONCIERGE</span>
        </button>

        <button
          onClick={onOpenEnquiry}
          className="btn-primary-rgb"
        >
          <span className="btn-primary-rgb-inner !px-3.5 !py-2 !text-[11px]">
            ENQUIRE
          </span>
        </button>
      </div>
    </>
  );
};

