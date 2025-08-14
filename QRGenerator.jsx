import { useEffect, useState, useRef } from 'react'
import QRCode from 'qrcode'

export default function QRGenerator(){
  const [refCode, setRefCode] = useState('daddy')
  const [dataUrl, setDataUrl] = useState('')
  const canvasRef = useRef(null)

  async function generate(){
    const url = `${window.location.origin}/?ref=${encodeURIComponent(refCode)}`
    const data = await QRCode.toDataURL(url, { margin:1, width: 512, color: { dark: '#000000', light: '#ffffff' } })
    setDataUrl(data)
  }
  useEffect(()=>{ generate() }, [])

  function download(){
    const a = document.createElement('a')
    a.href = dataUrl
    a.download = `hotmess-qr-${refCode}.png`
    a.click()
  }

  return (
    <div className="card">
      <div className="inner">
        <h3>Generate your affiliate QR</h3>
        <input value={refCode} onChange={e=>setRefCode(e.target.value)} placeholder="your-code" style={{padding:'.6rem', width:'100%'}} />
        <button className="btn btn-primary" onClick={generate} style={{marginTop:'.6rem'}}>Generate</button>
        {dataUrl && <img src={dataUrl} alt="QR" style={{marginTop:'.6rem', background:'#fff', padding:'10px', borderRadius:'10px'}} />}
        {dataUrl && <button className="btn btn-secondary" onClick={download} style={{marginTop:'.6rem'}}>Download</button>}
      </div>
    </div>
  )
}
