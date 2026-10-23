export interface Offer {
  id: string;
  storeName: string;
  storeSlug: string;
  title: string;
  titleAm: string;
  discountText: string;
  discountTextAm: string;
  description: string;
  descriptionAm: string;
  validUntil: string;
  expiresInDays: number;
  category: 'Fashion' | 'Food & Café' | 'Electronics' | 'Beauty' | 'Supermarket';
  code: string;
  image: string;
  terms: string;
}

export interface MallEvent {
  id: string;
  title: string;
  titleAm: string;
  date: string;
  time: string;
  location: string;
  locationAm: string;
  shortDescription: string;
  shortDescriptionAm: string;
  fullDescription: string;
  category: 'Cultural' | 'Shopping' | 'Family' | 'Food' | 'Technology';
  image: string;
  badge: string;
}

export const OFFERS: Offer[] = [
  {
    id: 'off-01',
    storeName: 'Habesha Threads',
    storeSlug: 'habesha-threads',
    title: 'New Year Handwoven Silk & Cotton Collection',
    titleAm: 'የአዲስ አመት የሐር እና የጥጥ አልባሳት ቅናሽ',
    discountText: '15% OFF',
    discountTextAm: '15% ቅናሽ',
    description: 'Receive 15% off bespoke traditional bridal wear and contemporary handspun cotton shirts with gold Tibeb embroideries.',
    descriptionAm: 'በእጅ የተሰሩ የጥበብ አልባሳት፣ የሙሽራ ቀሚሶች እና ዘመናዊ ሸሚዞች ላይ የ15% ቅናሽ ያግኙ።',
    validUntil: 'Nov 15, 2026',
    expiresInDays: 5,
    category: 'Fashion',
    code: 'DCC-HABESHA15',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80',
    terms: 'Valid on in-store purchases above 3,000 ETB. Cannot be combined with other ongoing promotions.'
  },
  {
    id: 'off-02',
    storeName: 'Nile Tech',
    storeSlug: 'nile-tech',
    title: 'UltraBook & Creative Studio Bundle Savings',
    titleAm: 'በላፕቶፕ እና አክሰሰሪዎች ላይ የ10,000 ብር ቅናሽ',
    discountText: 'SAVE 10,000 ETB',
    discountTextAm: '10,000 ብር ይቆጥቡ',
    description: 'Get an instant 10,000 ETB voucher when bundling any M3 MacBook or ASUS Zenbook with an Apple Magic Mouse or Sony noise-canceling headset.',
    descriptionAm: 'ላፕቶፖችን ከማውዝ ወይም ከጆሮ ማዳመጫ ጋር አጣምረው ሲገዙ የ10,000 ብር ቅናሽ ቫውቸር ያግኙ።',
    validUntil: 'Nov 12, 2026',
    expiresInDays: 2,
    category: 'Electronics',
    code: 'DCC-TECH10K',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1000&q=80',
    terms: 'Valid while promotional stock lasts. Includes 2-year authorized local service warranty.'
  },
  {
    id: 'off-03',
    storeName: 'Addis Bean Coffee',
    storeSlug: 'addis-bean-coffee',
    title: 'Morning Artisanal Pour-Over & Pastry Pairing',
    titleAm: 'የጠዋት ልዩ የይርጋጨፌ ቡና እና ኬክ ስጦታ',
    discountText: 'BUY 1 GET 1 PASTRY',
    discountTextAm: 'አንድ ቡና ሲገዙ አንድ ኬክ በነጻ',
    description: 'Order any single-origin Yirgacheffe pour-over or cortado between 8:00 AM and 11:00 AM and receive a complimentary fresh almond croissant.',
    descriptionAm: 'ከጠዋቱ 2:00 እስከ 5:00 ባለው ጊዜ ውስጥ ማንኛውንም የተመረጠ ቡና ሲያዙ ጣፋጭ ክሮሶንት በነጻ ያገኛሉ።',
    validUntil: 'Nov 30, 2026',
    expiresInDays: 14,
    category: 'Food & Café',
    code: 'DCC-COFFEEAM',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80',
    terms: 'Applicable exclusively at Dembel Ground Floor branch.'
  },
  {
    id: 'off-04',
    storeName: 'Blue Nile Supermarket',
    storeSlug: 'blue-nile-supermarket',
    title: 'Weekend Organic Harvest Supermarket Mart',
    titleAm: 'የሳምንቱ መጨረሻ የትኩስ አትክልትና ፍራፍሬ ቅናሽ',
    discountText: '20% OFF',
    discountTextAm: '20% ቅናሽ',
    description: 'Fresh organic avocados, strawberries, Debre Zeit vegetables, and imported pantry items discounted up to 20% every Friday through Sunday.',
    descriptionAm: 'በሁሉም ትኩስ አቮካዶ፣ እንጆሪ እና የተመረጡ የጓሮ አትክልቶች ላይ 20% ቅናሽ።',
    validUntil: 'Nov 08, 2026',
    expiresInDays: 3,
    category: 'Supermarket',
    code: 'DCC-HARVEST20',
    image: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1000&q=80',
    terms: 'Free parking validation provided for all grocery receipts exceeding 1,500 ETB.'
  },
  {
    id: 'off-05',
    storeName: 'Abyssinia Scents',
    storeSlug: 'abyssinia-scents',
    title: 'Luxury Perfume Gift Set & Travel Atomizer',
    titleAm: 'ልዩ የሽቶ ስጦታ እና የኪስ አቶማይዘር',
    discountText: 'FREE TRAVEL GIFT',
    discountTextAm: 'ነጻ የጉዞ ሽቶ',
    description: 'Receive a refillable 10ml gold travel atomizer filled with Highland Oud or Sheba Rose with every 100ml Extrait de Parfum purchase.',
    descriptionAm: 'ማንኛውንም 100ሚሊ ሽቶ ሲገዙ በወርቅ የተለበጠ የ10ሚሊ የኪስ ሽቶ በስጦታ ያግኙ።',
    validUntil: 'Nov 25, 2026',
    expiresInDays: 10,
    category: 'Beauty',
    code: 'DCC-SCENTLUX',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80',
    terms: 'Includes complimentary custom engraving at the Dembel showroom counter.'
  },
  {
    id: 'off-06',
    storeName: 'Meskel Bookshop',
    storeSlug: 'meskel-bookshop',
    title: 'Ethiopian Heritage & Coffee Table Books',
    titleAm: 'የኢትዮጵያ ታሪክና ስነ-ጥበብ መጽሐፍት ቅናሽ',
    discountText: '20% OFF',
    discountTextAm: '20% ቅናሽ',
    description: 'Celebrate our literary treasures with 20% off hardbound photographic volumes, Lalibela architectural monographs, and Amharic poetry anthologies.',
    descriptionAm: 'የኢትዮጵያን ታሪክ እና ጥበብ በሚዘክሩ ባለቀለም መጽሐፍት ላይ 20% ቅናሽ።',
    validUntil: 'Nov 18, 2026',
    expiresInDays: 8,
    category: 'Fashion', // Books & Culture
    code: 'DCC-MESKEL20',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    terms: 'Valid on in-store selection. Student discount stacks an extra 5% with valid ID.'
  }
];

export const EVENTS: MallEvent[] = [
  {
    id: 'evt-01',
    title: 'Addis Artisan Coffee & Honey Festival',
    titleAm: 'የአዲስ ቡና እና የተፈጥሮ ማር ፌስቲቫል',
    date: 'Saturday & Sunday, Nov 14–15, 2026',
    time: '10:00 AM – 7:00 PM',
    location: 'Central Atrium, Ground Floor',
    locationAm: 'ዋናው አዳራሽ፣ ምድር ወለል',
    shortDescription: 'Tasting flights from 12 Ethiopian micro-regions, traditional roasting demonstrations, and honey pairing workshops.',
    shortDescriptionAm: 'የተለያዩ የኢትዮጵያ ክልሎች የቡና ጣዕም ሙከራ፣ ባህላዊ የቡና ማፍላት እና የማር ቀማሻ ዝግጅት።',
    fullDescription: 'Join Addis Ababa’s premier celebration of coffee craftsmanship. Featuring certified cupping sessions led by national coffee judges, clay pot roasting demonstrations, raw Tigray & Keffa honey tastings, and acoustic Ethiopian jazz.',
    category: 'Food',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=80',
    badge: 'Flagship Event'
  },
  {
    id: 'evt-02',
    title: 'Contemporary Shemane Fashion Runway',
    titleAm: 'የዘመናዊ ሸማ ፋሽን ትርዒት',
    date: 'Friday, Nov 20, 2026',
    time: '6:30 PM – 9:30 PM',
    location: 'First Floor Fashion Boulevard',
    locationAm: 'አንደኛ ፎቅ፣ የፋሽን መተላለፊያ',
    shortDescription: 'Spotlighting 8 young Ethiopian textile designers blending traditional handloom cotton with haute couture silhouettes.',
    shortDescriptionAm: '8 ወጣት የፋሽን ዲዛይነሮች የኢትዮጵያን ባህላዊ ሸማ ከዘመናዊ ፋሽን ጋር በማዋሃድ የሚያሳዩበት ድንቅ ምሽት።',
    fullDescription: 'An exclusive runway showcase in partnership with Habesha Threads and leading Horn designers. Enjoy champagne flutes, runway models showcasing new 2026 collections, and meet-and-greets with the artisans.',
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=80',
    badge: 'Exclusive'
  },
  {
    id: 'evt-03',
    title: 'Horn Innovation & Gadget Showcase 2026',
    titleAm: 'የቴክኖሎጂ እና አዳዲስ ፈጠራዎች አውደ-ርዕይ',
    date: 'Nov 27–29, 2026',
    time: '11:00 AM – 8:00 PM',
    location: 'First Floor Tech Atrium',
    locationAm: 'አንደኛ ፎቅ፣ የቴክኖሎጂ አዳራሽ',
    shortDescription: 'Hands-on VR experiences, drone flight cages, student robotics displays, and launch of next-gen smart devices.',
    shortDescriptionAm: 'የቪአር ጨዋታዎች፣ የድሮን ትርዒቶች፣ የሮቦቲክስ ፈጠራዎች እና የስማርት እቃዎች ማስተዋወቂያ።',
    fullDescription: 'Experience the newest consumer tech and software innovation happening in East Africa. Interactive gaming tournaments at Lion City Cinema, creator workshops by Nile Tech, and exclusive attendee hardware discounts.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1000&q=80',
    badge: 'Free Admission'
  },
  {
    id: 'evt-04',
    title: 'Walia Weekend: Puppet Theater & Clay Sculpting',
    titleAm: 'የዋልያ የሳምንቱ መጨረሻ የህፃናት የፈጠራ ዝግጅት',
    date: 'Every Saturday',
    time: '2:00 PM – 5:00 PM',
    location: 'Second Floor Kids Zone',
    locationAm: 'ሁለተኛ ፎቅ፣ የህፃናት መጫወቻ',
    shortDescription: 'Free puppet stories, safe face painting, playdough modeling, and family game contests with surprise gifts.',
    shortDescriptionAm: 'የአሻንጉሊት ተውኔት፣ የፊት ቀለም ቅብ እና አዝናኝ የቤተሰብ ጨዋታዎች ከስጦታዎች ጋር።',
    fullDescription: 'Bring the family for joyful Saturday afternoons supervised by accredited early childhood animators. Children enjoy puppet shows based on Ethiopian folklore, clay modeling stations, and healthy fruit snacks.',
    category: 'Family',
    image: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    badge: 'Family Favorite'
  }
];
