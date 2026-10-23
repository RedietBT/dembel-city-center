export interface TourHotspot {
  id: string;
  title: string;
  titleAm: string;
  x: number; // percentage 0 - 100 on panorama
  y: number; // percentage 0 - 100 on panorama
  type: 'scene' | 'store';
  targetSceneId?: string;
  storeSlug?: string;
  description?: string;
}

export interface TourScene {
  id: string;
  title: string;
  titleAm: string;
  floor: string;
  floorAm: string;
  tagline: string;
  taglineAm: string;
  description: string;
  descriptionAm: string;
  imageUrl: string;
  hotspots: TourHotspot[];
}

export const TOUR_SCENES: TourScene[] = [
  {
    id: 'grand-atrium',
    title: 'Grand Central Atrium',
    titleAm: 'ዋናው ማዕከላዊ አዳራሽ',
    floor: 'Ground Floor',
    floorAm: 'ምድር ወለል',
    tagline: 'Sunlit heart of Dembel with marble floors and signature fountain',
    taglineAm: 'በፀሐይ ብርሃን የተሞላው የደመበል ልብ፣ የእብነበረድ ወለል እና ውብ ፏፏቴ',
    description: 'The monumental central atrium features 5-story glass skylights, cascading greenery, and direct access to boutique cafes, jewelry shops, and panoramic glass elevators.',
    descriptionAm: 'ባለ 5 ፎቅ የመስታወት ጣሪያ፣ የውስጥ ለውስጥ አትክልቶች እና ወደ ካፌዎች፣ የወርቅ መደብሮችና ሊፍቶች የሚያደርስ ዋና አዳራሽ።',
    imageUrl: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=2400&q=85',
    hotspots: [
      {
        id: 'hs-1',
        title: 'Addis Bean Coffee',
        titleAm: 'አዲስ ቢን ቡና',
        x: 32,
        y: 54,
        type: 'store',
        storeSlug: 'addis-bean-coffee',
        description: 'Single-origin Ethiopian roasts & fresh pastries'
      },
      {
        id: 'hs-2',
        title: 'Lucy Gold & Gems',
        titleAm: 'ሉሲ ወርቅና ጌጣጌጥ',
        x: 74,
        y: 52,
        type: 'store',
        storeSlug: 'lucy-gold-gems',
        description: '21k Gold & Wollo Fire Opal Jewelry'
      },
      {
        id: 'hs-3',
        title: 'Ascend to Fashion Wing (1st Floor)',
        titleAm: 'ወደ ፋሽን መተላለፊያ (1ኛ ፎቅ)',
        x: 52,
        y: 35,
        type: 'scene',
        targetSceneId: 'fashion-wing',
        description: 'Take the panoramic glass escalator up'
      },
      {
        id: 'hs-4',
        title: 'Blue Nile Supermarket (Basement)',
        titleAm: 'ብሉ ናይል ሱፐርማርኬት (ምድር ቤት)',
        x: 18,
        y: 68,
        type: 'store',
        storeSlug: 'blue-nile-supermarket',
        description: 'Full grocery & direct parking elevator'
      }
    ]
  },
  {
    id: 'fashion-wing',
    title: 'Boutique Fashion Boulevard',
    titleAm: 'የቡቲክ ፋሽን መተላለፊያ',
    floor: 'First Floor',
    floorAm: 'አንደኛ ፎቅ',
    tagline: 'Premier fashion hub featuring traditional and modern Ethiopian design',
    taglineAm: 'የባህላዊ እና ዘመናዊ የኢትዮጵያ ዲዛይን አልባሳት መገኛ',
    description: 'Stroll along the polished marble concourse lined with curated apparel boutiques, luxury leather crafters, and bespoke tailoring.',
    descriptionAm: 'በጥራት የተሰሩ አልባሳት፣ የቆዳ ውጤቶች እና የፋሽን መደብሮች የተሰለፉበት ውብ መተላለፊያ።',
    imageUrl: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=2400&q=85',
    hotspots: [
      {
        id: 'hs-fw-1',
        title: 'Habesha Threads',
        titleAm: 'ሐበሻ ትሬድስ',
        x: 28,
        y: 50,
        type: 'store',
        storeSlug: 'habesha-threads',
        description: 'Modern Kemis & bespoke handwoven cotton'
      },
      {
        id: 'hs-fw-2',
        title: 'Finfinne Leather Works',
        titleAm: 'ፊንፊኔ ሌዘር ወርክስ',
        x: 72,
        y: 52,
        type: 'store',
        storeSlug: 'finfinne-leather',
        description: 'Highland sheepskin bags and jackets'
      },
      {
        id: 'hs-fw-3',
        title: 'Tech & Gadget Gallery',
        titleAm: 'የቴክኖሎጂ መደብሮች',
        x: 88,
        y: 42,
        type: 'scene',
        targetSceneId: 'tech-gallery',
        description: 'Walk towards Nile Tech flagship'
      },
      {
        id: 'hs-fw-4',
        title: 'Down to Grand Atrium',
        titleAm: 'ወደ ዋናው አዳራሽ',
        x: 48,
        y: 72,
        type: 'scene',
        targetSceneId: 'grand-atrium',
        description: 'Return to ground floor fountain'
      }
    ]
  },
  {
    id: 'tech-gallery',
    title: 'Tech & Gadget Gallery',
    titleAm: 'የቴክኖሎጂ እና ኤሌክትሮኒክስ አዳራሽ',
    floor: 'First Floor West',
    floorAm: 'አንደኛ ፎቅ ምዕራብ',
    tagline: 'Cutting edge electronics, laptops, cameras & sound systems',
    taglineAm: 'ዘመናዊ ስልኮች፣ ላፕቶፖች እና የድምፅ ማጉያ እቃዎች',
    description: 'The premier consumer electronics hub in Addis Ababa with official distributor warranties, hands-on test benches, and expert technician desks.',
    descriptionAm: 'ኦሪጅናል ኤሌክትሮኒክስ እቃዎችን በሙከራ አይተው የሚገዙበት እና አስተማማኝ ዋስትና ያለው ማዕከል።',
    imageUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2400&q=85',
    hotspots: [
      {
        id: 'hs-tg-1',
        title: 'Nile Tech Flagship',
        titleAm: 'ናይል ቴክኖሎጂ',
        x: 35,
        y: 48,
        type: 'store',
        storeSlug: 'nile-tech',
        description: 'MacBooks, iPads, Galaxy phones & repair desk'
      },
      {
        id: 'hs-tg-2',
        title: 'Awash Gadgets & Audio',
        titleAm: 'አዋሽ ጋጅትስና ኦዲዮ',
        x: 68,
        y: 50,
        type: 'store',
        storeSlug: 'awash-gadgets',
        description: 'Studio headphones, DJI drones & mics'
      },
      {
        id: 'hs-tg-3',
        title: 'Up to Cinema & Rooftop Terrace',
        titleAm: 'ወደ ሲኒማና የሰገነት መዝናኛ (2ኛ ፎቅ)',
        x: 50,
        y: 28,
        type: 'scene',
        targetSceneId: 'sky-terrace',
        description: 'Ascend to Second Floor Entertainment'
      }
    ]
  },
  {
    id: 'sky-terrace',
    title: 'Sky Terrace & Entertainment Hub',
    titleAm: 'የሰገነት መዝናኛ እና ሲኒማ ማዕከል',
    floor: 'Second Floor',
    floorAm: 'ሁለተኛ ፎቅ',
    tagline: 'Cinema multiplex, specialty rooftop dining & panoramic views of Bole Road',
    taglineAm: 'የሲኒማ አዳራሽ፣ ልዩ የምግብ ሰገነት እና የቦሌ መንገድ ውብ እይታ',
    description: 'Relax above the city bustle. Take in open views of Africa Avenue while sipping artisanal coffee or catch the latest cinematic premieres.',
    descriptionAm: 'የአዲስ አበባን ገጽታ ከሰገነት እያዩ ቡናዎን የሚጠጡበት ወይም ፊልም የሚመለከቱበት አስደሳች ቦታ።',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2400&q=85',
    hotspots: [
      {
        id: 'hs-st-1',
        title: 'Lion City Cinema',
        titleAm: 'አንበሳ ሲቲ ሲኒማ',
        x: 22,
        y: 46,
        type: 'store',
        storeSlug: 'lion-city-cinema',
        description: '3 4K Dolby Atmos screens & VIP lounges'
      },
      {
        id: 'hs-st-2',
        title: 'Kaffa Roastery Lounge',
        titleAm: 'ካፋ የቡና መፍጫና ላውንጅ',
        x: 75,
        y: 52,
        type: 'store',
        storeSlug: 'kaffa-roastery-lounge',
        description: 'Rooftop espresso bar and sunset terrace'
      },
      {
        id: 'hs-st-3',
        title: 'Meskel Bookshop',
        titleAm: 'መስቀል የመጽሐፍት መደብር',
        x: 48,
        y: 58,
        type: 'store',
        storeSlug: 'meskel-bookshop',
        description: 'Heritage books & reading salon'
      },
      {
        id: 'hs-st-4',
        title: 'Back to Grand Atrium',
        titleAm: 'ወደ ዋናው አዳራሽ ተመለስ',
        x: 50,
        y: 80,
        type: 'scene',
        targetSceneId: 'grand-atrium',
        description: 'Return to ground floor'
      }
    ]
  }
];
