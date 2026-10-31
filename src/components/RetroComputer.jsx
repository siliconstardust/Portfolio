import { useEffect, useRef, useState } from 'react'
import Keycap from './Keycap'
import TerminalScreen from './TerminalScreen'
import { KEYS } from '../data/content'
export default function RetroComputer({onOpen,dialogOpen,reduced}){
  const [hover,setHover]=useState(null),[typed,setTyped]=useState(''),[pressed,setPressed]=useState({}),[hop,setHop]=useState(-1),[img,setImg]=useState(true),[seen,setSeen]=useState(false),wrap=useRef()
  const tm=useRef(),busy=useRef(false); busy.current=!!hover||!!typed||dialogOpen
  const press=(idx)=>{setPressed(p=>({...p,[idx]:1}));setTimeout(()=>setPressed(p=>{const q={...p};delete q[idx];return q}),160)}
  useEffect(()=>{
    if(reduced) return
    const iv=setInterval(()=>{ if(busy.current||document.hidden) return
      KEYS.forEach((_,i)=>{setTimeout(()=>setHop(i),i*460);setTimeout(()=>setHop(-1),i*460+440)}) },10000)
    return()=>clearInterval(iv)},[reduced])
  useEffect(()=>{
    const f=e=>{
      if(dialogOpen||e.metaKey||e.ctrlKey||e.altKey) return
      const tag=e.target.tagName,inCtl=tag==='BUTTON'||tag==='A'
      let nt=typed
      if(e.key==='Backspace') nt=typed.slice(0,-1)
      else if(e.key==='Enter'){ if(inCtl) return; setTyped(''); press(8); return }
      else if(e.key.length===1&&!(e.key===' '&&inCtl)){ nt=(typed+e.key).slice(-28); KEYS.forEach((k,i)=>{if(k.l.toLowerCase()===e.key.toLowerCase()) press(i)}); if(e.key===' ') e.preventDefault() }
      else return
      setTyped(nt); clearTimeout(tm.current); tm.current=setTimeout(()=>setTyped(''),3500)
    }
    window.addEventListener('keydown',f); return()=>window.removeEventListener('keydown',f)},[typed,dialogOpen])
  const tilt=e=>{if(reduced||e.pointerType!=='mouse')return;const r=wrap.current.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;wrap.current.style.setProperty('--ry',x*8+'deg');wrap.current.style.setProperty('--rx',-y*6+'deg')}
  const flat=()=>{wrap.current.style.setProperty('--ry','0deg');wrap.current.style.setProperty('--rx','0deg')}
  const override=typed?{t:'YOU',h:typed,d:"You're typing on Renuka's keyboard."}:hover?{t:'EXPLORE',h:hover.cap.replace(' ↵','')+'.',d:hover.d}:null
  return <div className="device-wrap" ref={wrap} onPointerMove={tilt} onPointerLeave={flat}><div className="device">
    <div className="glow"/>
    {img?<img className="device-img" src="/retro-device.png" alt="Yellow retro computer with a dark screen and nine mechanical keyboard switches" onError={()=>setImg(false)}/>
        :<div className="fallback" role="img" aria-label="Illustrated yellow retro computer"><i className="f-screen"/><i className="f-deck"/></div>}
    <TerminalScreen override={override} reduced={reduced}/>
    {KEYS.map((k,i)=><Keycap key={i} i={i} k={k} beck={i===0&&!seen} pressed={pressed[i]} hop={hop===i} onOpen={onOpen} onHover={k=>{setHover(k);if(k)setSeen(true)}}/>)}
  </div><p className="hint">HOVER A KEY · OR JUST START <kbd>TYPING</kbd></p></div>
}
