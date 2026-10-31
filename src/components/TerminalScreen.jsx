import { useEffect, useState } from 'react'
import { STORY } from '../data/content'
export default function TerminalScreen({override,reduced}){
  const [i,setI]=useState(0),[n,setN]=useState(0),[ph,setPh]=useState('type'),m=STORY[i]
  useEffect(()=>{
    if(reduced||override) return
    let t
    if(ph==='type'){ n<m.h.length ? t=setTimeout(()=>setN(n+1),(m.h[n]===' '?220:110)+Math.random()*80) : t=setTimeout(()=>setPh('hold'),300) }
    else if(ph==='hold') t=setTimeout(()=>setPh('del'),2800)
    else n>0 ? t=setTimeout(()=>setN(n-1),40) : (setI((i+1)%STORY.length),setPh('type'))
    return()=>clearTimeout(t)
  },[n,ph,i,override,reduced])
  useEffect(()=>{ if(reduced&&!override){const t=setTimeout(()=>setI(x=>(x+1)%STORY.length),3500);return()=>clearTimeout(t)} },[i,reduced,override])
  let tag=m.t,head,det
  if(override){tag=override.t;head=override.h;det=override.d}
  else if(reduced){head=m.h;det=m.d}
  else{head=m.h.slice(0,n);det=(n===m.h.length||ph==='hold')?m.d:''}
  return <div className="screen"><div className="screen-in">
    <div className="s-top"><span>RENuka / PORTFOLIO.EXE</span><span className="s-tag">{tag}</span></div>
    <div className="s-status"><span>ONLINE</span><span>EXPLORING</span><span>BUILDING</span></div>
    <div className="s-head">{'> '}{head}<span className="cursor"/></div><div className="s-det">{det}</div><div className="scan"/></div></div>
}
