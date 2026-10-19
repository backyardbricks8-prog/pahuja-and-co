import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingContactBar from "@/components/FloatingContactBar";
import { FIRM_DETAILS } from "@/data/firm";

export const viewport: Viewport = {
  themeColor: "#FAF8F5",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || "https://www.pahujaandco.com"),
  title: "Pahuja & Co. Chartered Accountants | New Delhi",
  description:
    "Premier Chartered Accountancy firm in Janakpuri, New Delhi. Practical accounting, taxation, audit, GST, payroll, and corporate advisory services.",
  keywords: [
    "Chartered Accountants New Delhi",
    "CA in Janakpuri",
    "Pahuja & Co.",
    "Tax Consultant West Delhi",
    "GST Registration and Returns Delhi",
    "Statutory Audit Firm Delhi",
    "Company Incorporation New Delhi",
    "Income Tax Filing New Delhi"
  ],
  authors: [{ name: "Pahuja & Co." }],
  creator: "Pahuja & Co. Chartered Accountants",
  publisher: "Pahuja & Co.",
  openGraph: {
    title: "Pahuja & Co. Chartered Accountants | New Delhi",
    description:
      "Practical accounting, taxation, audit, and corporate advisory services to help you stay compliant, make informed decisions, and focus on growing your business.",
    url: "https://www.pahujaandco.com/",
    siteName: "Pahuja & Co. Chartered Accountants",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pahuja & Co. Chartered Accountants | New Delhi",
    description:
      "Premier Chartered Accountancy firm in Janakpuri, New Delhi. Clarity in Compliance. Confidence in Every Decision.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.pahujaandco.com/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Rich Schema.org LocalBusiness / AccountingService JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "Pahuja & Co. Chartered Accountants",
    "alternateName": FIRM_DETAILS.hindiName,
    "url": FIRM_DETAILS.website,
    "logo": `${process.env.APP_URL || "https://www.pahujaandco.com"}/images/hero_ca_architecture.jpg`,
    "image": `${process.env.APP_URL || "https://www.pahujaandco.com"}/images/delhi_office_building.jpg`,
    "description": "Premier Chartered Accountancy firm located in Janakpuri, New Delhi providing accounting, audit, direct taxation, GST, and corporate governance services.",
    "telephone": FIRM_DETAILS.phones.officeDisplay,
    "email": FIRM_DETAILS.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": FIRM_DETAILS.address.line1,
      "addressLocality": FIRM_DETAILS.address.locality,
      "addressRegion": FIRM_DETAILS.address.state,
      "postalCode": FIRM_DETAILS.address.pincode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6219,
      "longitude": 77.0878
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.0",
      "bestRating": "5.0",
      "worstRating": "1.0",
      "ratingCount": "6"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Aditya Mohan"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "Very Reliable and Efficient CA services, 5 Stars all the way"
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-slate-900 antialiased flex flex-col pb-14 md:pb-0" suppressHydrationWarning>
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingContactBar />
      </body>
    </html>
  );
}
