import { motion } from 'motion/react';
import { UserPlus, Calendar, Laptop, Award, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Enroll',
      desc: 'Fill out our short 3-Day Trial Request form. Select your preferred timezone, age group, and teacher guidelines without inputting any credit card details.',
      icon: UserPlus
    },
    {
      step: '02',
      title: 'Schedule Class',
      desc: 'Our counselor contacts you via WhatsApp or Email within hours to accommodate your preferred flexible schedule and match you with the perfect educator.',
      icon: Calendar
    },
    {
      step: '03',
      title: 'Start Learning',
      desc: 'Join your live, private 1-to-1 video link on Zoom or Meet. Begin our premium interactive curriculum designed specifically for your tempo.',
      icon: Laptop
    },
    {
      step: '04',
      title: 'Achieve Your Goals',
      desc: 'Master accurate Tajweed rules, memorize Suras, obtain valuable Ijazah certifications, and bring beautiful Islamic values directly into your life.',
      icon: Award
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#011c0f] border-t border-royal-gold/10 relative overflow-hidden">
      
      {/* Background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-royal-gold/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center space-x-2 text-royal-gold text-[11px] font-semibold tracking-[0.2em] uppercase">
            <Sparkles className="h-4 w-4" />
            <span>OUR 4-STEP METHODOLOGY</span>
            <Sparkles className="h-4 w-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            How It <span className="text-royal-gold">Works</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4" />
          <p className="text-emerald-100/70 text-sm sm:text-base leading-relaxed">
            Starting your Quranic studies with us is straightforward, quick, and completely secure. It only takes a single minute to launch.
          </p>
        </div>

        {/* Process Flow Cards Grid */}
        <div id="process-steps-container" className="relative">
          
          {/* Desktop Connecting horizontal line */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-emerald-950 via-royal-gold/30 to-emerald-950 z-0" />

          <div id="process-steps-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="group relative text-center flex flex-col items-center">
                  
                  {/* Step Icon with glowing orb ring */}
                  <div className="relative z-10 flex items-center justify-center w-[4.5rem] h-[4.5rem] rounded-full bg-gradient-to-b from-royal-gold/15 to-transparent border border-royal-gold/25 p-1 group-hover:scale-105 transition-all duration-300">
                    <div className="w-full h-full rounded-full bg-[#022c1d] flex items-center justify-center text-royal-gold">
                      <Icon className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    {/* Badge number indicators */}
                    <div className="absolute -bottom-1 -right-1 bg-royal-gold text-[#011c0f] font-mono text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-4 ring-[#011c0f]">
                      {item.step}
                    </div>
                  </div>

                  {/* Connecting arrow indicator for mobile/tablet flows */}
                  {idx < steps.length - 1 && (
                    <div className="lg:hidden my-4 text-royal-gold/40 flex flex-col items-center justify-center">
                      <ChevronDown className="h-5 w-5 animate-bounce" />
                    </div>
                  )}

                  {/* Desktop small right helper indicator */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:flex items-center absolute top-6 left-[calc(50%+4rem)] w-12 text-royal-gold/20 select-none">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  )}

                  {/* Step Title & Text */}
                  <h3 className="font-serif font-bold text-white text-lg mt-6 group-hover:text-royal-gold transition-colors duration-200">
                    {item.title}
                  </h3>
                  
                  <p className="mt-3 text-xs sm:text-sm text-emerald-100/60 leading-relaxed max-w-xs mx-auto">
                    {item.desc}
                  </p>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
