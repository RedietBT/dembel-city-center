'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { STORES } from '@/data/stores';
import {
  Search,
  ArrowRight,
  Compass,
  ShoppingBag,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Clock,
  Car,
  MapPin
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
  const router = useRouter();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);

  // Auto advance slides
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  // Live quick search suggestions
  const searchSuggestions = searchQuery.trim()
    ? STORES.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.nameAm.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/stores?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/stores');
    }
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative overflow-hidden bg-slate-900 min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center transition-colors"
      aria-label="Hero Showcase Carousel"
    >
      {/* Background Image Carousel with Cross-Fade */}
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
          {/* Light & Contrast Overlay: Soft gradient preserving readability while keeping a bright, airy feeling */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#031955]/90 via-[#031955]/60 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031955]/95 via-transparent to-black/30" />
        </div>
      ))}

      {/* Decorative Light Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#DFBE72]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-24 w-full">
        <div className="max-w-3xl space-y-6">
          
          {/* Slide Category / Zone Tag */}
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-bold text-[#DFBE72] shadow-sm animate-soft-pulse">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>{language === 'am' ? slide.badge.am : slide.badge.en}</span>
            </div>
            <span className="text-[11px] font-semibold text-slate-200 hidden sm:inline bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              {language === 'am' ? slide.tag.am : slide.tag.en}
            </span>
          </div>

          {/* Dynamic Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            {language === 'am' ? slide.title.am : slide.title.en}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFBE72] via-[#C9A24B] to-amber-200 block sm:inline">
              {language === 'am' ? slide.highlight.am : slide.highlight.en}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal drop-shadow-sm">
            {language === 'am' ? slide.subtitle.am : slide.subtitle.en}
          </p>

          {/* Search Box on Hero */}
          <div className="pt-2 max-w-2xl relative">
            <form onSubmit={handleSearchSubmit} className="relative z-30">
              <div className="relative flex items-center bg-white/95 backdrop-blur-xl rounded-2xl p-1.5 shadow-2xl border-2 border-white/50 focus-within:border-[#C9A24B] transition-all">
                <div className="pl-3.5 text-slate-400">
                  <Search className="w-5 h-5 text-[#0E4C92]" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  placeholder={t.hero.searchPlaceholder}
                  className="w-full px-3 py-3 text-slate-900 placeholder-slate-400 text-xs sm:text-sm bg-transparent focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#031955] to-[#0E4C92] hover:from-[#0E4C92] hover:to-[#1882B2] text-white text-xs sm:text-sm font-bold shadow-md transition-all shrink-0 active:scale-95"
                >
                  {t.hero.searchButton}
                </button>
              </div>
            </form>

            {/* Autocomplete Dropdown */}
            {searchFocused && searchSuggestions.length > 0 && (
              <div
                onMouseLeave={() => setSearchFocused(false)}
                className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-40 text-left text-slate-900 animate-in fade-in slide-in-from-top-2"
              >
                <div className="text-[11px] font-bold text-slate-400 px-3 py-1 uppercase tracking-wider">
                  {language === 'am' ? 'የፍለጋ ውጤቶች' : 'Matching Stores & Cafés'}
                </div>
                {searchSuggestions.map((s) => (
                  <Link
                    key={s.id}
                    href={`/stores/${s.slug}`}
                    onClick={() => setSearchFocused(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#031955] font-bold text-xs flex items-center justify-center border border-blue-100">
                        {s.logoPlaceholder}
                      </div>
                      <div>
                        <div className="font-bold text-xs text-[#031955] group-hover:text-[#0E4C92]">
                          {language === 'am' ? s.nameAm : s.name}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {s.category} • Floor {s.floor} ({s.shopNumber})
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0E4C92] group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </div>
            )}

            {/* Quick Search Chips */}
            <div className="flex flex-wrap items-center gap-2 pt-3 text-xs text-slate-300">
              <span className="text-slate-300 font-medium">Quick search:</span>
              {[
                { q: 'coffee', label: language === 'am' ? 'ቡና (Coffee)' : 'Coffee' },
                { q: 'nile tech', label: 'Nile Tech' },
                { q: 'habesha', label: 'Habesha Threads' },
                { q: 'cinema', label: language === 'am' ? 'ሲኒማ' : 'Cinema' },
                { q: 'supermarket', label: language === 'am' ? 'ሱፐርማርኬት' : 'Supermarket' }
              ].map((item) => (
                <button
                  key={item.q}
                  type="button"
                  onClick={() => router.push(`/stores?search=${encodeURIComponent(item.q)}`)}
                  className="px-2.5 py-1 rounded-full bg-white/15 hover:bg-white/25 hover:text-white border border-white/20 text-[11px] font-medium transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-4">
            <Link
              href="/stores"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] shadow-lg hover:shadow-xl hover:brightness-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4 text-[#031955]" />
              <span>{t.hero.exploreStores}</span>
            </Link>
            <Link
              href="/tour"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm bg-white/15 hover:bg-white/25 border border-white/30 text-white shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-[#DFBE72]" />
              <span>{t.hero.takeTour}</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#031955] text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all active:scale-90 hidden sm:flex items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-[#031955] text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all active:scale-90 hidden sm:flex items-center justify-center"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators & Thumbnails Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        {HERO_SLIDES.map((s, idx) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}: ${s.badge.en}`}
            className={`transition-all rounded-full ${
              idx === currentSlide
                ? 'w-8 h-2.5 bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] shadow-md'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
