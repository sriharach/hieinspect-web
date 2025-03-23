import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import '../styles/globals.scss';
import Layout from '@/components/layouts/Layout';

const kanitFont = Kanit({
  subsets: ['latin', 'thai'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'HIEinspect',
  description: 'ออนไซต์ รับตรวจบ้าน HIEinspect',
  applicationName: 'HIEinspect',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanitFont.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
