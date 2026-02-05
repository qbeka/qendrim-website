import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ExperienceSection from '@/components/ExperienceSection';
import { SITE } from '@/lib/siteData';

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Work experience, education, and skills.',
  alternates: {
    canonical: `${SITE.url}/experience`,
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Navigation />
      <main>
        <ExperienceSection />
      </main>
    </>
  );
}

