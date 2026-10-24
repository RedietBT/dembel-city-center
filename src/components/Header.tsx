'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import {
  Menu,
  X,
  Compass,
  ShoppingBag,
  Layers,
  Tag,
  MapPin,
  Briefcase,
  UserPlus,
  Sparkles,
  Globe,
  Phone
} from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/stores', label: t.nav.stores },
    { href: '/floors', label: t.nav.floors },
    { href: '/offers', label: t.nav.offers },
    { href: '/tour', label: t.nav.tour },
    { href: '/visit', label: t.nav.visit },
    { href: '/contact', label: t.nav.contact }
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 text-slate-800 border-b border-slate-200/90'
          : 'bg-white/90 backdrop-blur-sm py-4 text-slate-800 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo with elegant navy & gold */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C9A24B] rounded-xl p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#031955] to-[#0E4C92] p-0.5 shadow-xs transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <span className="font-black text-sm tracking-wider text-[#031955]">
                  DCC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight leading-tight text-[#031955] group-hover:text-[#0E4C92] transition-colors">
                {language === 'am' ? 'ደመበል ሲቲ ሴንተር' : 'Dembel City Center'}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A24B] font-semibold hidden sm:inline">
                Addis Ababa • Africa Avenue
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Clean, Minimalist, Simple */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm transition-all duration-150 ${
                    active
                      ? 'text-[#031955] font-extrabold bg-blue-50/80 shadow-2xs'
                      : 'text-slate-600 hover:text-[#031955] hover:bg-slate-50 font-medium'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Subtle Language Switcher & Register Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Minimalist Language Switcher */}
            <div className="flex items-center bg-slate-100 rounded-full p-0.5 border border-slate-200/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-all duration-150 ${
                  language === 'en'
                    ? 'bg-white text-[#031955] shadow-xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('am')}
                className={`px-3 py-1 rounded-full transition-all duration-150 ${
                  language === 'am'
                    ? 'bg-white text-[#031955] shadow-xs font-bold'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
                aria-label="Switch to Amharic"
              >
                አማ
              </button>
            </div>

            {/* Simple VIP Register Link */}
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-[#031955] hover:bg-[#0E4C92] text-white shadow-xs active:scale-95 transition-all duration-150"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#DFBE72]" />
              <span>{t.nav.register}</span>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 border border-slate-200 text-[#12427D] sm:hidden flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'አማ' : 'EN'}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#12427D] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  active
                    ? 'bg-blue-50 text-[#12427D] font-bold'
                    : 'text-slate-700 hover:text-[#12427D] hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-xs text-slate-500">
              <span>{language === 'am' ? 'ቋንቋ ይምረጡ' : 'Select Language'}:</span>
              <div className="flex items-center bg-slate-100 rounded-full p-0.5 border border-slate-200 text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'en' ? 'bg-white text-[#12427D] font-bold shadow-xs' : 'text-slate-500'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('am')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'am' ? 'bg-white text-[#12427D] font-bold shadow-xs' : 'text-slate-500'
                  }`}
                >
                  አማርኛ
                </button>
              </div>
            </div>

            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-[#12427D] text-white shadow-xs flex items-center justify-center gap-2"
            >
              <UserPlus className="w-4 h-4" />
              <span>{t.nav.register}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
