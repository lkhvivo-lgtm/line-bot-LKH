import Image from 'next/image';
import { ADDRESS_LINE, SITE } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <Image src="/images/logo-lkh.jpg" alt="" width={44} height={44} />
              <span>
                <strong>{SITE.name}</strong>
                <span className="tracked">{SITE.nameEn}</span>
              </span>
            </div>
            <p>{SITE.tagline}</p>
          </div>

          <div>
            <h3>ที่อยู่</h3>
            <address>
              {ADDRESS_LINE}
              <br />
              {SITE.address.landmark}
            </address>
          </div>

          <div>
            <h3>ติดต่อ</h3>
            <div className="footer__links">
              <a href={`tel:${SITE.phone.tel}`}>โทร {SITE.phone.display}</a>
              <a href={`tel:${SITE.phoneAlt.tel}`}>โทร {SITE.phoneAlt.display}</a>
              <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer">
                แชททาง LINE
                <span className="sr-only">(เปิดในแท็บใหม่)</span>
              </a>
            </div>
          </div>

          <div>
            <h3>เวลาทำการ</h3>
            <p>
              {SITE.hours.label} {SITE.hours.time}
              <br />
              {SITE.hours.closed}
            </p>
          </div>
        </div>

        <p className="footer__bottom">
          © {new Date().getFullYear()} {SITE.legalName} · ร้านวัสดุก่อสร้างครบวงจร จังหวัดชุมพร
        </p>
      </div>
    </footer>
  );
}
