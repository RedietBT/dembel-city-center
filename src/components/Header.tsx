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
  Globe
} from 'lucide-react';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/stores', label: t.nav.stores, icon: ShoppingBag },
    { href: '/floors', label: t.nav.floors, icon: Layers },
    { href: '/offers', label: t.nav.offers, icon: Tag },
    { href: '/tour', label: t.nav.tour, icon: Compass },
    { href: '/visit', label: t.nav.visit, icon: MapPin },
    { href: '/careers', label: t.nav.careers, icon: Briefcase }
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#031955]/95 backdrop-blur-md shadow-lg py-3 text-white border-b border-white/10'
          : 'bg-[#031955] text-white py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C9A24B] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C9A24B] via-[#DFBE72] to-[#0E4C92] p-[2px] shadow-md transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#031955] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-lg tracking-wider text-[#C9A24B] group-hover:text-white transition-colors">
                  DCC
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight leading-tight text-white group-hover:text-[#DFBE72] transition-colors">
                {language === 'am' ? 'ደመበል ሲቲ ሴንተር' : 'Dembel City Center'}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#C9A24B] font-medium hidden sm:inline">
                Addis Ababa • Ethiopia
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    active
                      ? 'bg-white/15 text-[#DFBE72] shadow-inner font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <item.icon className={`w-4 h-4 ${active ? 'text-[#C9A24B]' : 'text-slate-300'}`} />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Language Toggle & Register Button */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full p-0.5 border border-white/15 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-[#C9A24B] text-[#031955] shadow-sm font-bold'
                    : 'text-slate-200 hover:text-white'
                }`}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('am')}
                className={`px-3 py-1 rounded-full transition-all duration-200 ${
                  language === 'am'
                    ? 'bg-[#C9A24B] text-[#031955] shadow-sm font-bold'
                    : 'text-slate-200 hover:text-white'
                }`}
                aria-label="Switch to Amharic"
              >
                አማ
              </button>
            </div>

            {/* Register CTA */}
            <Link
              href="/register"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] shadow-md hover:shadow-lg hover:brightness-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-[#031955]" />
              {t.nav.register}
            </Link>
          </div>

          {/* Mobile Menu & Language Toggle button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'am' : 'en')}
              className="px-2.5 py-1 text-xs font-bold rounded-md bg-white/10 border border-white/20 text-[#DFBE72] sm:hidden flex items-center gap-1"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              {language === 'en' ? 'አማ' : 'EN'}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#C9A24B]"
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
        <div className="lg:hidden bg-[#031955] border-t border-white/10 px-4 pt-4 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  active
                    ? 'bg-white/15 text-[#DFBE72] font-semibold'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon className={`w-5 h-5 ${active ? 'text-[#C9A24B]' : 'text-slate-400'}`} />
                {item.label}
              </Link>
            );
          })}

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between px-2 text-sm text-slate-300">
              <span>{language === 'am' ? 'ቋንቋ ይምረጡ' : 'Select Language'}:</span>
              <div className="flex items-center bg-white/10 rounded-full p-0.5 border border-white/20 text-xs">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'en' ? 'bg-[#C9A24B] text-[#031955] font-bold' : 'text-slate-200'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('am')}
                  className={`px-3 py-1 rounded-full ${
                    language === 'am' ? 'bg-[#C9A24B] text-[#031955] font-bold' : 'text-slate-200'
                  }`}
                >
                  አማርኛ
                </button>
              </div>
            </div>

            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl font-bold bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] shadow-md flex items-center justify-center gap-2"
            >
              <UserPlus className="w-5 h-5" />
              {t.nav.register}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
