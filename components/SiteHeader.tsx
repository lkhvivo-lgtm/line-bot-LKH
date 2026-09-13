import Image from 'next/image';
import { SITE } from '@/lib/site';
import { IconPhone } from './icons';

const NAV = [
  { href: '#products', label: 'หมวดสินค้า' },
  { href: '#services', label: 'บริการ' },
  { href: '#gallery', label: 'ภายในร้าน' },
  { href: '#contact', label: 'ติดต่อ' },
];

export function SiteHeader() {
  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="/" aria-label={`${SITE.name} — กลับหน้าแรก`}>
          <Image
            className="brand__logo"
            src="/images/logo-lkh.jpg"
            alt=""
            width={42}
            height={42}
            priority
          />
          <span>
            <span className="brand__name">{SITE.name}</span>
            <span className="brand__en tracked">{SITE.nameEn}</span>
          </span>
        </a>

        <nav className="nav" aria-label="เมนูหลัก">
          {NAV.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--call header__call" href={`tel:${SITE.phone.tel}`}>
          <IconPhone className="btn__icon" />
          {SITE.phone.display}
        </a>
      </div>
    </header>
  );
}
