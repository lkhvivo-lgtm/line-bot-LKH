import Image from 'next/image';
import { GALLERY } from '@/lib/catalog';

export function Gallery() {
  return (
    <section id="gallery" className="section section--soft" aria-labelledby="gallery-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">ภายในร้าน</p>
          <h2 id="gallery-title">ของมีจริง มีสต็อก พร้อมให้หยิบ</h2>
          <p>
            รูปทั้งหมดถ่ายจากหน้าร้านและโกดังของเราเอง ไม่ใช่ภาพประกอบ
          </p>
        </div>

        <div className="gallery">
          {GALLERY.map((item) => (
            <figure key={item.src + item.caption}>
              <div className="gallery__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
