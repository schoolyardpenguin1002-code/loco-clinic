import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import SonnerToaster from "./components/SonnerToaster";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

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
  title: "LOCO CLINIC - 美容クリニック｜高崎",
  description:
    "LOCO CLINIC（ロコクリニック）は群馬県高崎市の美容クリニックです。アートメイク、糸リフト、注入治療など、本物志向の医療美容をご提供します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${montserrat.variable} ${notoSansJP.variable} ${shipporiMincho.variable} antialiased min-h-screen w-full`}
      >
        <div className="relative w-full min-h-screen flex flex-col items-stretch">
          {children}
          <SonnerToaster />
          <Analytics />
        </div>
      </body>
    </html>
  );
}