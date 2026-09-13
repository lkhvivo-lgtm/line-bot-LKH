/** ไอคอน inline SVG — ไม่ใช้ icon library เพื่อไม่ให้เพิ่ม dependency */

type IconProps = { className?: string };

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
  focusable: false,
};

export function IconPhone({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 6.2 2 2 0 0 1 6 4z" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.3 9.6 9.6 0 0 1-2.6-.4L4 21l1.3-3.6A8 8 0 0 1 3 11.5C3 7 7 3.3 12 3.3s9 3.7 9 8.2z" />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M20 10.5c0 5.3-8 12-8 12s-8-6.7-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10.5" r="2.8" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </svg>
  );
}

export function IconTruck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2 6.5h11v9H2zM13 9.5h4.2L21 13v2.5h-8z" />
      <circle cx="6.5" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export function IconDocument({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9z" />
      <path d="M13 3v6h6M9 13h6M9 17h4" />
    </svg>
  );
}

export function IconTag({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M11 3H3v8l10 10 8-8z" />
      <circle cx="7" cy="7" r="1.4" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m4 12.5 5 5L20 6.5" />
    </svg>
  );
}

export function IconBox({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z" />
      <path d="m3.5 7.5 8.5 4.5 8.5-4.5M12 12v9" />
    </svg>
  );
}

export function IconBeam({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 5h18M3 19h18M6 5v14M18 5v14M6 5l12 14" />
    </svg>
  );
}

export function IconRoof({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m2 11 10-6.5L22 11" />
      <path d="M5 12v7h14v-7M5 15.5h14" />
    </svg>
  );
}

export function IconWall({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 5h18v14H3zM3 12h18M9 5v7M15 12v7" />
    </svg>
  );
}

export function IconBrush({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 3h11v7H5zM9 10v4M6.5 14h5v5.5a2.5 2.5 0 0 1-5 0z" />
    </svg>
  );
}

export function IconPipe({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 8h7a4 4 0 0 1 4 4v9M3 5v6M14 21h7M18 17.5h3v7h-3z" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

export function IconTools({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 5.5a4 4 0 0 0 5 5L21 9v5l-7 7-4-4 7-7z" />
      <path d="M8 3 3 8l3 3 5-5z" />
    </svg>
  );
}

/** ไอคอนประจำแต่ละหมวดสินค้า — key ตรงกับ Category.id */
export const CATEGORY_ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  structure: IconBox,
  steel: IconBeam,
  roof: IconRoof,
  wall: IconWall,
  paint: IconBrush,
  plumbing: IconPipe,
  electrical: IconBolt,
  hardware: IconTools,
};
