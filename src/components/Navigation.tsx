'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useViewMode } from '@/contexts/ViewModeContext';
import { Gamepad2, Menu, X, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { setViewMode } = useViewMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Involvement', href: '#involvement' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
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
          <a href="#about">
            <div
              className={`text-xl font-bold cursor-pointer transition-opacity hover:opacity-70 ${
                theme === '8bit' ? 'text-amber bit-8-text bit-8-small' : 'text-burgundy'
              }`}
            >
              {theme === '8bit' ? '[ Q.B. ]' : 'Q.B.'}
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                <div
                  className={`px-4 py-2 rounded text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    theme === '8bit'
                      ? 'bit-8-small text-cream hover:bg-burgundy/50 hover:text-amber'
                      : 'text-charcoal hover:bg-burgundy/10'
                  }`}
                >
                  {item.label}
                </div>
              </a>
            ))}
          </div>

          {/* Theme & Mode Toggle Buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setViewMode('terminal')}
              className={`p-2.5 rounded border-2 transition-all ${
                theme === '8bit'
                  ? 'border-amber text-amber hover:bg-amber hover:text-ink'
                  : 'border-stone text-stone hover:bg-stone hover:text-white'
              }`}
              aria-label="Switch to terminal mode"
              title="Terminal Mode"
            >
              <Terminal className="w-5 h-5" />
            </button>
            
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded border-2 transition-all ${
                theme === '8bit'
                  ? 'border-amber bg-burgundy text-amber bit-8-border'
                  : 'border-burgundy text-burgundy hover:bg-burgundy hover:text-white'
              }`}
              aria-label="Toggle 8-bit theme"
              title="8-Bit Mode"
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
              {navItems.map((item) => (
                <a key={item.label} href={item.href}>
                  <div
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                      theme === '8bit'
                        ? 'bit-8-small text-cream hover:bg-burgundy hover:text-amber'
                        : 'text-charcoal hover:bg-burgundy/10'
                    }`}
                  >
                    {item.label}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

