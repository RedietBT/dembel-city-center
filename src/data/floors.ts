export interface FloorSpace {
  id: string;
  shopNumber: string;
  storeSlug: string;
  name: string;
  category: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
}

export interface Facility {
  id: string;
  type: 'atm' | 'restroom' | 'elevator' | 'prayer' | 'kids' | 'escalator' | 'info' | 'parking';
  label: string;
  labelAm: string;
  x: number;
  y: number;
}

export interface FloorData {
  id: 'basement' | 'ground' | 'first' | 'second';
  code: string;
  title: string;
  titleAm: string;
  subtitle: string;
  subtitleAm: string;
  description: string;
  descriptionAm: string;
  spaces: FloorSpace[];
  facilities: Facility[];
}

export const FLOORS_DATA: FloorData[] = [
  {
    id: 'basement',
    code: 'B',
    title: 'Basement Level',
    titleAm: 'ምድር ቤት ደረጃ',
    subtitle: 'Parking & Supermarket Anchor',
    subtitleAm: 'የመኪና ማቆሚያ እና ሱፐርማርኬት',
    description: 'Direct drive-in access, 500+ secure monitored vehicle bays, EV fast chargers, car valet service, and our Blue Nile Supermarket anchor store.',
    descriptionAm: 'ከ500 በላይ መኪኖች ማቆሚያ፣ የኤሌክትሪክ መኪና ቻርጀር እና ሰፊው ብሉ ናይል ሱፐርማርኬት የሚገኙበት ደረጃ።',
    spaces: [
      { id: 'b-sp-01', shopNumber: 'B-01', storeSlug: 'blue-nile-supermarket', name: 'Blue Nile Supermarket', category: 'Supermarket', x: 80, y: 80, width: 340, height: 260, color: '#1882B2' },
      { id: 'b-sp-02', shopNumber: 'B-04', storeSlug: 'merkato-spice-house', name: 'Merkato Heritage Spices', category: 'Supermarket', x: 440, y: 80, width: 170, height: 120, color: '#C9A24B' },
      { id: 'b-sp-03', shopNumber: 'B-P1', storeSlug: '', name: 'Valet & Auto Care Bay', category: 'Services', x: 440, y: 220, width: 170, height: 120, color: '#64748B' },
      { id: 'b-sp-04', shopNumber: 'B-PARK', storeSlug: '', name: 'Underground Parking (500+ Bays)', category: 'Services', x: 630, y: 80, width: 210, height: 260, color: '#334155' }
    ],
    facilities: [
      { id: 'f-b1', type: 'parking', label: 'Basement Parking', labelAm: 'የመኪና ማቆሚያ', x: 735, y: 210 },
      { id: 'f-b2', type: 'elevator', label: 'Central Elevator Bank A', labelAm: 'ዋና ሊፍት ኤ', x: 430, y: 50 },
      { id: 'f-b3', type: 'elevator', label: 'West Elevator Bank B', labelAm: 'ምዕራብ ሊፍት ቢ', x: 50, y: 210 },
      { id: 'f-b4', type: 'restroom', label: 'Restrooms', labelAm: 'መጸዳጃ ቤቶች', x: 850, y: 50 },
      { id: 'f-b5', type: 'atm', label: 'CBE & Dashen ATM', labelAm: 'ኤቲኤም', x: 410, y: 370 }
    ]
  },
  {
    id: 'ground',
    code: 'G',
    title: 'Ground Floor',
    titleAm: 'ምድር ወለል',
    subtitle: 'Grand Atrium, Cafés & Financial Wing',
    subtitleAm: 'ዋናው አዳራሽ፣ ካፌዎች እና የባንክ አገልግሎቶች',
    description: 'The vibrant heart of Dembel City Center. Features the sunlight-drenched atrium fountain, luxury fragrances, fine jewelry, specialty coffee shops, and full-service banking.',
    descriptionAm: 'የደመበል ሲቲ ሴንተር ዋና ማዕከል። የውሃ ፏፏቴ፣ ምርጥ ቡና ቤቶች፣ የወርቅና ሽቶ መደብሮች እንዲሁም የባንክ አገልግሎቶች።',
    spaces: [
      { id: 'g-sp-01', shopNumber: 'G-02', storeSlug: 'addis-bean-coffee', name: 'Addis Bean Coffee', category: 'Food & Café', x: 80, y: 70, width: 170, height: 140, color: '#C9A24B' },
      { id: 'g-sp-02', shopNumber: 'G-08', storeSlug: 'bole-gourmet-deli', name: 'Bole Gourmet Deli', category: 'Food & Café', x: 270, y: 70, width: 170, height: 140, color: '#0E4C92' },
      { id: 'g-sp-03', shopNumber: 'G-10', storeSlug: 'abyssinia-scents', name: 'Abyssinia Scents', category: 'Beauty', x: 460, y: 70, width: 170, height: 140, color: '#1882B2' },
      { id: 'g-sp-04', shopNumber: 'G-15', storeSlug: 'lucy-gold-gems', name: 'Lucy Gold & Gems', category: 'Fashion', x: 650, y: 70, width: 170, height: 140, color: '#C9A24B' },
      { id: 'g-sp-05', shopNumber: 'G-05', storeSlug: 'omo-artisan-crafts', name: 'Omo Artisan Crafts', category: 'Entertainment', x: 80, y: 270, width: 170, height: 130, color: '#D97706' },
      { id: 'g-sp-06', shopNumber: 'G-12', storeSlug: 'zoma-floral-studio', name: 'Zoma Floral Studio', category: 'Services', x: 270, y: 270, width: 170, height: 130, color: '#10B981' },
      { id: 'g-sp-07', shopNumber: 'G-19', storeSlug: 'simien-watches', name: 'Simien Timepieces', category: 'Fashion', x: 460, y: 270, width: 170, height: 130, color: '#6366F1' },
      { id: 'g-sp-08', shopNumber: 'G-26', storeSlug: 'blue-nile-bank', name: 'Blue Nile Bank & ATM', category: 'Services', x: 650, y: 270, width: 170, height: 130, color: '#031955' }
    ],
    facilities: [
      { id: 'f-g1', type: 'info', label: 'Main Concierge Desk', labelAm: 'የመረጃ ጠረጴዛ', x: 450, y: 230 },
      { id: 'f-g2', type: 'escalator', label: 'Central Escalators', labelAm: 'ተንቀሳቃሽ ደረጃ', x: 390, y: 230 },
      { id: 'f-g3', type: 'elevator', label: 'Glass Panoramic Elevator', labelAm: 'የመስታወት ሊፍት', x: 510, y: 230 },
      { id: 'f-g4', type: 'restroom', label: 'Executive Restrooms', labelAm: 'መጸዳጃ ቤቶች', x: 840, y: 220 },
      { id: 'f-g5', type: 'prayer', label: 'Prayer Room (Ground)', labelAm: 'የጸሎት ክፍል', x: 50, y: 230 },
      { id: 'f-g6', type: 'atm', label: 'ATM Concourse', labelAm: 'የኤቲኤም መደዳ', x: 830, y: 350 }
    ]
  },
  {
    id: 'first',
    code: '1',
    title: 'First Floor',
    titleAm: 'አንደኛ ፎቅ',
    subtitle: 'Fashion Boulevard & Electronics Gallery',
    subtitleAm: 'የፋሽን እና የቴክኖሎጂ መደብሮች',
    description: 'Explore premier boutique fashion, authentic Ethiopian designer threads, premium footwear, modern tech flagships, and optical care.',
    descriptionAm: 'ዘመናዊ የሀገር ውስጥ እና የውጭ ፋሽን አልባሳት፣ የስልክና ላፕቶፕ መደብሮች እና የዓይን ህክምና።',
    spaces: [
      { id: '1-sp-01', shopNumber: '1-04', storeSlug: 'habesha-threads', name: 'Habesha Threads', category: 'Fashion', x: 80, y: 70, width: 180, height: 140, color: '#C9A24B' },
      { id: '1-sp-02', shopNumber: '1-08', storeSlug: 'finfinne-leather', name: 'Finfinne Leather Works', category: 'Fashion', x: 280, y: 70, width: 170, height: 140, color: '#B45309' },
      { id: '1-sp-03', shopNumber: '1-12', storeSlug: 'nile-tech', name: 'Nile Tech Flagship', category: 'Electronics', x: 470, y: 70, width: 180, height: 140, color: '#0E4C92' },
      { id: '1-sp-04', shopNumber: '1-15', storeSlug: 'awash-gadgets', name: 'Awash Gadgets & Audio', category: 'Electronics', x: 670, y: 70, width: 160, height: 140, color: '#1882B2' },
      { id: '1-sp-05', shopNumber: '1-02', storeSlug: 'dembel-optical', name: 'Dembel Optical Clinic', category: 'Services', x: 80, y: 270, width: 180, height: 130, color: '#0EA5E9' },
      { id: '1-sp-06', shopNumber: '1-18', storeSlug: 'tana-electronics', name: 'Tana Smart Living', category: 'Electronics', x: 280, y: 270, width: 170, height: 130, color: '#2563EB' },
      { id: '1-sp-07', shopNumber: '1-20', storeSlug: 'entoto-outdoor-gear', name: 'Entoto Outdoor Gear', category: 'Fashion', x: 470, y: 270, width: 180, height: 130, color: '#059669' },
      { id: '1-sp-08', shopNumber: '1-24', storeSlug: '', name: 'Highland Fashion Studio', category: 'Fashion', x: 670, y: 270, width: 160, height: 130, color: '#7C3AED' }
    ],
    facilities: [
      { id: 'f-1-1', type: 'escalator', label: 'Escalators Up/Down', labelAm: 'ተንቀሳቃሽ ደረጃ', x: 390, y: 230 },
      { id: 'f-1-2', type: 'elevator', label: 'Glass Atrium Elevator', labelAm: 'የመስታወት ሊፍት', x: 510, y: 230 },
      { id: 'f-1-3', type: 'restroom', label: 'Restrooms & Baby Care', labelAm: 'መጸዳጃ እና የህፃናት ክፍል', x: 850, y: 220 },
      { id: 'f-1-4', type: 'atm', label: 'Awash Bank ATM', labelAm: 'አዋሽ ባንክ ኤቲኤም', x: 50, y: 220 }
    ]
  },
  {
    id: 'second',
    code: '2',
    title: 'Second Floor',
    titleAm: 'ሁለተኛ ፎቅ',
    subtitle: 'Cinema, Dining Terrace, Books & Family Fun',
    subtitleAm: 'ሲኒማ፣ ምግብ አዳራሽ፣ መጽሐፍትና የህፃናት ጨዋታ',
    description: 'Entertainment headquarters featuring Lion City Cinema multiplex, Walia Kids playground, Meskel Bookshop reading salon, rooftop coffee lounge, and gym.',
    descriptionAm: 'ዘመናዊ ሲኒማ፣ የህፃናት መጫወቻ፣ የመጽሐፍት መደብር እና የሰገነት ቡና ላውንጅ የሚገኙበት የደስታ ማዕከል።',
    spaces: [
      { id: '2-sp-01', shopNumber: '2-01', storeSlug: 'lion-city-cinema', name: 'Lion City Cinema (3 Screens)', category: 'Entertainment', x: 80, y: 70, width: 280, height: 150, color: '#031955' },
      { id: '2-sp-02', shopNumber: '2-08', storeSlug: 'meskel-bookshop', name: 'Meskel Bookshop', category: 'Entertainment', x: 380, y: 70, width: 190, height: 150, color: '#1882B2' },
      { id: '2-sp-03', shopNumber: '2-16', storeSlug: 'kaffa-roastery-lounge', name: 'Kaffa Roastery Terrace', category: 'Food & Café', x: 590, y: 70, width: 230, height: 150, color: '#C9A24B' },
      { id: '2-sp-04', shopNumber: '2-18', storeSlug: 'walia-kids-world', name: 'Walia Kids Play World', category: 'Entertainment', x: 80, y: 260, width: 240, height: 140, color: '#EC4899' },
      { id: '2-sp-05', shopNumber: '2-11', storeSlug: 'sheba-beauty-lounge', name: 'Sheba Luxury Spa & Salon', category: 'Beauty', x: 340, y: 260, width: 230, height: 140, color: '#8B5CF6' },
      { id: '2-sp-06', shopNumber: '2-24', storeSlug: 'haile-fitness-spa', name: 'Haile Fitness Club', category: 'Entertainment', x: 590, y: 260, width: 230, height: 140, color: '#10B981' }
    ],
    facilities: [
      { id: 'f-2-1', type: 'kids', label: 'Walia Baby Care & Nursing', labelAm: 'የህፃናት ማቆያ እና እንክብካቤ', x: 300, y: 230 },
      { id: 'f-2-2', type: 'escalator', label: 'Escalators Down', labelAm: 'ተንቀሳቃሽ ደረጃ', x: 430, y: 230 },
      { id: 'f-2-3', type: 'elevator', label: 'Panoramic Elevator', labelAm: 'ሊፍት', x: 530, y: 230 },
      { id: 'f-2-4', type: 'restroom', label: 'Restrooms', labelAm: 'መጸዳጃ ቤቶች', x: 850, y: 220 },
      { id: 'f-2-5', type: 'prayer', label: 'Prayer Hall (Men & Women)', labelAm: 'የጸሎት አዳራሽ', x: 50, y: 220 }
    ]
  }
];
