"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#e8e4df] border-t border-b border-[#e8e4df]">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="text-left">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-[#d4af37]"
              aria-expanded={isOpen}
            >
              <span
                className="font-japanese text-base leading-snug text-[#1a1a1a] md:text-lg"
                style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
              >
                {item.q}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-[#d4af37] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>
            {isOpen && (
              <p className="pb-6 text-sm font-light leading-relaxed text-gray-600 md:text-base">{item.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
