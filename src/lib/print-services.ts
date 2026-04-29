import {
  CreditCard,
  Smartphone,
  Radio,
  TagIcon,
  Package,
  Shirt,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';

export type FAQ = { q: string; a: string };
export type SpecRow = { label: string; value: string };

export type PrintService = {
  slug: string;
  iconName:
    | 'CreditCard'
    | 'Smartphone'
    | 'Radio'
    | 'TagIcon'
    | 'Package'
    | 'Shirt'
    | 'Megaphone';
  category: string;
  hero: {
    eyebrow: string;
    h1Soft: string;
    h1Accent: string;
    tagline: string;
    intro: string;
  };
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  highlights: string[];
  features: { title: string; desc: string }[];
  useCases: { title: string; desc: string }[];
  materials: string[];
  specifications: SpecRow[];
  whyChooseUs: { title: string; desc: string }[];
  industries: string[];
  faqs: FAQ[];
  relatedSlugs: string[];
};

export const ICONS: Record<PrintService['iconName'], LucideIcon> = {
  CreditCard,
  Smartphone,
  Radio,
  TagIcon,
  Package,
  Shirt,
  Megaphone,
};

export const PRINT_SERVICES: PrintService[] = [
  {
    slug: 'pvc-cards',
    iconName: 'CreditCard',
    category: 'Plastic Card Printing',
    hero: {
      eyebrow: 'PVC Card Printing',
      h1Soft: 'Premium PVC',
      h1Accent: 'Card Printing in India',
      tagline: 'Durable plastic cards. Crystal-clear print. Built to last.',
      intro:
        'MultiOrigin manufactures premium PVC cards for businesses, schools, hospitals, hotels, gyms, clubs, and government departments across India. Standard CR80 ID-card size, 0.76 mm thickness, glossy or matte finish, full-colour edge-to-edge printing, and optional magnetic stripes, barcodes, QR codes, or signature panels — all printed with bank-grade precision and delivered nationwide.',
    },
    meta: {
      title: 'PVC Card Printing in India — ID Cards, Membership & Loyalty Cards | MultiOrigin',
      description:
        'Premium PVC card printing services in India. Custom plastic ID cards, employee cards, membership cards, gift cards & loyalty cards. CR80 standard size, 0.76mm thickness, glossy/matte finish, magnetic stripe & barcode options. Fast delivery, bulk orders welcomed.',
      keywords: [
        'PVC card printing',
        'PVC card printing India',
        'plastic ID card printing',
        'custom PVC cards',
        'employee ID card printing',
        'membership card printing',
        'gift card printing',
        'loyalty card printing',
        'CR80 PVC card',
        'magnetic stripe card',
        'school ID card printing',
        'hospital ID card',
        'hotel key card',
        'PVC card manufacturer',
        'plastic card printing',
        'ID card maker India',
      ],
    },
    highlights: [
      'CR80 standard size (85.6 × 54 mm)',
      '0.76 mm bank-grade thickness',
      'Edge-to-edge full-colour print',
      'Glossy or matte lamination',
      'Magnetic stripe, barcode, QR options',
      'Embossing, signature panel, hologram',
      'Single-sided or double-sided printing',
      'Bulk orders: 50 to 1,00,000+ cards',
    ],
    features: [
      {
        title: 'Photo-quality CMYK printing',
        desc: 'High-resolution dye-sublimation and retransfer printing for sharp text, vivid colours, and lifelike employee photographs that resist fading.',
      },
      {
        title: 'Magnetic stripe encoding',
        desc: 'HiCo and LoCo magnetic stripes available with track 1, 2, and 3 encoding for access control, payment, and loyalty applications.',
      },
      {
        title: 'Smart chip & contact options',
        desc: 'Integrate contact chips for secure authentication, attendance, payments, or government-grade ID systems.',
      },
      {
        title: 'Anti-counterfeit security',
        desc: 'Holograms, UV print, micro-text, and overlay laminates protect your cards from duplication and tampering.',
      },
      {
        title: 'Custom shapes & finishes',
        desc: 'Beyond standard CR80 — custom die-cut shapes, frosted, metallic, transparent, or wood-grain finishes available.',
      },
      {
        title: 'Variable data printing',
        desc: 'Each card uniquely printed with names, photos, employee IDs, QR codes, and barcodes from your CSV or database.',
      },
    ],
    useCases: [
      {
        title: 'Employee & Staff ID Cards',
        desc: 'Corporate office identity cards, factory worker IDs, government department IDs with photo, name, designation, and barcode.',
      },
      {
        title: 'School & College ID Cards',
        desc: 'Student ID cards, faculty cards, library cards with QR codes for attendance and library issue/return.',
      },
      {
        title: 'Membership & Loyalty Cards',
        desc: 'Gym, club, salon, restaurant, and retail loyalty cards with magnetic stripe or QR for points tracking.',
      },
      {
        title: 'Hotel Key Cards & Hospitality',
        desc: 'RFID-enabled hotel room key cards, restaurant member cards, and resort access cards with custom branding.',
      },
      {
        title: 'Gift & Prepaid Cards',
        desc: 'Branded gift cards, prepaid cards, and voucher cards for retail chains, e-commerce, and franchise networks.',
      },
      {
        title: 'Healthcare & Hospital Cards',
        desc: 'Patient cards, doctor IDs, visitor passes, and health insurance cards with secure data encoding.',
      },
    ],
    materials: [
      'Premium PVC (Polyvinyl Chloride)',
      'Composite PVC (PVC + PET)',
      'Eco-PVC (recyclable)',
      'Frosted / transparent PVC',
      'Metallic foil cards',
      'Wood-grain laminate',
    ],
    specifications: [
      { label: 'Standard Size', value: 'CR80 — 85.6 × 54 mm (3.37 × 2.13 inch)' },
      { label: 'Thickness', value: '0.76 mm (30 mil) — bank/ATM grade' },
      { label: 'Material', value: 'Premium PVC, composite PVC, PET' },
      { label: 'Print Method', value: 'Dye-sublimation, retransfer, offset, digital' },
      { label: 'Print Coverage', value: 'Edge-to-edge, full-colour CMYK, single or double-sided' },
      { label: 'Finish', value: 'Glossy, matte, frosted, metallic, holographic' },
      { label: 'Optional Features', value: 'Magnetic stripe, barcode, QR, signature panel, embossing, smart chip, RFID' },
      { label: 'Minimum Order', value: '50 cards (custom design); bulk discounts on 500+' },
      { label: 'Turnaround', value: '3–7 working days; rush options available' },
    ],
    whyChooseUs: [
      {
        title: 'Bank-grade quality',
        desc: 'Same machines used by leading Indian banks for ATM and debit card printing.',
      },
      {
        title: 'Pan-India delivery',
        desc: 'Fast, insured shipping to every state with tracking from print to door.',
      },
      {
        title: 'Free design support',
        desc: 'Our in-house design team will craft your card layout and brand identity at no extra cost.',
      },
      {
        title: 'Bulk pricing',
        desc: 'Aggressive per-unit pricing on orders above 500 cards — request a custom quote.',
      },
    ],
    industries: [
      'Corporate & IT',
      'Education',
      'Healthcare',
      'Hospitality',
      'Retail',
      'Government',
      'Banking & Finance',
      'Manufacturing',
      'Sports & Fitness',
      'Events',
    ],
    faqs: [
      {
        q: 'What is the standard size of a PVC card?',
        a: 'PVC cards are printed in CR80 standard size — 85.6 mm × 54 mm — the same size as a credit or debit card. Custom shapes and sizes are available on bulk orders.',
      },
      {
        q: 'Are your PVC cards waterproof and tear-resistant?',
        a: 'Yes. Our PVC cards are 0.76 mm (30 mil) thick, fully waterproof, scratch-resistant, and tear-proof — built to last for years of daily handling.',
      },
      {
        q: 'What is the minimum order quantity for PVC card printing?',
        a: 'We accept custom-design orders starting from just 50 cards. Bulk orders of 500+ unlock significant per-unit price reductions.',
      },
      {
        q: 'Can you print magnetic stripe and barcode on PVC cards?',
        a: 'Absolutely. We offer HiCo and LoCo magnetic stripes, 1D barcodes, QR codes, signature panels, and even smart chips and RFID encoding on PVC cards.',
      },
      {
        q: 'How long does PVC card printing take?',
        a: 'Standard turnaround is 3–7 working days from artwork approval. Rush orders can be delivered in 24–48 hours for an additional fee.',
      },
      {
        q: 'Do you print individual employee names and photos on each card?',
        a: 'Yes, we specialise in variable data printing — each card uniquely printed with names, photos, IDs, and barcodes from your spreadsheet or database.',
      },
      {
        q: 'Do you provide PVC cards for schools and colleges?',
        a: 'Yes — student ID cards, faculty cards, library cards, and hostel cards. We work with 100+ educational institutions across India.',
      },
    ],
    relatedSlugs: ['nfc-cards', 'rfid-cards', 'lanyards'],
  },

  {
    slug: 'nfc-cards',
    iconName: 'Smartphone',
    category: 'Smart Card Printing',
    hero: {
      eyebrow: 'NFC Card Printing',
      h1Soft: 'Smart NFC',
      h1Accent: 'Cards & Digital Business Cards',
      tagline: 'One tap. Endless possibilities.',
      intro:
        'NFC (Near Field Communication) cards from MultiOrigin let your customers, employees, and partners share contact details, social profiles, websites, payments, and Wi-Fi credentials with a single tap of any modern smartphone. Programmable NTAG213, NTAG215, and NTAG216 chips, custom branding, full-colour print, and secure read-write encoding — perfect for smart business cards, digital menus, contactless marketing, and access control.',
    },
    meta: {
      title: 'NFC Cards & Smart Business Cards in India — Tap-to-Share | MultiOrigin',
      description:
        'Custom NFC card printing in India — programmable NTAG213, NTAG215, NTAG216 smart business cards. Share contact info, links, social profiles, payments & Wi-Fi with one tap. Custom branding, bulk orders, free programming. Perfect for networking, marketing, and smart access.',
      keywords: [
        'NFC card',
        'NFC card printing',
        'NFC business card',
        'smart business card India',
        'digital business card',
        'NTAG215 card',
        'NTAG216 card',
        'NTAG213 card',
        'tap to share card',
        'contactless business card',
        'NFC card manufacturer India',
        'programmable NFC card',
        'NFC marketing card',
        'NFC payment card',
        'NFC card printing Delhi',
        'electronic business card',
      ],
    },
    highlights: [
      'NTAG213, NTAG215 & NTAG216 chips',
      'Tap-to-share with any modern smartphone',
      'Programmable: contact, URL, vCard, Wi-Fi, payment',
      'Standard CR80 PVC card size',
      'Full-colour custom printing',
      'Encryption & password lock options',
      'Re-writable up to 1,00,000 times',
      'Works without an app on iOS & Android',
    ],
    features: [
      {
        title: 'Tap & share — no app needed',
        desc: 'Modern iPhones (XS+) and Android phones read NFC cards natively. No download, no setup — just tap.',
      },
      {
        title: 'Programmable & re-writable',
        desc: 'Update the chip data anytime — change contact details, swap out a campaign URL, or redirect a card without reprinting.',
      },
      {
        title: 'Smart business cards',
        desc: 'Replace 1,000 paper cards with one elegant NFC card that shares your full vCard, LinkedIn, Instagram, and WhatsApp instantly.',
      },
      {
        title: 'Marketing & promo cards',
        desc: 'Tap-enabled menus, brochures, posters, and product tags that launch landing pages, videos, or special offers in one second.',
      },
      {
        title: 'Secure access & payments',
        desc: 'NFC cards configured for office access control, hotel keyless entry, gym check-in, and contactless transit/payment systems.',
      },
      {
        title: 'Free chip programming',
        desc: 'We pre-program your chip with your URL, vCard, or campaign data before shipping — ready to use the moment they arrive.',
      },
    ],
    useCases: [
      {
        title: 'Smart Business Cards',
        desc: 'CXOs, founders, sales teams, and consultants instantly share contact, LinkedIn, portfolio, and calendar with one tap.',
      },
      {
        title: 'Digital Menus & Hospitality',
        desc: 'Restaurants, cafés, hotels, and bars — guests tap the card on the table to view the digital menu, order, and pay.',
      },
      {
        title: 'Event & Conference Badges',
        desc: 'Tap-to-connect badges that share attendee profiles, schedules, sponsor links, and survey forms in real time.',
      },
      {
        title: 'Real Estate & Property Tours',
        desc: 'Place NFC cards on property displays — buyers tap to instantly view floor plans, video tours, and contact the agent.',
      },
      {
        title: 'Marketing Campaigns',
        desc: 'Promo cards that launch landing pages, AR experiences, coupon codes, or app downloads with a single tap.',
      },
      {
        title: 'Office Access & Attendance',
        desc: 'Replace ID swipe cards with secure NFC cards for door access, biometric attendance, and cafeteria payments.',
      },
    ],
    materials: [
      'Premium PVC NFC card',
      'Frosted PVC NFC card',
      'Metallic NFC card',
      'Wood NFC card (eco)',
      'Bamboo NFC card',
      'Transparent NFC card',
      'Black PVC matte NFC',
    ],
    specifications: [
      { label: 'Chip Options', value: 'NXP NTAG213 (180B), NTAG215 (540B), NTAG216 (924B)' },
      { label: 'Frequency', value: '13.56 MHz HF (ISO 14443A standard)' },
      { label: 'Card Size', value: 'CR80 — 85.6 × 54 mm; custom shapes available' },
      { label: 'Read Range', value: '0–4 cm (close-range tap)' },
      { label: 'Memory', value: '180 / 540 / 924 bytes user-writable' },
      { label: 'Programming', value: 'URL, vCard, Wi-Fi, Bluetooth pairing, payment, custom NDEF' },
      { label: 'Compatibility', value: 'iPhone XS & later, all NFC-enabled Android devices' },
      { label: 'Print Quality', value: 'Full-colour CMYK edge-to-edge, glossy or matte finish' },
      { label: 'Lifetime', value: '10 years; up to 1,00,000 re-writes' },
      { label: 'Minimum Order', value: '25 cards; bulk pricing from 100+' },
    ],
    whyChooseUs: [
      {
        title: 'Free pre-programming',
        desc: 'We program every card with your data before it ships — zero technical setup needed on your side.',
      },
      {
        title: 'Lock & secure your data',
        desc: 'Optional password protection prevents anyone from overwriting your chip after delivery.',
      },
      {
        title: 'Custom landing pages',
        desc: 'We can design and host a custom mobile landing page that launches when someone taps your card.',
      },
      {
        title: 'Eco-friendly options',
        desc: 'Bamboo, wood, and recycled PVC NFC cards available for sustainable brand statements.',
      },
    ],
    industries: [
      'Corporate / Networking',
      'Hospitality & F&B',
      'Real Estate',
      'Events & Conferences',
      'Healthcare',
      'Retail',
      'Education',
      'Marketing Agencies',
      'Co-working Spaces',
      'Startups',
    ],
    faqs: [
      {
        q: 'What is an NFC card and how does it work?',
        a: 'An NFC card has a tiny chip embedded inside the PVC. When tapped against a smartphone, the phone reads the chip data — typically a URL, contact card, or Wi-Fi credentials — without needing any app.',
      },
      {
        q: 'Do I need to download an app to use an NFC card?',
        a: 'No. iPhones (XS and newer) and all NFC-enabled Android phones read NFC cards natively, with no app or pairing required. Just bring the card close to the phone.',
      },
      {
        q: 'Can I update the data on my NFC card after printing?',
        a: 'Yes. Our NFC cards are re-writable up to 100,000 times. You can change the URL, contact info, or campaign data anytime using a free smartphone NFC writer app.',
      },
      {
        q: 'Which NFC chip is best — NTAG213, 215, or 216?',
        a: 'NTAG213 (180 bytes) suits short URLs and simple vCards. NTAG215 (540 bytes) is the most popular for full vCards and Amiibo-style applications. NTAG216 (924 bytes) handles larger payloads.',
      },
      {
        q: 'Are NFC cards secure?',
        a: 'Yes. We can password-lock your NFC chip so the data cannot be overwritten by anyone else. For payment and access cards, we use encrypted authentication chips.',
      },
      {
        q: 'Will an NFC business card work on an iPhone?',
        a: 'Yes — every iPhone XS and later (released since 2018) reads NFC cards natively from the lock screen, no app needed.',
      },
      {
        q: 'How is an NFC card different from a QR code?',
        a: 'An NFC card works with one quick tap — no camera, no scanning, no app. It is faster, more elegant, and waterproof. QR codes work too but require opening the camera app and aiming.',
      },
    ],
    relatedSlugs: ['pvc-cards', 'rfid-cards', 'lanyards'],
  },

  {
    slug: 'rfid-cards',
    iconName: 'Radio',
    category: 'Smart Card Printing',
    hero: {
      eyebrow: 'RFID Card Printing',
      h1Soft: 'RFID Cards for',
      h1Accent: 'Access, Attendance & Payments',
      tagline: 'Contactless. Encrypted. Ready to deploy.',
      intro:
        'MultiOrigin manufactures RFID cards across all three frequencies — 125 KHz LF (EM4100, T5577), 13.56 MHz HF (Mifare Classic, Mifare DESFire, NFC), and 860–960 MHz UHF (EPC Gen 2). Designed for office access control, time and attendance, hotel key cards, transit ticketing, library systems, asset tracking, cashless payments, and student ID systems. Custom-printed in CR80 PVC with optional magnetic stripe, barcode, and signature panel.',
    },
    meta: {
      title: 'RFID Card Printing in India — Access, Attendance & Smart Cards | MultiOrigin',
      description:
        'RFID card printing services across India — 125 KHz LF (EM4100, T5577), 13.56 MHz HF (Mifare Classic, DESFire, NFC), and UHF cards. Custom-printed access control cards, attendance cards, hotel key cards, transit cards & smart ID cards. Bulk orders welcomed.',
      keywords: [
        'RFID card',
        'RFID card printing',
        'RFID card India',
        'access control card',
        'Mifare Classic card',
        'Mifare DESFire card',
        '125 KHz RFID card',
        '13.56 MHz RFID card',
        'UHF RFID card',
        'EM4100 card',
        'T5577 card',
        'attendance card RFID',
        'hotel key card RFID',
        'smart card printing',
        'office access card',
        'RFID ID card',
        'RFID card manufacturer',
      ],
    },
    highlights: [
      'LF (125 KHz), HF (13.56 MHz) & UHF supported',
      'Mifare Classic, DESFire, NTAG, EM4100, T5577',
      'Bank-grade encryption available',
      'CR80 PVC with full-colour print',
      'Magnetic stripe + RFID combo cards',
      'Read range from 4 cm to 10 m (UHF)',
      'Compatible with all major access systems',
      'Bulk pricing from 100 cards',
    ],
    features: [
      {
        title: 'All three RFID frequencies',
        desc: 'LF (125 KHz) for legacy access systems, HF (13.56 MHz) for Mifare and NFC, UHF (860–960 MHz) for long-range tracking and toll payment.',
      },
      {
        title: 'Read-write & encrypted chips',
        desc: 'Mifare DESFire EV2 / EV3 cards with AES-128 encryption — the same standard used in metro and bank cards.',
      },
      {
        title: 'Compatible with all readers',
        desc: 'Works seamlessly with HID, ZKTeco, Suprema, eSSL, Realtime, Matrix, Honeywell, and other major access systems.',
      },
      {
        title: 'Combo cards',
        desc: 'Combine RFID with magnetic stripe, barcode, smart chip, photo print, and signature panel on a single card.',
      },
      {
        title: 'Custom encoding service',
        desc: 'We pre-encode each card with unique IDs, employee numbers, or sector keys before shipping — plug-and-play deployment.',
      },
      {
        title: 'Anti-clone & secure',
        desc: 'Mifare DESFire and Plus EV2 cards offer strong AES authentication, preventing the cloning attacks possible on older Mifare Classic.',
      },
    ],
    useCases: [
      {
        title: 'Office Access Control',
        desc: 'Door entry, turnstile access, lift/elevator control, parking gate access — instantly track who enters and leaves.',
      },
      {
        title: 'Time & Attendance',
        desc: 'Tap-to-clock attendance for factories, offices, schools, and construction sites with biometric backup.',
      },
      {
        title: 'Hotel Key Cards',
        desc: 'Mifare 1K key cards for guest rooms, executive lounges, gym, and pool access — re-encodable per stay.',
      },
      {
        title: 'Transit & Toll Cards',
        desc: 'NCMC-compatible RuPay cards, metro stored-value cards, and FASTag-like UHF cards for highways.',
      },
      {
        title: 'Cashless Payment',
        desc: 'Closed-loop payment cards for cafeterias, college campuses, factories, and corporate canteens.',
      },
      {
        title: 'Library & Asset Tracking',
        desc: 'Library member cards, book tracking, equipment loan management, and inventory control with UHF tags.',
      },
    ],
    materials: [
      'Premium PVC',
      'PET-G (eco)',
      'Composite PVC + PET',
      'ABS clamshell',
      'Frosted PVC',
      'Metallic finish PVC',
    ],
    specifications: [
      { label: 'Frequencies', value: '125 KHz LF | 13.56 MHz HF | 860–960 MHz UHF' },
      {
        label: 'Chip Options',
        value: 'EM4100, T5577, TK4100, Mifare Classic 1K/4K, Mifare DESFire EV1/EV2/EV3, NTAG213/215/216, Alien H3, Monza R6',
      },
      { label: 'Read Range', value: 'LF: 5–10 cm | HF: 4–10 cm | UHF: 1–10 m' },
      { label: 'Encryption', value: 'AES-128 (DESFire), Crypto-1 (Classic), unique UID' },
      { label: 'Card Size', value: 'CR80 — 85.6 × 54 mm; clamshell 86 × 54 × 1.8 mm' },
      { label: 'Print Quality', value: 'Full-colour CMYK, photo-quality dye-sublimation' },
      { label: 'Optional Features', value: 'Magnetic stripe, barcode, QR, signature panel, photo, smart chip' },
      { label: 'Compatibility', value: 'HID, ZKTeco, Suprema, eSSL, Realtime, Matrix, Honeywell, ESS, Bosch' },
      { label: 'Minimum Order', value: '100 cards; bulk pricing from 500+' },
      { label: 'Turnaround', value: '5–10 working days; rush options on stock chips' },
    ],
    whyChooseUs: [
      {
        title: 'Reader compatibility verified',
        desc: 'We test card-reader pairing before shipping — zero deployment surprises.',
      },
      {
        title: 'Pre-encoding included',
        desc: 'Sector keys, UIDs, or custom data programmed before delivery at no extra cost.',
      },
      {
        title: 'Genuine NXP & Alien chips',
        desc: 'Only authentic, traceable RFID inlays — no compromise on read range or lifetime.',
      },
      {
        title: 'Migration support',
        desc: 'Replacing old EM4100 with secure DESFire? We help plan the transition end-to-end.',
      },
    ],
    industries: [
      'Corporate Offices',
      'Manufacturing',
      'Hospitality',
      'Education',
      'Healthcare',
      'Banking',
      'Government',
      'Retail',
      'Logistics',
      'Public Transit',
    ],
    faqs: [
      {
        q: 'What is the difference between LF, HF and UHF RFID cards?',
        a: 'LF (125 KHz) is used for legacy access systems and animal tagging. HF (13.56 MHz) covers Mifare, NFC, and metro/payment cards. UHF (860–960 MHz) gives long read range — used for toll payment and asset tracking.',
      },
      {
        q: 'Are Mifare Classic cards still safe to use?',
        a: 'Mifare Classic is functional but its Crypto-1 algorithm has known weaknesses. For new deployments — especially access control and payments — we recommend Mifare DESFire EV2/EV3 with AES-128 encryption.',
      },
      {
        q: 'Will your RFID cards work with my existing access control reader?',
        a: 'Yes — we support every major brand (HID, ZKTeco, Suprema, eSSL, Realtime, Matrix). Share your reader model and we will recommend the right chip and frequency.',
      },
      {
        q: 'Can RFID and NFC be on the same card?',
        a: 'Yes. NFC is a subset of HF (13.56 MHz) RFID. A single Mifare DESFire or NTAG card can be used for both office access and tap-to-share NFC interactions.',
      },
      {
        q: 'Do you pre-encode the cards before delivery?',
        a: 'Yes. We program UIDs, sector keys, employee IDs, or custom payloads at no additional charge so cards are ready to use the moment they arrive.',
      },
      {
        q: 'What is the minimum order for RFID card printing?',
        a: 'We accept custom-printed RFID card orders from 100 cards onwards. Significant bulk discounts apply on 500+ orders.',
      },
      {
        q: 'How long do RFID cards last?',
        a: 'Properly handled, our RFID cards last 10+ years and 100,000+ read cycles. The PVC body is waterproof, scratch-resistant, and bend-tolerant.',
      },
    ],
    relatedSlugs: ['pvc-cards', 'nfc-cards', 'lanyards'],
  },

  {
    slug: 'lanyards',
    iconName: 'TagIcon',
    category: 'Event & ID Accessories',
    hero: {
      eyebrow: 'Custom Lanyard Printing',
      h1Soft: 'Custom Printed',
      h1Accent: 'Lanyards for Events & ID',
      tagline: 'Carry your brand around every neck.',
      intro:
        'MultiOrigin produces custom-printed lanyards for corporate events, conferences, exhibitions, schools, hospitals, and trade shows across India. Choose from polyester, satin, nylon, woven, and dye-sublimation lanyards in 10mm, 15mm, 20mm and 25mm widths — printed with your logo, slogan, sponsor names, or full-colour artwork. Available with breakaway safety clips, J-hooks, bulldog clips, and badge holders. Bulk pricing from 50 pieces.',
    },
    meta: {
      title: 'Custom Lanyard Printing in India — ID & Event Lanyards | MultiOrigin',
      description:
        'Custom printed lanyards for events, conferences, schools & corporates in India. Polyester, satin, nylon, woven & dye-sublimation lanyards in 10mm–25mm widths. Logo, slogan, full-colour print, breakaway clips, badge holders. Bulk orders, fast delivery.',
      keywords: [
        'lanyard printing',
        'custom lanyards',
        'lanyard printing India',
        'ID card lanyards',
        'event lanyards',
        'conference lanyards',
        'sublimation lanyard',
        'polyester lanyard',
        'satin lanyard',
        'nylon lanyard',
        'woven lanyard',
        'breakaway lanyard',
        'logo lanyard',
        'school lanyard',
        'office lanyard',
        'lanyard manufacturer India',
      ],
    },
    highlights: [
      'Polyester, satin, nylon, woven, sublimation',
      'Widths: 10 mm, 15 mm, 20 mm, 25 mm',
      'Single & double-sided custom printing',
      'Breakaway safety clip available',
      'J-hook, bulldog clip, badge holder, swivel hook',
      'Full-colour Pantone matching',
      'Eco bamboo & recycled PET options',
      'Bulk pricing from 50 pieces',
    ],
    features: [
      {
        title: 'Dye-sublimation full-colour print',
        desc: 'Photo-quality, edge-to-edge sublimation print that never fades, peels, or scratches off — perfect for sponsor logos and complex artwork.',
      },
      {
        title: 'Woven satin lanyards',
        desc: 'Premium thread-woven lanyards for VIP, executive, and luxury brand events — texture you can feel.',
      },
      {
        title: 'Breakaway safety clip',
        desc: 'Quick-release clip required for school, hospital, and child-safe environments — meets ISO safety standards.',
      },
      {
        title: 'Multiple attachment options',
        desc: 'J-hook, bulldog clip, swivel hook, plastic snap, and badge holder — pick what fits your ID card or pass.',
      },
      {
        title: 'Pantone colour matching',
        desc: 'Exact brand-colour matching using PMS codes — your lanyard matches your brand identity precisely.',
      },
      {
        title: 'Eco-friendly materials',
        desc: 'Bamboo fibre, recycled PET (rPET), and biodegradable cotton lanyards for sustainable corporate branding.',
      },
    ],
    useCases: [
      {
        title: 'Corporate Events & Conferences',
        desc: 'Branded lanyards for delegates, speakers, sponsors, and staff — full sponsor logo print on dye-sublimation.',
      },
      {
        title: 'Trade Shows & Exhibitions',
        desc: 'Visitor passes, exhibitor badges, and VIP lanyards in distinct colours for easy crowd categorisation.',
      },
      {
        title: 'Schools, Colleges & Universities',
        desc: 'Student ID lanyards with breakaway safety clip, faculty lanyards, and parent-pickup lanyards.',
      },
      {
        title: 'Hospitals & Healthcare',
        desc: 'Doctor, nurse, and visitor lanyards with antimicrobial coating and breakaway safety release.',
      },
      {
        title: 'Office Identity & Access',
        desc: 'Employee, contractor, and visitor lanyards combined with RFID/NFC ID cards for office access.',
      },
      {
        title: 'Sports, Gyms & Membership',
        desc: 'Coach lanyards, member tags, gym staff IDs, and tournament accreditation lanyards.',
      },
    ],
    materials: [
      'Polyester (most popular)',
      'Satin / smooth polyester',
      'Nylon (premium soft)',
      'Tubular polyester',
      'Woven thread (jacquard)',
      'Bamboo fibre (eco)',
      'Recycled PET (rPET)',
    ],
    specifications: [
      { label: 'Widths Available', value: '10 mm, 15 mm (most popular), 20 mm, 25 mm' },
      { label: 'Standard Length', value: '90 cm (folded) — adjustable' },
      { label: 'Materials', value: 'Polyester, satin, nylon, tubular, woven, bamboo, rPET' },
      { label: 'Print Methods', value: 'Silkscreen (1–4 colours), dye-sublimation (full colour), woven thread' },
      { label: 'Print Sides', value: 'Single-sided or double-sided full coverage' },
      { label: 'Attachment Hooks', value: 'J-hook, bulldog clip, swivel hook, snap clip, plastic clip, badge holder' },
      { label: 'Safety Features', value: 'Breakaway buckle (school/hospital), reinforced stitching' },
      { label: 'Colour Matching', value: 'Pantone (PMS) matching available' },
      { label: 'Minimum Order', value: '50 pieces (silkscreen); 100 pieces (sublimation/woven)' },
      { label: 'Turnaround', value: '5–10 working days; rush options available' },
    ],
    whyChooseUs: [
      {
        title: 'In-house manufacturing',
        desc: 'Direct-from-factory pricing — no middlemen, no markups.',
      },
      {
        title: 'Free design service',
        desc: 'Our designers will mock up your lanyard with your logo and brand colours at no charge.',
      },
      {
        title: 'Bundle with ID cards',
        desc: 'Order PVC ID cards, NFC cards, and lanyards together for a complete branded solution.',
      },
      {
        title: 'Fast event turnaround',
        desc: 'Need lanyards in 72 hours for a last-minute event? Our rush service has you covered.',
      },
    ],
    industries: [
      'Events & Conferences',
      'Education',
      'Healthcare',
      'Corporate',
      'Trade Shows',
      'Sports',
      'Government',
      'Tourism',
      'Hospitality',
      'NGOs',
    ],
    faqs: [
      {
        q: 'What is the most popular lanyard width?',
        a: '15 mm is by far the most popular — wide enough to display logos clearly, comfortable around the neck, and economical. 20 mm and 25 mm are preferred for premium events with multiple sponsor logos.',
      },
      {
        q: 'What is the difference between silkscreen and dye-sublimation lanyards?',
        a: 'Silkscreen prints up to 4 spot colours on polyester — great for simple logos. Dye-sublimation prints unlimited full-colour artwork edge-to-edge — best for complex designs, photos, and gradients.',
      },
      {
        q: 'Are breakaway lanyards safer for children and hospitals?',
        a: 'Yes. Breakaway lanyards have a plastic safety buckle that releases under tension — essential for schools, hospitals, factories, and any setting where the lanyard might snag.',
      },
      {
        q: 'Can you match my exact brand colour on lanyards?',
        a: 'Absolutely. Share your Pantone (PMS) code and we will match it precisely on the lanyard fabric and print.',
      },
      {
        q: 'What is the minimum order quantity for custom lanyards?',
        a: 'Silkscreen lanyards start from 50 pieces. Dye-sublimation and woven lanyards typically start from 100 pieces.',
      },
      {
        q: 'Do you supply lanyards with badge holders and ID cards?',
        a: 'Yes — bundle our lanyards with PVC ID cards, NFC cards, RFID cards, and clear plastic badge holders for a complete, ready-to-deploy event or office package.',
      },
      {
        q: 'How long does lanyard printing take?',
        a: 'Standard turnaround is 5–10 working days from artwork approval. Rush orders for events can be delivered in 72 hours for an additional charge.',
      },
    ],
    relatedSlugs: ['pvc-cards', 'nfc-cards', 'rfid-cards'],
  },

  {
    slug: 'packaging',
    iconName: 'Package',
    category: 'Custom Packaging',
    hero: {
      eyebrow: 'Custom Packaging Printing',
      h1Soft: 'Custom Packaging',
      h1Accent: 'That Sells Your Brand',
      tagline: 'Unbox a brand experience worth sharing.',
      intro:
        'MultiOrigin designs and manufactures premium custom packaging — mono cartons, corrugated mailers, rigid gift boxes, e-commerce shipping boxes, product labels, sleeves, and pouches — for D2C brands, FMCG companies, beauty and wellness brands, electronics, food and beverage, and luxury gifting across India. Sustainable kraft, eco-friendly inks, FSSAI-compliant food packaging, and full-colour offset and digital printing with foiling, embossing, spot UV, and metallic finishes.',
    },
    meta: {
      title: 'Custom Packaging Printing in India — Boxes, Cartons & Mailers | MultiOrigin',
      description:
        'Custom packaging printing in India — mono cartons, corrugated boxes, rigid gift boxes, e-commerce mailers, product labels, sleeves & pouches. Eco-friendly kraft, full-colour offset & digital print, foiling, embossing, spot UV. Bulk orders for D2C, FMCG, beauty, food & gifting.',
      keywords: [
        'custom packaging printing',
        'packaging printing India',
        'mono carton printing',
        'corrugated box printing',
        'rigid box manufacturer',
        'e-commerce packaging',
        'custom mailer box',
        'product packaging design',
        'food packaging printing',
        'beauty packaging India',
        'D2C packaging',
        'kraft box printing',
        'gift box manufacturer',
        'packaging design India',
        'custom printed boxes',
        'shipping box printing',
        'product label printing',
      ],
    },
    highlights: [
      'Mono cartons, rigid boxes, mailers, sleeves',
      'FSSAI-compliant food-grade packaging',
      'Eco-friendly kraft & recycled options',
      'Foiling, embossing, spot UV, soft touch',
      'Offset & digital printing',
      'Custom die-cut shapes & inserts',
      'Bulk orders from 100 to 1,00,000+',
      'Free structural design assistance',
    ],
    features: [
      {
        title: 'D2C unboxing experience',
        desc: 'Crafted mailer boxes with brand storytelling on the inside flap, custom inserts, tissue paper, and stickers — designed for the social media moment.',
      },
      {
        title: 'Premium finishes',
        desc: 'Gold and silver foil, blind embossing, debossing, spot UV, soft-touch lamination, and metallic inks for luxury positioning.',
      },
      {
        title: 'Sustainable packaging',
        desc: 'FSC-certified kraft, recycled board, water-based inks, vegetable adhesives, and biodegradable shrink-free options.',
      },
      {
        title: 'Food-grade certified',
        desc: 'FSSAI-compliant food packaging with food-safe inks and grease-resistant coatings for bakery, sweets, snacks, and ready-to-eat brands.',
      },
      {
        title: 'Structural design',
        desc: 'Our packaging engineers create custom die-lines, inserts, and shapes tailored to your product dimensions and shipping needs.',
      },
      {
        title: 'Variable & versioned printing',
        desc: 'Print 50 SKUs or 50 limited-edition variants in a single run with digital printing — no minimum quantity per design.',
      },
    ],
    useCases: [
      {
        title: 'D2C Beauty & Skincare',
        desc: 'Branded mailer boxes, rigid jar packaging, dropper bottle cartons, and sample sachets for direct-to-consumer beauty brands.',
      },
      {
        title: 'Food & Beverage',
        desc: 'Bakery boxes, pizza cartons, takeaway containers, snack pouches, and chocolate boxes — all FSSAI-compliant.',
      },
      {
        title: 'E-commerce & Shipping',
        desc: 'Branded corrugated mailers and shipping boxes that survive transit and amplify brand identity at delivery.',
      },
      {
        title: 'Luxury Gifting',
        desc: 'Rigid setup boxes with magnetic closures, satin ribbons, and foam inserts for jewellery, watches, and corporate gifts.',
      },
      {
        title: 'Electronics & Gadgets',
        desc: 'Telescopic cartons, foam-fitted inserts, and protective packaging for consumer electronics and accessories.',
      },
      {
        title: 'Pharma & Wellness',
        desc: 'Cartons for medicines, wellness supplements, ayurvedic products, with batch printing and tamper-evident seals.',
      },
    ],
    materials: [
      'SBS / FBB / Art card (mono carton)',
      '3-ply, 5-ply, 7-ply corrugated',
      'Kraft (FSC certified)',
      'Recycled board',
      'Rigid greyboard (gift boxes)',
      'Metallic and foil board',
      'Food-grade BOPP / PE laminate',
    ],
    specifications: [
      { label: 'Box Types', value: 'Tuck-end, auto-bottom, mailer, telescopic, rigid setup, sleeve, shipper' },
      { label: 'Materials', value: 'SBS, FBB, kraft, art card, corrugated 3/5/7-ply, rigid greyboard, metallic board' },
      { label: 'GSM Range', value: '230 GSM – 450 GSM (cartons); 1.5 mm – 3 mm rigid board' },
      { label: 'Print Methods', value: 'Offset (CMYK + Pantone), digital (small runs), flexo (corrugated)' },
      { label: 'Finishes', value: 'Gloss / matte / soft-touch / aqueous lamination; spot UV; emboss; deboss; foil stamp' },
      { label: 'Eco Options', value: 'FSC paper, water-based inks, vegetable glue, recycled kraft, biodegradable' },
      { label: 'Certifications', value: 'FSSAI food-grade, FSC sustainable, ISO 9001 quality' },
      { label: 'Minimum Order', value: '100 boxes (digital); 1,000 boxes (offset / die-cut tooling)' },
      { label: 'Turnaround', value: '7–15 working days; rush orders 4–6 days' },
    ],
    whyChooseUs: [
      {
        title: 'Free structural design',
        desc: 'Send us your product dimensions and we design the perfect die-cut box around it — no charge.',
      },
      {
        title: 'Sustainable by default',
        desc: 'Recycled, FSC-certified, and biodegradable materials available across all packaging types.',
      },
      {
        title: 'Sample before bulk',
        desc: 'Approve a printed prototype before committing to a 1,000+ unit run.',
      },
      {
        title: 'Pan-India dispatch',
        desc: 'Direct-to-warehouse, direct-to-store, or direct-to-customer drop-ship support.',
      },
    ],
    industries: [
      'D2C Beauty & Personal Care',
      'F&B and Restaurants',
      'E-commerce',
      'Pharma & Wellness',
      'Electronics',
      'Apparel & Fashion',
      'Jewellery & Luxury',
      'Toys & Stationery',
      'Confectionery',
      'Gifting',
    ],
    faqs: [
      {
        q: 'What is the minimum order quantity for custom packaging?',
        a: 'Digital printing starts from 100 boxes — perfect for D2C launches, samples, and small-batch products. Offset printing with custom die-cuts typically starts at 1,000 units to amortise tooling cost.',
      },
      {
        q: 'Is your food packaging FSSAI compliant?',
        a: 'Yes. We use food-grade boards, food-safe inks, and grease-resistant coatings approved by FSSAI for direct food contact applications.',
      },
      {
        q: 'Do you offer eco-friendly packaging?',
        a: 'Absolutely. We work with FSC-certified kraft, recycled board, water-based inks, vegetable adhesives, and biodegradable laminates. Sustainable options are available across every packaging format.',
      },
      {
        q: 'Can you design the packaging structure for me?',
        a: 'Yes. Share your product dimensions and our packaging engineers will design a custom die-line, recommend the right material, and provide a printable mock-up at no extra charge.',
      },
      {
        q: 'What finishes can I add to my packaging?',
        a: 'Foil stamping (gold, silver, holographic), embossing, debossing, spot UV, soft-touch lamination, gloss / matte lamination, metallic inks, and window patches.',
      },
      {
        q: 'How long does custom packaging take?',
        a: 'Standard turnaround is 7–15 working days from artwork approval. Tooling for new die-cut shapes adds 3–5 days; rush orders are possible in 4–6 days.',
      },
      {
        q: 'Do you print packaging for D2C and small brands?',
        a: 'Yes — we love working with D2C and emerging brands. Digital printing makes small batches (100–500 units) economical, so you can launch without committing to massive inventory.',
      },
    ],
    relatedSlugs: ['flex-printing', 'pvc-cards', 't-shirt-printing'],
  },

  {
    slug: 't-shirt-printing',
    iconName: 'Shirt',
    category: 'Apparel & Merchandise',
    hero: {
      eyebrow: 'T-Shirt Printing',
      h1Soft: 'Custom T-Shirt',
      h1Accent: 'Printing in India',
      tagline: 'Bulk, branded, ready to wear.',
      intro:
        'MultiOrigin offers custom t-shirt printing across India for corporate uniforms, marketing campaigns, sports teams, schools, colleges, conferences, and event merchandise. Choose from screen printing, DTF (Direct to Film), DTG (Direct to Garment), sublimation, vinyl heat-transfer, and embroidery on premium 100% cotton, polyester, dri-fit, and cotton-poly blends. Bulk orders from 25 pieces, photo-quality print, 100+ colour and size combinations, fast turnaround.',
    },
    meta: {
      title: 'Custom T-Shirt Printing in India — Bulk & Corporate Orders | MultiOrigin',
      description:
        'Premium custom t-shirt printing in India — screen, DTG, DTF, sublimation, vinyl & embroidery. Corporate uniforms, event merchandise, college fest tees, sports jerseys, marketing tees. 100% cotton, dri-fit, polyester. Bulk orders from 25 pieces. Fast nationwide delivery.',
      keywords: [
        't-shirt printing',
        'custom t-shirt printing India',
        'bulk t-shirt printing',
        'corporate t-shirt printing',
        'screen printing t-shirts',
        'DTG printing India',
        'DTF printing',
        'sublimation t-shirt',
        'embroidered t-shirts',
        'event t-shirts',
        'college fest t-shirts',
        'sports jersey printing',
        'company logo t-shirts',
        'marketing t-shirts',
        'polo t-shirt printing',
        't-shirt manufacturer India',
      ],
    },
    highlights: [
      'Screen, DTG, DTF, sublimation, vinyl, embroidery',
      '100% cotton, dri-fit, polyester, blends',
      'Bulk orders from 25 pieces',
      'Photo-quality multi-colour print',
      'Round neck, polo, V-neck, hoodies, tank tops',
      'Sizes XS to 5XL, men/women/kids',
      'Free design service',
      'Pan-India delivery',
    ],
    features: [
      {
        title: 'Screen printing — bulk economy',
        desc: 'Best per-unit price for 100+ shirts with 1–4 spot-colour designs. Vibrant, durable, washes well for years.',
      },
      {
        title: 'DTG (Direct to Garment)',
        desc: 'Photo-quality, full-colour, soft-feel print directly on cotton — no minimums, perfect for one-off and small runs.',
      },
      {
        title: 'DTF (Direct to Film)',
        desc: 'High-detail full-colour transfer that bonds to cotton, polyester, blends — even dark fabrics. Stretch and wash resistant.',
      },
      {
        title: 'Sublimation printing',
        desc: 'All-over photo print on polyester sportswear and dri-fit jerseys — print becomes part of the fabric, never peels or cracks.',
      },
      {
        title: 'Embroidery',
        desc: 'Premium thread-stitched logos for polos, corporate uniforms, hoodies, and caps — the most premium decoration finish.',
      },
      {
        title: 'Vinyl heat-transfer',
        desc: 'Numbers, names, and logos for sports jerseys with peel-and-press vinyl — perfect for varied team rosters.',
      },
    ],
    useCases: [
      {
        title: 'Corporate Uniforms',
        desc: 'Branded polo shirts, work shirts, and embroidered uniforms for office staff, field teams, and customer-facing employees.',
      },
      {
        title: 'College Fests & University Events',
        desc: 'Bulk-printed event tees, fest merchandise, organising committee shirts, and student council uniforms.',
      },
      {
        title: 'Sports Teams & Tournaments',
        desc: 'Custom jerseys with player names and numbers, sublimated team kits, and tournament organiser shirts.',
      },
      {
        title: 'Marketing & Promotional',
        desc: 'Brand merchandise giveaways, product launch tees, conference swag, and influencer gifting kits.',
      },
      {
        title: 'School & Institution Wear',
        desc: 'School house tees, sports day shirts, school fest merchandise, and faculty event shirts.',
      },
      {
        title: 'D2C Merchandise',
        desc: 'On-demand and small-batch tees for creator merchandise, indie clothing brands, and limited edition drops.',
      },
    ],
    materials: [
      '100% combed cotton (180 GSM)',
      'Premium 200 GSM cotton',
      'Bio-washed cotton',
      '100% polyester (sportswear)',
      'Dri-fit polyester (180 GSM)',
      'Cotton-polyester blend (60/40, 50/50)',
      'Organic cotton',
      'Pique knit (polo)',
    ],
    specifications: [
      { label: 'Print Methods', value: 'Screen printing, DTG, DTF, sublimation, vinyl heat-transfer, embroidery, plastisol' },
      { label: 'Garment Types', value: 'Round neck, polo, V-neck, henley, full-sleeve, hoodie, sweatshirt, tank top, jersey, kids tee' },
      { label: 'Fabrics', value: '100% cotton (160–220 GSM), polyester, dri-fit, cotton-poly blend, organic cotton, pique' },
      { label: 'Sizes', value: 'XS to 5XL — men, women, unisex, kids' },
      { label: 'Print Area', value: 'Front, back, sleeves, all-over (sublimation)' },
      { label: 'Colours', value: 'Unlimited fabric colours; full-colour or spot-colour print' },
      { label: 'Wash Resistance', value: '40+ wash cycles tested; vibrant after years of use' },
      { label: 'Minimum Order', value: '25 pieces (screen / DTF); 1 piece (DTG)' },
      { label: 'Turnaround', value: '5–10 working days; rush orders 48–72 hours' },
    ],
    whyChooseUs: [
      {
        title: 'Mock-up before production',
        desc: 'See exactly how your tee will look — front, back, sleeves — before we print a single piece.',
      },
      {
        title: 'Sample shirt option',
        desc: 'Order one printed sample to verify quality before committing to your bulk order.',
      },
      {
        title: 'Premium fabrics only',
        desc: 'No bargain fabrics — we use 180 GSM+ combed cotton and certified polyester for shape, comfort, and longevity.',
      },
      {
        title: 'Mix sizes & designs',
        desc: 'Combine multiple sizes, colours, and designs in a single bulk order — no extra charges.',
      },
    ],
    industries: [
      'Corporate',
      'Education',
      'Sports',
      'Events & Fests',
      'Marketing Agencies',
      'D2C Brands',
      'Hospitality',
      'NGOs & Causes',
      'Election Campaigns',
      'Healthcare',
    ],
    faqs: [
      {
        q: 'What is the minimum order for custom t-shirt printing?',
        a: 'Screen printing and DTF orders start from 25 pieces. DTG (Direct to Garment) accepts orders from just 1 piece — perfect for samples or small-batch creators.',
      },
      {
        q: 'Which printing method is best for my t-shirt order?',
        a: 'For 100+ tees with simple 1–4 colour designs, screen printing offers the best price and durability. For full-colour, photo-quality designs, choose DTG or DTF. For all-over print on sportswear, sublimation is ideal.',
      },
      {
        q: 'Will the print fade or crack after washing?',
        a: 'Our prints are tested for 40+ wash cycles. Screen printing, sublimation, and DTF prints retain colour vibrancy for years. We recommend cold wash inside-out for maximum lifespan.',
      },
      {
        q: 'Can I mix sizes, colours, and designs in one order?',
        a: 'Yes — mix XS to 5XL, multiple fabric colours, and even multiple designs in a single bulk order with no extra charges (subject to minimums per design).',
      },
      {
        q: 'Do you offer dri-fit sportswear and jerseys?',
        a: 'Yes — premium 180 GSM polyester dri-fit jerseys and sportswear with sublimation printing for sports teams, marathons, and corporate sports days.',
      },
      {
        q: 'How long does custom t-shirt printing take?',
        a: 'Standard turnaround is 5–10 working days. Rush orders for urgent events can be delivered in 48–72 hours for an additional charge.',
      },
      {
        q: 'Can you embroider company logos on polo t-shirts?',
        a: 'Yes — premium thread-stitched embroidery on polo shirts, jackets, hoodies, and caps. We offer up to 12-thread colour embroidery for crisp, professional logos.',
      },
    ],
    relatedSlugs: ['flex-printing', 'lanyards', 'packaging'],
  },

  {
    slug: 'flex-printing',
    iconName: 'Megaphone',
    category: 'Large Format Printing',
    hero: {
      eyebrow: 'Flex Banner Printing',
      h1Soft: 'Flex Banner & Large',
      h1Accent: 'Format Printing in India',
      tagline: 'Big visuals. Bold impact. Rain or shine.',
      intro:
        'MultiOrigin produces high-resolution flex banner printing, hoardings, billboards, exhibition backdrops, shop signage, building wraps, vinyl posters, vehicle branding, and event flex prints across India. Indoor and outdoor flex with frontlit and backlit options, mesh flex for wind areas, star flex for premium quality, and vinyl for short-term campaigns. UV-resistant inks, weatherproof, scratch-resistant, sizes from 2 sq ft to 10,000+ sq ft, with eyelets, rope channels, and mounting hardware included.',
    },
    meta: {
      title: 'Flex Banner & Hoarding Printing in India — Outdoor & Indoor | MultiOrigin',
      description:
        'High-resolution flex banner printing across India — hoardings, billboards, backdrops, vinyl posters, vehicle branding, building wraps. Frontlit, backlit, mesh, star flex, vinyl. Weatherproof UV inks, sizes from 2 sq ft to 10,000+ sq ft. Fast delivery & installation.',
      keywords: [
        'flex printing',
        'flex banner printing India',
        'hoarding printing',
        'billboard printing',
        'flex banner',
        'outdoor banner printing',
        'frontlit flex',
        'backlit flex',
        'mesh flex',
        'star flex',
        'vinyl printing India',
        'large format printing',
        'building wrap printing',
        'vehicle branding printing',
        'exhibition backdrop',
        'shop signage printing',
        'flex banner Delhi',
      ],
    },
    highlights: [
      'Frontlit, backlit, star, mesh & vinyl flex',
      'Up to 1440 DPI photo-quality print',
      'UV inks — sun, rain & weather resistant',
      'Sizes from 2 sq ft to 10,000+ sq ft',
      'Eyelets, rope channels, pole pockets included',
      'Indoor & outdoor applications',
      'Pan-India installation support',
      'Same-day & 24-hour rush options',
    ],
    features: [
      {
        title: 'Frontlit flex',
        desc: 'Premium 320–510 GSM flex with vivid colour reproduction for hoardings, building facades, signage, and outdoor advertising lit from the front.',
      },
      {
        title: 'Backlit flex',
        desc: 'Translucent backlit flex for light boxes, retail signage, and night-illuminated advertising — colours glow vividly from behind.',
      },
      {
        title: 'Star flex (premium)',
        desc: 'High-end star flex with superior colour gamut and finer ink absorption — for brand-critical hoardings and billboard campaigns.',
      },
      {
        title: 'Mesh flex',
        desc: 'Wind-permeable mesh flex for tall hoardings, building wraps, and stadium banners — survives high-wind locations.',
      },
      {
        title: 'Vinyl & one-way vision',
        desc: 'Self-adhesive vinyl for shop windows, glass doors, vehicle bodies, and one-way vision film for window graphics.',
      },
      {
        title: 'Custom finishing',
        desc: 'Eyelets at every 2 ft, rope channels, pole pockets, hemming, and pre-drilled mounting holes — choose what fits your installation.',
      },
    ],
    useCases: [
      {
        title: 'Outdoor Hoardings & Billboards',
        desc: 'High-impact roadside hoardings, highway billboards, and building-mounted advertising at any size.',
      },
      {
        title: 'Shop & Retail Signage',
        desc: 'Storefront banners, sale signs, festival decoration, and seasonal promotion flex for retail outlets.',
      },
      {
        title: 'Event Backdrops & Stages',
        desc: 'Wedding stage backdrops, conference branding, exhibition booth panels, and event entry arches.',
      },
      {
        title: 'Building Wraps & Facades',
        desc: 'Massive multi-storey building wraps and construction-site safety banners with wind-permeable mesh.',
      },
      {
        title: 'Vehicle & Auto Branding',
        desc: 'Vinyl wraps for cars, vans, trucks, autos, and food trucks — partial wraps, full wraps, and one-way window graphics.',
      },
      {
        title: 'Election & Campaign Banners',
        desc: 'Bulk political campaign flex, rally backdrops, candidate cutouts, and street pole banners with rapid turnaround.',
      },
    ],
    materials: [
      'Frontlit flex (320, 410, 510 GSM)',
      'Backlit flex (440 GSM)',
      'Star flex (premium 510 GSM)',
      'Mesh flex (wind-permeable)',
      'Self-adhesive vinyl (gloss / matte)',
      'One-way vision film',
      'Cast vinyl (vehicle wrap)',
      'Canvas (premium indoor)',
    ],
    specifications: [
      { label: 'Flex Types', value: 'Frontlit, backlit, star flex, mesh flex, blockout, vinyl, one-way vision, canvas' },
      { label: 'GSM Range', value: '320 GSM – 510 GSM (flex); 80–150 micron vinyl' },
      { label: 'Print Resolution', value: 'Up to 1440 DPI photo-quality CMYK' },
      { label: 'Inks', value: 'Solvent / eco-solvent / UV — weather, water, sun & scratch resistant' },
      { label: 'Sizes', value: '2 sq ft to 10,000+ sq ft single piece (seamless joins available)' },
      { label: 'Finishing', value: 'Eyelets, rope channels, pole pockets, hemming, lamination' },
      { label: 'Mounting', value: 'Frame mounting, wall mounting, hoarding installation supported' },
      { label: 'Lifetime', value: '6 months – 5 years depending on flex grade and exposure' },
      { label: 'Minimum Order', value: 'No minimum — single banners welcomed' },
      { label: 'Turnaround', value: '24 hours – 3 days for standard sizes; 4–7 days for hoardings' },
    ],
    whyChooseUs: [
      {
        title: 'Same-day rush printing',
        desc: 'Standard sizes printed and dispatched within 24 hours for urgent events and last-minute campaigns.',
      },
      {
        title: 'Photo-quality at any size',
        desc: '1440 DPI printing means even building-sized hoardings stay crisp from a distance.',
      },
      {
        title: 'Pan-India installation',
        desc: 'We handle hoarding installation, scaffolding coordination, and permits in major cities.',
      },
      {
        title: 'Reusable mounting hardware',
        desc: 'Frames, eyelets, and rope channels engineered to be reused across multiple campaigns.',
      },
    ],
    industries: [
      'Retail',
      'Real Estate',
      'Hospitality',
      'Events & Weddings',
      'Politics & Campaigns',
      'FMCG Brands',
      'Cinema & Entertainment',
      'Education',
      'Automotive',
      'Construction',
    ],
    faqs: [
      {
        q: 'What is the difference between frontlit, backlit, and star flex?',
        a: 'Frontlit flex (320–510 GSM) is for advertising lit from the front. Backlit flex is translucent — used in light boxes lit from behind. Star flex is premium-grade with the best colour gamut for brand-critical campaigns.',
      },
      {
        q: 'How long does flex banner printing last outdoors?',
        a: 'Standard 510 GSM frontlit flex lasts 1–2 years outdoors. Star flex with UV inks can last 3–5 years. Vinyl wraps for vehicles last 5–7 years with proper care.',
      },
      {
        q: 'Can you print very large hoardings as a single piece?',
        a: 'We can print up to roughly 10 ft wide as a single piece. Larger hoardings (20 ft, 40 ft, 100 ft+) are produced as panels with seamless joins or hot-air welded together.',
      },
      {
        q: 'Is mesh flex really wind-permeable?',
        a: 'Yes — mesh flex has tiny perforations that let wind pass through, dramatically reducing wind-load on tall hoardings and building wraps. Essential for installations above 30 feet.',
      },
      {
        q: 'Do you provide installation services?',
        a: 'Yes — we coordinate hoarding installation, frame fabrication, scaffolding, and even municipal permission across major Indian cities. Just share the location.',
      },
      {
        q: 'What is the minimum order for flex banner printing?',
        a: 'No minimum — we happily print single banners as small as 2 sq ft and as large as required. Per-square-foot pricing is transparent and quantity discounts apply.',
      },
      {
        q: 'How fast can I get a flex banner printed?',
        a: 'Standard sizes are printed and dispatched within 24 hours. Premium hoardings with finishing typically take 3–5 days. Rush orders can be delivered same-day in metro cities.',
      },
    ],
    relatedSlugs: ['packaging', 't-shirt-printing', 'lanyards'],
  },
];

export function getServiceBySlug(slug: string): PrintService | undefined {
  return PRINT_SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): PrintService[] {
  return slugs
    .map((s) => PRINT_SERVICES.find((p) => p.slug === s))
    .filter((s): s is PrintService => Boolean(s));
}
