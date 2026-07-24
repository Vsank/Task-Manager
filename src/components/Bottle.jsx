// Parametric SVG perfume flacon. `variant` changes the silhouette,
// `liquid` sets the fragrance colour, `label` prints on the bottle.
export default function Bottle({
  variant = 'tall',
  liquid = '#c9a35b',
  liquidTop = '#e7d3a1',
  label = 'MIRAGE',
  code = 'N°1',
  className = '',
}) {
  const id = `${variant}-${label}`.replace(/\s+/g, '')
  const shapes = {
    tall: { x: 26, y: 40, w: 48, h: 82, r: 6, neckW: 16, capH: 20 },
    square: { x: 20, y: 54, w: 60, h: 66, r: 5, neckW: 22, capH: 16 },
    round: { x: 22, y: 46, w: 56, h: 76, r: 30, neckW: 18, capH: 18 },
    flask: { x: 30, y: 50, w: 40, h: 72, r: 20, neckW: 14, capH: 22 },
  }
  const s = shapes[variant] || shapes.tall
  const cx = 50
  const neckX = cx - s.neckW / 2
  const neckTop = s.y - 10
  const capY = neckTop - s.capH

  return (
    <svg
      className={`bottle ${className}`}
      viewBox="0 0 100 150"
      role="img"
      aria-label={`${label} perfume bottle`}
    >
      <defs>
        <linearGradient id={`glass-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.14" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.02" />
          <stop offset="1" stopColor="#000000" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id={`liq-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={liquidTop} />
          <stop offset="1" stopColor={liquid} />
        </linearGradient>
        <linearGradient id={`cap-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e7d3a1" />
          <stop offset="0.5" stopColor="#c9a35b" />
          <stop offset="1" stopColor="#7a5c33" />
        </linearGradient>
        <radialGradient id={`shine-${id}`} cx="0.32" cy="0.28" r="0.6">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx={cx} cy="134" rx={s.w / 2 + 4} ry="5" fill="#000" opacity="0.28" />

      {/* cap */}
      <rect
        x={cx - s.neckW / 2 - 3}
        y={capY}
        width={s.neckW + 6}
        height={s.capH}
        rx="2.5"
        fill={`url(#cap-${id})`}
      />
      {/* neck */}
      <rect x={neckX} y={neckTop} width={s.neckW} height="12" fill={`url(#cap-${id})`} opacity="0.9" />

      {/* liquid fill (inside, drawn first) */}
      <rect
        x={s.x + 3}
        y={s.y + s.h * 0.34}
        width={s.w - 6}
        height={s.h * 0.66 - 3}
        rx={Math.min(s.r, 8)}
        fill={`url(#liq-${id})`}
      />
      {/* glass body */}
      <rect
        x={s.x}
        y={s.y}
        width={s.w}
        height={s.h}
        rx={s.r}
        fill={`url(#glass-${id})`}
        stroke="rgba(201,163,91,0.55)"
        strokeWidth="1"
      />
      {/* label plate */}
      <rect
        x={cx - 15}
        y={s.y + s.h * 0.42}
        width="30"
        height="26"
        rx="2"
        fill="#0d0a07"
        opacity="0.72"
      />
      <text
        x={cx}
        y={s.y + s.h * 0.42 + 11}
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="7"
        letterSpacing="0.5"
        fill="#e7d3a1"
      >
        {label}
      </text>
      <text
        x={cx}
        y={s.y + s.h * 0.42 + 20}
        textAnchor="middle"
        fontFamily="Jost, sans-serif"
        fontSize="3.6"
        letterSpacing="1.4"
        fill="#c9a35b"
      >
        {code}
      </text>
      {/* highlight */}
      <rect
        x={s.x}
        y={s.y}
        width={s.w}
        height={s.h}
        rx={s.r}
        fill={`url(#shine-${id})`}
      />
    </svg>
  )
}
