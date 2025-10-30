// src/components/MobileAudioBar.tsx
'use client';
import RadioPlayer from '@/components/RadioPlayer';

export default function MobileAudioBar() {
  // Hidden ≥640px (desktop/tablet); visible on small/mobile
  return (
    <div className="sm:hidden fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-screen-md px-3 pb-3">
        <div className="rounded-t-2xl border-4 border-white/10 bg-black/70 backdrop-blur p-3 shadow-soft">
          <RadioPlayer title="HOTMESS Radio" className="w-full" />
        </div>
      </div>
    </div>
  );
}