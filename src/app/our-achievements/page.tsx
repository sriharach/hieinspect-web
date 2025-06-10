import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    /** @comment alternates ป้องกันเนื้อหาซ้ำ */
    alternates: {
      canonical: `/our-achievements`,
    },
  };
}

export { default } from '@/components/pages/our-achievements/ourAchievements';
