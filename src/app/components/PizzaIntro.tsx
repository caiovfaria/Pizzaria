import {useEffect,useRef} from 'react';
export default function PizzaIntro({done}:{done:()=>void}){
  const dialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{
    const reduced=matchMedia('(prefers-reduced-motion: reduce)');if(reduced.matches){done();return}
    const previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
    dialog.current?.showModal();const timer=setTimeout(done,2900);
    const change=()=>{if(reduced.matches)done()};reduced.addEventListener('change',change);
    return()=>{clearTimeout(timer);reduced.removeEventListener('change',change);dialog.current?.close();document.body.style.overflow=previousOverflow};
  },[done]);
  return <dialog ref={dialog} className="pizza-intro" aria-label="Abertura Fornalha" onCancel={done}>
    <span className="intro-brand">Fornalha<span>PIZZARIA ARTESANAL</span></span>
    <svg viewBox="0 0 440 330" className="pizza-scene" aria-hidden="true">
      <defs>
        <radialGradient id="crust"><stop stopColor="#eab772"/><stop offset=".8" stopColor="#cb813f"/><stop offset="1" stopColor="#a8582d"/></radialGradient>
        <radialGradient id="cheese"><stop stopColor="#f5d083"/><stop offset="1" stopColor="#e5ad56"/></radialGradient>
        <linearGradient id="steel"><stop stopColor="#8d9696"/><stop offset=".45" stopColor="#fff"/><stop offset=".7" stopColor="#c4cecd"/><stop offset="1" stopColor="#687576"/></linearGradient>
        <clipPath id="top-half"><rect width="440" height="166"/></clipPath><clipPath id="bottom-half"><rect y="166" width="440" height="164"/></clipPath>
        <g id="whole-pizza"><circle cx="220" cy="166" r="115" fill="url(#crust)"/><circle cx="220" cy="166" r="101" fill="#b94b31"/><circle cx="220" cy="166" r="95" fill="url(#cheese)"/>
          {[[179,111],[239,100],[279,144],[258,213],[198,229],[150,179],[214,161]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="17" fill="#a6402b"/><circle cx={x-4} cy={y-5} r="3" fill="#df8d59"/><circle cx={x+6} cy={y+4} r="2" fill="#f0b273"/></g>)}
          {[[197,88],[286,187],[175,204],[236,246],[145,135]].map(([x,y],i)=><ellipse key={i} cx={x} cy={y} rx="6" ry="13" fill="#52613c" transform={`rotate(${i*43} ${x} ${y})`}/>)}
          {[[209,115],[248,182],[172,155],[217,203],[264,119],[190,252]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="3" fill="#ac6d33"/>)}
        </g>
      </defs>
      <ellipse cx="220" cy="292" rx="117" ry="9" fill="#382c22" opacity=".1"/>
      <g className="pizza-half pizza-half-top"><g clipPath="url(#top-half)"><use href="#whole-pizza"/></g></g>
      <g className="pizza-half pizza-half-bottom"><g clipPath="url(#bottom-half)"><use href="#whole-pizza"/></g></g>
      <g className="pizza-cutter"><path d="M0 145 L-6 116 L-41 77" stroke="#7a8180" strokeWidth="9" strokeLinecap="round"/><path d="M-43 75 L-65 49" stroke="#8e382b" strokeWidth="20" strokeLinecap="round"/>
        <g className="cutter-wheel"><circle cx="0" cy="140" r="26" fill="url(#steel)" stroke="#66716f" strokeWidth="2"/><path d="M-18 140 H18 M0 122 V158" stroke="#a5b0ad" opacity=".65"/><circle cx="0" cy="140" r="5" fill="#737c78"/></g>
      </g>
    </svg><p role="status">Só mais um corte.</p><button type="button" className="intro-skip" onClick={done}>Ir para o site</button>
  </dialog>;
}
