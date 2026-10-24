'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { FAQS, SUGGESTED_CHIPS } from '@/data/faq';
import { STORES } from '@/data/stores';
import { OFFERS } from '@/data/offers';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  ArrowRight,
  Phone,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  linkText?: string;
  linkUrl?: string;
}

export default function AiAssistant() {
  const { language, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when language changes or first load
  useEffect(() => {
    const welcomeMsg: ChatMessage = {
      id: 'welcome',
      sender: 'bot',
      text: t.chat.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([welcomeMsg]);
  }, [language, t.chat.welcome]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isTyping]);

  const findAnswer = (query: string): { text: string; linkText?: string; linkUrl?: string } => {
    const qLower = query.toLowerCase().trim();

    // 1. Check FAQ keywords
    for (const faq of FAQS) {
      const matchEn = faq.keywords.some((k) => qLower.includes(k.toLowerCase()));
      const matchAm = faq.keywordsAm.some((k) => qLower.includes(k.toLowerCase()));
      if (matchEn || matchAm) {
        return {
          text: language === 'am' ? faq.answerAm : faq.answerEn,
          linkText: faq.linkText,
          linkUrl: faq.linkUrl
        };
      }
    }

    // 2. Check store names
    for (const store of STORES) {
      if (
        qLower.includes(store.name.toLowerCase()) ||
        qLower.includes(store.nameAm.toLowerCase()) ||
        store.tags.some((t) => qLower.includes(t.toLowerCase()))
      ) {
        const storeName = language === 'am' ? store.nameAm : store.name;
        const storeDesc = language === 'am' ? store.shortDescriptionAm : store.shortDescription;
        const text = language === 'am'
          ? `"${storeName}" በ${store.floor} ፎቅ፣ ሱቅ ቁጥር ${store.shopNumber} ይገኛል። የስራ ሰዓት፡ ${store.hours}። ${storeDesc}`
          : `"${storeName}" is located on the ${store.floor} Floor (Shop ${store.shopNumber}). Open ${store.hours}. ${storeDesc}`;
        return {
          text,
          linkText: language === 'am' ? `ስለ ${storeName} ዝርዝር ይመልከቱ` : `View ${storeName} details`,
          linkUrl: `/stores/${store.slug}`
        };
      }
    }

    // 3. Category match
    if (qLower.includes('fashion') || qLower.includes('cloth') || qLower.includes('ልብስ') || qLower.includes('ቀሚስ')) {
      return {
        text: language === 'am'
          ? 'በደመበል በርካታ የፋሽን መደብሮች አሉ፤ ከነዚህም ሐበሻ ትሬድስ (1ኛ ፎቅ)፣ ፊንፊኔ ሌዘር (1ኛ ፎቅ) እና ሉሲ ወርቅና ጌጣጌጥ ይጠቀሳሉ።'
          : 'Dembel features premier fashion boutiques including Habesha Threads (1st Floor, traditional & modern), Finfinne Leather (1st Floor), and Lucy Gold & Gems (Ground Floor).',
        linkText: language === 'am' ? 'የፋሽን መደብሮችን ይመልከቱ' : 'Browse Fashion Stores',
        linkUrl: '/stores?category=Fashion'
      };
    }

    if (qLower.includes('tech') || qLower.includes('phone') || qLower.includes('ስልክ') || qLower.includes('ላፕቶፕ')) {
      return {
        text: language === 'am'
          ? 'ናይል ቴክ እና አዋሽ ጋጅትስ በአንደኛ ፎቅ ላይ ኦሪጅናል ስልኮች፣ ላፕቶፖችና ኤሌክትሮኒክስ ይሸጣሉ።'
          : 'Nile Tech and Awash Gadgets on the 1st Floor carry smartphones, MacBooks, gaming tech, and audio accessories with full warranty.',
        linkText: language === 'am' ? 'የኤሌክትሮኒክስ መደብሮችን ይመልከቱ' : 'Explore Electronics',
        linkUrl: '/stores?category=Electronics'
      };
    }

    if (qLower.includes('cinema') || qLower.includes('movie') || qLower.includes('ፊልም') || qLower.includes('ሲኒማ')) {
      return {
        text: language === 'am'
          ? 'አንበሳ ሲቲ ሲኒማ በሁለተኛ ፎቅ ላይ ባለ 3 ዘመናዊ ዶልቢ አዳራሾች ያሉት ሲሆን የቅርብ ጊዜ የአማርኛና የውጭ ፊልሞችን ያሳያል።'
          : 'Lion City Cinema on the 2nd Floor features 3 4K Dolby Atmos screens showing Hollywood hits and Ethiopian film premieres until 11:30 PM.',
        linkText: language === 'am' ? 'የሲኒማ ዝርዝር' : 'View Cinema Details',
        linkUrl: '/stores/lion-city-cinema'
      };
    }

    // Fallback response
    return {
      text: t.chat.fallback,
      linkText: language === 'am' ? 'ወደ መረጃ ዴስክ ይደውሉ' : 'Call Concierge (+251 11 551 0101)',
      linkUrl: 'tel:+251115510101'
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Mock natural bot response delay
    setTimeout(() => {
      const result = findAnswer(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: result.text,
        linkText: result.linkText,
        linkUrl: result.linkUrl,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
    }, 650);
  };

  const handleReset = () => {
    const welcomeMsg: ChatMessage = {
      id: `welcome-${Date.now()}`,
      sender: 'bot',
      text: t.chat.welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([welcomeMsg]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          id="ai-assistant-toggle"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open Dembel AI Concierge"
          className="relative group p-4 rounded-full bg-gradient-to-r from-[#031955] via-[#0E4C92] to-[#1882B2] text-white shadow-2xl hover:shadow-[#0E4C92]/40 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-[#C9A24B]/60 focus:outline-none focus:ring-4 focus:ring-[#C9A24B]/40"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A24B] opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-[#C9A24B] text-[10px] text-[#031955] font-black items-center justify-center">
                  1
                </span>
              </span>
            </>
          )}

          {/* Tooltip on hover */}
          {!isOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#031955] text-white text-xs font-semibold whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity border border-white/10 hidden sm:block">
              {language === 'am' ? 'የደመበል ረዳት' : 'Ask Dembel AI Concierge'}
            </span>
          )}
        </button>
      </div>

      {/* Chat Panel Modal / Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Dembel AI Concierge Chat"
          className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] max-h-[620px] h-[82vh] bg-white rounded-2xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#031955] via-[#0E4C92] to-[#031955] p-4 text-white flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#C9A24B]/20 border border-[#C9A24B]/60 flex items-center justify-center text-[#DFBE72]">
                <Bot className="w-5 h-5 text-[#DFBE72]" />
              </div>
              <div>
                <h3 className="font-bold text-sm tracking-tight flex items-center gap-1.5">
                  {t.chat.title}
                  <Sparkles className="w-3.5 h-3.5 text-[#C9A24B]" />
                </h3>
                <p className="text-[11px] text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  {t.chat.onlineStatus}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleReset}
                title="Reset conversation"
                aria-label="Reset conversation"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Close chat"
                aria-label="Close chat"
                className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Banner */}
          <div className="bg-[#F6F8FC] border-b border-slate-200 px-3.5 py-1.5 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Instant answers for 25+ stores, parking, hours & offers</span>
            <span className="text-[#0E4C92] font-semibold">AI Demo</span>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-[#0E4C92] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl p-3 text-xs sm:text-[13px] leading-relaxed shadow-sm ${
                    m.sender === 'user'
                      ? 'bg-[#031955] text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>

                  {/* Optional Deep Link */}
                  {m.linkText && m.linkUrl && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center">
                      <Link
                        href={m.linkUrl}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E4C92] hover:text-[#1882B2] bg-blue-50 px-2.5 py-1.5 rounded-lg border border-blue-100 hover:bg-blue-100 transition-colors"
                      >
                        <span>{m.linkText}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}

                  <span
                    className={`block text-[10px] mt-1.5 text-right ${
                      m.sender === 'user' ? 'text-slate-300' : 'text-slate-400'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>

                {m.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-[#C9A24B] text-[#031955] flex items-center justify-center shrink-0 mt-0.5 shadow-sm font-bold">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#0E4C92] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4C92] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4C92] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4C92] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-slate-400 ml-1.5">{t.chat.typing}</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Question Chips */}
          <div className="p-2.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {SUGGESTED_CHIPS.map((chip, idx) => {
              const label = language === 'am' ? chip.am : chip.en;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSend(label)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-[#031955] hover:text-white text-slate-700 text-[11px] font-medium whitespace-nowrap transition-colors border border-slate-200/60 active:scale-95"
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chat.placeholder}
              aria-label="Chat input"
              className="flex-1 px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0E4C92] focus:bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="p-2.5 rounded-xl bg-[#031955] hover:bg-[#0E4C92] disabled:opacity-40 text-white font-semibold transition-all active:scale-95 shadow-md flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
