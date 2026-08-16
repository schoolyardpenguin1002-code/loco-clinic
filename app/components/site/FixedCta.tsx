import { LINE_ADD_FRIEND_URL } from "@/lib/line";

/* 常設CTA：モバイル＝下部バー／PC＝右下フローティング（ゴールド半透明・CLINIC W型） */
export default function FixedCta() {
  return (
    <>
      {/* モバイル：下部固定バー（電話｜LINE） */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_2fr] border-t border-[#e8e2d8] bg-white/90 backdrop-blur-md lg:hidden">
        <a
          href="tel:027-395-0443"
          className="flex flex-col items-center justify-center gap-1 py-3 text-[#70645c]"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M3.6 1.5 5.5 1c.4-.1.8.1 1 .5l1 2.3c.15.37.05.8-.26 1.06l-1.1.94a10.5 10.5 0 0 0 4.06 4.06l.94-1.1c.26-.3.7-.4 1.06-.26l2.3 1c.4.17.6.6.5 1l-.5 1.9c-.1.4-.46.7-.87.68C6.6 12.9 3.1 9.4 2.9 2.37c-.02-.41.28-.77.7-.87Z" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          <span className="text-[10px] tracking-wider">電話する</span>
        </a>
        <a
          href={LINE_ADD_FRIEND_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 border-l border-white/30 bg-[#b9a05a]/85 py-3 text-white backdrop-blur-sm"
        >
          <span className="text-base font-bold leading-none tracking-wider">LINEで予約・ご相談</span>
          <span className="text-[10px] opacity-95">24時間受付</span>
        </a>
      </div>

      {/* PC：右下フローティング */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 lg:flex">
        <a
          href={LINE_ADD_FRIEND_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 border border-[#b9a05a]/70 bg-[#b9a05a]/70 py-3 pl-5 pr-6 text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8a9e8f] hover:shadow-2xl"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/50 text-[12.5px] font-black tracking-tighter">
            LINE
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-wider">LINEで予約・ご相談</span>
            <span className="block text-[10px] opacity-95">24時間受付</span>
          </span>
        </a>
      </div>
    </>
  );
}
