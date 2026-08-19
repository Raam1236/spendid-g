import React, { useState } from 'react';
import { SiteVisitFormData } from '../types';
import { PROJECTS_DATA } from '../data/projects';
import { Calendar, Clock, Car, CheckCircle2, Send, PhoneCall, MessageSquare } from 'lucide-react';

interface SiteVisitSectionProps {
  preselectedProject?: string;
}

export const SiteVisitSection: React.FC<SiteVisitSectionProps> = ({ preselectedProject }) => {
  const [formData, setFormData] = useState<SiteVisitFormData>({
    fullName: '',
    phone: '',
    email: '',
    project: preselectedProject || 'Splendid Lake Breez (Begur)',
    preferredDate: '',
    preferredTime: '10:30 AM',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBookingId, setSubmittedBookingId] = useState<string | null>(null);
  const [waUrl, setWaUrl] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      return;
    }
    setIsSubmitting(true);

    const cleanData: SiteVisitFormData = {
      fullName: formData.fullName.trim().slice(0, 80),
      phone: formData.phone.trim().slice(0, 25),
      email: formData.email.trim().slice(0, 120),
      project: formData.project.trim().slice(0, 100),
      preferredDate: formData.preferredDate.trim().slice(0, 30),
      preferredTime: formData.preferredTime.trim().slice(0, 30),
      message: (formData.message || '').trim().slice(0, 500)
    };

    const bookingId = `VISIT-${Math.floor(100000 + Math.random() * 900000)}`;

    // Formatted WhatsApp message for the owner (+91 99000 41880)
    const waMessage = `🏛️ *NEW PRIVATE SITE VISIT BOOKING*
---------------------------------------
👤 *Visitor Name:* ${cleanData.fullName}
📞 *Phone:* ${cleanData.phone}
✉️ *Email:* ${cleanData.email}

🏢 *Project:* ${cleanData.project}
📅 *Preferred Date:* ${cleanData.preferredDate || 'To be finalized'}
⏰ *Time Slot:* ${cleanData.preferredTime}
${cleanData.message ? `📝 *Notes/Requests:* ${cleanData.message}\n` : ''}
🔖 *Booking Ref ID:* ${bookingId}
---------------------------------------
_Sent via Splendid Group Private Site Visit Portal_`;

    const ownerPhone = '919900041880';
    const whatsappLink = `https://wa.me/${ownerPhone}?text=${encodeURIComponent(waMessage)}`;
    
    setWaUrl(whatsappLink);
    setSubmittedBookingId(bookingId);

    // Automatically open WhatsApp with pre-filled visitor details addressed to owner
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');

    try {
      await fetch('/api/site-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...cleanData, bookingId })
      });
    } catch (err) {
      console.error('API submission log:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="site-visit" className="py-12 md:py-16 bg-[#1A1A1A] text-white relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] text-[#C5A059] uppercase font-bold block">
                PRIVATE PROPERTY TOUR
              </span>
            </div>

            <h2
              className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white font-light leading-[1.05]"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Come experience <br />
              <span className="not-italic text-[#C5A059] font-serif">the space.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 font-sans font-light leading-relaxed">
              See the architecture, feel the natural cross-breezes, and discover what makes each address distinctive with a private guided tour.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-[#C5A059] font-sans">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#242424] border border-white/10">
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                </div>
                <span className="text-white/80">Exclusive 1-on-1 Walkthrough with Senior Architect</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#242424] border border-white/10">
                  <PhoneCall className="w-4 h-4 text-[#C5A059]" />
                </div>
                <span className="text-white/80">Direct Concierge Line: +91 99000 41880</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Form Box */}
          <div className="lg:col-span-7 bg-[#242424] border border-white/10 p-8 sm:p-12 shadow-2xl relative">
            {submittedBookingId ? (
              <div className="text-center py-8 space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <span className="text-[10px] font-sans tracking-[0.25em] text-[#C5A059] uppercase font-bold block">
                    TOUR CONFIRMATION GENERATED
                  </span>
                  <h3 className="font-serif italic text-3xl text-white" style={{ fontFamily: "'Georgia', serif" }}>
                    Details Sent to Owner WhatsApp
                  </h3>
                  <p className="text-sm text-white/70 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Your tour details for <strong className="text-[#C5A059]">{formData.project}</strong> have been formatted and directed to the owner's WhatsApp (+91 99000 41880).
                  </p>
                </div>

                {/* Submitted Visitor Details Summary Box */}
                <div className="bg-[#1A1A1A] p-5 border border-white/10 text-left text-xs text-white/80 space-y-2.5 max-w-lg mx-auto">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span className="text-white/50 uppercase font-semibold">Booking ID</span>
                    <span className="font-mono text-[#C5A059] font-bold">{submittedBookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50 uppercase font-semibold">Visitor</span>
                    <span className="text-white font-medium">{formData.fullName} ({formData.phone})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50 uppercase font-semibold">Project</span>
                    <span className="text-[#C5A059] font-medium">{formData.project}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/50 uppercase font-semibold">Scheduled Date & Time</span>
                    <span className="text-white font-medium">{formData.preferredDate || 'To be confirmed'} • {formData.preferredTime}</span>
                  </div>
                </div>

                {/* WhatsApp Direct Re-send Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#25D366] text-white px-6 py-3.5 text-xs font-bold tracking-wider uppercase hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    OPEN IN WHATSAPP (+91 99000 41880)
                  </a>

                  <button
                    onClick={() => setSubmittedBookingId(null)}
                    className="w-full sm:w-auto border border-white/20 text-white/80 px-6 py-3.5 text-xs tracking-wider uppercase hover:border-[#C5A059] hover:text-[#C5A059] transition-all font-bold"
                  >
                    SCHEDULE ANOTHER TOUR
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-serif italic text-2xl text-white font-normal border-b border-white/10 pb-4" style={{ fontFamily: "'Georgia', serif" }}>
                  Schedule a Private Site Visit
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans text-white/70 uppercase tracking-wider block font-semibold">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Viswanathan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-sm focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-sans text-white/70 uppercase tracking-wider block font-semibold">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-sm focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans text-white/70 uppercase tracking-wider block font-semibold">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="anand@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-sm focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-sans text-white/70 uppercase tracking-wider block font-semibold">
                      SELECT PROJECT *
                    </label>
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-sm focus:outline-none transition-all"
                    >
                      {PROJECTS_DATA.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.location})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-sans text-white/70 uppercase tracking-wider block font-semibold">
                      PREFERRED DATE *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-sm focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-sans text-white/70 uppercase tracking-wider block font-semibold">
                      PREFERRED TIME SLOT *
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-sm focus:outline-none transition-all"
                    >
                      <option value="10:00 AM">10:00 AM - Morning Slot</option>
                      <option value="12:00 PM">12:00 PM - Noon Slot</option>
                      <option value="03:00 PM">03:00 PM - Afternoon Slot</option>
                      <option value="05:30 PM">05:30 PM - Sunset Lake Slot</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-sans text-white/70 uppercase tracking-wider block font-semibold">
                    SPECIAL REQUESTS / NOTES (OPTIONAL)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Preferred BHK configuration, floor preference, or questions..."
                    value={formData.message || ''}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#1A1A1A] border border-white/10 focus:border-[#C5A059] text-white px-4 py-3 text-sm focus:outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary-rgb"
                >
                  <span className="btn-primary-rgb-inner py-4">
                    <span>{isSubmitting ? 'SENDING TO OWNER...' : 'CONFIRM SITE VISIT & SEND TO OWNER WHATSAPP'}</span>
                    <Send className="w-4 h-4" />
                  </span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};


