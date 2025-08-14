export default function Footer(){
  return (
    <footer className="hm-footer">
      <div className="container grid" style={{gridTemplateColumns:'1fr 1fr'}}>
        <div>
          <div className="hm-logo"><span className="crown">👑</span> HOTMESS LDN</div>
          <p className="small">Always Too Much, Never Enough.</p>
        </div>
        <div style={{textAlign:'right'}}>
          <a href="/legal/privacy" className="small">Privacy</a> &nbsp;|&nbsp; 
          <a href="/legal/terms" className="small">Terms</a> &nbsp;|&nbsp; 
          <a href="/legal/returns" className="small">Returns</a>
          <p className="small">© {new Date().getFullYear()} HOTMESS London</p>
        </div>
      </div>
    </footer>
  )
}
