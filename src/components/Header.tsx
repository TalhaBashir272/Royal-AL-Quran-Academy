import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, BookOpen, Compass, Award, ShieldCheck, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenModal: (type?: 'trial' | 'regular') => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses', icon: BookOpen },
    { name: 'Why Us', href: '#why-choose-us', icon: Award },
    { name: 'Platforms', href: '#platforms', icon: ShieldCheck },
    { name: 'Our Process', href: '#how-it-works', icon: Compass },
    { name: 'Reviews', href: '#testimonials', icon: Heart },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
    <>
      <header
        id="academy-header"
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-emerald-950/95 backdrop-blur-md border-b border-royal-gold/20 py-3 shadow-lg shadow-emerald-950/50'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center space-x-2 sm:space-x-3 group"
            >
              <div className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 via-royal-gold to-amber-600 shadow-md group-hover:scale-105 transition-transform duration-300 border-2 border-amber-200">
                <Sparkles className="h-5 w-5 text-emerald-950 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-[#fbbf24] text-base sm:text-lg tracking-tight uppercase leading-none text-glow">
                  Royal Al Quran
                </span>
                <span className="text-[9px] sm:text-[10px] text-emerald-300 uppercase tracking-[0.2em] font-bold mt-1 opacity-90">
                  Premium Academy
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-8 uppercase tracking-widest text-xs font-semibold">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-emerald-100/80 hover:text-royal-gold transition-colors duration-200 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-royal-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA Button & Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onOpenModal('trial')}
                id="header-cta-btn"
                className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-extrabold uppercase tracking-widest text-emerald-950 bg-gradient-to-r from-amber-400 to-[#fbbf24] rounded-full shadow-lg shadow-amber-900/20 hover:scale-105 hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Enroll Now
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                id="mobile-menu-toggle"
                className="lg:hidden text-emerald-100 hover:text-royal-gold focus:outline-none p-1"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div id="mobile-menu-portal" className="fixed inset-0 z-30 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm"
            />

            {/* Content panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-b from-emerald-950 to-[#011a14] border-l border-royal-gold/20 p-6 flex flex-col justify-between shadow-2xl h-full"
            >
              <div className="space-y-6 pt-16">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 p-0.5">
                    <Sparkles className="h-4 w-4 text-emerald-950" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-[#fbbf24] text-sm uppercase text-glow">Royal Al Quran</h4>
                    <p className="text-[9px] text-emerald-300 uppercase tracking-widest font-mono">Premium Academy</p>
                  </div>
                </div>

                <div className="flex flex-col space-y-4">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-emerald-100/90 hover:text-royal-gold hover:bg-emerald-900/40 transition-all duration-200"
                      >
                        <Icon className="h-4 w-4 text-royal-gold" />
                        <span className="text-xs uppercase font-semibold tracking-wider">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 pt-10 border-t border-emerald-900/60">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenModal('trial');
                  }}
                  className="w-full bg-gradient-to-r from-amber-400 to-[#fbbf24] text-emerald-950 font-bold py-3.5 px-4 rounded-full text-center text-xs tracking-widest uppercase shadow-md hover:scale-101 transition-all duration-250 cursor-pointer"
                >
                  3 Days Free Trial
                </button>
                <div className="text-center">
                  <span className="text-[10px] text-emerald-200/40 uppercase tracking-widest font-bold">Safe • Friendly • Supportive</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
