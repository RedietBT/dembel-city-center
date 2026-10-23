'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  XCircle,
  FileText,
  Calendar,
  Building,
  ArrowRight
} from 'lucide-react';

interface CertificateRecord {
  code: string;
  type: string;
  typeAm: string;
  issuedTo: string;
  issueDate: string;
  expiryDate: string;
  status: 'Active & Verified' | 'Expired' | 'Suspended';
  details: string;
  detailsAm: string;
  authority: string;
}

const MOCK_CERTIFICATES: Record<string, CertificateRecord> = {
  'DCC-2026-0001': {
    code: 'DCC-2026-0001',
    type: 'Official Retail Tenancy & Authenticity License',
    typeAm: 'ይፋዊ የችርቻሮ ኪራይ እና የእውነተኛነት ፈቃድ',
    issuedTo: 'Habesha Threads Couture PLC',
    issueDate: 'January 10, 2026',
    expiryDate: 'December 31, 2028',
    status: 'Active & Verified',
    details: 'Authorized certified flagship retailer occupying Shop 1-04, First Floor, Dembel City Center.',
    detailsAm: 'በደመበል ሲቲ ሴንተር አንደኛ ፎቅ ሱቅ 1-04 ላይ ህጋዊ ፈቃድ ያለው የችርቻሮ መደብር።',
    authority: 'Dembel City Center Commercial Directorate'
  },
  'DCC-VIP-2026': {
    code: 'DCC-VIP-2026',
    type: 'VIP Gold Privilege Club Digital Pass',
    typeAm: 'የቪአይፒ ጎልድ ክለብ ዲጂታል አባልነት',
    issuedTo: 'Verified Digital Passholder',
    issueDate: 'March 01, 2026',
    expiryDate: 'December 31, 2027',
    status: 'Active & Verified',
    details: 'Eligible for 10% boutique discount privilege and 2 hours complimentary parking validation.',
    detailsAm: 'የ10% ቅናሽ እና የ2 ሰዓት ነጻ የመኪና ማቆሚያ መብት ያለው ህጋዊ ዲጂታል አባልነት።',
    authority: 'Dembel Guest Loyalty Administration'
  },
  'DCC-LEASE-G02': {
    code: 'DCC-LEASE-G02',
    type: 'Food & Beverage Health & Safety Certification',
    typeAm: 'የምግብና መጠጥ ጤና እና ንፅህና ማረጋገጫ',
    issuedTo: 'Addis Bean Coffee Roasters',
    issueDate: 'February 15, 2026',
    expiryDate: 'February 14, 2027',
    status: 'Active & Verified',
    details: 'Passed Grade A hygiene and artisan food preparation inspection for Unit G-02.',
    detailsAm: 'በምድር ወለል G-02 ለሚገኘው የቡና ማዕከል የተሰጠ የላቀ የንፅህና ማረጋገጫ።',
    authority: 'Addis Ababa City Administration & DCC Health Unit'
  }
};

function VerifyContent() {
  const { language } = useLanguage();
  const searchParams = useSearchParams();
  const initialCode = searchParams.get('code') || '';

  const [queryCode, setQueryCode] = useState(initialCode || 'DCC-2026-0001');
  const [result, setResult] = useState<CertificateRecord | null | 'NOT_FOUND'>(null);

  const handleVerify = (codeToSearch?: string) => {
    const code = (codeToSearch || queryCode).trim().toUpperCase();
    if (!code) return;

    if (MOCK_CERTIFICATES[code]) {
      setResult(MOCK_CERTIFICATES[code]);
    } else {
      setResult('NOT_FOUND');
    }
  };

  useEffect(() => {
    if (initialCode) {
      handleVerify(initialCode);
    }
  }, [initialCode]);

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Official DCC Registry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'የሰርተፊኬትና ፈቃድ ማረጋገጫ' : 'Certificate & Credential Verification'}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Verify official Dembel City Center retailer lease agreements, food hygiene accreditations, and VIP membership card credentials.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-4 max-w-xl mx-auto">
          <label className="text-xs font-bold text-slate-700 block">
            Enter Certificate or Member Verification Code:
          </label>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={queryCode}
                onChange={(e) => setQueryCode(e.target.value.toUpperCase())}
                placeholder="e.g. DCC-2026-0001"
                className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0E4C92] uppercase"
              />
            </div>
            <button
              type="button"
              onClick={() => handleVerify()}
              className="px-5 py-3 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95 shrink-0"
            >
              Verify Code
            </button>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
            <span>Try sample codes:</span>
            {['DCC-2026-0001', 'DCC-VIP-2026', 'DCC-LEASE-G02'].map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setQueryCode(code);
                  handleVerify(code);
                }}
                className="font-mono underline text-[#0E4C92] hover:text-[#031955]"
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Verification Result Card */}
        {result && result !== 'NOT_FOUND' && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-500/50 shadow-xl max-w-xl mx-auto space-y-6 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-700 block">
                    Authentic & Valid Document
                  </span>
                  <h3 className="font-extrabold text-base sm:text-lg text-[#031955]">
                    {result.type}
                  </h3>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 shrink-0">
                {result.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block font-medium">Certificate ID</span>
                <span className="font-mono font-bold text-sm text-[#031955]">{result.code}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Issued To</span>
                <span className="font-bold text-slate-800">{result.issuedTo}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Issue Date</span>
                <span className="font-semibold text-slate-700">{result.issueDate}</span>
              </div>
              <div>
                <span className="text-slate-400 block font-medium">Valid Until</span>
                <span className="font-semibold text-slate-700">{result.expiryDate}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-[#031955] block">Description & Scope:</span>
              <p>{result.details}</p>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100">
              <span>Authority: {result.authority}</span>
              <span className="text-emerald-700 font-bold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> DCC Registry Seal
              </span>
            </div>
          </div>
        )}

        {/* Not Found State */}
        {result === 'NOT_FOUND' && (
          <div className="bg-white rounded-3xl p-8 border-2 border-red-300 shadow-lg max-w-xl mx-auto text-center space-y-3 animate-in fade-in">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto">
              <XCircle className="w-7 h-7" />
            </div>
            <h3 className="font-bold text-base text-red-950">Certificate Not Found</h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
              No active record found for code <strong>"{queryCode}"</strong>. Please verify the code spelling or contact Dembel management registry at +251 11 551 0101.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-sm">Loading Verification Tool...</div>}>
      <VerifyContent />
    </Suspense>
  );
}
