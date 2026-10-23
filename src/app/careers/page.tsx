'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  Briefcase,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  X,
  Send,
  Upload,
  Building,
  UserCheck
} from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  titleAm: string;
  department: string;
  type: string;
  experience: string;
  location: string;
  description: string;
  descriptionAm: string;
  requirements: string[];
}

export default function CareersPage() {
  const { language } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);
  const [isApplying, setIsApplying] = useState(false);
  const [applySuccess, setApplySuccess] = useState(false);
  const [applicant, setApplicant] = useState({ name: '', email: '', phone: '', cv: '' });

  const jobs: JobPosting[] = [
    {
      id: 'job-01',
      title: 'Retail Experience & Concierge Lead',
      titleAm: 'የደንበኞች አገልግሎት እና መስተንግዶ አስተባባሪ',
      department: 'Guest Relations',
      type: 'Full-Time',
      experience: '3+ Years',
      location: 'Ground Floor Concierge Desk',
      description: 'Lead Dembel’s flagship customer concierge team. Oversee visitor assistance, multilingual VIP escorting, retailer coordination, and guest inquiries.',
      descriptionAm: 'የደመበልን የደንበኞች መስተንግዶ ቡድን መምራት፤ የጎብኝዎች ድጋፍ እና የቪአይፒ መስተንግዶን ማስተባበር።',
      requirements: [
        'Fluent in Amharic and English (Oromo or French is an advantage)',
        '3+ years experience in luxury hospitality, retail conciergerie, or aviation',
        'Strong leadership and emergency customer resolution skills'
      ]
    },
    {
      id: 'job-02',
      title: 'Facility Operations & Electrical Engineer',
      titleAm: 'የህንፃ ጥገና እና ኤሌክትሪካል መሃንዲስ',
      department: 'Building Operations',
      type: 'Full-Time',
      experience: '4+ Years',
      location: 'Dembel Engineering Office',
      description: 'Manage facility management operations, backup generators, HVAC ventilation, panoramic glass elevators, and fire safety systems across all 4 retail tiers.',
      descriptionAm: 'የደመበል ህንፃ የኤሌክትሪክ፣ የሊፍት፣ የጄነሬተር እና የእሳት አደጋ መከላከያ ስርዓቶችን መቆጣጠር እና ማስተዳደር።',
      requirements: [
        'BSc in Electrical, Mechanical, or Electro-Mechanical Engineering',
        'Proven track record in commercial shopping center or high-rise facility management',
        'Expertise in preventive maintenance and energy management'
      ]
    },
    {
      id: 'job-03',
      title: 'Digital Marketing & Event Curator',
      titleAm: 'የዲጂታል ማርኬቲንግ እና ዝግጅቶች አስተባባሪ',
      department: 'Marketing & Partnerships',
      type: 'Full-Time',
      experience: '2+ Years',
      location: 'Executive Suite, Level 3',
      description: 'Drive Dembel’s cultural festival programming, social media campaigns, runway fashion showcases, retailer sales promotions, and mobile VIP app adoption.',
      descriptionAm: 'የማህበራዊ ሚዲያ ይዘቶችን ማዘጋጀት፣ የፋሽን ትርዒቶችን እና የባህል ፌስቲቫሎችን ማስተባበር።',
      requirements: [
        'Demonstrated portfolio in creative digital storytelling, photography, or event management',
        'Familiarity with Addis Ababa lifestyle, retail brands, and fashion communities',
        'Fluent copywriting skills in Amharic and English'
      ]
    },
    {
      id: 'job-04',
      title: 'Parking & Security Operations Supervisor',
      titleAm: 'የመኪና ማቆሚያ እና የደህንነት ተቆጣጣሪ',
      department: 'Safety & Security',
      type: 'Full-Time',
      experience: '3+ Years',
      location: 'Basement Operations Center',
      description: 'Supervise 500+ underground vehicle bay operations, automated license plate recognition, valet attendants, and CCTV perimeter surveillance.',
      descriptionAm: 'የምድር ቤት የመኪና ማቆሚያን እና የካሜራ ክትትልን ማስተባበር፤ የትራፊክ ፍሰት እና ደህንነትን ማረጋገጥ።',
      requirements: [
        'Experience in commercial parking management or corporate security supervision',
        'Familiarity with parking management software and electronic barrier gates',
        'High degree of integrity and customer service orientation'
      ]
    }
  ];

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicant.name || !applicant.email) return;
    setApplySuccess(true);
    setTimeout(() => {
      setApplySuccess(false);
      setIsApplying(false);
      setSelectedJob(null);
      setApplicant({ name: '', email: '', phone: '', cv: '' });
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#F6F8FC] py-10 sm:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0E4C92] text-xs font-bold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join the Dembel Team</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#031955] tracking-tight">
            {language === 'am' ? 'የስራ ዕድሎች በደመበል ሲቲ ሴንተር' : 'Careers at Dembel City Center'}
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            {language === 'am'
              ? 'በአዲስ አበባ ቀዳሚ የግብይትና የመዝናኛ ማዕከል ውስጥ አብረውን ይስሩ። ክፍት የስራ መደቦችን ይመልከቱ እና ያመልክቱ።'
              : 'Be part of the team shaping Ethiopia’s premier lifestyle destination. We offer competitive compensation, career advancement, and a vibrant work environment.'}
          </p>
        </div>

        {/* Job Listings */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0E4C92] border border-blue-100">
                    {job.department}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                    {job.type}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Exp: {job.experience}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg text-[#031955]">
                  {language === 'am' ? job.titleAm : job.title}
                </h3>

                <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                  {language === 'am' ? job.descriptionAm : job.description}
                </p>

                <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#C9A24B]" />
                  <span>{job.location}</span>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedJob(job);
                    setIsApplying(true);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#031955] hover:bg-[#0E4C92] text-white font-bold text-xs transition-colors shadow-sm active:scale-95 whitespace-nowrap"
                >
                  {language === 'am' ? 'አሁን ያመልክቱ' : 'Apply Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* General Inquiry Banner */}
        <div className="bg-slate-100 rounded-2xl p-6 text-center max-w-2xl mx-auto text-xs text-slate-600 space-y-1">
          <p className="font-semibold text-slate-800">Don’t see your exact role?</p>
          <p>Send your open CV and cover note to <a href="mailto:careers@dembelcenter.et" className="text-[#0E4C92] font-bold underline">careers@dembelcenter.et</a> for our talent talent pool.</p>
        </div>

      </div>

      {/* Application Modal */}
      {isApplying && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#0E4C92]">
                  Application Submission
                </span>
                <h3 className="font-extrabold text-lg text-[#031955]">
                  {selectedJob.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsApplying(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {applySuccess ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-lg text-emerald-950">Application Received!</h4>
                <p className="text-xs text-slate-600 max-w-xs mx-auto">
                  Thank you, {applicant.name}. Our Dembel Human Resources team will review your application and contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4 pt-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={applicant.name}
                    onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                    placeholder="e.g. Dawit Haile"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Email *</label>
                    <input
                      type="email"
                      required
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      placeholder="dawit@example.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={applicant.phone}
                      onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                      placeholder="+251 91 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0E4C92]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Resume / CV (PDF/DOC)</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-4 text-center cursor-pointer hover:bg-slate-50 transition-colors">
                    <Upload className="w-5 h-5 text-slate-400 mx-auto mb-1" />
                    <span className="text-xs text-slate-500 block">Click to upload CV file (Mock)</span>
                    <span className="text-[10px] text-slate-400">PDF, DOCX up to 10MB</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#031955] to-[#0E4C92] text-white font-bold text-xs hover:brightness-105 transition-all shadow-md flex items-center justify-center gap-2 mt-4"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Application</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
