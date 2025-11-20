'use client';

import Navigation from '@/components/Navigation';
import Involvement from '@/components/Involvement';
import { useTheme } from '@/contexts/ThemeContext';

export default function InvolvementPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Involvement />
      </main>
    </div>
  );
}

