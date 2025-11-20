'use client';

import Navigation from '@/components/Navigation';
import Projects from '@/components/Projects';
import { useTheme } from '@/contexts/ThemeContext';

export default function ProjectsPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Projects />
      </main>
    </div>
  );
}

