import { PROJECTS } from '../data/content'
export default function ProjectGallery(){
  return <div className="grid">{PROJECTS.map((p,i)=><article className="pcard" key={p.n}>
    <div className="pimg" style={{'--h':i*70}}>{p.img?<img src={p.img} alt={p.n+' screenshot'}/>:<span>Screenshot placeholder</span>}</div>
    <h3>{p.n}</h3><p>{p.desc}</p>
    <div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
    <h4>Key features</h4><ul>{p.feats.map(f=><li key={f}>{f}</li>)}</ul>
    <div className="links">{p.github&&<a className="btn" href={p.github} target="_blank" rel="noreferrer">GitHub</a>}{p.demo&&<a className="btn y" href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
      {!p.github&&!p.demo&&<span className="mut">Links coming soon</span>}</div></article>)}</div>
}
