import { ADDRESS_LINE, MAP_EMBED_URL, SITE } from '@/lib/site';
import { CtaGroup } from './CtaGroup';
import { IconClock, IconPhone, IconPin } from './icons';

export function ContactMap() {
  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">ติดต่อร้าน</p>
          <h2 id="contact-title">แวะที่ร้าน หรือทักมาก่อนก็ได้</h2>
          <p>
            โทรเช็คของก่อนเดินทางได้ ถ้าของที่ต้องการมีไม่ครบ ทางร้านจะแจ้งให้ทราบล่วงหน้า
          </p>
        </div>

        <div className="contact">
          <div className="info">
            <div className="info__block">
              <IconPin />
              <div>
                <p className="info__label">ที่อยู่</p>
                <address>
                  {ADDRESS_LINE}
                  <br />
                  {SITE.address.landmark}
                </address>
              </div>
            </div>

            <div className="info__block">
              <IconClock />
              <div>
                <p className="info__label">เวลาทำการ</p>
                <dl className="hours">
                  <dt>{SITE.hours.label}</dt>
                  <dd>{SITE.hours.time}</dd>
                  <dt>อาทิตย์</dt>
                  <dd>ปิดทำการ</dd>
                </dl>
              </div>
            </div>

            <div className="info__block">
              <IconPhone />
              <div>
                <p className="info__label">โทรศัพท์</p>
                <div className="phones">
                  <a className="phone--main" href={`tel:${SITE.phone.tel}`}>
                    {SITE.phone.display}
                  </a>
                  <a className="phone--alt" href={`tel:${SITE.phoneAlt.tel}`}>
                    {SITE.phoneAlt.display} (สำรอง)
                  </a>
                </div>
              </div>
            </div>

            <CtaGroup />
          </div>

          <div>
            <div className="map">
              <iframe
                src={MAP_EMBED_URL}
                title={`แผนที่ร้าน${SITE.name} ${ADDRESS_LINE}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
