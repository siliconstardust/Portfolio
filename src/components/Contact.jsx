import { useEffect, useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { PROFILE } from '../data/content'
export function Contact(){
  const [ok,setOk]=useState(false)
  const copy=async()=>{try{await navigator.clipboard.writeText(PROFILE.email);setOk(true);setTimeout(()=>setOk(false),1800)}catch{window.prompt('Copy email:',PROFILE.email)}}
  const S=[['LinkedIn','linkedin'],['GitHub','github'],['LeetCode','leetcode'],['Codeforces','codeforces'],['Codolio','codolio']]
  return <><p className="big">Have an idea? <em>Let's build something.</em></p>
    <div className="links">{PROFILE.email?<><a className="btn y" href={'mailto:'+PROFILE.email}>{PROFILE.email}</a>
      <button className="btn" onClick={copy}>{ok?<Check size={16}/>:<Copy size={16}/>} {ok?'Copied':'Copy email'}</button></>:<span className="mut">Add your email in src/data/content.js</span>}</div>
    <div className="links">{S.map(([n,k])=>PROFILE[k]?<a key={k} className="btn" href={PROFILE[k]} target="_blank" rel="noreferrer">{n}</a>:<span key={k} className="badge">{n}: not added yet</span>)}</div></>
}
export function Resume(){
  const [has,setHas]=useState(null)
  useEffect(()=>{fetch(PROFILE.resume,{method:'HEAD'}).then(r=>setHas(r.ok&&(r.headers.get('content-type')||'').includes('pdf'))).catch(()=>setHas(false))},[])
  if(has) return <><div className="links"><a className="btn y" href={PROFILE.resume} target="_blank" rel="noreferrer">View Resume</a><a className="btn" href={PROFILE.resume} download>Download Resume</a></div>
    <iframe className="pdf" title="Resume preview" src={PROFILE.resume}/></>
  return <p className="mut">{has===null?'Checking for resume…':'Placeholder: no resume added yet. Put your PDF at public/resume.pdf and it will appear here.'}</p>
}
