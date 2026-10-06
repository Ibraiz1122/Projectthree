import React from 'react';
import type { NavPage } from '../types';

interface FooterProps {
  setCurrentPage: (page: NavPage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0A0812] text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: Brand & Main Navigation in a Balanced, Clean Luxury Layout */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-white/[0.06]">
          {/* Brand & Identity */}
          <div className="space-y-3 max-w-sm">
            <button
              onClick={() => setCurrentPage('home')}
              className="text-left group focus:outline-none block"
            >
              <img
                src="/images/logo-white.png"
                alt="David Banks Golf"
                className="h-20 sm:h-24 w-auto object-contain mb-3 drop-shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 font-semibold block">
                PGA of Canada • Ontario Champion
              </span>
            </button>
            <p className="text-xs text-zinc-500 leading-relaxed pt-1">
              Private coaching and sensor diagnostics at Hidden Lake Golf Club, Burlington, Ontario.
            </p>
          </div>

          {/* Clean Navigation Links */}
          <div className="flex flex-wrap gap-x-14 gap-y-8 text-xs font-medium">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-bold block mb-3.5">
                Navigation
              </span>
              <ul className="space-y-2.5">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About David' },
                  { id: 'programs', label: 'Coaching Programs' },
                  { id: 'testimonials', label: 'Student Reviews' },
                  { id: 'products', label: 'Pro Shop & Packages' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => setCurrentPage(item.id as NavPage)}
                      className="text-zinc-400 hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-bold block mb-3.5">
                Studio Tech
              </span>
              <ul className="space-y-2.5 text-zinc-400">
                <li>Trackman 4 Radar</li>
                <li>HackMotion 3D Wrist Lab</li>
                <li>BodiTrak Ground Kinetics</li>
                <li>Operation 36 Academy</li>
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-bold block mb-3.5">
                Concierge
              </span>
              <ul className="space-y-2.5">
                <li>
                  <a href="tel:905-464-7777" className="text-zinc-400 hover:text-white transition-colors">
                    905-464-7777
                  </a>
                </li>
                <li>
                  <a href="mailto:davidbanksgolf@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                    davidbanksgolf@gmail.com
                  </a>
                </li>
                <li className="text-zinc-500">
                  Hidden Lake Golf Club, Burlington, ON
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Pure Minimalist Luxury */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} David Banks Golf. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setCurrentPage('contact')}
              className="hover:text-zinc-300 transition-colors"
            >
              Contact Concierge
            </button>
            <span className="text-zinc-700">•</span>
            <button
              onClick={() => setCurrentPage('booking')}
              className="hover:text-zinc-300 transition-colors"
            >
              Book a Lesson
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
