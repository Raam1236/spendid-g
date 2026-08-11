import React, { useState } from 'react';
import { EnquiryFormData } from '../types';
import { PROJECTS_DATA } from '../data/projects';
import { X, Send, CheckCircle2, ShieldCheck, Phone, MessageSquare } from 'lucide-react';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProject?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedProject
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectInterest: preselectedProject || 'Splendid Lake Breez (Begur)',
    budgetRange: '₹80 Lakhs - ₹1.2 Cr',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [waUrl, setWaUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const refId = `SPL-${Math.floor(100000 + Math.random() * 900000)}`;

    const waMessage = `📋 *NEW PROPERTY ENQUIRY*
---------------------------------------
👤 *Visitor Name:* ${formData.fullName}
📞 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}

🏢 *Project Interest:* ${formData.projectInterest}
💰 *Budget Range:* ${formData.budgetRange}
${formData.message ? `📝 *Message/Query:* ${formData.message}\n` : ''}
🔖 *Reference ID:* ${refId}
---------------------------------------
_Sent via Splendid Group Website Portal_`;

    const ownerPhone = '919900041880';
    const whatsappLink = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(waMessage)}`;

    setWaUrl(whatsappLink);
    setSubmittedRef(refId);

    // Automatically open WhatsApp with pre-filled enquiry details addressed to owner
    window.open(whatsappLink, '_blank');

    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, refId })
      });
    } catch (err) {
      console.error('API submission log:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex justify-center items-center p-3 sm:p-6 animate-fade-in">
      <div className="bg-[#1A1A1A] text-white w-full max-w-xl border border-white/10 p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors bg-white/10 rounded-full"
          aria-label="Close enquiry modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="text-center py-8 space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="font-serif italic text-3xl text-white" style={{ fontFamily: "'Georgia', serif" }}>Enquiry Details Formatted</h3>
            <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Your enquiry details for <strong className="text-[#C5A059]">{formData.projectInterest}</strong> have been forwarded to the owner and sales team (+91 80 4900 1100).
            </p>
            <div className="bg-[#242424] p-4 border border-white/10 inline-block font-mono text-xs text-[#C5A059]">
              REFERENCE ID: {submittedRef}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#25D366] text-white px-6 py-3 text-xs font-bold tracking-wider uppercase hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                OPEN IN WHATSAPP
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto bg-[#C5A059] text-[#1A1A1A] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white transition-all border border-[#C5A059]"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-[#C5A059]" />
                <span className="text-[10px] font-sans tracking-[0.3em] text-[#C5A059] uppercase block font-bold">
                  SPLENDID GROUP • SALES DESK
                </span>
              </div>
              <h3 className="font-serif italic text-2xl text-white pt-1" style={{ fontFamily: "'Georgia', serif" }}>Request Property Details</h3>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className="space-y-1.5">
                <label className="text-white/70 uppercase tracking-wider block font-semibold">FULL NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Rajesh Sharma"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#242424] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 focus:outline-none transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase tracking-wider block font-semibold">PHONE NUMBER *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#242424] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase tracking-wider block font-semibold">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#242424] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase tracking-wider block font-semibold">PROJECT INTEREST *</label>
                  <select
                    value={formData.projectInterest}
                    onChange={(e) => setFormData({ ...formData, projectInterest: e.target.value })}
                    className="w-full bg-[#242424] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 focus:outline-none transition-all"
                  >
                    {PROJECTS_DATA.map((p) => (
                      <option key={p.id} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-white/70 uppercase tracking-wider block font-semibold">BUDGET RANGE</label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full bg-[#242424] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 focus:outline-none transition-all"
                  >
                    <option value="₹75 Lakhs - ₹95 Lakhs">₹75 Lakhs - ₹95 Lakhs</option>
                    <option value="₹95 Lakhs - ₹1.3 Cr">₹95 Lakhs - ₹1.3 Cr</option>
                    <option value="₹1.3 Cr - ₹2.5 Cr">₹1.3 Cr - ₹2.5 Cr</option>
                    <option value="Commercial Space">Commercial / Retail</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-white/70 uppercase tracking-wider block font-semibold">MESSAGE OR QUESTIONS</label>
                <textarea
                  rows={3}
                  placeholder="Ask about floor plans, pricing discounts, possession dates..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#242424] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary-rgb"
              >
                <span className="btn-primary-rgb-inner py-3.5">
                  <span>{isSubmitting ? 'SENDING ENQUIRY...' : 'SUBMIT ENQUIRY & OPEN WHATSAPP'}</span>
                  <Send className="w-4 h-4" />
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};


