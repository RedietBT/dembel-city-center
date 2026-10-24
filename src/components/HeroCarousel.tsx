'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Compass,
  ShoppingBag,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

interface Slide {
  id: string;
  image: string;
  badge: { en: string; am: string };
  title: { en: string; am: string };
  highlight: { en: string; am: string };
  subtitle: { en: string; am: string };
  tag: { en: string; am: string };
}

const HERO_SLIDES: Slide[] = [
  {
    id: 'slide-1',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=2000&q=85',
    badge: { en: 'Grand Central Atrium', am: 'ዋናው ማዕከላዊ አዳራሽ' },
    title: { en: 'Addis Ababa’s Landmark', am: 'የአዲስ አበባ ታዋቂው' },
    highlight: { en: 'Shopping & Cultural Destination', am: 'የግብይትና የባህል ማዕከል' },
    subtitle: {
      en: 'Experience elevated retail, artisanal Ethiopian coffee, and contemporary fashion inside our sunlit glass dome along Africa Avenue.',
      am: 'በአፍሪካ ጎዳና (ቦሌ መንገድ) በሚገኘው የደመበል ማዕከል ውስጥ የተመረጡ ሱቆችን፣ ምርጥ ቡናን እና ባህላዊ አልባሳትን ያግኙ።'
    },
    tag: { en: '200+ Stores & Boutiques', am: '200+ መደብሮች' }
  },
  {
    id: 'slide-2',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=85',
    badge: { en: 'Fashion Boulevard', am: 'የፋሽን መተላለፊያ' },
    title: { en: 'Bespoke Ethiopian &', am: 'ዘመናዊ የኢትዮጵያ እና' },
    highlight: { en: 'International Haute Couture', am: 'ዓለም አቀፍ የፋሽን ዲዛይን' },
    subtitle: {
      en: 'Discover traditional Shemane handwoven textiles, Habesha Threads, fine leather goods, and certified Wollo fire opal jewelry.',
      am: 'በእጅ የተሸመኑ የጥበብ አልባሳት፣ የቆዳ ውጤቶች እና ልዩ የኦፓል ጌጣጌጦችን ይጎብኙ።'
    },
    tag: { en: 'Level 1 Designer Wing', am: '1ኛ ፎቅ የፋሽን ክንፍ' }
  },
  {
    id: 'slide-3',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2000&q=85',
    badge: { en: 'Artisan Culinary & Coffee', am: 'የቡና እና የምግብ መዳረሻ' },
    title: { en: 'Single-Origin Roasts &', am: 'የይርጋጨፌ ቡና እና' },
    highlight: { en: 'Skyline Terrace Dining', am: 'የሰገነት ላይ ድንቅ ምግቦች' },
    subtitle: {
      en: 'From freshly poured clay pot Jebena to Italian sourdough pastries and rooftop espresso lounges overlooking Bole Road.',
      am: 'ከተመረጠ የጀበና ቡና እስከ ጣፋጭ ኬኮች እና የከተማዋን ውበት እያዩ የሚዝናኑበት ሰገነት።'
    },
    tag: { en: 'Level 2 Food Court', am: '2ኛ ፎቅ ምግብ አዳራሽ' }
  },
  {
    id: 'slide-4',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=85',
    badge: { en: 'Fine Jewelry & Luxury', am: 'የወርቅና የጌጣጌጥ መደዳ' },
    title: { en: 'Lucy Gold, Watches &', am: 'ሉሲ ወርቅ፣ ሰዓቶች እና' },
    highlight: { en: 'Precious Ethiopian Gemstones', am: 'ውድ የኢትዮጵያ እንቁዎች' },
    subtitle: {
      en: 'Master jewelers crafting certified 21k gold filigree, wedding rings, Swiss timepieces, and luxury fragrance extracts.',
      am: 'የ21 ካራት ወርቅ፣ የሰርግ ቀለበቶች፣ የስዊስ ሰዓቶች እና የተመረጡ የፈረንሳይ ሽቶዎች።'
    },
    tag: { en: 'Ground Floor Luxury', am: 'ምድር ወለል የጌጣጌጥ ክንፍ' }
  }
];

export default function HeroCarousel() {
  const { language, t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance slides
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-slate-100 min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center select-none"
      aria-label="Dembel City Center Hero"
    >
      {/* Background Image Carousel with Light, Natural Vignette */}
      {HERO_SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <Image
            src={s.image}
            alt={s.badge.en}
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Light, Airy Gradient Overlays: Bright left tint for crisp legibility, airy right side showcasing natural daylight photography */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
        </div>
      ))}

      {/* Subtle ambient light glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content - Clean, Airy, No Huge Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-20 w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* Badge */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-xs font-bold text-[#12427D] shadow-2xs animate-soft-pulse">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>{language === 'am' ? slide.badge.am : slide.badge.en}</span>
            </div>
            <span className="text-[11px] font-semibold text-slate-600 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs hidden sm:inline">
              {language === 'am' ? slide.tag.am : slide.tag.en}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#12427D] tracking-tight leading-[1.12]">
            {language === 'am' ? slide.title.am : slide.title.en}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E5EA8] via-[#C9A24B] to-[#12427D] block sm:inline">
              {language === 'am' ? slide.highlight.am : slide.highlight.en}
            </span>
          </h1>

          {/* Clean Subtitle */}
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal max-w-xl">
            {language === 'am' ? slide.subtitle.am : slide.subtitle.en}
          </p>

          {/* Clean Minimalist CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
            <Link
              href="/stores"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-[#12427D] hover:bg-[#1E5EA8] text-white shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#DFBE72]" />
              <span>{t.hero.exploreStores}</span>
            </Link>

            <Link
              href="/tour"
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-slate-50 border border-slate-200 text-[#12427D] shadow-xs active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-[#C9A24B]" />
              <span>{t.hero.takeTour}</span>
            </Link>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 py-3 text-xs sm:text-sm font-semibold text-slate-600 hover:text-[#12427D] flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{language === 'am' ? 'ያግኙን' : 'Contact Us'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* Prev / Next Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-[#12427D] backdrop-blur-md border border-slate-200/80 shadow-xs transition-all active:scale-90 hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-700 hover:text-[#12427D] backdrop-blur-md border border-slate-200/80 shadow-xs transition-all active:scale-90 hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200/80 shadow-xs">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all rounded-full ${
              idx === currentSlide
                ? 'w-7 h-2 bg-[#12427D]'
                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
