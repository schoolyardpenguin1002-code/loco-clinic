import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/site/SiteHeader";
import SiteFooter from "../../components/site/SiteFooter";
import FixedCta from "../../components/site/FixedCta";
import { COLUMNS, getColumn } from "@/lib/columns";

export function generateStaticParams() {
  return COLUMNS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const col = getColumn(slug);
  if (!col) return {};
  return { title: col.title, description: col.excerpt };
}

export default async function ColumnArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const col = getColumn(slug);
  if (!col) notFound();

  const others = COLUMNS.filter((c) => c.slug !== col.slug).slice(0, 3);

  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <article className="px-6" style={{ paddingTop: "150px", paddingBottom: "110px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <p className="text-[12.5px] tracking-[0.35em] text-[#b9a05a]">COLUMN</p>
            <h1
              className="mt-4 font-light leading-[1.8] tracking-[0.06em]"
              style={{ fontFamily: "var(--font-shippori-mincho), serif", fontSize: "clamp(22px, 3.2vw, 32px)" }}
            >
              {col.title}
            </h1>
            <div className="mt-4 flex items-center gap-4 border-b border-[#e9e6e6] pb-6">
              <time className="font-heading text-[13px] tracking-wider text-[#9a8f7d]">{col.date}</time>
              <span className="text-[13px] text-[#9a8f7d]">LOCO CLINIC 院長 狩野遊太</span>
            </div>

            <div className="mt-10 space-y-8 text-[15.5px] font-light leading-[2.2]">
              {col.lead.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}

              {col.sections.map((sec) => (
                <div key={sec.h ?? sec.ps[0].slice(0, 24)} className="space-y-6">
                  {sec.h && (
                    <h2
                      className="border-l-2 border-[#d2b388] pl-4 text-lg"
                      style={{ fontFamily: "var(--font-shippori-mincho), serif", marginTop: "48px" }}
                    >
                      {sec.h}
                    </h2>
                  )}
                  {sec.ps.map((p) => (
                    <p key={p.slice(0, 24)}>{p}</p>
                  ))}
                </div>
              ))}

              {col.note && (
                <p className="border-t border-[#e9e6e6] pt-8 text-[13.5px] leading-[2] text-[#9a8f7d]">{col.note}</p>
              )}
            </div>

            <div className="mt-14 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/thread-lift"
                className="flex-1 bg-[#6f4e2f] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#b98a55]"
              >
                糸リフトについて
              </Link>
              <Link
                href="/column"
                className="flex-1 border border-[#6f4e2f] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-[#6f4e2f] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
              >
                コラム一覧へ
              </Link>
            </div>

            {others.length > 0 && (
              <div className="mt-20 border-t border-[#e9e6e6] pt-10">
                <p className="mb-6 text-[12.5px] tracking-[0.3em] text-[#b9a05a]">OTHER COLUMNS</p>
                <ul className="space-y-4">
                  {others.map((o) => (
                    <li key={o.slug}>
                      <Link
                        href={`/column/${o.slug}`}
                        className="block text-[15px] font-light leading-[1.9] underline decoration-[#e9dcc8] underline-offset-4 transition-colors hover:text-[#b9a05a]"
                      >
                        {o.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
