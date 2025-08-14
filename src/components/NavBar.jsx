import { useState } from 'react'
import Link from 'next/link'

export default function NavBar(){
  const [open,setOpen]=useState(false)
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">HOT<span>MESS</span></Link>
        <nav className={`links ${open?'open':''}`}>
          <a href="#shop">Shop</a>
          <a href="#radio">Radio</a>
          <a href="#drops">Drops</a>
          <a href="#care">HNH MESS</a>
          <Link href="/contact">Contact</Link>
        </nav>
        <button className="burger" aria-label="Menu" onClick={()=>setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}