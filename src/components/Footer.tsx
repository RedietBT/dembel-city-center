'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  LayoutDashboard
} from 'lucide-react';

export default function Footer() {
  const { language, t } = useLanguage();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#031955] text-slate-300 border-t border-white/10 pt-16 pb-12 mt-20 relative overflow-hidden">
      {/* Subtle background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0E4C92]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C9A24B] to-[#DFBE72] p-[2px]">
                <div className="w-full h-full bg-[#031955] rounded-[10px] flex items-center justify-center">
                  <span className="font-extrabold text-lg text-[#C9A24B]">DCC</span>
                </div>
              </div>
              <div>
                <span className="font-bold text-xl text-white tracking-tight">
                  {language === 'am' ? 'ደመበል ሲቲ ሴንተር' : 'Dembel City Center'}
                </span>
                <p className="text-xs text-[#C9A24B] uppercase tracking-wider">
                  Addis Ababa • Ethiopia
                </p>
              </div>
            </Link>

            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              {t.footer.aboutText}
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                <span>Africa Avenue (Bole Road), Olympia, Addis Ababa, Ethiopia</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>Mon – Sun: 8:30 AM – 9:30 PM (Supermarket 7:30 AM)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24B] shrink-0" />
                <span>+251 11 551 0101 / +251 91 122 3344</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/stores" className="hover:text-[#DFBE72] transition-colors">
                  {t.nav.stores}
                </Link>
              </li>
              <li>
                <Link href="/floors" className="hover:text-[#DFBE72] transition-colors">
                  {t.nav.floors}
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-[#DFBE72] transition-colors">
                  {t.nav.offers}
                </Link>
              </li>
              <li>
                <Link href="/tour" className="hover:text-[#DFBE72] transition-colors">
                  {t.nav.tour}
                </Link>
              </li>
              <li>
                <Link href="/visit" className="hover:text-[#DFBE72] transition-colors">
                  {t.nav.visit}
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#DFBE72] transition-colors">
                  {t.nav.careers}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#DFBE72] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Demo Features & Pitch Specials */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'am' ? 'ተጨማሪ ገጾች' : 'Pitch Showcase'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/register" className="hover:text-[#DFBE72] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                  {language === 'am' ? 'የአባልነት ምዝገባ' : 'VIP Membership Card'}
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-[#DFBE72] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1882B2]" />
                  {language === 'am' ? 'የሰርተፊኬት ማረጋገጫ' : 'Certificate Verification'}
                </Link>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[#DFBE72] transition-colors flex items-center gap-1.5">
                  <LayoutDashboard className="w-3.5 h-3.5 text-[#DFBE72]" />
                  {language === 'am' ? 'የአስተዳደር ዳሽቦርድ' : 'Management Dashboard'}
                </Link>
              </li>
              <li>
                <a
                  href="#chat-trigger"
                  onClick={(e) => {
                    e.preventDefault();
                    const btn = document.getElementById('ai-assistant-toggle');
                    if (btn) btn.click();
                  }}
                  className="hover:text-[#DFBE72] transition-colors"
                >
                  {language === 'am' ? 'የደመበል ረዳት' : 'AI Concierge Bot'}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              {t.footer.newsletterTitle}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {t.footer.newsletterSubtitle}
            </p>

            {subscribed ? (
              <div className="bg-emerald-900/40 border border-emerald-500/40 rounded-xl p-3 text-xs text-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{t.footer.newsletterSuccess}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.footer.newsletterPlaceholder}
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-[#C9A24B] pr-10"
                  />
                  <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#C9A24B] hover:bg-[#DFBE72] text-[#031955] text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-md active:scale-95"
                >
                  <span>{t.footer.newsletterButton}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs text-slate-400 block mb-2">
                {language === 'am' ? 'በማህበራዊ ሚዲያ ይከተሉን' : 'Follow us'}:
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { name: 'Facebook', label: 'FB' },
                  { name: 'Instagram', label: 'IG' },
                  { name: 'TikTok', label: 'TT' },
                  { name: 'YouTube', label: 'YT' }
                ].map((s) => (
                  <a
                    key={s.name}
                    href={`#${s.name.toLowerCase()}`}
                    aria-label={s.name}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#C9A24B] hover:text-[#031955] text-white flex items-center justify-center text-xs font-bold transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar & Pitch Concept Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div>
            <p>© 2026 Dembel City Center. {t.footer.allRights}</p>
            <p className="text-[11px] text-[#DFBE72]/90 mt-1 font-medium">
              ★ {t.footer.conceptNote}
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/visit" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link href="/visit" className="hover:underline">Terms of Service</Link>
            <span>•</span>
            <Link href="/admin" className="hover:underline text-slate-300">Admin</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
