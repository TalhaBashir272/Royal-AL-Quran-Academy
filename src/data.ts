import { Course, Testimonial, WhyChooseUsItem } from "./types";

export const COURSES: Course[] = [
  {
    id: "quran-reading",
    title: "Quran Reading (Noorani Qaida)",
    description:
      "Perfect for beginners and children. Safely master Arabic pronunciation, letter recognition, and joining rules with classical Noorani Qaida method.",
    duration: "3 - 6 Months",
    level: "Beginner",
    iconName: "BookOpen",
  },
  {
    id: "nazra-quran",
    title: "Nazra Quran (Recitation)",
    description:
      "Read the complete Holy Quran with fluent visual reciting, correct pauses, and elegant flow. Perfect progression program right after completing Noorani Qaida.",
    duration: "6 - 12 Months",
    level: "Beginner to Intermediate",
    iconName: "Compass",
  },
  {
    id: "quran-memorization",
    title: "Quran Memorization (Hifz Program)",
    description:
      "An structured and personalized path to memorize part or the whole Quran. Includes systematic daily revision schedules with master teachers.",
    duration: "Custom Duration",
    level: "All Levels",
    iconName: "Bookmark",
  },
  {
    id: "tajweed-tarteel",
    title: "Tajweed & Tarteel",
    description:
      "Learn classical recitation. Focus heavily on articulation points (Makharij), characteristics of letters, and beautiful melodic rules.",
    duration: "6 - 12 Months",
    level: "Intermediate to Advanced",
    iconName: "Music",
  },
  {
    id: "translation-tafseer",
    title: "Translation & Tafseer",
    description:
      "Understand the depth of Quranic verses. Learn exact word-by-word Arabic translations, context, historical background, and direct live tafseer guides.",
    duration: "12+ Months",
    level: "Advanced",
    iconName: "Globe",
  },
  {
    id: "islamic-studies",
    title: "Islamic Studies",
    description:
      "Comprehensive curriculum covering essential Aqeedah, Fiqh, Seerah (life of the Prophet), Islamic history, ethics, and character building.",
    duration: "Ongoing",
    level: "All Levels",
    iconName: "Map",
  },
  {
    id: "duas-masnoon-prayers",
    title: "Duas & Masnoon Prayers",
    description:
      "Memorize essential daily supplications for dynamic occasions, prayers, salah protocols, and etiquettes that protect and elevate daily actions.",
    duration: "3 Months",
    level: "Beginner",
    iconName: "Heart",
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: "qualified-teachers",
    title: "Qualified & Experienced Teachers",
    description:
      "Certified teachers from Al-Azhar and prominent Islamic universities, exceptionally skilled in pedagogical techniques for kids and adults.",
    iconName: "Award",
  },
  {
    id: "one-to-one",
    title: "One-to-One Private Classes",
    description:
      "100% focused individual attention with live video feeding. Learn at your own pace without the pressure of a full classroom environment.",
    iconName: "UserCheck",
  },
  {
    id: "tajweed-experts",
    title: "Tajweed Experts",
    description:
      "Our educators hold high-level Ijazah certifications and focus extensively on correct pronounciation structure from Day 1.",
    iconName: "Languages",
  },
  {
    id: "flexible-timings",
    title: "Flexible Timings & 24/7 Schedule",
    description:
      "Select class timings that fit perfectly around your school, university, or work constraints. Change your hours whenever necessary.",
    iconName: "Clock",
  },
  {
    id: "kids-adults-welcome",
    title: "Kids & Adults Welcome",
    description:
      "Custom syllabi designed specifically for young children starting from age 4, and highly supportive, respectful modules for mature adults.",
    iconName: "Users",
  },
];

export const PLATFORMS = [
  {
    name: "Zoom",
    iconName: "Video",
    color: "bg-[#2D8CFF]/10 text-[#2D8CFF]",
    url: "https://us05web.zoom.us/j/2249362491?pwd=7zyzz1QLPzaH9oTi9hn5akTw3mTo9a.1",
    subtext: "Instant Call",
  },
  {
    name: "Google Meet",
    iconName: "Laptop",
    color: "bg-[#00897B]/10 text-[#00EC96]",
    url: "https://meet.google.com/eyb-ngcn-aoh",
    subtext: "Instant Call",
  },
  {
    name: "WhatsApp",
    iconName: "PhoneCall",
    color: "bg-[#25D366]/10 text-[#25D366]",
    url: "https://wa.me/923420061867",
    subtext: "Instant Chat",
  },
  {
    name: "Facebook",
    iconName: "Facebook",
    color: "bg-[#1877F2]/10 text-[#1877F2]",
    url: "https://www.facebook.com/share/14fFLgs1HYd/",
    subtext: "Open Platform",
  },
  {
    name: "Instagram",
    iconName: "Instagram",
    color: "bg-[#E1306C]/10 text-[#E1306C]",
    url: "https://www.instagram.com/royalalquranacedmyofficial?utm_source=qr&igsh=ZW42emdtemoyM2w5",
    subtext: "Open Platform",
  },
  {
    name: "TikTok",
    iconName: "Music",
    color: "bg-[#fe2c55]/10 text-[#fe2c55]",
    url: "https://www.tiktok.com/@royalalquranacedmy?_r=1&_t=ZS-97QlfmePVKx",
    subtext: "Open Platform",
  },
  {
    name: "Messenger",
    iconName: "MessageSquare",
    color: "bg-[#006AFF]/10 text-[#006AFF]",
    url: "https://m.me/1225033204016543",
    subtext: "Instant Chat",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Brother Ahmad Mansoor",
    role: "Parent of 8-year old Amina",
    relation: "Houston, USA",
    text: "Royal Al Quran Academy shifted our daughter’s recitation beautifully. Her female teacher is patient, loving, and extremely professional with Tajweed. The transformation in just three months is remarkable!",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "test-2",
    name: "Sister Yasmeen Khan",
    role: "Adult Hifz Student",
    relation: "London, UK",
    text: "I always thought memorizing Quran as a working adult with busy hours was impossible. The flexible schedule and supportive teacher here made it seamless. I have memorized 3 Juz already with Tajweed!",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120",
  },
  {
    id: "test-3",
    name: "Dr. Tariq Al-Sabah",
    role: "Father of Bilal (12) & Safwan (14)",
    relation: "Ontario, Canada",
    text: "Having busy boys, it was hard to find reliable localized Islamic tutors. The One-to-One live classes on Google Meet is standard perfect quality. Correct pronunciation, polite manners, and highly engaging tools.",
    rating: 5,
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120",
  },
];
