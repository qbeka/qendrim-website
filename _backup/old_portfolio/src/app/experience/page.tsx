'use client';

import Navigation from '@/components/Navigation';
import Experience from '@/components/Experience';
import { useTheme } from '@/contexts/ThemeContext';

export default function ExperiencePage() {
  const { theme } = useTheme();

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Experience />
      </main>
    </div>
  );
}

