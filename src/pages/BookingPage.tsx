import React, { useState } from 'react';
import type { NavPage, BookingFormData } from '../types';
import { programsData } from '../data/programsData';
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  CheckCircle,
  CreditCard,
  Phone,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
  Award
} from 'lucide-react';

interface BookingPageProps {
  setCurrentPage: (page: NavPage) => void;
  selectedProgramId?: string;
}

export const BookingPage: React.FC<BookingPageProps> = ({
  setCurrentPage,
  selectedProgramId
}) => {
  const [step, setStep] = useState<number>(1);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState<BookingFormData>(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    return {
      programId: selectedProgramId || programsData[2].id, // default to 1-on-1 assessment
      date: targetDate.toISOString().split('T')[0], // 2 days ahead
      timeSlot: '10:00 AM - 11:30 AM',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      skillLevel: 'intermediate',
      handicap: '',
      primaryGoal: '',
      notes: '',
      paymentMethod: 'card'
    };
  });

  const availableTimeSlots = [
    '09:00 AM - 10:30 AM',
    '10:30 AM - 12:00 PM',
    '01:00 PM - 02:30 PM',
    '03:00 PM - 04:30 PM',
    '05:00 PM - 06:30 PM',
    '06:30 PM - 08:00 PM (Indoor Simulator Bay)'
  ];

  const currentSelectedProgram = programsData.find((p) => p.id === formData.programId) || programsData[0];

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      setBookingSuccess(true);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-surface border border-brand-cardBorder text-xs font-semibold text-brand-purple-300">
          <CalendarIcon className="w-3.5 h-3.5 text-brand-purple-400" />
          <span>Interactive Online Booking System</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
          Schedule Your Golf Session
        </h1>
        <p className="text-sm text-brand-muted max-w-xl mx-auto">
          Book your personalized assessment or coaching program directly with Ontario PGA Champion David Banks.
        </p>
      </div>

      {bookingSuccess ? (
        /* Booking Confirmation Card */
        <div className="max-w-xl mx-auto p-8 rounded-3xl bg-brand-card border border-brand-purple-500/50 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto ring-8 ring-emerald-500/10">
            <CheckCircle className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Booking Confirmed
            </span>
            <h2 className="font-display font-bold text-2xl text-white">
              You're on the Schedule, {formData.firstName}!
            </h2>
            <p className="text-xs text-brand-muted max-w-md mx-auto">
              A calendar invite and preparation checklist have been emailed to{' '}
              <strong className="text-white">{formData.email}</strong>. Coach David has been notified.
            </p>
          </div>

          {/* Booking Summary Box */}
          <div className="p-4 rounded-xl bg-brand-surface border border-brand-cardBorder text-left space-y-2 text-xs">
            <div className="flex justify-between border-b border-brand-cardBorder pb-2">
              <span className="text-brand-muted">Program:</span>
              <span className="font-bold text-white text-right">{currentSelectedProgram.title}</span>
            </div>
            <div className="flex justify-between border-b border-brand-cardBorder pb-2">
              <span className="text-brand-muted">Date & Time:</span>
              <span className="font-semibold text-brand-purple-300">
                {formData.date} at {formData.timeSlot}
              </span>
            </div>
            <div className="flex justify-between border-b border-brand-cardBorder pb-2">
              <span className="text-brand-muted">Location:</span>
              <span className="text-white">Burlington Golf Facility, ON</span>
            </div>
            <div className="flex justify-between border-b border-brand-cardBorder pb-2">
              <span className="text-brand-muted">Total:</span>
              <span className="font-bold text-white">${currentSelectedProgram.price} CAD</span>
            </div>
            <div className="flex justify-between pt-1">
              <span className="text-brand-muted">Payment:</span>
              <span className="font-semibold text-emerald-400 capitalize">
                {formData.paymentMethod === 'card' ? 'Credit Card Confirmed' : formData.paymentMethod === 'interac' ? 'Interac Pending' : 'Due at Session'}
              </span>
            </div>
          </div>

          {/* Need help or change */}
          <div className="pt-2 space-y-3">
            <p className="text-xs text-brand-muted">
              Need to reschedule or have questions before arriving? Call or text David directly:
            </p>
            <a
              href="tel:905-464-7777"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-purple-300 hover:text-white"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>905-464-7777</span>
            </a>
          </div>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={() => {
                setBookingSuccess(false);
                setStep(1);
                setCurrentPage('home');
              }}
              className="px-6 py-2.5 rounded-xl bg-brand-surface hover:bg-white/10 text-white text-xs font-semibold"
            >
              Return Home
            </button>
            <button
              onClick={() => setCurrentPage('programs')}
              className="px-6 py-2.5 rounded-xl bg-brand-purple-600 hover:bg-brand-purple-500 text-white text-xs font-semibold shadow-purple-subtle"
            >
              Explore More Programs
            </button>
          </div>
        </div>
      ) : (
        /* Multi-Step Booking Wizard */
        <div className="rounded-3xl bg-brand-card border border-brand-cardBorder p-6 sm:p-10 shadow-2xl">
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[
                { s: 1, label: 'Program' },
                { s: 2, label: 'Date & Time' },
                { s: 3, label: 'Your Profile' },
                { s: 4, label: 'Confirmation' },
              ].map((item) => (
                <div key={item.s} className="flex flex-col items-center">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                      step >= item.s
                        ? 'bg-brand-purple-600 text-white shadow-purple-subtle'
                        : 'bg-brand-surface text-brand-muted border border-brand-cardBorder'
                    }`}
                  >
                    {item.s}
                  </div>
                  <span className={`text-[11px] mt-1.5 font-medium ${step >= item.s ? 'text-white' : 'text-brand-muted'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-3 max-w-2xl mx-auto h-1 bg-brand-surface rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-purple-600 to-brand-purple-400 transition-all duration-300"
                style={{ width: `${((step - 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          <form onSubmit={handleNextStep}>
            {/* ========================================================================= */}
            {/* STEP 1: SELECT PROGRAM */}
            {/* ========================================================================= */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Select Your Coaching Program</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Choose the session format that aligns with your current golfing goals.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {programsData.map((prog) => {
                    const isSelected = formData.programId === prog.id;
                    return (
                      <div
                        key={prog.id}
                        onClick={() => setFormData({ ...formData, programId: prog.id })}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-brand-purple-950/40 border-brand-purple-500 ring-2 ring-brand-purple-500/30'
                            : 'bg-brand-surface border-brand-cardBorder hover:border-brand-purple-500/40'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple-400 block mb-1">
                              {prog.category}
                            </span>
                            <h4 className="font-bold text-sm text-white">{prog.title}</h4>
                            <p className="text-xs text-brand-muted mt-1 line-clamp-2">{prog.subtitle}</p>
                          </div>
                          <span className="font-display font-extrabold text-sm text-white whitespace-nowrap pl-2">
                            ${prog.price} <span className="text-[10px] font-normal text-brand-muted">CAD</span>
                          </span>
                        </div>
                        <div className="mt-3 text-[11px] text-brand-purple-300 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{prog.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 2: DATE & TIME SLOT */}
            {/* ========================================================================= */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Choose Date & Preferred Time</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Lessons are conducted at our Burlington facility with flexible weekday & weekend slots.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date Input */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-white">Select Date</label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500 text-sm font-medium"
                    />
                    <p className="text-[11px] text-brand-muted">
                      Indoor bay and outdoor facilities available year-round in Burlington.
                    </p>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-2">
                    <label className="block text-xs font-semibold text-white">Select Time Slot</label>
                    <div className="grid grid-cols-1 gap-2">
                      {availableTimeSlots.map((slot) => {
                        const isSelected = formData.timeSlot === slot;
                        return (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setFormData({ ...formData, timeSlot: slot })}
                            className={`p-2.5 rounded-lg border text-xs text-left font-medium transition-all flex items-center justify-between ${
                              isSelected
                                ? 'bg-brand-purple-600 text-white border-brand-purple-500 shadow-purple-subtle'
                                : 'bg-brand-surface text-brand-light border-brand-cardBorder hover:border-brand-purple-500/40'
                            }`}
                          >
                            <span>{slot}</span>
                            {isSelected && <CheckCircle className="w-3.5 h-3.5" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 3: GOLFER DETAILS & GOALS */}
            {/* ========================================================================= */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Tell Coach David About Your Golf Game</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    This helps David review your background and configure the sensor diagnostics prior to your arrival.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Liam"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Miller"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. liam@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Phone Number (Call or Text) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 905-555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Skill Category</label>
                    <select
                      value={formData.skillLevel}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setFormData({
                          ...formData,
                          skillLevel: e.target.value as BookingFormData['skillLevel']
                        })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    >
                      <option value="beginner">Beginner (Never played / First few rounds)</option>
                      <option value="intermediate">Intermediate (Shoots 90 - 105)</option>
                      <option value="advanced">Advanced (Shoots 78 - 89)</option>
                      <option value="junior">Junior Golfer (Under 18)</option>
                      <option value="competitive">Competitive / Single Digit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white mb-1">Current Handicap (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. 18 or N/A"
                      value={formData.handicap}
                      onChange={(e) => setFormData({ ...formData, handicap: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white mb-1">
                    What is your #1 frustration or goal for this session? *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Slicing my driver off the tee, inconsistent ball striking, short game confidence..."
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-brand-surface border border-brand-cardBorder text-white focus:outline-none focus:border-brand-purple-500"
                  />
                </div>
              </div>
            )}

            {/* ========================================================================= */}
            {/* STEP 4: REVIEW & PAYMENT SELECTION */}
            {/* ========================================================================= */}
            {step === 4 && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-white">Review & Confirm Your Reservation</h3>
                  <p className="text-xs text-brand-muted mt-1">
                    Review your appointment details and select your preferred payment method.
                  </p>
                </div>

                {/* Summary Card */}
                <div className="p-5 rounded-2xl bg-brand-surface border border-brand-cardBorder space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-brand-cardBorder">
                    <div>
                      <span className="text-[10px] font-bold text-brand-purple-400 uppercase">Selected Coaching</span>
                      <h4 className="font-bold text-white text-base">{currentSelectedProgram.title}</h4>
                      <p className="text-xs text-brand-muted">{currentSelectedProgram.duration}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-display font-extrabold text-2xl text-brand-purple-300">
                        ${currentSelectedProgram.price}
                      </span>
                      <span className="text-xs text-brand-muted block">CAD</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-brand-muted">Golfer:</span>{' '}
                      <span className="text-white font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div>
                      <span className="text-brand-muted">Phone:</span>{' '}
                      <span className="text-white font-medium">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-brand-muted">Email:</span>{' '}
                      <span className="text-white font-medium">{formData.email}</span>
                    </div>
                    <div>
                      <span className="text-brand-muted">Date & Time:</span>{' '}
                      <span className="text-brand-purple-300 font-semibold">{formData.date} at {formData.timeSlot}</span>
                    </div>
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="space-y-3">
                  <label className="block text-xs font-semibold text-white">Payment Preference</label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, sub: 'Pay online securely' },
                      { id: 'interac', label: 'Interac e-Transfer', icon: Award, sub: 'davidbanksgolf@gmail.com' },
                      { id: 'at_session', label: 'Pay at Session', icon: User, sub: 'Cash, Card, or Cheque' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, paymentMethod: opt.id as BookingFormData['paymentMethod'] })}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          formData.paymentMethod === opt.id
                            ? 'bg-brand-purple-950/40 border-brand-purple-500 ring-2 ring-brand-purple-500/30'
                            : 'bg-brand-surface border-brand-cardBorder hover:border-brand-purple-500/40'
                        }`}
                      >
                        <opt.icon className="w-4 h-4 text-brand-purple-400 mb-1" />
                        <span className="text-xs font-bold text-white block">{opt.label}</span>
                        <span className="text-[11px] text-brand-muted">{opt.sub}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 p-3 bg-brand-dark/50 rounded-xl border border-brand-cardBorder text-xs text-brand-muted">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Zero risk: 24-hour flexible cancellation policy. Sessions are held at our Burlington facility.
                  </span>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="mt-8 pt-6 border-t border-brand-cardBorder flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="px-5 py-2.5 rounded-xl bg-brand-surface border border-brand-cardBorder text-white text-xs font-semibold hover:bg-brand-surface/80 flex items-center gap-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>
              ) : <div />}

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-brand-purple-600 to-brand-purple-700 hover:from-brand-purple-500 hover:to-brand-purple-600 text-white font-display font-semibold text-xs shadow-purple-glow flex items-center gap-2"
              >
                <span>{step === 4 ? 'Confirm & Reserve Session' : 'Continue to Next Step'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
