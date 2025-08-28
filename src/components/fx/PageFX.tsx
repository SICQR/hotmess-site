// src/components/fx/PageFX.tsx
'use client';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import TearReveal from '@/components/fx/TearReveal';
import CrackFallaway from '@/components/fx/CrackFallaway';
import { routeFX } from '@/lib/fx.config';

type Mode = 'tear' | 'crack';
type PageFXProps = { mode?: Mode | 'auto' };

function pickEffect(pathname: string, fallback: Mode): Mode {
  // exact match
  if (routeFX[pathname]) return routeFX[pathname];
  // prefix match
  const hit = Object.keys(routeFX).find((k) => pathname.startsWith(k));
  return hit ? routeFX[hit] : fallback;
}

export default function PageFX({ mode = 'auto' }: PageFXProps) {
  const pathname = usePathname();
  const prev = useRef<string | null>(null);
  const [effect, setEffect] = useState<Mode | null>(null);

  useEffect(() => {
    if (prev.current === null) { prev.current = pathname; return; }
    let m: Mode;
    if (mode === 'auto') {
      // default bias when not configured
      const defaultBias: Mode = Math.random() > 0.5 ? 'tear' : 'crack';
      m = pickEffect(pathname || '/', defaultBias);
    } else {
      m = mode;
    }
    setEffect(m);
    prev.current = pathname;
  }, [pathname, mode]);

  const onDone = () => setEffect(null);

  return (
    <>
      <TearReveal show={effect === 'tear'} onDone={onDone} />
      <CrackFallaway show={effect === 'crack'} onDone={onDone} />
    </>
  );
}