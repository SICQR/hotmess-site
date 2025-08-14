import { useState } from 'react'
import './NavBar.css'

export default function NavBar(){
  const [open,setOpen]=useState(false)
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="logo" href="/">HOT<span>MESS</span></a>
        <nav className={`links ${open?'open':''}`}>
          <a href="#shop">Shop</a>
          <a href="#radio">Radio</a>
          <a href="#drops">Drops</a>
          <a href="#care">HNH MESS</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="burger" aria-label="Menu" onClick={()=>setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}