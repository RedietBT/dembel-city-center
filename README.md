# Dembel City Center — Addis Ababa, Ethiopia
### Concept Showcase & Pitch Demonstration Web Experience

A modern, responsive, high-fidelity sample website for **Dembel City Center (ደመበል ሲቲ ሴንተር)** located on Africa Avenue (Bole Road), Addis Ababa, Ethiopia. Designed for tomorrow's client pitch with flawless demo flows, rich Ethiopian context, interactive 360° virtual touring, and dual-language (English / አማርኛ) support.

---

## 🌟 Highlights & Key Features

1. **Sticky Glassmorphic Header & Navigation**
   - Brand logo mark with Dembel's signature royal navy and warm gold motif.
   - Quick navigation: Stores, Floors, Offers & Events, Virtual Tour, Visit, Careers.
   - Dual-language switcher (**EN | አማ**) with instant localStorage persistence.
   - Direct CTA to the VIP Digital Registration portal.

2. **Full-Featured Hero & Quick-Info Strip**
   - Live search bar with instant autocomplete dropdown matching 25+ stores, categories, and tags.
   - Quick search chips (Coffee, Nile Tech, Habesha Threads, Cinema, Supermarket).
   - High-contrast quick-info strip highlighting center opening hours, 500+ basement parking spaces, Africa Avenue location, and concierge phone.

3. **Store Directory & Detail Pages (`/stores` & `/stores/[slug]`)**
   - 25 authentically curated mock stores across 7 categories (*Fashion, Food & Café, Electronics, Beauty, Entertainment, Services, Supermarket*).
   - Live search, category chips, floor filter (*Basement, Ground, 1st, 2nd*), and sort (*A–Z, Z–A, Rating*).
   - Searching `"coffee"` instantly returns 3 results (*Addis Bean Coffee*, *Kaffa Roastery Lounge*, and *Bole Gourmet Deli*).
   - Store detail pages with category badges, full descriptions (EN & Amharic), opening hours, "Find on Floor Map", direct call/WhatsApp buttons, and "More in this category" recommendations.

4. **Interactive SVG Floor Directory (`/floors`)**
   - Architectural level tabs for **Basement (Parking & Supermarket)**, **Ground (Atrium & Cafes)**, **1st (Fashion & Tech)**, and **2nd (Cinema & Sky Terrace)**.
   - Clickable SVG floor plan blocks with live hover and selection states.
   - Side inspector card displaying selected shop details, operating hours, and deep links.
   - Map markers for ATMs, restrooms, elevators, prayer rooms (men/women), and escalators.

5. **Offers & Cultural Events (`/offers`)**
   - Store promotions with discount badges, validity dates, "Expires in X days" urgency tags, and interactive one-click coupon code copy.
   - Upcoming mall events (*Addis Artisan Coffee Festival, Shemane Fashion Runway, Horn Tech Expo, Walia Family Weekend*).
   - Filterable by *All | Store Offers | Mall Events*.

6. **Interactive 360° Virtual Tour (`/tour`)**
   - Full 360° spherical equirectangular panorama viewer with mouse drag, touch swipe, auto-rotate, zoom in/out, and full-screen toggle.
   - 4 architectural zones (*Grand Central Atrium, Boutique Fashion Boulevard, Tech & Gadget Gallery, Sky Terrace & Cinema*).
   - Clickable floating hotspot pins that switch scenes or open linked store detail modals (*Habesha Threads, Addis Bean Coffee, Nile Tech*).
   - Required pitch disclaimer: *"Sample scenes — the real tour will use professional 360° photography of the mall."*

7. **Floating AI Assistant (Concierge Bot)**
   - Always-accessible floating chat bubble on every page.
   - Suggested quick-question chips: *"Opening hours?"*, *"Where can I park?"*, *"Find a coffee shop"*, *"Any offers today?"*.
   - Intelligent keyword/intent matcher answering hours, parking fees, floor locations, and promotions in English and Amharic with deep links to pages.
   - Natural typing indicator and fallback concierge contact options.

8. **Digital VIP Membership Card (`/register`)**
   - Clean registration form with interest checkboxes and consent.
   - Instant celebration confetti animation on completion.
   - Generates a personalized **Digital VIP Privilege Pass** with unique Member ID, Gold Tier badge, and an interactive QR code (`qrcode.react`) ready for printing or mobile wallet saving.

9. **Careers & Vacancy Portal (`/careers`)**
   - 4 mock job postings with requirements, departments, and interactive "Apply Now" application modal.

10. **Certificate & Credential Verification (`/verify`)**
    - Instant verification tool for tenancy licenses and VIP member IDs.
    - Pre-seeded test codes: `DCC-2026-0001`, `DCC-VIP-2026`, `DCC-LEASE-G02`.

11. **Executive Mall Management Dashboard (`/admin`)**
    - High-level KPI preview (*Daily Footfall, Occupancy Rate, Parking Utilization, VIP Registrations*).
    - Hourly visitor traffic histogram and top consumer search query rankings.

---

## 🎨 Design System & Color Palette

- **Deep Navy**: `#031955` (Primary brand color)
- **Royal Blue**: `#0E4C92` (Secondary accent & cards)
- **Accent Teal-Blue**: `#1882B2` (Interactive highlights)
- **Warm Gold**: `#C9A24B` / `#DFBE72` (VIP accents, badges & highlights)
- **Light Background**: `#F6F8FC`
- **Text Color**: `#1B2638`
- **Typography**: Plus Jakarta Sans (`next/font/google`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ (tested on Node v20 / v22 / v26)
- npm 9+

### Installation & Local Run
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & Verification
```bash
# Verify static build and route optimization
npm run build
npm run start
```

---

## ☁️ Deploying to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. Push this project to your GitHub, GitLab, or Bitbucket repository:
   ```bash
   git add .
   git commit -m "feat: complete Dembel City Center client pitch demo"
   git push origin main
   ```
2. Import the repository into your Vercel Dashboard.
3. Framework preset: **Next.js**.
4. Click **Deploy**. No additional environment variables are required!

---

## ⏱️ 2-Minute Client Pitch Demonstration Script

Follow this seamless walkthrough during your pitch tomorrow:

| Step | Action | What to Highlight |
|---|---|---|
| **1. The Hook** | Open **Home (`/`)** | Point out the modern, premium feel tailored to Addis Ababa. Highlight the quick-info strip (Mon–Sun 8:30 AM–9:30 PM, 500+ basement parking bays, Olympia LRT access). |
| **2. Live Search** | Type `"coffee"` in the hero search | Note how it auto-suggests results instantly and redirects to **3 coffee destinations** (*Addis Bean Coffee*, *Kaffa Roastery Lounge*, *Bole Gourmet Deli*). |
| **3. Store Profile** | Click **"Habesha Threads"** | Show rich photography, category badges, shop number (1-04), operating hours, WhatsApp inquiry button, and "Find on Floor Map" button. |
| **4. Floor Blueprint** | Click **"Find on Floor Map"** or go to **`/floors`** | Switch between *Ground, 1st, 2nd, and Basement Parking*. Click store blocks on the SVG map to highlight spaces and inspect facility icons (ATMs, restrooms, prayer rooms). |
| **5. 360° Virtual Tour** | Navigate to **`/tour`** | Drag the mouse to look 360° around the Grand Central Atrium. Click the hotspot pin for *"Addis Bean Coffee"* or click *"Ascend to Fashion Wing"* to smoothly switch scenes. Show the full-screen mode. |
| **6. AI Concierge Bot** | Click the floating chat bubble (bottom-right) | Click the prompt chip *"Where can I park?"* or *"Opening hours?"*. Watch the simulated typing animation and rich response with direct links to the floor map and visit guide. |
| **7. Dual-Language** | Click the **`አማ`** toggle in the header | Show how navigation, hero, store details, and AI Concierge responses instantly adapt into authentic Amharic without reloading the page. |
| **8. VIP Registration** | Click **"Register"** (`/register`) | Fill out the name and click submit. Celebrate with the confetti effect, display the digital **Gold VIP Membership Pass with QR code**, and show the **`/admin`** analytics dashboard. |

---

## 📁 Project Structure

```
demo/
├── src/
│   ├── app/
│   │   ├── admin/page.tsx        # Management telemetry & footfall charts
│   │   ├── careers/page.tsx      # Job listings & application modal
│   │   ├── floors/page.tsx       # Interactive SVG floor plans
│   │   ├── offers/page.tsx       # Store discounts & cultural events
│   │   ├── register/page.tsx     # VIP digital pass & QR code generator
│   │   ├── stores/
│   │   │   ├── page.tsx          # Store directory with live search & filters
│   │   │   └── [slug]/page.tsx   # Individual store detail pages
│   │   ├── tour/page.tsx         # 360° virtual tour scene showcase
│   │   ├── verify/page.tsx       # Certificate & credential lookup
│   │   ├── visit/page.tsx        # Directions, transit & amenities guide
│   │   ├── globals.css           # Brand tokens, gradients & animations
│   │   ├── layout.tsx            # Root layout, Plus Jakarta Sans, JSON-LD
│   │   ├── page.tsx              # Full-width Hero, quick-info, featured grid
│   │   ├── robots.ts             # SEO robots generator
│   │   └── sitemap.ts            # Dynamic sitemap generator
│   ├── components/
│   │   ├── AiAssistant.tsx       # Floating AI Concierge chat widget
│   │   ├── EventCard.tsx         # Mall event display card
│   │   ├── Footer.tsx            # Pitch disclaimer, newsletter & quick links
│   │   ├── Header.tsx            # Sticky header with i18n & mobile drawer
│   │   ├── OfferCard.tsx         # Promotion card with coupon code copy
│   │   ├── StoreCard.tsx         # Reusable store card with badges & rating
│   │   └── TourViewer.tsx        # 360° equirectangular panorama viewer
│   ├── context/
│   │   └── LanguageContext.tsx   # Dual-language state provider (EN / አማ)
│   └── data/
│       ├── faq.ts                # AI Concierge intents, FAQ, and Amharic data
│       ├── floors.ts             # SVG coordinates for all 4 mall levels
│       ├── offers.ts             # Promotions, discount codes, and events
│       ├── stores.ts             # 25 curated mock stores with full metadata
│       ├── tour.ts               # 4-scene equirectangular panoramas & hotspots
│       └── translations.ts       # Comprehensive English and Amharic dictionaries
├── next.config.ts                # Remote image patterns for Unsplash
├── package.json
└── tsconfig.json
```

---

## ⚖️ Concept Sample Disclaimer
*This website is a demonstration concept and pitch showcase prototype for Dembel City Center, Addis Ababa. It is not the official production website of Dembel City Center. Store names, promotions, and photography are used strictly for conceptual visualization.*
