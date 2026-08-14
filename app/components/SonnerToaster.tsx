"use client";

import { Toaster } from "sonner";

export default function SonnerToaster() {
  return (
    <Toaster
      position="top-center"
      richColors={false}
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "font-heading border border-[#d4af37]/25 bg-[#1a1a1a] text-white shadow-xl",
          title: "text-white",
          description: "text-gray-300 !font-sans text-sm",
          closeButton: "text-white/70 hover:text-white",
        },
      }}
    />
  );
}
