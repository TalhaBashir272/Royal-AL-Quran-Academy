import { Video, Laptop, PhoneCall, Facebook, Instagram, Music, MessageSquare, ShieldCheck, Heart, Users, Sparkles, AlertCircle } from 'lucide-react';
import { PLATFORMS } from '../data';

export default function Platforms() {
  // Map string icon name to active components
  const iconMap: Record<string, any> = {
    Video: Video,
    Laptop: Laptop,
    PhoneCall: PhoneCall,
    Facebook: Facebook,
    Instagram: Instagram,
    Music: Music,
    MessageSquare: MessageSquare
  };

  return (
    <section id="platforms" className="py-20 lg:py-28 bg-[#011409] border-t border-royal-gold/10 relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(6,78,59,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Interactive Connectivity Platforms */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-royal-gold text-[11px] font-semibold tracking-[0.2em] uppercase">
                <Sparkles className="h-4 w-4" />
                <span>UNLIMITED GLOBAL ACCESS</span>
                <Sparkles className="h-4 w-4" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
                Learn Wherever You Are, <br />
                <span className="text-royal-gold">On any Preferred App</span>
              </h2>
              <p className="text-sm text-emerald-100/70 max-w-lg leading-relaxed">
                Connect seamlessly using any of your existing installed communication tools. Our servers and state-certified educators adapt completely to your technological comfort zone. No new software setups required!
              </p>
            </div>

            {/* Platforms interactive Grid */}
            <div id="platforms-grid" className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-4">
              {PLATFORMS.map((platform) => {
                const IconComponent = iconMap[platform.iconName] || MessageSquare;
                const hasUrl = 'url' in platform && platform.url;

                if (hasUrl) {
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center p-5 rounded-xl border border-emerald-900/40 bg-emerald-950/20 hover:bg-emerald-950/50 hover:border-royal-gold/30 shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className={`p-3 rounded-full ${platform.color} group-hover:scale-110 group-hover:bg-royal-gold group-hover:text-emerald-950 transition-all duration-300 mb-3`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold text-emerald-100 tracking-wide group-hover:text-white">
                        {platform.name}
                      </span>
                      <span className="text-[9px] text-[#fbbf24] mt-1 uppercase font-mono tracking-wider font-extrabold animation-pulse">
                        {platform.subtext || 'Open Platform'}
                      </span>
                    </a>
                  );
                }

                return (
                  <div
                    key={platform.name}
                    className="group flex flex-col items-center justify-center p-5 rounded-xl border border-emerald-900/40 bg-emerald-950/20 hover:bg-emerald-950/50 hover:border-royal-gold/30 shadow-md transition-all duration-300"
                  >
                    <div className={`p-3 rounded-full ${platform.color} group-hover:scale-110 group-hover:bg-royal-gold group-hover:text-emerald-950 transition-all duration-300 mb-3`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-semibold text-emerald-100 tracking-wide group-hover:text-white">
                      {platform.name}
                    </span>
                    <span className="text-[9px] text-emerald-200/40 mt-1 uppercase font-mono">
                      {platform.subtext || 'Instant Call'}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Requested Side Card */}
          <div className="lg:col-span-5">
            <div
              id="safety-side-card"
              className="relative p-8 rounded-2xl border-2 border-royal-gold/30 bg-gradient-to-b from-[#032e18] to-[#011c0f] shadow-2xl overflow-hidden"
            >
              {/* Islamic Pattern Backdrops */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                  <path d="M0,0 L100,100 M100,0 L0,100" stroke="currentColor" strokeWidth="1" />
                </svg>
              </div>

              {/* Gold Crown Royal visual badge */}
              <div className="flex justify-center mb-6">
                <div className="relative p-4 rounded-full bg-royal-gold/10 text-royal-gold border border-royal-gold/20 shadow-md">
                  <ShieldCheck className="h-10 w-10" />
                  <div className="absolute -top-1 -right-1 bg-emerald-900 px-1.5 py-0.5 rounded text-[8px] font-mono font-bold text-emerald-300 border border-emerald-800">
                    SECURED
                  </div>
                </div>
              </div>

              {/* Central Copy requested */}
              <div className="text-center space-y-4">
                <h3 className="font-serif font-bold text-2xl text-white tracking-wide">
                  Female and Male Teachers Available
                </h3>

                <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-royal-gold to-transparent mx-auto" />

                <p className="text-xs uppercase tracking-[0.2em] font-medium text-royal-gold flex items-center justify-center gap-1.5">
                  Safe <span className="text-emerald-500">•</span> Friendly <span className="text-emerald-500">•</span> Supportive
                </p>

                <p className="text-sm font-semibold text-white tracking-wide uppercase pt-1">
                  Learning Environment
                </p>
              </div>

              {/* Supplementary trust list to make it look exceptionally high-end */}
              <div className="mt-8 pt-6 border-t border-emerald-900/60 space-y-3.5">
                {[
                  { title: "Sisters Private Classes", desc: "Dedicated certified Ustadhas (female teachers) for young girls and adult women." },
                  { title: "Safe digital monitoring", desc: "No personal numbers shared. Recorded classes for student safety." },
                  { title: "Friendly pedagogical tone", desc: "Strict anti-rudeness filter. Tutors are trained in stress-free encouraging behaviors." }
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-left">
                    <div className="p-1 rounded bg-[#011409] text-royal-gold border border-royal-gold/15 mt-0.5">
                      <Heart className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-emerald-100">{point.title}</h4>
                      <p className="text-[11px] text-emerald-100/60 leading-relaxed mt-0.5">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
