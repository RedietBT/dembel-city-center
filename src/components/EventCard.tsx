'use client';

import React from 'react';
import Image from 'next/image';
import { MallEvent } from '@/data/offers';
import { useLanguage } from '@/context/LanguageContext';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';

interface EventCardProps {
  event: MallEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const { language } = useLanguage();

  const title = language === 'am' ? event.titleAm : event.title;
  const desc = language === 'am' ? event.shortDescriptionAm : event.shortDescription;
  const location = language === 'am' ? event.locationAm : event.location;

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Event Image */}
      <div className="relative h-52 w-full bg-slate-900 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#031955] via-transparent to-black/30" />

        {/* Badge */}
        <div className="absolute top-3 left-3 bg-[#031955]/85 backdrop-blur-md text-[#DFBE72] border border-[#DFBE72]/30 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
          <span>{event.badge}</span>
        </div>

        {/* Category Pill */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#031955] px-2.5 py-0.5 rounded-lg text-xs font-bold shadow-sm">
          {event.category}
        </div>

        {/* Date Strip Overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <div className="flex items-center gap-1.5 font-bold">
            <Calendar className="w-4 h-4 text-[#DFBE72]" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-1 text-slate-200 text-[11px]">
            <Clock className="w-3 h-3 text-[#DFBE72]" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#0E4C92] font-semibold mb-2">
            <MapPin className="w-3.5 h-3.5 text-[#1882B2]" />
            <span>{location}</span>
          </div>

          <h3 className="font-bold text-base text-[#031955] group-hover:text-[#0E4C92] transition-colors leading-snug">
            {title}
          </h3>

          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
            {language === 'am' ? 'ነጻ መግቢያ' : 'Free Entry'}
          </span>
          <span className="text-slate-400 font-medium">
            {language === 'am' ? 'በዋናው አዳራሽ' : 'All Welcome'}
          </span>
        </div>
      </div>
    </div>
  );
}
