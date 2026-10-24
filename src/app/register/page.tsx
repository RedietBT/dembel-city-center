'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import confetti from 'canvas-confetti';
import { useLanguage } from '@/context/LanguageContext';
import {
  Sparkles,
  CheckCircle2,
  User,
  Mail,
  Phone,
  ShieldCheck,
  Download,
  CreditCard,
  QrCode,
  ArrowRight,
  Gift,
  MapPin,
  Clock,
  Car,
  Compass,
  Train,
  Check
} from 'lucide-react';

export default function RegisterPage() {
  const { language } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interests: ['Fashion', 'Food & Dining'],
    consent: true
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [memberId, setMemberId] = useState('DCC-VIP-2026');

  const interestOptions = [
    'Fashion & Textiles',
    'Food & Dining',
    'Electronics & Gadgets',
    'Cinema & Entertainment',
    'Spa & Beauty',
    'Family & Kids',
    'Supermarket Specials'
  ];

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(interest);
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== interest) };
      } else {
        return { ...prev, interests: [...prev.interests, interest] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;

    // Generate random member code
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `DCC-VIP-${randomNum}`;
    setMemberId(newId);
    setIsSubmitted(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-[#C9A24B]/20 to-[#DFBE72]/20 text-[#031955] text-xs font-bold border border-[#C9A24B]/30">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
            <span>Digital VIP Pass • Free Registration</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'የደመበል ቪአይፒ አባልነት ምዝገባ' : 'Join Dembel VIP Privilege Club'}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {language === 'am'
              ? 'የነጻ ዲጂታል አባልነት ካርድዎን በQR ኮድ ያግኙ፤ በሱቆች ላይ የ5% - 15% ቅናሽ እና ነጻ የመኪና ማቆሚያ ይደሰቱ።'
              : 'Register in seconds to receive your instant digital membership card with QR code, exclusive store discounts, invitations to private sales, and 2-hour complimentary parking.'}
          </p>
        </div>

        {!isSubmitted ? (
          /* Registration Form */
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 block">
                  {language === 'am' ? 'ሙሉ ስም' : 'Full Name'} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Almaz Bekele"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E4C92] focus:bg-white"
                  />
                </div>
              </div>

              {/* Phone & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {language === 'am' ? 'ስልክ ቁጥር' : 'Phone Number'} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+251 91 123 4567"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E4C92] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    {language === 'am' ? 'ኢሜል አድራሻ' : 'Email Address'}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="almaz@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0E4C92] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Interests Checkboxes */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700 block">
                  {language === 'am' ? 'የፍላጎትዎ ዘርፎች (ለልዩ ቅናሾች)' : 'Shopping & Entertainment Interests'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {interestOptions.map((opt) => {
                    const isChecked = formData.interests.includes(opt);
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => handleInterestToggle(opt)}
                        className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-blue-50 border-[#0E4C92] text-[#031955] font-bold shadow-xs'
                            : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                        }`}
                      >
                        <span className="truncate">{opt}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#0E4C92] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Terms and Consent */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer text-xs text-slate-600">
                  <input
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    required
                    className="mt-0.5 rounded border-slate-300 text-[#0E4C92] focus:ring-[#0E4C92]"
                  />
                  <span>
                    I agree to join Dembel VIP Club and receive occasional SMS/email updates regarding exclusive promotions and seasonal events.
                  </span>
                </label>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#C9A24B] to-[#DFBE72] text-[#031955] shadow-lg hover:shadow-xl hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#031955]" />
                <span>{language === 'am' ? 'አባልነቴን አረጋግጥና ካርዴን አሳይ' : 'Generate Digital VIP Pass'}</span>
              </button>

            </form>
          </div>
        ) : (
          /* Success Screen with Digital VIP Membership Card */
          <div className="space-y-6 max-w-xl mx-auto animate-in fade-in zoom-in-95 duration-500">
            
            {/* Success Banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center space-y-1">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h2 className="font-extrabold text-lg text-emerald-950">
                {language === 'am' ? 'እንኳን ደስ አለዎት! ምዝገባዎ ተጠናቋል' : 'Registration Successful!'}
              </h2>
              <p className="text-xs text-emerald-800">
                Your Dembel VIP Privilege Card is activated and ready for instant use.
              </p>
            </div>

            {/* Premium Digital Membership Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 bg-gradient-to-tr from-[#031955] via-[#0E4C92] to-[#1882B2] text-white border-2 border-[#C9A24B]/60">
              {/* Card Ambient Watermark */}
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#C9A24B]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 flex flex-col justify-between h-full space-y-6">
                
                {/* Card Top Strip */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#C9A24B] to-[#DFBE72] p-[1.5px]">
                      <div className="w-full h-full bg-[#031955] rounded-[9px] flex items-center justify-center text-[#C9A24B] font-extrabold text-sm">
                        DCC
                      </div>
                    </div>
                    <div>
                      <span className="font-extrabold text-sm tracking-wide text-white block">
                        Dembel City Center
                      </span>
                      <span className="text-[10px] text-[#DFBE72] uppercase tracking-widest font-semibold">
                        VIP Privilege Member
                      </span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#C9A24B] text-[#031955] shadow-md uppercase">
                    Gold Tier
                  </span>
                </div>

                {/* Card Center: QR Code & Member Name */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div className="space-y-1 text-center sm:text-left">
                    <span className="text-[10px] uppercase tracking-widest text-[#DFBE72] font-semibold block">
                      Cardholder Name
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      {formData.fullName}
                    </h3>
                    <p className="text-xs text-slate-300 font-mono">
                      ID: {memberId}
                    </p>
                    <p className="text-[11px] text-slate-300">
                      Valid Thru: 12/2027 • Africa Ave, Addis
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="p-2.5 bg-white rounded-2xl shadow-lg shrink-0">
                    <QRCodeSVG
                      value={`https://dembelcenter.et/verify?code=${memberId}&holder=${encodeURIComponent(formData.fullName)}`}
                      size={100}
                      level="H"
                      includeMargin={false}
                    />
                  </div>
                </div>

                {/* Card Bottom Perks */}
                <div className="flex items-center justify-between text-[11px] text-slate-200 pt-2 border-t border-white/15">
                  <span>● 10% Off Participating Boutiques</span>
                  <span>● Free 2hr Parking Validation</span>
                </div>

              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-full sm:flex-1 py-3 rounded-xl bg-white text-[#031955] font-bold text-xs hover:bg-slate-100 transition-colors border border-slate-200 shadow-sm flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#0E4C92]" />
                <span>Print / Save Digital Pass</span>
              </button>

              <Link
                href="/stores"
                className="w-full sm:flex-1 py-3 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white font-bold text-xs transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <span>Explore Participating Stores</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-slate-500 hover:text-[#031955] underline"
              >
                Register another visitor
              </button>
            </div>

          </div>
        )}

        {/* MAP & VIP CONCIERGE PICKUP SECTION */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E4C92] uppercase tracking-wider mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                <span>Location & Card Collection</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#031955]">
                {language === 'am' ? 'የቪአይፒ ካርድ መውሰጃ እና የደመበል ካርታ' : 'VIP Concierge Desk & Location Map'}
              </h2>
            </div>
            
            <Link
              href="/floors?floor=ground"
              className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-[#031955] hover:text-white text-[#031955] text-xs font-bold transition-all flex items-center gap-1.5 shrink-0"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Ground Floor Blueprint</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Map Info Strip (5 cols) */}
            <div className="md:col-span-5 space-y-3.5 text-xs">
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-1">
                <span className="font-extrabold text-[#031955] text-sm block">
                  Ground Floor Central Concierge
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Present your digital QR pass at the central concierge counter in the main atrium to receive your official plastic RFID membership card or to validate your parking pass.
                </p>
              </div>

              <div className="space-y-2 text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0" />
                  <span>Africa Avenue (Bole Road), Olympia, Addis Ababa</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0E4C92] shrink-0" />
                  <span>Desk open daily: 8:30 AM – 9:30 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#1882B2] shrink-0" />
                  <span>Basement Parking: 2 hours free for VIP members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Train className="w-4 h-4 text-[#031955] shrink-0" />
                  <span>Olympia LRT Station: 3-minute walking distance</span>
                </div>
              </div>
            </div>

            {/* Interactive Visual Map Viewport (7 cols) */}
            <div className="md:col-span-7 relative h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200 shadow-inner bg-slate-100">
              {/* Map Illustration with SVG Grid and Landmarks */}
              <svg viewBox="0 0 500 300" className="w-full h-full select-none bg-[#EBF1F8]">
                {/* Streets */}
                <path d="M 0 160 L 500 160" stroke="#CBD5E1" strokeWidth="48" fill="none" />
                <path d="M 0 160 L 500 160" stroke="#F8FAFC" strokeWidth="2" strokeDasharray="10 8" fill="none" />
                <text x="250" y="165" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="bold" letterSpacing="2">
                  AFRICA AVENUE (BOLE ROAD)
                </text>

                <path d="M 120 0 L 120 300" stroke="#CBD5E1" strokeWidth="32" fill="none" />
                <text x="120" y="80" textAnchor="middle" fill="#94A3B8" fontSize="9" fontWeight="bold" transform="rotate(-90 120 80)">
                  OLYMPIA CONCOURSE
                </text>

                {/* Dembel Mall Footprint */}
                <rect x="220" y="30" width="230" height="100" rx="14" fill="#031955" stroke="#C9A24B" strokeWidth="3" />
                <text x="335" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">
                  DEMBEL CITY CENTER
                </text>
                <text x="335" y="85" textAnchor="middle" fill="#DFBE72" fontSize="9" fontWeight="bold">
                  ★ VIP CONCIERGE DESK (GROUND ATRIUM)
                </text>

                {/* Parking Entry Ramp */}
                <rect x="230" y="140" width="70" height="16" rx="4" fill="#1882B2" />
                <text x="265" y="152" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">
                  PARKING IN
                </text>

                {/* Metro LRT Station Marker */}
                <circle cx="80" cy="160" r="14" fill="#10B981" stroke="#FFFFFF" strokeWidth="2" />
                <text x="80" y="164" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">
                  LRT
                </text>
                <text x="80" y="190" textAnchor="middle" fill="#065F46" fontSize="8" fontWeight="bold">
                  Olympia Station
                </text>

                {/* Pin on Dembel */}
                <circle cx="335" cy="108" r="8" fill="#C9A24B" stroke="#FFFFFF" strokeWidth="2" />
              </svg>

              {/* Map Floating Control Overlay */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <a
                  href="https://maps.google.com/?q=Dembel+City+Center+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-xl bg-white/95 backdrop-blur-md text-[#031955] text-xs font-bold hover:bg-white shadow-md flex items-center gap-1.5 transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#0E4C92]" />
                  <span>Google Maps</span>
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
