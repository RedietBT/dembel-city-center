'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { OFFERS, EVENTS } from '@/data/offers';
import OfferCard from '@/components/OfferCard';
import EventCard from '@/components/EventCard';
import { useLanguage } from '@/context/LanguageContext';
import {
  Tag,
  Calendar,
  Sparkles,
  Filter,
  CheckCircle2,
  Gift
} from 'lucide-react';

export default function OffersEventsPage() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'all' | 'offers' | 'events'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Fashion', 'Food & Café', 'Electronics', 'Beauty', 'Supermarket'];

  const filteredOffers = OFFERS.filter((off) => {
    if (selectedCategory !== 'All' && off.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#031955] text-xs font-bold">
            <Gift className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>Seasonal Promotions & Cultural Calendar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'ልዩ ቅናሾች እና የደመበል ዝግጅቶች' : 'Offers & Cultural Events'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'am'
              ? 'በመደብሮቻችን የተዘጋጁ ልዩ የዋጋ ቅናሾችን፣ የስጦታ ቫውቸሮችን እና የበዓል ፕሮግራሞችን እዚህ ያግኙ።'
              : 'Discover curated savings, bundle discounts, runway shows, and weekend family festivals happening at Dembel City Center.'}
          </p>
        </div>

        {/* Tab Switcher & Filter Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Main Tabs */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl w-full md:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`flex-1 md:flex-initial px-5 py-2.5 rounded-lg text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-[#031955] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {language === 'am' ? 'ሁሉም (ቅናሾችና ዝግጅቶች)' : 'All Specials'}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('offers')}
              className={`flex-1 md:flex-initial px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'offers'
                  ? 'bg-[#031955] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              <span>{language === 'am' ? 'ቅናሾች ብቻ' : 'Store Offers'}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('events')}
              className={`flex-1 md:flex-initial px-5 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                activeTab === 'events'
                  ? 'bg-[#031955] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{language === 'am' ? 'ዝግጅቶች ብቻ' : 'Mall Events'}</span>
            </button>
          </div>

          {/* Category Chips for Offers */}
          {activeTab !== 'events' && (
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              <span className="text-xs font-bold text-slate-400 mr-1 flex items-center gap-1">
                <Filter className="w-3 h-3 text-[#C9A24B]" /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#C9A24B] text-[#031955] font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

        </div>

        {/* Section 1: Store Offers */}
        {(activeTab === 'all' || activeTab === 'offers') && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-[#031955] flex items-center justify-center">
                  <Tag className="w-4 h-4 text-[#C9A24B]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#031955]">
                    {language === 'am' ? 'የተመረጡ የሳምንቱ ቅናሾች' : 'Active Store Promotions'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Flash discounts, coupon vouchers, and bundle savings
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {filteredOffers.length} offers
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Mall Events */}
        {(activeTab === 'all' || activeTab === 'events') && (
          <div className="space-y-6 pt-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0E4C92] flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-[#0E4C92]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#031955]">
                    {language === 'am' ? 'የሚመጡ የበዓል እና የባህል ዝግጅቶች' : 'Upcoming Mall Events'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Live entertainment, exhibitions, and weekend celebrations
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {EVENTS.length} events scheduled
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EVENTS.map((evt) => (
                <EventCard key={evt.id} event={evt} />
              ))}
            </div>
          </div>
        )}

        {/* VIP Membership Banner */}
        <div className="bg-gradient-to-r from-[#031955] via-[#0E4C92] to-[#031955] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#C9A24B]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#DFBE72] text-xs font-bold border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>Dembel VIP Loyalty Pass</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {language === 'am' ? 'የደመበል ቪአይፒ አባል ሆነው ተጨማሪ ቅናሽ ያግኙ' : 'Unlock Extra 5% - 15% VIP Discounts'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Register for your free digital Dembel membership card today. Receive instant QR check-in, free weekend parking validation, and invitations to private preview nights.
            </p>
            <div className="pt-2">
              <Link
                href="/register"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] font-bold text-xs sm:text-sm hover:brightness-105 transition-all shadow-lg inline-flex items-center gap-2"
              >
                <span>{language === 'am' ? 'ነጻ ዲጂታል ካርድዎን አሁኑኑ ያግኙ' : 'Get Free Digital VIP Card'}</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
