import { EXPERIENCE, ACHIEVEMENTS, LEARNING } from '../data/content'
export const Timeline=()=><ol className="tl">{EXPERIENCE.map(e=><li key={e.o}><h3>{e.r} <em>{e.o}</em></h3>{e.pts.length>0&&<ul>{e.pts.map(p=><li key={p}>{p}</li>)}</ul>}</li>)}</ol>
export const Achievements=()=><ol className="tl">{ACHIEVEMENTS.map(a=><li key={a}><h3>{a}</h3></li>)}</ol>
export const Learning=()=><div className="grid">{LEARNING.map(([n,s])=><div className="box" key={n}><h3>{n}</h3><span className="badge">{s}</span></div>)}</div>
