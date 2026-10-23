'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  MapPin,
  Clock,
  Car,
  Compass,
  Train,
  Plane,
  Wifi,
  Sparkles,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Accessibility
} from 'lucide-react';

export default function VisitPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Central Addis Ababa • Africa Avenue</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'የደመበል አድራሻ እና የጉብኝት መመሪያ' : 'Plan Your Visit & Location'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'am'
              ? 'ደመበል ሲቲ ሴንተር በቦሌ መንገድ (ኦሊምፒያ) ምቹ ስፍራ ላይ ይገኛል። የመኪና ማቆሚያ፣ የባቡር ትራንስፖርት እና ተጨማሪ አገልግሎቶችን እዚህ ያግኙ።'
              : 'Located on prestige Africa Avenue in the Olympia district of Addis Ababa. Explore transit connections, secure 500+ car underground parking, and VIP guest amenities.'}
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#031955]">
                {language === 'am' ? 'የስራ ሰዓት' : 'Opening Hours'}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Mon – Sun: 8:30 AM – 9:30 PM<br />
                Blue Nile Supermarket: 7:30 AM<br />
                Lion Cinema: until 11:30 PM
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C9A24B] flex items-center justify-center shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#031955]">
                {language === 'am' ? 'የመኪና ማቆሚያ' : 'Underground Parking'}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                500+ monitored secure bays<br />
                20 ETB / hour<br />
                Free with 300+ ETB store receipt
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#1882B2] flex items-center justify-center shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#031955]">
                {language === 'am' ? 'የመረጃ ዴስክ' : 'Concierge Helpline'}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                +251 11 551 0101<br />
                Ground Floor Atrium Desk<br />
                concierge@dembelcenter.et
              </p>
            </div>
          </div>
        </div>

        {/* Location & Getting Here Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md space-y-8">
          <div>
            <span className="text-xs font-bold text-[#0E4C92] uppercase tracking-wider block mb-1">
              Transportation Guide
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031955]">
              {language === 'am' ? 'ወደ ደመበል እንዴት መድረስ ይችላሉ?' : 'Getting to Dembel City Center'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Transit Option 1 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0E4C92] flex items-center justify-center">
                <Train className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#031955]">Addis Light Rail Transit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take the East-West or North-South light rail to <strong>Olympia Station</strong>. Dembel is located just 150 meters (a 3-minute walk) south along Africa Avenue.
              </p>
              <span className="inline-block text-[11px] font-bold text-[#0E4C92]">
                Walking time: ~3 mins
              </span>
            </div>

            {/* Transit Option 2 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#C9A24B] flex items-center justify-center">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#031955]">From Bole Int'l Airport</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct straight drive down Africa Avenue. Ideal for transit travelers or arriving tourists seeking fine Ethiopian cotton, opal jewelry, and fresh coffee gifts.
              </p>
              <span className="inline-block text-[11px] font-bold text-[#C9A24B]">
                Distance: 3.5 km (~8 mins by car)
              </span>
            </div>

            {/* Transit Option 3 */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-[#1882B2] flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#031955]">Ride-Hailing & Taxi Plaza</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated pickup and drop-off loop located directly in front of the main revolving doors for RIDE, Feres, and city yellow cabs.
              </p>
              <span className="inline-block text-[11px] font-bold text-[#1882B2]">
                Sheltered drop-off zone
              </span>
            </div>

          </div>

          {/* Interactive Map Visual Mockup */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 h-72 sm:h-96 bg-slate-100 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-br from-[#031955]/90 to-[#0E4C92]/95 flex flex-col items-center justify-center text-white text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A24B] text-[#031955] flex items-center justify-center shadow-xl font-bold animate-bounce">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                  Dembel City Center Addis Ababa
                </h4>
                <p className="text-xs sm:text-sm text-[#DFBE72] mt-1 max-w-md mx-auto">
                  Africa Avenue (Bole Road), Olympia Area, Kirkos Sub-City, Addis Ababa, Ethiopia
                </p>
                <p className="text-xs text-slate-300 mt-2">
                  GPS Coordinates: 9.0084° N, 38.7668° E
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 justify-center">
                <a
                  href="https://maps.google.com/?q=Dembel+City+Center+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-white text-[#031955] font-bold text-xs hover:bg-slate-100 transition-colors shadow-lg flex items-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <Link
                  href="/floors?floor=basement"
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <span>View Basement Parking Plan</span>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Mall Amenities Guide */}
        <div id="amenities" className="space-y-6">
          <div className="border-b border-slate-200 pb-3">
            <span className="text-xs font-bold text-[#C9A24B] uppercase tracking-wider block mb-1">
              Comfort & Accessibility
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#031955]">
              {language === 'am' ? 'የደመበል ተጨማሪ መገልገያዎች' : 'Mall Amenities & Guest Services'}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center font-bold">
                <Wifi className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#031955]">High-Speed Guest Wi-Fi</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect your laptop or smartphone seamlessly to <strong>"Dembel_Guest"</strong> across all 4 levels and dining terraces.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
                🕌
              </div>
              <h3 className="font-bold text-base text-[#031955]">Dedicated Prayer Rooms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Serene prayer halls with designated ablution (wudu) areas for both men and women located on Ground Floor (West wing) and 2nd Floor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <Accessibility className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#031955]">Full Wheelchair Accessibility</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Step-free street access ramps, wide automated sliding doors, braille-equipped panoramic glass elevators, and accessible restrooms on every floor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
                🎠
              </div>
              <h3 className="font-bold text-base text-[#031955]">Family & Baby Care Rooms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Private nursing suites equipped with changing tables, bottle warmers, and plush seating adjacent to Walia Kids World on Level 2.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold">
                💳
              </div>
              <h3 className="font-bold text-base text-[#031955]">24/7 ATM Concourse</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated teller machines for Commercial Bank of Ethiopia (CBE), Awash Bank, Dashen Bank, and Bank of Abyssinia located at the Ground Atrium entrance.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-2.5">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-[#031955]">24/7 Security & First Aid</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Trained uniformed security personnel, walk-through metal detectors, 200+ HD surveillance cameras, and certified on-site emergency first aiders.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
