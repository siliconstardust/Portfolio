import { SKILLS } from '../data/content'
export default function Skills(){return <div className="grid">{SKILLS.map(([c,l])=><section key={c} className="box"><h3>{c}</h3>
  <ul className="chips">{l.map(([n,lv])=><li key={n}>{n}<small>{lv}</small></li>)}</ul></section>)}</div>}
