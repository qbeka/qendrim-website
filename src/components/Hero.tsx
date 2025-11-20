'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { Github, Linkedin, Mail, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const { theme } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/qbeka', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/qendrimbeka/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:beka.qendrim1@gmail.com', label: 'Email' },
    { icon: Calendar, href: 'https://calendly.com/beka-qendrim1', label: 'Schedule' },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-6 lg:px-8 py-24 ${
        theme === '8bit' ? 'bg-ink bit-8-bg' : 'bg-parchment'
      }`}
    >
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className={`relative ${theme === '8bit' ? 'bit-8' : ''}`}>
              <div
                className={`rounded-full overflow-hidden border-4 ${
                  theme === '8bit' ? 'border-amber bit-8-border' : 'border-burgundy/30'
                } shadow-lg w-[400px] h-[400px]`}
              >
                <Image
                  src={theme === '8bit' ? '/8bitheadshot-circular.png' : '/headshot-circular.png'}
                  alt="Qendrim Beka"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              
              {/* Decorative corners - normal mode only */}
              {theme !== '8bit' && (
                <>
                  <div className="absolute -top-3 -right-3 w-8 h-8 border-t-4 border-r-4 border-gold"></div>
                  <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-4 border-l-4 border-gold"></div>
                </>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            {/* Ornamental line */}
            {theme !== '8bit' && (
              <div className="flex items-center space-x-2 text-gold">
                <div className="w-12 h-px bg-current"></div>
                <div className="w-1 h-1 rounded-full bg-current"></div>
                <div className="w-1 h-1 rounded-full bg-current"></div>
                <div className="w-1 h-1 rounded-full bg-current"></div>
              </div>
            )}

            <div>
              <h1
                className={`text-5xl md:text-6xl font-bold mb-4 ${
                  theme === '8bit' ? 'text-amber bit-8-text' : 'text-burgundy font-serif'
                }`}
              >
                {theme === '8bit' ? '>> QENDRIM BEKA' : 'Qendrim Beka'}
              </h1>
              
              <p
                className={`text-xl md:text-2xl italic mb-8 ${
                  theme === '8bit' ? 'text-cream bit-8-small' : 'text-charcoal font-serif'
                }`}
              >
                {theme === '8bit' ? '[COMPETITOR | BUILDER]' : 'Competitor and Builder'}
              </p>
            </div>

            <div
              className={`p-8 rounded border-l-4 ${
                theme === '8bit'
                  ? 'bg-charcoal border-amber bit-8-border text-cream bit-8-small'
                  : 'bg-notepad border-burgundy text-ink shadow-sm'
              }`}
            >
              <p className={theme === '8bit' ? 'leading-relaxed' : 'font-serif text-lg leading-relaxed'}>
                Hi! I'm Qendrim, a 3rd Year Computing Science student at the{' '}
                <span className={theme === '8bit' ? 'text-amber' : 'text-burgundy font-semibold'}>
                  University of Alberta
                </span>
                . I'm a competitor and builder who's passionate about creating impactful products. I've built Philo (25K+ users, $24K ARR), won hackathons, and am currently working at NAT on multi-agent LLM research while leading Index Competitive.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-2">
              {['English', 'German', 'Albanian'].map((lang) => (
                <span
                  key={lang}
                  className={`px-4 py-2 rounded text-sm uppercase tracking-wider border ${
                    theme === '8bit'
                      ? 'bg-burgundy text-amber border-amber bit-8-small'
                      : 'bg-notepad text-burgundy border-burgundy/40'
                  }`}
                >
                  {lang}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded border transition-colors ${
                    theme === '8bit'
                      ? 'border-amber text-amber hover:bg-amber hover:text-ink bit-8-border'
                      : 'border-burgundy/40 text-burgundy hover:bg-burgundy hover:text-parchment'
                  }`}
                  aria-label={label}
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a href="#contact">
                <div
                  className={`inline-block px-8 py-4 rounded text-lg uppercase tracking-widest font-semibold transition-colors cursor-pointer ${
                    theme === '8bit'
                      ? 'bg-amber text-ink hover:bg-gold bit-8-border bit-8-small'
                      : 'bg-burgundy text-parchment hover:bg-leather'
                  }`}
                >
                  {theme === '8bit' ? '>>> GET IN TOUCH <<<' : 'Get In Touch'}
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
