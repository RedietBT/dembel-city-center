export interface FaqItem {
  id: string;
  category: 'hours' | 'parking' | 'location' | 'amenities' | 'wifi' | 'prayer' | 'contact' | 'general';
  keywords: string[];
  keywordsAm: string[];
  questionEn: string;
  questionAm: string;
  answerEn: string;
  answerAm: string;
  linkText?: string;
  linkUrl?: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'faq-hours',
    category: 'hours',
    keywords: ['hour', 'hours', 'open', 'close', 'timing', 'schedule', 'time', 'sunday', 'weekend'],
    keywordsAm: ['ሰዓት', 'ክፍት', 'ዝግ', 'መቼ', 'እሁድ', 'የስራ'],
    questionEn: 'What are Dembel City Center opening hours?',
    questionAm: 'የደመበል ሲቲ ሴንተር የስራ ሰዓት ስንት ነው?',
    answerEn: 'Dembel City Center is open 7 days a week from 8:30 AM to 9:30 PM. Blue Nile Supermarket opens early at 7:30 AM, and Lion City Cinema screenings run until 11:30 PM.',
    answerAm: 'ደመበል ሲቲ ሴንተር በሳምንት 7 ቀናት ከጠዋቱ 2:30 እስከ ማታ 3:30 ክፍት ነው። ብሉ ናይል ሱፐርማርኬት ጠዋት 1:30 ይከፈታል፤ ሲኒማው ደግሞ እስከ ምሽቱ 5:30 አገልግሎት ይሰጣል።',
    linkText: 'Plan your visit',
    linkUrl: '/visit'
  },
  {
    id: 'faq-parking',
    category: 'parking',
    keywords: ['park', 'parking', 'car', 'garage', 'vehicle', 'valet', 'charge', 'ev', 'cost', 'fee'],
    keywordsAm: ['መኪና', 'ፓርኪንግ', 'ማቆሚያ', 'ክፍያ', 'ታሪፍ', 'ጋራዥ'],
    questionEn: 'Where can I park and what is the fee?',
    questionAm: 'መኪና የት ማቆም እችላለሁ? ክፍያውሰ?',
    answerEn: 'We have a secure 2-level basement garage accommodating over 500 vehicles with 24/7 CCTV and security attendants. Parking is 20 ETB/hour, or completely FREE with validated purchases of 300+ ETB from any mall retailer.',
    answerAm: 'በምድር ቤት ከ500 በላይ መኪኖችን የሚይዝ አስተማማኝ የመኪና ማቆሚያ በ24 ሰዓት ካሜራ ክትትል አለን። ክፍያው በሰዓት 20 ብር ሲሆን ከማንኛውም ሱቅ ከ300 ብር በላይ ሲገዙ ነጻ ማቆሚያ ያገኛሉ።',
    linkText: 'View parking on Floor Map',
    linkUrl: '/floors?floor=basement'
  },
  {
    id: 'faq-coffee',
    category: 'general',
    keywords: ['coffee', 'cafe', 'roast', 'espresso', 'cappuccino', 'bunna', 'pastry', 'drink'],
    keywordsAm: ['ቡና', 'ካፌ', 'መጠጥ', 'ቁርስ', 'ሻይ'],
    questionEn: 'Where can I find a good coffee shop?',
    questionAm: 'ጥሩ የቡና ቦታ የት ማግኘት እችላለሁ?',
    answerEn: 'We have three wonderful coffee spots: "Addis Bean Coffee" (Ground Floor, G-02) for single-origin pour-overs, "Kaffa Roastery Lounge" (Second Floor terrace, 2-16) with panoramic skyline views, and "Bole Gourmet Deli" (Ground Floor, G-08).',
    answerAm: 'ሶስት ምርጥ የቡና መዳረሻዎች አሉን፡ "አዲስ ቢን ቡና" (ምድር ወለል G-02)፣ "ካፋ የቡና መፍጫና ላውንጅ" (2ኛ ፎቅ ሰገነት 2-16) እና "ቦሌ ጉርሜ ዴሊ" (ምድር ወለል G-08)።',
    linkText: 'Explore Coffee & Cafés',
    linkUrl: '/stores?category=Food+%26+Caf%C3%A9'
  },
  {
    id: 'faq-offers',
    category: 'general',
    keywords: ['offer', 'offers', 'discount', 'sale', 'deal', 'promo', 'promotion', 'coupon', 'save'],
    keywordsAm: ['ቅናሽ', 'ልዩ', 'ሽያጭ', 'ስጦታ', 'ፕሮሞሽን', 'ቫውቸር'],
    questionEn: 'Are there any special offers or sales today?',
    questionAm: 'ዛሬ ምን አይነት ልዩ ቅናሾች አሉ?',
    answerEn: 'Yes! Currently Habesha Threads offers 15% off handwoven silk-cotton pieces, Nile Tech offers 10,000 ETB vouchers on laptop bundles, Addis Bean gives a free pastry with morning pour-overs, and Blue Nile Supermarket has 20% off fresh produce.',
    answerAm: 'አዎ! በአሁኑ ሰዓት ሐበሻ ትሬድስ 15% ቅናሽ፣ ናይል ቴክ እስከ 10,000 ብር ቅናሽ፣ አዲስ ቢን ቡና ነጻ ኬክ፣ እና ብሉ ናይል ሱፐርማርኬት 20% ቅናሽ አዘጋጅተዋል።',
    linkText: 'See all active offers',
    linkUrl: '/offers'
  },
  {
    id: 'faq-location',
    category: 'location',
    keywords: ['location', 'where', 'address', 'directions', 'find', 'olympia', 'bole', 'map', 'road'],
    keywordsAm: ['አድራሻ', 'የት', 'ቦታ', 'ቦሌ', 'ኦሊምፒያ', 'መገኛ'],
    questionEn: 'Where is Dembel City Center located?',
    questionAm: 'ደመበል ሲቲ ሴንተር የት ይገኛል?',
    answerEn: 'Dembel City Center is prominently situated on Africa Avenue (Bole Road), Olympia area, Kirkos sub-city, Addis Ababa. It is a 3-minute walk from Olympia LRT station and just 8 minutes from Bole International Airport.',
    answerAm: 'ደመበል ሲቲ ሴንተር አዲስ አበባ፣ ቦሌ መንገድ (አፍሪካ ጎዳና)፣ ኦሊምፒያ አደባባይ አጠገብ ይገኛል። ከኦሊምፒያ ባቡር ጣቢያ የ3 ደቂቃ የእግር መንገድ ነው።',
    linkText: 'View location & transport guide',
    linkUrl: '/visit'
  },
  {
    id: 'faq-wifi',
    category: 'wifi',
    keywords: ['wifi', 'wi-fi', 'internet', 'connection', 'network', 'password'],
    keywordsAm: ['ዋይፋይ', 'ኢንተርኔት', 'ኔትወርክ', 'ፓስወርድ'],
    questionEn: 'Is there free public Wi-Fi in the mall?',
    questionAm: 'የነጻ ዋይፋይ ኢንተርኔት አለ?',
    answerEn: 'Yes! High-speed complimentary guest Wi-Fi is available throughout all floors and public plazas. Connect your phone or laptop to "Dembel_Guest" and accept the guest terms on your browser.',
    answerAm: 'አዎ! በሁሉም ፎቆች ላይ ፈጣን የነጻ ዋይፋይ አለ። ስልክዎን ከ "Dembel_Guest" ጋር ያገናኙ።',
    linkText: 'Mall Facilities',
    linkUrl: '/visit#amenities'
  },
  {
    id: 'faq-prayer',
    category: 'prayer',
    keywords: ['prayer', 'mosque', 'masjid', 'namaz', 'salat', 'wudu', 'worship'],
    keywordsAm: ['ጸሎት', 'መስጊድ', 'ስግደት', 'ውዱእ'],
    questionEn: 'Where are the prayer facilities located?',
    questionAm: 'የጸሎት ክፍሎች የት ይገኛሉ?',
    answerEn: 'Dedicated, tranquil prayer rooms with ablution (wudu) facilities are available on both the Ground Floor (West wing, next to Restroom B) and on the Second Floor for both men and women.',
    answerAm: 'የተረጋጉ የጸሎት ክፍሎች ከውዱእ ማድረጊያ ጋር በምድር ወለል (ምዕራብ ክንፍ) እና በሁለተኛ ፎቅ ለወንዶችም ለሴቶችም ተዘጋጅተዋል።',
    linkText: 'Locate on Floor Map',
    linkUrl: '/floors?floor=ground'
  },
  {
    id: 'faq-contact',
    category: 'contact',
    keywords: ['contact', 'phone', 'call', 'email', 'help', 'lost', 'found', 'office', 'security'],
    keywordsAm: ['ስልክ', 'መረጃ', 'እርዳታ', 'የጠፋ', 'ቢሮ', 'ደውል'],
    questionEn: 'How can I contact Dembel City Center management?',
    questionAm: 'ከደመበል አስተዳደር ጋር እንዴት መገናኘት እችላለሁ?',
    answerEn: 'You can call our concierge at +251 11 551 0101, email concierge@dembelcenter.et, or visit the Central Concierge Desk in the Ground Floor main atrium.',
    answerAm: 'በስልክ ቁጥር +251 11 551 0101 በመደወል ወይም በኢሜል concierge@dembelcenter.et ማግኘት ይችላሉ።',
    linkText: 'Contact & Concierge info',
    linkUrl: '/visit'
  }
];

export const SUGGESTED_CHIPS = [
  { en: 'Opening hours?', am: 'የስራ ሰዓት?' },
  { en: 'Where can I park?', am: 'የመኪና ማቆሚያ?' },
  { en: 'Find a coffee shop', am: 'የቡና ቦታዎች' },
  { en: 'Any offers today?', am: 'የዛሬ ቅናሾች' }
];
