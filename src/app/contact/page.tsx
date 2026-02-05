import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { SITE } from '@/lib/siteData';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact Qendrim Beka.',
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <Contact />
      </main>
    </>
  );
}

