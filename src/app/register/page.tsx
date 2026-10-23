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
  Gift
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
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

      </div>
    </div>
  );
}
