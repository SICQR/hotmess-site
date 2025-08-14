export default function CareBlocks(){
  const items = [
    { title:'Harm Reduction', body:'Clear info on safer use, mixing risks, and emergency steps.'},
    { title:'Consent & Boundaries', body:'Yes means yes. No means no. Check in. Respect limits.'},
    { title:'Aftercare', body:'Hydrate, rest, nutrition, and support links. Hand N Hand Sundays.'},
    { title:'Mental Health', body:'Helplines, peer groups, crisis resources for queer men.'}
  ]
  return (
    <div className="grid grid-2">
      {items.map((i,idx)=>(
        <div key={idx} className="card">
          <div className="inner">
            <h3>{i.title}</h3>
            <p className="small">{i.body}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
