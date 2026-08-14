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
    title: "春の肌育キャンペーン",
    excerpt:
      "導入コースを中心に、お肌の土台づくりをサポートする期間限定メニューをご用意しました。",
    href: "/#news",
  },
  {
    id: "02",
    title: "アートメイクのご相談",
    excerpt:
      "眉・ライン・アイラインなど、自然な仕上がりを目指す施術の流れと術後ケアをご案内します。",
    href: "/artmake",
  },
  {
    id: "03",
    title: "糸リフトの適応について",
    excerpt:
      "たるみの程度やご希望に合わせ、メスを使わないリフトアップの選択肢をわかりやすく解説します。",
    href: "/menu",
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
