import { ADDRESS_LINE, MAP_EMBED_URL, SITE } from '@/lib/site';
import { CtaGroup } from './CtaGroup';
import { IconChat, IconClock, IconPhone, IconPin } from './icons';

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
                <ul className="phones">
                  {SITE.phones.map((p, i) => (
                    <li key={p.tel}>
                      <a className={i === 0 ? 'phone--main' : 'phone--alt'} href={`tel:${p.tel}`}>
                        {p.display}
                        <span className="phones__dept">{p.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="info__block">
              <IconChat />
              <div>
                <p className="info__label">ช่องทางออนไลน์</p>
                <ul className="phones">
                  <li>
                    <a
                      className="phone--alt"
                      href={SITE.lineUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINE {SITE.lineId}
                      <span className="sr-only">(เปิดในแท็บใหม่)</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="phone--alt"
                      href={SITE.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook: lkhchumphon
                      <span className="sr-only">(เปิดในแท็บใหม่)</span>
                    </a>
                  </li>
                </ul>
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
