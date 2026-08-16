"use client";

import { useEffect, useState } from "react";

/* ヒーロー背景：5秒ごとにゆっくりクロスフェード */
const IMAGES = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((v) => (v + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 bg-cover bg-center will-change-[opacity]"
          style={{
            backgroundImage: `url('${src}')`,
            opacity: i === index ? 1 : 0,
            transition: "opacity 2200ms ease-in-out, transform 6000ms ease-out",
            transform: i === index ? "scale(1.04)" : "scale(1.0)",
          }}
        />
      ))}
    </div>
  );
}
