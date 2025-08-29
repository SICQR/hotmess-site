"use client";
import { useEffect, useRef, useState } from "react";

export function RadioPlayer() {
  const src = process.env.NEXT_PUBLIC_RADIO_STREAM_URL || "";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    if (!playing) { el.pause(); return; }
    setError(null);
    el.play().catch(() => {
      setPlaying(false);
      setError("Tap play to listen");
    });
  }, [playing]);

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-black/85 backdrop-blur">
      <div className="container flex items-center gap-4 py-2">
        <span className="text-xs md:text-sm">LIVE • HOTMESS RADIO</span>
        <button className="btn btn--ghost text-xs md:text-sm" onClick={() => setPlaying(p => !p)}>
          {playing ? "Pause" : "Play"}
        </button>
        <span className="text-xs opacity-70">{error ?? (playing ? "Streaming" : "Tap play to listen")}</span>
        <audio ref={audioRef} src={src} preload="none" />
      </div>
    </div>
  );
}