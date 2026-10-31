import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Modal from './components/Modal'
import ProjectGallery from './components/ProjectGallery'
import Skills from './components/Skills'
import { Timeline, Achievements, Learning } from './components/Experience'
import Certificates from './components/Certificates'
import { Contact, Resume } from './components/Contact'
const ABOUT=<><p>Hey, I'm Renuka Bagade!</p><p>I'm a third-year engineering student at JSPM's Rajarshi Shahu College of Engineering, passionate about software development, problem-solving and exploring emerging technologies.</p><p>I enjoy transforming ideas into practical solutions through code. My interests span full-stack development, artificial intelligence, data analytics and data structures and algorithms.</p><p>Beyond development, I actively contribute to the tech community through leadership, collaborative projects and coding initiatives.</p><p>I'm continuously learning, building and challenging myself to become a better engineer.</p>
<dl className="facts"><dt>Location</dt><dd>Pune, Maharashtra, India</dd><dt>Education</dt><dd>B.Tech, Computer Science and Business Systems</dd><dt>Interests</dt><dd>Software Development, AI/ML, DSA, Cloud Computing</dd><dt>Hobbies</dt><dd>Singing and Drawing</dd><dt>Languages</dt><dd>English, Hindi, Marathi</dd></dl></>
const P={projects:['Selected Projects',<ProjectGallery/>,1],about:['About Me',ABOUT],resume:['Resume',<Resume/>],toolkit:['Toolkit',<Skills/>,1],
 experience:['Leadership & Experience',<Timeline/>],achievements:['Achievements',<Achievements/>],learning:['Currently Learning',<Learning/>],certificates:['Certificates',<Certificates/>,1],contact:['Contact',<Contact/>]}
export default function App(){
  const [open,setOpen]=useState(null),[ready,setReady]=useState(false),[origin,setOrigin]=useState(null)
  const [reduced,setReduced]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches)
  useEffect(()=>{const t=setTimeout(()=>setReady(true),2400);const m=matchMedia('(prefers-reduced-motion: reduce)');const f=()=>setReduced(m.matches);m.addEventListener('change',f);return()=>{clearTimeout(t);m.removeEventListener('change',f)}},[])
  const openAt=(id,el)=>{if(el){const b=el.getBoundingClientRect();setOrigin([b.left+b.width/2,b.top+b.height/2])}else setOrigin(null);setOpen(id)}
  const p=open&&P[open]
  return <div className={ready?'ready':''}>{!ready&&<div className="loader" role="status"><div><p style={{'--n':0}}>RENUKA-OS v1.0</p><p style={{'--n':1}}>&gt; memory check ... OK</p><p style={{'--n':2}}>&gt; loading projects ... OK</p><p style={{'--n':3}}>&gt; mounting keyboard ... OK</p><p style={{'--n':4}}>&gt; starting PORTFOLIO.EXE<span className="cursor"/></p></div></div>}
    <Navbar onOpen={openAt}/><Hero onOpen={openAt} dialogOpen={!!open} reduced={reduced}/><Marquee/>
    {p&&<Modal key={open} title={p[0]} wide={p[2]} origin={origin} onClose={()=>setOpen(null)}>{p[1]}</Modal>}</div>
}
