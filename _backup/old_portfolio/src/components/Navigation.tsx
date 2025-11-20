'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Gamepad2, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience' },
    { label: 'Projects', href: '/projects' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Involvement', href: '/involvement' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        theme === '8bit' ? 'bg-ink bit-8-bg' : 'bg-parchment/95 backdrop-blur-sm'
      } border-b ${theme === '8bit' ? 'border-burgundy' : 'border-burgundy/20'}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div
              className={`text-xl font-bold cursor-pointer transition-opacity hover:opacity-70 ${
                theme === '8bit' ? 'text-amber bit-8-text bit-8-small' : 'text-burgundy'
              }`}
            >
              {theme === '8bit' ? '[ Q.B. ]' : 'Q.B.'}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.label} href={item.href}>
                  <div
                    className={`px-4 py-2 rounded text-sm uppercase tracking-wider transition-all cursor-pointer ${
                      theme === '8bit'
                        ? `bit-8-small ${isActive ? 'bg-burgundy text-amber' : 'text-cream hover:bg-burgundy/50 hover:text-amber'}`
                        : `${isActive ? 'bg-burgundy text-white' : 'text-charcoal hover:bg-burgundy/10'}`
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Theme Toggle Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded border-2 transition-all ${
                theme === '8bit'
                  ? 'border-amber bg-burgundy text-amber bit-8-border'
                  : 'border-burgundy text-burgundy hover:bg-burgundy hover:text-white'
              }`}
              aria-label="Toggle 8-bit theme"
            >
              <Gamepad2 className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 ${
                theme === '8bit' ? 'text-amber' : 'text-burgundy'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
          {mobileMenuOpen && (
          <div className="md:hidden border-t border-stone/20 py-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link key={item.label} href={item.href}>
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                        theme === '8bit'
                          ? `bit-8-small ${isActive ? 'bg-burgundy text-amber' : 'text-cream hover:bg-burgundy hover:text-amber'}`
                          : `${isActive ? 'bg-burgundy text-white' : 'text-charcoal hover:bg-burgundy/10'}`
                      }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

