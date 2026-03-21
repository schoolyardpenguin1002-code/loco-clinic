"use client";

import type { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  label?: string;
  className?: string;
  aspect?: string;
};

export default function ImagePlaceholder({
  icon: Icon,
  label = "画像プレースホルダー",
  className = "",
  aspect = "aspect-[3/4]",
}: Props) {
  return (
    <div
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-sm border border-[#e5e2dc] bg-[#f5f5f0] ${aspect} ${className}`}
      role="img"
      aria-label={label}
    >
      <Icon className="h-12 w-12 text-[#d4af37]/45 md:h-14 md:w-14" strokeWidth={1.15} aria-hidden />
    </div>
  );
}
