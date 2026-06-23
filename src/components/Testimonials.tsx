import { Star, Sparkles, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

function getInitials(name: string): string {
  const cleanName = name.replace(/^(Brother|Sister|Dr\.|Mr\.|Mrs\.)\s+/i, '');
  return cleanName.trim().charAt(0).toUpperCase() || name.charAt(0).toUpperCase();
}

function getGradient(name: string): string {
  const firstChar = getInitials(name);
  const code = firstChar.charCodeAt(0) % 3;
  if (code === 0) {
    return 'from-amber-400 to-[#fbbf24] border-amber-200/40 text-emerald-950';
  } else if (code === 1) {
    return 'from-amber-500 to-yellow-600 border-amber-300/40 text-emerald-950';
  } else {
    return 'from-emerald-500 to-[#059669] border-emerald-400/40 text-white';
  }
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#011409] border-t border-royal-gold/10 relative overflow-hidden">
      
      {/* Visual glowing decors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-[10%] w-80 h-80 bg-royal-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-royal-gold text-[11px] font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="h-4 w-4" />
            <span>GLOBAL STUDENT DIARIES</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Loved by <span className="text-royal-gold">Our Noble</span> Community
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="text-emerald-100/70 text-sm sm:text-base leading-relaxed">
            Discover how Royal Al Quran Academy is changing lives across the globe. Read first-hand feedback from loving parents and dedicated adult students.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div id="testimonials-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 hover:brightness-105 transition-all duration-300">
          {TESTIMONIALS.map((testimonial) => {
            return (
              <div
                key={testimonial.id}
                className="group relative flex flex-col justify-between rounded-xl border border-royal-gold/10 bg-gradient-to-b from-[#022414] to-[#01190e] p-6 lg:p-8 hover:border-royal-gold/30 shadow-xl transition-all duration-300"
              >
                {/* Quotation icon watermarked on top corner */}
                <div className="absolute top-6 right-6 text-emerald-950/40 group-hover:text-royal-gold/10 transition-colors duration-300">
                  <Quote className="h-12 w-12 rotate-180 transform" />
                </div>

                <div>
                  {/* Star Rating badges */}
                  <div className="flex items-center space-x-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-royal-gold fill-current" />
                    ))}
                  </div>

                  {/* Testimonial written quote text */}
                  <p className="text-emerald-100/80 text-[13px] sm:text-sm leading-relaxed italic relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Consumer identification details */}
                <div className="mt-8 pt-5 border-t border-emerald-950 flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getGradient(testimonial.name)} flex items-center justify-center border-2 shadow-md shrink-0 select-none`}>
                    <span className="font-serif font-extrabold text-base tracking-tight">
                      {getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-xs sm:text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-[10px] text-royal-gold tracking-wide mt-0.5 uppercase">
                      {testimonial.role}
                    </p>
                    <p className="text-[9px] text-emerald-200/50 uppercase mt-0.5 font-mono">
                      {testimonial.relation}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
