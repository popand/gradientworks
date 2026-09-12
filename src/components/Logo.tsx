/**
 * The GradientWorks mark, redrawn for the Lemon design system.
 *
 * A single ink line-drawn ring (the same 1.5 px stroke weight as the Lemon
 * slice) holding a stepped ramp of three tilted bands — the "gradient" — at
 * full, 55 % and 25 % ink. Everything is `currentColor`, so the mark is ink on
 * cream and cream on ink with no second asset. No gradients, no off-palette
 * colour: the old blue-to-violet PNG had no home in this palette.
 */
const Logo = ({ size = 30, className = '' }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <clipPath id="gw-mark-clip">
        <circle cx="16" cy="16" r="10.75" />
      </clipPath>
    </defs>
    <circle cx="16" cy="16" r="14.5" stroke="currentColor" strokeWidth="1.5" />
    <g clipPath="url(#gw-mark-clip)" transform="rotate(-24 16 16)">
      <rect x="2" y="5" width="28" height="6.2" fill="currentColor" />
      <rect x="2" y="12.9" width="28" height="6.2" fill="currentColor" opacity="0.55" />
      <rect x="2" y="20.8" width="28" height="6.2" fill="currentColor" opacity="0.25" />
    </g>
  </svg>
)

export default Logo
