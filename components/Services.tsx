import Image from 'next/image';
import { SERVICES } from '@/lib/catalog';

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <div className="section__head">
          <p className="eyebrow">บริการของเรา</p>
          <h2 id="services-title">มากกว่าการขายวัสดุ</h2>
          <p>
            ตั้งแต่ช่วยเลือกของให้ตรงงาน จัดราคาให้ผู้รับเหมา ออกเอกสารให้ครบ
            ไปจนถึงส่งของถึงไซต์งาน
          </p>
        </div>

        <ul className="services">
          {SERVICES.map((service, i) => (
            <li key={service.id} className="service">
              {service.image && (
                <div className="service__media">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="service__body">
                <span className="service__num tracked">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
