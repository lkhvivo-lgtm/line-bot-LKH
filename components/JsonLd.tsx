import { CATEGORIES, FAQS } from '@/lib/catalog';
import { ADDRESS_LINE, FOUNDING_DATE, SITE, absoluteUrl } from '@/lib/site';

/**
 * escape ตัวอักษรที่ทำให้หลุดออกจาก <script> ได้
 * ข้อมูลทั้งหมดเป็นค่าคงที่ในโค้ด แต่ทำให้ถูกต้องไว้กันพลาดในอนาคต
 */
function serialize(schema: unknown): string {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

const storeSchema = {
  '@context': 'https://schema.org',
  '@type': ['HardwareStore', 'LocalBusiness'],
  '@id': absoluteUrl('/#store'),
  name: SITE.name,
  alternateName: [SITE.nameEn, SITE.legalNameEn],
  legalName: SITE.legalName,
  slogan: SITE.tagline,
  description:
    'ร้านวัสดุก่อสร้างครบวงจรในจังหวัดชุมพร ก่อตั้ง พ.ศ. 2503 จำหน่ายปูนซิเมนต์ เหล็กโครงสร้าง อิฐ ฝ้าเพดาน กระเบื้อง ท่อพีวีซี สุขภัณฑ์ ประตู–หน้าต่าง สีและเคมีภัณฑ์ และเครื่องมือช่าง ทั้งปลีกและส่ง พร้อมบริการจัดส่งถึงหน้างาน',
  foundingDate: FOUNDING_DATE,
  url: absoluteUrl('/'),
  logo: absoluteUrl('/images/logo-lkh.jpg'),
  image: [
    absoluteUrl('/images/truck-cement-1.jpg'),
    absoluteUrl('/images/paint-aisle.jpg'),
    absoluteUrl('/images/plumbing-pvc-scg.jpg'),
  ],
  telephone: SITE.phone.tel,
  contactPoint: SITE.phones.map((p) => ({
    '@type': 'ContactPoint',
    telephone: p.tel,
    name: p.label,
    contactType: p.label.startsWith('ฝ่ายขาย') ? 'sales' : 'customer service',
    availableLanguage: 'th',
  })),
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  // ยังไม่ใส่ geo เพราะยังไม่มีพิกัดที่ยืนยันแล้ว
  // พิกัดผิดทำให้ผลค้นหาในพื้นที่แย่กว่าการไม่ใส่
  hasMap: SITE.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: SITE.hours.days,
      opens: SITE.hours.opens,
      closes: SITE.hours.closes,
    },
  ],
  areaServed: [{ '@type': 'AdministrativeArea', name: 'จังหวัดชุมพร' }],
  sameAs: [SITE.facebookUrl, SITE.lineUrl],
  priceRange: '฿฿',
  currenciesAccepted: 'THB',
  paymentAccepted: 'เงินสด, โอนเงิน',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'หมวดสินค้าวัสดุก่อสร้าง',
    itemListElement: CATEGORIES.map((cat) => ({
      '@type': 'OfferCatalog',
      name: cat.name,
      itemListElement: cat.items.map((item) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: item },
      })),
    })),
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': absoluteUrl('/#faq'),
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': absoluteUrl('/#website'),
  url: absoluteUrl('/'),
  name: `${SITE.name} (${SITE.nameEn})`,
  inLanguage: 'th-TH',
  publisher: { '@id': absoluteUrl('/#store') },
  about: ADDRESS_LINE,
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(storeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serialize(websiteSchema) }}
      />
    </>
  );
}
