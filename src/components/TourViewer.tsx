'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TourScene, TourHotspot, TOUR_SCENES } from '@/data/tour';
import { useLanguage } from '@/context/LanguageContext';
import {
  Compass,
  Maximize2,
  Minimize2,
  RotateCw,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  Store,
  Layers,
  ChevronRight,
  Info,
  ExternalLink
} from 'lucide-react';

interface TourViewerProps {
  initialSceneId?: string;
}

export default function TourViewer({ initialSceneId = 'grand-atrium' }: TourViewerProps) {
  const { language } = useLanguage();
  const [currentSceneId, setCurrentSceneId] = useState<string>(initialSceneId);
  const [isAutoRotate, setIsAutoRotate] = useState<boolean>(true);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [panX, setPanX] = useState<number>(0); // degrees 0-360
  const [panY, setPanY] = useState<number>(0); // vertical tilt -30 to 30
  const [zoom, setZoom] = useState<number>(1); // zoom 0.8 to 1.6
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeHotspotModal, setActiveHotspotModal] = useState<TourHotspot | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef<boolean>(false);
  const lastMousePosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const currentScene = TOUR_SCENES.find((s) => s.id === currentSceneId) || TOUR_SCENES[0];

  // Auto-rotate effect
  useEffect(() => {
    let animId: number;
    const rotate = () => {
      if (isAutoRotate && !isDraggingRef.current) {
        setPanX((prev) => (prev + 0.12) % 360);
      }
      animId = requestAnimationFrame(rotate);
    };
    animId = requestAnimationFrame(rotate);
    return () => cancelAnimationFrame(animId);
  }, [isAutoRotate]);

  // Image load state reset
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 450);
    return () => clearTimeout(timer);
  }, [currentSceneId]);

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    setPanX((prev) => (prev - dx * 0.25 + 360) % 360);
    setPanY((prev) => Math.max(-30, Math.min(30, prev + dy * 0.15)));
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Touch drag handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      isDraggingRef.current = true;
      lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingRef.current || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - lastMousePosRef.current.x;
    const dy = e.touches[0].clientY - lastMousePosRef.current.y;
    lastMousePosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };

    setPanX((prev) => (prev - dx * 0.35 + 360) % 360);
    setPanY((prev) => Math.max(-30, Math.min(30, prev + dy * 0.2)));
  };

  const handleTouchEnd = () => {
    isDraggingRef.current = false;
  };

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Hotspot click action
  const handleHotspotClick = (hotspot: TourHotspot) => {
    if (hotspot.type === 'scene' && hotspot.targetSceneId) {
      setCurrentSceneId(hotspot.targetSceneId);
      setActiveHotspotModal(null);
    } else {
      setActiveHotspotModal(hotspot);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full rounded-3xl overflow-hidden bg-slate-950 shadow-2xl select-none border-2 border-[#C9A24B]/30 ${
        isFullscreen ? 'fixed inset-0 z-50 rounded-none border-none' : 'h-[620px] sm:h-[720px]'
      }`}
    >
      {/* 360 Equirectangular Viewport Canvas */}
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full h-full cursor-grab active:cursor-grabbing overflow-hidden relative"
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 bg-[#031955]/80 backdrop-blur-md z-40 flex flex-col items-center justify-center text-white space-y-3">
            <div className="w-12 h-12 border-4 border-[#C9A24B] border-t-transparent rounded-full animate-spin" />
            <p className="text-xs font-bold tracking-wider text-[#DFBE72] uppercase">
              Loading 360° Panorama Scene...
            </p>
          </div>
        )}

        {/* Panoramic Spherical Backdrop (repeats horizontally for seamless 360 wrap) */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url(${currentScene.imageUrl})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: `${zoom * 200}% auto`,
            backgroundPosition: `${(panX / 360) * 100}% calc(50% + ${panY * 3}px)`,
            filter: 'brightness(1.02) contrast(1.04)'
          }}
        />

        {/* Vignette & Soft Gradient for cinema immersion */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/40" />

        {/* Dynamic Clickable Hotspots overlay */}
        {currentScene.hotspots.map((hs) => {
          // Calculate visible position taking panX into account
          // Base hotspot X in percentage (0-100) -> degrees (0-360)
          const baseDeg = (hs.x / 100) * 360;
          // Relative angle difference (-180 to 180)
          let diffDeg = (baseDeg - panX + 540) % 360 - 180;
          
          // Field of view ~ 100 degrees
          const fov = 100 / zoom;
          const isVisible = Math.abs(diffDeg) < fov;
          const screenX = 50 + (diffDeg / fov) * 50;
          const screenY = hs.y + panY * 0.4;

          if (!isVisible) return null;

          return (
            <div
              key={hs.id}
              style={{
                left: `${screenX}%`,
                top: `${screenY}%`,
                transform: 'translate(-50%, -50%)',
              }}
              className="absolute z-20 pointer-events-auto"
            >
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleHotspotClick(hs);
                }}
                className="group relative flex flex-col items-center focus:outline-none"
              >
                {/* Hotspot Pin */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-125 border-2 ${
                    hs.type === 'scene'
                      ? 'bg-[#1882B2] border-white animate-soft-pulse'
                      : 'bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] border-[#031955]'
                  }`}
                >
                  {hs.type === 'scene' ? (
                    <Compass className="w-4 h-4 text-white" />
                  ) : (
                    <Store className="w-4 h-4 text-[#031955]" />
                  )}
                </div>

                {/* Hotspot Label Bubble */}
                <div className="mt-1.5 px-3 py-1 rounded-xl bg-black/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold whitespace-nowrap shadow-xl flex items-center gap-1.5 group-hover:bg-[#031955] transition-colors">
                  <span>{language === 'am' ? hs.titleAm : hs.title}</span>
                  {hs.type === 'scene' ? (
                    <ChevronRight className="w-3 h-3 text-[#DFBE72]" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24B]" />
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>

      {/* Top Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
        
        {/* Scene Title & Floor */}
        <div className="bg-[#031955]/85 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:px-4 sm:py-3 text-white pointer-events-auto shadow-xl max-w-sm">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[10px] font-bold text-[#DFBE72] uppercase tracking-wider">
              360° Virtual Scene
            </span>
          </div>
          <h3 className="font-extrabold text-sm sm:text-base text-white mt-0.5">
            {language === 'am' ? currentScene.titleAm : currentScene.title}
          </h3>
          <p className="text-[11px] text-slate-300">
            {language === 'am' ? currentScene.floorAm : currentScene.floor} • {language === 'am' ? currentScene.taglineAm : currentScene.tagline}
          </p>
        </div>

        {/* Viewport Control Buttons */}
        <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/20 text-white pointer-events-auto shadow-xl">
          <button
            type="button"
            onClick={() => setIsAutoRotate(!isAutoRotate)}
            title={isAutoRotate ? 'Pause auto-rotation' : 'Start auto-rotation'}
            className={`p-2 rounded-xl transition-colors ${
              isAutoRotate ? 'bg-[#C9A24B] text-[#031955] font-bold' : 'hover:bg-white/20 text-slate-200'
            }`}
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setZoom((z) => Math.min(1.5, z + 0.15))}
            title="Zoom in"
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setZoom((z) => Math.max(0.85, z - 0.15))}
            title="Zoom out"
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'Exit full screen' : 'Open full screen'}
            className="p-2 hover:bg-white/20 rounded-xl transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Bottom Scene Selector Bar */}
      <div className="absolute bottom-4 left-4 right-4 z-30 pointer-events-none flex flex-col sm:flex-row items-end sm:items-center justify-between gap-3">
        
        {/* Scene Selection Pills */}
        <div className="flex items-center gap-2 overflow-x-auto p-1.5 bg-black/75 backdrop-blur-md rounded-2xl border border-white/20 pointer-events-auto max-w-full scrollbar-none shadow-xl">
          {TOUR_SCENES.map((scene) => {
            const isActive = scene.id === currentSceneId;
            return (
              <button
                key={scene.id}
                type="button"
                onClick={() => {
                  setCurrentSceneId(scene.id);
                  setActiveHotspotModal(null);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{language === 'am' ? scene.titleAm : scene.title}</span>
              </button>
            );
          })}
        </div>

        {/* Hint text */}
        <div className="text-[11px] text-white/90 bg-black/60 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 pointer-events-auto hidden md:block">
          ↔ Drag mouse or swipe to rotate 360° • Click pins to navigate
        </div>

      </div>

      {/* Hotspot Preview Modal Card (When a store pin is clicked) */}
      {activeHotspotModal && activeHotspotModal.storeSlug && (
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-40 bg-white text-slate-900 rounded-2xl p-5 shadow-2xl border-2 border-[#C9A24B] max-w-sm w-[90%] animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E4C92]">
                Store Hotspot Highlight
              </span>
              <h4 className="font-extrabold text-base text-[#031955]">
                {language === 'am' ? activeHotspotModal.titleAm : activeHotspotModal.title}
              </h4>
            </div>
            <button
              type="button"
              onClick={() => setActiveHotspotModal(null)}
              className="text-slate-400 hover:text-slate-700 p-1 text-sm font-bold"
            >
              ✕
            </button>
          </div>

          {activeHotspotModal.description && (
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              {activeHotspotModal.description}
            </p>
          )}

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
            <Link
              href={`/stores/${activeHotspotModal.storeSlug}`}
              className="w-full py-2 px-3 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>{language === 'am' ? 'የመደብሩን ገጽ ይክፈቱ' : 'Visit Store Profile'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}

    </div>
  );
}
