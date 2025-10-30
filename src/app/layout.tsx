// src/app/layout.tsx
import '../styles/globals.css';
import PageFX from '@/components/fx/PageFX';
import MobileAudioBar from '@/components/MobileAudioBar';
import { Oswald } from 'next/font/google';

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata = {
  title: 'HOTMESS',
  description: 'Wear it. Stream it. Make it pay.',
  metadataBase: new URL('https://hotmess.london'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} bg-ink text-white`}> 
      <body>
        {children}
        {/* Route transition FX (accessible & performant) */}
        <PageFX mode="auto" />
        {/* Sticky audio bar — mobile only */}
        <MobileAudioBar />
      </body>
    </html>
  );
}