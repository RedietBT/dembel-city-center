'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { STORES } from '@/data/stores';
import { OFFERS, EVENTS } from '@/data/offers';
import StoreCard from '@/components/StoreCard';
import OfferCard from '@/components/OfferCard';
import EventCard from '@/components/EventCard';
import {
  Search,
  ArrowRight,
  Compass,
  Clock,
  Car,
  MapPin,
  Phone,
  Sparkles,
  Wifi,
  Accessibility,
  HeartHandshake,
  CheckCircle,
  Eye,
  Store as StoreIcon,
  ShoppingBag,
  ExternalLink
} from 'lucide-react';

export default function HomePage() {
  const { language, t } = useLanguage();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Filter 6 top featured stores
  const featuredStores = STORES.filter((s) => s.isFeatured).slice(0, 6);
  // 3 top offers
  const topOffers = OFFERS.slice(0, 3);
  // 3 top events
  const topEvents = EVENTS.slice(0, 3);

  // Live quick search suggestions
  const searchSuggestions = searchQuery.trim()
    ? STORES.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.nameAm.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/stores?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/stores');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden hero-gradient text-white pt-12 pb-24 md:pt-20 md:pb-32">
        {/* Decorative background blurs & patterns */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-[#1882B2]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#C9A24B]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-xs font-semibold text-[#DFBE72] shadow-sm animate-soft-pulse">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              {language === 'am' ? (
                <>
                  የላቀ የግብይትና የባህል ልምድ <br className="hidden sm:inline" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBE72] via-[#C9A24B] to-amber-200">
                    በደመበል ሲቲ ሴንተር
                  </span>
                </>
              ) : (
                <>
                  Elevated Shopping & Culture{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBE72] via-[#C9A24B] to-amber-200">
                    in Addis Ababa
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {t.hero.subtitle}
            </p>

            {/* Hero Search Box */}
            <div className="pt-2 max-w-2xl mx-auto relative">
              <form onSubmit={handleSearchSubmit} className="relative z-20">
                <div className="relative flex items-center bg-white/95 backdrop-blur-xl rounded-2xl p-1.5 shadow-2xl border-2 border-white/40 focus-within:border-[#C9A24B] transition-all">
                  <div className="pl-3.5 text-slate-400">
                    <Search className="w-5 h-5 text-[#0E4C92]" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    placeholder={t.hero.searchPlaceholder}
                    className="w-full px-3 py-3 text-slate-900 placeholder-slate-400 text-xs sm:text-sm bg-transparent focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#031955] to-[#0E4C92] hover:from-[#0E4C92] hover:to-[#1882B2] text-white text-xs sm:text-sm font-bold shadow-md transition-all shrink-0 active:scale-95"
                  >
                    {t.hero.searchButton}
                  </button>
                </div>
              </form>

              {/* Autocomplete Dropdown */}
              {searchFocused && searchSuggestions.length > 0 && (
                <div
                  onMouseLeave={() => setSearchFocused(false)}
                  className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-30 text-left animate-in fade-in slide-in-from-top-2 text-slate-900"
                >
                  <div className="text-[11px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                    {language === 'am' ? 'የፍለጋ ውጤቶች' : 'Quick Matching Stores'}
                  </div>
                  {searchSuggestions.map((s) => (
                    <Link
                      key={s.id}
                      href={`/stores/${s.slug}`}
                      onClick={() => setSearchFocused(false)}
                      className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#031955] font-bold text-xs flex items-center justify-center border border-blue-100">
                          {s.logoPlaceholder}
                        </div>
                        <div>
                          <div className="font-bold text-xs text-[#031955] group-hover:text-[#0E4C92]">
                            {language === 'am' ? s.nameAm : s.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {s.category} • Floor {s.floor} ({s.shopNumber})
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0E4C92] group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              )}

              {/* Quick Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs text-slate-300">
                <span className="text-slate-400 font-medium">Try:</span>
                {[
                  { q: 'coffee', label: language === 'am' ? 'ቡና (Coffee)' : 'Coffee' },
                  { q: 'nile tech', label: 'Nile Tech' },
                  { q: 'habesha', label: 'Habesha Threads' },
                  { q: 'cinema', label: language === 'am' ? 'ሲኒማ' : 'Cinema' },
                  { q: 'supermarket', label: language === 'am' ? 'ሱፐርማርኬት' : 'Supermarket' }
                ].map((item) => (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() => router.push(`/stores?search=${encodeURIComponent(item.q)}`)}
                    className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 hover:text-white border border-white/15 text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Link
                href="/stores"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] shadow-lg hover:shadow-xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[#031955]" />
                {t.hero.exploreStores}
              </Link>
              <Link
                href="/tour"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
              >
                <Compass className="w-4 h-4 text-[#DFBE72]" />
                {t.hero.takeTour}
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK-INFO STRIP (Floating on boundary) */}
      <section className="-mt-10 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-800">
          
          {/* Hours */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center shrink-0 border border-blue-100">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#031955]">{t.quickInfo.hoursTitle}</h4>
              <p className="text-xs text-slate-600 mt-0.5">{t.quickInfo.hoursDesc}</p>
              <span className="text-[11px] font-semibold text-emerald-600 mt-1 inline-block">
                ● Open Today
              </span>
            </div>
          </div>

          {/* Parking */}
          <div className="flex items-start gap-4 border-t sm:border-t-0 sm:border-l border-slate-100 sm:pl-6 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C9A24B] flex items-center justify-center shrink-0 border border-amber-100">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#031955]">{t.quickInfo.parkingTitle}</h4>
              <p className="text-xs text-slate-600 mt-0.5">{t.quickInfo.parkingDesc}</p>
              <Link href="/floors?floor=basement" className="text-[11px] font-semibold text-[#0E4C92] hover:underline mt-1 inline-flex items-center gap-1">
                View Parking Map <ArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4 border-t lg:border-t-0 lg:border-l border-slate-100 lg:pl-6 pt-4 lg:pt-0">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#1882B2] flex items-center justify-center shrink-0 border border-teal-100">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#031955]">{t.quickInfo.locationTitle}</h4>
              <p className="text-xs text-slate-600 mt-0.5">{t.quickInfo.locationDesc}</p>
              <Link href="/visit" className="text-[11px] font-semibold text-[#0E4C92] hover:underline mt-1 inline-flex items-center gap-1">
                Directions & Transit <ArrowRight className="w-2.5 h-2.5" />
              </Link>
            </div>
          </div>

          {/* Phone / Concierge */}
          <div className="flex items-start gap-4 border-t sm:border-t-0 sm:border-l border-slate-100 sm:pl-6 pt-4 sm:pt-0">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#031955] flex items-center justify-center shrink-0 border border-indigo-100">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#031955]">{t.quickInfo.phoneTitle}</h4>
              <p className="text-xs text-slate-600 mt-0.5">{t.quickInfo.phoneDesc}</p>
              <a href="tel:+251115510101" className="text-[11px] font-semibold text-emerald-600 hover:underline mt-1 inline-block">
                Call Concierge Desk
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. FEATURED STORES GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E4C92] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Dembel Highlights</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031955] tracking-tight">
              {t.sections.featuredStores}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.sections.featuredSubtitle}
            </p>
          </div>

          <Link
            href="/stores"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0E4C92] hover:text-[#031955] group"
          >
            <span>{t.sections.viewAllStores}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredStores.map((store) => (
            <StoreCard key={store.id} store={store} />
          ))}
        </div>
      </section>

      {/* 4. 360° VIRTUAL TOUR TEASER */}
      <section className="py-16 bg-gradient-to-r from-[#031955] via-[#0E4C92] to-[#031955] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-[#DFBE72] border border-white/20">
                <Compass className="w-3.5 h-3.5" />
                <span>Next-Gen Mall Experience</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {t.sections.tourTitle}
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {t.sections.tourSubtitle}
              </p>
              
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#DFBE72]" />
                  <span>Interactive clickable hotspots linking to 25+ stores</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#DFBE72]" />
                  <span>360° views of Ground Atrium, Fashion Wing & Sky Terrace</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#DFBE72]" />
                  <span>Full-screen immersive walkthrough on mobile & desktop</span>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/tour"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] shadow-xl hover:shadow-2xl hover:scale-102 active:scale-95 transition-all"
                >
                  <Eye className="w-4 h-4" />
                  {t.sections.launchTour}
                </Link>
              </div>
            </div>

            {/* Tour Preview Card */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group bg-slate-900">
                <div className="relative h-72 sm:h-96 w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1600&q=80"
                    alt="Dembel Virtual Tour Preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                  {/* Pulsing Hotspot simulation */}
                  <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group-hover:scale-110 transition-transform">
                    <span className="w-8 h-8 rounded-full bg-[#C9A24B] text-[#031955] flex items-center justify-center font-bold text-xs shadow-lg animate-bounce">
                      ✦
                    </span>
                    <span className="mt-1 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-bold text-white whitespace-nowrap">
                      Grand Central Atrium
                    </span>
                  </div>

                  <div className="absolute top-1/3 right-1/4 flex flex-col items-center">
                    <span className="w-7 h-7 rounded-full bg-[#1882B2] text-white flex items-center justify-center font-bold text-xs shadow-lg">
                      ✦
                    </span>
                    <span className="mt-1 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-bold text-white whitespace-nowrap">
                      Fashion Wing
                    </span>
                  </div>

                  {/* Overlay Banner */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 flex items-center justify-between text-xs">
                    <span className="text-white font-medium">Click below to experience full 360° panorama</span>
                    <Link
                      href="/tour"
                      className="px-3 py-1.5 rounded-lg bg-[#C9A24B] text-[#031955] font-bold text-xs hover:bg-[#DFBE72] transition-colors"
                    >
                      Start Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. THIS WEEK'S OFFERS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C9A24B] uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exclusive Member Deals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031955] tracking-tight">
              {t.sections.offersTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              {t.sections.offersSubtitle}
            </p>
          </div>

          <Link
            href="/offers"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0E4C92] hover:text-[#031955] group"
          >
            <span>{t.sections.viewAllOffers}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topOffers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </section>

      {/* 6. UPCOMING MALL EVENTS */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1882B2] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Culture & Community</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031955] tracking-tight">
                {t.sections.eventsTitle}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {t.sections.eventsSubtitle}
              </p>
            </div>

            <Link
              href="/offers"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0E4C92] hover:text-[#031955] group"
            >
              <span>{t.sections.viewAllEvents}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. PLAN YOUR VISIT */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E4C92] uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>Visitor Guide</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031955] tracking-tight">
            {t.sections.planVisitTitle}
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            {t.sections.planVisitSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: Hours */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#031955] mb-2">
              {t.planVisit.hoursCardTitle}
            </h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.hoursCardP1}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.hoursCardP2}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.hoursCardP3}
              </li>
            </ul>
          </div>

          {/* Card 2: Parking */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C9A24B] flex items-center justify-center mb-4">
              <Car className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#031955] mb-2">
              {t.planVisit.parkingCardTitle}
            </h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.parkingCardP1}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.parkingCardP2}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.parkingCardP3}
              </li>
            </ul>
          </div>

          {/* Card 3: Amenities */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#1882B2] flex items-center justify-center mb-4">
              <Wifi className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#031955] mb-2">
              {t.planVisit.amenitiesCardTitle}
            </h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.amenitiesCardP1}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.amenitiesCardP2}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.amenitiesCardP3}
              </li>
            </ul>
          </div>

          {/* Card 4: Transit */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-[#031955] flex items-center justify-center mb-4">
              <Accessibility className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-[#031955] mb-2">
              {t.planVisit.transitCardTitle}
            </h3>
            <ul className="text-xs text-slate-600 space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.transitCardP1}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.transitCardP2}
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                {t.planVisit.transitCardP3}
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-8 text-center">
          <Link
            href="/visit"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0E4C92] hover:text-[#031955] bg-white px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm"
          >
            <span>{language === 'am' ? 'ሙሉ የአድራሻና የትራንስፖርት መመሪያ ይመልከቱ' : 'View Full Transport & Accessibility Guide'}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
