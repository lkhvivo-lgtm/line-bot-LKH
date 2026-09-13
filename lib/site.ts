/**
 * ข้อมูลร้าน (NAP) — แหล่งข้อมูลเดียวของทั้งเว็บไซต์
 * แก้ที่นี่ที่เดียว หน้าเว็บ / metadata / JSON-LD / sitemap อัปเดตตามทั้งหมด
 *
 * ที่มาของข้อมูล: Company Profile ของ หจก.ลิ้มกวงฮวด
 */

const VERCEL_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE = {
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (VERCEL_URL ? `https://${VERCEL_URL}` : 'https://line-bot-lkh.vercel.app'),

  name: 'ลิ้มกวงฮวด',
  nameEn: 'LIM KUANG HUAD',
  legalName: 'ห้างหุ้นส่วนจำกัด ลิ้มกวงฮวด',
  legalNameEn: 'LIMKUANGHUAD .,LTD',
  tagline: 'ครบเครื่องเรื่องวัสดุก่อสร้าง บริการครบวงจรที่ลิ้มกวงฮวด',

  /** ก่อตั้ง 14 เมษายน พ.ศ. 2503 โดยนายแปะชอ แซ่ลิ้ม */
  founded: { year: 1960, thaiYear: 2503, month: 4, day: 14 },

  address: {
    street: '134/5 ม.2 ต.บางลึก',
    locality: 'อำเภอเมืองชุมพร',
    region: 'ชุมพร',
    postalCode: '86000',
    country: 'TH',
    /** จุดสังเกตที่เจ้าของร้านให้มา ไม่ได้อยู่ใน Company Profile */
    landmark: 'ใกล้โครงการโกดังชุมพร',
  },

  /** เบอร์หลักที่ใช้ในปุ่มโทรทุกจุดและใน JSON-LD */
  phone: { display: '081-125-1557', tel: '+66811251557' },

  /** เบอร์ทั้งหมดพร้อมชื่อแผนก ตามที่ระบุใน Company Profile */
  phones: [
    { label: 'ฝ่ายขาย 1', display: '081-125-1557', tel: '+66811251557' },
    { label: 'ฝ่ายขาย 2', display: '081-676-5550', tel: '+66816765550' },
    { label: 'ฝ่ายขาย 3', display: '063-546-3962', tel: '+66635463962' },
    { label: 'สำนักงาน', display: '077-658-659', tel: '+6677658659' },
  ],

  lineUrl: 'https://lin.ee/ZxNq6vQ',
  lineId: '@LKH.2503',
  facebookUrl: 'https://www.facebook.com/lkhchumphon',
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

/** วันก่อตั้งในรูปแบบ ISO สำหรับ schema.org `foundingDate` */
export const FOUNDING_DATE = `${SITE.founded.year}-${String(SITE.founded.month).padStart(2, '0')}-${String(SITE.founded.day).padStart(2, '0')}`;

/**
 * จำนวนปีที่เปิดกิจการ คำนวณตอน build ทุกครั้ง เลขจึงไม่ค้าง
 * ปัดลงเสมอ และยังไม่นับปีที่ยังไม่ถึงวันครบรอบ
 */
export function yearsInBusiness(now: Date = new Date()): number {
  const { year, month, day } = SITE.founded;
  let years = now.getFullYear() - year;
  const anniversaryPassed =
    now.getMonth() + 1 > month || (now.getMonth() + 1 === month && now.getDate() >= day);
  if (!anniversaryPassed) years -= 1;
  return years;
}

/**
 * แผนที่ฝังแบบไม่ต้องใช้ API key
 * ลิงก์สั้น maps.app.goo.gl ใส่ใน iframe ไม่ได้ (ปลายทางตั้ง X-Frame-Options)
 * ถ้าได้พิกัดจริงเมื่อไหร่ ให้เปลี่ยน q= เป็น "<lat>,<lng>" จะแม่นกว่าการค้นด้วยที่อยู่
 */
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
  `${SITE.name} ${ADDRESS_LINE}`
)}&hl=th&z=16&output=embed`;

export const absoluteUrl = (path: string) => new URL(path, SITE.url).toString();
