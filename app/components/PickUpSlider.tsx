"use client";

import Link from "next/link";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export type PickUpItem = {
  id: string;
  title: string;
  excerpt: string;
  href: string;
};

const defaultItems: PickUpItem[] = [
  {
    id: "01",
    title: "糸リフト ─ 4種類の糸の選び方",
    excerpt:
      "素材と持続期間の異なる4種類の糸を、「どれくらい持たせたいか」の視点でわかりやすく解説します。",
    href: "/thread-lift",
  },
  {
    id: "02",
    title: "お悩みからさがす",
    excerpt:
      "たるみ・小顔・肌質改善など、お悩みごとにおすすめの施術・その理由・料金の目安をご覧いただけます。",
    href: "/concerns",
  },
  {
    id: "03",
    title: "アートメイクのご相談",
    excerpt:
      "眉・リップ・ヘアライン。自然な仕上がりを目指す施術の流れと術後ケアをご案内します。",
    href: "/artmake",
  },
  {
    id: "04",
    title: "完全予約制のご案内",
    excerpt:
      "9:00〜21:00・不定休。お問い合わせからスムーズにご予約いただくための流れをまとめました。",
    href: "/contact",
  },
];

type Props = {
  items?: PickUpItem[];
};

export default function PickUpSlider({ items = defaultItems }: Props) {
  return (
    <div className="pickup-swiper relative w-full text-left">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={24}
        slidesPerView={1.06}
        watchOverflow
        breakpoints={{
          480: { slidesPerView: 1.2, spaceBetween: 24 },
          768: { slidesPerView: 2, spaceBetween: 28 },
          1280: { slidesPerView: 3, spaceBetween: 32 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="pickup-swiper-inner !pb-14"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="!h-auto">
            <article className="flex h-full min-h-[280px] flex-col rounded-sm border border-[#e8e4df] bg-white p-8 shadow-sm transition-shadow duration-500 hover:border-[#d4af37]/35 hover:shadow-md md:min-h-[300px]">
              <p className="font-heading text-[11px] tracking-[0.35em] text-[#d4af37]">
                Pick up {item.id}
              </p>
              <h3
                className="mt-5 font-japanese text-xl leading-snug text-[#1a1a1a] md:text-[1.35rem]"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                {item.title}
              </h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                {item.excerpt}
              </p>
              <Link
                href={item.href}
                className="group mt-8 inline-flex w-fit items-center gap-2 font-heading text-xs tracking-[0.2em] text-[#1a1a1a] transition-colors hover:text-[#d4af37]"
              >
                View more
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
