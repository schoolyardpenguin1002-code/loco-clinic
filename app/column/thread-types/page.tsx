import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site/SiteHeader";
import SiteFooter from "../../components/site/SiteFooter";
import FixedCta from "../../components/site/FixedCta";

export const metadata: Metadata = {
  title: "糸リフトの糸は4種類。値段の差は「質」ではなく「素材」の差です",
  description:
    "PDO・PLLA・PCLの違い、持続期間、選び方。糸リフト専門のLOCO CLINIC（高崎）院長が解説します。",
};

export default function ThreadTypesColumn() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <article className="px-6" style={{ paddingTop: "150px", paddingBottom: "110px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <p className="text-[12.5px] tracking-[0.35em] text-[#b9a05a]">COLUMN</p>
            <h1
              className="mt-4 text-[clamp(22px,3.2vw,32px)] font-light leading-[1.8] tracking-[0.06em]"
              style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
            >
              糸リフトの糸は4種類。
              <br />
              値段の差は「質」ではなく「素材」の差です
            </h1>
            <div className="mt-4 flex items-center gap-4 border-b border-[#e9e6e6] pb-6">
              <time className="font-heading text-[13px] tracking-wider text-[#9a8f7d]">2026.08.16</time>
              <span className="text-[13px] text-[#9a8f7d]">LOCO CLINIC 院長 狩野遊太</span>
            </div>

            <div className="mt-10 space-y-8 text-[15.5px] font-light leading-[2.2]">
              <p>
                糸リフトのカウンセリングでよく聞かれるのが、「高い糸のほうが、いい糸なんですよね？」という質問です。
                答えはシンプルで、違います。値段の差は品質の差ではなく、素材の差です。
              </p>

              <h2 className="border-l-2 border-[#d2b388] pl-4 text-lg" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                素材が違うと、体の中での持ちが違う
              </h2>
              <p>
                当院で扱う糸は、大きく分けてPDO・PLLA・PCLという3つの吸収性素材でできています。
                どれも体の中で時間をかけて溶けてなくなる糸ですが、溶けるまでの期間が違います。
                PDOはおよそ半年から1年、PLLAは1年から2年、PCLは2年から3年。
                これがそのまま「リフトの持続期間」の目安になります。
              </p>
              <p>
                つまり、半年ごとにこまめに整えたい方にはPDOで十分ですし、
                一度でしっかり長く持たせたい方にはPCLが向いています。
                どちらが上等という話ではなく、生活と希望に合うかどうかの話です。
              </p>

              <h2 className="border-l-2 border-[#d2b388] pl-4 text-lg" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                糸は「引き上げ」と「肌育て」の両方をする
              </h2>
              <p>
                糸には「コグ」と呼ばれる小さな突起がついていて、これがたるんだ組織を物理的に引き上げます。
                同時に、糸の周囲ではコラーゲンの生成が促されるため、
                引き上がるだけでなく、ハリや肌質の変化も期待できます。
                糸が溶けたあとも、育ったコラーゲンはしばらく残ります。
              </p>

              <h2 className="border-l-2 border-[#d2b388] pl-4 text-lg" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                本数を増やせばいい、というものでもない
              </h2>
              <p>
                本数は多いほど効果的に見えますが、お顔の状態によって適正な本数があります。
                当院では、今のお顔を拝見して、必要な分だけをご提案します。
                「どれくらい持たせたいか」を教えていただければ、そこから一緒に選んでいけます。
              </p>

              <p className="border-t border-[#e9e6e6] pt-8 text-[13.5px] leading-[2]">
                ※糸リフトは自由診療（保険適用外）です。腫れ・内出血・引きつれ感などのダウンタイムがあります。
                効果の程度・持続には個人差があります。詳しくは
                <Link href="/thread-lift" className="underline decoration-[#d2b388] underline-offset-4 hover:text-[#b9a05a]">
                  糸リフトのご案内
                </Link>
                をご覧ください。
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/thread-lift"
                className="flex-1 bg-[#2d4c44] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#8a9e8f]"
              >
                糸リフトについて
              </Link>
              <Link
                href="/column"
                className="flex-1 border border-[#2d4c44] px-10 py-5 text-center text-[15.5px] tracking-[0.2em] text-[#2d4c44] transition-all duration-500 hover:bg-[#2d4c44] hover:text-white"
              >
                コラム一覧へ
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
