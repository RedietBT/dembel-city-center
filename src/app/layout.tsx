import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AiAssistant from '@/components/AiAssistant';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#031955',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://dembel-city-center.vercel.app'),
  title: {
    default: 'Dembel City Center | Premier Shopping & Lifestyle Mall • Addis Ababa',
    template: '%s | Dembel City Center'
  },
  description: 'Dembel City Center is Addis Ababa’s iconic shopping, dining and entertainment destination on Africa Avenue (Bole Road). 200+ stores, Ethiopian fashion, 4K cinema, and underground parking.',
  keywords: [
    'Dembel City Center',
    'Addis Ababa shopping mall',
    'Bole road shopping',
    'Ethiopian fashion',
    'Habesha threads',
    'Addis Bean coffee',
    'Lion City cinema',
    'Ethiopia retail',
    'Dembel mall'
  ],
  authors: [{ name: 'Dembel City Center Management' }],
  creator: 'Dembel City Center Pitch Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dembel-city-center.vercel.app',
    title: 'Dembel City Center | Premier Shopping & Lifestyle Mall',
    description: 'Explore 200+ premier boutiques, authentic Ethiopian textiles, global cuisine, 4K cinema and 360° virtual tour at Dembel City Center, Addis Ababa.',
    siteName: 'Dembel City Center',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Dembel City Center Grand Atrium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dembel City Center • Addis Ababa',
    description: 'Premier shopping, dining & 360° virtual tour on Africa Avenue, Addis Ababa.',
    images: ['https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ShoppingCenter',
    name: 'Dembel City Center',
    alternateName: 'ደመበል ሲቲ ሴንተር',
    description: 'Addis Ababa’s premier multi-level shopping, lifestyle and entertainment destination on Africa Avenue.',
    url: 'https://dembel-city-center.vercel.app',
    telephone: '+251 11 551 0101',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Africa Avenue (Bole Road), Olympia Area',
      addressLocality: 'Kirkos Sub-City, Addis Ababa',
      addressRegion: 'Addis Ababa',
      addressCountry: 'ET',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '9.0084',
      longitude: '38.7668',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:30',
        closes: '21:30',
      },
    ],
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Underground Parking 500+ Vehicles', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Free High-Speed Wi-Fi', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Wheelchair Accessible Elevators', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Dedicated Prayer Rooms', value: true },
    ],
  };

  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F6F8FC] text-[#1B2638] font-sans antialiased selection:bg-[#C9A24B] selection:text-[#031955]">
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <AiAssistant />
        </LanguageProvider>
      </body>
    </html>
  );
}
