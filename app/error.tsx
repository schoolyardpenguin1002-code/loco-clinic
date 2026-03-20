"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#fdfbf8] text-center">
      <h1 className="text-2xl font-japanese text-[#1a1a1a] mb-4">
        表示できませんでした
      </h1>
      <p className="text-gray-600 text-sm mb-8 max-w-md">
        接続が切れたか、一時的なエラーです。PCのスリープ直後は再読み込みしてください。
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <button
          type="button"
          onClick={() => reset()}
          className="px-6 py-3 bg-[#1a1a1a] text-white text-sm tracking-wider"
        >
          再試行
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-[#1a1a1a] text-sm tracking-wider"
        >
          トップへ
        </Link>
      </div>
    </div>
  );
}
