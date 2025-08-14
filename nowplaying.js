export default async function handler(req, res){
  const url = process.env.RADIOKING_STATUS_URL
  if (!url) {
    return res.json({ title: 'HOTMESS Radio Live', artist: '' })
  }
  try {
    const r = await fetch(url, { headers:{ 'Cache-Control':'no-cache' } })
    const j = await r.json()
    // try to map common fields; adjust to your JSON shape
    const title = j.title || j.now_playing?.song?.title || 'HOTMESS Radio Live'
    const artist = j.artist || j.now_playing?.song?.artist || ''
    return res.json({ title, artist })
  } catch (e) {
    return res.json({ title: 'HOTMESS Radio Live', artist: '' })
  }
}
