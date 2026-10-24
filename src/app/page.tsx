'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { STORES } from '@/data/stores';
import { OFFERS, EVENTS } from '@/data/offers';
import StoreCard from '@/components/StoreCard';
import OfferCard from '@/components/OfferCard';
import EventCard from '@/components/EventCard';
import HeroCarousel from '@/components/HeroCarousel';
import {
  ArrowRight,
  Compass,
  Clock,
  Car,
  MapPin,
  Phone,
  Sparkles,
  Wifi,
  Accessibility,
  CheckCircle,
  Eye,
  Mail,
  Send,
  MessageCircle,
  Building,
  CheckCircle2
} from 'lucide-react';

export default function HomePage() {
  const { language, t } = useLanguage();

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.name && (contactForm.email || contactForm.phone)) {
      setContactSubmitted(true);
      setTimeout(() => {
        setContactSubmitted(false);
        setContactForm({
          name: '',
          email: '',
          phone: '',
          department: 'General Inquiries',
          message: ''
        });
      }, 4000);
    }
  };

  // Filter 6 top featured stores
  const featuredStores = STORES.filter((s) => s.isFeatured).slice(0, 6);
  // 3 top offers
  const topOffers = OFFERS.slice(0, 3);
  // 3 top events
  const topEvents = EVENTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. HERO CAROUSEL (Light & Airy Architectural Slides) */}
      <HeroCarousel />

      {/* 2. QUICK-INFO STRIP (Floating on boundary) */}
      <section className="-mt-10 relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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

      {/* 8. CONTACT US SECTION */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-100/90 to-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
              <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#031955] tracking-tight">
              {language === 'am' ? 'ያግኙን • የደመበል ደንበኞች መስተንግዶ' : 'Contact Dembel Concierge & Management'}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {language === 'am'
                ? 'ስለ ሱቆች ኪራይ፣ የቪአይፒ አባልነት ወይም ስለ ዝግጅቶች ጥያቄ ካለዎት እኛን ለማነጋገር አያመንቱ።'
                : 'Have a retail leasing inquiry, visitor assistance request, or event collaboration? Our management and guest concierge teams are ready to assist you.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Direct Contact Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Card 1: Concierge Phone */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Concierge Desk & Phone
                  </span>
                  <h4 className="font-extrabold text-base text-[#031955]">+251 11 551 0101</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Alternative: +251 91 122 3344 • Daily 8:30 AM – 9:30 PM
                  </p>
                </div>
              </div>

              {/* Card 2: WhatsApp Business */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp Concierge
                  </span>
                  <h4 className="font-extrabold text-base text-[#031955]">+251 91 122 3344</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Instant chat for store directions & lost property
                  </p>
                </div>
              </div>

              {/* Card 3: Email Inquiries */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C9A24B] flex items-center justify-center shrink-0 border border-amber-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Email Correspondence
                  </span>
                  <h4 className="font-extrabold text-base text-[#031955]">concierge@dembelcenter.et</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Leasing: <span className="font-semibold text-[#0E4C92]">leasing@dembelcenter.et</span>
                  </p>
                </div>
              </div>

              {/* Card 4: Physical Location */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#1882B2] flex items-center justify-center shrink-0 border border-teal-100">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Executive Management Office
                  </span>
                  <h4 className="font-bold text-sm text-[#031955]">Dembel City Center, Level 3</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Africa Avenue (Bole Road), Olympia, Kirkos Sub-City, Addis Ababa
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl">
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E4C92]">
                  Send a Message
                </span>
                <h3 className="font-extrabold text-xl text-[#031955]">
                  {language === 'am' ? 'መልእክትዎን እዚህ ያስገቡ' : 'Direct Concierge & Leasing Inquiry'}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  We typically reply within 2 hours during normal business operating hours.
                </p>
              </div>

              {contactSubmitted ? (
                <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-extrabold text-lg text-emerald-950">
                    {language === 'am' ? 'መልእክትዎ ደርሶናል! እናመሰግናለን' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                    Thank you, {contactForm.name}. A Dembel concierge specialist has received your inquiry and will follow up promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Samuel Bekele"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="samuel@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        placeholder="+251 91 123 4567"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-slate-700 block">
                        Department / Inquiry Subject
                      </label>
                      <select
                        value={contactForm.department}
                        onChange={(e) => setContactForm({ ...contactForm, department: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92] cursor-pointer"
                      >
                        <option value="General Inquiries">General Visitor Inquiries</option>
                        <option value="Retail Leasing">Retail & Commercial Leasing</option>
                        <option value="VIP Club">VIP Privilege Club Support</option>
                        <option value="Events & Sponsorship">Events & Sponsorship</option>
                        <option value="Lost & Found">Lost & Found Assistance</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">
                      Message / Question *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="How can we assist your visit or business proposal today?"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#031955] to-[#0E4C92] hover:brightness-110 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{language === 'am' ? 'መልእክት ላክ' : 'Send Inquiry Message'}</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
