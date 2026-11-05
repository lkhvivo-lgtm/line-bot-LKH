import { SITE, yearsInBusiness } from '@/lib/site';
import { IconDocument, IconHeritage, IconTag, IconTruck } from './icons';

export function TrustBar() {
  const points = [
    { Icon: IconHeritage, label: `เปิดมากว่า ${yearsInBusiness()} ปี ตั้งแต่ พ.ศ. ${SITE.founded.thaiYear}` },
    { Icon: IconTruck, label: 'จัดส่งถึงหน้างาน' },
    { Icon: IconTag, label: 'ราคาผู้รับเหมา ปลีก–ส่ง' },
    { Icon: IconDocument, label: 'ออกใบกำกับภาษี–ใบเสนอราคาได้' },
  ];

  return (
    <section className="trust" aria-label="จุดเด่นของร้าน">
      <div className="container">
        <ul className="trust__grid">
          {points.map(({ Icon, label }) => (
            <li key={label} className="trust__item">
              <Icon />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
