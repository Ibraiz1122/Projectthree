import React, { useState, useEffect, useRef } from 'react';
import { smoothGlideTo } from '../utils/scrollSmoother';
import type { NavPage } from '../types';
import { programsData } from '../data/programsData';
import { testimonialsData } from '../data/testimonialsData';
import {
  Award,
  ArrowRight,
  Target,
  Sparkles,
  Zap,
  Users,
  ChevronRight,
  Calendar,
  Phone,
  MapPin,
  Trophy
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: NavPage) => void;
  setSelectedProgramId?: (id: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, setSelectedProgramId }) => {
  const [activeTechTab, setActiveTechTab] = useState<'trackman' | 'hackmotion' | 'boditrak'>('trackman');
  const [statsAnimated, setStatsAnimated] = useState(false);
  const statsSectionRef = useRef<HTMLElement>(null);

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

    if (window.location.hash) {
      const targetEl = document.querySelector(window.location.hash);
      if (targetEl) {
        setTimeout(() => targetEl.scrollIntoView({ behavior: 'smooth' }), 50);
      }
    }

    return () => observer.disconnect();
  }, []);

  const techDetails = {
    trackman: {
      name: 'Trackman 4 Dual Radar',
      title: 'Precision Clubhead & Ball Flight Telemetry',
      badge: 'Gold Standard',
      image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000&auto=format&fit=crop',
      points: [
        'Club path and face-to-path relationship calibrated to 0.1° accuracy',
        'Smash factor optimization for maximum effortless distance',
        'Angle of attack analysis to optimize driver launch and iron compression',
        'Eliminates guessing: you see exactly why your ball curved'
      ]
    },
    hackmotion: {
      name: 'HackMotion 3D Wrist Sensor',
      title: 'Real-Time Audio Biofeedback for Face Control',
      badge: 'Certified Specialist',
      image: '/images/hackmotion_sensor_lab.jpg',
      points: [
        'Measures wrist flexion/extension, radial/ulnar deviation in full 3D',
        'Real-time auditory tones train your muscle memory without overthinking',
        'Instant fix for the flip, cast, and open-clubface slice',
        'Calibrated to PGA Tour kinematic benchmarks'
      ]
    },
    boditrak: {
      name: 'BodiTrak AISensor Vector Mat',
      title: 'Ground Reaction Force & Pressure Dynamics',
      badge: 'Certified AISensor',
      image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=1000&auto=format&fit=crop',
      points: [
        'Visualizes Center of Pressure (COP) trace throughout the swing sequence',
        'Prevents "hanging back" and reverse pivots on the downswing',
        'Teaches you how to push into the turf for explosive clubhead speed',
        'Essential for power generation without strain on your lower back'
      ]
    }
  };

  const handleProgramSelect = (id: string) => {
    if (setSelectedProgramId) {
      setSelectedProgramId(id);
    }
    setCurrentPage('programs');
  };

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center -mt-[114px] pt-36 pb-16 overflow-hidden">
        {/* Full Cinematic Pro Golfer Swing Background */}
        <div
          className="absolute inset-0 bg-cover bg-[position:0%_top] sm:bg-[position:4%_top] -scale-x-100 pointer-events-none"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611374243147-44a702c2d44c?q=90&w=2400&auto=format&fit=crop')`
          }}
        />

        {/* Directional Luxury Contrast Gradients (Deep dark on text, clear on golfer) */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 via-35% md:via-42% to-brand-dark/15 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 via-15% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-radial-purple opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl space-y-6 text-left">
            {/* Accolade Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple-950/80 border border-brand-purple-500/40 text-xs font-semibold text-brand-purple-300 shadow-purple-subtle">
                <Trophy className="w-3.5 h-3.5 text-brand-purple-400" />
                <span>2025 Ontario PGA Champion</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-surface border border-white/10 text-xs font-medium text-brand-light">
                <span>40+ Years Experience</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
              High-Performance <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-brand-purple-200 to-brand-purple-400 bg-clip-text text-transparent">
                Golf Coaching
              </span>{' '}
              That Delivers Results
            </h1>

            {/* Grounded Human Description */}
            <p className="text-base sm:text-lg text-brand-muted max-w-2xl leading-relaxed">
              We combine motor skill science with tour-level 3D biofeedback to build a swing that actually holds up on the course. Whether you are introducing your junior to the game, joining our women’s clinics, or striving to break 80, we give you a clear, prioritized roadmap to lower scores.
            </p>

            {/* Primary Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => setCurrentPage('booking')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white font-display font-bold text-base shadow-purple-glow hover:shadow-purple-subtle active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Assessment</span>
              </button>

              <button
                onClick={() => smoothGlideTo('#programs-section', { offset: -80, duration: 1.4 })}
                className="px-7 py-4 rounded-xl bg-brand-surface hover:bg-brand-surface/80 border border-brand-cardBorder hover:border-brand-purple-500/50 text-white font-display font-semibold text-base transition-all flex items-center justify-center gap-2 group"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4 text-brand-purple-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:905-464-7777"
                className="px-4 py-4 rounded-xl bg-transparent hover:bg-white/5 border border-transparent text-brand-muted hover:text-white text-xs font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-purple-400" />
                <span>905-464-7777</span>
              </a>
            </div>

            {/* Location Tag */}
            <p className="text-xs text-brand-muted pt-1 flex items-center gap-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-purple-400 shrink-0" />
                <span>Coaching in Burlington, Ontario</span>
              </span>
              <span className="text-white/20">|</span>
              <span>Serving golfers in Oakville, Hamilton & Waterdown</span>
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CREDENTIALS & STATS BAR */}
      {/* ========================================================================= */}
      <section 
        id="credentials-stats"
        ref={statsSectionRef}
        aria-label="David Banks Coaching Credentials and Statistics"
        className="relative border-y border-brand-cardBorder bg-brand-card/75 backdrop-blur-md py-10 sm:py-12 overflow-hidden"
      >
        {/* Subtle background ambient purple glow */}
        <div className="absolute inset-0 bg-radial-purple opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {/* Stat 1: 40+ Years */}
            <div className="stat-card-glow rounded-xl p-3 sm:p-4 group">
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none mb-2">
                <span 
                  className={`counter-stat-years tabular-nums inline-block transition-transform duration-300 group-hover:scale-105 ${statsAnimated ? 'animate-count' : ''}`}
                >
                  <span className="sr-only">40+</span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Years Experience</p>
              <p className="text-[11px] sm:text-xs text-brand-purple-300 font-medium mt-0.5">Competing & Coaching</p>
            </div>

            {/* Stat 2: Top 50 Coach */}
            <div className="stat-card-glow rounded-xl p-3 sm:p-4 group">
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-purple-400 tracking-tight leading-none mb-2">
                <span className="inline-block transition-transform duration-300 group-hover:scale-105 tabular-nums">
                  <span className="text-brand-purple-400 mr-1">Top</span>
                  <span 
                    className={`counter-stat-coach tabular-nums inline-block ${statsAnimated ? 'animate-count' : ''}`}
                  >
                    <span className="sr-only">50</span>
                  </span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Operation 36 Coach</p>
              <p className="text-[11px] sm:text-xs text-brand-purple-300 font-medium mt-0.5">Junior Development Global Honor</p>
            </div>

            {/* Stat 3: 2025 PGA Champion */}
            <div className="stat-card-glow rounded-xl p-3 sm:p-4 group">
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-none mb-2">
                <span 
                  className={`counter-stat-champion tabular-nums inline-block transition-transform duration-300 group-hover:scale-105 ${statsAnimated ? 'animate-count' : ''}`}
                >
                  <span className="sr-only">2025</span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">PGA Champion</p>
              <p className="text-[11px] sm:text-xs text-brand-purple-300 font-medium mt-0.5">Ontario PGA Super Senior Winner</p>
            </div>

            {/* Stat 4: 100% Sensors */}
            <div className="stat-card-glow rounded-xl p-3 sm:p-4 group">
              <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-brand-purple-400 tracking-tight leading-none mb-2">
                <span 
                  className={`counter-stat-sensors tabular-nums inline-block transition-transform duration-300 group-hover:scale-105 ${statsAnimated ? 'animate-count' : ''}`}
                >
                  <span className="sr-only">100%</span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-wider text-brand-muted font-semibold">Sensor Measured</p>
              <p className="text-[11px] sm:text-xs text-brand-purple-300 font-medium mt-0.5">Trackman & 3D Biofeedback</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE DAVID BANKS APPROACH: BRAIN & BODY LEARNING SCIENCE */}
      {/* ========================================================================= */}
      <section id="approach-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-cardBorder text-xs font-semibold text-brand-purple-300">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple-400" />
            <span>The Science of Lasting Progress</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Why Traditional Golf Tips Fail — And Why Our Approach Delivers
          </h2>
          <p className="text-base text-brand-muted leading-relaxed">
            Most golfers spend years chasing fragmented YouTube advice and random driving range tips that fall apart on the first tee box. David applies modern motor skill science: we assess your natural movement patterns, create clear external focus targets, and provide instant biofeedback so your brain learns instinctively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pillar 1 */}
          <div className="p-8 rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple-500/50 transition-all duration-300 group relative">
            <div className="w-12 h-12 rounded-xl bg-brand-purple-950 border border-brand-purple-500/30 flex items-center justify-center text-brand-purple-300 mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-brand-purple-400 uppercase tracking-widest">Step 01</span>
            <h3 className="font-display font-bold text-xl text-white mt-1 mb-3">Individual Diagnosis</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              We never force a robotic "cookie-cutter" swing. Using Trackman and HackMotion, we measure your exact kinematic sequence, identify where energy is bleeding, and isolate your #1 limiting factor.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple-500/50 transition-all duration-300 group relative">
            <div className="w-12 h-12 rounded-xl bg-brand-purple-950 border border-brand-purple-500/30 flex items-center justify-center text-brand-purple-300 mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-brand-purple-400 uppercase tracking-widest">Step 02</span>
            <h3 className="font-display font-bold text-xl text-white mt-1 mb-3">Biofeedback Training</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              Instead of 10 confusing swing thoughts, we use real-time sound cues and ground force mapping. When your wrists and weight transfer into the tour window, you hear it immediately. The body self-organizes faster.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple-500/50 transition-all duration-300 group relative">
            <div className="w-12 h-12 rounded-xl bg-brand-purple-950 border border-brand-purple-500/30 flex items-center justify-center text-brand-purple-300 mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-bold text-brand-purple-400 uppercase tracking-widest">Step 03</span>
            <h3 className="font-display font-bold text-xl text-white mt-1 mb-3">On-Course Transfer</h3>
            <p className="text-sm text-brand-muted leading-relaxed">
              A pretty range swing is useless if it disappears under pressure. Through Operation 36 matches and guided on-course strategy, we bridge the gap between practice and real tournament scoring.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. FLAGSHIP COACHING PROGRAMS */}
      {/* ========================================================================= */}
      <section id="programs-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-400">
              Tailored Programs
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Coaching Designed for Your Specific Stage
            </h2>
            <p className="text-sm text-brand-muted max-w-xl">
              Specialized coaching tracks engineered to give juniors, women golfers, and competitive players maximum measurable progress.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('programs')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-purple-400 hover:text-brand-purple-300 transition-colors"
          >
            <span>View All 6 Programs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {programsData.slice(0, 3).map((prog) => (
            <div
              key={prog.id}
              className="rounded-2xl bg-brand-card border border-brand-cardBorder overflow-hidden flex flex-col justify-between hover:border-brand-purple-500/40 transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="relative h-52 overflow-hidden bg-brand-dark">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-purple-600/90 text-white backdrop-blur-sm border border-brand-purple-400/40">
                      {prog.category === 'junior' ? 'Junior Golf' : prog.category === 'women' ? "Women's Golf" : 'Private Assessment'}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-4 font-display font-extrabold text-xl text-white">
                    ${prog.price} <span className="text-xs font-normal text-brand-muted">CAD</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-purple-300 transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-xs text-brand-purple-300/90 font-medium mt-0.5">{prog.subtitle}</p>
                  </div>

                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                    {prog.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-brand-cardBorder">
                    <span className="text-[11px] font-bold text-brand-light uppercase tracking-wider">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-brand-muted">
                      {prog.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-brand-purple-400 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleProgramSelect(prog.id)}
                  className="w-full py-3 rounded-xl bg-brand-surface hover:bg-brand-purple-600 text-white font-display font-semibold text-xs border border-brand-cardBorder hover:border-brand-purple-500 transition-all flex items-center justify-center gap-2 group-hover:shadow-purple-subtle"
                >
                  <span>View Details & Register</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE TECHNOLOGY SUITE (TRACKMAN, HACKMOTION, BODITRAK) */}
      {/* ========================================================================= */}
      <section id="tech-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-brand-card to-brand-surface border border-brand-cardBorder p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle flare */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-400">
                Tour-Level Sensor Suite
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                PGA Tour Technology in Burlington, Ontario
              </h2>
              <p className="text-sm text-brand-muted">
                We combine the world's three most advanced golf diagnostic technologies to eliminate guesswork and accelerate muscle memory.
              </p>

              {/* Tabs */}
              <div className="inline-flex p-1.5 rounded-xl bg-brand-dark border border-brand-cardBorder mt-4">
                {(['trackman', 'hackmotion', 'boditrak'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTechTab(tab)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all capitalize ${
                      activeTechTab === tab
                        ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                        : 'text-brand-muted hover:text-white'
                    }`}
                  >
                    {tab === 'trackman' ? 'Trackman 4' : tab === 'hackmotion' ? 'HackMotion 3D' : 'BodiTrak AISensor'}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Details Display */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple-950/80 border border-brand-purple-500/40 text-xs text-brand-purple-300 font-semibold">
                  <span>{techDetails[activeTechTab].badge}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  {techDetails[activeTechTab].title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  Used by Tiger Woods, Rory McIlroy, and top PGA Tour coaches worldwide. Now calibrated for your swing right here in Burlington.
                </p>

                <div className="space-y-2.5 pt-2">
                  {techDetails[activeTechTab].points.map((pt, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-brand-light">
                      <div className="w-5 h-5 rounded-full bg-brand-purple-600/20 text-brand-purple-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setCurrentPage('booking')}
                    className="px-6 py-3 rounded-xl bg-brand-purple-600 hover:bg-brand-purple-500 text-white font-display font-semibold text-xs transition-all flex items-center gap-2 shadow-purple-glow"
                  >
                    <span>Book a Sensor Diagnostic Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-brand-cardBorder shadow-2xl h-80 sm:h-96">
                  <img
                    src={techDetails[activeTechTab].image}
                    alt={techDetails[activeTechTab].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-brand-card/90 backdrop-blur-md border border-brand-cardBorder flex items-center justify-between z-30">
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {techDetails[activeTechTab].name}
                      </span>
                      <span className="text-[11px] text-brand-purple-300">
                        Live Data Capture & Visual Replay
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Active Lab
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. MEET DAVID BANKS (BIO TEASER) */}
      {/* ========================================================================= */}
      <section id="coach-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-cardBorder shadow-2xl">
              <img
                src="/images/coach_david_banks.jpg"
                alt="David Banks - PGA Coach"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 p-4 sm:p-5 rounded-2xl bg-brand-card/90 backdrop-blur-md border border-white/10 shadow-lg">
                <span className="font-display font-extrabold text-xl text-white block">David Banks</span>
                <span className="text-xs text-brand-purple-300 font-medium">
                  2025 Ontario PGA Champion | Teacher of the Year Finalist
                </span>
                <div className="pt-2 mt-2 flex items-center justify-between text-[11px] text-brand-muted border-t border-white/10">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-brand-purple-400 shrink-0" />
                    <span>Burlington, Ontario</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3 h-3 text-brand-purple-400 shrink-0" />
                    <span>40+ Years in Golf</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-cardBorder text-xs font-semibold text-brand-purple-300">
              <Users className="w-3.5 h-3.5 text-brand-purple-400" />
              <span>Meet Your Head Coach</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              40+ Years of Competing at the Highest Level & Coaching Others to Win
            </h2>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              "I have spent over four decades on golf courses, in tournament pressure cookers, and beside golfers of every background. What drives me every single day is seeing the joy when a junior golfer flushes their first clean iron shot, when a woman golfer confidently steps up to a corporate tournament, or when a senior golfer recaptures 15 yards of lost distance."
            </p>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              David’s unique distinction is blending competitive playing acumen—proven by capturing the <strong className="text-white">2025 Ontario PGA Super Senior Championship</strong>—with an evidence-based coaching methodology as an Ontario PGA Teacher of the Year finalist.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-brand-card border border-brand-cardBorder">
                <span className="text-xs font-bold text-white block">Individual Blueprint</span>
                <p className="text-xs text-brand-muted mt-1">Built around your flexibility, biomechanics, and goals.</p>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-card border border-brand-cardBorder">
                <span className="text-xs font-bold text-white block">Lifelong Enjoyment</span>
                <p className="text-xs text-brand-muted mt-1">Enjoying the process of improvement on the course.</p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setCurrentPage('about')}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-purple-400 hover:text-brand-purple-300 transition-colors"
              >
                <span>Read David's Full Bio & Story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. STUDENT SUCCESS & TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-400">
            Proven Golfer Results & Handicap Reductions
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Loved by Golfers Across Burlington, Oakville & Hamilton
          </h2>
          <p className="text-sm text-brand-muted">
            See how structured coaching and motor learning changed the game for our students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-brand-card border border-brand-cardBorder flex flex-col justify-between hover:border-brand-purple-500/40 transition-all duration-300 shadow-md"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-brand-surface text-[11px] font-semibold text-emerald-400 border border-emerald-500/20">
                  {item.handicapChange}
                </div>

                <p className="text-xs text-brand-light/90 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-brand-cardBorder mt-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border border-brand-purple-500/30"
                />
                <div>
                  <h4 className="font-bold text-xs text-white">{item.name}</h4>
                  <p className="text-[11px] text-brand-muted">{item.role}</p>
                  <p className="text-[10px] text-brand-purple-300">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setCurrentPage('testimonials')}
            className="inline-flex items-center gap-2 text-xs font-semibold text-brand-purple-400 hover:text-brand-purple-300"
          >
            <span>Read All Verified Student Reviews</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. BURLINGTON LOCAL CALL TO ACTION BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl bg-gradient-to-r from-brand-purple-950 via-brand-card to-brand-purple-950 border border-brand-purple-500/40 p-8 sm:p-14 text-center relative overflow-hidden shadow-purple-glow">
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="px-3.5 py-1.5 rounded-full bg-brand-purple-600/30 border border-brand-purple-400/30 text-xs font-semibold text-brand-purple-200">
              Burlington, Oakville & Hamilton
            </span>

            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Ready to Stop Guessing and Start Playing Your Best Golf?
            </h2>

            <p className="text-sm sm:text-base text-brand-purple-100/90 leading-relaxed max-w-2xl mx-auto">
              Book a comprehensive 1-on-1 assessment with David Banks. We’ll analyze your swing on Trackman and HackMotion, identify your lowest-hanging fruit, and give you a blueprint to lower scores this season.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('booking')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-brand-dark font-display font-bold text-sm hover:bg-brand-purple-100 transition-all shadow-xl active:scale-95"
              >
                Schedule Your Assessment Now
              </button>

              <a
                href="tel:905-464-7777"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-surface/80 hover:bg-brand-surface text-white font-display font-semibold text-sm border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-purple-300" />
                <span>Direct Line: 905-464-7777</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
