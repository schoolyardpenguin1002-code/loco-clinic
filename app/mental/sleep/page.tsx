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
      "不眠・眠りの相談｜ロコクリニック こころとくらしの相談外来（高崎市・オンライン対応）",
  },
  description:
    "眠れない、夜中に何度も目が覚める、朝起きられない。群馬県高崎市のロコクリニックの不眠相談は、薬より先に生活と環境から眠りを立て直します。使う薬は依存性の少ないものを少なく短く。睡眠薬の減薬相談もお受けします。保険診療・完全予約制・初診30分・オンライン診療対応。",
  openGraph: {
    title: "不眠・眠りの相談｜ロコクリニック（高崎市）",
    description:
      "眠れない夜を、薬だけで終わらせない。生活から眠りを立て直す不眠相談。保険診療・オンライン対応。",
    url: "https://www.lococlinic.com/mental/sleep",
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
  { name: "眠りのお悩み", href: "#concerns" },
  { name: "診療の順番", href: "#approach" },
  { name: "薬との付き合い方", href: "#medication" },
  { name: "よくある質問", href: "#faq" },
];

export default function MentalSleepPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <GairaiHeader
        subtitle="こころとくらしの相談外来｜不眠・眠りの相談"
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
            SLEEP CARE
          </p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light leading-[1.9] tracking-[0.14em]"
            style={SERIF}
          >
            <span className="inline-block">眠れない夜を、</span>
            <span className="inline-block">薬だけで</span>
            <span className="inline-block">終わらせない。</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-[#70645c]">
            寝つけない。夜中に目が覚める。朝、起き上がれない。
            <br />
            眠りは毎日の生活の結果です。だからこの外来は、
            生活ごと眠りを立て直します。
          </p>
          <p className="mt-8 text-[13.5px] tracking-[0.2em] text-[#8a7a55]">
            保険診療｜完全予約制｜初診30分｜オンライン診療対応
          </p>
          <div className="mt-12">
            <LineButton />
          </div>
        </section>

        {/* 2. こんなお悩み */}
        <section
          id="concerns"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="CONCERNS">こんな眠りに、心当たりはありませんか</Heading>
            <ul className="space-y-4 border-y border-[#e8e2d8] py-10 text-[15.5px] font-light leading-[2] text-[#70645c]">
              {[
                "布団に入ってから、眠るまでに1時間以上かかる",
                "夜中に何度も目が覚める。朝早くに目が覚めて、そのまま眠れない",
                "眠れているはずなのに、疲れが取れない",
                "日曜の夜になると、眠れなくなる",
                "睡眠薬を長く飲んでいて、そろそろ減らしたい・やめたい",
                "眠れない日が続いて、仕事に行くのがつらくなってきた",
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
              眠れない日が週に3日以上、それが1ヶ月続いていたら、
              <br className="hidden sm:block" />
              意思の力でどうにかする段階は過ぎています。相談してください。
            </p>
          </div>
        </section>

        {/* 3. 診療の順番 */}
        <section
          id="approach"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="APPROACH">この外来の、眠りの立て直し方</Heading>
            <div className="space-y-14">
              {[
                {
                  n: "01",
                  t: "まず、眠りと生活をゆっくり伺います",
                  d: "初診は30分。何時に布団に入るか、夜に何を見ているか、朝ごはんを食べているか、日中に体を動かしているか。眠りの問題の答えは、たいてい眠っていない時間のほうにあります。",
                },
                {
                  n: "02",
                  t: "生活の処方 ── 光・食事・運動・環境",
                  d: "朝の光を浴びる時間、カフェインとお酒のタイミング、寝室の環境、日中の活動量。ひとつずつ、できるところから整えます。地味に見えますが、ここが眠りの土台です。",
                },
                {
                  n: "03",
                  t: "薬は、依存性の少ないものを少なく短く",
                  d: "必要なときは薬も使います。ただし、やめにくくなるタイプの睡眠薬は最初から使いません。依存性の少ない新しいタイプの薬を、少ない量で、短い期間を基本にします。",
                },
                {
                  n: "04",
                  t: "眠りの立て直しは、ご自宅で",
                  d: "眠りは診察室の中では診られません。実際の寝室、実際の夜、実際の朝の中にあります。ですから看護師がご自宅に伺い、生活リズムの立て直しを一緒に進める体制をとっています。",
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

        {/* 4. 薬との付き合い方 */}
        <section
          id="medication"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="MEDICATION">薬との付き合い方</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                睡眠薬には、長く使ううちにやめにくくなるタイプと、依存性の少ない新しいタイプがあります。当院で使うのは後者です。眠りのしくみ（覚醒を抑える・体内時計を整える）に沿って働く薬を、少ない量から始めます。
              </p>
              <p>
                いま睡眠薬を長く飲んでいて、減らしたい・やめたいという方のご相談もお受けします。長く飲んだ薬を急に止めると、かえって眠れなくなることがあります。生活の土台を整えながら、時間をかけて少しずつ、が原則です。
              </p>
              <p>
                いびきが強い、日中の強い眠気があるなど、睡眠時無呼吸症候群が疑わしい場合は、検査のできる専門機関へご紹介します。
              </p>
            </div>
          </div>
        </section>

        {/* 5. 休職との関係 */}
        <section
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="WORK">眠れなくて、仕事がつらい方へ</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                不眠は、こころの不調のいちばん早いサインであることが多い症状です。眠れない日が続いて、朝がつらく、仕事のことを考えると苦しい ──
                そこまで来ているなら、眠りの相談と同時に、働き方の相談もできます。
              </p>
              <p>
                休職の診断書や傷病手当金の書類が必要な場合も、この外来でお書きします。
              </p>
            </div>
            <p className="mt-10 text-center text-[14px] font-light">
              <Link
                href="/mental/documents"
                className="text-[#3e7a52] underline underline-offset-4"
              >
                休職の診断書・復職の書類について →
              </Link>
            </p>
          </div>
        </section>

        {/* 6. 費用 */}
        <section className="px-6" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="PRICE">費用について</Heading>
            <p className="text-center font-light leading-loose">
              保険診療です。自由診療のカウンセリング料などはありません。
            </p>
            <div className="mt-12 border-y border-[#e8e2d8]">
              {[
                ["初診（30分）", "3割負担で 2,500円前後"],
                ["再診（オンライン）", "3割負担で 1,000〜1,500円前後"],
              ].map(([k, v], i) => (
                <div
                  key={k}
                  className={`flex flex-col gap-1 py-7 sm:flex-row sm:items-baseline sm:justify-between ${
                    i > 0 ? "border-t border-[#e8e2d8]" : ""
                  }`}
                >
                  <span className="text-[15.5px]" style={SERIF}>
                    {k}
                  </span>
                  <span className="text-[15px] font-light text-[#70645c]">
                    {v}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[13px] font-light leading-loose text-[#8a7a55]">
              処方や検査の内容により前後します。
            </p>
          </div>
        </section>

        {/* 7. FAQ */}
        <section
          id="faq"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="FAQ">よくある質問</Heading>
            <div className="border-t border-[#e8e2d8]">
              {[
                [
                  "睡眠薬は出してもらえますか",
                  "必要と判断すれば処方します。使うのは依存性の少ない新しいタイプで、少ない量・短い期間が基本です。薬だけで終わらせず、生活の立て直しを並行して進めます。",
                ],
                [
                  "いま飲んでいる睡眠薬を減らしたいのですが",
                  "お受けします。長く飲んだ薬を急に止めると、かえって眠れなくなることがあるため、生活の土台を整えながら時間をかけて減らしていきます。いまの処方内容が分かるもの（お薬手帳など）をご用意ください。",
                ],
                [
                  "オンラインだけで大丈夫ですか",
                  "はい。初診からオンラインで受けられます。お薬が出た場合は、ご自宅近くの薬局で受け取れるほか、ご自宅のポストに届く配送も選べます。症状や経過によっては、対面での診察をお願いすることがあります。",
                ],
                [
                  "眠れないだけで受診していいのでしょうか",
                  "はい。不眠はこころとからだの不調のいちばん早いサインです。「病院に行くほどか分からない」という段階で来ていただけるのが、いちばん早く楽になれる道だと考えています。",
                ],
                [
                  "子どもの昼夜逆転も相談できますか",
                  "お子さんの眠りと不登校のご相談は、こどもと家族の相談外来でお受けしています。親御さんだけのご相談から始めていただけます。",
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
              を、お子さんのご相談は{" "}
              <Link href="/" className="text-[#3e7a52] underline underline-offset-4">
                こどもと家族の相談外来
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
              「眠れていない」の一言からで大丈夫です。
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
