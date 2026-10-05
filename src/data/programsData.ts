import type { CoachingProgram } from '../types';

export const programsData: CoachingProgram[] = [
  {
    id: 'junior-academy',
    title: 'Junior Golf Development Academy',
    category: 'junior',
    subtitle: 'From First Swing to Competitive Excellence',
    duration: '8-Week Semester (Weekly 90-Min Sessions)',
    price: 495,
    priceDetails: 'Includes Operation 36 app access, bag tags, and bi-weekly matches',
    popular: true,
    idealFor: 'Ages 7–17 of all skill levels, from beginners to junior tournament players',
    description: 'A scientifically structured junior development pathway led by a Top 50 Operation 36 Coach. We combine motor skill training, game-based learning, and on-course 9-hole challenges so juniors develop genuine love and lasting competence for the sport.',
    features: [
      'Top 50 Operation 36 progression curriculum',
      'Bi-weekly 9-hole matches starting at 25 yards from the green',
      'Fundamental movement skills, speed training, and balance',
      'BodiTrak ground force & HackMotion junior wrist tracking',
      'Dedicated parent portal app to track real-time level progress',
      'Low student-to-coach ratio (Max 6:1)'
    ],
    technologyUsed: ['Operation 36 App', 'HackMotion Junior Sensor', 'Flightscope Radar', 'BodiTrak AISensor'],
    image: '/images/junior_golf_academy.jpg'
  },
  {
    id: 'womens-initiative',
    title: "Women's Golf Confidence Initiative",
    category: 'women',
    subtitle: 'Learn the Game. Own the Course. Zero Intimidation.',
    duration: '6-Week Program (Weekly 75-Min Sessions)',
    price: 385,
    priceDetails: 'Small supportive cohorts of 4 to 6 women',
    popular: true,
    idealFor: 'Women golfers seeking a welcoming, non-judgmental, and highly effective learning environment',
    description: 'Designed specifically to eliminate golf intimidation and build repeatable, effortless swings. David applies brain-friendly motor learning principles so you develop instinctive ball striking, solid short game, and on-course etiquette in a supportive, fun group.',
    features: [
      'Tailored biomechanics for female swing mechanics and clubhead speed',
      'Stress-free putting and chipping mastery drills',
      'Fairway woods and driver launch optimization',
      'On-course navigation, scoring strategies, and rules made simple',
      'High-speed video swing analysis with David Banks',
      'Complementary post-session coffee & social wrap-up'
    ],
    technologyUsed: ['Trackman Launch Monitor', 'High-Speed Casio Slow-Mo', 'BodiTrak Pressure Mat'],
    image: '/images/womens_golf_initiative.jpg'
  },
  {
    id: 'private-tech-assessment',
    title: 'High-Performance 1-on-1 Assessment',
    category: 'private',
    subtitle: 'Comprehensive Biofeedback & Kinematic Roadmap',
    duration: '90 Minutes Comprehensive Session',
    price: 195,
    priceDetails: 'Includes full digital report, 3D data capture, and customized training drills',
    popular: true,
    idealFor: 'Golfers of any handicap who want to diagnose swing flaws with scientific certainty',
    description: 'No guesswork. In this deep-dive assessment, David analyzes your swing using the same sensor technology trusted on the PGA Tour. We pinpoint the exact kinematic sequence leaks in your swing and build a prioritized, step-by-step pathway to permanent improvement.',
    features: [
      'Full Trackman launch monitor ball & club data breakdown',
      'HackMotion 3D wrist sensor biofeedback (flexion/extension & radial/ulnar)',
      'BodiTrak pressure mapping to verify ground force transfer',
      'High-speed multi-angle video capture with David Banks voiceover',
      'Customized drill library delivered to your phone',
      'Clear, actionable 30-day practice prescription'
    ],
    technologyUsed: ['Trackman 4', 'HackMotion 3D Sensor', 'BodiTrak AISensor', 'Flightscope X3'],
    image: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'op36-adult-mastery',
    title: 'Operation 36 Adult Mastery Cohort',
    category: 'op36',
    subtitle: 'Play 9 Holes from 25 Yards to Even Par',
    duration: '10-Week Semester with Weekly Coaching & Bi-Weekly 9-Hole Challenges',
    price: 620,
    priceDetails: 'Includes 10 coaching classes and 5 on-course scoring events',
    idealFor: 'Adult golfers stuck shooting in the 90s or 100s who want to learn how to actually score',
    description: 'Most golfers fail because they practice on the driving range without learning how to finish holes. The Operation 36 model starts you 25 yards from the green with the goal of shooting 36 for 9 holes. Once you pass, you move back to 50, 100, 150, and full tee boxes.',
    features: [
      'Revolutionary reverse-engineering course strategy',
      'Weekly structured practice sessions focusing on scoring clubs',
      'Bi-weekly 9-hole on-course testing under realistic conditions',
      'Mobile app integration for handicap tracking and progress levels',
      'Peer community of golfers at your exact skill stage',
      'Guided course management by Ontario PGA Champion David Banks'
    ],
    technologyUsed: ['Operation 36 Scoring Platform', 'BodiTrak Mat', 'Short-Game Wedge Matrix'],
    image: 'https://images.unsplash.com/photo-1593111774240-d529f12cf4bb?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'sensor-biofeedback-lab',
    title: 'HackMotion & BodiTrak Sensor Intensive',
    category: 'tech',
    subtitle: 'Real-Time Audio Biofeedback for Faster Motor Learning',
    duration: '60 Minutes Deep-Dive Sensor Lab',
    price: 150,
    priceDetails: 'Ideal for golfers fighting a slice, hook, or inconsistent contact',
    idealFor: 'Players struggling with clubface control, early extension, or inconsistent impact',
    description: 'Human motor learning accelerates up to 3x faster with real-time biofeedback. By combining HackMotion audio cues (buzzing when wrist angles match tour standards) and BodiTrak live pressure trace, your brain instinctively adjusts without overthinking technical jargon.',
    features: [
      'Direct HackMotion wrist angle calibration at address, top, and impact',
      'Eliminate slice-causing cupped wrists through auditory tone biofeedback',
      'BodiTrak Center of Pressure (COP) velocity optimization',
      'Side-by-side comparison with PGA Tour kinematic averages',
      'Personalized tactile feel drills for home and driving range practice'
    ],
    technologyUsed: ['HackMotion Pro 3D Sensor', 'BodiTrak AISensor Vector Mat'],
    image: '/images/hackmotion_sensor_lab.jpg'
  },
  {
    id: 'on-course-coaching',
    title: 'On-Course Scoring & Strategy Session',
    category: 'private',
    subtitle: 'Transfer Range Skills to Real Course Pressure',
    duration: '9 Holes (Approx. 2.5 Hours)',
    price: 275,
    priceDetails: 'Includes green fee, cart, and post-round statistical review',
    idealFor: 'Intermediate & advanced players who strike the ball well on the range but struggle on the course',
    description: 'David walks alongside you for 9 holes, analyzing your pre-shot routine, target selection, lie assessments, wind calculations, and psychological composure under pressure. You will learn to think like a tournament champion and shave 4 to 8 strokes without changing your swing mechanics.',
    features: [
      'Comprehensive dispersion and club selection strategy',
      'Uneven lies, rough, and fairway bunker execution',
      'Green reading and lag putting distance control',
      'Pre-shot routine mental rehearsal protocol',
      'Strokes Gained breakdown post-round summary'
    ],
    technologyUsed: ['Laser Rangefinder with Slope & Wind', 'Strokes Gained Analysis App'],
    image: '/images/on_course_playing_lesson.jpg'
  }
];
