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

/* ---------- ไอคอนติดต่อและจุดเด่น ---------- */

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

export function IconFacebook({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 21v-8h2.7l.4-3h-3.1V8.2c0-.9.3-1.5 1.5-1.5h1.7V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8.6v3h2.7v8z" />
    </svg>
  );
}

/** ตราปีที่ก่อตั้ง — เหรียญพร้อมริบบิ้น */
export function IconHeritage({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.4 8 22l4-2.2L16 22l-1-7.6" />
    </svg>
  );
}

/* ---------- ไอคอนหมวดสินค้า ---------- */

/** ปูนซิเมนต์ — ถุงปูน */
function IconCement({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8 3h8l2 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z" />
      <path d="M9 3.5 12 6l3-2.5M8.5 12h7" />
    </svg>
  );
}

/** เหล็กโครงสร้าง — คานถัก */
function IconBeam({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 6h18M3 18h18M6 6v12M18 6v12M6 6l12 12" />
    </svg>
  );
}

/** อิฐก่อ — ผนังก่ออิฐสลับแนว */
function IconBrick({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 5h18v14H3zM3 12h18M9 5v7M15 12v7" />
    </svg>
  );
}

/** ไม้ตกแต่ง — แผ่นไม้ซ้อน */
function IconPlank({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 6h18v4H3zM3 14h18v4H3M6.5 6v4M17 14v4" />
    </svg>
  );
}

/** ฝ้าเพดาน — เพดานพร้อมโครงคร่าว */
function IconCeiling({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 4h18v6H3zM7 4v6M13 4v6M5 14v6M12 14v6M19 14v6" />
    </svg>
  );
}

/** รางน้ำไวนิล — รางรับน้ำใต้ชายคา */
function IconGutter({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m3 5 9 5 9-5" />
      <path d="M4 13h16v3a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3z" />
    </svg>
  );
}

/** กระเบื้อง — แผ่นปูพื้นเรียงตาราง */
function IconTile({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />
    </svg>
  );
}

/** ท่อพีวีซี — ท่อโค้งพร้อมข้อต่อ */
function IconPipe({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M3 7h6a5 5 0 0 1 5 5v9" />
      <path d="M2 4.5h3v5H2zM11 20h6v2h-6z" />
    </svg>
  );
}

/** สุขภัณฑ์ — ชักโครก */
function IconSanitary({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 3h8v5H7z" />
      <path d="M5 10h14l-1.5 5a4 4 0 0 1-3.7 2.6h-3.6A4 4 0 0 1 6.5 15z" />
      <path d="M10 17.6V21h4v-3.4" />
    </svg>
  );
}

/** ถังน้ำ — ถังเก็บน้ำทรงกลม */
function IconTank({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M6 8a6 3 0 0 1 12 0v9a6 3 0 0 1-12 0z" />
      <path d="M6 8a6 3 0 0 0 12 0M9 20v1.5M15 20v1.5" />
    </svg>
  );
}

/** ประตู–หน้าต่าง */
function IconDoor({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 3h9v18H5z" />
      <path d="M11.3 12h.01M17 8h4v9h-4zM19 8v9" />
    </svg>
  );
}

/** สีและเคมีภัณฑ์ — แปรงทาสี */
function IconBrush({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 3h11v7H5zM9 10v4M6.5 14h5v5.5a2.5 2.5 0 0 1-5 0z" />
    </svg>
  );
}

/** เครื่องมือช่าง — ประแจกับค้อน */
function IconTools({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.5 5.5a4 4 0 0 0 5 5L21 9v5l-7 7-4-4 7-7z" />
      <path d="M8 3 3 8l3 3 5-5z" />
    </svg>
  );
}

/** รั้วเหล็ก–ตาข่าย */
function IconFence({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 21V6l4-3 4 3 4-3 4 3v15" />
      <path d="M4 10h16M4 15h16M8 3v18M12 3v18M16 3v18" />
    </svg>
  );
}

/** หิน กรวด สีฝุ่น */
function IconAggregate({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="7.5" cy="8" r="3" />
      <circle cx="16" cy="7" r="2.4" />
      <circle cx="12" cy="15" r="3.2" />
      <circle cx="18.5" cy="15.5" r="2" />
      <circle cx="5" cy="16.5" r="2" />
    </svg>
  );
}

/** ไอคอนสำรอง ถ้ามีหมวดใหม่ที่ยังไม่ได้จับคู่ */
export function IconBox({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="m12 3 8.5 4.5v9L12 21l-8.5-4.5v-9z" />
      <path d="m3.5 7.5 8.5 4.5 8.5-4.5M12 12v9" />
    </svg>
  );
}

/** key ตรงกับ Category.id ใน lib/catalog.ts */
export const CATEGORY_ICONS: Record<string, (p: IconProps) => React.JSX.Element> = {
  cement: IconCement,
  steel: IconBeam,
  brick: IconBrick,
  smartwood: IconPlank,
  ceiling: IconCeiling,
  gutter: IconGutter,
  tile: IconTile,
  pvc: IconPipe,
  sanitary: IconSanitary,
  tank: IconTank,
  door: IconDoor,
  paint: IconBrush,
  tools: IconTools,
  fence: IconFence,
  aggregate: IconAggregate,
};
