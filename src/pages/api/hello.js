// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    message: 'Hello from HOTMESS!',
    tagline: 'Always too much, never enough.',
    timestamp: new Date().toISOString()
  })
}