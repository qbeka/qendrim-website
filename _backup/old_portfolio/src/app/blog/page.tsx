'use client';

import Navigation from '@/components/Navigation';
import Blog from '@/components/Blog';
import { useTheme } from '@/contexts/ThemeContext';

export default function BlogPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Blog />
      </main>
    </div>
  );
}

