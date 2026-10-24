'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Building,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General Inquiries',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && (form.email || form.phone)) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({
          name: '',
          email: '',
          phone: '',
          department: 'General Inquiries',
          message: ''
        });
      }, 4000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
            <Phone className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>Customer Concierge & Leasing Directorate</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'ያግኙን • የደመበል ሲቲ ሴንተር' : 'Contact Dembel City Center'}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {language === 'am'
              ? 'ስለ ሱቆች ኪራይ፣ የባንክ አገልግሎት፣ የቪአይፒ አባልነት ወይም ስለ ዝግጅቶች ጥያቄ ካለዎት እኛን ለማነጋገር አያመንቱ።'
              : 'Whether you are inquiring about retail boutique leasing, planning an executive VIP visit, or seeking guest assistance, our team is at your service.'}
          </p>
        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0E4C92] flex items-center justify-center shrink-0 border border-blue-100">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#031955]">Call Concierge Desk</h3>
              <p className="text-xs text-slate-600 mt-1">
                +251 11 551 0101<br />
                Direct Mobile: +251 91 122 3344<br />
                Daily 8:30 AM – 9:30 PM
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#031955]">WhatsApp Support</h3>
              <p className="text-xs text-slate-600 mt-1">
                +251 91 122 3344<br />
                Instant store wayfinding &<br />
                event scheduling
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#C9A24B] flex items-center justify-center shrink-0 border border-amber-100">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#031955]">Official Email</h3>
              <p className="text-xs text-slate-600 mt-1">
                concierge@dembelcenter.et<br />
                leasing@dembelcenter.et<br />
                events@dembelcenter.et
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Office Hours Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E4C92]">
                Direct Message
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#031955]">
                {language === 'am' ? 'መልእክትዎን እዚህ ያስገቡ' : 'Send an Inquiry or Feedback'}
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Fill in the form below and our management team will reply within 2 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-extrabold text-lg text-emerald-950">
                  {language === 'am' ? 'መልእክትዎ ደርሶናል! እናመሰግናለን' : 'Thank You! Message Received.'}
                </h4>
                <p className="text-xs text-emerald-800 max-w-sm mx-auto">
                  Your inquiry has been assigned to our customer concierge desk. We will reach back shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Almaz Bekele"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="almaz@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Phone Number</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+251 91 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Subject / Department</label>
                    <select
                      value={form.department}
                      onChange={(e) => setForm({ ...form, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92] cursor-pointer"
                    >
                      <option value="General Inquiries">General Visitor Inquiries</option>
                      <option value="Retail Leasing">Retail Boutique Leasing</option>
                      <option value="VIP Club">VIP Privilege Club Support</option>
                      <option value="Events & Sponsorship">Events & Sponsorship</option>
                      <option value="Lost & Found">Lost & Found</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Please let us know how we can assist..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#031955] to-[#0E4C92] hover:brightness-110 text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-98 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Map & Location Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-md space-y-4">
              <h3 className="font-extrabold text-base text-[#031955]">
                Dembel Location & Transit
              </h3>

              <div className="space-y-3 text-xs text-slate-600">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Physical Address</strong>
                    <span>Africa Avenue (Bole Road), Olympia Area, Kirkos Sub-City, Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#0E4C92] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Mall Hours</strong>
                    <span>Mon – Sun: 8:30 AM – 9:30 PM (Blue Nile Supermarket 7:30 AM)</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#1882B2] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 block">Executive Offices</strong>
                    <span>Floor 3, Administrative Concourse, Dembel City Center</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href="https://maps.google.com/?q=Dembel+City+Center+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#031955] hover:text-white text-[#031955] font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#C9A24B]" />
                  <span>Open in Google Maps</span>
                </a>

                <Link
                  href="/floors?floor=ground"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Compass className="w-4 h-4 text-[#DFBE72]" />
                  <span>Locate Concierge on Floor Blueprint</span>
                </Link>
              </div>
            </div>

            {/* Quick FAQ Hint */}
            <div className="bg-gradient-to-tr from-[#031955] to-[#0E4C92] rounded-3xl p-6 text-white space-y-2">
              <h4 className="font-bold text-sm text-[#DFBE72] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>Instant Answers via AI Concierge</span>
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed">
                Need fast answers about store locations, parking rates, or today's offers? Try our AI Concierge bot floating on the bottom right!
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
