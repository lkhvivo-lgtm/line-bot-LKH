import {
  GUTTER,
  GUTTER_BENEFITS,
  GUTTER_COMPARE,
  GUTTER_COMPARE_ATTRS,
  GUTTER_OVERFLOW_CAUSES,
  GUTTER_PARTS,
} from '@/lib/catalog';
import { SITE } from '@/lib/site';
import { IconChat, IconPhone } from './icons';

export function Gutter() {
  return (
    <section id="gutter" className="section section--soft" aria-labelledby="gutter-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">สินค้าแนะนำ</p>
          <h2 id="gutter-title">รางน้ำฝนไวนิล {GUTTER.brand}</h2>
          <p>
            ผลิตจากวัสดุ {GUTTER.material} ปากกว้าง จุน้ำเยอะ มีความยาว {GUTTER.lengths}
            พร้อมอุปกรณ์ครบชุดสำหรับติดตั้ง
          </p>
        </div>

        <ul className="gutter__benefits">
          {GUTTER_BENEFITS.map((b) => (
            <li key={b.title}>
              <h3>{b.title}</h3>
              <p>{b.body}</p>
            </li>
          ))}
        </ul>

        <h3 className="gutter__subhead">เทียบกับรางน้ำวัสดุอื่น</h3>
        <div className="table-scroll">
          <table className="compare">
            <caption className="sr-only">
              ตารางเปรียบเทียบคุณสมบัติของรางน้ำฝนแต่ละวัสดุ
            </caption>
            <thead>
              <tr>
                <th scope="col">วัสดุ</th>
                {GUTTER_COMPARE_ATTRS.map((a) => (
                  <th key={a} scope="col">
                    {a}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {GUTTER_COMPARE.map((row) => (
                <tr key={row.material} className={row.highlight ? 'is-best' : undefined}>
                  <th scope="row">{row.material}</th>
                  {row.has.map((ok, i) => (
                    // data-label ใช้เป็นหัวข้อกำกับตอนตารางพับเป็นการ์ดบนมือถือ
                    <td key={GUTTER_COMPARE_ATTRS[i]} data-label={GUTTER_COMPARE_ATTRS[i]}>
                      {/* เครื่องหมายเป็นภาพ ข้อความจริงไว้ให้ screen reader อ่าน */}
                      <span aria-hidden="true" className={ok ? 'tick' : 'tick tick--no'}>
                        {ok ? '✓' : '—'}
                      </span>
                      <span className="sr-only">{ok ? 'ใช่' : 'ไม่ใช่'}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="gutter__note">ข้อมูลเปรียบเทียบคุณสมบัติวัสดุจากผู้ผลิต</p>

        <div className="gutter__split">
          <div>
            <h3 className="gutter__subhead">ชุดรางน้ำฝนครบชุด พร้อมติดตั้ง</h3>
            <ul className="gutter__parts">
              {GUTTER_PARTS.map((part) => (
                <li key={part}>{part}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="gutter__subhead">น้ำฝนล้นราง เกิดจากอะไร</h3>
            <ol className="gutter__causes">
              {GUTTER_OVERFLOW_CAUSES.map((cause) => (
                <li key={cause}>{cause}</li>
              ))}
            </ol>
            <p className="gutter__note">
              ไม่แน่ใจว่าบ้านควรใช้รางขนาดไหน หรือต้องใช้กี่เมตร
              ส่งรูปหน้างานมาทาง LINE ให้ทางร้านช่วยประเมินได้
            </p>
            <div className="cta-group">
              <a
                className="btn btn--line"
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconChat className="btn__icon" />
                ปรึกษาเรื่องรางน้ำทาง LINE
                <span className="sr-only">(เปิดในแท็บใหม่)</span>
              </a>
              <a className="btn btn--call" href={`tel:${SITE.phone.tel}`}>
                <IconPhone className="btn__icon" />
                โทร {SITE.phone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
