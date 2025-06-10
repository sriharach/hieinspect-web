// libs
import { Suspense } from 'react';

// components
import Layout from '@/components/layouts/Layout';
import ReactQueryProvider from '@/contexts/reactQueryProvider';
import ToastProviders from '@/contexts/toastProvider';

import type { Metadata } from 'next';
import '../styles/globals.scss';

// font
import { Kanit } from 'next/font/google';
const kanitFont = Kanit({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.CLIENT_WEB}`),
  title: 'Wisdom construction assistants ตรวจบ้าน - คอนโดโดยวิศวกรมืออาชีพ',

  /** @comment description	คำอธิบาย SEO */
  description: 'บริการตรวจบ้านโดยวิศวกรมืออาชีพ เพื่อความมั่นใจในการเลือกซื้อบ้านที่ปลอดภัยและมั่นคง',
  applicationName: 'Wisdom construction assistants ตรวจบ้าน - คอนโดโดยวิศวกรมืออาชีพ',
  icons: `${process.env.CLIENT_WEB}/wisdom_logo_.webp`,

  /** @comment alternates ป้องกันเนื้อหาซ้ำ */
  alternates: {
    canonical: `/`,
  },
  openGraph: {
    type: 'website',
    url: process.env.CLIENT_WEB,
    title: 'Wisdom construction assistants ตรวจบ้าน - คอนโดโดยวิศวกรมืออาชีพ',
    description: 'บริการตรวจบ้านโดยวิศวกรมืออาชีพ เพื่อความมั่นใจในการเลือกซื้อบ้านที่ปลอดภัยและมั่นคง',
    siteName: 'wisdom-construction',
    images: [{ url: `/images/wisdom_landing_page.webp` }],
  },

   /** @comment robots บอกให้จัดทำดัชนี */
  robots: {
    index: true,
    follow: true,
  },
  category: 'building inspection',
  keywords: ['การตรวจบ้าน', 'ตรวจบ้าน'],
  creator: 'Sriharach Promruksa',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${kanitFont.className}`}>
        <ToastProviders>
          <ReactQueryProvider>
            <Suspense>
              <Layout>{children}</Layout>
            </Suspense>
          </ReactQueryProvider>
        </ToastProviders>
      </body>
    </html>
  );
}
