'use client'

import { useState, useRef, useEffect } from 'react'
import QRCode from 'qrcode'

const TARGET_OPTIONS = [
  { value: 'radio', label: 'Radio Station' },
  { value: 'shop', label: 'Shop Collections' },
  { value: 'rooms', label: 'Community Rooms' },
  { value: 'hand-in-hand', label: 'Care & Support' },
  { value: 'drop', label: 'Latest Drops' },
  { value: 'lookbook', label: 'Editorial Lookbook' },
  { value: 'label', label: 'RAW CONVICT Records' }
]

interface QRConfig {
  target: string
  affiliateId: string
  campaign?: string
  medium?: string
}

export function QRCodeGenerator() {
  const [config, setConfig] = useState<QRConfig>({
    target: 'shop',
    affiliateId: '',
    campaign: '',
    medium: 'qr'
  })
  const [qrCode, setQrCode] = useState<string>('')
  const [shortUrl, setShortUrl] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateQRCode = async () => {
    if (!config.affiliateId.trim()) {
      alert('Please enter your affiliate ID')
      return
    }

    setLoading(true)
    
    try {
      // Create UTM parameters
      const params = new URLSearchParams({
        utm_source: 'affiliate',
        utm_medium: config.medium || 'qr',
        utm_campaign: config.campaign || 'general',
        utm_term: config.affiliateId,
        ref: config.affiliateId,
        qr: '1'
      })
      
      // Create target URL
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hotmess-ldn.vercel.app'
      const targetUrl = `${baseUrl}/${config.target}?${params.toString()}`
      
      // Generate short URL
      const shortResponse = await fetch('/api/utm/append', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: targetUrl, affiliateId: config.affiliateId })
      })
      
      if (shortResponse.ok) {
        const { shortCode } = await shortResponse.json()
        const shortUrlGenerated = `${baseUrl}/t/${shortCode}`
        setShortUrl(shortUrlGenerated)
        
        // Generate QR code
        const qrDataUrl = await QRCode.toDataURL(shortUrlGenerated, {
          errorCorrectionLevel: 'M',
          type: 'image/png',
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          },
          width: 256
        })
        
        setQrCode(qrDataUrl)
        
        // Draw on canvas with crown overlay
        if (canvasRef.current) {
          const canvas = canvasRef.current
          const ctx = canvas.getContext('2d')
          if (ctx) {
            canvas.width = 300
            canvas.height = 340
            
            // Clear canvas
            ctx.fillStyle = '#FFFFFF'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            
            // Draw QR code
            const img = new Image()
            img.onload = () => {
              ctx.drawImage(img, 22, 22, 256, 256)
              
              // Draw crown overlay (simple crown shape)
              ctx.fillStyle = '#FF5300'
              ctx.beginPath()
              // Crown shape - simplified
              ctx.moveTo(140, 295)
              ctx.lineTo(150, 285)
              ctx.lineTo(160, 295)
              ctx.lineTo(150, 305)
              ctx.closePath()
              ctx.fill()
              
              // Add text
              ctx.fillStyle = '#000000'
              ctx.font = 'bold 12px Arial'
              ctx.textAlign = 'center'
              ctx.fillText('HOTMESS LDN', 150, 325)
              ctx.font = '10px Arial'
              ctx.fillText('Scan to join', 150, 337)
            }
            img.src = qrDataUrl
          }
        }
      }
    } catch (error) {
      console.error('Error generating QR code:', error)
      alert('Failed to generate QR code. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const downloadQR = () => {
    if (canvasRef.current) {
      const link = document.createElement('a')
      link.download = `hotmess-qr-${config.affiliateId}-${config.target}.png`
      link.href = canvasRef.current.toDataURL()
      link.click()
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-2 gap-8">
        {/* Configuration Form */}
        <div className="card">
          <h3 className="mb-6">Configure Your QR Code</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-2">Target Page</label>
              <select
                value={config.target}
                onChange={(e) => setConfig(prev => ({ ...prev, target: e.target.value }))}
                className="w-full p-3 bg-black border border-white/20 rounded text-white"
              >
                {TARGET_OPTIONS.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">Affiliate ID</label>
              <input
                type="text"
                placeholder="Enter your unique affiliate ID"
                value={config.affiliateId}
                onChange={(e) => setConfig(prev => ({ ...prev, affiliateId: e.target.value }))}
                className="w-full p-3 bg-black border border-white/20 rounded text-white placeholder-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">Campaign Name (Optional)</label>
              <input
                type="text"
                placeholder="e.g., instagram-story, flyer-drop"
                value={config.campaign}
                onChange={(e) => setConfig(prev => ({ ...prev, campaign: e.target.value }))}
                className="w-full p-3 bg-black border border-white/20 rounded text-white placeholder-gray-400"
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2">Medium</label>
              <select
                value={config.medium}
                onChange={(e) => setConfig(prev => ({ ...prev, medium: e.target.value }))}
                className="w-full p-3 bg-black border border-white/20 rounded text-white"
              >
                <option value="qr">QR Code</option>
                <option value="print">Print Material</option>
                <option value="digital">Digital Display</option>
                <option value="social">Social Media</option>
              </select>
            </div>
            
            <button
              onClick={generateQRCode}
              disabled={loading}
              className="w-full btn btn-primary"
            >
              {loading ? 'Generating...' : 'Generate QR Code'}
            </button>
          </div>
        </div>
        
        {/* QR Code Preview */}
        <div className="card text-center">
          <h3 className="mb-6">Your QR Code</h3>
          
          {qrCode ? (
            <div className="space-y-4">
              <canvas
                ref={canvasRef}
                className="mx-auto border border-white/20 rounded"
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              
              {shortUrl && (
                <div className="text-sm">
                  <p className="opacity-75 mb-2">Short URL:</p>
                  <code className="bg-black/40 px-3 py-2 rounded text-accent break-all">
                    {shortUrl}
                  </code>
                </div>
              )}
              
              <div className="flex gap-3 justify-center">
                <button onClick={downloadQR} className="btn btn-secondary">
                  Download PNG
                </button>
                <button onClick={downloadQR} className="btn btn-secondary">
                  Download SVG
                </button>
              </div>
              
              <p className="text-xs opacity-75">
                Crown overlay included. ECC Level M for optimal scanning.
              </p>
            </div>
          ) : (
            <div className="py-12 opacity-50">
              <div className="text-6xl mb-4">📱</div>
              <p>Configure and generate your QR code to see preview</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}