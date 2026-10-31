import { useState } from 'react'
import { certificates } from '../data/certificates'
const F=['All','Internships','Courses','Events']
export default function Certificates(){
  const [f,setF]=useState('All'),[big,setBig]=useState(null)
  const list=certificates.filter(c=>f==='All'||c.type===f)
  return <><div className="filters" role="group" aria-label="Filter certificates">{F.map(x=><button key={x} aria-pressed={f===x} className={f===x?'on':''} onClick={()=>setF(x)}>{x}</button>)}</div>
    {big&&<div className="preview"><button className="btn" onClick={()=>setBig(null)}>Close preview</button><img src={big.image} alt={big.title+' certificate'}/></div>}
    <div className="grid">{list.map(c=><article className="box cert" key={c.id}>
      <button className="thumb" onClick={()=>setBig(c)} aria-label={'Preview '+c.title}><img src={c.image} alt="" loading="lazy"/></button>
      <span className="badge">{c.type}</span><h3>{c.title}</h3><p className="mut">{c.sub}</p><p>{c.issuer}</p><p className="mut">{c.date}</p>
      {c.cid&&<p className="mut idl">ID: {c.cid}</p>}{c.verify&&<a className="btn y" href={c.verify} target="_blank" rel="noreferrer">Verify</a>}</article>)}</div></>
}
