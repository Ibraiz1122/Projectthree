import React, { useState } from 'react';
import type { NavPage, ContactFormData } from '../types';
import { faqsData } from '../data/faqsData';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  setCurrentPage?: (page: NavPage) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    interest: '1-on-1 High-Performance Assessment',
    skillLevel: 'intermediate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '1-on-1 High-Performance Assessment',
        skillLevel: 'intermediate',
        message: ''
      });
    }, 4000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-24 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-cardBorder text-xs font-semibold text-brand-purple-300">
          <Phone className="w-3.5 h-3.5 text-brand-purple-400" />
          <span>Direct Access to Coach David Banks</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
          Get in Touch & Start Playing Better Golf
        </h1>

        <p className="text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Have questions about junior programs, women's clinics, or private swing assessments? Reach out to David directly or send a message below.
        </p>
      </section>

      {/* Main Contact Grid (Cards & Form) */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Info Card (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-cardBorder flex flex-col justify-between shadow-xl">
            <div>
              <div className="mb-6 space-y-1">
                <h3 className="font-display font-bold text-2xl text-white">Direct Contact</h3>
                <p className="text-xs text-brand-muted">
                  Reach Coach David directly by phone, SMS, or email for quick answers.
                </p>
              </div>

              <div className="space-y-3.5">
                <a
                  href="tel:905-464-7777"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-brand-surface border border-brand-cardBorder hover:border-brand-purple-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-purple-950 border border-brand-purple-500/30 flex items-center justify-center text-brand-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted uppercase font-bold tracking-wider">Phone (Call or Text)</span>
                    <p className="font-display font-bold text-base text-white group-hover:text-brand-purple-300 transition-colors">
                      905-464-7777
                    </p>
                    <p className="text-[11px] text-brand-muted">Fast response via voice or SMS</p>
                  </div>
                </a>

                <a
                  href="mailto:davidbanksgolf@gmail.com"
                  className="flex items-start gap-4 p-3.5 rounded-xl bg-brand-surface border border-brand-cardBorder hover:border-brand-purple-500/50 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-purple-950 border border-brand-purple-500/30 flex items-center justify-center text-brand-purple-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted uppercase font-bold tracking-wider">Email Address</span>
                    <p className="font-semibold text-sm text-white group-hover:text-brand-purple-300 transition-colors">
                      davidbanksgolf@gmail.com
                    </p>
                    <p className="text-[11px] text-brand-muted">Inquiries & schedule coordination</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-brand-surface border border-brand-cardBorder">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple-950 border border-brand-purple-500/30 flex items-center justify-center text-brand-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted uppercase font-bold tracking-wider">Coaching Facility Location</span>
                    <p className="font-semibold text-sm text-white">
                      Burlington, Ontario, Canada
                    </p>
                    <p className="text-[11px] text-brand-muted">
                      Serving Oakville, Hamilton, Waterdown & Halton region
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-3.5 rounded-xl bg-brand-surface border border-brand-cardBorder">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple-950 border border-brand-purple-500/30 flex items-center justify-center text-brand-purple-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-brand-muted uppercase font-bold tracking-wider">Coaching Hours</span>
                    <p className="font-semibold text-sm text-white">
                      Monday – Sunday: 8:00 AM – 8:30 PM
                    </p>
                    <p className="text-[11px] text-brand-muted">
                      Outdoor championship turf & high-tech indoor simulator bays
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-brand-cardBorder flex items-center gap-2.5 text-xs text-brand-muted">
              <ShieldCheck className="w-4 h-4 text-brand-purple-400 shrink-0" />
              <span>PGA of Canada Class A • Personalized 1-on-1 coaching by David Banks</span>
            </div>
          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-brand-card border border-brand-cardBorder flex flex-col justify-between shadow-xl relative">
            {submitted ? (
              <div className="text-center py-16 space-y-4 my-auto">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">Message Sent Successfully!</h3>
                <p className="text-sm text-brand-muted max-w-md mx-auto">
                  Thank you for reaching out, <span className="text-white font-semibold">{formData.name}</span>. David Banks reviews all inquiries personally and will respond shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-brand-purple-600 text-white text-xs font-semibold"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-between h-full">
                <div className="mb-6 space-y-1">
                  <h3 className="font-display font-bold text-2xl text-white">Send Coach David a Message</h3>
                  <p className="text-xs text-brand-muted">
                    Fill out the form below and David will follow up to help select your ideal coaching pathway.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-between flex-1">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-light mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Miller"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-light mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. david@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-brand-light mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 905-464-7777"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-brand-light mb-1">Coaching Area of Interest</label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                        >
                          <option value="1-on-1 High-Performance Assessment">1-on-1 High-Performance Assessment</option>
                          <option value="Junior Golf Academy (Operation 36)">Junior Golf Academy (Operation 36)</option>
                          <option value="Women's Golf Confidence Initiative">Women's Golf Confidence Initiative</option>
                          <option value="HackMotion & BodiTrak Sensor Intensive">HackMotion & BodiTrak Sensor Intensive</option>
                          <option value="On-Course Strategy (9 Holes)">On-Course Strategy (9 Holes)</option>
                          <option value="General Question / Other">General Question / Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-brand-light mb-1">Your Message or Current Golf Goals *</label>
                      <textarea
                        required
                        rows={3}
                        placeholder="Tell David a little about your golf experience, your current challenges (slice, distance, consistency), or questions about clinic dates..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white font-display font-semibold text-xs shadow-purple-glow transition-all flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry to David Banks</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Full-Width Driving Times Banner (Symmetrically Aligned Below) */}
        <div className="p-6 rounded-2xl bg-brand-card border border-brand-cardBorder shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-brand-cardBorder">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-purple-400 shrink-0" />
              <span className="font-display font-bold text-sm text-white">
                Driving Distance to Burlington Coaching Facility
              </span>
            </div>
            <span className="text-xs text-brand-muted">
              Central Halton location with fast QEW & 407 highway access
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="p-3 rounded-xl bg-brand-surface border border-brand-cardBorder">
              <span className="font-display font-bold text-lg text-white block">12 Mins</span>
              <span className="text-xs text-brand-muted">Downtown Oakville</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-surface border border-brand-cardBorder">
              <span className="font-display font-bold text-lg text-white block">15 Mins</span>
              <span className="text-xs text-brand-muted">Hamilton Core</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-surface border border-brand-cardBorder">
              <span className="font-display font-bold text-lg text-white block">8 Mins</span>
              <span className="text-xs text-brand-muted">Waterdown</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-surface border border-brand-cardBorder">
              <span className="font-display font-bold text-lg text-white block">18 Mins</span>
              <span className="text-xs text-brand-muted">Ancaster</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-surface border border-brand-cardBorder col-span-2 sm:col-span-1">
              <span className="font-display font-bold text-lg text-white block">16 Mins</span>
              <span className="text-xs text-brand-muted">Dundas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="max-w-4xl mx-auto space-y-6 pt-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-400">
            Common Questions
          </span>
          <h2 className="font-display font-extrabold text-3xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-brand-muted">
            Clear answers to help you prepare for your first lesson or clinic.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-brand-card border border-brand-cardBorder overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between text-sm font-semibold text-white hover:text-brand-purple-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-brand-purple-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-brand-muted leading-relaxed border-t border-brand-cardBorder/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
