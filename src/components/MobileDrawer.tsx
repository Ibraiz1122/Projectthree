import React from 'react';
import type { NavPage } from '../types';
import { Phone, Mail, MapPin, X, Calendar, ChevronRight } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  setCurrentPage,
}) => {
  if (!isOpen) return null;

  const navLinks: { id: NavPage; label: string; desc: string }[] = [
    { id: 'home', label: 'Home', desc: 'Welcome & coaching philosophy' },
    { id: 'about', label: 'About David Banks', desc: '40+ years experience & credentials' },
    { id: 'programs', label: 'Coaching Programs', desc: 'Juniors, women & private lessons' },
    { id: 'booking', label: 'Book / Schedule', desc: 'Select your lesson date & time' },
    { id: 'testimonials', label: 'Student Reviews', desc: 'Real golfer results & handicap drops' },
    { id: 'products', label: 'Pro Shop & Packages', desc: 'Lesson bundles, gear & gift cards' },
    { id: 'contact', label: 'Contact Coach David', desc: 'Direct phone, email & location' },
  ];

  const handleNav = (page: NavPage) => {
    setCurrentPage(page);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Content */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-brand-card border-l border-brand-cardBorder h-full flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        {/* Top Header */}
        <div className="p-5 border-b border-brand-cardBorder flex items-center justify-between bg-[#070709]">
          <div className="flex items-center gap-3">
            {/* Tour Crest */}
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#1C1829] to-[#0A0812] border border-brand-purple-500/30 flex items-center justify-center p-1 text-white shadow-sm shrink-0">
              <img
                src="/images/logo-icon.png"
                alt="David Banks Golf Crest"
                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-extrabold text-sm text-white tracking-wider">DAVID BANKS</span>
                <span className="text-[9px] font-black uppercase tracking-wider px-1 py-0.2 rounded bg-brand-purple-950/60 border border-brand-purple-500/30 text-brand-purple-300">
                  GOLF
                </span>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-semibold">High-Performance Coaching</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Links */}
        <div className="p-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`w-full flex items-center justify-between p-3.5 rounded-xl text-left transition-all ${
                  isActive
                    ? 'bg-white/[0.08] border border-brand-purple-500/30 text-white font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <div className={`text-sm ${isActive ? 'text-white font-bold' : 'text-zinc-200 font-medium'}`}>
                    <span>{link.label}</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">{link.desc}</div>
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-brand-purple-400' : 'text-zinc-500'}`} />
              </button>
            );
          })}
        </div>

        {/* Bottom Contact Actions */}
        <div className="p-5 border-t border-brand-cardBorder bg-[#070709] space-y-3">
          <button
            onClick={() => handleNav('booking')}
            className="w-full py-3 rounded-full text-xs uppercase font-display font-bold tracking-wider text-white shadow-lg border border-brand-purple-400/40 bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-white" />
            <span>Book Lesson Online</span>
          </button>

          <a
            href="tel:905-464-7777"
            className="w-full py-2.5 px-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-200 text-xs font-medium flex items-center justify-center gap-2 hover:bg-white/[0.08] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-brand-purple-400" />
            <span>Direct Line: 905-464-7777</span>
          </a>

          <a
            href="mailto:davidbanksgolf@gmail.com"
            className="w-full py-2.5 px-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-200 text-xs font-medium flex items-center justify-center gap-2 hover:bg-white/[0.08] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-brand-purple-400" />
            <span>davidbanksgolf@gmail.com</span>
          </a>

          <div className="text-center text-[10px] text-zinc-500 pt-2 flex items-center justify-center gap-1.5">
            <MapPin className="w-3 h-3 text-brand-purple-400/70" />
            <span>Burlington, Ontario • Serving GTA Golfers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
