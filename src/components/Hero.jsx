import { Download } from 'lucide-react'
import RetroComputer from './RetroComputer'
const DO=[['Full-Stack ','Development'],['Problem ','Solving'],['AI / Machine ','Learning'],['Data ','Analytics'],['Cloud ','Technologies']]
export default function Hero({onOpen,dialogOpen,reduced}){
  return <main className="hero" id="top">
    <section className="intro"><p className="avail"><i/>AVAILABLE FOR OPPORTUNITIES</p>
      <h1>Hi, I'm<br/><em>Renuka.</em></h1><p className="sub">Developer with a curious mind, building meaningful digital experiences.</p>
      <p className="desc">I'm a Computer Science and Business Systems engineering student passionate about software development, problem-solving and exploring emerging technologies.</p>
      <div className="cta"><button className="btn y" onClick={e=>onOpen('projects',e.currentTarget)}>View My Work</button>
        <button className="btn" onClick={e=>onOpen('resume',e.currentTarget)}><Download size={16}/> Download Resume</button></div></section>
    <RetroComputer onOpen={onOpen} dialogOpen={dialogOpen} reduced={reduced}/>
    <aside className="what"><h2>WHAT I DO</h2><ul>{DO.map(([a,b])=><li key={b}>{a}<em>{b}</em></li>)}</ul></aside></main>
}
