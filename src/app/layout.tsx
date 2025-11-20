import type { Metadata } from 'next';
import './globals.css';
import { ViewModeProvider } from '@/contexts/ViewModeContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'Qendrim Beka - Portfolio',
  description: 'Portfolio of Qendrim Beka - Competitor and Builder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ViewModeProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ViewModeProvider>
      </body>
    </html>
  );
}

