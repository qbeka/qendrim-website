'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Github, Linkedin, Mail, Calendar, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/qbeka', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/qendrimbeka/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:beka.qendrim1@gmail.com', label: 'Email' },
    { icon: Calendar, href: 'https://calendly.com/beka-qendrim1', label: 'Schedule' },
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Involvement', href: '/involvement' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <footer
      className={`py-12 px-4 sm:px-6 lg:px-8 border-t-2 ${
        theme === '8bit'
          ? 'bg-charcoal border-amber bit-8-bg'
          : 'bg-cream border-stone/20'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <motion.h3
              className={`text-2xl font-serif font-bold mb-4 ${
                theme === '8bit' ? 'text-amber bit-8-text' : 'text-burgundy'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {theme === '8bit' ? '[ Q.B. ]' : 'Qendrim Beka'}
            </motion.h3>
            <p
              className={`font-serif italic mb-4 ${
                theme === '8bit' ? 'text-cream' : 'text-charcoal'
              }`}
            >
              {theme === '8bit'
                ? '[AI_ENTHUSIAST | COMPETITOR | BUILDER]'
                : 'AI enthusiast, Competitor, and Builder'}
            </p>
            <p
              className={`text-sm ${
                theme === '8bit' ? 'text-cream' : 'text-stone'
              }`}
            >
              Building innovative solutions and competing to win.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-lg font-serif font-semibold mb-4 uppercase tracking-wide ${
                theme === '8bit' ? 'text-amber' : 'text-burgundy'
              }`}
            >
              {theme === '8bit' ? '[ QUICK LINKS ]' : 'Quick Links'}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <motion.div
                      className={`text-sm transition-colors cursor-pointer ${
                        theme === '8bit'
                          ? 'text-cream hover:text-amber bit-8-small'
                          : 'text-charcoal hover:text-burgundy'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {theme === '8bit' ? `> ${link.label}` : link.label}
                    </motion.div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4
              className={`text-lg font-serif font-semibold mb-4 uppercase tracking-wide ${
                theme === '8bit' ? 'text-amber' : 'text-burgundy'
              }`}
            >
              {theme === '8bit' ? '[ CONNECT ]' : 'Connect'}
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded transition-colors ${
                    theme === '8bit'
                      ? 'bg-burgundy text-amber hover:bg-amber hover:text-ink'
                      : 'bg-burgundy/10 text-burgundy hover:bg-burgundy hover:text-white'
                  }`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p
              className={`text-sm ${
                theme === '8bit' ? 'text-cream' : 'text-stone'
              }`}
            >
              University of Alberta
              <br />
              Computer Science
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
            theme === '8bit' ? 'border-amber/30' : 'border-stone/30'
          }`}
        >
          <p
            className={`text-sm flex items-center gap-2 ${
              theme === '8bit' ? 'text-cream' : 'text-charcoal'
            }`}
          >
            {theme === '8bit' ? (
              <>
                © {currentYear} QENDRIM BEKA | MADE WITH{' '}
                <Heart className="w-4 h-4 text-amber fill-amber" /> &amp; CODE
              </>
            ) : (
              <>
                © {currentYear} Qendrim Beka. Made with{' '}
                <Heart className="w-4 h-4 text-burgundy fill-burgundy" /> and code.
              </>
            )}
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-sm uppercase tracking-wide transition-colors ${
              theme === '8bit'
                ? 'text-amber hover:text-gold'
                : 'text-burgundy hover:text-leather'
            }`}
            whileHover={{ y: -3 }}
          >
            {theme === '8bit' ? '^ BACK TO TOP ^' : '↑ Back to Top'}
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

