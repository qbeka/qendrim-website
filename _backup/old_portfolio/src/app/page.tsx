'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { useTheme } from '@/contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
      </main>
    </div>
  );
}

