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
    default:
      "ロコクリニック｜高崎市の発達障害・不登校のこどもと家族の相談外来",
    template: "%s｜ロコクリニック（高崎市）",
  },
  description:
    "群馬県高崎市のロコクリニック。発達障害（自閉スペクトラム症・ADHD・学習障害・グレーゾーン）や不登校のお子さんとご家族の相談外来、おとなの心療内科・精神科。親御さんだけの相談から始められます。保険診療・完全予約制。",
  keywords: [
    "高崎市",
    "群馬県",
    "児童精神科",
    "発達障害",
    "自閉スペクトラム症",
    "ASD",
    "ADHD",
    "学習障害",
    "LD",
    "グレーゾーン",
    "不登校",
    "起立性調節障害",
    "心療内科",
    "精神科",
    "子ども",
    "思春期",
  ],
  openGraph: {
    title: "ロコクリニック｜高崎市の発達障害・不登校のこどもと家族の相談外来",
    description:
      "こどもを病院に連れて行けない。そこから、始められます。親御さんだけの相談から始められる外来です。保険診療・完全予約制。",
    url: "https://www.lococlinic.com",
    siteName: "ロコクリニック",
    locale: "ja_JP",
    type: "website",
  },
};

/* Google検索・マップ向けの構造化データ */
const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "ロコクリニック",
  description:
    "群馬県高崎市のクリニック。発達障害・不登校のこどもと家族の相談外来、おとなの心療内科・精神科。保険診療・完全予約制。",
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
  medicalSpecialty: "Psychiatry",
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