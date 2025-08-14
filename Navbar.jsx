import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  return (
    <header className="hm-header">
      <div className="container hm-header-inner">
        <Link href="/" className="hm-logo"><span className="crown">👑</span> HOTMESS LDN</Link>
        <nav className="hm-nav">
          <Link href="/shop">Shop</Link>
          <Link href="/radio">Radio</Link>
          <Link href="/join">Join</Link>
          <Link href="/care">Care</Link>
          <Link href="/events">Events</Link>
        </nav>
        <button className="hm-menu btn btn-secondary" onClick={()=>setOpen(!open)}>{open?'Close':'Menu'}</button>
      </div>
      {open && (
        <div className="container" style={{padding:'0 1rem 1rem'}}>
          <nav className="grid" style={{gridTemplateColumns:'1fr'}}>
            <Link href="/shop">Shop</Link>
            <Link href="/radio">Radio</Link>
            <Link href="/join">Join</Link>
            <Link href="/care">Care</Link>
            <Link href="/events">Events</Link>
          </nav>
        </div>
      )}
    </header>
  )
}
