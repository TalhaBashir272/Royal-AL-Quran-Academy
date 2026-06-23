import { Award, UserCheck, Languages, Clock, Users, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function WhyChooseUs() {
  // Mapping of static icon names to Lucide icon components
  const iconMap: Record<string, any> = {
    Award: Award,
    UserCheck: UserCheck,
    Languages: Languages,
    Clock: Clock,
    Users: Users
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-[#011c0f] border-t border-royal-gold/10 relative overflow-hidden">
      {/* Decorative floral background vectors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-royal-gold text-[11px] font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="h-4 w-4" />
            <span>EXCELLENCE IN PEDAGOGY</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Why Choose <span className="text-royal-gold">Royal Al Quran</span> Academy
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="text-emerald-100/70 text-sm sm:text-base leading-relaxed">
            We operate under standard traditional guidelines backed by modern digital interaction platforms to provide the most comfortable and scientifically efficient Islamic education.
          </p>
        </div>

        {/* Feature Cards Grid - Designed with rounded white cards and dark green circular icons */}
        <div id="why-choose-us-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-center">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComponent = iconMap[item.iconName] || Award;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white p-7 shadow-xl shadow-emerald-950/20 hover:shadow-2xl hover:shadow-royal-gold/10 hover:-translate-y-1.5 transition-all duration-300 border border-emerald-900/10 flex flex-col justify-between items-start"
              >
                {/* Decorative Subtle Corner Gradient inside white cards */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-royal-gold/10 to-transparent rounded-tr-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-100 opacity-60" />

                {/* Left Accent Bar */}
                <div className="absolute top-8 bottom-8 left-0 w-1 bg-gradient-to-b from-emerald-800 to-royal-gold rounded-r-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Dark Green Circular Icon representation */}
                  <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#022c1d] text-royal-gold shadow-md shadow-emerald-950/10 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>

                  <h3 className="font-serif font-bold text-emerald-950 text-lg group-hover:text-[#022c1d] transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-sm text-emerald-900/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                {/* Footer anchor */}
                <div className="w-full mt-6 pt-4 border-t border-emerald-900/5 flex items-center justify-between text-xs text-emerald-900/40">
                  <span>CLASSROOM METRIC</span>
                  <span className="font-mono text-royal-gold font-semibold group-hover:text-emerald-850">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
