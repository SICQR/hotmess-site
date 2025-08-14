export default function Footer(){
  return (
    <footer>
      <div className="container" id="contact">
        <div style={{display:'flex',justifyContent:'space-between',gap:20,flexWrap:'wrap'}}>
          <div><strong>HOTMESS LDN</strong><br/>Always too much, never enough.</div>
          <div>© {new Date().getFullYear()} HOTMESS. All rights served filthy.</div>
        </div>
      </div>
    </footer>
  )
}