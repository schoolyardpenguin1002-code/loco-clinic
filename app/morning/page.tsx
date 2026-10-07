import type { Metadata } from "next";
import Link from "next/link";
import BotanicalArt from "../components/site/BotanicalArt";
import FixedCta from "../components/site/FixedCta";
import GairaiHeader from "../components/site/GairaiHeader";
import SlowReveal from "../components/SlowReveal";
import { GAIRAI_LINE_ADD_FRIEND_URL } from "@/lib/line";

export const metadata: Metadata = {
  title: {
    absolute:
      "朝起きられない・昼夜逆転のご相談｜ロコクリニック こどもと家族の相談外来（高崎市）",
  },
  description:
    "朝起きられない、昼夜逆転、夜はゲームで朝は布団から出られない。不登校と眠りの乱れはセットで起こります。群馬県高崎市のロコクリニックは、叱らずに、生活リズムから立て直します。親御さんだけの相談から始められます。保険診療・完全予約制・オンライン対応。",
  openGraph: {
    title: "朝起きられない・昼夜逆転のご相談｜ロコクリニック（高崎市）",
    description:
      "「怠け」ではありません。昼夜逆転は、からだのリズムの問題です。親御さんだけの相談から始められます。",
    url: "https://www.lococlinic.com/morning",
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
  { name: "こんなとき", href: "#concerns" },
  { name: "昼夜逆転のしくみ", href: "#mechanism" },
  { name: "立て直し方", href: "#approach" },
  { name: "よくある質問", href: "#faq" },
];

export default function MorningPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <GairaiHeader
        subtitle="こどもと家族の相談外来｜朝・眠りの相談"
        nav={NAV}
        cross={{ name: "こどもと家族の相談外来", href: "/" }}
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
            MORNING CARE
          </p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light leading-[1.9] tracking-[0.14em]"
            style={SERIF}
          >
            <span className="inline-block">朝起きられないのは、</span>
            <br />
            <span className="inline-block">怠けでは</span>
            <span className="inline-block">ありません。</span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-base font-light leading-loose text-[#70645c]">
            夜は元気なのに、朝は布団から出られない。
            <br />
            昼夜逆転は、からだのリズムの問題です。叱っても直りません。
            <br />
            生活リズムから、いっしょに立て直します。
          </p>
          <p className="mt-8 text-[13.5px] tracking-[0.2em] text-[#8a7a55]">
            保険診療｜完全予約制｜親御さんだけの相談OK｜オンライン対応
          </p>
          <div className="mt-12">
            <LineButton />
          </div>
        </section>

        {/* 2. こんなとき */}
        <section
          id="concerns"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="CONCERNS">こんなとき、ご相談ください</Heading>
            <ul className="space-y-4 border-y border-[#e8e2d8] py-10 text-[15.5px] font-light leading-[2] text-[#70645c]">
              {[
                "何度起こしても、朝起きられない。昼過ぎまで寝ている",
                "夜はゲームや動画で遅くまで起きていて、注意すると喧嘩になる",
                "学校に行けない日が増えてきた。眠りの乱れと重なっている気がする",
                "朝、頭痛やだるさを訴える。起き上がるのがつらそうに見える",
                "本人は「行きたいのに起きられない」と言う。見ていてつらい",
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
              お子さんを連れてくる必要はありません。
              <br className="hidden sm:block" />
              親御さんだけのご相談から始めていただけます。
            </p>
          </div>
        </section>

        {/* 3. しくみ */}
        <section
          id="mechanism"
          className="bg-white px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-2xl">
            <Heading en="WHY">なぜ、起きられなくなるのか</Heading>
            <div className="font-light leading-[2.1]">
              <p>
                思春期のからだは、もともと夜型に傾きやすくできています。そこに、学校に行きづらい気持ちと、夜のスマホやゲームが重なると、体内時計は簡単に数時間うしろへずれます。朝起きられないのは意志の弱さではなく、時計がずれた結果です。
              </p>
              <p>
                そして夜に起きている時間は、本人にとって唯一ほっとできる時間でもあります。だから「ゲームを取り上げる」「無理やり起こす」は、たいていうまくいきません。親子の関係だけがすり減っていきます。
              </p>
              <p>
                朝の頭痛・立ちくらみ・だるさが強い場合は、起立性調節障害など、からだの病気が隠れていることもあります。そこの見立ても含めて、医療の目で一度整理する価値があります。
              </p>
            </div>
          </div>
        </section>

        {/* 4. 立て直し方 */}
        <section
          id="approach"
          className="px-6"
          style={{ paddingTop: "120px", paddingBottom: "120px" }}
        >
          <div className="mx-auto w-full max-w-3xl">
            <Heading en="APPROACH">この外来の、立て直し方</Heading>
            <div className="space-y-14">
              {[
                {
                  n: "01",
                  t: "まず、親御さんの話を聞きます",
                  d: "お子さんが受診を嫌がるのは普通のことです。最初は親御さんだけで大丈夫。ご家庭での様子を伺い、何から手をつけるかを一緒に決めます。",
                },
                {
                  n: "02",
                  t: "責めずに、リズムを半歩ずつ戻します",
                  d: "いきなり「朝7時に起きる」を目指しません。朝の光、起きる時間の固定、夜の過ごし方。体内時計のしくみに沿って、できるところから半歩ずつ戻します。",
                },
                {
                  n: "03",
                  t: "ご自宅に、看護師が伺えます",
                  d: "生活リズムの立て直しは、家の中で起こることです。看護師がご自宅に伺い、本人のペースに合わせて関わる体制があります。親でも先生でもない大人が家に来ることが、本人の変わるきっかけになることがよくあります。",
                },
                {
                  n: "04",
                  t: "学校とのことも、一緒に",
                  d: "出席の扱いや配慮のお願いなど、学校に向けた意見書もお書きできます。学校に行くことをゴールにするかどうかも含めて、ご家族と一緒に考えます。",
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
              <LineButton label="まずは親御さんだけでLINE相談" />
            </div>
          </div>
        </section>

        {/* 5. FAQ */}
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
                  "本人が受診を嫌がります",
                  "それがいちばん多いご相談です。親御さんだけの相談から始めて、ご家庭での関わり方を先に変えていきます。本人が動けるようになるのを待たずに、できることがあります。",
                ],
                [
                  "無理やり朝起こしたほうがいいのでしょうか",
                  "体内時計がずれている状態で無理に起こしても、つらさと喧嘩が増えるだけのことが多いです。起こし方にもコツがあります。診察で、ご家庭の状況に合わせてお伝えします。",
                ],
                [
                  "睡眠薬を子どもに使うのですか",
                  "最初から薬には頼りません。まず光と生活リズムから整えます。必要な場合も、子どもの眠りに保険適用のある、体内時計を整えるタイプの薬を検討します。",
                ],
                [
                  "起立性調節障害かもしれないと言われました",
                  "朝の頭痛・立ちくらみ・だるさが強い場合は、その可能性も見立てます。からだの検査が必要な場合は、適切な医療機関と連携します。",
                ],
                [
                  "学校には行かせたほうがいいのでしょうか",
                  "ご家庭ごとに答えが違う問いです。学校に戻ることだけをゴールにせず、本人が安心して過ごせる生活を先に作る、という順番で一緒に考えます。",
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
              発達・不登校のご相談の全体は{" "}
              <Link href="/" className="text-[#3e7a52] underline underline-offset-4">
                こどもと家族の相談外来
              </Link>{" "}
              を、大人の不眠のご相談は{" "}
              <Link
                href="/mental/sleep"
                className="text-[#3e7a52] underline underline-offset-4"
              >
                不眠・眠りの相談
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
              「朝起きられなくて」の一言からで大丈夫です。親御さんだけでどうぞ。
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
                href="/"
                className="underline underline-offset-4 hover:text-white/80"
              >
                こどもと家族の相談外来
              </Link>
              <span className="mx-3">|</span>
              <Link
                href="/mental"
                className="underline underline-offset-4 hover:text-white/80"
              >
                こころとくらしの相談外来
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
