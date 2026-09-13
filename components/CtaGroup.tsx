import { SITE } from '@/lib/site';
import { IconChat, IconPhone, IconPin } from './icons';

const NEW_TAB = 'เปิดในแท็บใหม่';

/** ปุ่มติดต่อ 3 ทาง — ใช้ทั้งใน hero และส่วนติดต่อ */
export function CtaGroup({ showMap = true }: { showMap?: boolean }) {
  return (
    <div className="cta-group">
      <a
        className="btn btn--line"
        href={SITE.lineUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconChat className="btn__icon" />
        แชทสอบถามทาง LINE
        <span className="sr-only">({NEW_TAB})</span>
      </a>

      <a className="btn btn--call" href={`tel:${SITE.phone.tel}`}>
        <IconPhone className="btn__icon" />
        โทร {SITE.phone.display}
      </a>

      {showMap && (
        <a
          className="btn btn--map"
          href={SITE.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconPin className="btn__icon" />
          นำทางไปร้าน
          <span className="sr-only">({NEW_TAB})</span>
        </a>
      )}
    </div>
  );
}
