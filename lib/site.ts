/**
 * ข้อมูลร้าน (NAP) — แหล่งข้อมูลเดียวของทั้งเว็บไซต์
 * แก้ที่นี่ที่เดียว หน้าเว็บ / metadata / JSON-LD / sitemap อัปเดตตามทั้งหมด
 */

const VERCEL_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (VERCEL_URL ? `https://${VERCEL_URL}` : 'https://line-bot-lkh.vercel.app'),

  name: 'ลิ้มกวงฮวด',
  nameEn: 'LIM KWONG HUAT',
  legalName: 'ร้านวัสดุก่อสร้างลิ้มกวงฮวด',
  tagline: 'ครบเครื่องเรื่องวัสดุก่อสร้าง บริการครบวงจรที่ลิ้มกวงฮวด',

  address: {
    street: '134/5 ม.2 ต.บางลึก',
    locality: 'อำเภอเมืองชุมพร',
    region: 'ชุมพร',
    postalCode: '86000',
    country: 'TH',
    landmark: 'ใกล้โครงการโกดังชุมพร',
  },

  /** เบอร์หลัก — ใช้ในปุ่มโทรทุกจุดและใน JSON-LD */
  phone: { display: '081-125-1557', tel: '+66811251557' },
  /** เบอร์สำรอง — แสดงในส่วนติดต่อ */
  phoneAlt: { display: '063-546-3962', tel: '+66635463962' },

  lineUrl: 'https://lin.ee/ZxNq6vQ',
  mapsUrl: 'https://maps.app.goo.gl/Ci558GvXU5ucCpq77',

  hours: {
    label: 'จันทร์ – เสาร์',
    time: '8.00 – 17.00 น.',
    closed: 'อาทิตย์ ปิดทำการ',
    /** schema.org: Mo–Sa 08:00–17:00 */
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '17:00',
  },
} as const;

/** ที่อยู่แบบบรรทัดเดียวสำหรับแสดงผลและใช้เป็น query ของแผนที่ */
export const ADDRESS_LINE = `${SITE.address.street} ${SITE.address.locality} จ.${SITE.address.region} ${SITE.address.postalCode}`;

/**
 * แผนที่ฝังแบบไม่ต้องใช้ API key
 * ลิงก์สั้น maps.app.goo.gl ใส่ใน iframe ไม่ได้ (ปลายทางตั้ง X-Frame-Options)
 * ถ้าได้พิกัดจริงเมื่อไหร่ ให้เปลี่ยน q= เป็น "<lat>,<lng>" จะแม่นกว่าการค้นด้วยที่อยู่
 */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${SITE.name} ${ADDRESS_LINE}`
)}&hl=th&z=16&output=embed`;

export const absoluteUrl = (path: string) => new URL(path, SITE.url).toString();
