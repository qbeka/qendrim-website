import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import { SITE } from '@/lib/siteData';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Selected projects and builds.',
  alternates: {
    canonical: `${SITE.url}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main>
        <Projects />
      </main>
    </>
  );
}

