import React from 'react';
import type { NavPage } from '../types';
import { CheckCircle2, Target, Heart, ArrowRight, Phone, MapPin, Clock, Trophy, ShieldCheck } from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: NavPage) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const credentials = [
    {
      title: '2025 Ontario PGA Super Senior Champion',
      org: 'PGA of Ontario',
      desc: 'Active tournament champion proving competitive strategy, mental composure, and physical longevity on the golf course.',
      badge: 'Championship Title'
    },
    {
      title: 'Ontario PGA Teacher of the Year Finalist',
      org: 'PGA of Canada',
      desc: 'Recognized by peers and the professional golf association for excellence, innovation, and measurable student development.',
      badge: 'Peer Recognition'
    },
    {
      title: 'Top 50 Operation 36 Coach Worldwide',
      org: 'Operation 36 Global Network',
      desc: 'Elite global honor for junior golf development and structured on-course mastery progression.',
      badge: 'Global Award'
    },
    {
      title: 'Certified AISensor Specialist (BodiTrak)',
      org: 'BodiTrak Sports Science',
      desc: 'Certified in ground reaction force transfer, center of pressure mapping, and vertical ground thrust kinetics.',
      badge: 'Biomechanics Certified'
    },
    {
      title: 'Certified HackMotion 3D Sensor Specialist',
      org: 'HackMotion',
      desc: 'Expertise in lead and trail wrist kinematics (flexion/extension, ulnar/radial deviation) for tour-level face control.',
      badge: '3D Biofeedback'
    },
    {
      title: 'Trackman & Flightscope Radar Experienced',
      org: 'Dual Radar Flight Dynamics',
      desc: 'Over a decade of ball flight radar calibration, club path optimization, and smash factor diagnosis.',
      badge: 'Telemetry Pro'
    }
  ];

  return (
    <div className="space-y-24 py-6">
      {/* ========================================================================= */}
      {/* 1. HERO BIO HEADER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-brand-cardBorder shadow-2xl">
              <img
                src="/images/coach_david_banks.jpg"
                alt="David Banks - Head Coach"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-brand-card/90 backdrop-blur-md border border-brand-cardBorder space-y-2">
                <span className="font-display font-extrabold text-2xl text-white block">
                  David Banks
                </span>
                <p className="text-xs text-brand-purple-300 font-medium">
                  Head Coach | 2025 Ontario PGA Champion
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-brand-muted border-t border-brand-cardBorder">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-brand-purple-400 shrink-0" />
                    <span>Burlington, Ontario</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-brand-purple-400 shrink-0" />
                    <span>40+ Years in Golf</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-cardBorder text-xs font-semibold text-brand-purple-300">
              <Trophy className="w-3.5 h-3.5 text-brand-purple-400" />
              <span>40+ Years of Dedication to the Game</span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight leading-tight">
              Passionate About Helping Golfers Find True Joy and Success
            </h1>

            <p className="text-base text-brand-muted leading-relaxed">
              Welcome to David Banks Golf. With over <strong className="text-white">40 years of experience</strong> both competing at the championship level and coaching golfers of all walks of life, my mission is simple: to eliminate confusion, make practice enjoyable, and help you shoot lower scores on the course.
            </p>

            <p className="text-base text-brand-muted leading-relaxed">
              Too often, golf instruction is bogged down by overwhelming technical jargon, static positions, and unrealistic swing models. My approach is grounded in how human beings actually learn motor skills: through clear sensory feedback, task-focused constraints, and a prioritized pathway tailored to your physical capabilities.
            </p>

            <div className="p-4 rounded-xl bg-brand-card border border-brand-purple-500/30 space-y-2">
              <span className="text-xs font-bold text-brand-purple-300 uppercase tracking-wider block">
                David's Core Coaching Belief:
              </span>
              <p className="text-sm text-white italic">
                “Every golfer has an optimal swing already inside their biomechanics. Our job is not to build a generic robot swing, but to remove the leaks that prevent your natural athleticism from delivering the clubface squarely to the ball.”
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('booking')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white font-display font-semibold text-xs shadow-purple-glow hover:opacity-90 transition-all flex items-center gap-2"
              >
                <span>Book a Session with David</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:905-464-7777"
                className="px-6 py-3.5 rounded-xl bg-brand-surface border border-brand-cardBorder text-white text-xs font-semibold hover:bg-brand-surface/80 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-purple-400" />
                <span>Call 905-464-7777</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CREDENTIALS & ACHIEVEMENTS GRID */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-400">
            Validated Authority
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Accreditations & Professional Honors
          </h2>
          <p className="text-sm text-brand-muted">
            Recognized both for competitive championship performance and advanced instructional science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-brand-card border border-brand-cardBorder hover:border-brand-purple-500/50 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-brand-purple-950 text-brand-purple-300 border border-brand-purple-500/30">
                    {cred.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-brand-purple-400" />
                </div>

                <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-purple-300 transition-colors">
                  {cred.title}
                </h3>
                <p className="text-xs text-brand-purple-400 font-medium">{cred.org}</p>
                <p className="text-xs text-brand-muted leading-relaxed">{cred.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. COACHING PHILOSOPHY DEEP DIVE */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-card border border-brand-cardBorder p-8 sm:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-400">
                Instructional Methodology
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                How Brain & Body Learning Science Transforms Your Swing
              </h2>
              <p className="text-sm text-brand-muted leading-relaxed">
                When you try to consciously micromanage your elbows, hips, wrists, and head all during a 1.2-second swing, the brain suffers from cognitive overload.
              </p>
              <p className="text-sm text-brand-muted leading-relaxed">
                David's teaching philosophy leverages <strong className="text-white">Differential Learning and Task Constraints</strong>. We set up environments and real-time auditory/visual biofeedback that allow your nervous system to discover the correct movement spontaneously. Once your brain feels the correct kinematic sequencing, it stays with you for life.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-light">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Overthinking:</strong> Focus on external intent and ball reaction rather than 20 mechanical checkmarks.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-light">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple-400 shrink-0 mt-0.5" />
                  <span><strong>Immediate Feedback Loop:</strong> HackMotion audio tones buzz the split-second your wrist hits the correct angle.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-light">
                  <CheckCircle2 className="w-4 h-4 text-brand-purple-400 shrink-0 mt-0.5" />
                  <span><strong>High-Pressure Transfer:</strong> Practice protocols that simulate real tournament and weekend wager pressure.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-brand-surface border border-brand-cardBorder space-y-3">
                <div className="flex items-center gap-2 text-brand-purple-400 font-bold text-sm">
                  <Target className="w-4 h-4" />
                  <span>Junior Development Specialization</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  As a Top 50 Operation 36 Coach, David has guided hundreds of junior golfers from initial curiosity to regional championship trophies, keeping it fun and confidence-building at every step.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-brand-surface border border-brand-cardBorder space-y-3">
                <div className="flex items-center gap-2 text-brand-purple-400 font-bold text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Women Golfer Development</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  Dedicated clinics tailored to build effortless clubhead speed, solid short game, and complete confidence on the course in an encouraging, welcoming community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-12">
        <div className="p-10 rounded-2xl bg-brand-card border border-brand-cardBorder space-y-4 max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Start Your Pathway with Coach David Banks
          </h3>
          <p className="text-sm text-brand-muted max-w-xl mx-auto">
            Experience the difference that 40 years of championship experience and modern sports science can make in your game.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('booking')}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 text-white font-display font-semibold text-xs shadow-purple-glow hover:opacity-90 transition-all"
            >
              Book an Assessment in Burlington, ON
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
