import { motion } from 'motion/react';
import { BookOpen, Bookmark, Music, Globe, Map, Heart, Sparkles, Clock, Compass, ArrowRight } from 'lucide-react';
import { COURSES } from '../data';

interface CoursesProps {
  onOpenModal: (type?: 'trial' | 'regular', courseId?: string) => void;
}

export default function Courses({ onOpenModal }: CoursesProps) {
  // Mapper for course icons
  const iconMap: Record<string, any> = {
    BookOpen: BookOpen,
    Bookmark: Bookmark,
    Music: Music,
    Globe: Globe,
    Map: Map,
    Heart: Heart
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-gradient-to-b from-[#011c0f] to-[#011409] border-t border-royal-gold/10 relative overflow-hidden">
      
      {/* Decorative Gold Circles and Sparkles */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-royal-gold/5 rounded-full blur-[80px]" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-royal-gold text-[11px] font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="h-4 w-4" />
            <span>AUTHENTIC CURRICULUM</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Our Elite Online <span className="text-royal-gold">Quran Programs</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="text-emerald-100/75 text-sm sm:text-base leading-relaxed">
            All curriculum pathways are fully structured with formal progress logs, certified syllas, and individual private feedback. Children and adults follow custom tracks.
          </p>
        </div>

        {/* Elegant Cards Grid */}
        <div id="courses-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COURSES.map((course, idx) => {
            const IconComponent = iconMap[course.iconName] || BookOpen;
            return (
              <motion.div
                key={course.id}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative flex flex-col justify-between rounded-xl border border-royal-gold/15 bg-gradient-to-b from-[#032918] to-[#011c10] p-6 lg:p-8 hover:border-royal-gold/40 shadow-xl shadow-black/40 transition-all duration-300"
              >
                {/* Gold glowing top bar hover effect */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-royal-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner Royal Accent Decoration */}
                <div className="absolute top-4 right-4 text-royal-gold/10 group-hover:text-royal-gold/30 transition-colors duration-300">
                  <Sparkles className="h-5 w-5" />
                </div>

                <div>
                  {/* Icon & Metadata */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="p-3.5 rounded-xl bg-royal-gold/10 text-royal-gold border border-royal-gold/10 group-hover:bg-royal-gold group-hover:text-emerald-950 transition-all duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    
                    <div className="flex flex-col items-end space-y-1">
                      <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-emerald-900/60 text-emerald-300 border border-emerald-800/20">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif font-bold text-white text-lg sm:text-xl group-hover:text-royal-gold transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="mt-3 text-sm text-emerald-100/70 leading-relaxed">
                    {course.description}
                  </p>
                </div>

                {/* Card footer: details & Action link */}
                <div className="mt-8 pt-5 border-t border-emerald-900/40 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
                  <div className="flex items-center space-x-2 text-emerald-200/50 text-xs">
                    <Clock className="h-3.5 w-3.5 text-royal-gold" />
                    <span>{course.duration}</span>
                  </div>

                  <button
                    onClick={() => onOpenModal('trial', course.id)}
                    className="inline-flex items-center justify-center space-x-2 text-xs font-semibold uppercase tracking-wider text-royal-gold hover:text-white transition-colors duration-300 group/btn cursor-pointer py-1.5"
                  >
                    <span>Free Trial</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
