import { HISTORY } from '@/lib/catalog';
import { SITE, yearsInBusiness } from '@/lib/site';

export function Story() {
  const years = yearsInBusiness();

  return (
    <section id="story" className="section" aria-labelledby="story-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">ประวัติร้าน</p>
          <h2 id="story-title">อยู่คู่ชาวชุมพรตั้งแต่ พ.ศ. {SITE.founded.thaiYear}</h2>
          <p>
            จากร้านขายข้าวสารอาหารแห้งเมื่อกว่า {years} ปีก่อน
            สู่ร้านวัสดุก่อสร้างที่ผู้รับเหมาและเจ้าของบ้านในชุมพรใช้บริการต่อเนื่องมาหลายรุ่น
          </p>
        </div>

        {/* ลำดับเวลาจริง ตัวเลขปีจึงเป็นข้อมูล ไม่ใช่ของตกแต่ง */}
        <ol className="timeline">
          {HISTORY.map((m) => (
            <li key={m.year} className="timeline__item">
              <p className="timeline__year">{m.year}</p>
              <h3 className="timeline__title">{m.title}</h3>
              <p className="timeline__body">{m.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
