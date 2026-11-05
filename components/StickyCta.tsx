import { SITE } from '@/lib/site';
import { IconChat, IconPhone } from './icons';

/**
 * แถบติดต่อล่างจอสำหรับมือถือ — CSS ล้วน ไม่ใช้ JS
 * ตั้งใจให้แสดงตลอดเวลา ไม่ทำแบบ "โผล่หลังเลื่อนพ้น hero"
 * เพราะต้องพึ่ง scroll-driven animation ที่ Safari ยังไม่รองรับ
 */
export function StickyCta() {
  return (
    <div className="sticky-cta">
      <a
        className="sticky-cta__line"
        href={SITE.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconChat />
        แชท LINE
        <span className="sr-only">(เปิดในแท็บใหม่)</span>
      </a>
      <a className="sticky-cta__call" href={`tel:${SITE.phone.tel}`}>
        <IconPhone />
        โทรหาร้าน
      </a>
    </div>
  );
}
