'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { STORES, CATEGORIES, FLOORS, Store } from '@/data/stores';
import StoreCard from '@/components/StoreCard';
import { useLanguage } from '@/context/LanguageContext';
import {
  Search,
  Filter,
  ArrowUpDown,
  ShoppingBag,
  RotateCcw,
  Sparkles,
  Layers
} from 'lucide-react';

function StoreDirectoryContent() {
  const { language, t } = useLanguage();
  const searchParams = useSearchParams();

  // Initial params
  const initialSearch = searchParams.get('search') || '';
  const initialCategory = searchParams.get('category') || 'All';
  const initialFloor = searchParams.get('floor') || 'All';

  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedFloor, setSelectedFloor] = useState<string>(initialFloor);
  const [sortBy, setSortBy] = useState<'name-asc' | 'name-desc' | 'rating'>('name-asc');

  // Filter & Sort
  const filteredStores = useMemo(() => {
    return STORES.filter((store) => {
      // Category filter
      if (selectedCategory !== 'All' && store.category !== selectedCategory) {
        return false;
      }
      // Floor filter
      if (selectedFloor !== 'All' && store.floor !== selectedFloor) {
        return false;
      }
      // Search query
      if (search.trim()) {
        const query = search.toLowerCase();
        const matchesName = store.name.toLowerCase().includes(query);
        const matchesNameAm = store.nameAm.toLowerCase().includes(query);
        const matchesDesc = store.shortDescription.toLowerCase().includes(query);
        const matchesTags = store.tags.some((tag) => tag.toLowerCase().includes(query));
        const matchesShop = store.shopNumber.toLowerCase().includes(query);
        if (!matchesName && !matchesNameAm && !matchesDesc && !matchesTags && !matchesShop) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });
  }, [search, selectedCategory, selectedFloor, sortBy]);

  const handleReset = () => {
    setSearch('');
    setSelectedCategory('All');
    setSelectedFloor('All');
    setSortBy('name-asc');
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>25+ Premier Brands & Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'የደመበል መደብሮች ማውጫ' : 'Store & Dining Directory'}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {language === 'am'
              ? 'ፋሽን፣ ኤሌክትሮኒክስ፣ ባህላዊ ካፌዎች፣ ሲኒማ እና የባንክ አገልግሎቶችን በቀላሉ ያግኙ።'
              : 'Browse our curated collection of premier fashion flagships, artisan Ethiopian coffee bars, electronics, beauty salons, and family entertainment.'}
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-200/90 space-y-5">
          
          {/* Top Row: Search input & Sort */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.filters.search}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E4C92] focus:bg-white transition-all"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600 bg-slate-200 rounded-full w-5 h-5 flex items-center justify-center font-bold"
                >
                  ×
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="md:col-span-4 flex items-center gap-2">
              <div className="relative w-full">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  aria-label={t.filters.sortBy}
                  className="w-full appearance-none px-3.5 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0E4C92] pr-10 cursor-pointer"
                >
                  <option value="name-asc">{t.filters.nameAsc}</option>
                  <option value="name-desc">{t.filters.nameDesc}</option>
                  <option value="rating">{t.filters.rating}</option>
                </select>
                <ArrowUpDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-3.5 pointer-events-none" />
              </div>

              {(search || selectedCategory !== 'All' || selectedFloor !== 'All') && (
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset all filters"
                  aria-label="Reset all filters"
                  className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors shrink-0"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Filter className="w-3.5 h-3.5 text-[#C9A24B]" />
              <span>{t.filters.category}:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      active
                        ? 'bg-[#031955] text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Floor Filter Chips */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5 text-[#1882B2]" />
              <span>{t.filters.floor}:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {FLOORS.map((fl) => {
                const active = selectedFloor === fl;
                return (
                  <button
                    key={fl}
                    type="button"
                    onClick={() => setSelectedFloor(fl)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      active
                        ? 'bg-[#0E4C92] text-white shadow-sm'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {fl === 'All' ? 'All Floors' : `${fl} Floor`}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1">
          <span>
            {language === 'am'
              ? `${filteredStores.length} ${t.filters.resultsCount}`
              : `Showing ${filteredStores.length} stores`}
          </span>
          {search && (
            <span>
              Searching for: <strong className="text-[#031955]">"{search}"</strong>
            </span>
          )}
        </div>

        {/* Stores Grid */}
        {filteredStores.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/80 shadow-sm max-w-md mx-auto space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 text-[#C9A24B] flex items-center justify-center mx-auto">
              <Search className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-lg text-[#031955]">
              {language === 'am' ? 'ምንም መደብር አልተገኘም' : 'No Stores Found'}
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              {language === 'am'
                ? 'እባክዎ የተለየ ቃል ይፈልጉ ወይም ፊልተሮቹን ይቀይሩ።'
                : `We couldn't find any stores matching "${search}". Try searching for "coffee", "fashion", or resetting your filters.`}
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2 rounded-xl bg-[#031955] text-white text-xs font-bold hover:bg-[#0E4C92] transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default function StoresPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-slate-500 text-sm">
          Loading Store Directory...
        </div>
      }
    >
      <StoreDirectoryContent />
    </Suspense>
  );
}
