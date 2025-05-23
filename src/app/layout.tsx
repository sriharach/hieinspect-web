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
  title: 'Wisdom Construction',
  description: 'ออนไซต์ รับตรวจบ้าน Wisdom Construction - Website Inspection Report',
  applicationName: 'Wisdom Construction',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
