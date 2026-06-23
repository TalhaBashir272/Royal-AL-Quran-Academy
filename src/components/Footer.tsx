import React from 'react';
import { Sparkles, Mail, Phone, MapPin, ArrowRight, BookOpen, Clock, Heart, Award } from 'lucide-react';

interface FooterProps {
  onOpenModal: (type?: 'trial' | 'regular') => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="footer" className="bg-[#011007] border-t border-royal-gold/15 relative overflow-hidden">
      
      {/* 1. Final Call-to-Action banner block inside the footer for ultimate luxury styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="relative rounded-2xl border border-royal-gold/30 bg-gradient-to-r from-[#033119] via-[#022413] to-[#011c0f] p-8 sm:p-12 shadow-2xl text-center overflow-hidden">
          
          {/* Subtle gold circles overlay background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="#D4AF37" strokeWidth="0.2" strokeDasharray="2,2" />
            </svg>
          </div>

          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-2 text-royal-gold text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="h-4 w-4 animate-spin-slow" />
              <span>SPOTS FILLING FAST FOR THE CURRENT MONTH</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
              Start your Quran journey today with <span className="text-royal-gold text-glow">3 Days Free Trial</span> Classes.
            </h2>
            
            <p className="text-emerald-100/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Experience our premium interaction first hand. Absolutely no fees, commitments, or credit cards required. Just request and learn!
            </p>

            <div className="pt-4">
              <button
                onClick={() => onOpenModal('trial')}
                id="footer-cta-action-btn"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-bold uppercase tracking-wider text-emerald-950 bg-gradient-to-r from-amber-300 via-royal-gold to-amber-500 rounded-xl shadow-lg hover:shadow-royal-gold/30 hover:brightness-105 active:scale-98 transition-all duration-300 cursor-pointer"
              >
                <span>Book My Free Slots</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Directory / Navigation Map footer columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-12 border-b border-emerald-950">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-4 text-left">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-amber-300 via-royal-gold to-amber-600 shadow-md">
              <Sparkles className="h-5 w-5 text-emerald-950" />
            </div>
            <div>
              <span className="font-serif font-bold text-white text-base sm:text-lg tracking-wide uppercase block">
                Royal Al Quran
              </span>
              <span className="text-[10px] text-royal-gold uppercase tracking-widest font-semibold block leading-none">
                Academy
              </span>
            </div>
          </a>
          <p className="text-emerald-100/60 text-xs leading-relaxed">
            The world's premium Islamic online academy providing authentic Quran recitation, Tajweed fluency, and comprehensive Islamic learning courses directly to mature households worldwide.
          </p>
          <div className="text-[11px] text-emerald-100/40">
            <span>Safe | Friendly | Supportive Learning Environment</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-2 space-y-4 text-left">
          <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider relative pb-2 border-b border-emerald-950">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-xs">
            {[
              { name: 'Courses Grid', href: '#courses' },
              { name: 'Why Academia', href: '#why-choose-us' },
              { name: 'Communications', href: '#platforms' },
              { name: 'Methodology', href: '#how-it-works' },
              { name: 'Reviews Panel', href: '#testimonials' }
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-emerald-100/60 hover:text-royal-gold transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses List Column */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider relative pb-2 border-b border-emerald-950">
            Programs Offered
          </h4>
          <ul className="space-y-2.5 text-xs text-emerald-100/60">
            <li>Quran Reading (Noorani Qaida)</li>
            <li>Quran Memorization (Hifz)</li>
            <li>Tajweed & Tarteel</li>
            <li>Translation & Tafseer</li>
            <li>Islamic Studies</li>
            <li>Duas & Masnoon Prayers</li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-3 space-y-4 text-left">
          <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider relative pb-2 border-b border-emerald-950">
            Global Admission Office
          </h4>
          <ul className="space-y-3.5 text-xs text-emerald-100/60">
            <li className="flex items-start space-x-3">
              <Phone className="h-4 w-4 text-royal-gold mt-0.5 shrink-0" />
              <div className="space-y-1">
                <a href="tel:+18009027872" className="hover:text-emerald-100 transition-colors block">
                  +1 (800) 902-QURAN
                </a>
                <a href="https://wa.me/923420061867" target="_blank" rel="noopener noreferrer" className="text-[10px] text-green-400 font-semibold block hover:text-emerald-300 transition-colors">
                  🟢 WhatsApp: +92 342 0061867
                </a>
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Mail className="h-4 w-4 text-royal-gold mt-0.5 shrink-0" />
              <a href="mailto:royalalquranacademy@gmail.com" className="hover:text-emerald-100 transition-colors truncate">
                royalalquranacademy@gmail.com
              </a>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-royal-gold mt-0.5 shrink-0" />
              <span>Islamabad I-8 Markaz</span>
            </li>
          </ul>
        </div>

      </div>

      {/* 3. Sub-footer copyrights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/40">
        <span>&copy; {currentYear} Royal Al Quran Academy. All noble rights reserved.</span>
        <div className="flex space-x-4">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-royal-gold">Privacy Policy</a>
          <span>•</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-royal-gold">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
