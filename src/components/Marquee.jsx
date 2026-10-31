const T='BUILDING PROJECTS ✦ SOLVING PROBLEMS ✦ LEARNING EVERY DAY ✦ EXPLORING TECHNOLOGY ✦ '
export default function Marquee(){return <div className="marquee" aria-hidden="true"><div>{[0,1,2,3].map(i=><span key={i}>{T}</span>)}</div></div>}
