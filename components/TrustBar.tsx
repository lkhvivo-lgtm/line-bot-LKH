import { IconChat, IconDocument, IconTag, IconTruck } from './icons';

const POINTS = [
  { Icon: IconTruck, label: 'จัดส่งถึงหน้างาน' },
  { Icon: IconTag, label: 'ราคาผู้รับเหมา ปลีก–ส่ง' },
  { Icon: IconDocument, label: 'ออกใบกำกับภาษี–ใบเสนอราคาได้' },
  { Icon: IconChat, label: 'ปรึกษาเรื่องวัสดุฟรีทาง LINE' },
];

export function TrustBar() {
  return (
    <section className="trust" aria-label="จุดเด่นของร้าน">
      <div className="container">
        <ul className="trust__grid">
          {POINTS.map(({ Icon, label }) => (
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
