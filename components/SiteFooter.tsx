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
              {SITE.phones.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`}>
                  {p.display} · {p.label}
                </a>
              ))}
              <a href={SITE.lineUrl} target="_blank" rel="noopener noreferrer">
                LINE {SITE.lineId}
                <span className="sr-only">(เปิดในแท็บใหม่)</span>
              </a>
              <a href={SITE.facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook: lkhchumphon
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
          © {new Date().getFullYear()} {SITE.legalName} ({SITE.legalNameEn}) ·
          ร้านวัสดุก่อสร้างครบวงจร จังหวัดชุมพร · ก่อตั้ง พ.ศ. {SITE.founded.thaiYear}
        </p>
      </div>
    </footer>
  );
}
