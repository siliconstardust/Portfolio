const pct=(k,i)=>({left:(k.x-k.w/2)/1315*100+'%',top:(k.y-k.h/2)/1196*100+'%',width:k.w/1315*100+'%',height:k.h/1196*100+'%','--d':i})
export default function Keycap({k,i,beck,pressed,hop,onOpen,onHover}){
  const cls=`keycap ${k.c}${k.wide?' wide':''}${pressed?' pressed':''}${hop?' hop':''}${beck?' beckon':''}`
  return <div className="keyslot" style={pct(k,i)}>
    <button className={cls} aria-label={`${k.cap.replace(' ↵','')}: ${k.d}`} onClick={e=>onOpen(k.id,e.currentTarget)}
      onMouseEnter={()=>onHover(k)} onFocus={()=>onHover(k)} onMouseLeave={()=>onHover(null)} onBlur={()=>onHover(null)}>
      <span className="skirt"/><span className="top"><b aria-hidden="true">{k.l}</b><i>{k.cap}</i></span></button></div>
}
