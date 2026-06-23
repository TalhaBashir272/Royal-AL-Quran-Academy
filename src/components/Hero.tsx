import { motion } from 'motion/react';
import { Sparkles, BookOpen, UserCheck, Video, Laptop, GraduationCap, Volume2, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onOpenModal: (type?: 'trial' | 'regular') => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  // Sound waves animation bars helper
  const soundBars = Array.from({ length: 8 });

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-[#01140a] via-[#022413] to-[#01170c] overflow-hidden">
      
      {/* Decorative Gold Light Beams & Islamic Geometrics Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]" />
        
        {/* Soft rotating geometric pattern */}
        <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full text-royal-gold opacity-30">
            <polygon points="50,0 65,35 100,50 65,65 50,100 35,65 0,50 35,35" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <polygon points="50,10 60,40 90,50 60,60 50,90 40,60 10,50 40,40" fill="none" stroke="currentColor" strokeWidth="0.3" strokeDasharray="2,2" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-royal-gold/10 border border-royal-gold/20 text-royal-gold text-xs font-semibold uppercase tracking-wider"
            >
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span>Premium Islamic Online Education</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                Learn Quran,<br />
                <span className="bg-gradient-to-r from-amber-200 via-royal-gold to-amber-400 bg-clip-text text-transparent text-glow">
                  Change Your Life
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-emerald-100/80 font-normal leading-relaxed max-w-xl">
                Quality Islamic Education from the Comfort of Your Home. Connect live with certified global experts in a secure, friendly, and motivational structure.
              </p>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
              id="hero-cta-group"
            >
              <button
                onClick={() => onOpenModal('regular')}
                id="hero-enroll-btn"
                className="px-8 py-4 text-xs tracking-wider uppercase font-bold text-emerald-950 bg-gradient-to-r from-amber-300 via-royal-gold to-amber-500 rounded-xl shadow-lg shadow-royal-gold/10 hover:shadow-royal-gold/25 hover:brightness-105 active:scale-98 transition-all duration-200 cursor-pointer text-center"
              >
                Enroll Now
              </button>
              <button
                onClick={() => onOpenModal('trial')}
                id="hero-trial-btn"
                className="px-8 py-4 text-xs tracking-wider uppercase font-bold text-royal-gold hover:text-white bg-emerald-950/40 border border-royal-gold/50 rounded-xl hover:border-royal-gold hover:bg-emerald-900/40 active:scale-98 transition-all duration-200 cursor-pointer text-center"
              >
                3 Days Free Trial Classes
              </button>
            </motion.div>

            {/* Quick trust indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center space-x-4 pt-1 text-emerald-200/50 text-xs"
            >
              <div className="flex text-royal-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>Trusted by 2,000+ Students Worldwide (4.9/5)</span>
            </motion.div>
          </div>

          {/* Right Image / Interactive Virtual Classroom Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
              className="relative w-full max-w-md lg:max-w-none mx-auto aspect-[4/3] rounded-2xl border border-royal-gold/20 p-3 bg-emerald-950/40 backdrop-blur-sm overflow-hidden shadow-2xl"
              id="hero-classroom-container"
            >
              {/* Islamic arched background border inside the frame */}
              <div className="absolute inset-0 border border-emerald-850 rounded-xl pointer-events-none" />
              
              {/* Virtual Classroom Feed */}
              <div className="relative h-full w-full rounded-lg overflow-hidden bg-gradient-to-b from-[#021d10] to-[#01140b] grid grid-rows-12 gap-2 p-2">
                
                {/* 1. Header of the screen */}
                <div className="row-span-2 bg-[#022c1d]/60 border border-royal-gold/10 rounded-lg px-3 py-1 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-ping" />
                    <span className="font-mono text-[9px] uppercase tracking-wider text-royal-gold font-bold">1:1 LIVE LESSON</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Laptop className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-[10px] text-emerald-200">Tajweed Articulation</span>
                  </div>
                </div>

                {/* 2. Feeds Splitting */}
                <div className="row-span-10 grid grid-cols-2 gap-2">
                  
                  {/* Left Box: Female Teacher (Live stream mockup) */}
                  <div className="relative rounded-lg overflow-hidden border border-emerald-800/40 bg-emerald-950 flex flex-col justify-end">
                    {/* Fake WebCam Video representing Teacher wearing hijab and headset */}
                    <div className="absolute inset-0 bg-[#022312] flex flex-col items-center justify-center p-3 text-center">
                      <div className="relative mb-2">
                        {/* Elegant circle with vector representing sister wearing hijab */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-b from-amber-500 to-amber-700 p-0.5 shadow-md">
                          <div className="w-full h-full rounded-full bg-emerald-900 border border-white/10 flex items-center justify-center overflow-hidden">
                            {/* SVG vector child representation wearing hijab */}
                            <svg className="w-10 h-10 text-emerald-200 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              {/* Hijab silhouette */}
                              <path d="M12 2C8 2 5 5 5 10C5 15 8 20 12 21C16 20 19 15 19 10C19 5 16 2 12 2Z" fill="currentColor" opacity="0.15" />
                              <path d="M12 4C10.5 4 8.5 5.5 8.5 8C8.5 9.5 9.5 11 12 11C14.5 11 15.5 9.5 15.5 8C15.5 5.5 13.5 4 12 4Z" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M12 11C10 11 6 13 6 15V18C6 19 10 20 12 20C14 20 18 19 18 18V15C18 13 14 11 12 11Z" stroke="currentColor" strokeWidth="1.5" />
                            </svg>
                          </div>
                        </div>
                        {/* Mini modern headset indicator */}
                        <div className="absolute -bottom-1 -right-1 bg-royal-gold p-1 rounded-full text-emerald-950">
                          <Volume2 className="h-2 w-2" />
                        </div>
                      </div>
                      
                      <span className="text-[10px] font-medium text-white tracking-wide">Ustadha Maryam</span>
                      <span className="text-[8px] text-emerald-400">Al-Azhar Certified</span>
                    </div>

                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-emerald-900/60 backdrop-blur-md border border-royal-gold/10 text-[8px] text-royal-gold uppercase tracking-widest font-mono">
                      USTADHA (TEACHER)
                    </div>
                  </div>

                  {/* Right Box: Child Student Yusuf reading Quran */}
                  <div className="relative rounded-lg overflow-hidden border border-emerald-800/40 bg-emerald-950 flex flex-col justify-end">
                    {/* Fake WebCam Video representing Muslim boy reading Quran on Rehal */}
                    <div className="absolute inset-0 bg-[#022312] flex flex-col items-center justify-center p-3 text-center">
                      <div className="relative mb-2">
                        {/* Student Avatar */}
                        <div className="w-14 h-14 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-700 p-0.5 shadow-md">
                          <div className="w-full h-full rounded-full bg-emerald-950 border border-white/10 flex items-center justify-center overflow-hidden">
                            <svg className="w-8 h-8 text-emerald-300 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              {/* Boy with traditional prayer cap */}
                              <path d="M12 5C10.3 5 9 6.3 9 8C9 9.7 10.3 11 12 11C13.7 11 15 9.7 15 8C15 6.3 13.7 5 12 5Z" stroke="currentColor" />
                              <path d="M7 6C7 6 9.5 4 12 4C14.5 4 17 6 17 6" stroke="currentColor" strokeWidth="1.5" />
                              <path d="M17.5 15C17.5 13 15 11.5 12 11.5C9 11.5 6.5 13 6.5 15V19H17.5V15Z" stroke="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </div>
                      
                      <span className="text-[10px] font-medium text-white tracking-wide">Bilal Ahmad (Age 8)</span>
                      <span className="text-[8px] text-emerald-400">USA Student</span>

                      {/* Animated Sound Wave react feed */}
                      <div className="flex items-center justify-center gap-0.5 h-3 mt-1.5">
                        {soundBars.map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              height: i % 2 === 0 ? [2, 10, 2] : [4, 12, 4]
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 0.6 + (i * 0.1),
                              ease: 'easeInOut'
                            }}
                            className="w-0.5 bg-royal-gold rounded-full"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-emerald-900/60 backdrop-blur-md border border-royal-gold/10 text-[8px] text-royal-gold uppercase tracking-widest font-mono">
                      STUDENT
                    </div>
                  </div>
                </div>

                {/* Floating overlay Quran illustration in middle */}
                <div className="absolute bottom-4 inset-x-4 h-1/4 bg-emerald-950/90 border border-royal-gold/30 rounded-lg p-2 flex items-center justify-between shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="p-1 rounded bg-[#011409] border border-royal-gold/20 text-royal-gold">
                      <BookOpen className="h-4 w-4" />
                    </div>
                    <div>
                      <h5 className="font-serif text-[10px] font-bold text-white leading-tight">Yusuf's Rehal Desktop</h5>
                      <p className="text-[8px] text-royal-gold tracking-wide">Tajweed rules active</p>
                    </div>
                  </div>
                  {/* Arabic calligraphic font look */}
                  <div className="pr-1 text-right text-glow">
                    <span className="font-serif text-xs font-bold text-amber-200 block" dir="rtl">
                      اقْرَأْ بِاسْمِ رَبِّكَ
                    </span>
                    <span className="text-[7.5px] text-emerald-200 block mt-0.5 text-center">Ayah Al-Alaq</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>

        {/* Feature Icons Grid bar: 4 key features requested */}
        <div id="hero-features-bar" className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Learn Quran with Tajweed",
              desc: "Accurate pronunciation rules",
              icon: BookOpen,
              number: "01"
            },
            {
              title: "Expert Male & Female Teachers",
              desc: "Graduates of Al-Azhar, Ijazah certified",
              icon: GraduationCap,
              number: "02"
            },
            {
              title: "One-to-One Private Classes",
              desc: "100% attention tailored for you",
              icon: Video,
              number: "03"
            },
            {
              title: "Personalized Learning",
              desc: "Adapt courses for kids & adults",
              icon: UserCheck,
              number: "04"
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.15) }}
                className="relative overflow-hidden rounded-xl border border-royal-gold/10 hover:border-royal-gold/30 bg-emerald-950/20 hover:bg-emerald-950/50 p-5 group transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-lg bg-royal-gold/10 text-royal-gold group-hover:scale-105 transition-transform duration-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs font-bold text-royal-gold/20 select-none">{item.number}</span>
                </div>
                <h4 className="font-serif font-bold text-white text-sm mt-4 group-hover:text-royal-gold transition-colors duration-200">{item.title}</h4>
                <p className="text-xs text-emerald-100/60 mt-1 leading-relaxed">{item.desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-royal-gold transition-all duration-300 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
