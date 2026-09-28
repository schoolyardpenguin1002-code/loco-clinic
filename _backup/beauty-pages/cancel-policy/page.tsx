import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site/SiteHeader";
import SiteFooter from "../components/site/SiteFooter";
import FixedCta from "../components/site/FixedCta";
import BotanicalArt from "../components/site/BotanicalArt";
import SlowReveal from "../components/SlowReveal";

export const metadata: Metadata = {
  title: "キャンセルポリシー",
  description: "LOCO CLINIC（高崎・糸リフト専門）のご予約の変更・キャンセルに関する規定です。",
};

const RULES = [
  {
    n: "01",
    body: "ご予約の変更・キャンセルは、前日の18:00までであれば無料で承ります。",
    note: "例：火曜日のご予約 → 前日である月曜日の診療時間終了までにご連絡ください。",
  },
  {
    n: "02",
    body: "当日キャンセル（前日18:00以降のご連絡・無断キャンセルを含む）は、いかなる理由であってもキャンセル料が発生いたします。",
    sub: ["施術（コース消化予定以外の方）：5,500円（税込）", "コース消化予定の方：1回分の消化となります。"],
  },
  {
    n: "03",
    body: "ご予約時間に15分以上遅刻された場合、当日の施術ができかねる場合がございます。",
    note: "その際は当日キャンセルと同様の扱いとなります。",
  },
];

const NOTES = [
  "公共交通機関の遅延や道路混雑などの理由も、原則として考慮いたしかねます。余裕を持ってご来院ください。",
  "キャンセル料につきましては、次回ご来院時又は振込にてお願いいたします。",
  "キャンセル料のお支払いがない場合は、以降のご予約をお断りすることがございます。",
  "当院の都合により日程変更をお願いする場合は、キャンセル料は発生いたしません。",
];

export default function CancelPolicyPage() {
  return (
    <div className="price-page min-h-screen w-full bg-[#fffbf6] text-[#70645c]">
      <SiteHeader />
      <main className="w-full">
        <section className="relative overflow-hidden bg-white px-6 text-center" style={{ paddingTop: "150px", paddingBottom: "80px" }}>
          <BotanicalArt className="pointer-events-none absolute -left-14 -top-6 h-[130%] text-[#6f4e2f]" />
          <BotanicalArt className="pointer-events-none absolute -right-20 top-0 h-[120%] scale-x-[-1] text-[#b9a05a]" />
          <p className="mb-4 text-[12.5px] tracking-[0.35em] text-[#b9a05a]">CANCEL POLICY</p>
          <h1
            className="text-[clamp(26px,4vw,40px)] font-light tracking-[0.14em]"
            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
          >
            キャンセルポリシー
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[15px] font-light leading-loose">
            ご予約の変更・キャンセルに関する規定です。
          </p>
        </section>

        <section className="px-6" style={{ paddingTop: "100px", paddingBottom: "60px" }}>
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">
            {RULES.map((r, i) => (
              <SlowReveal key={r.n} delay={i * 100}>
                <div className="border border-[#e9e6e6] bg-white p-10">
                  <p className="font-heading text-[13px] tracking-[0.3em] text-[#b9a05a]">{r.n}</p>
                  <p className="mt-4 text-[15.5px] font-light leading-[2.1]">{r.body}</p>
                  {r.sub && (
                    <ul className="mt-5 space-y-2 border-t border-[#e9e6e6] pt-5 text-[14.5px] font-light leading-[2]">
                      {r.sub.map((t) => (
                        <li key={t}>・{t}</li>
                      ))}
                    </ul>
                  )}
                  {r.note && <p className="mt-3 text-[13px] font-light leading-[1.9] text-[#9a8f7d]">{r.note}</p>}
                </div>
              </SlowReveal>
            ))}
          </div>
        </section>

        <section className="px-6" style={{ paddingTop: "40px", paddingBottom: "60px" }}>
          <SlowReveal className="mx-auto w-full max-w-3xl">
            <div className="border border-[#e9e6e6] bg-white p-10">
              <h2 className="text-lg tracking-[0.12em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                ご注意事項
              </h2>
              <ul className="mt-6 space-y-3 text-[14.5px] font-light leading-[2]">
                {NOTES.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="text-[#b9a05a]">・</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlowReveal>
        </section>

        <section className="px-6" style={{ paddingTop: "20px", paddingBottom: "120px" }}>
          <SlowReveal className="mx-auto w-full max-w-3xl text-center">
            <div className="bg-[#faf7f1] px-10 py-12">
              <h2 className="text-lg tracking-[0.12em]" style={{ fontFamily: "var(--font-shippori-mincho), serif" }}>
                当院の想い
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[14.5px] font-light leading-[2.1]">
                当院では、すべての患者様に質の高い医療を提供するため、時間枠を確保し、準備を行っております。
                <br />
                ご理解とご協力のほど、どうぞよろしくお願い申し上げます。
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-12 inline-block border border-[#6f4e2f] px-12 py-5 text-[15px] tracking-[0.2em] text-[#6f4e2f] transition-all duration-500 hover:bg-[#6f4e2f] hover:text-white"
            >
              ご予約・お問い合わせ
            </Link>
          </SlowReveal>
        </section>
      </main>
      <SiteFooter />
      <FixedCta />
    </div>
  );
}
