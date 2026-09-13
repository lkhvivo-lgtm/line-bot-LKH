import { BRANDS, CATEGORIES } from '@/lib/catalog';
import { CATEGORY_ICONS, IconBox } from './icons';

export function CategoryGrid() {
  return (
    <section id="products" className="section section--soft" aria-labelledby="products-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">หมวดสินค้า</p>
          <h2 id="products-title">สินค้าครบทุกหมวด ซื้อจบในที่เดียว</h2>
          <p>
            ไม่ต้องวิ่งหลายร้าน ตั้งแต่วัสดุงานโครงสร้างไปจนถึงของเก็บงานชิ้นสุดท้าย
            หาได้ที่ลิ้มกวงฮวด หากไม่แน่ใจว่าต้องใช้อะไรบ้าง ทักมาสอบถามได้
          </p>
        </div>

        <ul className="cards">
          {CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.id] ?? IconBox;
            return (
              <li key={cat.id} className="card">
                <div className="card__body">
                  <span className="card__icon">
                    <Icon />
                  </span>
                  <h3>{cat.name}</h3>
                  <p className="card__blurb">{cat.blurb}</p>
                  <ul className="card__items">
                    {cat.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="section__head section__head--sub">
          <h3>แบรนด์ที่มีจำหน่าย</h3>
        </div>
        <ul className="brands">
          {BRANDS.map((brand) => (
            <li key={brand}>{brand}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
