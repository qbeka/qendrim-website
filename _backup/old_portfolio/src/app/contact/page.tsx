'use client';

import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen pt-16 pb-20">
        <Contact />
      </main>
    </div>
  );
}

