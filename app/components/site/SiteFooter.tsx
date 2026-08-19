import Link from "next/link";
import { LINE_ADD_FRIEND_URL } from "@/lib/line";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden text-white">
      {/* 背景：木漏れ日の森＋深緑オーバーレイ（視認性確保） */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/footer-forest.jpg')" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#33261b]/82" aria-hidden />
      <div className="relative">
      {/* 予約CTA帯 */}
      <div className="border-b border-white/10 px-6 pt-28 pb-24 text-center">
        <p
          className="mb-3 text-2xl md:text-3xl font-light tracking-[0.14em]"
          style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
        >
          カウンセリングのご予約
        </p>
        <p className="mx-auto mb-8 max-w-xl text-base font-light leading-relaxed text-white/60">
          無理におすすめすることはありません。まずはお悩みをお聞かせください。
        </p>
        <div className="mx-auto flex max-w-md flex-col items-stretch justify-center gap-3 sm:flex-row">
          <a
            href={LINE_ADD_FRIEND_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-[#3e7a52] px-8 py-4 text-base font-bold text-white transition hover:bg-[#05b34c]"
          >
            LINEで予約・相談
          </a>
          <Link
            href="/contact"
            className="flex-1 rounded-full border border-white/40 px-8 py-4 text-base tracking-widest text-white transition hover:border-[#b9a05a] hover:text-[#d5c08a]"
          >
            フォームから予約
          </Link>
        </div>
        <a href="tel:027-395-0443" className="mt-6 inline-block font-heading text-xl tracking-wider text-white/80 hover:text-white">
          TEL. 027-395-0443
        </a>
        <div className="mt-5 flex items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/loco_clinic_________/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 text-[14px] text-white/70 transition hover:text-[#d5c08a]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5.5" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17.2" cy="6.8" r="1.3" fill="currentColor" />
            </svg>
            Instagram
          </a>
        </div>
        <p className="mt-1 text-xs text-white/40">受付 9:00〜21:00（完全予約制・不定休）</p>
      </div>

      {/* リンク */}
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-10 px-8 py-20 sm:grid-cols-4">
        <div className="col-span-2 sm:col-span-1">
          <p className="text-lg tracking-[0.18em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
            LOCO CLINIC
          </p>
          <p className="mt-3 text-xs font-light leading-relaxed text-white/50">
            〒370-0005
            <br />
            群馬県高崎市浜尻町209-5
            <br />
            9:00〜21:00／完全予約制・不定休
          </p>
        </div>
        <div>
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/40">MENU</p>
          <ul className="space-y-2.5 text-[15px] font-light">
            <li><Link href="/thread-lift" className="hover:text-[#d5c08a]">糸リフト</Link></li>
            <li><Link href="/menu" className="hover:text-[#d5c08a]">施術をさがす</Link></li>
            <li><Link href="/concerns" className="hover:text-[#d5c08a]">お悩みからさがす</Link></li>
            <li><Link href="/price" className="hover:text-[#d5c08a]">料金表</Link></li>
            <li><Link href="/artmake" className="hover:text-[#d5c08a]">アートメイク</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/40">GUIDE</p>
          <ul className="space-y-2.5 text-[15px] font-light">
            <li><Link href="/guide" className="hover:text-[#d5c08a]">はじめての方へ</Link></li>
            <li><Link href="/doctor" className="hover:text-[#d5c08a]">ドクター</Link></li>
            <li><Link href="/case" className="hover:text-[#d5c08a]">症例</Link></li>
            <li><Link href="/about" className="hover:text-[#d5c08a]">クリニックについて</Link></li>
            <li><Link href="/campaign" className="hover:text-[#d5c08a]">今月のご案内</Link></li>
            <li><Link href="/column" className="hover:text-[#d5c08a]">コラム</Link></li>
            <li><Link href="/news" className="hover:text-[#d5c08a]">お知らせ</Link></li>
            <li><Link href="/faq" className="hover:text-[#d5c08a]">よくある質問</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[10px] tracking-[0.25em] text-white/40">POLICY</p>
          <ul className="space-y-2.5 text-[15px] font-light">
            <li><Link href="/contact" className="hover:text-[#d5c08a]">ご予約・お問い合わせ</Link></li>
            <li><Link href="/cancel-policy" className="hover:text-[#d5c08a]">キャンセルポリシー</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-[#d5c08a]">プライバシーポリシー</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 pt-10 pb-28 text-center lg:pb-10 text-[12.5px] tracking-wider text-white/35">
        &copy; 2026 LOCO CLINIC. All Rights Reserved.
      </div>
    </div>
    </footer>
  );
}
