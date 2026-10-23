'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TourViewer from '@/components/TourViewer';
import { TOUR_SCENES } from '@/data/tour';
import { useLanguage } from '@/context/LanguageContext';
import {
  Compass,
  Sparkles,
  Info,
  MapPin,
  CheckCircle,
  Eye,
  Camera,
  ArrowRight
} from 'lucide-react';

export default function TourPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive 360° Digital Twin</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'የደመበል ምናባዊ 360° ጉብኝት' : 'Virtual 360° Mall Tour'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'am'
              ? 'ከየትኛውም ቦታ ሆነው በደመበል ሲቲ ሴንተር አዳራሽ፣ የፋሽን መተላለፊያ እና የሰገነት መዝናኛ ውስጥ በ360 ዲግሪ ይዘዋወሩ።'
              : 'Immerse yourself inside Dembel City Center from anywhere in the world. Explore the grand skylit atrium, upscale fashion wings, and scenic terrace with interactive hotspot wayfinding.'}
          </p>
        </div>

        {/* Pitch Required Disclaimer Note Banner */}
        <div className="bg-amber-50 border-2 border-amber-300/80 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-xs text-amber-950 shadow-sm max-w-4xl mx-auto">
          <Camera className="w-5 h-5 text-[#C9A24B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-sm block text-[#031955]">
              {language === 'am' ? 'የማሳያ ናሙና ማስታወሻ' : 'Client Pitch Demonstration Notice'}
            </span>
            <p className="leading-relaxed">
              <strong>Sample scenes:</strong> The production deployment will feature custom high-resolution equirectangular 360° HDR photography captured on-site at Dembel City Center with multi-level drone panoramas and gigapixel retail storefront captures.
            </p>
          </div>
        </div>

        {/* The 360 Viewer */}
        <div className="relative">
          <TourViewer initialSceneId="grand-atrium" />
        </div>

        {/* Scene Highlights & Details Grid */}
        <div className="pt-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031955]">
                {language === 'am' ? 'የጉብኝት ትዕይንቶች ዝርዝር' : 'Featured Mall Zones & Hotspots'}
              </h2>
              <p className="text-xs text-slate-500">
                Key architectural zones covered in this digital showcase
              </p>
            </div>
            <span className="text-xs font-semibold text-[#0E4C92] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              {TOUR_SCENES.length} Scenes Available
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOUR_SCENES.map((scene) => (
              <div
                key={scene.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="relative h-40 w-full bg-slate-900">
                  <Image
                    src={scene.imageUrl}
                    alt={scene.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-[#DFBE72] px-2.5 py-0.5 rounded-lg text-[10px] font-bold">
                    {scene.floor}
                  </div>
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                    <h3 className="font-bold text-sm leading-tight">
                      {language === 'am' ? scene.titleAm : scene.title}
                    </h3>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === 'am' ? scene.descriptionAm : scene.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 block mb-1.5 uppercase">
                      Hotspots ({scene.hotspots.length}):
                    </span>
                    <ul className="text-xs text-[#0E4C92] font-semibold space-y-1">
                      {scene.hotspots.slice(0, 3).map((hs) => (
                        <li key={hs.id} className="flex items-center gap-1.5 truncate">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B] shrink-0" />
                          <span className="truncate">{hs.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* VR Headset & Future Tech Notice */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1882B2] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Future Enhancement</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#031955]">
              Apple Vision Pro & Meta Quest VR Mode
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The full release will support WebXR stereoscopic walkthroughs, enabling diaspora shoppers in North America, Europe, and the Middle East to walk through Dembel virtually and place boutique orders directly with local artisans.
            </p>
          </div>

          <Link
            href="/stores"
            className="px-6 py-3 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <span>Browse All Stores</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
