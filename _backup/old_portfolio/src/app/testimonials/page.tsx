'use client';

import Navigation from '@/components/Navigation';
import Testimonials from '@/components/Testimonials';
import { useTheme } from '@/contexts/ThemeContext';

export default function TestimonialsPage() {
  const { theme } = useTheme();

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen pt-16">
        <Testimonials />
      </main>
    </div>
  );
}

