import React, { useState, useEffect } from 'react';
import type { NavPage } from '../types';
import { useCart } from '../context/CartContext';
import { Phone, MapPin, ShoppingBag, Menu, X, ArrowUpRight, Trophy } from 'lucide-react';

interface NavbarProps {
  currentPage: NavPage;
  setCurrentPage: (page: NavPage) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavPage; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'testimonials', label: 'Reviews' },
    { id: 'products', label: 'Pro Shop' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* 1. Prestige Accreditations & Concierge Strip */}
      <div className="text-[11px] text-zinc-300 py-1.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          {/* Left: Championship Credentials with Clean Titanium Badge */}
          <div className="flex items-center gap-2.5 truncate">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-white/[0.08] backdrop-blur-md border border-white/15 text-[10px] font-bold text-white tracking-wide shrink-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
              <Trophy className="w-3 h-3 text-brand-purple-400" />
              <span>ONTARIO PGA</span>
            </div>
            <span className="text-zinc-200 font-medium text-[11px] truncate flex items-center gap-1.5">
              <span>2025 PGA Super Senior Champion</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-300 hidden md:inline">Top 50 Operation 36 Master Coach</span>
            </span>
          </div>

          {/* Right: Live Studio Status & Direct Concierge */}
          <div className="flex items-center gap-4 text-[11px] shrink-0 font-medium">
            {/* Live Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">Burlington Lab Active</span>
            </div>

            <span className="hidden sm:inline text-zinc-700">|</span>

            {/* Direct Phone */}
            <a
              href="tel:905-464-7777"
              className="flex items-center gap-1.5 text-zinc-200 hover:text-white transition-colors group"
              title="Call David Banks directly"
            >
              <Phone className="w-3 h-3 text-brand-purple-400 group-hover:text-white transition-colors" />
              <span className="font-semibold tracking-wide">905-464-7777</span>
            </a>

            <span className="hidden xs:inline text-zinc-700">|</span>

            <span className="hidden xs:flex items-center gap-1 text-zinc-300">
              <MapPin className="w-3 h-3 text-brand-purple-400/70" />
              <span>Burlington, ON</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Navbar (Clean, transparent, no outer outline border) */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/60 backdrop-blur-md' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-3">
            
            {/* Brand Logo & Wordmark */}
            <button
              onClick={() => setCurrentPage('home')}
              className="flex items-center gap-3.5 group text-left focus:outline-none shrink-0"
              aria-label="David Banks Golf - Return to Homepage"
            >
              {/* Tour Flag Emblem */}
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#1C1829] via-[#120F1C] to-[#0A0812] border border-brand-purple-500/30 group-hover:border-brand-purple-400/60 p-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-300 group-hover:scale-[1.03] shrink-0 flex items-center justify-center">
                <svg className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-105" viewBox="0 0 32 32" fill="none">
                  {/* Stylized Flag Pole */}
                  <line x1="12" y1="6" x2="12" y2="26" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
                  
                  {/* Tour Pin Pennant */}
                  <path d="M12 7.5L24 12.5L12 17.5V7.5Z" fill="#9333EA" stroke="#A855F7" strokeWidth="1" strokeLinejoin="round" />
                  
                  {/* Golf Green / Base Turf Arc */}
                  <path d="M7 25.5C10 24 22 24 25 25.5" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Brand Wordmark */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-[17px] sm:text-[19px] tracking-[0.06em] text-white">
                    DAVID BANKS
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.16em] px-1.5 py-0.5 rounded bg-brand-purple-950/60 border border-brand-purple-500/30 text-brand-purple-300">
                    GOLF
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  <span>High-Performance Coaching</span>
                  <span className="text-white/20">•</span>
                  <span className="text-zinc-500">Burlington</span>
                </div>
              </div>
            </button>

            {/* Glossy iOS Glass Capsule Navigation Menu */}
            <nav 
              className="hidden lg:flex items-center p-1.5 rounded-full bg-white/[0.07] backdrop-blur-2xl backdrop-saturate-200 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_0_rgba(255,255,255,0.35),inset_0_-1px_1px_0_rgba(0,0,0,0.2)]"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => setCurrentPage(link.id)}
                    className={`relative px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.14em] rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] border border-white/25'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              
              {/* Shopping Bag Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white transition-all duration-200 focus:outline-none shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group"
                aria-label={`Shopping Bag with ${totalItems} items`}
              >
                <ShoppingBag className="w-4 h-4 transition-transform group-hover:scale-110" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-purple-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#0A0A0D]">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Clean Athletic "Book a Lesson" CTA */}
              <button
                onClick={() => setCurrentPage('booking')}
                className="relative group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-display font-bold uppercase tracking-wider text-white overflow-hidden transition-all duration-200 active:scale-95 shadow-[0_4px_20px_rgba(147,51,234,0.35),inset_0_1px_0_rgba(255,255,255,0.2)] border border-brand-purple-400/40 bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600"
              >
                <span>Book a Lesson</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white hover:bg-white/10 transition-colors focus:outline-none shrink-0"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

