import type { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    /** @comment alternates ป้องกันเนื้อหาซ้ำ */
    alternates: {
      canonical: `/about`,
    },
  };
}

export { default } from '@/components/pages/about';
