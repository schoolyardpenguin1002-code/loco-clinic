import type { Metadata } from "next";
import { Cormorant, Montserrat, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import SonnerToaster from "./components/SonnerToaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lococlinic.com"),
  verification: { google: "eOEgDX0JhKWtP8BVyrdl0XK0B12axLytA-iFLZl23u8" },
  title: {
    default: "LOCO CLINIC（ロコクリニック）｜高崎の美容クリニック・糸リフト専門",
    template: "%s｜LOCO CLINIC 高崎・糸リフト専門",
  },
  description:
    "群馬県高崎市の美容クリニック。糸リフト専門のLOCO CLINIC（ロコクリニック）。高崎問屋町駅から徒歩8分・完全予約制・夜21時まで。ボトックス・ヒアルロン酸・肌育注射・アートメイクにも対応。",
  openGraph: {
    title: "LOCO CLINIC（ロコクリニック）｜高崎の美容クリニック・糸リフト専門",
    description:
      "高崎問屋町駅徒歩8分。糸リフト専門の美容クリニック。完全予約制・夜21時まで。",
    url: "https://www.lococlinic.com",
    siteName: "LOCO CLINIC",
    locale: "ja_JP",
    type: "website",
  },
};

/* Google検索・マップ向けの構造化データ */
const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "LOCO CLINIC（ロコクリニック）",
  description:
    "群馬県高崎市の糸リフト専門美容クリニック。高崎問屋町駅から徒歩8分・完全予約制。",
  url: "https://www.lococlinic.com",
  telephone: "+81-27-395-0443",
  address: {
    "@type": "PostalAddress",
    postalCode: "370-0005",
    addressRegion: "群馬県",
    addressLocality: "高崎市",
    streetAddress: "浜尻町209-5",
    addressCountry: "JP",
  },
  openingHours: "Mo-Su 09:00-21:00",
  medicalSpecialty: "PlasticSurgery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
      </head>
      <body
        className={`${cormorant.variable} ${montserrat.variable} ${notoSansJP.variable} ${shipporiMincho.variable} antialiased min-h-screen w-full`}
      >
        <div className="relative w-full min-h-screen flex flex-col items-stretch">
          {children}
          <SonnerToaster />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}