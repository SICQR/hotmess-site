export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok:false })
  return res.json({ ok:true })
}