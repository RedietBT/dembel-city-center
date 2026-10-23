'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { FLOORS_DATA, FloorData, FloorSpace, Facility } from '@/data/floors';
import { STORES, Store } from '@/data/stores';
import { useLanguage } from '@/context/LanguageContext';
import {
  Layers,
  MapPin,
  Clock,
  ArrowRight,
  Info,
  Car,
  Compass,
  Star,
  Sparkles,
  Phone
} from 'lucide-react';

function FloorDirectoryContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();

  const floorParam = searchParams.get('floor');
  const storeParam = searchParams.get('store');

  const defaultFloor = (['basement', 'ground', 'first', 'second'].includes(floorParam || '')
    ? floorParam
    : 'ground') as 'basement' | 'ground' | 'first' | 'second';

  const [activeFloorId, setActiveFloorId] = useState<'basement' | 'ground' | 'first' | 'second'>(defaultFloor);
  const [selectedSpace, setSelectedSpace] = useState<FloorSpace | null>(null);
  const [hoveredSpace, setHoveredSpace] = useState<FloorSpace | null>(null);

  const activeFloor = FLOORS_DATA.find((f) => f.id === activeFloorId) || FLOORS_DATA[1];

  // If a store is specified in query params, find it and select it on load
  useEffect(() => {
    if (storeParam) {
      const space = activeFloor.spaces.find((s) => s.storeSlug === storeParam);
      if (space) {
        setSelectedSpace(space);
      }
    } else if (activeFloor.spaces.length > 0 && !selectedSpace) {
      setSelectedSpace(activeFloor.spaces[0]);
    }
  }, [storeParam, activeFloor]);

  // When floor changes, reset or select first space
  const handleFloorChange = (floorId: 'basement' | 'ground' | 'first' | 'second') => {
    setActiveFloorId(floorId);
    const floor = FLOORS_DATA.find((f) => f.id === floorId);
    if (floor && floor.spaces.length > 0) {
      setSelectedSpace(floor.spaces[0]);
    } else {
      setSelectedSpace(null);
    }
  };

  // Matched full store data if space has a storeSlug
  const selectedStoreData: Store | undefined = selectedSpace?.storeSlug
    ? STORES.find((s) => s.slug === selectedSpace.storeSlug)
    : undefined;

  // Facility icon renderer
  const renderFacilityIcon = (type: Facility['type']) => {
    switch (type) {
      case 'atm':
        return <span className="font-bold text-[9px] bg-indigo-600 text-white px-1 py-0.5 rounded">ATM</span>;
      case 'restroom':
        return <span className="text-[11px]">🚻</span>;
      case 'elevator':
        return <span className="text-[11px]">🛗</span>;
      case 'prayer':
        return <span className="text-[11px]">🕌</span>;
      case 'kids':
        return <span className="text-[11px]">🎠</span>;
      case 'escalator':
        return <span className="text-[11px]">⚡</span>;
      case 'parking':
        return <span className="font-bold text-[9px] bg-blue-700 text-white px-1 py-0.5 rounded">P</span>;
      case 'info':
        return <span className="font-bold text-[9px] bg-amber-500 text-white px-1 py-0.5 rounded">ℹ</span>;
      default:
        return <span>•</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Mall Blueprint</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'የፎቆች ካርታ እና ማውጫ' : 'Interactive Floor Directory'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'am'
              ? 'ደረጃዎችን ይምረጡ፣ በካርታው ላይ ማንኛውንም መደብር ይንኩ እና የተሟላ መረጃ ይመልከቱ።'
              : 'Select a level to view floor spaces, retail stores, amenities, escalators, and elevator banks.'}
          </p>
        </div>

        {/* Floor Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {FLOORS_DATA.map((floor) => {
            const isActive = floor.id === activeFloorId;
            return (
              <button
                key={floor.id}
                type="button"
                onClick={() => handleFloorChange(floor.id)}
                className={`px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center gap-2.5 shadow-sm active:scale-95 ${
                  isActive
                    ? 'bg-[#031955] text-white shadow-lg ring-2 ring-[#C9A24B]'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${
                    isActive ? 'bg-[#C9A24B] text-[#031955]' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {floor.code}
                </span>
                <span>{language === 'am' ? floor.titleAm : floor.title}</span>
              </button>
            );
          })}
        </div>

        {/* Floor Description Banner */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="font-extrabold text-lg text-[#031955]">
              {language === 'am' ? activeFloor.titleAm : activeFloor.title} — {language === 'am' ? activeFloor.subtitleAm : activeFloor.subtitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-3xl">
              {language === 'am' ? activeFloor.descriptionAm : activeFloor.description}
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0E4C92] bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100 shrink-0">
            <Info className="w-4 h-4 text-[#1882B2]" />
            <span>Click any store on blueprint</span>
          </div>
        </div>

        {/* Main Floor Blueprint + Side Details Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive SVG Blueprint (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-md">
            
            {/* Blueprint Legend & Controls */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-bold text-[#031955]">Floor Plan Level:</span>
                <span className="font-bold text-[#C9A24B] uppercase tracking-wider">{activeFloor.code}</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-slate-500 text-[11px]">
                <span className="flex items-center gap-1">🚻 Restrooms</span>
                <span className="flex items-center gap-1">🛗 Elevators</span>
                <span className="flex items-center gap-1">⚡ Escalators</span>
                <span className="flex items-center gap-1">🕌 Prayer Rooms</span>
              </div>
            </div>

            {/* SVG Floor Map Canvas */}
            <div className="mt-4 relative bg-[#F8FAFC] rounded-xl border border-slate-200 p-2 overflow-hidden shadow-inner">
              <svg
                viewBox="0 0 900 480"
                className="w-full h-auto select-none"
                style={{ maxHeight: '520px' }}
              >
                {/* Background Grid Pattern */}
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#E2E8F0" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="900" height="480" fill="url(#grid)" />

                {/* Outer Building Boundary */}
                <rect
                  x="40"
                  y="30"
                  width="820"
                  height="420"
                  rx="18"
                  fill="#FFFFFF"
                  stroke="#CBD5E1"
                  strokeWidth="3"
                />

                {/* Central Hallway / Atrium void */}
                <rect
                  x="260"
                  y="215"
                  width="380"
                  height="50"
                  rx="12"
                  fill="#EFF6FF"
                  stroke="#93C5FD"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <text
                  x="450"
                  y="245"
                  textAnchor="middle"
                  fill="#64748B"
                  fontSize="12"
                  fontWeight="bold"
                  letterSpacing="1.5"
                >
                  {activeFloorId === 'basement' ? 'CENTRAL VEHICLE DRIVEWAY' : 'CENTRAL ATRIUM & CONCOURSE'}
                </text>

                {/* Render Spaces / Stores */}
                {activeFloor.spaces.map((space) => {
                  const isSelected = selectedSpace?.id === space.id;
                  const isHovered = hoveredSpace?.id === space.id;
                  const baseFill = space.color || '#0E4C92';

                  return (
                    <g
                      key={space.id}
                      onClick={() => setSelectedSpace(space)}
                      onMouseEnter={() => setHoveredSpace(space)}
                      onMouseLeave={() => setHoveredSpace(null)}
                      className="cursor-pointer transition-all duration-200"
                    >
                      <rect
                        x={space.x}
                        y={space.y}
                        width={space.width}
                        height={space.height}
                        rx="10"
                        fill={isSelected ? '#C9A24B' : isHovered ? '#DFBE72' : baseFill}
                        fillOpacity={isSelected ? 0.95 : isHovered ? 0.85 : 0.15}
                        stroke={isSelected ? '#031955' : baseFill}
                        strokeWidth={isSelected ? 3 : 2}
                      />

                      {/* Store Number Badge */}
                      <rect
                        x={space.x + 8}
                        y={space.y + 8}
                        width="48"
                        height="20"
                        rx="5"
                        fill={isSelected ? '#031955' : '#FFFFFF'}
                        fillOpacity={0.9}
                      />
                      <text
                        x={space.x + 32}
                        y={space.y + 22}
                        textAnchor="middle"
                        fill={isSelected ? '#FFFFFF' : '#031955'}
                        fontSize="10"
                        fontWeight="bold"
                      >
                        {space.shopNumber}
                      </text>

                      {/* Store Name Text */}
                      <text
                        x={space.x + space.width / 2}
                        y={space.y + space.height / 2 + 5}
                        textAnchor="middle"
                        fill="#031955"
                        fontSize="13"
                        fontWeight="bold"
                      >
                        {space.name}
                      </text>

                      {/* Category Label */}
                      <text
                        x={space.x + space.width / 2}
                        y={space.y + space.height / 2 + 22}
                        textAnchor="middle"
                        fill="#64748B"
                        fontSize="10"
                      >
                        {space.category}
                      </text>
                    </g>
                  );
                })}

                {/* Render Facilities */}
                {activeFloor.facilities.map((fac) => (
                  <g key={fac.id} className="pointer-events-none">
                    <circle
                      cx={fac.x}
                      cy={fac.y}
                      r="14"
                      fill="#FFFFFF"
                      stroke="#0E4C92"
                      strokeWidth="2"
                    />
                    <text
                      x={fac.x}
                      y={fac.y + 4}
                      textAnchor="middle"
                      fontSize="10"
                      fontWeight="bold"
                    >
                      {fac.type === 'restroom' && 'WC'}
                      {fac.type === 'elevator' && 'E'}
                      {fac.type === 'escalator' && 'S'}
                      {fac.type === 'prayer' && 'P'}
                      {fac.type === 'atm' && '$'}
                      {fac.type === 'kids' && 'K'}
                      {fac.type === 'parking' && 'P'}
                      {fac.type === 'info' && 'i'}
                    </text>
                    <text
                      x={fac.x}
                      y={fac.y + 24}
                      textAnchor="middle"
                      fill="#475569"
                      fontSize="8"
                      fontWeight="600"
                    >
                      {fac.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
              <span>* Stylized architectural map of Dembel City Center</span>
              <span>All stores wheelchair accessible</span>
            </div>
          </div>

          {/* Right: Selected Store / Space Detail Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-24">
            {selectedSpace ? (
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#031955]/10 shadow-xl transition-all">
                {selectedStoreData ? (
                  /* Store has full profile */
                  <>
                    <div className="relative h-44 w-full bg-slate-900">
                      <Image
                        src={selectedStoreData.image}
                        alt={selectedStoreData.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      <div className="absolute top-3 left-3 bg-[#C9A24B] text-[#031955] text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                        {selectedStoreData.category}
                      </div>

                      <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-lg flex items-center gap-1 text-white text-xs font-semibold">
                        <Star className="w-3.5 h-3.5 text-[#DFBE72] fill-[#DFBE72]" />
                        <span>{selectedStoreData.rating.toFixed(1)}</span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[11px] text-[#DFBE72] font-semibold block">
                          Shop {selectedSpace.shopNumber} • {activeFloor.title}
                        </span>
                        <h3 className="font-bold text-lg leading-tight">
                          {language === 'am' ? selectedStoreData.nameAm : selectedStoreData.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {language === 'am'
                          ? selectedStoreData.shortDescriptionAm
                          : selectedStoreData.shortDescription}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                        <div className="flex items-center gap-2 text-slate-700">
                          <Clock className="w-4 h-4 text-[#C9A24B] shrink-0" />
                          <span>{selectedStoreData.hours}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-700">
                          <Phone className="w-4 h-4 text-[#0E4C92] shrink-0" />
                          <a href={`tel:${selectedStoreData.phone.replace(/\s+/g, '')}`} className="hover:underline">
                            {selectedStoreData.phone}
                          </a>
                        </div>
                      </div>

                      {selectedStoreData.highlightOffer && (
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-900 font-medium">
                          <strong>Active Deal:</strong> {selectedStoreData.highlightOffer}
                        </div>
                      )}

                      <div className="pt-2">
                        <Link
                          href={`/stores/${selectedStoreData.slug}`}
                          className="w-full py-2.5 px-4 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md"
                        >
                          <span>{language === 'am' ? 'ሙሉ ዝርዝር ይመልከቱ' : 'View Full Store Profile'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  /* Facility or Utility area without store profile */
                  <div className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center mx-auto">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Shop {selectedSpace.shopNumber}
                    </span>
                    <h3 className="font-bold text-base text-[#031955]">{selectedSpace.name}</h3>
                    <p className="text-xs text-slate-500">
                      Category: {selectedSpace.category} • Located on {activeFloor.title}
                    </p>
                    <div className="pt-3 border-t border-slate-100">
                      <Link
                        href="/visit"
                        className="w-full py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#031955] text-xs font-bold transition-colors inline-block"
                      >
                        Plan your visit
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200/90 shadow-sm text-slate-500 text-xs">
                Click any room or shop on the blueprint to view details.
              </div>
            )}

            {/* Quick Virtual Tour Link */}
            <div className="mt-4 bg-gradient-to-r from-[#031955] to-[#0E4C92] rounded-2xl p-4 text-white shadow-md flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-[10px] font-bold text-[#DFBE72] uppercase tracking-wider">
                  360° Panorama
                </span>
                <p className="text-xs font-bold">Want to see the actual view?</p>
              </div>
              <Link
                href="/tour"
                className="px-3 py-1.5 rounded-lg bg-[#C9A24B] text-[#031955] text-xs font-bold hover:brightness-105 transition-all shrink-0"
              >
                Virtual Tour
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default function FloorsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-slate-500 text-sm">
          Loading Floor Directory...
        </div>
      }
    >
      <FloorDirectoryContent />
    </Suspense>
  );
}
