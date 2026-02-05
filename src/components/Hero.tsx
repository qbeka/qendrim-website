import Image from 'next/image';
import { ABOUT, SOCIALS } from '@/lib/siteData';

export default function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-gray-900">Portfolio</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-gray-900">{ABOUT.heading}</h2>
          {ABOUT.paragraphs.map((p) => (
            <p key={p} className="text-gray-700 mb-4">
              {p}
            </p>
          ))}

          <a
            href={SOCIALS.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded text-sm hover:bg-gray-50"
          >
            Book a call
          </a>
        </div>

        <div className="md:flex md:justify-end">
          <div className="border border-gray-200 rounded-md overflow-hidden w-full max-w-[320px]">
            <Image
              src={ABOUT.headshot.src}
              alt={ABOUT.headshot.alt}
              width={ABOUT.headshot.width}
              height={ABOUT.headshot.height}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
