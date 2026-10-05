import React, { useState, useEffect, useRef } from 'react';
import type { NavPage } from '../types';
import { testimonialsData } from '../data/testimonialsData';
import { Star, CheckCircle2, MessageSquarePlus, X, TrendingDown } from 'lucide-react';

interface StatCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  isAnimated: boolean;
  className?: string;
  cssCounterClass?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  isAnimated,
  className = '',
  cssCounterClass = '',
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isAnimated) {
      setDisplayValue(0);
      return;
    }

    let startTimestamp: number | null = null;
    const duration = 2000;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth exponential ease-out identical to cubic-bezier(0.16, 1, 0.3, 1)
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = ease * value;

      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isAnimated, value]);

  const formatted = decimals > 0 ? displayValue.toFixed(decimals) : Math.round(displayValue);

  return (
    <span className={`tabular-nums inline-block ${className} ${cssCounterClass}`}>
      {prefix}{formatted}{suffix}
    </span>
  );
};

interface TestimonialsPageProps {
  setCurrentPage: (page: NavPage) => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ setCurrentPage }) => {
  const [filter, setFilter] = useState<'all' | 'junior' | 'women' | 'adult' | 'competitive'>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [userReviewSubmitted, setUserReviewSubmitted] = useState(false);
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setStatsAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // New review form state
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newQuote, setNewQuote] = useState('');
  const [newHandicap, setNewHandicap] = useState('');

  const filteredTestimonials = filter === 'all'
    ? testimonialsData
    : testimonialsData.filter((t) => t.category === filter);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setUserReviewSubmitted(true);
    setTimeout(() => {
      setUserReviewSubmitted(false);
      setModalOpen(false);
      setNewName('');
      setNewLocation('');
      setNewRole('');
      setNewQuote('');
      setNewHandicap('');
    }, 3000);
  };

  return (
    <div className="space-y-20 py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-cardBorder text-xs font-semibold text-brand-purple-300">
          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
          <span>Proven Track Record in Ontario</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
          Golfer Success Stories & Reviews
        </h1>

        <p className="text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Read genuine feedback from junior parents, competitive amateurs, and women clinic graduates across Burlington, Oakville, and Hamilton who have experienced David’s coaching firsthand.
        </p>

        {/* Proof metrics row with counting number animation */}
        <div 
          ref={statsSectionRef}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4"
        >
          {/* Card 1: 6.8 Avg Handicap Reduction */}
          <div className="stat-card-glow p-4 rounded-xl bg-brand-card border border-brand-cardBorder text-center group hover:border-brand-purple-500/40 transition-all duration-300">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                <StatCounter 
                  value={6.8} 
                  decimals={1} 
                  isAnimated={statsAnimated} 
                  cssCounterClass={statsAnimated ? 'animate-count' : ''}
                />
              </span>
            </div>
            <p className="text-[11px] text-brand-purple-300 font-medium mt-1">Avg Handicap Reduction</p>
          </div>

          {/* Card 2: 100% Enjoyment & Confidence */}
          <div className="stat-card-glow p-4 rounded-xl bg-brand-card border border-brand-cardBorder text-center group hover:border-emerald-500/40 transition-all duration-300">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-400">
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                <StatCounter 
                  value={100} 
                  suffix="%" 
                  isAnimated={statsAnimated} 
                  cssCounterClass={statsAnimated ? 'animate-count' : ''}
                />
              </span>
            </div>
            <p className="text-[11px] text-brand-purple-300 font-medium mt-1">Enjoyment & Confidence</p>
          </div>

          {/* Card 3: 45+ Junior Tour Qualifiers */}
          <div className="stat-card-glow p-4 rounded-xl bg-brand-card border border-brand-cardBorder text-center group hover:border-brand-purple-500/40 transition-all duration-300">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                <StatCounter 
                  value={45} 
                  suffix="+" 
                  isAnimated={statsAnimated} 
                  cssCounterClass={statsAnimated ? 'animate-count' : ''}
                />
              </span>
            </div>
            <p className="text-[11px] text-brand-purple-300 font-medium mt-1">Junior Tour Qualifiers</p>
          </div>

          {/* Card 4: 5.0 ★ Student Satisfaction */}
          <div className="stat-card-glow p-4 rounded-xl bg-brand-card border border-brand-cardBorder text-center group hover:border-amber-500/40 transition-all duration-300">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-amber-400">
              <span className="inline-block transition-transform duration-300 group-hover:scale-105">
                <StatCounter 
                  value={5.0} 
                  decimals={1} 
                  suffix=" ★" 
                  isAnimated={statsAnimated} 
                  cssCounterClass={statsAnimated ? 'animate-count' : ''}
                />
              </span>
            </div>
            <p className="text-[11px] text-brand-purple-300 font-medium mt-1">Student Satisfaction</p>
          </div>
        </div>

        {/* Filter bar & Leave Review trigger */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-brand-cardBorder">
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: 'all', label: 'All Reviews' },
                { id: 'junior', label: 'Junior Golfers & Parents' },
                { id: 'women', label: "Women's Clinics" },
                { id: 'competitive', label: 'Competitive Amateurs' },
                { id: 'adult', label: 'Adult Golfers' },
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  filter === f.id
                    ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                    : 'bg-brand-surface text-brand-muted hover:text-white border border-brand-cardBorder'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="px-4 py-2 rounded-lg bg-brand-surface hover:bg-white/10 text-white text-xs font-semibold border border-brand-cardBorder flex items-center gap-1.5 transition-colors"
          >
            <MessageSquarePlus className="w-3.5 h-3.5 text-brand-purple-400" />
            <span>Leave a Review</span>
          </button>
        </div>
      </section>

      {/* Testimonials Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple-500/40 flex flex-col justify-between transition-all shadow-md group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-surface text-brand-purple-300 border border-brand-cardBorder">
                  {item.category}
                </span>
              </div>

              {item.handicapChange && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-brand-surface text-xs font-semibold text-emerald-400 border border-emerald-500/20">
                  <TrendingDown className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{item.handicapChange}</span>
                </div>
              )}

              <p className="text-xs text-brand-light leading-relaxed italic">
                "{item.quote}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-6 border-t border-brand-cardBorder mt-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover border border-brand-purple-500/30"
              />
              <div>
                <h4 className="font-bold text-sm text-white">{item.name}</h4>
                <p className="text-[11px] text-brand-muted">{item.role}</p>
                <p className="text-[10px] text-brand-purple-300">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Box */}
      <section className="p-8 sm:p-12 rounded-3xl bg-brand-card border border-brand-cardBorder text-center space-y-4 max-w-3xl mx-auto">
        <h3 className="font-display font-bold text-2xl text-white">
          Ready to Write Your Own Golf Success Story?
        </h3>
        <p className="text-sm text-brand-muted max-w-xl mx-auto">
          Take the first step with a diagnostic swing assessment using Trackman and HackMotion at our Burlington training center.
        </p>
        <button
          onClick={() => setCurrentPage('booking')}
          className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white font-display font-semibold text-xs shadow-purple-glow hover:opacity-90"
        >
          Book Your 1-on-1 Assessment
        </button>
      </section>

      {/* Modal for Submitting a Review */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-brand-card border border-brand-cardBorder rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-brand-muted hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {userReviewSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-display font-bold text-xl text-white">Review Submitted!</h4>
                <p className="text-xs text-brand-muted">
                  Thank you for sharing your experience with Coach David Banks. Your review will be featured after verification!
                </p>
              </div>
            ) : (
              <div>
                <h3 className="font-display font-bold text-lg text-white mb-1">
                  Share Your Coaching Experience
                </h3>
                <p className="text-xs text-brand-muted mb-4">
                  Help fellow Burlington and Ontario golfers find the right coach.
                </p>

                <form onSubmit={handleSubmitReview} className="space-y-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-brand-light mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael T."
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-brand-light mb-1">Town / City</label>
                      <input
                        type="text"
                        placeholder="e.g. Burlington, ON"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-light mb-1">Handicap Change</label>
                      <input
                        type="text"
                        placeholder="e.g. 20 to 14"
                        value={newHandicap}
                        onChange={(e) => setNewHandicap(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-light mb-1">Program / Session Taken</label>
                    <input
                      type="text"
                      placeholder="e.g. 5-Lesson Package, Women's Clinic..."
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-light mb-1">Your Review *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="What changed in your swing or confidence after working with David?"
                      value={newQuote}
                      onChange={(e) => setNewQuote(e.target.value)}
                      className="w-full px-3 py-2 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-brand-purple-600 hover:bg-brand-purple-500 text-white font-display font-semibold text-xs transition-all shadow-purple-subtle"
                  >
                    Post Review
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
