'use client';

import Terminal from '@/components/Terminal';
import PortfolioView from '@/components/PortfolioView';
import { useViewMode } from '@/contexts/ViewModeContext';

export default function Home() {
  const { viewMode } = useViewMode();

  return viewMode === 'terminal' ? <Terminal /> : <PortfolioView />;
}

