'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Offer } from '@/data/offers';
import { useLanguage } from '@/context/LanguageContext';
import { Tag, Clock, Copy, Check, ArrowRight, Store } from 'lucide-react';

interface OfferCardProps {
  offer: Offer;
}

export default function OfferCard({ offer }: OfferCardProps) {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(offer.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const title = language === 'am' ? offer.titleAm : offer.title;
  const discount = language === 'am' ? offer.discountTextAm : offer.discountText;
  const desc = language === 'am' ? offer.descriptionAm : offer.description;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
      {/* Visual Header */}
      <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Discount Badge */}
        <div className="absolute top-3 left-3 bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] px-3 py-1 rounded-xl font-extrabold text-xs shadow-lg flex items-center gap-1.5">
          <Tag className="w-3.5 h-3.5 text-[#031955]" />
          <span>{discount}</span>
        </div>

        {/* Urgency Badge */}
        <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur-md text-white px-2.5 py-1 rounded-lg text-[11px] font-bold flex items-center gap-1 shadow-md animate-pulse">
          <Clock className="w-3 h-3" />
          <span>{language === 'am' ? `በ${offer.expiresInDays} ቀናት ያበቃል` : `Expires in ${offer.expiresInDays} days`}</span>
        </div>

        {/* Store Name Overlaid */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <Link
            href={`/stores/${offer.storeSlug}`}
            className="flex items-center gap-1.5 font-bold hover:text-[#DFBE72] transition-colors"
          >
            <Store className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>{offer.storeName}</span>
          </Link>
          <span className="text-[11px] text-slate-300">Until {offer.validUntil}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-bold text-base text-[#031955] group-hover:text-[#0E4C92] transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            {desc}
          </p>
        </div>

        {/* Promo Code & Action */}
        <div className="space-y-3 pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between gap-2 bg-slate-50 border border-dashed border-slate-300 rounded-xl p-2 px-3">
            <div>
              <span className="block text-[10px] uppercase font-bold text-slate-400">
                {language === 'am' ? 'የቅናሽ ኮድ' : 'Promo Code'}
              </span>
              <span className="font-mono font-bold text-xs text-[#031955]">{offer.code}</span>
            </div>
            <button
              type="button"
              onClick={copyCode}
              aria-label="Copy promotion code"
              className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#031955] hover:border-[#031955] text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600">{language === 'am' ? 'ተቀድቷል' : 'Copied'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3 text-slate-500" />
                  <span>{language === 'am' ? 'ቅዳ' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>

          <Link
            href={`/stores/${offer.storeSlug}`}
            className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-[#031955] hover:text-white text-[#031955] text-xs font-bold transition-all flex items-center justify-center gap-1.5"
          >
            <span>{language === 'am' ? 'ሱቁን ይጎብኙ' : 'Visit Store'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
