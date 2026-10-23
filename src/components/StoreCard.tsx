'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '@/data/stores';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Clock, Star, ArrowRight, Tag } from 'lucide-react';

interface StoreCardProps {
  store: Store;
}

export default function StoreCard({ store }: StoreCardProps) {
  const { language } = useLanguage();

  const categoryColor: Record<string, string> = {
    'Fashion': 'bg-amber-100 text-amber-900 border-amber-200',
    'Food & Café': 'bg-orange-100 text-orange-900 border-orange-200',
    'Electronics': 'bg-blue-100 text-blue-900 border-blue-200',
    'Beauty': 'bg-pink-100 text-pink-900 border-pink-200',
    'Entertainment': 'bg-purple-100 text-purple-900 border-purple-200',
    'Services': 'bg-emerald-100 text-emerald-900 border-emerald-200',
    'Supermarket': 'bg-teal-100 text-teal-900 border-teal-200'
  };

  const storeName = language === 'am' ? store.nameAm : store.name;
  const storeDesc = language === 'am' ? store.shortDescriptionAm : store.shortDescription;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
      {/* Image Banner */}
      <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
        <Image
          src={store.image}
          alt={store.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-bold border backdrop-blur-md shadow-sm ${
              categoryColor[store.category] || 'bg-slate-100 text-slate-800'
            }`}
          >
            {store.category}
          </span>
          {store.isFeatured && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#C9A24B] text-[#031955] shadow-sm">
              Featured
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-white text-xs font-semibold">
          <Star className="w-3.5 h-3.5 text-[#DFBE72] fill-[#DFBE72]" />
          <span>{store.rating.toFixed(1)}</span>
        </div>

        {/* Location & Shop Number */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1 font-medium bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-md">
            <MapPin className="w-3.5 h-3.5 text-[#DFBE72]" />
            <span>Floor {store.floor} • Shop {store.shopNumber}</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-slate-200">
            <Clock className="w-3 h-3 text-slate-300" />
            <span>{store.hours.split('–')[0]}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-bold text-lg text-[#031955] group-hover:text-[#0E4C92] transition-colors leading-snug">
              {storeName}
            </h3>
            <span className="text-xs font-semibold text-slate-400 shrink-0">
              {store.shopNumber}
            </span>
          </div>
          {language === 'am' && (
            <p className="text-xs text-slate-400 font-medium">{store.name}</p>
          )}

          <p className="text-xs text-slate-600 line-clamp-2 mt-2 leading-relaxed">
            {storeDesc}
          </p>
        </div>

        {/* Special Offer Highlight tag if present */}
        {store.highlightOffer && (
          <div className="bg-amber-50 border border-amber-200/80 rounded-xl px-2.5 py-1.5 flex items-center gap-2 text-[11px] text-amber-900 font-medium">
            <Tag className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" />
            <span className="truncate">{store.highlightOffer}</span>
          </div>
        )}

        {/* Action Button */}
        <div className="pt-2 border-t border-slate-100">
          <Link
            href={`/stores/${store.slug}`}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#031955] hover:text-white text-[#031955] text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:border-[#031955] border border-slate-200"
          >
            <span>{language === 'am' ? 'ዝርዝር መረጃ ይመልከቱ' : 'View Store Details'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
