import Image from 'next/image';
import { ADDRESS_LINE, SITE } from '@/lib/site';
import { CtaGroup } from './CtaGroup';
import { IconClock, IconPin } from './icons';

export function Hero() {
  return (
    <section className="hero on-navy" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div>
          <p className="hero__tagline">{SITE.tagline}</p>

          {/* แยกเป็นสองบรรทัดเอง ไม่ปล่อยให้เบราว์เซอร์ตัด
              เพราะมันตัด "ครบวงจร" กลางคำประสมแล้วอ่านสะดุด */}
          <h1 id="hero-title">
            <span className="hero__h1-line">ร้านวัสดุก่อสร้างครบวงจร</span>
            <span className="hero__h1-line">จังหวัดชุมพร</span>
          </h1>

          <p className="hero__lead">
            {SITE.name} จำหน่ายวัสดุก่อสร้างครบทุกหมวด ตั้งแต่งานโครงสร้าง อิฐ หิน ปูน ทราย เหล็ก
            ไปจนถึงสี ฝ้า ผนัง ไฟฟ้า ประปา ฮาร์ดแวร์ และเครื่องมือช่าง
            ซื้อได้ทั้งปลีกและส่ง พร้อมบริการจัดส่งถึงหน้างาน จบครบในที่เดียว
          </p>

          <CtaGroup />

          <div className="hero__meta">
            <p>
              <IconClock />
              <span>
                {SITE.hours.label} {SITE.hours.time}
              </span>
            </p>
            <p>
              <IconPin />
              <span>{ADDRESS_LINE}</span>
            </p>
          </div>
        </div>

        <div className="hero__figure">
          <Image
            src="/images/truck-cement-1.jpg"
            alt="รถพ่วงบรรทุกปูนซีเมนต์ถุงเต็มคันจอดเตรียมออกจัดส่งจากโกดังของร้านลิ้มกวงฮวด"
            fill
            sizes="(max-width: 899px) 100vw, 520px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
