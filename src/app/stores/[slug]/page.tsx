import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { STORES, Store } from '@/data/stores';
import StoreCard from '@/components/StoreCard';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  MessageCircle,
  Star,
  ChevronLeft,
  Share2,
  Tag,
  Compass,
  CheckCircle,
  Building,
  ArrowRight
} from 'lucide-react';

export async function generateStaticParams() {
  return STORES.map((store) => ({
    slug: store.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const store = STORES.find((s) => s.slug === slug);
  if (!store) {
    return { title: 'Store Not Found | Dembel City Center' };
  }
  return {
    title: `${store.name} (${store.floor} Floor, Shop ${store.shopNumber}) | Dembel City Center`,
    description: store.shortDescription,
    openGraph: {
      title: `${store.name} • Dembel City Center Addis Ababa`,
      description: store.shortDescription,
      images: [{ url: store.image }],
    },
  };
}

export default async function StoreDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const store = STORES.find((s) => s.slug === slug);

  if (!store) {
    notFound();
  }

  // Related stores in same category
  const relatedStores = STORES.filter(
    (s) => s.category === store.category && s.slug !== store.slug
  ).slice(0, 3);

  // Floor query param for floor map
  const floorQueryMap: Record<string, string> = {
    'Basement': 'basement',
    'Ground': 'ground',
    '1st': 'first',
    '2nd': 'second'
  };
  const targetFloor = floorQueryMap[store.floor] || 'ground';

  return (
    <div className="min-h-screen bg-[#F6F8FC] pb-20">
      
      {/* Top Breadcrumb Nav */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#031955] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/stores" className="hover:text-[#031955] transition-colors">Stores</Link>
            <span>/</span>
            <span className="text-[#031955] font-semibold truncate max-w-[200px]">{store.name}</span>
          </div>

          <Link
            href="/stores"
            className="inline-flex items-center gap-1 font-bold text-[#0E4C92] hover:text-[#031955]"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to All Stores</span>
          </Link>
        </div>
      </div>

      {/* Hero Header */}
      <div className="relative bg-[#031955] text-white">
        <div className="relative h-72 sm:h-96 w-full overflow-hidden opacity-45">
          <Image
            src={store.image}
            alt={store.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#031955] via-[#031955]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-24 sm:-mt-32 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            
            <div className="flex items-start gap-4 sm:gap-6">
              {/* Logo / Monogram */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-2xl bg-white shadow-2xl p-2 border-2 border-white/40 shrink-0 flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#031955] to-[#0E4C92] flex items-center justify-center text-white font-extrabold text-xl sm:text-2xl shadow-inner">
                  {store.logoPlaceholder}
                </div>
              </div>

              {/* Title & Metas */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#C9A24B] text-[#031955] shadow-sm">
                    {store.category}
                  </span>
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-semibold text-white">
                    <Star className="w-3.5 h-3.5 text-[#DFBE72] fill-[#DFBE72]" />
                    <span>{store.rating.toFixed(1)} / 5.0</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {store.name}
                </h1>
                <p className="text-sm text-[#DFBE72] font-medium">{store.nameAm}</p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-4 h-4 text-[#C9A24B]" />
                    {store.floor} Floor • Shop {store.shopNumber}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#C9A24B]" />
                    {store.hours}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <a
                href={`tel:${store.phone.replace(/\s+/g, '')}`}
                className="px-4 py-2.5 rounded-xl bg-white text-[#031955] font-bold text-xs hover:bg-slate-100 transition-colors shadow-md flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#0E4C92]" />
                <span>Call Store</span>
              </a>

              {store.whatsapp && (
                <a
                  href={`https://wa.me/${store.whatsapp.replace('+', '')}?text=Hello%20from%20Dembel%20website`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors shadow-md flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              )}

              <Link
                href={`/floors?floor=${targetFloor}&store=${store.slug}`}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] font-bold text-xs hover:brightness-105 transition-all shadow-md flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-[#031955]" />
                <span>Find on Floor Map</span>
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column (8 cols): Details & Highlight Offer */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Highlight Offer Banner if present */}
            {store.highlightOffer && (
              <div className="bg-gradient-to-r from-amber-50 to-amber-100/60 border-2 border-[#C9A24B]/40 rounded-2xl p-5 shadow-sm flex items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#C9A24B] text-[#031955] flex items-center justify-center shrink-0 shadow-sm font-bold">
                    <Tag className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#031955]">
                      Active In-Store Promotion
                    </span>
                    <h3 className="font-extrabold text-sm sm:text-base text-[#031955]">
                      {store.highlightOffer}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Mention this offer at the counter or show this page for instant validation.
                    </p>
                  </div>
                </div>

                <Link
                  href="/offers"
                  className="px-3 py-2 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white text-xs font-bold transition-colors whitespace-nowrap shrink-0 hidden sm:inline-flex items-center gap-1"
                >
                  <span>All Offers</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}

            {/* Description Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <h2 className="text-lg font-bold text-[#031955] mb-3">About {store.name}</h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {store.description}
                </p>
              </div>

              {/* Amharic Description Box */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-1">
                <span className="font-bold text-[#031955] block">ስለ መደብሩ (አማርኛ)፡</span>
                <p>{store.descriptionAm}</p>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Keywords & Categories
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {store.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floor Map Teaser */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center shrink-0 border border-blue-100">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#031955]">
                    Locate {store.name} on Floor Map
                  </h3>
                  <p className="text-xs text-slate-500">
                    Floor: {store.floor} • Unit: {store.shopNumber}
                  </p>
                </div>
              </div>

              <Link
                href={`/floors?floor=${targetFloor}&store=${store.slug}`}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white text-xs font-bold transition-all text-center shrink-0 flex items-center justify-center gap-2"
              >
                <span>Open {store.floor} Floor Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column (4 cols): Store Info Card */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm space-y-5">
              <h3 className="font-bold text-base text-[#031955] border-b border-slate-100 pb-3">
                Store Information
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Floor & Shop Number</span>
                  <span className="font-bold text-sm text-[#031955]">
                    {store.floor} Floor, Shop {store.shopNumber}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Operating Hours</span>
                  <span className="font-semibold text-slate-800">{store.hours}</span>
                  <span className="block text-[11px] text-emerald-600 font-semibold mt-0.5">
                    ● Open Today
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Telephone</span>
                  <a href={`tel:${store.phone.replace(/\s+/g, '')}`} className="font-semibold text-[#0E4C92] hover:underline">
                    {store.phone}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Direct Inquiries</span>
                  <a href={`mailto:${store.email}`} className="font-semibold text-[#0E4C92] hover:underline">
                    {store.email}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 block font-medium">Accepted Payments</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {['Telebirr', 'CBE Birr', 'Cash (ETB)', 'Visa / Mastercard'].map((p) => (
                      <span key={p} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] text-slate-600 font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <Link
                  href="/visit"
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#031955] text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-slate-200"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>Getting to Dembel (Parking & Transit)</span>
                </Link>
              </div>
            </div>

            {/* Mall Amenities Quick Widget */}
            <div className="bg-gradient-to-br from-[#031955] to-[#0E4C92] rounded-2xl p-6 text-white space-y-3">
              <h4 className="font-bold text-sm text-[#DFBE72]">Need Assistance?</h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Our main concierges in the ground floor atrium can guide you directly to {store.name}.
              </p>
              <div className="pt-1">
                <a
                  href="tel:+251115510101"
                  className="w-full py-2 px-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 border border-white/20"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DFBE72]" />
                  <span>Call Concierge Desk</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* More in this category section */}
        {relatedStores.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-[#031955]">
                  More in {store.category}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Discover similar shops and experiences at Dembel
                </p>
              </div>
              <Link
                href={`/stores?category=${encodeURIComponent(store.category)}`}
                className="text-xs font-bold text-[#0E4C92] hover:underline"
              >
                View all {store.category}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedStores.map((item) => (
                <StoreCard key={item.id} store={item} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
