const L=[['Work','projects'],['About','about'],['Experience','experience'],['Skills','toolkit']]
export default function Navbar({onOpen}){
  return <header className="nav"><a className="logo" href="#top">REN<span>uka</span>.</a>
    <nav aria-label="Primary">{L.map(([t,id])=><button key={id} onClick={e=>onOpen(id,e.currentTarget)}>{t}</button>)}</nav>
    <div className="nav-r"><button onClick={e=>onOpen('resume',e.currentTarget)}>Resume</button><button className="talk" onClick={e=>onOpen('contact',e.currentTarget)}>Let's Connect ↗</button></div></header>
}
