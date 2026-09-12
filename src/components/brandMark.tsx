export default function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 256"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="256" height="256" rx="58" fill="#101C2C" />
      <path
        d="M177 87C168 68 151 58 130 58C99 58 78 75 78 98C78 121 99 129 128 135"
        stroke="#FFB547"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <path
        d="M128 135C157 141 178 149 178 172C178 195 155 207 128 207C105 207 87 196 78 178"
        stroke="#F5F0E6"
        strokeWidth="26"
        strokeLinecap="round"
      />
      <circle cx="196" cy="51" r="10" fill="#FFB547" />
    </svg>
  );
}