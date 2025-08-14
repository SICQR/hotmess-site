export default async function handler(req, res){
  if (req.method !== 'POST') return res.status(405).json({ ok:false })
  // passthrough endpoint for Make.com or logging
  return res.json({ ok:true })
}
