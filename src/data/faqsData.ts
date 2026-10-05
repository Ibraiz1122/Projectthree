export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'beginners' | 'tech' | 'juniors';
}

export const faqsData: FAQItem[] = [
  {
    category: 'general',
    question: 'Where are lessons and coaching sessions conducted?',
    answer: 'Coaching sessions are held at our premier golf training facility in Burlington, Ontario—conveniently accessible for golfers across Oakville, Hamilton, and the greater Halton/Wentworth regions. In season, we utilize pristine outdoor grass tees, dedicated short-game greens, and championship courses for on-course strategy. Year-round, our high-tech indoor simulator bays feature Trackman 4 radar, BodiTrak pressure mapping, and HackMotion 3D sensors.'
  },
  {
    category: 'beginners',
    question: 'Do I need my own golf clubs to get started?',
    answer: 'Not at all! For beginners, juniors, and first-time women clinic participants, David provides appropriately sized premium fitting clubs free of charge for your initial assessment. Once we understand your swing speed and motor patterns, David can provide unbiased recommendations for equipment that truly matches your biomechanics.'
  },
  {
    category: 'tech',
    question: 'What is motor skill science and why is it better than traditional golf tips?',
    answer: 'Traditional golf coaching overwhelms you with static body positions ("keep your head down", "take the club back inside"). Modern motor skill science recognizes that the human brain learns movement dynamically through task constraints and external targets. By combining clear visual targets with real-time biofeedback (audio cues from HackMotion and ground pressure from BodiTrak), your nervous system naturally organizes the most efficient, powerful swing without confusion.'
  },
  {
    category: 'juniors',
    question: 'How does the Operation 36 program work for my child?',
    answer: 'Operation 36 is the #1 junior development model in the world. Instead of frustrating kids on a full 6,000-yard course, juniors start 25 yards from the hole with the mission to shoot 36 (even par) for 9 holes. Once they shoot 36 or better, they graduate to 50 yards, then 100, 150, 200, and full tee boxes. It builds incredible short game, scoring mentality, and high self-esteem.'
  },
  {
    category: 'general',
    question: 'How do I book a lesson or register for an upcoming clinic?',
    answer: 'You can book directly through our online Booking System on this website, call or text David directly at 905-464-7777, or send an email to davidbanksgolf@gmail.com. We offer flexible weekday, evening, and weekend time slots.'
  },
  {
    category: 'tech',
    question: 'Can HackMotion or Trackman help fix my slice?',
    answer: 'Yes! Over 80% of slices are caused by an open clubface relative to the swing path, which is directly controlled by the lead wrist angle at the top and impact. With HackMotion biofeedback, you hear an audio tone the exact second your wrist reaches the correct tour-proven angle. Most students see immediate ball flight straightness in their very first session.'
  }
];
