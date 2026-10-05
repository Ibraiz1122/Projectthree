import React from 'react';
import type { NavPage } from '../types';
import { Phone, Mail, MapPin, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-brand-dark border-t border-brand-cardBorder relative overflow-hidden">
      {/* Subtle purple ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-brand-purple-900/10 blur-3xl pointer-events-none" />

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Professional Standing (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple-600 to-brand-purple-900 flex items-center justify-center text-white font-bold shadow-purple-subtle border border-brand-purple-500/30">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <div>
                <span className="font-display font-extrabold text-lg text-white">DAVID BANKS</span>
                <span className="text-brand-purple-400 font-bold ml-1 text-lg">GOLF</span>
              </div>
            </div>

            <p className="text-sm text-brand-muted leading-relaxed max-w-sm">
              High-performance golf coaching combining motor skill science with tour-level 3D biofeedback. Helping golfers in Burlington, Oakville, and Hamilton build swings that hold up under pressure.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-surface border border-white/5 text-xs text-brand-light">
                <ShieldCheck className="w-4 h-4 text-brand-purple-400 shrink-0" />
                <span>PGA of Canada Class A • 2025 Ontario PGA Champion</span>
              </div>
            </div>
          </div>

          {/* Column 2: Coaching Programs (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">
              Coaching Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-brand-muted">
              <li>
                <button
                  onClick={() => setCurrentPage('programs')}
                  className="hover:text-brand-purple-300 transition-colors text-left"
                >
                  Junior Golf Development Academy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('programs')}
                  className="hover:text-brand-purple-300 transition-colors text-left"
                >
                  Women's Golf Confidence Initiative
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('programs')}
                  className="hover:text-brand-purple-300 transition-colors text-left"
                >
                  High-Performance 1-on-1 Assessment
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('programs')}
                  className="hover:text-brand-purple-300 transition-colors text-left"
                >
                  HackMotion 3D Wrist Sensor Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('programs')}
                  className="hover:text-brand-purple-300 transition-colors text-left"
                >
                  BodiTrak Ground Force Mapping
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('programs')}
                  className="hover:text-brand-purple-300 transition-colors text-left"
                >
                  On-Course Strategy & Scoring
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Facility (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-4">
              Facility & Hours
            </h4>
            
            <div className="space-y-3 text-xs text-brand-muted">
              <div>
                <span className="text-[11px] font-semibold text-brand-light block mb-0.5">Location</span>
                <div className="flex items-start gap-1.5 text-brand-muted">
                  <MapPin className="w-3.5 h-3.5 text-brand-purple-400 shrink-0 mt-0.5" />
                  <span>Burlington, Ontario</span>
                </div>
                <p className="text-[11px] text-brand-muted/80 mt-0.5 pl-5">
                  Serving Oakville, Hamilton & Waterdown
                </p>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-brand-light block mb-0.5">Direct Contact</span>
                <a href="tel:905-464-7777" className="flex items-center gap-1.5 text-brand-muted hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5 text-brand-purple-400 shrink-0" />
                  <span>905-464-7777 (Call/Text)</span>
                </a>
                <a href="mailto:davidbanksgolf@gmail.com" className="flex items-center gap-1.5 text-brand-muted hover:text-white transition-colors mt-1">
                  <Mail className="w-3.5 h-3.5 text-brand-purple-400 shrink-0" />
                  <span>davidbanksgolf@gmail.com</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-semibold text-brand-light block mb-0.5">Coaching Hours</span>
                <p className="text-brand-muted pl-0.5">Mon – Sat: 8:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>

          {/* Column 4: Focused Assessment Booking CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-white text-xs uppercase tracking-wider mb-2">
              Book an Assessment
            </h4>
            <p className="text-xs text-brand-muted leading-relaxed">
              Every golfer starts with an objective swing assessment. We pinpoint your kinematic sequence leaks and build a customized improvement plan.
            </p>

            <button
              onClick={() => setCurrentPage('booking')}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white font-display font-bold text-xs text-center shadow-purple-glow hover:shadow-purple-subtle active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-brand-muted/80 text-center">
              Have questions first?{' '}
              <button
                onClick={() => setCurrentPage('contact')}
                className="text-brand-purple-300 hover:text-white underline underline-offset-2 transition-colors"
              >
                Send a message
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Secondary Links */}
        <div className="mt-12 pt-8 border-t border-brand-cardBorder/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>
            © {new Date().getFullYear()} David Banks Golf. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => setCurrentPage('about')} className="hover:text-white transition-colors">
              About Coach David
            </button>
            <button onClick={() => setCurrentPage('programs')} className="hover:text-white transition-colors">
              Programs
            </button>
            <button onClick={() => setCurrentPage('testimonials')} className="hover:text-white transition-colors">
              Reviews
            </button>
            <button onClick={() => setCurrentPage('products')} className="hover:text-white transition-colors">
              Pro Shop
            </button>
            <button onClick={() => setCurrentPage('contact')} className="hover:text-white transition-colors">
              Contact & Location
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
