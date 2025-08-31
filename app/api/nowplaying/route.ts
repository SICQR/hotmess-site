import { NextResponse } from 'next/server';
export const revalidate = 15;

export async function GET() {
  const url = process.env.RADIOKING_NOWPLAYING_URL;
  try {
    if (!url) throw new Error('no url');
    const r = await fetch(url, { cache: 'no-store' });
    if (!r.ok) throw new Error('bad status');
    const j = await r.json();
    const artist = j?.now?.artist ?? 'HOTMESS';
    const title  = j?.now?.title  ?? 'Live';
    return NextResponse.json({ artist, title });
  } catch {
    return NextResponse.json({ artist: 'HOTMESS', title: 'Live' });
  }
}