import type { Metadata } from 'next';
import './globals.css';
import { SITE, SOCIALS } from '@/lib/siteData';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
  description: SITE.description,
  alternates: {
    canonical: SITE.url,
  },
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.title,
    images: [
      {
        url: '/headshot.jpg',
        width: 400,
        height: 400,
        alt: 'Headshot of Qendrim Beka',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    images: ['/headshot.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
    email: `mailto:${SOCIALS.email}`,
    sameAs: [SOCIALS.github, SOCIALS.linkedin],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
