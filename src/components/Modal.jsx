import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
export default function Modal({title,onClose,children,wide,origin}){
  const r=useRef()
  useEffect(()=>{const d=r.current; if(!d||d.open) return
    d.showModal()
    if(origin){const b=d.getBoundingClientRect();d.style.setProperty('--dx',origin[0]-(b.left+b.width/2)+'px');d.style.setProperty('--dy',origin[1]-(b.top+b.height/2)+'px')}},[])
  return <dialog ref={r} className={'modal'+(wide?' wide':'')} onClose={onClose} aria-label={title}
    onClick={e=>{if(e.target===r.current) r.current.close()}}>
    <div className="modal-card"><header><h2>{title}</h2>
      <button className="close" onClick={()=>r.current.close()} aria-label="Close dialog"><X size={18}/> Close</button></header>
      <div className="modal-body">{children}</div></div></dialog>
}
