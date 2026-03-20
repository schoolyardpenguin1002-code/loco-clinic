"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "トップ", href: "/" },
    { name: "施術メニュー", href: "/menu" },
    { name: "アートメイク", href: "/artmake", featured: true },
    { name: "最新情報", href: "/#news" },
    { name: "よくある質問", href: "/faq" },
    { name: "アクセス", href: "/#access" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-[#d4af37]/10"
          : "bg-white/80 backdrop-blur-md border-b border-[#d4af37]/10"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        {/* ロゴ */}
        <Link
          href="/"
          className="text-2xl lg:text-3xl font-bold font-heading text-[#d4af37] tracking-luxury hover:-translate-y-0.5 transition-all duration-300 hover:drop-shadow-md"
        >
          LOCO CLINIC
        </Link>

        {/* デスクトップメニュー */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative text-xs font-heading font-medium tracking-widest uppercase
                transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-sm
                ${
                  item.featured
                    ? "text-[#d4af37] font-semibold hover:text-[#c19b2f]"
                    : pathname === item.href
                    ? "text-[#d4af37]"
                    : "text-gray-700 hover:text-[#d4af37]"
                }
                ${
                  pathname === item.href
                    ? "after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-[2px] after:bg-[#d4af37] after:rounded-full"
                    : ""
                }
              `}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#d4af37] text-white rounded-full text-xs font-heading font-semibold tracking-widest uppercase hover:bg-[#c19b2f] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            ご予約・お問い合わせ
          </Link>
        </div>

        {/* モバイルハンバーガーメニュー */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity duration-300"
          aria-label="メニュー"
        >
          <span
            className={`w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-[#d4af37] transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </nav>

      {/* モバイルメニュー */}
      <div
        className={`lg:hidden fixed inset-0 top-[73px] bg-white/95 backdrop-blur-lg transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`
                text-lg font-heading font-medium tracking-wide
                transition-all duration-300 hover:translate-x-2
                ${
                  item.featured
                    ? "text-[#d4af37] font-bold"
                    : pathname === item.href
                    ? "text-[#d4af37]"
                    : "text-gray-700"
                }
                animate-fadeIn
              `}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-4 bg-[#d4af37] text-white rounded-full text-sm font-heading font-semibold tracking-wide text-center hover:bg-[#c19b2f] transition-all duration-300 hover:shadow-lg animate-fadeIn"
            style={{ animationDelay: `${navItems.length * 50}ms` }}
          >
            ご予約・お問い合わせ
          </Link>
        </div>
      </div>
    </header>
  );
}
