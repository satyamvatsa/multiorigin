import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const siteUrl = "https://multiorigin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MultiOrigin — Building Brands That Matter",
    template: "%s | MultiOrigin",
  },
  description:
    "MultiOrigin is India's creative brand studio offering print, digital marketing, print design, and website & app UI/UX design and development. Parent company of Anginat, AnginatLearning, and AnginatEvents.",
  keywords: [
    "MultiOrigin",
    "creative agency India",
    "brand studio",
    "digital marketing agency",
    "print design",
    "UI UX design development",
    "website development India",
    "app development",
    "Anginat",
    "AnginatLearning",
    "AnginatEvents",
    "print services India",
    "branding agency",
  ],
  authors: [{ name: "MultiOrigin", url: siteUrl }],
  creator: "MultiOrigin",
  publisher: "MultiOrigin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "MultiOrigin",
    title: "MultiOrigin — Building Brands That Matter",
    description:
      "India's creative brand studio offering print, digital marketing, design, and development. Parent company of Anginat, AnginatLearning & AnginatEvents.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MultiOrigin — Building Brands That Matter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MultiOrigin — Building Brands That Matter",
    description:
      "India's creative brand studio — print, digital marketing, design & development.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Creative Agency",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MultiOrigin",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "MultiOrigin is a creative brand studio and technology company — parent of Anginat (AI Voice Services), AnginatLearning (AI-powered LMS, 500+ institutions, 100K+ learners), and AnginatEvents (AI event management, 50K+ events, 10M+ attendees). We also offer print, digital marketing, print design, and website & app UI/UX design and development services.",
  email: "contact@multiorigin.com",
  telephone: "+919650582767",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  sameAs: [
    "https://anginat.com",
    "https://anginatlearning.com",
    "https://anginatevents.com",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Creative Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Print Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Print Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website & App UI/UX Design and Development" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2222283223915134"
          crossOrigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7V8LVTQKVZ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-7V8LVTQKVZ');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#050505] text-white antialiased relative">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.08),transparent_55%)]" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
