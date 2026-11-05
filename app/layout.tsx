import type { Metadata, Viewport } from 'next';
import { SITE } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · ร้านวัสดุก่อสร้างครบวงจร จ.ชุมพร`,
    template: `%s | ${SITE.name}`,
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: '#003087',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
