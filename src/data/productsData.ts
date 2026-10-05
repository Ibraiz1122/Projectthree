import type { Product } from '../types';

export const productsData: Product[] = [
  {
    id: 'pack-5-lessons',
    name: '5-Lesson High-Performance Package',
    category: 'packages',
    price: 695,
    badge: 'Most Popular',
    description: 'The ultimate structured path to measurable improvement. Includes 5 full 60-minute private coaching sessions with Trackman, HackMotion biofeedback, and BodiTrak ground force integration.',
    features: [
      'Five 60-minute private 1-on-1 sessions with David Banks',
      'Trackman 4 3D radar ball & club kinematics analysis',
      'HackMotion wrist sensor report for clubface control',
      'BodiTrak ground pressure velocity mapping',
      'Customized video recap library sent to your phone after each lesson',
      'Valid for 12 months from purchase date'
    ],
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=600&auto=format&fit=crop',
    inStock: true
  },
  {
    id: 'pack-10-lessons',
    name: '10-Lesson Season-Long Championship Package',
    category: 'packages',
    price: 1295,
    badge: 'Best Value',
    description: 'Comprehensive season-long mentorship designed for players committed to a major handicap breakthrough or tournament preparation.',
    features: [
      'Ten 60-minute private coaching sessions',
      'Includes one 9-hole on-course playing and strategy session',
      'Full sensor suite access (Trackman, HackMotion, BodiTrak)',
      'Quarterly performance and handicap review benchmarks',
      'Direct WhatsApp swing check support between sessions',
      'Complimentary David Banks signature Tour cap'
    ],
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=600&auto=format&fit=crop',
    inStock: true
  },
  {
    id: 'tech-hackmotion-session',
    name: 'HackMotion 3D Wrist Biofeedback Lab (60 Min)',
    category: 'tech',
    price: 165,
    badge: 'PGA Tour Tech',
    description: 'Targeted single-session diagnosis for clubface control. Eliminates the slice, hook, and flip using real-time audio biofeedback.',
    features: [
      'Immediate wrist flexion/extension calibration',
      'Tour player benchmark comparison report',
      'Audio neuro-feedback drills for accelerated muscle memory',
      'Personalized drill prescription for driving range training'
    ],
    image: 'https://images.unsplash.com/photo-1563299796-b729d0af54a5?q=80&w=600&auto=format&fit=crop',
    inStock: true
  },
  {
    id: 'gear-tour-cap',
    name: 'David Banks Golf Performance Tour Cap',
    category: 'gear',
    price: 42,
    description: 'Premium lightweight, moisture-wicking athletic tour cap featuring the iconic David Banks Golf embroidered insignia in electric purple & stealth carbon.',
    features: [
      'Breathable laser-perforated side panels for cool comfort',
      'Custom David Banks Golf 3D raised embroidery',
      'UPF 50+ UV sun protection',
      'Adjustable snapback strap fits all head sizes',
      'Water and sweat repellent finish'
    ],
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop',
    inStock: true
  },
  {
    id: 'gear-microfiber-towel',
    name: 'Tour Waffle-Weave Magnetic Club Towel',
    category: 'gear',
    price: 34,
    description: 'Heavy-duty microfiber waffle golf towel with ultra-strong rare-earth magnet for quick attachment to golf carts and irons.',
    features: [
      'Industrial strength magnetic clip holds fast to carts',
      'Ultra-absorbent deep waffle-weave removes groove dirt effortlessly',
      'High-contrast purple trim with custom David Banks emblem',
      'Lint-free and machine washable'
    ],
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?q=80&w=600&auto=format&fit=crop',
    inStock: true
  },
  {
    id: 'gift-cert-250',
    name: 'David Banks Golf Coaching Gift Certificate',
    category: 'gift',
    price: 250,
    badge: 'Instant Delivery',
    description: 'The ultimate gift for the passionate golfer in your life. Redeemable towards any coaching program, private lesson, or tech sensor assessment.',
    features: [
      'Instant digital certificate delivered to your or recipient’s email',
      'Personalized custom gift message',
      'Redeemable online or in-person at the Burlington coaching facility',
      'Never expires'
    ],
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=600&auto=format&fit=crop',
    inStock: true
  }
];
