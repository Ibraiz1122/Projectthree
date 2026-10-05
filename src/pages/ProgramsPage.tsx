import React, { useState } from 'react';
import type { NavPage } from '../types';
import { programsData } from '../data/programsData';
import { ArrowRight, Sparkles, TrendingDown } from 'lucide-react';

interface ProgramsPageProps {
  setCurrentPage: (page: NavPage) => void;
  setSelectedProgramId: (id: string) => void;
  selectedProgramId?: string;
}

export const ProgramsPage: React.FC<ProgramsPageProps> = ({
  setCurrentPage,
  setSelectedProgramId,
  selectedProgramId
}) => {
  const [filter, setFilter] = useState<'all' | 'junior' | 'women' | 'private' | 'op36' | 'tech'>('all');

  const filteredPrograms = filter === 'all'
    ? programsData
    : programsData.filter((p) => p.category === filter);

  const handleBook = (programId: string) => {
    setSelectedProgramId(programId);
    setCurrentPage('booking');
  };

  const op36Stages = [
    { yard: '25 YDS', level: 'Division 1', desc: 'Putting, chipping, and pitch control. Goal: Shoot 36 on 9 holes.' },
    { yard: '50 YDS', level: 'Division 2', desc: 'Wedge distance control and trajectory control to green targets.' },
    { yard: '100 YDS', level: 'Division 3', desc: 'Full short iron swing mechanics and distance consistency.' },
    { yard: '150 YDS', level: 'Division 4', desc: 'Mid-iron approach shots and green-reading under course conditions.' },
    { yard: '200 YDS', level: 'Division 5', desc: 'Fairway woods and hybrid consistency into long par 4s and par 5s.' },
    { yard: 'FULL TEE', level: 'Division 6', desc: 'Driver accuracy, course strategy, and total championship scoring.' },
  ];

  return (
    <div className="space-y-24 py-6">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-cardBorder text-xs font-semibold text-brand-purple-300">
          <Sparkles className="w-3.5 h-3.5 text-brand-purple-400" />
          <span>Results-Driven Curriculum</span>
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
          Coaching Programs & Lesson Pathways
        </h1>

        <p className="text-base text-brand-muted max-w-2xl mx-auto leading-relaxed">
          From junior beginners to competitive championship players, every program is engineered around motor learning science, clear benchmarks, and real course transfer in Burlington, Ontario.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                : 'bg-brand-surface text-brand-muted hover:text-white border border-brand-cardBorder'
            }`}
          >
            All Programs ({programsData.length})
          </button>
          <button
            onClick={() => setFilter('junior')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'junior'
                ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                : 'bg-brand-surface text-brand-muted hover:text-white border border-brand-cardBorder'
            }`}
          >
            Junior Golf Academy
          </button>
          <button
            onClick={() => setFilter('women')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'women'
                ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                : 'bg-brand-surface text-brand-muted hover:text-white border border-brand-cardBorder'
            }`}
          >
            Women's Golf Initiative
          </button>
          <button
            onClick={() => setFilter('private')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'private'
                ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                : 'bg-brand-surface text-brand-muted hover:text-white border border-brand-cardBorder'
            }`}
          >
            1-on-1 High Performance
          </button>
          <button
            onClick={() => setFilter('tech')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filter === 'tech'
                ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                : 'bg-brand-surface text-brand-muted hover:text-white border border-brand-cardBorder'
            }`}
          >
            Sensor & Tech Labs
          </button>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => {
            const isHighlighted = selectedProgramId === program.id;
            return (
              <div
                key={program.id}
                className={`rounded-2xl bg-brand-card border flex flex-col justify-between overflow-hidden transition-all duration-300 group shadow-lg ${
                  isHighlighted
                    ? 'border-brand-purple-500 ring-2 ring-brand-purple-500/50'
                    : 'border-brand-cardBorder hover:border-brand-purple-500/40'
                }`}
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-brand-dark">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-brand-card/40 to-transparent" />

                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand-purple-600/90 text-white backdrop-blur-sm border border-brand-purple-400/40">
                        {program.category.toUpperCase()}
                      </span>
                      {program.popular && (
                        <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/90 text-brand-dark backdrop-blur-sm">
                          Popular
                        </span>
                      )}
                    </div>

                    <div className="absolute bottom-3 right-4 font-display font-extrabold text-2xl text-white">
                      ${program.price}{' '}
                      <span className="text-xs font-normal text-brand-muted">CAD</span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-display font-bold text-xl text-white group-hover:text-brand-purple-300 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-xs text-brand-purple-400 font-semibold mt-0.5">
                        {program.subtitle}
                      </p>
                    </div>

                    <div className="text-xs text-brand-light font-medium bg-brand-surface p-2.5 rounded-lg border border-brand-cardBorder">
                      <span className="text-brand-muted block text-[10px] uppercase font-bold">
                        Ideal For:
                      </span>
                      {program.idealFor}
                    </div>

                    <p className="text-xs text-brand-muted leading-relaxed">
                      {program.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-brand-cardBorder">
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                        Curriculum Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-brand-muted">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-brand-purple-400 font-bold">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {program.technologyUsed.length > 0 && (
                      <div className="pt-2">
                        <span className="text-[10px] uppercase tracking-wider text-brand-muted font-bold block mb-1.5">
                          Technology Integrated:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {program.technologyUsed.map((tech, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded-md bg-brand-surface text-brand-purple-300 border border-brand-cardBorder"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-2">
                  <button
                    onClick={() => handleBook(program.id)}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white font-display font-semibold text-xs shadow-purple-glow active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Register / Book Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {program.priceDetails && (
                    <p className="text-[10px] text-center text-brand-muted italic">
                      {program.priceDetails}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Operation 36 Explainer Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-brand-card border border-brand-cardBorder p-8 sm:p-12 relative overflow-hidden space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-purple-400">
              The #1 Scoring Framework
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Why Operation 36 Works Like Nothing Else
            </h2>
            <p className="text-sm text-brand-muted">
              Led by Top 50 Coach David Banks. Golfers learn to shoot par (36) for 9 holes by starting 25 yards from the green and working their way back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {op36Stages.map((stg, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-brand-surface border border-brand-cardBorder hover:border-brand-purple-500/50 transition-all space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-extrabold text-lg text-white">
                    {stg.yard}
                  </span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-purple-950 text-brand-purple-300 border border-brand-purple-500/30">
                    {stg.level}
                  </span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  {stg.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-brand-dark/70 border border-brand-cardBorder flex items-center justify-center gap-2 text-xs text-brand-light max-w-xl mx-auto">
            <TrendingDown className="w-4 h-4 text-emerald-400 shrink-0" />
            <span><strong>Proven Result:</strong> Students enrolled in Operation 36 drop their average score by 8.4 strokes within their first 12 weeks of structured play.</span>
          </div>
        </div>
      </section>
    </div>
  );
};
