"use client";

import { TREATMENT_MENU_GROUPS } from "@/lib/treatment-menu";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function TreatmentMenuGrid() {
  const [openId, setOpenId] = useState<string | null>(TREATMENT_MENU_GROUPS[0]?.id ?? null);

  return (
    <div className="w-full max-w-3xl">
      <div className="flex flex-col gap-3 md:gap-4">
        {TREATMENT_MENU_GROUPS.map((group, index) => {
          const isOpen = openId === group.id;

          return (
            <div
              key={group.id}
              className={`overflow-hidden rounded-sm border border-[#e8e4df] bg-white shadow-sm transition-shadow duration-300 ${
                isOpen ? "ring-1 ring-[#d4af37]/15" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : group.id)}
                aria-expanded={isOpen}
                aria-controls={`acc-panel-${group.id}`}
                id={`acc-trigger-${group.id}`}
                className="grid w-full grid-cols-[minmax(0,2.75rem)_1fr_minmax(0,2.75rem)] items-center gap-2 px-3 py-5 transition-colors hover:bg-[#fdfbf8]/80 md:grid-cols-[minmax(0,3.25rem)_1fr_minmax(0,3.25rem)] md:gap-3 md:px-4 md:py-6"
              >
                <span className="font-heading text-center text-[10px] tracking-[0.35em] text-[#d4af37]/80 md:text-xs">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="min-w-0 text-center font-japanese text-base font-light leading-snug text-[#1a1a1a] md:text-lg"
                  style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                >
                  {group.label}
                </span>
                <span className="flex justify-center">
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#d4af37] transition-transform duration-300 md:h-6 md:w-6 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`panel-${group.id}`}
                    id={`acc-panel-${group.id}`}
                    role="region"
                    aria-labelledby={`acc-trigger-${group.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden border-t border-[#e8e4df]/80 bg-[#fdfbf8]/40"
                  >
                    <ul className="divide-y divide-[#e8e4df]/90">
                      {group.children.map((child) => (
                        <li key={child.id}>
                          <Link
                            href={`/menu/${group.id}/${child.id}`}
                            className="block px-4 py-4 text-center text-sm font-light text-[#1a1a1a] transition-colors hover:bg-[#fdfbf8] hover:text-[#d4af37] md:px-6 md:py-4 md:text-base"
                            style={{ fontFamily: "var(--font-shippori-mincho), serif" }}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
