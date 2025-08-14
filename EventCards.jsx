export default function EventCards(){
  const events = [
    { title:'MAD BEAR WEEK — Torremolinos', body:'Limited drops, live DJ sets, and affiliate QR hunts.'},
    { title:'Hand N Hand Sundays', body:'HNH MESS sponsor. Care, aftercare, slow beats, open talk.'}
  ]
  return (
    <div className="grid grid-2">
      {events.map((e,idx)=>(
        <div key={idx} className="card">
          <div className="inner">
            <h3>{e.title}</h3>
            <p className="small">{e.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
