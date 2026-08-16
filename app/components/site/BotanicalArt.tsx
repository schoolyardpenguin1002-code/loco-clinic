/* 線画の草花（メニュー・セクション背景の装飾。CLINIC W風） */
export default function BotanicalArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 600" fill="none" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.1" opacity="0.16">
        <path d="M60 600 C 90 480, 70 380, 130 260 C 170 180, 160 100, 140 40" />
        <path d="M130 260 C 90 240, 60 250, 30 290 C 70 300, 110 290, 130 260 Z" />
        <path d="M118 320 C 160 300, 195 310, 225 350 C 185 362, 140 352, 118 320 Z" />
        <path d="M145 180 C 110 160, 80 168, 52 205 C 92 216, 125 208, 145 180 Z" />
        <path d="M150 120 C 185 100, 218 108, 246 145 C 206 158, 172 150, 150 120 Z" />
        <path d="M300 600 C 320 500, 300 420, 340 330 C 368 262, 362 200, 348 150" />
        <path d="M340 330 C 306 314, 278 322, 252 356 C 288 366, 318 358, 340 330 Z" />
        <path d="M352 250 C 384 232, 412 240, 436 272 C 402 284, 372 276, 352 250 Z" />
      </g>
    </svg>
  );
}
