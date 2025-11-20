'use client';

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ExperienceSection from '@/components/ExperienceSection';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Involvement from '@/components/Involvement';
import Contact from '@/components/Contact';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect } from 'react';

export default function PortfolioView() {
  const { theme } = useTheme();

  useEffect(() => {
    // Enable scrolling for portfolio mode
    document.documentElement.classList.remove('terminal-mode');
    document.documentElement.classList.add('portfolio-mode');
    
    return () => {
      document.documentElement.classList.remove('portfolio-mode');
    };
  }, []);

  return (
    <div className={theme === '8bit' ? 'bit-8' : ''}>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <ExperienceSection />
        <Projects />
        <Involvement />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

