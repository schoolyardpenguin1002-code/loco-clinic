import type { Metadata } from "next";
import Link from "next/link";
import BotanicalArt from "../../components/site/BotanicalArt";
import FixedCta from "../../components/site/FixedCta";
import GairaiHeader from "../../components/site/GairaiHeader";
import SlowReveal from "../../components/SlowReveal";
import { GAIRAI_LINE_ADD_FRIEND_URL } from "@/lib/line";

export const metadata: Metadata = {
  title: {
    absolute:
      "休職の診断書・復職の書類｜ロコクリニック こころとくらしの相談外来（高崎市・オンライン対応）",
  },
  description:
    "休職に必要な診断書、傷病手当金の意見書、復職の診断書。群馬県高崎市のロコクリニックは、初診からオンラインで受けられ、書類は最短当日にPDFでお渡しします（原本は郵送）。保険診療・完全予約制・初診30分。産業医経験のある医師が、職場が動ける書類を書きます。",
  openGraph: {
    title: "休職の診断書・復職の書類｜ロコクリニック（高崎市）",
    description:
      "休職の診断書、傷病手当金の書類、復職の意見書。オンラインで完結できます。保険診療・完全予約制。",
    url: "https://www.lococlinic.com/mental/documents",
    siteName: "ロコクリニック",
    locale: "ja_JP",
    type: "website",
  },
};

const SERIF = { fontFamily: "var(--font-shippori-mincho), serif" } as const;

function Heading({ en, children }: { en: string; children: React.ReactNode }) {
  return (
    <SlowReveal className="mb-20 text-center">
      <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">
        {en}
      </p>
      <h2 style={SERIF}>{children}</h2>
    </SlowReveal>
  );
}

function LineButton({ label = "LINEで予約・ご相談" }: { label?: string }) {
  return (
    <a
      href={GAIRAI_LINE_ADD_FRIEND_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-[#3e7a52] px-12 py-5 text-[15.5px] font-bold tracking-[0.1em] text-white transition hover:brightness-110"
    >
      {label}
    </a>
  );
}

const NAV = [
  { name: "書類と費用", href: "#documents" },
  { name: "お渡しまでの流れ", href: "#flow" },
  { name: "職場とのこと", href: "#workplace" },
  { name: "よくある質問", href: "#faq" },
];

/* 自費文書の料金（元データ：診断書などメニュー表・2026-10-02） */
const PAID_DOCS: [string, string, string][] = [
  [
    "診断書（休職・療養が必要の旨）",
    "3,300円（税込）",
    "会社の休職手続きに。最短当日〜2営業日でPDFをお渡しします",
  ],
  [
    "診断書（復職可能の旨）",
    "3,300円（税込）",
    "復職の手続き、産業医面談の材料に。就業上の配慮の内容まで書きます",
  ],
  [
    "自立支援医療（精神通院）用の診断書",
    "3,300円（税込）",
    "通院の自己負担が原則1割になる制度の申請にお使いいただけます",
  ],
  [
    "保険会社提出用の診断書・通院証明",
    "5,500円（税込）",
    "民間保険・共済の請求に。指定書式があればお送りください",
  ],
  [
    "通院証明書など、その他の証明書",
    "2,200円（税込）",
    "会社や学校へのシンプルな証明に",
  ],
];

const HOKEN_DOCS: [string, string, string][] = [
  [
    "傷病手当金の意見書",
    "3割負担で300円ほど",
    "休職中の生活費を支える書類です。毎月の再診とあわせて更新します",
  ],
  [
    "診療情報提供書（紹介状）",
    "3割負担で750円ほど",
    "より専門的な治療が必要なとき、適切な医療機関へおつなぎします",
  ],
];

export default function MentalDocumentsPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <GairaiHeader
        subtitle="こころとくらしの相談外来｜休職・復職の書類"
        nav={NAV}
        cross={{ name: "こころとくらしの相談外来", href: "/mental" }}
      />

      <main className="w-full">
        {/* 1. ヒーロー */}
        <section
          className="relative overflow-hidden bg-white px-6 text-center"
          style={{ paddingTop: "170px", paddingBottom: "110px" }}
        >
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-5 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">
            MEDICAL DOCUMENTS
          </p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light leading-[1.9] tracking-[0.14em]"
            style={SERIF}
          >
            <span className="inline-block">休職の診断書も、</span>
            <span className="inline-block">復職の書類も。</span>
            <br />
            <span className="inline-block">オンラインで、</span>
            <span className="inline-block">滞りなく。</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-[#70645c]">
            会社に出す診断書、傷病手当金の意見書、復職のための書類。
            <br />
            必要なものを、必要なときに。書類のために何度も
            通っていただくような運用はしません。
          </p>
          <p className="mt-8 text-[13.5px] tracking-[0.2em] text-[#8a7a55]">
            保険診療｜完全予約制｜初診30分｜オンライン診療対応
          </p>
          <div className="mt-12">
            <LineButton />
          </div>
        </section>

        {/* 2. こんなとき */}
        <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="SITUATIONS">こんなときに、ご相談ください</Heading>
            <ul className="space-y-4 border-y border-[#e8e2d8] py-10 text-[15.5px] font-light leading-[2] text-[#70645c]">
              {[
                "会社から「診断書を出してください」と言われた",
                "もう限界だと感じている。休みたいが、何から始めればいいかわからない",
                "休職中。傷病手当金の書類を毎月書いてもらえる先を探している",
                "復職したいが、職場との話がうまく進まない",
                "いま通っている病院では、書類の発行に時間がかかって困っている",
              ].map((c) => (
                <li key={c} className="flex items-start gap-4">
                  <span aria-hidden className="mt-1 text-[#b9a05a]">
                    ─
                  </span>
                  {c}
                </li>
              ))}
            </ul>
            <p className="mt-14 text-center font-light leading-loose">
              診断書は、診察のうえ医師が必要と判断した場合にお書きするものです。
              <br className="hidden sm:block" />
              そのための診察を、できるだけ早く、負担の少ない形でご用意しています。
            </p>
          </div>
        </section>

        {/* 3. 書類と費用 */}
        <section
          id="documents"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="DOCUMENTS">お書きできる書類と費用</Heading>

            <h3 className="mb-8 text-center text-base" style={SERIF}>
              文書料をいただく書類
            </h3>
            <div className="border-y border-[#e8e2d8]">
              {PAID_DOCS.map(([k, v, note], i) => (
                <div
                  key={k}
                  className={`py-7 ${i > 0 ? "border-t border-[#e8e2d8]" : ""}`}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-[15.5px]" style={SERIF}>
                      {k}
                    </span>
                    <span className="shrink-0 text-[15px] font-light text-[#70645c]">
                      {v}
                    </span>
                  </div>
                  <p className="mt-2 text-[13.5px] font-light leading-[1.9] text-[#8a7a55]">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="mb-8 mt-24 text-center text-base" style={SERIF}>
              保険診療の中でお書きする書類
            </h3>
            <div className="border-y border-[#e8e2d8]">
              {HOKEN_DOCS.map(([k, v, note], i) => (
                <div
                  key={k}
                  className={`py-7 ${i > 0 ? "border-t border-[#e8e2d8]" : ""}`}
                >
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-[15.5px]" style={SERIF}>
                      {k}
                    </span>
                    <span className="shrink-0 text-[15px] font-light text-[#70645c]">
                      {v}
                    </span>
                  </div>
                  <p className="mt-2 text-[13.5px] font-light leading-[1.9] text-[#8a7a55]">
                    {note}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-[13px] font-light leading-loose text-[#8a7a55]">
              精神障害者保健福祉手帳・障害年金の診断書も、通院の経過のなかでお受けしています。
              <br />
              診察料は別途かかります（初診は3割負担で2,500円前後）。
            </p>
          </div>
        </section>

        {/* 4. お渡しまでの流れ */}
        <section
          id="flow"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="FLOW">お渡しまでの流れ</Heading>
            <div className="space-y-14">
              {[
                {
                  n: "01",
                  t: "LINEでひとこと",
                  d: "「診断書が必要になりそう」だけで大丈夫です。状況を伺って、初診の日時をご案内します。",
                },
                {
                  n: "02",
                  t: "初診（30分・オンライン可）",
                  d: "お話をゆっくり伺い、いま休養が必要な状態かどうかを診察のうえ判断します。必要であれば、その場で書類の内容まで決めます。",
                },
                {
                  n: "03",
                  t: "発行・お渡し",
                  d: "休職の診断書は、最短当日から2営業日でPDFをお渡しします。",
                },
                {
                  n: "04",
                  t: "休職中・復職まで",
                  d: "傷病手当金の意見書は、毎月の再診とあわせて更新します。再診はオンライン中心です。生活リズムが戻り、働ける状態が続くところまで、いっしょに見ていきます。",
                },
              ].map((s) => (
                <SlowReveal key={s.n} className="flex items-start gap-8">
                  <span className="font-heading shrink-0 text-2xl font-light tracking-wider text-[#b9a05a]">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="mb-3 text-base" style={SERIF}>
                      {s.t}
                    </h3>
                    <p className="text-[15px] font-light leading-[2] text-[#70645c]">
                      {s.d}
                    </p>
                  </div>
                </SlowReveal>
              ))}
            </div>
            <div className="mt-20 text-center">
              <LineButton />
            </div>
          </div>
        </section>

        {/* 5. 職場とのこと */}
        <section
          id="workplace"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="WORKPLACE">職場が動ける書類を書きます</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                院長は産業医として、企業の側から働く人の不調と復職に関わってきました。診断書は、本人のためのものであると同時に、人事や上司が読む文書でもあります。
              </p>
              <p>
                「◯ヶ月の休養を要する」の一行で終わる診断書と、復帰までの見通しや就業上の配慮まで書かれた診断書では、受け取った職場の動き方が変わります。残業の制限、業務内容の調整、段階的な復帰。職場が具体的に動ける書き方を心がけています。
              </p>
              <p>
                復職の場面でも同じです。産業医面談で何を聞かれるか、会社の制度がどう動くかを踏まえて、書類と診察の両方でお手伝いします。
              </p>
            </div>
          </div>
        </section>

        {/* 6. FAQ */}
        <section id="faq" className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="FAQ">よくある質問</Heading>
            <div className="border-t border-[#e8e2d8]">
              {[
                [
                  "診断書は即日もらえますか",
                  "診察のうえ、休養が必要と判断した場合は、最短で当日中にPDFをお渡しできます。お渡しの形は、診察のときにご相談ください。",
                ],
                [
                  "オンラインだけで完結しますか",
                  "はい。初診からオンラインで受けられ、診断書はPDFでお渡しできます。症状や経過によっては、対面での診察をお願いすることがあります。",
                ],
                [
                  "受診したことが会社に知られませんか",
                  "医療機関からお勤め先に連絡することはありません。診断書を出すかどうか、何をどう書くかは、ご本人と相談して決めます。",
                ],
                [
                  "診断書だけ書いてもらうことはできますか",
                  "診断書は診察にもとづいて書く文書なので、まず初診を受けていただきます。初診は30分とり、その場で必要性を判断しますので、書類のために何度も通っていただくことはありません。",
                ],
                [
                  "傷病手当金とは何ですか",
                  "病気で仕事を休んでいるあいだ、健康保険から給与のおよそ3分の2が支給される制度です。申請には毎月、医師の意見書が必要になります。当院では毎月の再診とあわせて、保険診療の中でお書きします（3割負担で300円ほど）。",
                ],
              ].map(([q, a]) => (
                <details key={q} className="group border-b border-[#e8e2d8]">
                  <summary className="flex cursor-pointer items-start gap-5 py-8 text-[15.5px] leading-[1.9] [&::-webkit-details-marker]:hidden">
                    <span aria-hidden className="text-[#b9a05a]" style={SERIF}>
                      Q
                    </span>
                    <span style={SERIF}>{q}</span>
                  </summary>
                  <div className="flex items-start gap-5 pb-10">
                    <span aria-hidden className="text-[#3e7a52]" style={SERIF}>
                      A
                    </span>
                    <p className="text-[14.5px] font-light leading-[2] text-[#70645c]">
                      {a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-14 text-center text-[14px] font-light text-[#8a7a55]">
              外来の全体については{" "}
              <Link
                href="/mental"
                className="text-[#3e7a52] underline underline-offset-4"
              >
                こころとくらしの相談外来
              </Link>{" "}
              をご覧ください。
            </p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/footer-forest.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-[#33261b]/82" aria-hidden />
        <div className="relative">
          <div className="border-b border-white/10 px-6 pt-28 pb-24 text-center">
            <p
              className="mb-3 text-2xl font-light tracking-[0.14em] md:text-3xl"
              style={SERIF}
            >
              ご予約・ご相談
            </p>
            <p className="mx-auto mb-8 max-w-xl text-base font-light leading-relaxed text-white/70">
              「診断書が必要になりそう」の一言からで大丈夫です。
            </p>
            <div className="mx-auto flex max-w-md flex-col items-stretch justify-center gap-3 sm:flex-row">
              <a
                href={GAIRAI_LINE_ADD_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-[#3e7a52] px-8 py-4 text-base font-bold text-white transition hover:brightness-110"
              >
                LINEで予約・相談
              </a>
            </div>
            <a
              href="tel:027-395-0443"
              className="font-heading mt-6 inline-block text-xl tracking-wider text-white/80 hover:text-white"
            >
              TEL. 027-395-0443
            </a>
          </div>
          <div className="px-6 py-12 text-center text-xs leading-loose text-white/50">
            <p style={SERIF} className="mb-2 text-sm tracking-[0.2em] text-white/70">
              LOCO CLINIC
            </p>
            <p>ロコクリニック｜群馬県高崎市浜尻町209-5</p>
            <p className="mt-3">
              <Link
                href="/mental"
                className="underline underline-offset-4 hover:text-white/80"
              >
                こころとくらしの相談外来
              </Link>
              <span className="mx-3">|</span>
              <Link
                href="/"
                className="underline underline-offset-4 hover:text-white/80"
              >
                こどもと家族の相談外来
              </Link>
              <span className="mx-3">|</span>
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4 hover:text-white/80"
              >
                プライバシーポリシー
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <FixedCta lineUrl={GAIRAI_LINE_ADD_FRIEND_URL} />
    </div>
  );
}
