import type { Metadata } from 'next';
import { CategoryGrid } from '@/components/CategoryGrid';
import { ContactMap } from '@/components/ContactMap';
import { Faq } from '@/components/Faq';
import { Gallery } from '@/components/Gallery';
import { Hero } from '@/components/Hero';
import { JsonLd } from '@/components/JsonLd';
import { Services } from '@/components/Services';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { StickyCta } from '@/components/StickyCta';
import { Story } from '@/components/Story';
import { TrustBar } from '@/components/TrustBar';
import { SITE } from '@/lib/site';

const DESCRIPTION =
  'ลิ้มกวงฮวด ร้านวัสดุก่อสร้างครบวงจร อ.เมือง จ.ชุมพร เปิดตั้งแต่ พ.ศ. 2503 จำหน่ายปูน เหล็ก อิฐ ฝ้า กระเบื้อง ประปา สุขภัณฑ์ ประตู สี เครื่องมือช่าง ปลีก–ส่ง ส่งถึงหน้างาน โทร 081-125-1557';

export const metadata: Metadata = {
  // ตั้งชื่อเต็มตรงนี้ ไม่พึ่ง title.template ของ layout
  // เพราะ template ใช้กับ segment ลูกเท่านั้น ส่วน page.tsx อยู่ segment เดียวกับ root layout
  title: `${SITE.name} · ร้านวัสดุก่อสร้างครบวงจร จ.ชุมพร | ปูน เหล็ก กระเบื้อง สี สุขภัณฑ์`,
  description: DESCRIPTION,
  keywords: [
    'วัสดุก่อสร้าง ชุมพร',
    'ร้านวัสดุก่อสร้าง ชุมพร',
    'ลิ้มกวงฮวด',
    'ปูนซีเมนต์ ชุมพร',
    'เหล็กเส้น ชุมพร',
    'ท่อ PVC ชุมพร',
    'สีทาบ้าน ชุมพร',
    'อุปกรณ์ประปา ไฟฟ้า ชุมพร',
    'เครื่องมือช่าง ชุมพร',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'th_TH',
    url: '/',
    siteName: `${SITE.name} (${SITE.nameEn})`,
    title: `${SITE.name} · ร้านวัสดุก่อสร้างครบวงจร จ.ชุมพร`,
    description: DESCRIPTION,
    images: [
      {
        url: '/images/og.jpg',
        width: 1200,
        height: 630,
        alt: 'รถบรรทุกปูนซีเมนต์เต็มคันที่โกดังของร้านวัสดุก่อสร้างลิ้มกวงฮวด จังหวัดชุมพร',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} · ร้านวัสดุก่อสร้างครบวงจร จ.ชุมพร`,
    description: DESCRIPTION,
    images: ['/images/og.jpg'],
  },
};

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        ข้ามไปเนื้อหาหลัก
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <TrustBar />
        <CategoryGrid />
        <Story />
        <Services />
        <Gallery />
        <ContactMap />
        <Faq />
      </main>

      <SiteFooter />
      <StickyCta />
      <JsonLd />
    </>
  );
}
