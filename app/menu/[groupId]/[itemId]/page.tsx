import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import { getMenuItemBySlug } from "@/lib/treatment-menu";

type Props = {
  params: Promise<{ groupId: string; itemId: string }>;
};

export default async function MenuTreatmentDetailPage({ params }: Props) {
  const { groupId, itemId } = await params;
  const meta = getMenuItemBySlug(groupId, itemId);
  if (!meta) notFound();

  return (
    <div className="marketing-layout min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#fdfbf8]">
      <Header />
      <main className="section-bleed px-5 pb-24 pt-32 sm:px-8 md:pt-40 lg:px-12">
        <div className="section-inner mx-auto max-w-2xl text-center">
          <p className="font-heading mb-4 text-[10px] tracking-[0.35em] text-[#d4af37] md:text-xs">
            MENU / {meta.groupLabel}
          </p>
          <h1
            className="mb-6 font-japanese text-2xl font-light tracking-wide text-[#1a1a1a] md:text-3xl"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            {meta.itemLabel}
          </h1>
          <div className="rounded-sm border border-dashed border-[#d4af37]/40 bg-white/80 px-8 py-12">
            <p className="font-heading text-sm tracking-[0.25em] text-[#d4af37]">COMING SOON</p>
            <p className="mt-4 text-sm font-light leading-relaxed text-gray-600 md:text-base">
              詳細ページは準備中です。
              <br />
              公開まで今しばらくお待ちください。
            </p>
          </div>
          <Link
            href="/menu"
            className="mt-10 inline-block font-heading text-xs tracking-widest text-[#1a1a1a] underline decoration-[#d4af37]/50 underline-offset-4 transition-colors hover:text-[#d4af37]"
          >
            施術メニュー一覧へ戻る
          </Link>
        </div>
      </main>
    </div>
  );
}
