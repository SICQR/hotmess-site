import { useState } from 'react'
import styles from './NavBar.module.css'

export default function NavBar(){
  const [open,setOpen]=useState(false)
  return (
    <header className={styles.nav}>
      <div className={styles.navInner}>
        <a className={styles.logo} href="/">HOT<span>MESS</span></a>
        <nav className={`${styles.links} ${open?styles.open:''}`}>
          <a href="#shop">Shop</a>
          <a href="#radio">Radio</a>
          <a href="#drops">Drops</a>
          <a href="#care">HNH MESS</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className={styles.burger} aria-label="Menu" onClick={()=>setOpen(!open)}>
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}