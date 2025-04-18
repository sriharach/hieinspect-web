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
import VconsoleProvider from '@/contexts/vconsoleProvider';
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
        <VconsoleProvider>
          <ToastProviders>
            <ReactQueryProvider>
              <Suspense>
                <Layout>{children}</Layout>
              </Suspense>
            </ReactQueryProvider>
          </ToastProviders>
        </VconsoleProvider>
      </body>
    </html>
  );
}
