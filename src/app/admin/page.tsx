'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Users,
  Store,
  Car,
  TrendingUp,
  Search,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  Activity,
  Layers,
  ChevronRight,
  Calendar,
  LayoutDashboard
} from 'lucide-react';

export default function AdminPage() {
  const { language } = useLanguage();
  const [selectedTimeframe, setSelectedTimeframe] = useState<'today' | 'week' | 'month'>('today');

  const hourlyFootfall = [
    { hour: '8 AM', visitors: 420 },
    { hour: '10 AM', visitors: 1150 },
    { hour: '12 PM', visitors: 2840 },
    { hour: '2 PM', visitors: 2210 },
    { hour: '4 PM', visitors: 3120 },
    { hour: '6 PM', visitors: 3950 },
    { hour: '8 PM', visitors: 2880 },
    { hour: '10 PM', visitors: 1250 }
  ];

  const maxVisitors = Math.max(...hourlyFootfall.map((h) => h.visitors));

  const topSearches = [
    { term: 'Coffee & Cafés', count: 1420, growth: '+24%' },
    { term: 'Nile Tech / MacBooks', count: 980, growth: '+18%' },
    { term: 'Habesha Threads Kemis', count: 875, growth: '+15%' },
    { term: 'Lion City Cinema Schedule', count: 820, growth: '+31%' },
    { term: 'Basement Parking Rates', count: 640, growth: '+8%' },
    { term: 'Lucy Gold & Opal Jewelry', count: 510, growth: '+12%' }
  ];

  const recentRegistrations = [
    { id: 'REG-9812', name: 'Almaz Tadesse', category: 'Fashion & Textiles', time: '4 mins ago', tier: 'Gold VIP' },
    { id: 'REG-9811', name: 'Dawit Getachew', category: 'Electronics', time: '18 mins ago', tier: 'Gold VIP' },
    { id: 'REG-9810', name: 'Sara Mohammed', category: 'Food & Dining', time: '35 mins ago', tier: 'Gold VIP' },
    { id: 'REG-9809', name: 'Elias Kebede', category: 'Cinema & Family', time: '1 hour ago', tier: 'Gold VIP' }
  ];

  return (
    <div className="min-h-screen bg-[#031955] text-slate-100 py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Pitch Notification Banner */}
        <div className="bg-gradient-to-r from-[#0E4C92] to-[#1882B2] rounded-2xl p-4 sm:p-5 border border-white/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C9A24B] text-[#031955] flex items-center justify-center shrink-0 font-bold">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#DFBE72]">
                Executive Mall Management Preview
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-white">
                DCC Smart Retail Intelligence Dashboard
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-300">Live Telemetry Feeds</span>
          </div>
        </div>

        {/* Timeframe Selector */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Center Performance & Footfall
            </h1>
            <p className="text-xs text-slate-300 mt-0.5">
              Africa Avenue Complex • Real-time visitor analytics
            </p>
          </div>

          <div className="flex items-center bg-white/10 p-1 rounded-xl text-xs font-semibold border border-white/15">
            {(['today', 'week', 'month'] as const).map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSelectedTimeframe(t)}
                className={`px-3 py-1.5 rounded-lg capitalize transition-colors ${
                  selectedTimeframe === t ? 'bg-[#C9A24B] text-[#031955] font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Metric Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Metric 1 */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md shadow-md space-y-2">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-xs font-medium uppercase tracking-wider">Today's Footfall</span>
              <Users className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">18,670</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> +14.2%
              </span>
            </div>
            <p className="text-[11px] text-slate-400">vs same day last week (16,340)</p>
          </div>

          {/* Metric 2 */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md shadow-md space-y-2">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-xs font-medium uppercase tracking-wider">Retail Tenancy Rate</span>
              <Store className="w-5 h-5 text-[#DFBE72]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">98.4%</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> +2.1%
              </span>
            </div>
            <p className="text-[11px] text-slate-400">214 of 220 active occupied retail units</p>
          </div>

          {/* Metric 3 */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md shadow-md space-y-2">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-xs font-medium uppercase tracking-wider">Basement Parking</span>
              <Car className="w-5 h-5 text-[#1882B2]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">78%</span>
              <span className="text-xs text-slate-300">390 / 500 bays</span>
            </div>
            <p className="text-[11px] text-slate-400">Avg dwell duration: 1 hr 45 min</p>
          </div>

          {/* Metric 4 */}
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-md shadow-md space-y-2">
            <div className="flex items-center justify-between text-slate-300">
              <span className="text-xs font-medium uppercase tracking-wider">VIP Registrations</span>
              <Sparkles className="w-5 h-5 text-[#C9A24B]" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white">4,892</span>
              <span className="text-xs font-bold text-emerald-400 flex items-center">
                <ArrowUpRight className="w-3.5 h-3.5" /> +128 today
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Active digital membership passholders</p>
          </div>

        </div>

        {/* Charts & Search Intel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Hourly Footfall Histogram (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Visitor Traffic Density by Hour
                </h3>
                <p className="text-xs text-slate-300">Monitored via optical doorway sensors</p>
              </div>
              <span className="text-xs font-bold text-[#DFBE72]">Peak: 6 PM - 8 PM</span>
            </div>

            {/* Custom CSS Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2 pt-8 pb-2 border-b border-white/10">
              {hourlyFootfall.map((h) => {
                const heightPercent = (h.visitors / maxVisitors) * 100;
                return (
                  <div key={h.hour} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                    <div className="text-[10px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      {h.visitors}
                    </div>
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="w-full bg-gradient-to-t from-[#0E4C92] to-[#DFBE72] rounded-t-lg group-hover:brightness-125 transition-all shadow-md relative"
                    />
                    <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap">
                      {h.hour}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span>● Morning Coffee Rush: 8:30 AM</span>
              <span>● Evening Dining & Cinema Peak: 6:00 PM – 9:00 PM</span>
            </div>
          </div>

          {/* Right: Search Intelligence & Keyword Analytics (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-md space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Top Consumer Queries
                </h3>
                <p className="text-xs text-slate-300">Front-end search & AI Concierge queries</p>
              </div>
              <Search className="w-5 h-5 text-[#C9A24B]" />
            </div>

            <div className="space-y-3">
              {topSearches.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center font-bold text-xs text-[#DFBE72]">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-xs text-white">{item.term}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-slate-200 block">{item.count}</span>
                    <span className="text-[10px] font-bold text-emerald-400">{item.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Recent VIP Registrations Feed */}
        <div className="bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 backdrop-blur-md space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="font-extrabold text-base sm:text-lg text-white">
                Recent VIP Membership Registrations
              </h3>
              <p className="text-xs text-slate-300">Live stream from /register web portal</p>
            </div>
            <Link
              href="/register"
              className="px-3.5 py-1.5 rounded-xl bg-[#C9A24B] text-[#031955] font-bold text-xs hover:bg-[#DFBE72] transition-colors"
            >
              Test Register Form
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="text-slate-400 border-b border-white/10 uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="pb-3">Member ID</th>
                  <th className="pb-3">Name</th>
                  <th className="pb-3">Category Interest</th>
                  <th className="pb-3">Time</th>
                  <th className="pb-3">Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-200">
                {recentRegistrations.map((row) => (
                  <tr key={row.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3 font-mono font-bold text-[#DFBE72]">{row.id}</td>
                    <td className="py-3 font-bold text-white">{row.name}</td>
                    <td className="py-3 text-slate-300">{row.category}</td>
                    <td className="py-3 text-slate-400">{row.time}</td>
                    <td className="py-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#C9A24B]/20 text-[#DFBE72] border border-[#C9A24B]/30">
                        {row.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
